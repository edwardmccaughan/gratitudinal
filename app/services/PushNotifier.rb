class PushNotifier
  def self.register_user(user, endpoint, p256dh, auth_key)
    user.update!(
      push_notification_endpoint: endpoint,
      push_notification_p256dh_key: p256dh,
      push_notification_auth_key: auth_key
    )
  end

  def self.push_message(user, message)
    Webpush.payload_send(
      message: message,
      endpoint: user.push_notification_endpoint,
      p256dh: user.push_notification_p256dh_key,
      auth: user.push_notification_auth_key,
      vapid: {
        subject: "mailto:sender@example.com",
        public_key: ENV['VAPID_PUBLIC_KEY'],
        private_key: ENV['VAPID_PRIVATE_KEY']
      },
      ssl_timeout: 5,
      open_timeout: 5,
      read_timeout: 5
    )
  end
end