import { Component, OnInit } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { CiboService } from "src/app/cibo.service";
import { Cibo } from "src/app/models/cibo";

@Component({
  selector: "app-cibo-list-page",
  templateUrl: "./cibo-list-page.component.html",
  styleUrls: ["./cibo-list-page.component.css"],
})
export class CiboListPageComponent implements OnInit {
  cibi?: Cibo[];

  constructor(private ciboService: CiboService) {
    this.ciboService.dataUpdated.subscribe(() => {
      this.refresh();
    });
  }

  refresh() {
    this.ciboService.getAll().subscribe((response) => {
      this.cibi = response;
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  deleteRow(id: number) {
    this.ciboService.delete(id).subscribe({
      error: () => {
      },
      next: () => {
        this.refresh();
      },
    });
  }
}
