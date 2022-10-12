class ItemsSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :quantity, :farmer_id, :customer_id
end
