class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:vue_app] 

  def homepage 
  end

  def vue_app
    render :layout => 'vue_app'
  end

  def push
    Webpush.payload_send(
      message: "you have a notification: #{params[:message]}",
      endpoint: params[:subscription][:endpoint],
      p256dh: params[:subscription][:keys][:p256dh],
      auth: params[:subscription][:keys][:auth],
      vapid: {
        subject: "mailto:sender@example.com",
        public_key: "BMGa8j8aqbLIVYFqbY_B2EKjJi6crIYR3to9l5YTz38ea-I17L_G_T7rY8R6kukBnsonpTSMwkfNDrqZXE82mZ8=",
        private_key: "EYn4R33sDL9Bzyw4sO3rrWlcrGUIRBy_MzteA83y7Bc="
      },
      ssl_timeout: 5, # value for Net::HTTP#ssl_timeout=, optional
      open_timeout: 5, # value for Net::HTTP#open_timeout=, optional
      read_timeout: 5 # value for Net::HTTP#read_timeout=, optional
    )
  end
end
