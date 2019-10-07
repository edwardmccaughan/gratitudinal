class AddRemindersEnabledToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :reminders_enabled, :boolean
  end
end
