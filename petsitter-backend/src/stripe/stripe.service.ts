// stripe.service.ts

import { Injectable } from '@nestjs/common';
import { stripeConfig } from './stripe.config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(stripeConfig.secretKey, { apiVersion: '2022-11-15' });
  }

  async createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency,
    });
  }
}
