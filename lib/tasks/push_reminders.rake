desc "Send daily push reminders"
task :send_push_reminders => :environment do
  puts "send push reminders..."
  PushReminder.new.call
  puts "done."
end