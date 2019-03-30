const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const listingSchema = new Schema({
  listing_id: String,
  listing_name: String,
  host_picture_url: String,
  host_name: String,
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
    type_of_bed: String,
    no_of_beds: Number
  }]
})

let Listings = mongoose.model('List', listingSchema); // list is all your documents
// Listings is model of my documents

module.exports = Listings;