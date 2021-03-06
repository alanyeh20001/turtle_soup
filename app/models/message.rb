class Message < ApplicationRecord
  belongs_to :soup
  belongs_to :user

  after_create_commit :broadcast_message

  private

  def broadcast_message
    MessageBroadcastJob.perform_later(self)
  end
end

