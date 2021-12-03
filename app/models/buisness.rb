class Buisness < ApplicationRecord
  has_many :reviews
  has_one_attached :buisness_image
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def average_score
    return 0 unless reviews.count.positive?
    reviews.average(:score).to_f.round(2)
  end

  # def calculate_average
  #   return 0 unless reviews.size.positive?

  #   avg = reviews.average(:score).to_f.round(2) * 100
  #   update_column(:average_score, avg)
  # end
end
