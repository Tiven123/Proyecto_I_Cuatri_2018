class CreateAccessories < ActiveRecord::Migration[5.1]
  def change
    create_table :accessories do |t|
      t.string :description
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end
end
