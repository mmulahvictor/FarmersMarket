class CreateFarmers < ActiveRecord::Migration[7.0]
  def change
    create_table :farmers do |t|
      t.string :name
      t.integer :phone
      t.string :location
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
