class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # @api: Enable CORS Headers
  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

  # @api: Format the json response
  def json_response(code: 200, data: nil)
    status = [200, 201].include?(code) ? "SUCCESS" : "FAILED"
    headers['Content-Type'] = 'application/json'
    if data
      [ code, { data: data, message: status }.to_json ]
    end
  end

  # @views: Format the erb responses
  def erb_response(file)
    headers['Content-Type'] = 'text/html'
    erb file
  end

  # @helper: not found error formatter
  def not_found_response
    json_response(code: 404, data: { error: "You seem lost. That route does not exist." })
  end

  # @api: 404 handler
  not_found do
    not_found_response
  end

  # Add your routes here
  get "/" do
    user = User.all
    json_response(data: user)
  end

  # Get all users from db
  get '/users' do
    user = User.all
    json_response(data: user)
  end

  get '/skills/:user_id' do
    user = User.find(params[:user_id])
    skills = user.skills
    json_response(data: skills)
  end

  post '/skills/:user_id' do
    user = User.find(params[:user_id])
    skill = user.skills.limit(10).create(name: params[:name])
    json_response(data: skill)
  end

  delete '/skills/:id' do
    skill = Skill.find(params[:id])
    skill.destroy
    json_response(data: skill)
  end

  # Adding new user
  post '/signup' do 
    user = User.find_by(email: params[:email])

    if user
      json_response(code: 401, data: { error: 'Email already exists' })
    else
      new_user = User.create(
        email: params[:email],
        password_digest: params[:password],
        first_name: params[:first_name],
        last_name: params[:last_name]
      )

      if new_user.valid?
        json_response(data: { user: new_user })
      else
        json_response(code: 401, data: { error: 'Invalid user data' })
      end
    end
  end

  patch '/project/:id' do
    project = Project.find(params[:id])
    project.update(
      title: params[:title],
      description: params[:description],
      repo_url: params[:repo_url]
    )
    json_response(data: project)
  end

  post '/login' do
    # Find user that has a specific email
    user = User.find_by(email: params[:email])

    if user # && user.authenticate(params[:password])
      json_response(data: { user: user })
    else
      json_response(code: 401, data: { error: 'Invalid
 email or password'})
      end
   end

   get '/projects/:user_id' do
   # if session[:user_id]
      user = User.find(params[:user_id])
    projects = user.projects
    json_response(data: projects)
  end
  #  else
    #  {error:"Login to see projects"}
 #   end
  delete '/projects/:id' do
    project = Project.find(params[:id])
    project.destroy
    json_response(data: project)
  end

  post '/project/:user_id' do
    user = User.find(params[:user_id])
    project = user.projects.create(
      title: params[:title],
      description: params[:description],
      repo_url: params[:repo_url]
    )
    json_response(data: project)
  end
end
