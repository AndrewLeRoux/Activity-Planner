class CreatePreferences < ActiveRecord::Migration[6.1]
  def change
    create_table :preferences do |t|
      t.string :name
      t.User :belongs_to

      t.timestamps
    end
  end
end
