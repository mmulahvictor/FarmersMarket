class CreateFarmers < ActiveRecord::Migration[7.0]
  def change
    create_table :farmers do |t|
      t.string :username
      t.integer :phone
      t.string :location
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
