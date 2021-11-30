class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :buisness_id
end
