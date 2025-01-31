import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class AccueilComponent {

}
