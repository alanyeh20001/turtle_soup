class ClueBroadcastJob < ApplicationJob
  queue_as :default

  def perform(clue)
    ActionCable.server.broadcast("soup_#{clue.soup_id}_channel", type: "clue", content: render_clue(clue))
  end

  private

  def render_clue(clue)
    CluesController.render partial: "clues/clue", locals: { clue: clue }
  end
end
