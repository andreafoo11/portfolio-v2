import { Link } from "gatsby";
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
    <Link to={`/project/${slug}`} className="block mb-32 md:mb-0">
      <div className="w-full flex items-center justify-center h-auto md:min-h-[75vh]">
        <div className="w-[90%] lg:w-[80%] flex items-center justify-center py-4 md:py-0">
          <div
            className={`flex flex-col ${
              inverted ? "md:flex-row" : "md:flex-row-reverse"
            } gap-2 md:gap-0 md:px-0 max-w-[1400px]`}
          >
            {/* Mobile only: index + rule (hidden on md+ where the vertical rail is used) */}
            <div className="flex w-full max-w-full flex-row items-center justify-start text-ink md:hidden">
              <div className="text-xl font-bold tracking-wider">{number}</div>
              <svg
                width="100%"
                height="24"
                viewBox="0 0 1000 24"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow text-ink"
              >
                <line
                  x1="0"
                  y1="12"
                  x2="96%"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path d="M1000 12L980 4V20L1000 12Z" fill="currentColor" />
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
                  } top-[45%] h-[43%] w-[630px] bg-ink/10 backdrop-blur-md dark:bg-white/15 ${
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
                    <p className="max-w-[80%] text-lg font-light leading-relaxed text-ink dark:text-white/90">
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
                          className="rounded-full bg-accent-lavender/35 px-3 py-1 text-sm font-medium text-ink dark:bg-white/10 dark:text-white"
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
                <div className="mb-4 text-4xl font-bold text-ink sm:text-5xl dark:text-white">
                  {title}
                </div>
                <div className="space-y-6">
                  <p className="text-base font-light leading-relaxed text-ink-muted sm:text-lg dark:text-white/90">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-accent-mint/40 px-3 py-1 text-sm font-medium text-ink dark:bg-white/10 dark:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project name - desktop only */}
              <div
                className={`relative z-20 -mt-4 hidden whitespace-nowrap text-5xl font-bold text-ink md:mt-0 md:-translate-y-24 md:text-6xl lg:block lg:text-6xl dark:text-white ${
                  inverted ? "text-left" : "text-right"
                }`}
              >
                {title}
              </div>
            </div>
            {/* Desktop layout (vertical) */}
            <div className="hidden h-[200px] flex-col items-center justify-center text-ink sm:h-[250px] md:flex md:h-[300px] md:pr-8 lg:h-[350px] xl:h-[400px]">
              <div className="mb-4 -rotate-90 text-xl font-bold tracking-wider md:text-2xl">
                {number}
              </div>
              <svg
                width="24"
                height="100%"
                viewBox="0 0 24 500"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-ink"
              >
                <line
                  x1="12"
                  y1="0"
                  x2="12"
                  y2="95%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path d="M12 500L4 480H20L12 500Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
