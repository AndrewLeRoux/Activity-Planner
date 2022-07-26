class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :activity_type
      t.integer :participants
      t.float :price

      t.timestamps
    end
  end
end
