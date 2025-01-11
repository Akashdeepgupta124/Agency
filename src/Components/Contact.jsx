import React from 'react'
import '../index.css'

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
        <>
        <div >
            <div className="contact" id='contact'>
                <div className="contact_header">
                    <h2>Get in touch</h2>
                </div>
                <div className="contact_info">
                    <div className="contact_left">
                        <h2>Lets talk about Business</h2>
                        <p>we can provide a remarkable growth to you business and help u acheive ur goal</p>
                        <div className="contact_details">
                            <div className="detail">
                                <p>infigo@gmail.com</p>
                            </div>
                            <div className="detail">
                                <p>+91 9511490316</p>
                            </div>
                            <div className="detail">
                                <p>Delhi, India</p>
                            </div>
                        </div>

                    </div>
                    <form className="contact_right" onSubmit={onSubmit}>
                        <div className="conact_input">
                        <div className="text">
                            <input type="text" placeholder='Name' name="name" required/>
                            </div>
                            <div className="text">
                                <input type="text " placeholder='Email' name='email' />
                            </div>
                            <div className="message w-full h-24 max-h-[150px] overflow-y-auto resize-none">
                                < textarea cols='30' rows='10' name='message' placeholder='Message' required ></textarea>
                            </div>
                            <div className="btn">
                                <button>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Contact
