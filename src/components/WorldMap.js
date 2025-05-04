import React from "react";
import worldMap from "../images/world.svg"; // Import the SVG

const WorldMap = ({ onCityClick, selectedCity }) => {
  const cities = [
    {
      id: 1,
      name: "New York",
      coordinates: { x: 29.33, y: 31.14 },
    },
    {
      id: 2,
      name: "Boston",
      coordinates: { x: 31.08, y: 26.04 },
    },
    {
      id: 3,
      name: "Shanghai",
      coordinates: { x: 81.35, y: 35.01 },
    },
    {
      id: 4,
      name: "Singapore",
      coordinates: { x: 79.48, y: 57.37 },
    },
  ];

  // Add this function to help find coordinates
  const handleMapClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    console.log(`Clicked at x: ${x.toFixed(2)}%, y: ${y.toFixed(2)}%`);
  };

  return (
    <div className="relative w-full" onClick={handleMapClick}>
      <img
        src={worldMap}
        alt="World Map"
        className="w-full h-auto opacity-50" // Added opacity to make it subtle
      />

      {/* City Markers - positioned absolutely over the map */}
      <div className="absolute inset-0">
        {cities.map((city) => (
          <div
            key={city.id}
            className="absolute transform -translate-y-1/2 flex items-center gap-2"
            style={{
              left: `${city.coordinates.x}%`,
              top: `${city.coordinates.y}%`,
            }}
          >
            {/* Marker */}
            <button
              className={`w-5 h-5 rounded-full 
                ${
                  selectedCity?.id === city.id
                    ? "bg-blue-400 ring-4 ring-blue-400/30"
                    : "bg-blue-400/50 hover:bg-blue-600 hover:ring-4 hover:ring-blue-400/30"
                } 
                transition-all duration-300`}
              onClick={(e) => {
                e.stopPropagation();
                onCityClick(city);
              }}
            />

            {/* City Name - now on the right */}
            <span className="text-white text-sm whitespace-nowrap">
              {city.name}
            </span>

            {/* Pulse Animation for Selected City */}
            {selectedCity?.id === city.id && (
              <div className="absolute left-0 w-5 h-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-20"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
