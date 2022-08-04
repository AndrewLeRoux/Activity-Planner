class PreferenceSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :user_preferences
end
