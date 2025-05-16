import { Component, OnInit }        from '@angular/core';
import { NavbarService }            from './navbar.service';
import { NavbarItem }               from './navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent implements OnInit {
  cartTotal = 0;
  bottomItems: NavbarItem[] = [];
  constructor(private navService: NavbarService) {}

  ngOnInit(): void {
    this.navService.getBottomItems()
        .subscribe((items) => {
          this.bottomItems = items
        });
  }
}
