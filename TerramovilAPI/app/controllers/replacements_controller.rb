class ReplacementsController < ApplicationController
  before_action :set_replacement, only: [:show, :update, :destroy]

  # GET /replacements
  def index
    @replacements = Replacement.all

    render json: @replacements
  end

  # GET /replacements/1
  def show
    render json: @replacement
  end

  # POST /replacements
  def create
    @replacement = Replacement.new(replacement_params)

    if @replacement.save
      render json: @replacement, status: :created, location: @replacement
    else
      render json: @replacement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /replacements/1
  def update
    if @replacement.update(replacement_params)
      render json: @replacement
    else
      render json: @replacement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /replacements/1
  def destroy
    @replacement.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_replacement
      @replacement = Replacement.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def replacement_params
      params.require(:replacement).permit(:brand, :model, :type, :description, :price, :quantity)
    end
end
