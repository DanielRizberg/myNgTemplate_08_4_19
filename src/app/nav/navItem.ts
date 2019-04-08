export class navItem{
  constructor(init?:Partial<navItem>){
    Object.assign(this,init);
  }
  title:string='';
  link:string='';
subItems:navItem[]=null

}
