import React from 'react'
// import '../index.css'

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "878a4b21-2c95-478f-8252-b7afbb17b0a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 mb-16"> {/* Added mb-16 for footer spacing */}
        <div className="contact" id="contact">
          <div className="text-center mb-8">
            <h2 className="font-medium text-2xl md:text-3xl">Get in touch</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left Section */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-light">
                Let's talk about Business
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                We can provide remarkable growth to your business and help you achieve your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-base">infigo@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <p className="text-base">+91 9511490316</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-base">Delhi, India</p>
                </div>
              </div>
            </div>
  
            {/* Right Section (Form) */}
            <form className="space-y-6 pb-8" onSubmit={onSubmit}> {/* Added pb-8 for form spacing */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-black transition-colors bg-transparent focus:outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-black transition-colors bg-transparent focus:outline-none"
                />
              </div>
              <div className="relative">
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-black transition-colors bg-transparent focus:outline-none resize-none"
                ></textarea>
              </div>
              <div className="pt-4 "> {/* Added container with top padding for button */}
                <button
                  type="submit"
                  className="  w-full py-3 bg-custom-orange text-black font-medium transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Contact
