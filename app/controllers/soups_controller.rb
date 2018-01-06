class SoupsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]

  def index
    if params[:state] && params[:state] == "finished"
      @soups = Soup.where(state: "finished").desc_order
    else
      @soups = Soup.where(state: ["active", "pending"]).desc_order
      @connection_counter = get_connection_counter(@soups.map(&:id))
    end
  end

  def show
    @soup = Soup.includes({ messages: :user }, :clues).find_by(id: params[:id])
    @clue = Clue.new

    if current_user
      @message = current_user.messages.new
    end
  end

  def new
    @soup = current_user.soups.new
  end

  def create
    @soup = current_user.soups.new(soup_params)

    if @soup.save
      redirect_to soup_path(@soup)
    else
      render :new
    end
  end

  def edit
    @soup = current_user.soups.find(params[:id])
  end

  def update
    @soup = current_user.soups.find(params[:id])
    return if @soup.finished?

    respond_to do |format|
      if @soup.update(soup_params)
        format.html { redirect_to soup_path(@soup) }
        format.json { render json: @soup, status: :created }
      else
        format.html { render :edit }
        format.json { render json: @soup.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def rules
  end

  def owned
    @soups = current_user.soups.desc_order
  end

  def online_counts
    soup_ids = params[:soup_ids]
    @connection_counter = get_connection_counter(soup_ids)

    respond_to do |format|
      format.json { render json: @connection_counter, status: :ok }
    end
  end

  private

  def soup_params
    params.require(:soup).permit(:title, :description, :state, :result)
  end

  def get_connection_counter(soup_ids)
    soup_ids.each_with_object({}) do |id, obj|
      obj[id] = ChannelConnectionCounter.new(soup_id: id).get_counts
    end
  end
end
