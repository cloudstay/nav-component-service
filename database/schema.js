const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const listingSchema = new Schema({
  listing_id: String,
  listing_name: String,
  user_picture_url: String,
  user_name: String,
  city: String,
  max_guests: Number,
  type_of_listings: String,
  bedrooms: Number,
  beds: Number,
  baths: Number,
  location_rating: String,
  checkin_rating: String,
  description: String,
  amenities: [{
    essentials: Boolean,
    self_checkin: Boolean,
    wifi: Boolean,
    tv: Boolean,
    hairdryer: Boolean,
    hangers: Boolean,
    shampoo: Boolean,
    laptop_friendly_workspace: Boolean,
    carbon_monoxide_detector: Boolean,
    smoke_detector: Boolean
  }],
  sleeping_arrangements: [{
    sofa: Number,
    sofa_bed: Number,
    twin_bed: Number,
    queen_bed: Number,
    king_bed: Number
  }]
})

let Listing = mongoose.model('List', listingSchema);