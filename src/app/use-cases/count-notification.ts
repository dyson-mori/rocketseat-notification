import { Injectable } from "@nestjs/common";
import { NotificationRepositories } from "../repositories/notification-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface RecipientNotificationProps {
  recipientId: string;
};

type CountRecipientNotificationResponse = {
  count: number;
}

@Injectable()
export class RecipientNotification {
  constructor(private notificationsRepositories: NotificationRepositories) {};

  async execute(request: RecipientNotificationProps): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const notification = await this.notificationsRepositories.countManyByRecipientId(recipientId);

    return {
      count: notification
    }
  }
}