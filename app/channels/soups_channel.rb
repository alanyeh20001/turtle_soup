class SoupsChannel < ApplicationCable::Channel
  def subscribed
    soup_id = params[:soup_id]

    stream_from "soup_#{soup_id}_channel"

    soup = Soup.find_by(id: soup_id)
    if soup.user == current_user
      if soup.state == "pending"
        soup.update!(state: "active")
        AppearanceBroadcastJob.perform_later(soup_id, "appear")
      end
    end
  end

  def unsubscribed
    soup_id = params[:soup_id]
    soup = Soup.find_by(id: soup_id)
    if soup.user == current_user
      if soup.state == "active"
        soup.update!(state: "pending")
        AppearanceBroadcastJob.perform_later(soup_id, "disappear")
      end
    end
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
