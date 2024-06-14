import { Notification } from "../../app/entities/notification";
import { InMemoryNotificationRepositories } from "../../../test/repositories/in-memory-notifications-repositories";
import { CancelNotification } from "./cancel-notification";
import { Content } from "../../app/entities/content";

describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async() => {
    const notificationRepositories = new InMemoryNotificationRepositories();
    const cancelNotification = new CancelNotification(notificationRepositories);

    const notification = new Notification({
      content: new Content('This is a notification'),
      category: 'social',
      recipientId: 'example-recipient-id'
    });

    notificationRepositories.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id
    });

    expect(notificationRepositories.notification[0].canceledAt).toEqual(expect.any(Date));
  });

  it('should not be able to cancel a notification when it does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepositories();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id'
      })
    }).rejects.toThrow('notification-not-found')
  })
});
