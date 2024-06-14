import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
import { NotificationRepositories } from "@app/repositories/notification-repositories";
import { PrismaService } from "./prisma.service";
import { PrismaNotificationsMappers } from './prisma-notifications-mappers';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepositories {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationsMappers.toPrisma(notification);
    
    await this.prismaService.notification.create({
      data: raw
    })
  }

  countManyByRecipientId(id: string): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async findById(notificationId: string): Promise<Notification> {
    throw new Error('Method not implemented.');
  }

  async save(notificationId: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
};
