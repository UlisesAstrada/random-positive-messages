const positiveMessages = [
  '“Happiness is the only thing that multiplies when you share it.” - Albert Schweitzer',
  '“Once you replace negative thoughts with positive ones, you will start having positive results.” - Willie Nelson',
  '“When we are open to new possibilities, we find them. Be open and skeptical of everything.” - Todd Kashdan',
  '“If opportunity does not knock, build a door.” - Milton Berle',
  '“You are never too old to set another goal or dream a new dream.” - Les Brown',
  '“It always seems impossible until it is done.” - Nelson Mandela',
  '“It makes a big difference in your life when you stay positive” - Ellen DeGeneres',
  '“Positive thinking will let you do everything better than negative thinking will.” - Zig Ziglar',
  '“Success is the sum of small efforts repeated day in and day out.” - Robert Collier',
  '“Every day may not be good... but there is something good in every day.” - Alice Morse Earle',
  '“The difference between ordinary and extraordinary is that little extra.” - Jimmy Johnson',
  '“Be happy that, when other people look at you they become happy too.” - Anonymus',
  '“It doesn’t matter how slow you go as long as you don’t stop.” – Confucius',
  '“Believe you can and you’re halfway there.” – Theodore Roosevelt',
  '“Attitude is a little thing that makes a big difference.” – Winston Churchill',
  '“Nothing is impossible, the word itself says ‘I’m possible’!”― Audrey Hepburn',
  '“Why fit in when you were born to stand out?” – Dr. Seuss',
  '“A ship is always safe at the shore – but that is NOT what it is built for.” – Albert Einstein'
];

const randomPositiveMsg = () => {
  const message = positiveMessages[Math.floor(Math.random() * positiveMessages.length)]
  console.log(message);
}

module.exports = { randomPositiveMsg }