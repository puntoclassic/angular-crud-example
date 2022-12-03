import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Giorno } from "src/app/models/giorno";

@Injectable({
  providedIn: "root",
})
export class GiornoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Giorno[]> {
    return this.http.get<Giorno[]>("api/giorno");
  }

  getSingle(id: number): Observable<Giorno> {
    return this.http.get<Giorno>("api/giorno/" + id);
  }

  create(data: Giorno): Observable<any> {
    return this.http.post("api/giorno/create", data);
  }

  edit(id: number, data: Giorno) {
    return this.http.post("api/giorno/" + id + "/update", data);
  }

  delete(id: number) {
    return this.http.post("api/giorno/" + id + "/delete", {});
  }
}
