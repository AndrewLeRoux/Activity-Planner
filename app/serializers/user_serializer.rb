class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :bio, :preferences
  has_many :preferences
  has_many :favorites
end
