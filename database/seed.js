const db = require('./index.js');
const Listings = require('./schema.js');
const faker = require('faker');

const Type_Of_Listings = [
  'Entire Home',
  'Apartment',
  'Private Room',
  'Shared Room',
  'Hotel Room'
];

const Type_Of_Beds = [
  'sofa_bed',
  'twin_bed',
  'queen_bed',
  'king_bed'
]

let bedCount = faker.random.number({min: 1, max: 6})

var createListing = () => {
  for( var data = 100; data < 200; data++) {
    let dp = Math.ceil(Math.random() * 35);
    var dataId = data;
    Listings.create({
      listing_id: dataId,
      listing_name: faker.lorem.sentences(1),
      host_picture_url: `https://s3-us-west-1.amazonaws.com/hostprofilepicture/${dp}.jpg`,
      host_name: faker.name.findName(),
      city: faker.address.city(),
      max_guests: faker.random.number({min: 1, max: 6}),
      type_of_listings: Type_Of_Listings[Math.ceil(Math.random() * Type_Of_Listings.length)],
      bedrooms: faker.random.number({min: 1, max: 6}),
      beds: bedCount,
      baths: faker.random.number({min: 1, max: 5}),
      location_rating: faker.lorem.sentences(1),
      checkin_rating: faker.lorem.sentences(1),
      description: faker.lorem.paragraphs(faker.random.number({ min: 4, max: 7 })),
      amenities: [{
        essentials: faker.random.boolean(),
        self_checkin: faker.random.boolean(),
        wifi: faker.random.boolean(),
        tv: faker.random.boolean(),
        hairdryer: faker.random.boolean(),
        hangers: faker.random.boolean(),
        shampoo: faker.random.boolean(),
        laptop_friendly_workspace: faker.random.boolean(),
        carbon_monoxide_detector: faker.random.boolean(),
        smoke_detector: faker.random.boolean()
      }],
      sleeping_arrangements: [{
        type_of_bed: Type_Of_Beds[Math.ceil(Math.random() * Type_Of_Beds.length)],
        no_of_beds: bedCount
      }]
    })
  }
 console.log('data seeded');
}

createListing();

