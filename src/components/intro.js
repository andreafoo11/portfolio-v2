import { Link } from "gatsby";
import React from "react";

const Intro = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-2xl leading-relaxed text-gray-300 uppercase">
        Welcome to my portfolio!
      </p>
      <br />
      <p className="text-lg leading-relaxed text-gray-300">
        I am a passionate Product Manager specializing in transforming complex
        user needs into elegant tech solutions. With a unique blend of Computer
        Science and Education backgrounds, I excel at bridging the gap between
        technical possibilities and human-centered design. My approach combines
        analytical rigor with deep user empathy to create products that truly
        resonate.
      </p>
      <br />
      <br />

      <Link
        to="/about"
        className="inline-block mt-8 px-6 py-3 text-sm text-white/70 hover:text-white border border-white/30 hover:border-white rounded-full transition-all duration-300"
      >
        Click here to learn more about me →
      </Link>
    </div>
  );
};

export default Intro;
