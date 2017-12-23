class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast("soup_#{message.soup_id}_channel", type: "message", content: render_message(message))
  end

  private

  def render_message(message)
    MessagesController.render partial: "messages/message", locals: { soup: message.soup, message: message }
  end
end
