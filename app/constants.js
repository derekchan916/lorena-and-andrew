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
    title: 'RSVP',
    id: 'rsvp',
    offset: -64,
  },
]

const PARTY_PEOPLE = [
  {
    name: 'OLIVIA LUI & SCOTT FRY',
    position: 'Officiants',
    description: [
      "Olivia and Scott's extremely caring nature naturally meant that they became Lorena's pseudo mom and dad in New York. Olivia and Lorena both work at Novantas together (in fact, we share an office) and provides daily and weekly advice and Scott would pack lunch for Olivia and Lorena. They are a great team, and the wittiest and most sarcastic people/couple that we know!",
      "Olivia and Scott are both consultants in New York at Novantas and Deloitte respectively. They are also getting married this June in Chicago (CONGRATS!)"
    ],
    image: 'app/images/Olivia.jpg',
  },
  {
    name: 'FLORA CHAN',
    position: 'Maid of Honour, Sister of the Bride',
    description: [
      "If you were ever curious as to what a mature and cooler version of Lorena would've been, all you would need to do is look to Flora, her older sister. Flora is the quintessential older sister, ignoring Lorena's annoying behaviour on a day-to-day basis, but stepping in to play the mediator between parents and siblings. She's always there to lend a ear and provide advice, despite being half way across the world.",
      "Flora is currently a lawyer at Linklaters in Hong Kong. She's also a proud mom!"
    ],
    image: 'app/images/derek-1.jpg'
  },
  {
    name: 'KEVIN WONG',
    position: 'Best Man, Brother of the Groom',
    description: [
      "Kevin currently works at a health start-up in Toronto."
    ],
    image: 'app/images/derek-1.jpg'
  },
  {
    name: 'DEREK CHAN',
    position: 'Groomsman, Brother of the Bride',
    description: [
      "Derek is a douche.",
      "Derek is Lorena's little brother and is the absolute best. He is super patient, and puts up with my shenanigans all the time. Growing up with him was no easy feat, but as we became older we started to develop mutual understanding of each other's craziness. After living together for two years in New York, we still enjoy each other's company and continue to uphold family dinners every Sunday night.",
      "Derek works as a grunt farmer in the fields of Rivendale.",
    ],
    image: 'app/images/derek-1.jpg'
  },
  {
    name: 'CAROLINE CHIU',
    position: 'Bridesmaid',
    description: [
      "When Caroline and Lorena first met, they did not get along. One thought the other was kind of odd, and the other just thought the other was quiet (won't mention who thought what, but I'm sure you can guess). Little did Caroline know, Chemistry class would mean that she would be forced to sit next to me and become my life-long friend. Caroline is a great dancer and friend, and continues to inspire me with her many artistic and agricultural interests every day!",
      "Caroline is economist and co-owner of Riverside Farms."
    ],
    image: 'app/images/derek-1.jpg'
  },
  {
    name: 'CHRIS JANG',
    position: 'Groomsman',
    description: [
      "Chris currently works at Shell."
    ],
    image: 'app/images/derek-1.jpg'
  },
  {
    name: 'PHILIP LA',
    position: 'Groomsman',
    description: [
      "Philip is currently a manager at Figure1 in Toronto."
    ],
    image: 'app/images/Phillip.jpg'
  },
  {
    name: 'JACLYN SING',
    position: 'Bridesmaid',
    description: [
      "Jaclyn and I have been close friends for more than forever (16+ years) ever since we first met way back in Grade 3. Since Grade school, we grew up sitting in her kitchen, eating man cookies, and contemplating the mysteries of life and continue this tradition today. She challenges me to think below the surface and to think more critically and broadly about everything. We also love curry fishballs.",
      "Jaclyn is currently a nurse in Vancouver."
    ],
    image: 'app/images/jacylylyn.jpg'
  },
  {
    name: 'JANET WU',
    position: 'Bridesmaid',
    description: [
      "Miss Wu is one of the most patient and caring people I know and is basically the only reason why I survived university. We did every assignment, lab group and class together and lived together. We saw and spent a lot of our waking moments with each other. She's super supportive and always challenges me to be a kinder and more practical version of myself. I can't wait to continue seeing you every Christmas!",
      "Janet currently works as an engineer in Hong Kong."
    ],
    image: 'app/images/derek-1.jpg'
  },
  {
    name: 'HAYLIE WU',
    position: "Flower Girl, Lorena's niece",
    description: [
      "Haylie is Flora's daughter and Lorena's and Derek's niece. She's an adorable one and a half year old and loves dogs!",
      "Haylie currently works as a full-time baby in Hong Kong."
    ],
    image: 'app/images/haylie-1.jpg'
  },
  {
    name: 'TORO',
    link: 'https://www.instagram.com/gofindtoro/',
    instagram: '@gofindtoro',
    position: "Flower Puppy",
    description: [
      "Malti-poo and poo",
    ],
    image: 'app/images/toro-1.png'
  },
];

export {
  FIREBASE_CONFIG,
  GUEST_SCHEMA,
  HEADER_LINKS,
  PARTY_PEOPLE
}
