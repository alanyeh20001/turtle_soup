module SoupsHelper
  def finished_soups?(state)
    state == "finished"
  end

  def render_soup_state(soup)
    soup.state == "finished" ? "finished" : soup.state == "pending" ? "pending" : ""
  end
end
