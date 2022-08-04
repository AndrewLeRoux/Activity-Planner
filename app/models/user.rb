class User < ApplicationRecord
    has_secure_password
    
    has_many :favorites
    has_many :user_preferences
    has_many :preferences, through: :user_preferences
    has_many :activities, through: :favorites
end
