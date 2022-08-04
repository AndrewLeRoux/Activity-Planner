class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :activity_type, :participants, :price
  has_many :favorites
end
