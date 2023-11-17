// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Chandrayaan-3 has been launched form which of the following centres?",
  answer: "Satish Dhawan Space Centre",
  options: [
    "Vikram Sarabhai Space Centre",
    "Satish Dhawan Space Centre",
    "Dr. Abdul Kalam Island",
    "Ms space centre,Jharkhand"
  ]
},
  {
  numb: 2,
  question: "Which launching vehicle was used in the launch of Chandrayaan-3?",
  answer: "GSLV",
  options: [
    "GSLV",
    "ASLV",
    "PSLC",
    "SLV"
  ]
},
  {
  numb: 3,
  question: "What was the mass of propulsion module used in Chnadrayaan-3??",
  answer: "2148 kg",
  options: [
    "2145 kg",
    "2245 kg",
    "2148 kg",
    "2543 kg"
  ]
},

{
  numb: 4,
  question: "The mission life of the Lander and Rover of Chandrayaan-3 equals to:",
  answer: "14 Earth days",
  options: [
    "24 Earth days",
    "16 Earth days",
    "14 Earth days",
    "20 Earth days"
  ]
},

{
  numb: 5,
  question: "The Chandrayaan-3 mission’s Lander is known as:",
  answer: "Vikram",
  options: [
    "Vikram",
    "Bheem",
    "Pragyaan",
    "dhruv"
  ]
},

{
  numb: 6,
  question: "Which part of the Moon did Chandrayaan-3 land ?",
  answer: "South Pole",
  options: [
    "North Pole",
    "Equator",
    "South Pole",
    "Far Side"
  ]
},

{
  numb: 7,
  question: "When was Chandrayaan-3 launched?",
  answer: "14 July 2023",
  options: [
    "14th August 2023",
    "14 July 2023",
    "30 June 2023",
    "10 Sep 2023"
  ]
},

{
  numb: 8,
  question: "On which date was the lander successfully separated from the Propulsion Module?",
  answer: "17th August 2023",
  options: [
    "20th August 2023",
    "19th August 2023",
    "16th August 2023",
    "17th August 2023"
  ]
}
,

{
  numb: 9,
  question: "When did the Chandrayaan-3 spacecraft perform the second de-boosting maneuver?",
  answer: "19th August 2023",
  options: [
    "20th August 2023",
    "19th August 2023",
    "16th August 2023",
    "17th August 2023"
  ]
}
,

{
  numb: 10,
  question: "Where is the ISRO Telemetry, Tracking and Command Network (ISTRAC) located?",
  answer: "Bengaluru",
  options: [
    "New Delhi",
    "Chennai",
    "Bengaluru",
    "Mumbai"
  ]
}
,

{
  numb: 11,
  question: "What was the purpose of the maneuver performed on 25th July 2023?",
  answer: "Orbit-raising",
  options: [
    "Lunar-Orbit insertion",
    "Orbit circulization",
    "Translunar Injection",
    "Orbit-raising"
  ]
}
,

{
  numb: 12,
  question: "Who was the director of the Chandrayaan-3 mission?",
  answer: "Ritu Karidhal",
  options: [
    "Veeramuthuvel",
    "M Vanitha",
    "K. Sivan",
    "Ritu Karidhal"
  ]
}
,

{
  numb: 13,
  question: "What was the total weight of Chandrayaan-3?",
  answer: "3900 kg",
  options: [
    "4,100 kg",
    "3900 kg",
    "2190 kg",
    "5200 kg"
  ]
}
,

{
  numb: 14,
  question: "What was the total cost of mission Chandrayaan-3?",
  answer: "600 crore",
  options: [
    "600 crore",
    "440 crore",
    "800 crore",
    "1200 crore"
  ]
},

{
  numb: 15,
  question: "What was that one thing in Chandrayaan 3 and not in Chandrayaan 2?",
  answer: "Laser Doppler Velocimeter (LDV)",
  options: [
    "Laser Doppler Velocimeter (LDV)",
    "Laser-based Interferometry",
    "Ultrasonic Doppler methods",
    "Molecular Tagging Velocimetry"
  ]
}
,

{
  numb: 16,
  question: "When was ISRO formed?",
  answer: "15 August 1969",
  options: [
    "15 August 1947",
    "15 August 1952",
    "15 August 1969",
    "15 August 1967"
  ]
}
,{
  numb: 17,
  question: "Where is the Headquarters of the Indian Space Research Organisation (ISRO)?",
  answer: "Bengaluru",
  options: [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Hyderabad"
  ]
}
,{
  numb: 18,
  question: "Which Satellite is used for Resources Monitoring and Management by ISRO?",
  answer: "IRS",
  options: [
    "IRIS",
    "INSAT",
    "IRS",
    "MRK"
  ]
}
,

{
  numb: 19,
  question: "What is the Full Form of PSLV?",
  answer: "Polar Satellite Launch Vehicle",
  options: [
    "Public Satellite Launch Vehicle",
    "Polar Satellite Launch Vehicle",
    "Polar Service Launch Vehicle",
    "Public Service Launch Vehicle"
  ]
}
,

{
  numb: 20,
  question: "When was the First Rocket launched from India?",
  answer: "21 November 1963",
  options: [
    "21 December 1963",
    "21 October 1963",
    "21 November 1964",
    "21 November 1963"
  ]
}
,

{
  numb: 21,
  question: "What was ISRO known before 1969?",
  answer: "INCOSPAR",
  options: [
    "INCOSPAR",
    "ACROSS",
    "DAE",
    "INSA"
  ]
}
,

{
  numb: 22,
  question: "What is the Full Form of GSLV?",
  answer: "Geosynchronous Satellite Launch Vehicle",
  options: [
    "Global Satellite Launch Vehicle",
    "Geosynchronous Service Launch Vehicle",
    "Geosynchronous Satellite Launch Vehicle",
    "Geo Satellite Launch Vehicle"
  ]
}
,

{
  numb: 23,
  question: "Who is the Father of the Indian Space Program?",
  answer: "Vikram Sarabhai",
  options: [
    "C. V. Raman",
    "Vikram Sarabhai",
    "M. G. K. Menon",
    "A. P. J. Abdul Kalam"
  ]
}
,

{
  numb: 24,
  question: "When was Chandrayaan-1 launched?",
  answer: "22 October 2008",
  options: [
    "22 October 2018",
    "22 October 2006",
    "22 October 2008",
    "22 October 2010",
  ]
},

{
  numb: 25,
  question: "When was Chandrayaan-2 launched?",
  answer: "22 July 2019",
  options: [
    "22 July 2018",
    "22 July 2019",
    "22 July 2020",
    "22 July 2015",
  ]
},


];

// function shuffle(questions) {
//   let currentIndex = questions.length, randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {

// // Pick a remaining element.
// randomIndex = Math.floor(Math.random() * currentIndex);
// currentIndex--;

// // And swap it with the current element.
// [questions[currentIndex], questions[randomIndex]] = [
//   questions[randomIndex], questions[currentIndex]];
//   }

//   return questions;
// }


// Proud Bhartiya Quiz Mission