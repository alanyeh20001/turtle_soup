class DropHighlights < ActiveRecord::Migration[5.1]
  def change
    drop_table :highlights
  end
end
