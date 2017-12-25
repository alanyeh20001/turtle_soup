class SoupsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update]

  def index
    if params[:state] && params[:state] == "finished"
      @soups = Soup.where(state: "finished")
    else
      @soups = Soup.where(state: ["active", "pending"])
    end
  end

  def show
    @soup = Soup.includes(:messages, :clues).find_by(id: params[:id])
    @clue = @soup.clues.new

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
    return if @soup.state == "finished"

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

  private

  def soup_params
    params.require(:soup).permit(:title, :description, :state)
  end
end
