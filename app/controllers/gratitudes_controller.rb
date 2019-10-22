class GratitudesController < ApplicationController
  before_action :set_gratitude, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  def index
    @gratitudes = if params[:today]
      gratitudes_scope.where('created_at > ?', 24.hours.ago)
    else
      gratitudes_scope
    end
  end

  def create
    @gratitude = Gratitude.new(gratitude_params)
    @gratitude.user = current_user
    respond_to do |format|
      if @gratitude.save
        format.html { redirect_to @gratitude, notice: 'Gratitude was successfully created.' }
        format.json { render :show, status: :created, location: @gratitude }
      else
        format.html { render :new }
        format.json { render json: @gratitude.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @gratitude.destroy
    respond_to do |format|
      format.html { redirect_to gratitudes_url, notice: 'Gratitude was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_gratitude
      @gratitude = Gratitude.find(params[:id])
    end

    def gratitude_params
      params.require(:gratitude).permit(:user_id, :body)
    end

    def gratitudes_scope
      current_user.gratitudes.order(created_at: :desc)
    end
end
