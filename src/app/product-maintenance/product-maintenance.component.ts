import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { IPosts } from '../iposts';

@Component({
  selector: 'app-product-maintenance',
  templateUrl: './product-maintenance.component.html',
  styleUrls: ['./product-maintenance.component.css']
})
export class ProductMaintenanceComponent implements OnInit {

  _postsArray: IPosts[];
  someProperty:string = '';

  constructor(private policyService:PolicyService) { }

  getPosts(): void {
      this.policyService.getPosts()
          .subscribe(
              resultArray => this._postsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  ngOnInit() {

    //this.someProperty = this.policyService.getUsers();
    this.getPosts();

  }

}
