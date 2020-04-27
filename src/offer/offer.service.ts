import { Injectable } from '@nestjs/common'
import { Offer, OfferStates } from './offer.dto'

@Injectable()
export class OfferService {
  private readonly offers: Offer[]

  constructor() {
    this.offers = []
  }

  public getOffers(): Offer[] {
    return this.offers
  }

  public addOffer(offer: Offer): void {
    this.offers.push(offer)
  }

  public changeState(id: number, state: OfferStates): Offer {
    const resource = this.offers.find(r => r.id === id)
    resource.state = state
    return resource
  }
}
