import { Notification } from "@app/entities/notification";

export class PrismaNotificationsMappers {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      recipientId: notification.recipientId,
    }
  }
}