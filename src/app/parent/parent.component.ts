import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


msg:string;
subscription:Subscription;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.msg = "Parent";
    this.subscription = this.data.currentMessage.subscribe(msg => this.msg = msg);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    //alert("click");
    this.data.changeMessage("Hello from Parent");
  }

}
