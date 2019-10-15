require "rails_helper"
RSpec.describe PushReminder do
  let(:user_with_reminders_on_and_recent_gratitudes) do
    user = create :user, reminders_enabled: true
    create :gratitude, user: user, created_at: 23.hours.ago
    user
  end

  let(:user_with_reminders_on_and_no_recent_gratitudes) do
    user = create :user, reminders_enabled: true
    create :gratitude, user: user, created_at: 1.day.ago
    create :gratitude, user: user, created_at: 1.day.ago
    user
  end
  
  let(:user_with_reminders_off_and_recent_gratitudes) do
    user = create :user, reminders_enabled: false
    create :gratitude, user: user, created_at: 23.hours.ago
    user
  end

  let(:user_with_reminders_off_and_no_recent_gratitudes) do
    user = create :user, reminders_enabled: false
    create :gratitude, user: user, created_at: 1.day.ago
    user
  end

  before do
    user_with_reminders_on_and_recent_gratitudes
    user_with_reminders_on_and_no_recent_gratitudes
    user_with_reminders_off_and_recent_gratitudes
    user_with_reminders_off_and_no_recent_gratitudes
  end

  subject{ described_class.new.call }

  it 'sends to users who have notifications enabled and no gratitudes within 24 hours' do
    expect(PushNotifier).to receive(:push_message).with(user_with_reminders_on_and_no_recent_gratitudes, anything).exactly(:once)
    expect(PushNotifier).not_to receive(:push_message).with(user_with_reminders_on_and_recent_gratitudes, anything)
    expect(PushNotifier).not_to receive(:push_message).with(user_with_reminders_off_and_recent_gratitudes, anything)
    expect(PushNotifier).not_to receive(:push_message).with(user_with_reminders_off_and_no_recent_gratitudes, anything)

    subject
  end
end