import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  standalone:false
})
export class NewsletterComponent implements OnInit {
  email = '';
  name = '';
  @Output() subscribe = new EventEmitter<{ email: string; name: string }>();

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(): void {
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
