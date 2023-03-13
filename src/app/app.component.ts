import { Component } from '@angular/core';
import characters from '../assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters = characters;

  onClose(cardId: number) {
    alert(`Simulamos que cerramos el personaje con id ${ cardId }`);
  }

  onSearch(characterId: number) {
    alert(characterId);
  }
}
