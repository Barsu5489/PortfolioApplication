class User < ActiveRecord::Base
    has_many :projects
    has_many :skills

    #include Bcrypt  
    has_secure_password
end