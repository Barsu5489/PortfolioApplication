class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
    # configure do
    #   enable :sessions
    #   set :session_secret, "secret"
    # end
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  
  #Get all users from db
  get '/users' do
    user = User.all
    user.to_json
  end





  get '/skills/:user_id' do
    user = User.find(params[:user_id])
    skills = user.skills
    skills.to_json
  end

  post '/skills/:user_id' do
    skill = Skill.create(
      name:params[:name], user_id:params[:user_id]
      
    )
    skill.to_json
  end

  delete '/skills/:id' do
    skill = Skill.find(params[:id])
    skill.destroy
    skill.to_json
  end
 # Adding new user
 post '/signup' do 
  user = User.find_by(email: params[:email])

  if user
    { error: 'Email already exists' }.to_json
  else
    new_user = User.create(
      email: params[:email],
      password_digest: params[:password],
      first_name: params[:first_name],
      last_name: params[:last_name]
    )

    if new_user.valid?
      #session[:user_id] = new_user.id
      { user: new_user }.to_json
    else
      status 401
      { error: 'Invalid user data' }.to_json
    end
  end
end


  
   post '/login' do
    # Find user that has a specific email
    user = User.find_by(email: params[:email])
 # && user.authenticate(params[:password])
      if user
       # session[:user_id] = user.id
       user.to_json
      
       { user: user }.to_json
      else
        status 401
        {error:'Invalid email or password'}.to_json
      end
   end

   get '/projects/:user_id' do
   # if session[:user_id]
      user = User.find(params[:user_id])
    projects = user.projects
    projects.to_json
  end
  #  else
    #  {error:"Login to see projects"}
 #   end
  delete '/projects/:id' do
    project = Project.find(params[:id])
    project.destroy
    project.to_json
  end
end
