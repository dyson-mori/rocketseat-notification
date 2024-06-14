import { Notification } from "../entities/notification";

export abstract class NotificationRepositories {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notificationId: Notification): Promise<void>;
  abstract countManyByRecipientId(id: string): Promise<number>;
};
