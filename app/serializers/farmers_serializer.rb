class FarmersSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :location, :email
end
