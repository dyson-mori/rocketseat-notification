import { Injectable } from "@nestjs/common";
import { NotificationRepositories } from "../repositories/notification-repositories";
import { NotificationNotFound } from "./errors/notification-not-found";

interface CancelNotificationProps {
  notificationId: string;
};

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepositories: NotificationRepositories) {};

  async execute(request: CancelNotificationProps): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepositories.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    };

    notification.cancel();

    await this.notificationsRepositories.save(notification);
  }
}