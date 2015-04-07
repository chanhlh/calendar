class CreateAddress < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :district
      t.integer :user_id
    end
  end
end
