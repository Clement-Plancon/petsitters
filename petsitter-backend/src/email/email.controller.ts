import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { v4 as uuidv4 } from 'uuid'; // Importer la fonction uuidv4 pour générer un token aléatoire

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('contact')
  async sendContactEmail(
    @Body('nom') nom: string,
    @Body('prenom') prenom: string,
    @Body('email') email: string,
    @Body('telephone') telephone: string,
    @Body('objet') objet: string,
    @Body('message') message: string,
  ): Promise<void> {
    const to = '';
    const subject = 'Formulaire de contact - Demande de garde d\'animaux';
    const text = `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nTéléphone: ${telephone}\nObjet: ${objet}\nMessage: ${message}`;

    await this.emailService.sendEmail(to, subject, text);
  }

  @Post('mdpoublie')
  async sendPasswordResetEmail(
    @Body('email') email: string,
  ): Promise<void> {
    const to = email;
    const subject = 'Réinitialisation du mot de passe - Demande de garde d\'animaux';
    const token = uuidv4(); // Générer un token aléatoire avec la fonction uuidv4
    const text = `Bonjour,\n\nVous avez demandé la réinitialisation de votre mot de passe. Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe :\n\nhttp://localhost:3000/mdpoublie_reset?token=${token}\n\nSi vous n'avez pas demandé la réinitialisation de votre mot de passe, veuillez ignorer cet e-mail.\n\nCordialement,\nL'équipe de garde d'animaux`;

    await this.emailService.sendEmail(to, subject, text);
  }
}
