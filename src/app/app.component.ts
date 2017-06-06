import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

   public allOption:Array<any> = [ 
    
    {id: 1 , name: 'Pakistan'}, {id: 2 , name:'Ballistic'}, 
    {id: 3 , name:'Abdullah'}, {id: 4 , name:'Zindabad'}
    
    ];


    getSelectedValue(item) {
      console.log(item.id +' '+ item.name);
    }


  
}
