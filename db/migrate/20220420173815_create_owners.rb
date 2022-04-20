class CreateOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :owners do |t|
      t.string :name
      t.string :number
      t.string :email
      t.text :notes

      t.timestamps
    end
  end
end
