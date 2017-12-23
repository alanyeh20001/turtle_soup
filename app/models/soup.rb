class Soup < ApplicationRecord
  belongs_to :user

  has_many :favorites
  has_many :messages
  has_many :clues

  validates :title, :description, presence: true

  after_update_commit :broadcast_soup, if: :soup_finished?

  private

  def soup_finished?
    self.state == "finished"
  end

  def broadcast_soup
    SoupBroadcastJob.perform_later(self)
  end
end
