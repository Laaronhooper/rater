# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

Buisness.create([
  { 
    name: "McDonalds",
    image_url: "rater/app/assets/images/McDonalds-logo.png"
  }, 
  { 
    name: "Hungry Jacks",
    image_url: "./app/assets/images/McDonalds-logo.png"
  },
  { 
    name: "Subway",
    image_url: "/app/assets/images/McDonalds-logo.png"
  }, 
  { 
    name: "Tex-Mex",
    image_url: "https://rater.s3.amazonaws.com/Tex-Mex.png" 
  }
])

# mcdonalds = Buisness.create(
#     name: "McDonalds",
#   )
#   mcdonalds.buisness_image.attach(
#     io: File.open(Rails.root.join("./app/assets/images/McDonalds-logo.png")),
#       filename: 'McDonalds-logo.png')

# hungry_jacks = Buisness.create(
#     name: "hungry_jacks",
#   )
#   hungry_jacks.buisness_image.attach(
#     io: File.open(Rails.root.join("./app/assets/images/McDonalds-logo.png")),
#       filename: 'McDonalds-logo.png')