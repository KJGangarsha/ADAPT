import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <h3>
      Welcome {{name}}
    </h3>
    <h3>{{"Welcome ra " + name}}<h3>
    {{name.length}}
    {{greet()}}
    <h4>{{name.toUpperCase()}}</h4>
    {{siteUrl}}<br/>
    <input [id]="myId" type="text" value="Harsha">
    <input [disabled]="false" id="{{myId}}" type="text" value="Harsha">
    <h2 class="text-success">Harshaweb</h2>
    <h2 class="text-danger">Harshaweb</h2>
    <h2 class="text-special">Harshaweb</h2>
    <h3 [style.color]="hasError ? 'red':'green'">Style Binding</h3>
    <h2 [style.color]="highlightColor">Styles</h2>
    <h2 [ngStyle]="titleStyles">Styles</h2>
    <button (click)="greeting='Welcome Harsha'">Greet</button>
    {{greeting}}
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
    <input [(ngModel)]="name" type="text">
    {{name1}}
    
    <h2>{{"Hello " + name2}}</h2>
    <button (click)="fireEvent()">Send Event</button>

    <div [ngSwitch]="colors">
        <div *ngSwitchCase="'red'">Its red color bro.</div>
        <div *ngSwitchCase="'Blue'">Its blue color bro.</div>
        <div *ngSwitchCase="'green'">Its green color bro.</div>
        <div *ngSwitchDefault>pick again mowaa.</div>
    </div>
    <div *ngFor="let colo of color1; index as i;first as f; last as l;odd as o;even as e">
    <h4>{{i}}- {{colo}} first: {{f}} - last: {{l}} - odd: {{o}} - even: {{e}}</h4>
    </div>

    <div *ngIf="displayname; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
    <h4>harsha got a job</h4>
    </ng-template>
    <ng-template #elseBlock>
    <h4>Hided bro</h4>
    </ng-template>
    
    <!-- <h4 *ngIf="displayname; else elseBlock">
      harshammu
    </h4>
    <ng-template #elseBlock>
    <h4>
    Name is hidden
    </h4> -->
    <h3>{{name}}</h3>
    <h3>{{name | lowercase}}</h3>
    <h3>{{message | titlecase}}</h3>
    <h3>{{name | uppercase}}</h3>
    <h3>{{name | slice:0:5}}</h3>
    <h3>{{person | json}}</h3>

    <h3>{{5.678 | number:'1.2-3'}}</h3>
    <h3>{{5.678 | number:'3.4-5'}}</h3>
    <h3>{{5.678 | number:'3.1-2'}}</h3>

    <h3>{{0.25 | percent}}</h3>
    <h3>{{0.25 | currency}}</h3>
    <h3>{{0.25 | currency:'EUR': 'code'}}</h3>
    <h3>{{ date }}</h3>
    <h3>{{date | date:'short'}}</h3>
    <h3>{{date | date:'shortDate'}}</h3>
    <h3>{{date | date:'shortTime'}}</h3>
    <h3>{{date | date:'mediumDate'}}</h3>

    `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      color:orange;
      font-style:italic;
    }
    
  `]
})
export class TestComponent implements OnInit {

  @Input('parentData') public name2: any;
  @Output() public childEvent = new EventEmitter();
  public color1=["red","blue","green","yellow"];
  displayname=false;
  public colors="white";  
    public name="Gangarsha";
    public message="Welcome to ADAPT";
    public myId="testId";
    public hasError=false;
    public isSpecial=true;
    public highlightColor="Blue";
    public titleStyles={
      color:"grey",
      fontStyle: "italic"
    
    }
    public person={
      "firstName":"Harsha",
      "lastName":"K"
    }
    public date=new Date();
  constructor() { }
    public name1="";
  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Hey Handsome');
  }
  greet(){
    return "Hello "+this.name;
  }

  public siteUrl=window.location.href;
  public greeting="";
  logMessage(value: any){
    console.log(value);
  }  
  
}
