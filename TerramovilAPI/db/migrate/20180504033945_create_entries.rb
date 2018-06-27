class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.date :date
      t.integer :amount
      t.string :description

      t.timestamps
    end
  end
end
