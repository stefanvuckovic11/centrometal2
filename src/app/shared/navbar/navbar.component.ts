import { Component, OnInit }        from '@angular/core';
import { NavbarService }            from './navbar.service';
import { NavbarItemInterface }               from './navbar-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent implements OnInit {
  public cartTotal = 0;
  public bottomItems: NavbarItemInterface[] = [];
  constructor(private navService: NavbarService) {}

  ngOnInit(): void {
    this.navService.getBottomItems()
        .subscribe((items) => {
          this.bottomItems = items
        });
  }
}
