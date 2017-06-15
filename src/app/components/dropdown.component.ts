import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drop-down',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.css']
})
export class DropDownComponent {
    // this get the data from the main compoent 
    @Input() public allOption: Array<any> = [];
    //
    @Output() public select = new EventEmitter();

    private click(id: any){   
      console.log(this.allOption.find(n => n.id == id));
      this.select.emit(this.allOption.find(n => n.id == id));
    }
    
}
