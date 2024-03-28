import {Component, OnInit} from '@angular/core';
import {JoueursService} from "../joueurs.service";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-joueur-liste',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './joueurs_liste.component.html',
})
export class JoueurListeComponent implements OnInit {
  joueurs: any = [];

  constructor(private joueurService: JoueursService) {}

  ngOnInit(): void {
    this.loadJoueur();
  }

  loadJoueur() {
    this.joueurService.getJoueurs().subscribe((joueurs: any) => {
      console.log(joueurs);
      this.joueurs = joueurs;
    });
  }
}
