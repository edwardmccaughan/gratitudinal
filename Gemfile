source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

gem 'rails', '~> 6.0.0'
gem 'puma', '~> 3.11'
gem 'sass-rails', '~> 5'
gem 'webpacker', '~> 4.0'
gem 'jbuilder', '~> 2.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'devise'

gem 'webpush'
gem 'serviceworker-rails'
gem 'dotenv-rails'
gem "haml-rails"
gem 'pg'

group :development, :test do
  gem 'sqlite3', '~> 1.4'
  gem 'factory_bot_rails'
  gem 'byebug'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem "capistrano"
  # gem "rvm-capistrano"
  gem 'rvm1-capistrano3', require: false
  gem "capistrano-passenger"
  gem "capistrano-yarn"
  gem "capistrano-rails"
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
  gem 'rspec-rails'
end

