import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white text-center p-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Acadigo. All rights reserved.
      </p>
      <meta
        name="description"
        content="Acadigo is a platform where students can access and share question papers and study materials to help each other learn and grow together."
      />
      <meta
        name="keywords"
        content="Acadigo, 2nd puc, arts,science,commerce, free study materials, question papers, student resources, online learning, collaborative study"
      />
    </footer>
  );
};

export default Footer;
