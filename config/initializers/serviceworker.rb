# frozen_string_literal: true

Rails.application.configure do
  config.serviceworker.routes.draw do
    match "/serviceworker.js"
    match "/manifest.json"
    match "/logo.png"
  end
end
