class Customer < ApplicationRecord
    # validates :my_email_attribute, email: true, presence: true
    has_many :items
    has_many :farmers, through: :items
end
