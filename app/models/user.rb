class User < ActiveRecord::Base
    has_many :projects
    has_many :skills

    #include Bcrypt  
    has_secure_password

    def project
        projects.where(user_id: self.id)
    end

    def skill
        skills.where(user_id: self.id)
    end
end