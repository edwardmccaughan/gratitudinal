class Gratitude < ApplicationRecord
  belongs_to :user

  validate :body, presence: true, length: { maximum: 1000 }
end
