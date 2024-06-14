import { Notification } from "../entities/notification";
import { InMemoryNotificationRepositories } from "../../../test/repositories/in-memory-notifications-repositories";
import { RecipientNotification } from "./count-notification";
import { Content } from "../entities/content";

describe('Count Recipient Notification', () => {
  it('should be able to count recipients notification', async() => {
    const notificationRepositories = new InMemoryNotificationRepositories();
    const countRecipientNotification = new RecipientNotification(notificationRepositories);

    notificationRepositories.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'example-recipient-1'
      })
    );

    notificationRepositories.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'example-recipient-1'
      })
    );

    notificationRepositories.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'example-recipient-2'
      })
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'example-recipient-1'
    });

    expect(count).toEqual(2);
  });
});
