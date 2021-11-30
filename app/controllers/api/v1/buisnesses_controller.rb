module Api
  module V1
    class BuisnessesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        buisnesses = Buisness.all

        render json: BuisnessSerializer.new(buisnesses, options).serialized_json
      end

      def show
        buisness = Buisness.find_by(slug: params[:slug])

        render json: BuisnessSerializer.new(buisness, options).serialized_json
      end

      def create
        buisness = Buisness.new(buisness_params)

        if buisness.save
          render json: BuisnessSerializer.new(buisness).serialized_json
        else
          render json: { error: buisness.errors.messages }, status: 422
        end
      end

      def update
        buisness = Buisness.find_by(slug: params[:slug])

        if buisness.update(buisness_params)
          render json: BuisnessSerializer.new(buisness, options).serialized_json
        else
          render json: { error: buisness.errors.messages }, status: 422
        end
      end

      def destroy
        buisness = Buisness.find_by(slug: params[:slug])

        if buisness.destroy
          head :no_content
        else
          render json: { error: buisness.errors.messages }, status: 422
        end
      end
      
      private

      def buisness_params
        params.require(:buisness).permit(:name, :image_url)
      end

      def options
        @options ||= {include: %i[reviews]}
      end
    end
  end
end