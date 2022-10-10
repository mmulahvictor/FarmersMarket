class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :image_url
      t.string :quantity
      t.string :farmer_id
      t.string :customer_id

      t.timestamps
    end
  end
end
