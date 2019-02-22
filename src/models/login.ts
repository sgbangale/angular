export class LoginRequest {
  user_name: string = '';
  password: string = '';
}

export class Token {
  token: string;
  user_name: string;
  first_name: string;
  last_name: string;
  role_code: string;
  iat: Number;
  exp: Number;
}


export class ViewRequest 
{
  filters:any;
  sortFields:string;
  removeColumns:string;
  first:Number;
  rows:Number;
}