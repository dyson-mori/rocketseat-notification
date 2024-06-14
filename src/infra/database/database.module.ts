import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { NotificationRepositories } from "../../app/repositories/notification-repositories";
import { PrismaNotificationsRepository } from "./prisma/prisma-notifications-repositories";

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepositories,
      useClass: PrismaNotificationsRepository,
    }
  ],
  exports: [NotificationRepositories]
})

export class DatabaseModule {};