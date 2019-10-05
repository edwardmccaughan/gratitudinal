class PushNotificationsController < ApplicationController
  before_action :authenticate_user!

  def register_user
    PushNotifier.register_user(
      current_user,
      params[:subscription][:endpoint],
      params[:subscription][:keys][:p256dh],
      params[:subscription][:keys][:auth]
    )
  end

  def test_push
    PushNotifier.push_message(current_user, 'woooo')
  end

end