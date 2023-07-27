// payment.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe') // Mettez à jour le chemin ici
export class PaymentController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-payment-intent')
  async createPaymentIntent(@Body() paymentData: { amount: number; currency: string }) {
    const { amount, currency } = paymentData;
    const paymentIntent = await this.stripeService.createPaymentIntent(amount, currency);
    return { clientSecret: paymentIntent.client_secret };
  }
}
