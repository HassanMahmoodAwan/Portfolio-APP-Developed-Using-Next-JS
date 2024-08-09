import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-blue-400 py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold">Hassan Mahmod</h2>
        <p className="text-sm">Software Engineer</p>
        
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Instagram
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            WhatsApp
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            GitHub
          </a>
        </div>
        
        <div className="mt-4">
          <p className="text-sm">Email: <a href="mailto:your.email@example.com" className="hover:text-blue-500">your.email@example.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
