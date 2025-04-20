const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 mt-[25rem] md:mt-10 lg:mt-60">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Let's Create Something Amazing</h2>
            <p className="text-gray-400">Ready to start your project?</p>
            <button className="bg-custom-orange text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Start Project
            </button>
          </div>
          
          <div className="space-y-6 md:text-right">
            <div className="flex items-center justify-start md:justify-end gap-6">
              <a href="https://linkedin.com" className="hover:text-gray-400 transition-colors text-2xl">
                in
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400 transition-colors text-2xl">
                📷
              </a>
              <a href="mailto:contact@example.com" className="hover:text-gray-400 transition-colors text-2xl">
                ✉️
              </a>
              <a href="tel:+1234567890" className="hover:text-gray-400 transition-colors text-2xl">
                📞
              </a>
            </div>
            <div className="space-y-2 text-gray-400">
              <p>akashdeepgupta124@gmail.com</p>
              <p>+91 9511490316</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 B&W busniess</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;