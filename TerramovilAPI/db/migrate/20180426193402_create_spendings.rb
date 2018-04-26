class CreateSpendings < ActiveRecord::Migration[5.1]
  def change
    create_table :spendings do |t|
      t.date :date
      t.integer :amount
      t.string :description

      t.timestamps
    end
  end
end
