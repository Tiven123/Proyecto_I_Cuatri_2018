class Repair < ApplicationRecord
  belongs_to :replacement
  belongs_to :user
end
