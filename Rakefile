# require_relative './config/environment'
require 'sinatra/activerecord/rake'

task :start do
  if ActiveRecord::Base.connection.migration_context.needs_migration?
    puts "Migrations are pending. Make sure to run `rake db:migrate` first."
    return
  end
  exec "rerun -b 'rackup config.ru'"
end