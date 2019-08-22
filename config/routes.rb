Rails.application.routes.draw do
  resources :gratitudes
  get "/vue_app" => "pages#vue_app"
end
