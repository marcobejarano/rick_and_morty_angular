import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchCharacterByIdEvent: EventEmitter<number> = new EventEmitter<number>;
  @Output() randomSearchEvent: EventEmitter<number> = new EventEmitter<number>;

  onSubmit(characterId: string) {
    this.searchCharacterByIdEvent.emit(parseInt(characterId));
  }

  onRandomSearch() {
    this.randomSearchEvent.emit(Math.floor(Math.random() * 826) + 1);
  }
}
