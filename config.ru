require_relative "./config/environment"

# Allow CORS (Cross-Origin Resource Sharing) requests
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end

# Parse JSON from the request body into the params hash
use Rack::JSONBodyParser

# Our application
run ApplicationController


# require_relative './config/environment'

# # Create a new Rack builder instance
# app = Rack::Builder.new do
#   # Parse JSON from the request body into the params hash
#   use Rack::JSONBodyParser

#   # Insert the CORS middleware before the application
#   use Rack::Cors do
#     allow do
#       origins '*'
#       resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
#     end
#   end

#   # Our application
#   run ApplicationController.new
# end

# # Start the server
# Rack::Handler::WEBrick.run app, Port: 4000
