import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { Cibo } from "src/app/models/cibo";
import { Giorno } from "src/app/models/giorno";

@Injectable({
  providedIn: "root",
})
export class CiboService {
  dataUpdated: ReplaySubject<boolean> = new ReplaySubject();

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cibo[]> {
    return this.http.get<Cibo[]>("api/cibo");
  }

  getSingle(id: number): Observable<Cibo> {
    return this.http.get<Cibo>("api/cibo/" + id);
  }

  create(data: Cibo): Observable<any> {
    this.dataUpdated.next(true);
    return this.http.post("api/cibo/create", data);
  }

  edit(id: number, data: Cibo) {
    this.dataUpdated.next(true);
    return this.http.post("api/cibo/update/" + id, data);
  }

  delete(id: number) {
    this.dataUpdated.next(true);
    return this.http.post("api/cibo/delete/" + id, {});
  }
}
