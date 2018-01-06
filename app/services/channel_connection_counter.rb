class ChannelConnectionCounter
  def initialize(params)
    @key = "soup_#{params[:soup_id]}_channel_connection_count"
  end

  def set_counts(action)
    case action
    when :subscribe
      $redis.set(key, current_counts + 1)
    when :unsubscribe
      $redis.set(key, current_counts - 1)
    end
  end

  def get_counts
    current_counts
  end

  private

  attr_reader :key

  def current_counts
    $redis.get(key).to_i || 0
  end
end
