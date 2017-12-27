class AddResultToSoups < ActiveRecord::Migration[5.1]
  def change
    add_column :soups, :result, :text
  end
end
