class PreferenceSerializer < ActiveModel::Serializer
  attributes :id, :name, :belongs_to
end
