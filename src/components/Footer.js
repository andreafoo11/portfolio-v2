import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-auto">
      <div className="flex justify-center items-center gap-6">
        <a 
          href="https://www.facebook.com/andreaxiaotong.foo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a 
          href="https://github.com/andreafoo11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/andrea-foo-356a95177/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer; 