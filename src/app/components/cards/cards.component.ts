import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() characters: any[] = [];
  @Output() deleteCardEvent: EventEmitter<number> = new EventEmitter<number>();

  onDeleteCard(characterId: number) {
    this.deleteCardEvent.emit(characterId);
  }
}
