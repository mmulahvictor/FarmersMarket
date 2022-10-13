class ItemsSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :quantity
  has_one :farmer
end
