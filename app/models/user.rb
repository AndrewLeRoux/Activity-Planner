class User < ApplicationRecord
    has_many :favorites
    has_many :user_preferences
    has_many :activities, through: :favorites
end
