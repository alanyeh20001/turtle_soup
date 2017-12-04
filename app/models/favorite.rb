class Favorite < ApplicationRecord
  belongs_to :soup
  belongs_to :user
end
