class CreateReplacements < ActiveRecord::Migration[5.1]
  def change
    create_table :replacements do |t|
      t.string :description
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end
end
