class Item < ApplicationRecord
    belongs_to :farmer
    belongs_to :customer
end
