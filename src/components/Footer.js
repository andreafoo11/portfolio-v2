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
          className="text-ink-muted transition-colors duration-300 hover:text-ink dark:hover:text-white"
        >
          <FaFacebook size={24} />
        </a>
        <a 
          href="https://github.com/andreafoo11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-muted transition-colors duration-300 hover:text-ink dark:hover:text-white"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/andrea-foo-356a95177/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-muted transition-colors duration-300 hover:text-ink dark:hover:text-white"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer; 