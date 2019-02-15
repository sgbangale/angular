import {
  NgModule,
  InjectionToken
}
from '@angular/core';

import {
  CommonModule
}
from '@angular/common';

import {
  environment
} from 'src/environments/environment';
export const APP_CONFIG = new InjectionToken < AppConfig > ('app.config');
export const APP_DI_CONFIG: AppConfig = {
  rootUrl: environment.rootUrl
}


export class AppConfig {
  rootUrl: string
}

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG,

      }

    ]
  }

) export class AppSettingsModule {}
