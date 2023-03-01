class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  

    configure do
      enable :sessions
      set :session_secrete, "secret"
    end
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  
  #Get all users from db
  get '/users' do
    user = User.all
    user.to_json
  end
 # Adding new user
  post '/users' do 
    new_user = User.create(
      email: params[:email],
     password_digest: params[:password],
     first_name: params[:first_name],
      last_name: params[:last_name]
    )
    if new_user.valid?
    session[:user_id] = new_user.id
    new_user.to_json
    redirect "http://localhost:3001/projects"
    else
      {error: error}
    end
  end
   post '/login' do
    # Find user that has a specific email
    user = User.find_by(email: params[:email])

      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        redirect "http://localhost:3001/projects"
      else
        {error: 'Invalid email or Password'}
      end
   end


end
