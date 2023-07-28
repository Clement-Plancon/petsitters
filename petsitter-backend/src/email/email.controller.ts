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
    const to = 'plancon.clem@gmail.com';
    const subject = 'Formulaire de contact - Demande de garde d\'animaux - The Pet Compagny';
    const text = `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nTéléphone: ${telephone}\nObjet: ${objet}\nMessage: ${message}`;

    await this.emailService.sendEmail(to, subject, text);
  }

  @Post('mdpoublie')
  async sendPasswordResetEmail(
    @Body('email') email: string,
  ): Promise<void> {
    const to = email;
    const subject = 'Réinitialisation du mot de passe - Demande de garde d\'animaux - The Pet Compagny';
    const token = uuidv4(); // Générer un token aléatoire avec la fonction uuidv4
    const text = `Bonjour,\n\nVous avez demandé la réinitialisation de votre mot de passe. Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe :\n\nhttp://localhost:3000/mdpoublie_reset?token=${token}\n\nSi vous n'avez pas demandé la réinitialisation de votre mot de passe, veuillez ignorer cet e-mail.\n\nCordialement,\nL'équipe de The Pet Compagny`;

    await this.emailService.sendEmail(to, subject, text);
  }

  @Post('petsitter')
  async sendPetsitterEmail(
    @Body() formData: any,
  ): Promise<void> {
    // Utilisez les données du formulaire dans l'objet formData pour créer le contenu de l'e-mail
    const { animalData, needsData, dateData, contactData } = formData;
    const to = contactData.email;
    const subject = 'Demande de garde d\'animaux - The Pet Company';
    const text = `
      Animaux possédés:
      - Chiens: ${animalData.dogs}
      - Chats: ${animalData.cats}
      - Rongeurs: ${animalData.rodents}
      - Poissons: ${animalData.fish}
      - Furets: ${animalData.ferrets}
      - Animaux de la ferme: ${animalData.farmAnimals}
      - Reptiles: ${animalData.reptiles}
      - Chevaux: ${animalData.horses}
      - Oiseaux: ${animalData.birds}
      
      Besoins:
      - Chez une famille d'accueil: ${needsData.familyHome}
      - Promenades: ${needsData.walk}
      - À votre domicile: ${needsData.atHome}
      - Visites quotidiennes: ${needsData.dailyVisit}
      
      Dates:
      - Date de début: ${dateData.startDate}
      - Date de fin: ${dateData.endDate}
      
      Email de contact: ${contactData.email}
    `;


    await this.emailService.sendEmail(to, subject, text);
  }
}
