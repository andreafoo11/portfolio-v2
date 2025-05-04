import React from "react";

const fictionBooks = [
  "The Five People you Meet in Heaven | Mitch Albom",
  "Yellowface | RF Kuang",
  "A Thousand Splendid Suns | Hosseini Khaled",
  "The Secret History | Donna Tartt",
  "Babel | RF Kuang",
  "The Poppy War Trilogy | RF Kuang",
  "Pachinko | Min Jin Lee",
  "Normal People | Sally Rooney",
  "Eleanor Oliphant is Completely Fine | Gail Honeyman",
  "The Seven Husbands of Evelyn Hugo | Taylor Jenkins Reid",
  "Where the Crawdads Sing | Delia Owens",
];

const workInspirationBooks = [
  "Creativity Inc | Amy Wallace and Edwin Catmull",
  "Build | Tony Fadell",
  "The Right It | Alberto Savioa",
  "Zero to one | Blake Masters and Peter Thiel",
];

const memoirBooks = [
  "Educated | Tara Westover",
  "Maybe you should talk to someone | Lori Gottlieb",
  "The Glass Castle | Jeannette Walls",
  "Private Equity | Carrie Sun",
];

const Library = () => {
  return (
    <div className="bg-[#1a1817] min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl px-8">
        <h1 className="text-white text-2xl font-bold mb-8">My Library</h1>

        {/* Fiction Section */}
        <h2 className="text-white text-xl font-semibold mb-2 mt-8">Fiction</h2>
        <ul className="space-y-2 text-white font-[Montserrat] text-lg">
          {fictionBooks.map((book, i) => (
            <li key={i}>{book}</li>
          ))}
        </ul>

        {/* Work Inspiration Section */}
        <h2 className="text-white text-xl font-semibold mb-2 mt-8">
          Work Inspiration
        </h2>
        <ul className="space-y-2 text-white font-[Montserrat] text-lg">
          {workInspirationBooks.map((book, i) => (
            <li key={i}>{book}</li>
          ))}
        </ul>

        {/* Memoirs Section */}
        <h2 className="text-white text-xl font-semibold mb-2 mt-8">Memoirs</h2>
        <ul className="space-y-2 text-white font-[Montserrat] text-lg">
          {memoirBooks.map((book, i) => (
            <li key={i}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Library;
