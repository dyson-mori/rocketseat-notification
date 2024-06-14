import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationRepositories } from "../repositories/notification-repositories";

interface SendNotificationProps {
  recipientId: string;
  content: string;
  category: string;
};

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepositories: NotificationRepositories) {};

  async execute(request: SendNotificationProps): Promise<SendNotificationResponse> {
    const { recipientId, category, content } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepositories.create(notification);

    return {
      notification
    };
  }
}