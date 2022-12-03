import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CiboCreatePageComponent } from "src/app/pages/cibi/cibo-create-page/cibo-create-page.component";
import { CiboDeletePageComponent } from "src/app/pages/cibi/cibo-delete-page/cibo-delete-page.component";
import { CiboEditPageComponent } from "src/app/pages/cibi/cibo-edit-page/cibo-edit-page.component";
import { CiboListPageComponent } from "src/app/pages/cibi/cibo-list-page/cibo-list-page.component";
import { GiornoCreatePageComponent } from "src/app/pages/giorni/giorno-create-page/giorno-create-page.component";
import { GiornoDeletePageComponent } from "src/app/pages/giorni/giorno-delete-page/giorno-delete-page.component";
import { GiornoEditPageComponent } from "src/app/pages/giorni/giorno-edit-page/giorno-edit-page.component";
import { GiornoListPageComponent } from "src/app/pages/giorni/giorno-list-page/giorno-list-page.component";
import { HomePageComponent } from "src/app/pages/home-page/home-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent },
  {
    path: "cibi",
    children: [
      { path: "", component: CiboListPageComponent },
      { path: "create", component: CiboCreatePageComponent },
      { path: "edit/:id", component: CiboEditPageComponent },
      { path: "delete/:id", component: CiboDeletePageComponent },
    ],
  },
  {
    path: "giorni",
    children: [
      { path: "", component: GiornoListPageComponent },
      { path: "create", component: GiornoCreatePageComponent },
      { path: ":id/edit", component: GiornoEditPageComponent },
      { path: ":id/delete", component: GiornoDeletePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
