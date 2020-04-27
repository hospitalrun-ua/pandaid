export class OffersResponse {
  list: Offer[]
}

export class OfferBase {}

export class Offer extends OfferBase {
  id: number
  state: OfferStates | string
}

export enum OfferStates {
  OPEN = 'Open'
}

export class ChangeStateRequest {
  state: OfferStates
}
