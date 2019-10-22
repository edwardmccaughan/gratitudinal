require "rails_helper"

RSpec.describe "gratitudes", :type => :request do
  let(:user) { create :user }

  describe 'gratitudes index' do
    subject { get '/gratitudes.json' }
    let!(:older_gratitude) { create :gratitude, user: user, created_at: 2.days.ago, body: 'older' }
    let!(:gratitude) { create :gratitude, user: user, body: 'newer' }

    context 'when signed in' do
      before { sign_in user }
      
      context 'without today param' do
        it "returns the all the gratitudes" do
          subject
          parsed = JSON.parse(response.body)

          expect(parsed.length).to eq(2)
          expect(parsed[0]["body"]).to eq('newer')
          expect(parsed[1]["body"]).to eq('older')
        end
      end

      context 'with today param' do
        subject { get '/gratitudes.json', params: { today: true}}

        it "returns the user json" do
          subject
          parsed = JSON.parse(response.body)

          expect(parsed.length).to eq(1)
          expect(parsed[0]["body"]).to eq('newer')
        end
      end
    end

    context 'when not signed in' do
      it "is not allowed" do
        subject
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe 'create gratitude' do
    subject { post '/gratitudes.json', params: params }

    let(:params) do
      { 
        gratitude: {
          body: 'hats'
        }
      }
    end

    context 'when signed in' do
      before { sign_in user }

      it "returns the user json" do
        subject
        expect(response).to have_http_status(:created)

        expect(Gratitude.last.body).to eq('hats')
        expect(Gratitude.last.user).to eq(user)
      end
    end

    context 'when not signed in' do
      it "is not allowed" do
        subject
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
