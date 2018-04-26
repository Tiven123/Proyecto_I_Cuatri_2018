class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :lastName
      t.integer :celphone
      t.string :user
      t.string :password
      t.string :rol
      t.string :token

      t.timestamps
    end
  end
end
