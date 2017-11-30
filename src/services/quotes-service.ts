import { Quote } from '../data/quote.interface';

export class QuotesService {
	private favoriteQuotes: Quote[] = [];

	addQuoteToFavorites(quote: Quote) {
		this.favoriteQuotes.push(quote);
		console.log('Added to favorites-> ', this.favoriteQuotes);
	}

	removeQuoteFromFavorites(quote: Quote) {
		const position = this.favoriteQuotes.findIndex((_quote: Quote) => _quote.id === quote.id);
		this.favoriteQuotes.splice(position, 1);
	}

	getFavoriteQuotes() {
		return this.favoriteQuotes.slice();
	}
}