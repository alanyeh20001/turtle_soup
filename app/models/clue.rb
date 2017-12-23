class Clue < ApplicationRecord
  belongs_to :soup

  validates :clue, :soup_id, presence: true

  after_create_commit :broadcast_clue

  private

  def broadcast_clue
    ClueBroadcastJob.perform_later(self)
  end
end
