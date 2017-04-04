const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA7qe2-5Ye8cvjl29GT3Zxbb-bBZ2pv5yU",
  authDomain: "blistering-heat-8167.firebaseapp.com",
  guestURL: "https://blistering-heat-8167.firebaseio.com/guests.json",
  databaseURL: "https://blistering-heat-8167.firebaseio.com/",
  storageBucket: "blistering-heat-8167.appspot.com",
  messagingSenderId: "557917043230"
};

const GUEST_SCHEMA = {
  firstName: '',
  lastName: '',
  email: '',
}

const HEADER_LINKS = [
  {
    title: 'HOME',
    id: 'home',
  },
  {
    title: 'EVENTS',
    id: 'events',
  },
  {
    title: 'WEDDING PARTY',
    id: 'weddingParty',
  },
  {
    title: 'TRAVEL',
    id: 'travel',
  },
  {
    title: 'RSVP',
    id: 'rsvp',
  },
]

const PARTY_PEOPLE = [
  {
    name: 'Derek',
    description: 'I am a big douche',
    image: 'app/images/derek-1.jpg',
  },
  {
    name: 'Alice',
    description: 'I am the big douches girlfriend',
    image: 'app/images/derek-1.jpg'
  }
];

export {
  FIREBASE_CONFIG,
  GUEST_SCHEMA,
  HEADER_LINKS,
  PARTY_PEOPLE
}
