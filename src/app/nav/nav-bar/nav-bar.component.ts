import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { navItem } from "../navItem";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import "rxjs/add/operator/filter";
@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.initUpdateCurrentRoute();
  }
  sub: Subscription;
  currentRoute: navItem = new navItem();
  @Input() appTitle: string = "";
  subMenue: navItem[] = [
    new navItem({ title: "דף הבית", link: "/main/default", iconClass: "fa fa-home" }),
    new navItem({ title: "תפריט2" }),
    new navItem({ title: "תפריט3" })
  ];
  subMenue2: navItem[] = [
    new navItem({ title: "תפריט4" }),
    new navItem({ title: "תפריט5" }),
    new navItem({ title: "תפריט6" })
  ];
  subMenue3: navItem[] = [
    new navItem({ title: "תפריט7" }),
    new navItem({ title: "תפריט8" }),
    new navItem({ title: "תפריט9" })
  ];
  public menue: navItem[] = [
    new navItem({ title: "תפריט1", subItems: this.subMenue }),
    new navItem({ title: "תפריט2", subItems: this.subMenue2 }),
    new navItem({ title: "תפריט3", subItems: this.subMenue3 }),
    new navItem({ title: "תפריט4" })
  ];

  private initUpdateCurrentRoute() {

    this.sub = this.router.events.filter(x => x instanceof NavigationEnd)
      .subscribe((nav:NavigationEnd) => {
          console.log(nav)

        let urlAfterRedirects = nav.urlAfterRedirects;
        let url=nav.url;

        let menueLength = this.menue.length;
        loop1: for (let index = 0; index < menueLength; index++) {
          const element = this.menue[index];
          if (element.link == url || element.link == urlAfterRedirects) {
            this.currentRoute = element;
            break loop1;
          }
          else {
            if (element.subItems) {
              let innerLength = element.subItems.length;
              loop2: for (let j = 0; j < innerLength; j++) {
                const innerElem = element.subItems[j];
               //debugger;
                if (innerElem.link == url || innerElem.link == urlAfterRedirects) {
                  this.currentRoute = innerElem;
                  break loop1;
                }
              }
            }
            else {
              continue;
            }
          }
        }
      });
  }
}
