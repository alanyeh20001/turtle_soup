class SoupsChannel < ApplicationCable::Channel
  def subscribed
    soup_id = params[:soup_id]
    ChannelConnectionCounter.new(soup_id: soup_id).set_counts(:subscribe)

    stream_from "soup_#{soup_id}_channel"
  end

  def unsubscribed
    soup_id = params[:soup_id]
    ChannelConnectionCounter.new(soup_id: soup_id).set_counts(:unsubscribe)
  end

  def send_message(data)
    message = data['message']
    soup_id = data['soup_id']

    current_user.messages.create!(body: message, soup_id: soup_id)
  end

  def send_clue(data)
    clue = data['clue']
    soup_id = data['soup_id']

    soup = Soup.find_by(id: soup_id)
    soup.clues.create!(clue: clue)
  end
end
