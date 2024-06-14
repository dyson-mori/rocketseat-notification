import { Body, Controller, Post } from '@nestjs/common';
import { createNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from '@app/use-cases/send-notification';
import { NotificationViewModel } from '@infra/view-models/notification-view-model';

@Controller('notification')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {};

  @Post()
  async create(@Body() body: createNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId
    });

    return {
      notification: NotificationViewModel.toHttp(notification)
    }
  };
}
