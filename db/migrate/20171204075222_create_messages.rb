class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :body
      t.references :soup, foreign_key: true
      t.references :user, foreign_key: true
      t.boolean :highlight, default: false

      t.timestamps
    end
  end
end
