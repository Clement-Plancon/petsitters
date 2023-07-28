// email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Configurer le transporter avec les informations SMTP de votre serveur Office 365
    this.transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: '', // Remplacez par votre adresse e-mail Office 365
        pass: '', // Remplacez par votre mot de passe e-mail
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: '', // Remplacez par votre adresse e-mail Office 365
        to,
        subject,
        text,
      });
      console.log('E-mail envoyé avec succès !');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail :', error);
    }
  }

  async sendTestEmail(): Promise<void> {
    const to = ''; // Remplacez par l'adresse e-mail du destinataire de test
    const subject = 'Test d\'envoi d\'e-mail depuis Nest.js avec Nodemailer et Office 365';
    const text = 'Ceci est un test d\'envoi d\'e-mail depuis Nest.js avec Nodemailer et Office 365';

    await this.sendEmail(to, subject, text);
  }
}
