import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-addmessage',
  standalone: true,
  imports: [],
  templateUrl: './addmessage.component.html',
  styleUrl: './addmessage.component.css'
})
export class AddmessageComponent {

    constructor(public messageService: MessageserviceService){
      
    }
}
