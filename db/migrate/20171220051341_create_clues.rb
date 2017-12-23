class CreateClues < ActiveRecord::Migration[5.1]
  def change
    create_table :clues do |t|
      t.string :clue
      t.references :soup, foreign_key: true

      t.timestamps
    end
  end
end
