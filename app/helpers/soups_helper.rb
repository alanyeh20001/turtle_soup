module SoupsHelper
  def finished_soups?(state)
    state == "finished"
  end

  def render_soup_state(soup)
    soup.finished? ? "finished" : soup.pending? ? "pending" : ""
  end

  def format_description(soup)
    simple_format(strip_tags(soup.description))
  end
end
