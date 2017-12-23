class WelcomeController < ApplicationController
  def index
    @rand_soup = Soup.where(state: ["active", "pending"]).sample
  end
end
