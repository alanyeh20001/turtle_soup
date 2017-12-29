class AppearanceBroadcastJob < ApplicationJob
  queue_as :default

  def perform(soup_id, appearance)
    ActionCable.server.broadcast("soup_#{soup_id}_channel",
                                   type: "appearance",
                                   content: { appearance: appearance, form: render_soup_form })
  end

  private

  def render_soup_form
    SoupsController.render partial: "messages/form", locals: { message: Message.new }
  end
end
