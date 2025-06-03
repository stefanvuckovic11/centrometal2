import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  standalone: false
})
export class NewsletterComponent implements OnInit {
  public email: string = '';
  public name: string = '';

  @Output() public subscribe: EventEmitter<{ email: string; name: string }> = new EventEmitter<{
    email: string;
    name: string;
  }>();

  public constructor() {}

  public ngOnInit(): void {}

  public onSubmit(): void {
    if (this.email && this.name) {
      this.subscribe.emit({
        email: this.email.trim(),
        name: this.name.trim()
      });
      this.email = '';
      this.name = '';
    }
  }
}
