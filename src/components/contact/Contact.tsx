import './contact.scss'

function Contact() {

  const handleOnSubmit = (e: React.FormEvent) => {
    const form: HTMLElement = e.target as HTMLElement;
    const msg: HTMLInputElement | null = form.querySelector("textarea[name='message']");
    window.location.href = `mailto:nathaljanebbeling@gmail.com?subject=Question - natboringnails.com&body=${msg?.value}`;
    e.preventDefault();
  };

  return (
    <div id="contact" className="contact">
      <div className="title">
        <h1>Let's get in touch</h1>
      </div>
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="text">
              <h1>Let's get in touch</h1>
            </div>
            <form className="form" onSubmit={handleOnSubmit}>
              <div className="item">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Your full name" />
              </div>
              <div className="item">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Your email address" />
              </div>
              <div className="item">
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Your message" />
              </div>
              <div className="item">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact