import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchCharacterByIdEvent: EventEmitter<number> = new EventEmitter<number>;

  onSubmit(characterId: string) {
    this.searchCharacterByIdEvent.emit(parseInt(characterId));
  }
}
