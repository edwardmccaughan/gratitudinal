Rails.application.routes.draw do
  devise_for :users
  resources :gratitudes
  get "/vue_app" => "pages#vue_app"
  root to: "pages#homepage"
end
