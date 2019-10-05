class PushNotifier
  def self.sendPush(user) 
    @message = get_message()
    if user.notification_data_id.present?
      @notification_data = NotificationData.find(user.notification_data_id)
      Webpush.payload_send(endpoint: @notification_data.endpoint,
                           message: @message,
                           p256dh: @notification_data.p256dh_key,
                           auth: @notification_data.auth_key,
                           ttl: 24 * 60 * 60,
                           vapid: {
                               subject: 'mailto:admin@commercialview.com.au',
                               public_key: "BMGa8j8aqbLIVYFqbY_B2EKjJi6crIYR3to9l5YTz38ea-I17L_G_T7rY8R6kukBnsonpTSMwkfNDrqZXE82mZ8=",
                               private_key: "EYn4R33sDL9Bzyw4sO3rrWlcrGUIRBy_MzteA83y7Bc="
                           }
      )
    end
  end

end