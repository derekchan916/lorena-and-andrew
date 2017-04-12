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
  welcomeDinner: false,
  celebrationParty: false,
  ceremonyReception: false,
}

const GUEST_SCHEME_CHECKBOXES = ['welcomeDinner', 'celebrationParty', 'ceremonyReception'];

const HEADER_LINKS = [
  {
    title: 'HOME',
    id: 'home',
    offset: -15,
  },
  {
    title: 'EVENTS',
    id: 'events',
    offset: -64,
  },
  {
    title: 'WEDDING PARTY',
    id: 'weddingParty',
    offset: -64,
  },
  {
    title: 'TRAVEL',
    id: 'travel',
    offset: -64,
  },
  {
    title: 'RSVP & GIFTS',
    id: 'rsvp',
    offset: -64,
  },
]

const PARTY_PEOPLE = [
  {
    name: 'OLIVIA & SCOTT',
    position: 'Officiants',
    description: [
      "Olivia and Scott's extremely caring nature naturally meant that they became Lorena's pseudo mom and dad in New York. Olivia and Lorena both work at Novantas together (in fact, they share an office). She provides daily and weekly advice and Scott packs lunch and snacks for Olivia and Lorena. Olivia and Scott are a great team, and the wittiest and most sarcastic people/couple that we know!",
      "Olivia and Scott are both consultants in New York at Novantas and Deloitte respectively. They are also getting married this June in Chicago (CONGRATS!)"
    ],
    image: 'app/images/Olivia.jpg',
  },
  {
    name: 'FLORA CHAN',
    position: 'Matron of Honour, Sister of the Bride',
    description: [
      "If you were ever curious as to what a more mature and cooler version of Lorena would've been, all you would need to do is look at Flora. Flora is the quintessential older sister, having to put up with Lorena's annoying behaviour on a day-to-day basis, and always having to step in to play mediator between parents and sibling. She's always there to lend a ear and provide advice, despite being half way across the world."
    ],
    image: 'app/images/flora.jpg'
  },
  {
    name: 'KEVIN WONG',
    position: 'Best Man, Brother of the Groom',
    description: [
      "Kevin currently works at a health start-up in Toronto."
    ],
    image: 'app/images/kevin.jpeg'
  },
  {
    name: 'DEREK CHAN',
    position: 'Groomsman, Brother of the Bride',
    description: [
      "If you were ever curious as to what a sillier and cooler version of Derek would've been, all you would need to do is look at Lorena. He is super patient, and puts up with her shenanigans all the time. Growing up with him was no easy feat, but as they became older, they started to develop mutual understanding of each other's craziness. After living together for two years in New York, they still enjoy each other's company and continue to uphold family dinners every Sunday night.",
      "Derek works as a grunt farmer in the fields of Rivendale.",
    ],
    image: 'app/images/Derek.jpg'
  },
  {
    name: 'CAROLINE CHIU',
    position: 'Bridesmaid',
    description: [
      "When Caroline and Lorena first met, they did not get along. One thought the other was kind of odd, and the other just thought the other was quiet (won't mention who thought what, but we're sure you can guess). Little did Caroline know, Chemistry would bring them together and they would each gain a life-long friend. Caroline is a great dancer as well, and continues to inspire Lorena with her artistic and agricultural interests every day!",
      "Caroline is economist and co-owner of Rivendale Farms."
    ],
    image: 'app/images/caroline.jpg'
  },
  {
    name: 'CHRIS JANG',
    position: 'Groomsman',
    description: [
      "Chris currently works at Shell."
    ],
    image: 'app/images/Chris.JPG'
  },
  {
    name: 'PHILIP LA',
    position: 'Groomsman',
    description: [
      "Philip is currently a manager at Figure1 in Toronto."
    ],
    image: 'app/images/Phillip.JPG'
  },
  {
    name: 'JACLYN SING',
    position: 'Bridesmaid',
    description: [
      "Jaclyn and Lorena have been close friends for more than a forever (16+ years) ever since they first met way back in Grade 3. Since Grade school, they grew up sitting in her kitchen, eating chocolate man cookies, and contemplating the mysteries of life. They continue this tradition today. She challenges Lorena to think below the surface, more critically and more broadly about everything. They  also enjoy curry fishballs.",
      "Jaclyn is currently a nurse in Vancouver."
    ],
    image: 'app/images/jacylylyn.JPG'
  },
  {
    name: 'JANET WU',
    position: 'Bridesmaid',
    description: [
      "Miss Wu is one of the most patient and caring people that we know and is basically the only reason why Lorena survived university. They did every assignment, lab group and class together...and lived together. They saw and spent a lot of their waking moments with each other during the five years of university. Janet is super supportive and always challenges Lorena to be a kinder and more practical version of herself. She can't wait to continue seeing Janet every Christmas!",
      "Janet currently works as an engineer in Hong Kong."
    ],
    image: 'app/images/janet.jpg'
  },
  {
    name: 'HAYLIE WU',
    position: "Flower Girl, Lorena's niece",
    description: [
      "Haylie is Flora's daughter and Lorena's and Derek's niece. She's an adorable one and a half year old and loves dogs!",
      "Haylie currently works as a full-time baby in Hong Kong."
    ],
    image: 'app/images/haylie-1.jpg',
  },
  {
    name: 'TORO',
    link: 'https://www.instagram.com/gofindtoro/',
    instagram: '@gofindtoro',
    position: "Flower Puppy",
    description: [
      "Toro will be accompanying beautiful flower girl Haylie Wu to walk to isle.",
      "Good boy Toro, good boy."
    ],
    image: 'app/images/toro-1.png'
  },
];

export {
  FIREBASE_CONFIG,
  GUEST_SCHEMA,
  GUEST_SCHEME_CHECKBOXES,
  HEADER_LINKS,
  PARTY_PEOPLE
}
