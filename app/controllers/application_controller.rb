class ApplicationController < ActionController::Base
  before_action :prepare_exception_notifier

  def prepare_exception_notifier
    request.env["exception_notifier.exception_data"] = {
      current_user: current_user
    }
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || vue_app_path
  end

end
