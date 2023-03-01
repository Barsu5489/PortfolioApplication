class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get '/users' do
    user = User.all
    user.to_json
  end

  post '/users' do 
    new_user = User.create(
      email: params[:email],
     password_digest: params[:password],
     first_name: params[:first_name],
      last_name: params[:last_name]
    )
    new_user.to_json
  end
end
