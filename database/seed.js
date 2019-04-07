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

let createListing = () => {
  for( let data = 100; data < 200; data++) {
    let dp = Math.floor(Math.random() * (36 - 1 + 1)) + 1;
    let no_of_beds = Math.ceil(Math.random() * (6 - 1 + 1)) + 1;
    let bedCount = Math.ceil(no_of_beds/2);
    let dataId = data;
    let listingName = faker.lorem.sentences(1);
    Listings.create({
      listing_id: dataId,
      listing_name: listingName.slice(0, (listingName.length-1)),
      host_picture_url: `https://s3-us-west-1.amazonaws.com/hostprofilepicture/${dp}.jpg`,
      host_name: faker.name.findName(),
      city: faker.address.city(),
      max_guests: faker.random.number({min: 1, max: 6}),
      type_of_listings: Type_Of_Listings[Math.floor(Math.random() * Type_Of_Listings.length)],
      bedrooms: faker.random.number({min: 1, max: 6}),
      beds: no_of_beds,
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
        type_of_bed: Type_Of_Beds[Math.floor(Math.random() * Type_Of_Beds.length)],
        no_of_beds: bedCount/2
      }]
    }, (error) => {
      if (error) {
        console.log('Oops! Something error has caused while seeding data', error);
      } else {
        console.log('Data has been saved');
      }
    })
  }
 console.log('data seeded');
}

const getData = (callback) => {
  Listings.find({}, (error, data) => {
    if(error) {
      console.log("Was not able to find data ", error);
    } else {
      callback(data);
    }
  })
}

module.exports.createListing = createListing;
module.exports.getData = getData;
// createListing();