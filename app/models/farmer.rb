class Farmer < ApplicationRecord
    has_secure_password
    has_many :items, dependent: :destroy
    validates :username, presence: true, uniqueness: true
    validates :email, uniqueness: true
end
