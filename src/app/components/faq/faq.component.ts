import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class FaqComponent {

}
