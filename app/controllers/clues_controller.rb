class CluesController < ApplicationController
  def create
    @clue = Clue.new(clue_params)

    respond_to do |format|
      if @clue.save
        format.json { render json: @clue.to_json, status: :created }
      else
        format.json { render json: @clue.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  private

  def clue_params
    params.require(:clue).permit(:clue, :soup_id)
  end
end
