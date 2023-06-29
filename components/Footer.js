import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-8 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} J. Zane Cook | All rights reserved.
      </p>
      <p className="text-xs">
        Built with <a href="https://nextjs.org/" className="text-green-500">Next.js</a> and styled with <a href="https://tailwindcss.com/" className="text-green-500">Tailwind CSS</a>.
      </p>
    </footer>
  );
};

export default Footer;