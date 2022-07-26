class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.Activity :belongs_to
      t.User :belongs_to

      t.timestamps
    end
  end
end
