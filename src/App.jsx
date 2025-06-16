import React, { useState } from "react";

const quotes = {
  Motivatsion: [
    "Believe you can and you're halfway there,",
    "Success doesn't come to you, you go to it.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream big. Work hard. Stay focused.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Your only limit is your mind.",
    "Doubt kills more dreams than failure ever will.",
    "Small steps every day lead to big results.",
    "Discipline is doing what needs to be done, even if you don’t want to.",
    "Make today count.",
  ],
  hazil: [
    "I'm on a seafood diet. I see food and I eat it.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "I used to think I was indecisive, but now I’m not so sure.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "Life is short. Smile while you still have teeth.",
    "I’m not arguing, I’m just explaining why I’m right.",
    "I’m not lazy, I’m on energy-saving mode.",
    "Running late is my cardio.",
    "Some people graduate with honors, I am just honored to graduate.",
    "Brains are awesome. I wish everybody had one.",
  ],
  hayot: [
    "Life is what happens when you're busy making other plans.",
    "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain.",
    "Make your life a masterpiece.",
    "Live the life you’ve imagined.",
    "Life is short, smile while you still have teeth.",
    "Do not take life too seriously. You will never get out of it alive.",
    "Your life is your message to the world. Make it inspiring.",
    "The best way to predict your future is to create it.",
    "Enjoy the little things in life, for one day you’ll look back and realize they were the big things.",
    "Life is tough, but so are you.",
  ],
  ilmfan: [
    "Science is magic that works.",
    "The important thing is not to stop questioning.",
    "Knowledge is power.",
    "Science knows no country, because knowledge belongs to humanity.",
    "Without science, we are blind in the world of truth.",
    "The good thing about science is that it's true whether you believe in it or not.",
    "Curiosity is the essence of human existence.",
    "Every great advance in science has issued from a new audacity of imagination.",
    "Think like a proton – always positive.",
    "Science is not only a disciple of reason but also of romance and passion.",
  ],
};

function App() {
  const [category, setCategory] = useState("Motivatsion");
  const [quote, setQuote] = useState(quotes["Motivatsion"][0]);

  const getRandomQuote = () => {
    const categoryQuotes = quotes[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    setQuote(categoryQuotes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fceabb] to-[#f8b500] flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">📜 Iqtiboslar</h1>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-gray-700"
        >
          <option value="Motivatsion">Motivatsion</option>
          <option value="hazil">Hazil</option>
          <option value="hayot">Hayot</option>
          <option value="ilmfan">Ilm-fan</option>
        </select>

        <h2 className="text-lg text-gray-600 font-medium min-h-[70px] italic">
          {quote}
        </h2>

        <button
          onClick={getRandomQuote}
          className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition font-semibold"
        >
          Yana iqtibos
        </button>
      </div>
    </div>
  );
}

export default App;
