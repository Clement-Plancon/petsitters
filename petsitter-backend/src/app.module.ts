// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { User } from './users/user.entity';
import { PetsitterController } from './petsitters/petsitter.controller';
import { PetsitterService } from './petsitters/petsitter.service';
import { Petsitter } from './petsitters/petsitter.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { CommentController } from './comments/comment.controller';
import { CommentService } from './comments/comment.service';
import { Comment } from './comments/comment.entity';
import { EmailModule } from './email/email.module';
import { EmailController } from './email/email.controller';
import { PaymentController } from './stripe/payment.controller';
import { StripeService } from './stripe/stripe.service';
import { AdminController } from './admin/admin.controller'; // Importez le contrôleur AdminController ici

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'petsitter',
      entities: [User, Petsitter, Comment], // Assurez-vous d'ajouter toutes les entités nécessaires ici
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Petsitter, Comment]),
    JwtModule.register({ secret: 'petsitterSecretKey' }),
    EmailModule,
  ],
  controllers: [
    UserController,
    PetsitterController,
    AuthController,
    CommentController,
    EmailController,
    PaymentController,
    AdminController, // Ajoutez le contrôleur AdminController ici
  ],
  providers: [
    UserService,
    PetsitterService,
    AuthService,
    CommentService,
    StripeService,
  ],
})
export class AppModule {}
