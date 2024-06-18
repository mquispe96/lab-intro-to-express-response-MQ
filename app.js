const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome!'));
app.get('/terminator', (req, res) => res.send("I'll be back!"));
app.get('/tonystark', (req, res) => res.send('Love you 3000!'));
app.get('/tonystark/ironman', (req, res) => res.send('Language!!'));
app.get('/brucebanner', (req, res) => res.send("Don't make me angry!!"));
app.get('/brucebanner/hulk', (req, res) => res.send('Hulk smash!'));
app.get('/steverogers', (req, res) => res.send('On your left!'));
app.get('/steverogers/captainamerica', (req, res) =>
  res.send('Avengers, assemble!'),
);
app.get('/thanos', (req, res) => res.send('I am inevitable!'));
app.get('/groot', (req, res) => res.send("I'm Groot!"));

const magic8Responses = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes - Definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes, and signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

app.get('/magic8', (req, res) => {
  const idx = Math.floor(Math.random() * magic8Responses.length);
  res.status(200).send(`<h1>${magic8Responses[idx]}</h1>`);
});

module.exports = app;
