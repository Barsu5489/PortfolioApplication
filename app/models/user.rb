class User < ActiveRecord::Base
    has_many :projects
    has_many :skills, -> { limit(10) }

    #include Bcrypt  
    has_secure_password
    validates :email, presence: true, uniqueness: true

    
end