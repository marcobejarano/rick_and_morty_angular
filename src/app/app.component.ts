import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters: any[] = [];

  constructor(private httpClient: HttpClient) {}

  onClose(cardId: number) {
    this.characters = this.characters.filter(character => character.id !== cardId);
  }

  onSearch(characterId: number) {
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    if (this.characters.find(character => character.id === characterId)) {
      alert('El personaje ya está agregado');
    } else {
      this.httpClient.get(`${ baseUrl }/${ characterId }`).subscribe(
        (data: any) => {
          this.characters = [...this.characters, data];
        },
        (error) => {
          alert('No hay personajes con ese Id');
        }
      );
    }
  }
}
