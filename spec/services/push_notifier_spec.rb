require "rails_helper"
RSpec.describe PushNotifier do
  describe '#register_user' do
    let(:user) { create :user }
    let(:endpoint) { 'http://example.com'}
    let(:p256dh_key) { '12345'}
    let(:auth_key) { '67890'}

    subject{ described_class.register_user(user, endpoint, p256dh_key, auth_key) }


    it 'updates the user with the notification data' do
      expect{subject}.to change{user.push_notification_endpoint}.to(endpoint)
                    .and change{user.push_notification_p256dh_key}.to(p256dh_key)
                    .and change{user.push_notification_auth_key}.to(auth_key)
    end
  end

  describe '#push_message' do
    it 'calls Webpush.payload_send with the correct parameters '
  end
end