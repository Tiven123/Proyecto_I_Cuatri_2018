class CreateReplacements < ActiveRecord::Migration[5.1]
  def change
    create_table :replacements do |t|
      t.string :brand
      t.string :model
      t.string :type
      t.string :description
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end
end
