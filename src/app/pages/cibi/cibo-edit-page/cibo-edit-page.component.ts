import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CiboService } from "src/app/cibo.service";
import { Cibo } from "src/app/models/cibo";

@Component({
  selector: "app-cibo-edit-page",
  templateUrl: "./cibo-edit-page.component.html",
  styleUrls: ["./cibo-edit-page.component.css"],
})
export class CiboEditPageComponent implements OnInit {
  form: FormGroup;
  id?: number;
  loaded: boolean = false;

  constructor(
    private fb: FormBuilder,
    private ciboService: CiboService,
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) {
    this.activeRouter.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.form = this.fb.group({
      "name": this.fb.control("", {
        validators: [Validators.required],
      }),
      "price": this.fb.control(0, {
        validators: [Validators.min(0.01)],
      }),
    });
  }

  ngOnInit(): void {
    if (this.id != null) {
      this.ciboService.getSingle(this.id).subscribe({
        error: () => {
          this.router.navigate(["/cibi"]);
        },
        next: (valore: Cibo) => {
          if (valore) {
            this.loaded = true;
            this.form.patchValue({ ...valore });
          } else {
            this.router.navigate(["/cibi"]);
          }
        },
      });
    } else {
      this.router.navigate(["/cibi"]);
    }
  }

  formSubmit(data: Cibo) {
    if (this.id != null) {
      this.ciboService.edit(this.id, data).subscribe({
        error: () => {
          console.log("Errore nella creazione");
        },
        next: () => {
          console.log("Cibo creato");
          this.router.navigate(["/cibi"]);
        },
      });
    }
  }
}
