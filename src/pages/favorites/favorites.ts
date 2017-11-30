import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { QuotesService } from '../../services/quotes-service';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quoteService: QuotesService,
              private modalCtrl: ModalController) {}

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(_quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, _quote);
    modal.present();
  }
}
