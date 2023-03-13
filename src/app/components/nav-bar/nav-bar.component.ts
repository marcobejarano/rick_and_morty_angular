import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() searchCharacterByIdEvent: EventEmitter<number> = new EventEmitter<number>;
  @Output() randomSearchEvent: EventEmitter<number> = new EventEmitter<number>;

  onSubmit(characterId: number) {
    this.searchCharacterByIdEvent.emit(characterId);
  }

  onRandomSearch(characterId: number) {
    this.randomSearchEvent.emit(characterId);
  }
}
