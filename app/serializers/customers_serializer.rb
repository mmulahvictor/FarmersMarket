class CustomersSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password
end
