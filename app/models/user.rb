class User < ActiveRecord::Base
  has_many :posts , dependent: :destroy
  has_one :address
end
