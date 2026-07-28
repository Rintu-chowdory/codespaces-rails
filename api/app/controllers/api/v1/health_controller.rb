module Api
  module V1
    class HealthController < ApplicationController
      def show
        render json: { status: "ok", environment: Rails.env, timestamp: Time.current }
      end
    end
  end
end
