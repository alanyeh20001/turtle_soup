class AddStateToSoups < ActiveRecord::Migration[5.1]
  def change
    add_column :soups, :state, :string, default: "active"
  end
end
