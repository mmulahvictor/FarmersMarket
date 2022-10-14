class Item < ApplicationRecord
    belongs_to :farmer
    validates :name, presence: true
    validates :image_url, presence: true
    # belongs_to :customer
end
