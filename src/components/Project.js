import { Link, withPrefix } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

export default function Project({
  imageSrc,
  imageAlt,
  title,
  description,
  tags = [],
  number,
  inverted = false,
  slug,
}) {
  const image = getImage(imageSrc);

  return (
    <Link to={withPrefix(`/project/${slug}`)} className="block mb-32 md:mb-0">
      <div className="w-full flex items-center justify-center h-auto md:min-h-[75vh]">
        <div className="w-[90%] lg:w-[80%] flex items-center justify-center py-4 md:py-0">
          <div
            className={`flex flex-col ${
              inverted ? "md:flex-row" : "md:flex-row-reverse"
            } gap-2 md:gap-0 md:px-0 max-w-[1400px]`}
          >
            {/* Mobile layout (horizontal) */}
            <div className="flex md:hidden flex-row items-center justify-start w-[calc(100%-2rem)]">
              <div className="text-xl font-bold tracking-wider">{number}</div>
              <svg
                width="100%"
                height="24"
                viewBox="0 0 1000 24"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow"
              >
                <line
                  x1="0"
                  y1="12"
                  x2="96%"
                  y2="12"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path d="M1000 12L980 4V20L1000 12Z" fill="white" />
              </svg>
            </div>
            {/* Main content wrapper */}
            <div
              className={`flex flex-col ${
                inverted ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
            >
              <div className="relative w-[85%] mx-auto md:w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] md:w-[500px] lg:w-[500px] xl:w-[500px] 2xl:w-[700px]">
                {image ? (
                  <GatsbyImage
                    image={image}
                    alt={imageAlt}
                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-full w-full"
                    imgStyle={{ objectFit: "cover" }}
                    loading="eager"
                  />
                ) : (
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-full w-full object-cover"
                  />
                )}

                {/* Desktop translucent rectangle with content */}
                <div
                  className={`hidden lg:block absolute ${
                    inverted ? "left-0" : "right-0"
                  } top-[45%] h-[43%] w-[630px] bg-white/15 backdrop-blur-md ${
                    inverted ? "-translate-x-2/3" : "translate-x-2/3"
                  }`}
                >
                  <div
                    className={`absolute top-0 ${
                      inverted ? "left-0" : "right-0"
                    } w-full h-full p-6 flex flex-col justify-between ${
                      inverted
                        ? "items-start text-left"
                        : "items-end text-right"
                    }`}
                  >
                    <p className="text-white/90 text-lg font-light leading-relaxed max-w-[80%]">
                      {description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-3 ${
                        inverted ? "justify-start" : "justify-end"
                      }`}
                    >
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile content - moved outside image container */}
              <div className="block lg:hidden w-full mt-8">
                <div className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  {title}
                </div>
                <div className="space-y-6">
                  <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project name - desktop only */}
              <div
                className={`hidden lg:block text-5xl md:text-6xl lg:text-6xl font-bold whitespace-nowrap relative z-20 -mt-4 md:mt-0 md:-translate-y-24 ${
                  inverted ? "text-left" : "text-right"
                }`}
              >
                {title}
              </div>
            </div>
            {/* Desktop layout (vertical) */}
            <div className="hidden md:flex flex-col items-center justify-center md:pr-8 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
              <div className="-rotate-90 mb-4 text-xl md:text-2xl font-bold tracking-wider">
                {number}
              </div>
              <svg
                width="24"
                height="100%"
                viewBox="0 0 24 500"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="95%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path d="M12 500L4 480H20L12 500Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
