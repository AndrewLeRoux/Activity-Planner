require "rails_helper"

RSpec.describe UserPreferencesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/user_preferences").to route_to("user_preferences#index")
    end

    it "routes to #show" do
      expect(get: "/user_preferences/1").to route_to("user_preferences#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/user_preferences").to route_to("user_preferences#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/user_preferences/1").to route_to("user_preferences#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/user_preferences/1").to route_to("user_preferences#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/user_preferences/1").to route_to("user_preferences#destroy", id: "1")
    end
  end
end
