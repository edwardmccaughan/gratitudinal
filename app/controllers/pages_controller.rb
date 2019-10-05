class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:vue_app] 

  def homepage 
  end

  def vue_app
    render :layout => 'vue_app'
  end
end
