class AddPushNotificationToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :push_notification_endpoint, :string
    add_column :users, :push_notification_p256dh_key, :string
    add_column :users, :push_notification_auth_key, :string
  end
end
