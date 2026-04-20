// "„”"
const teksty = [
  "„To przejdzie do legendy!”",
  "„Jestem żołnierzem. Swoją włócznią sprawię, że poznają, co to wojna.”",
  "„Nie ma żalu. Nie ma litości.”",
  "„Jednoosobowy legion.”",
  "„Hua! Prosto z mojej piekarni. Moje skryte marzenie...”",
  "„Choices made in anger can ruin your life.”",
  "„You gotta wake up with that confidence every day, like, “Yeah, I’m the man.” You know, I wake up every day and be like, “Yeah, I’m Lil O.”",
  "„Nothing ever happens.”",
  "„Co bys zrobil?”",
  "„Th-Thank you...Chainsawman.”",
  "„It's over.”",
  "„I slimed my mf label, I broke dey heart”",
  "„Granny mi gay..😢”",
  "„Lately, the only times i ever feel suicidal are the times i decide to open up a social media app. Everything is so negative and vapid on there.”",
  "„Kill, Kamishini no Yari”",
  "„Sayonara...Gyro.”",
  "„My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.”",
  "„Personally, man, I was hoping it was just going to be some BDSM stuff. Do you realize how much simpler that would have been?”",
  "„pusc bonus rpk ciemna strefa zywa legenda”",
  "„JD orka”",
  "„mid diff”",
  "„7 godzin gadalem z riotem”",
  "„Asa, The things you think are sins, are nothing in a devil's eyes.”",
  "„If you were to turn into a snake tomorrow and begin devouring humans, and from the same mouth you devoured humans, you cried out to me 'I love you!', would I still be able to say 'I love you' the same way I do today?”"
];

const quoteEl = document.getElementById("randomquote");

// losowanie tekstu
const losowyIndex = Math.floor(Math.random() * teksty.length);
const wybranyTekst = teksty[losowyIndex];
quoteEl.textContent = wybranyTekst;

// 🔹 DOPASOWANIE ROZMIARU FONTU
const length = wybranyTekst.length;

if (length < 40) {
  quoteEl.style.fontSize = "1rem";
} else if (length < 80) {
  quoteEl.style.fontSize = "1rem";
} else if (length < 120) {
  quoteEl.style.fontSize = "0.9rem";
} else if (length < 160) {
  quoteEl.style.fontSize = "0.8rem";
}
  else if (length < 250) {
  quoteEl.style.fontSize = "0.7rem";
}
  else {
  quoteEl.style.fontSize = "0.5rem";
}