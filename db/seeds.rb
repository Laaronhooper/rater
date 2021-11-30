# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
require 'faker'

10.times do
  buisness = Buisness.create(
    name: Faker::Company.name,
    image_url: "http://www..com"
    slug: ""
  )
  buisness.save!
end