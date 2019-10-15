Rails.application.routes.draw do
  devise_for :users
  resources :gratitudes

  get "/vue_app" => "pages#vue_app", as: 'vue_app'
  post "/push_notifications/register_user" => "push_notifications#register_user"
  post "/push_notifications/test" => "push_notifications#test_push"
  
  root to: "pages#homepage"
end
