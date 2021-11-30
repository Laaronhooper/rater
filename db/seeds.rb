# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

Buisness.create([
  { 
    name: "McDonalds",
    image_url: "https://rater.s3.amazonaws.com/McDonalds.png"
  }, 
  { 
    name: "Hungry Jacks",
    image_url: "https://rater.s3.amazonaws.com/Hungry-Jacks.png"
  },
  { 
    name: "Subway",
    image_url: "https://rater.s3.amazonaws.com/Subway.png" 
  }, 
  { 
    name: "Tex-Mex",
    image_url: "https://rater.s3.amazonaws.com/Tex-Mex.png" 
  }
])