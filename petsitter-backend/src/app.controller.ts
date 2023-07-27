// app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email/email.service';

@Controller()
export class AppController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('send-test-email')
  async sendTestEmail(): Promise<string> {
    try {
      await this.emailService.sendTestEmail();
      return 'E-mail de test envoyé avec succès !';
    } catch (error) {
      return `Une erreur s'est produite lors de l'envoi de l'e-mail de test : ${error.message}`;
    }
  }
}
