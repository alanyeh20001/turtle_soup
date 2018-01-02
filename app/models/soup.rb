class Soup < ApplicationRecord
  include AASM

  belongs_to :user

  has_many :favorites, dependent: :destroy
  has_many :messages,  dependent: :destroy
  has_many :clues,     dependent: :destroy

  validates :title, :description, presence: true

  after_update_commit :broadcast_soup, if: Proc.new { |soup| soup.finished? }

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

  def broadcast_soup
    SoupBroadcastJob.perform_later(self)
  end
end
