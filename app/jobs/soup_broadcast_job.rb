class SoupBroadcastJob < ApplicationJob
  queue_as :default

  def perform(soup)
    ActionCable.server.broadcast("soup_#{soup.id}_channel", type: "soup")
  end
end
