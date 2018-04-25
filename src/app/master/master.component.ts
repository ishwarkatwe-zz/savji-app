import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, OnDestroy {
  menu: boolean;
  search: boolean;
  strPageId: string;

  //Sub
  subRouter: any;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute) {


    //Route Active Link
    this.subRouter = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // this.strOrgId = this._activatedRoute.snapshot.firstChild.params['id'];
        this.strPageId = this._activatedRoute.snapshot.firstChild.data['pageId'];
        this.onClose('');
      }
    });
  }

  ngOnInit() {
    this.menu = false;
  }

  onClose(e) {
    this.menu = false;
  }

  onSearchClose(e) {
    this.search = false;
  }


  ngOnDestroy() {
    if (this.subRouter) {
      this.subRouter.unsubscribe();
    }
  }
}
