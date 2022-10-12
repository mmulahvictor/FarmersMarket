class FarmerWithItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :location, :email
  has_many :items
end