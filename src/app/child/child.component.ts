import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

msg:string;
subscription:Subscription;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.msg = "Child";
    this.subscription = this.data.currentMessage.subscribe(msg => this.msg = msg)
  }

  ngOnDestroy()  {
      this.subscription.unsubscribe();
  }

  newMessage() {
    //alert("click");
    this.data.changeMessage("Hello from Child");
  }

}
