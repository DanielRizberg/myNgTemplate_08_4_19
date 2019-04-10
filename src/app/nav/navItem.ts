export class navItem {
  constructor(init?: Partial<navItem>) {
    Object.assign(this, init);
  }
  id:number=0;
  title: string = "";
  link: string = "";
  subItems: navItem[] = null;
  iconClass: string = "";
}
