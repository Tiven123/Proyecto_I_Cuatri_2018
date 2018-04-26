class Sale < ApplicationRecord
  belongs_to :accessory
  belongs_to :user
end
