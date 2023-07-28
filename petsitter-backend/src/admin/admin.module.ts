import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { UserService } from '../users/user.service'; // Importez le service UserService si vous ne l'avez pas déjà fait

@Module({
  controllers: [AdminController],
  providers: [UserService], // Ajoutez le service UserService ici s'il n'est pas déjà présent
})
export class AdminModule {}
