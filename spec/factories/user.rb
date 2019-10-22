FactoryBot.define do
  factory :user do
    sequence :email do |n|
      "user_#{n}@example.com"
    end
    password { "password" }
    reminders_enabled { false }
  end
end