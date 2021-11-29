class Buisness < ApplicationRecord
  has_many :reviews

  def slugify
    self.slug = name.parameterize
  end

  def average_score
    reviews.average(:score).round(2).to_f
  end
end
