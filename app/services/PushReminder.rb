class PushReminder
  def call
    users_needing_reminder.each do |user|
      PushNotifier.push_message(user, "you haven't recorded any gratitudes in a while")
    end
  end

  private

  def users_needing_reminder
    User.where(reminders_enabled: true).joins(:gratitudes).where.not('gratitudes.created_at > ?', 1.day.ago)
  end
end