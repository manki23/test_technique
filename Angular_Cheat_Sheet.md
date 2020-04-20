# Angular Cheat Sheet
*Client side*
## Table of Contents
1. [Install Angular](#InstallAngular)
    - [Start Server](#StartServer)
2. [Routing and Navigation](#Routing_and_Navigation)
3. [Add the Angular 9 Service](#Service)
4. [Useful links](#Usefullinks)
***
## 1. Install Angular <a name="InstallAngular"></a>
``` bash
npm install -g @angular/cli
ng new Client (choose YES and SCSS)
cd Client
```
### Start Server <a name="StartServer"></a>
``` bash
ng serve --open
````
## 2. Routing and Navigation <a name="Routing_and_Navigation"></a>
``` bash
ng g component articles
ng g component articles-details
ng g component add-articles
ng g component edit-articles
```
Those components will automatically be registered to the app.module.ts.  
Next, open and edit `src/app/app-routing.module.ts` then add these imports.


## 3. Add the Angular 9 Service <a name="Service"></a>
All-access (POST, GET, PUT, DELETE) to the REST API will put in the Angular 9 Service.  
efore creating a service for REST API access, first, we have to install or register `HttpClientModule`.  
Open and edit `src/app/app.module.ts` then add these imports of FormsModule,
ReactiveFormsModule (@angular/forms) and HttpClientModule (@angular/common/http).
``` ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
```
We will use the type specifier to get a typed result object.  
For that, create a new Typescript file `src/app/cases.ts` then add these lines of Typescript codes.
``` ts
export class Articles {
    id: number;
    title: string;
    author: string;
    date: Date;
    content: string;
    image: string;
  }
```
Next, generate an Angular 9 service by typing this command.  
``` bash
ng g service api
```
Next, open and edit `src/app/api.service.ts` then add these imports.
``` ts
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Articles } from './articles';
```
Add these constants before the `@Injectable`.
``` ts
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/';
```
Inject the `HttpClient` module to the constructor.
``` ts
constructor(private http: HttpClient) { }
```

## Useful links <a name="Usefullinks"></a>
- https://angular.io/guide/setup-local
- https://www.djamware.com/post/5e435e84a8d0ef4300ffc5f6/angular-9-tutorial-learn-to-build-a-crud-angular-app-quickly
- https://www.codeproject.com/Articles/5255726/Building-and-Consuming-a-REST-API-with-Angular-9-S
- https://stackblitz.com/
