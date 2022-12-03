import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CiboCreatePageComponent } from "./pages/cibi/cibo-create-page/cibo-create-page.component";
import { CiboEditPageComponent } from "./pages/cibi/cibo-edit-page/cibo-edit-page.component";
import { CiboDeletePageComponent } from "./pages/cibi/cibo-delete-page/cibo-delete-page.component";
import { CiboListPageComponent } from "./pages/cibi/cibo-list-page/cibo-list-page.component";
import { GiornoListPageComponent } from "./pages/giorni/giorno-list-page/giorno-list-page.component";
import { GiornoEditPageComponent } from "./pages/giorni/giorno-edit-page/giorno-edit-page.component";
import { GiornoCreatePageComponent } from "./pages/giorni/giorno-create-page/giorno-create-page.component";
import { GiornoDeletePageComponent } from "./pages/giorni/giorno-delete-page/giorno-delete-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomInterceptor } from "src/app/custom.interceptor";
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CiboCreatePageComponent,
    CiboEditPageComponent,
    CiboDeletePageComponent,
    CiboListPageComponent,
    GiornoListPageComponent,
    GiornoEditPageComponent,
    GiornoCreatePageComponent,
    GiornoDeletePageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
