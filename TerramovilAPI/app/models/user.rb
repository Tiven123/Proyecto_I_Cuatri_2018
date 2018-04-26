class User < ApplicationRecord
    has_many :repair
    has_many :sale
end
