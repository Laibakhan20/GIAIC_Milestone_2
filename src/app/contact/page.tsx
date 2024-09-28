import React from 'react'

 const Contact = () => {
  return (
    <div>
         <section className="contact-header">
        <h1>Contact Me</h1>
        <p>
          If you have any questions, feel free to reach out. I will get back to you as soon as possible!
        </p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" action="#" method="POST">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"  required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
  </div>
  )
}

export default Contact
