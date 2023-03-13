import { Component, Input, Output, EventEmitter } from '@angular/core';

interface CardInfo {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardInfo: CardInfo = { id: 0, name: '', species: '', gender: '', image: '' };
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
    this.deleteEvent.emit(this.cardInfo.id);
  }
}
