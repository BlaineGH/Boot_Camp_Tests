class Idea < ActiveRecord::Base
  belongs_to :user
  has_many :likes, counter_cache: true
  has_many :likers, through: :likes, source: :user, dependent: :destroy
  validates :content, presence: true, length: { minimum: 8 }
end
