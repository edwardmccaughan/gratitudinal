require "capistrano/setup"
require "capistrano/deploy"

require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

# require "rvm/capistrano"
require 'rvm1/capistrano3'
require "capistrano/rails"
# require "capistrano/bundler"
require "capistrano/yarn"
require "capistrano/passenger"
# require "capistrano/chruby"
# require "capistrano/rails/assets"
# require "capistrano/rails/migrations"

# set :rvm_ruby_string, :local              # use the same ruby as used locally for deployment
# set :rvm_autolibs_flag, "read-only"       # more info: rvm help autolibs

# before 'deploy:setup', 'rvm:install_rvm'  # install/update RVM
# before 'deploy:setup', 'rvm:install_ruby' # install Ruby and create gemset, OR:

# before 'deploy', 'rvm1:install:rvm'
# before 'deploy', 'rvm1:install:ruby'
# before 'deploy', 'rvm1:install:gems'

Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }
