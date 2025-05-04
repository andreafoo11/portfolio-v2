import React, { useState } from "react";
import Footer from "../components/Footer";
import Library from "../components/Library";
import NavBar from "../components/navbar";
import WorldMap from "../components/WorldMap";
import selfImage from "../images/self.jpg";

const AboutPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);

  const cityData = {
    1: {
      description:
        "Currently living in Brooklyn, NY. Working as a Product Manager at Freewheel.",
      experiences: ["Product Manager", "Aerialist", "Food Enthusiast"],
    },
    2: {
      description:
        "Bachelors at Tufts University (2018-2022), Masters at Harvard University (2022-2023).",
      experiences: [
        "Bachelor of Computer Science and Chemistry",
        "Masters of Education in Learning Design",
        "Love Cafe Hopping and Stuying in cafes",
      ],
    },
    3: {
      description:
        "Lived here from 2007-2018. Submersed myself in local culture, food, and langugage",
      experiences: ["Student", "Fluent in Mandarin"],
    },
    4: {
      description: "Born in Singapore and lived here till I was 8.",
      experiences: ["Raised by my loving grandparents."],
    },
  };

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{ backgroundColor: "#151515" }}
    >
      <title>About</title>
      <NavBar pageTitle="About Page" />

      {/* New Introduction Section */}
      <div className="container mx-auto px-4 min-h-screen flex items-center pt-24 md:pt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pt-8 md:pt-0">
              Hi, I'm Andrea
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              With a background in Computer Science and Education, I bring a
              unique perspective to product development that combines technical
              knowledge with user-centered design. My mission is to create
              equitable, impact-driven solutions that make technology more
              accessible and meaningful for everyone.
            </p>
            <br />
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              CURRENTLY
              <br />
              located in{" "}
              <span
                className="underline cursor-pointer text-blue-400 hover:text-blue-600"
                onClick={() => setShowMap((prev) => !prev)}
              >
                New York City
              </span>{" "}
              <br />
              working in{" "}
              <a
                href="https://www.freewheel.com/"
                target="_blank"
                className="underline cursor-pointer text-blue-400 hover:text-blue-600"
              >
                Freewheel
              </a>{" "}
              <br />
              reading{" "}
              <span
                className="underline cursor-pointer text-blue-400 hover:text-blue-600"
                onClick={() => setShowLibrary((prev) => !prev)}
              >
                Me Talk Pretty One Day by David Sedaris
              </span>
            </p>

            {showLibrary && (
              <div className="mt-8">
                <Library />
              </div>
            )}

            {showMap && (
              <div className="container mx-auto px-4">
                <div className="relative">
                  <div className="w-full aspect-[2/1] bg-white/10 rounded-lg overflow-hidden p-4">
                    <WorldMap
                      onCityClick={setSelectedCity}
                      selectedCity={selectedCity}
                    />
                  </div>

                  {/* City Information Overlay */}
                  {selectedCity && (
                    <div
                      className="fixed bottom-8 left-8 w-90 bg-white/10 backdrop-blur-md rounded-lg p-6 
                          transition-all duration-300 ease-in-out"
                    >
                      {/* Close button */}

                      <button
                        onClick={() => setSelectedCity(null)}
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                      <h3 className="text-2xl font-bold mb-4">
                        {selectedCity.name}
                      </h3>
                      <p className="text-white/80 mb-4">
                        {cityData[selectedCity.id].description}
                      </p>
                      <ul className="space-y-2">
                        {cityData[selectedCity.id].experiences.map(
                          (exp, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-2 h-2 bg-white/50 rounded-full mr-3" />
                              {exp}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Photo */}
          <div className="flex-1 max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src={selfImage}
              alt="Andrea Foo"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
