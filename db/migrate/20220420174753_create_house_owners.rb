class CreateHouseOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :house_owners do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :owner, null: false, foreign_key: true
      t.belongs_to :house, null: false, foreign_key: true

      t.timestamps
    end
  end
end
