class AddIsDeleteTimeToUser < ActiveRecord::Migration
  def change
    add_column :users , :is_deleted_time, :datetime
    add_column :users , :is_deleted_string, :string
  end
end
