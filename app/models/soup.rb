class Soup < ApplicationRecord
  include AASM

  belongs_to :user

  has_many :favorites
  has_many :messages
  has_many :clues

  validates :title, :description, presence: true

  after_update_commit :broadcast_soup, if: :soup_finished?

  aasm column: :state do
    state :active, initial: true
    state :pending
    state :finished

    event :pause do
      transitions from: :active, to: :pending
    end

    event :finish do
      transitions from: :active, to: :finished
    end

    event :continue do
      transitions from: :pending, to: :active
    end
  end

  private

  def soup_finished?
    self.state == "finished"
  end

  def broadcast_soup
    SoupBroadcastJob.perform_later(self)
  end
end
