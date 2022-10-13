class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :image_url
      t.string :quantity
      t.belongs_to :farmer, null: false, foreign_key: true
      # t.belongs_to :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
