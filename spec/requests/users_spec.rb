require "rails_helper"

RSpec.describe "/users", :type => :request do
  let(:user) { create :user, email: 'carl@example.com' }

  describe 'GET /users.json' do
    context 'when signed in' do
      let(:expected_json) do
        {
          email: 'carl@example.com',
          reminders_enabled: false
        }.to_json
      end  

      before { sign_in user }

      it "returns the user json" do
        get '/user.json'
        expect(response.body).to eq(expected_json)
      end
    end

    context 'when not signed in' do
      it "is not allowed" do
        get '/user.json'
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'PUT /users.json' do
    let(:params) do
      {
        user: {
          reminders_enabled: true
        }
      }
    end

    subject do
      put '/user.json', params: params
    end

    context 'when signed in' do
      before { sign_in user }

      it "updates the user" do
        expect { subject }.to change{ user.reload.reminders_enabled}.to(true)
      end
    end

    context 'when not signed in' do
      it "is not allowed" do
        put '/user.json'
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end