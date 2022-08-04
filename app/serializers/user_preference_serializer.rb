class UserPreferenceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :preference_id
  has_one :user
  has_one :preference
end
