import { InMemoryNotificationRepositories } from "../../../test/repositories/in-memory-notifications-repositories";
import { SendNotification } from "./send-notification";

describe('Send notification', () => {
  it('should be able to send a notification', async() => {
    const NotificationRepositories = new InMemoryNotificationRepositories();
    const sendNotification = new SendNotification(NotificationRepositories);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id'
    });

    expect(NotificationRepositories.notification).toHaveLength(1);
    expect(NotificationRepositories.notification[0]).toEqual(notification);
  });
});
