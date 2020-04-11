import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  indicatorValues: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query<any>({
        query: gql`{
            getIndicatorValues{
              id,
              name,
              unit,
              key,
              date,
              value
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          console.log(data);

          this.indicatorValues = data && data.getIndicatorValues;
          this.loading = loading;
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }

  getAuthorNames(indicatorValues) {
    if (indicatorValues.length > 1)
      return indicatorValues.reduce((acc, cur) => acc.name + ", " + cur.name);
    else return indicatorValues[0].name;
  }
}
