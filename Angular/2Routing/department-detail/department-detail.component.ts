import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!
    </p>
    <h3>You selected department id={{departmentId}}</h3>
    <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous</button><br/>
    <button (click)="goNext()">Next</button>
    </p>
    <div>
    <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    //this.departmentId=id;  
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id')!)
      this.departmentId=id;
    });
  }
  goPrevious(){
    let previousId=this.departmentId-1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext(){
    let nextId=this.departmentId+1;
    this.router.navigate(['/departments', nextId]);
  }
  gotoDepartments(){
    let selectId=this.departmentId ? this.departmentId:null;
    this.router.navigate(['/departments',{id: selectId}]);
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});
  }
}