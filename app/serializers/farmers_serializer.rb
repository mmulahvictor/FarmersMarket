class FarmersSerializer < ActiveModel::Serializer
  attributes :id, :username, :phone, :location, :email
end