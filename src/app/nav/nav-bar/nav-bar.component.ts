import { Component, OnInit, Input } from '@angular/core';
import { navItem } from '../navItem';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() appTitle:string='';
  subMenue:navItem[]=[
    new navItem({title:'תפריט1'}),
    new navItem({title:'תפריט2'}),
    new navItem({title:'תפריט3'}),
   ]
   subMenue2:navItem[]=[
    new navItem({title:'תפריט4'}),
    new navItem({title:'תפריט5'}),
    new navItem({title:'תפריט6'}),
   ]
   subMenue3:navItem[]=[
    new navItem({title:'תפריט7'}),
    new navItem({title:'תפריט8'}),
    new navItem({title:'תפריט9'}),
   ]
public menue:navItem[]=[
 new navItem({title:'תפריט1',subItems:this.subMenue}),
 new navItem({title:'תפריט2',subItems:this.subMenue2}),
 new navItem({title:'תפריט3',subItems:this.subMenue3}),
]

}
