class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :address
      t.integer :sq_footage
      t.integer :window_count
      t.string :roof_pitch
      t.integer :floor_count
      t.text :notes

      t.timestamps
    end
  end
end
