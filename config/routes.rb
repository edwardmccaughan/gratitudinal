Rails.application.routes.draw do
  devise_for :users
  resources :gratitudes
  get "/vue_app" => "pages#vue_app"
  post "/push" => "pages#push"
  root to: "pages#homepage"
end
