class CreateHighlights < ActiveRecord::Migration[5.1]
  def change
    create_table :highlights do |t|
      t.references :soup, foreign_key: true
      t.text :highlight_set

      t.timestamps
    end
  end
end
