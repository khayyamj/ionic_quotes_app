import { QuotesService } from './../../services/quotes-service';
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
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quoteService.removeQuoteFromFavorites(_quote);
        this.quotes = this.quotes.filter((quote: Quote) => quote.id !== _quote.id);
      }
    });
  }
}
