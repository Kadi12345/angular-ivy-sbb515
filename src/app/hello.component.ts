import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "hello",
  template: `
    <div *ngIf="data">
      <h1>{{ data.titles.normalized }}</h1>
      <span>{{ data.description }}</span>
      <img [src]="data.originalimage.source" />
    </div>
  `,

  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  data: any;
  constructor(private http: HttpClient) {
    http
      .get("https://en.wikipedia.org/api/rest_v1/page/summary/Viljandi")
      .subscribe(Response => {
        console.log(Response);

        this.data = Response;
      });
  }

  @Input() name: string;
}
