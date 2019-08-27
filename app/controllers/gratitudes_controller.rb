class GratitudesController < ApplicationController
  before_action :set_gratitude, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  def index
    @gratitudes = current_user.gratitudes
  end

  def show
  end

  def new
    @gratitude = Gratitude.new
  end

  def edit
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

  def update
    respond_to do |format|
      if @gratitude.update(gratitude_params)
        format.html { redirect_to @gratitude, notice: 'Gratitude was successfully updated.' }
        format.json { render :show, status: :ok, location: @gratitude }
      else
        format.html { render :edit }
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
end
