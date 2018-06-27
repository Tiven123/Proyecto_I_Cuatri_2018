class CreateRepairs < ActiveRecord::Migration[5.1]
  def change
    create_table :repairs do |t|
      t.date :date
      t.string :deviceDescription
      t.string :problem
      t.integer :price
      t.references :replacement, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
