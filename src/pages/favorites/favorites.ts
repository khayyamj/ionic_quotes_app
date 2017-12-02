import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { QuotesService } from '../../services/quotes-service';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/setting';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quoteService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {}

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotes.filter((_quote: Quote) => _quote.id !== quote.id);
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
