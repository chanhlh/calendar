class User < ActiveRecord::Base
  acts_as_paranoid :column => 'is_deleted_time' , :column_type => 'time'
  has_many :posts , dependent: :destroy
  has_one :address
end
