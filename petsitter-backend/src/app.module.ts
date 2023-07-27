// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { EmailController } from './email/email.controller'; // Importez le contrôleur EmailController ici
import { PaymentController } from './stripe/payment.controller'; // Importez le contrôleur PaymentController ici
import { StripeService } from './stripe/stripe.service'; // Importez le service StripeService ici

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'petsitter',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Petsitter, Comment]),
    JwtModule.register({ secret: 'petsitterSecretKey' }),
    EmailModule, // Ajoutez le module EmailModule ici
  ],
  controllers: [
    AppController,
    UserController,
    PetsitterController,
    AuthController,
    CommentController,
    EmailController, // Ajoutez le contrôleur EmailController ici
    PaymentController, // Ajoutez le contrôleur PaymentController ici
  ],
  providers: [AppService, UserService, PetsitterService, AuthService, CommentService, StripeService], // Ajoutez le service StripeService ici
})
export class AppModule {}
