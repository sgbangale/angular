import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { merge, of } from "rxjs";
import { RequestService } from "src/app/services/request.service";
import { ViewRequest } from "src/models/login";
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from "@angular/material";
import {
  startWith,
  switchMap,
  map,
  catchError,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
import { SelectionModel } from "@angular/cdk/collections";
import { FormControl } from "@angular/forms";
import { EntityDetailsComponent } from '../entity-details/entity-details.component';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: "app-entity-list",
  templateUrl: "./entity-list.component.html",
  styleUrls: ["./entity-list.component.css"]
})
export class EntityListComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[];
  actualColumns: string[];
  selectedFilter = "";
  resultsLength = 0;
  selection = new SelectionModel<any>(true, []);
  dataSource: MatTableDataSource<any>;
  entity_code: string;
  filter: FormControl = new FormControl();
  
  constructor(
    private router: ActivatedRoute,
    private navigate: Router,
    private request: RequestService,
    private accountService : AccountService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    
    this.router.params.subscribe(parmas => {
      if ( this.accountService.getSessionValues('accessible_entities').indexOf(parmas["entity_code"]) == -1) {
        this.navigate.navigate(["/home/not-found"]);
      }
      this.entity_code = parmas["entity_code"];
    });
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.filter.valueChanges.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page, this.router.params)
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        startWith({}),
        switchMap(() => {
          let req: ViewRequest = {
            filters: {},
            sortFields: `${this.sort.direction === "desc" ? "-" : ""}${
              this.sort.active
            }`,
            removeColumns: "",
            first: this.paginator.pageIndex,
            rows: 10
          };

          return this.request.view(req, this.entity_code + "__view");
        }),
        map(data => {
          if (data.body.isSucess) {
            this.actualColumns = Object.keys(data.body.body.data[0]); // this must come from server to show the columns to the user grid.
            this.displayedColumns =  [ ...this.actualColumns,'Operations'];
            this.resultsLength = data.body.body.count;
          }
          return data.body.body.data;
        }),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe(data => (this.dataSource = new MatTableDataSource<any>(data)));
  }

  ngOnDestroy(): void {
    this.sort.sortChange.unsubscribe();
    this.paginator.page.unsubscribe();
  }

  details(obj:any)
  {
    const dialogRef = this.dialog.open(EntityDetailsComponent, {    
      disableClose : true,
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
