import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email') // Le préfixe 'email' indique que cette route gérera les requêtes liées aux e-mails
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('contact') // La route POST pour le formulaire de contact sera '/email/contact'
  async sendContactEmail(
    @Body('nom') nom: string,
    @Body('prenom') prenom: string,
    @Body('email') email: string,
    @Body('telephone') telephone: string,
    @Body('objet') objet: string,
    @Body('message') message: string,
  ): Promise<void> {
    const to = ''; // Remplacez par l'adresse e-mail du destinataire de test
    const subject = 'Formulaire de contact - Demande de garde d\'animaux';
    const text = `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nTéléphone: ${telephone}\nObjet: ${objet}\nMessage: ${message}`;

    await this.emailService.sendEmail(to, subject, text);
  }
}
