class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :activity_id
  has_one :user
  belongs_to :activity
end
