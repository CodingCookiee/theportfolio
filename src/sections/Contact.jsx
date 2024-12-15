import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      showAlert({
        show: true,
        text: "Message not sent. Please try again 😢",
        type: "danger",
      });
    } finally {
      setLoading(false);
      setTimeout(hideAlert, 3000);
    }
  };

  return (
    <section className="relative min-h-screen w-full mb-16" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="">
        <h3 className="head-text sm:mb-5 text-center text-light-text dark:text-dark-text transition-colors duration-300 special-font">
          {" "}
          <b>Contact Me</b>{" "}
        </h3>
      </div>

      <div className="relative -mt-8 z-10 c-space flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl mx-auto bg-light-primary/90 dark:bg-dark-secondary/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <h3 className="head-text text-light-text dark:text-dark-text transition-colors duration-300">
            Let's talk
          </h3>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 mt-3 transition-colors duration-300">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label text-light-text dark:text-dark-text transition-colors duration-300">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input w-full bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 border border-light-text/10 dark:border-dark-text/10 transition-colors duration-300"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label text-light-text dark:text-dark-text transition-colors duration-300">
                Email address
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input w-full bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 border border-light-text/10 dark:border-dark-text/10 transition-colors duration-300"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label text-light-text dark:text-dark-text transition-colors duration-300">
                Your message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input w-full bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text placeholder:text-light-text/50 dark:placeholder:text-dark-text/50 border border-light-text/10 dark:border-dark-text/10 transition-colors duration-300"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="field-btn bg-light-accent dark:bg-dark-accent text-dark-text dark:text-light-text hover:bg-light-accent/90 dark:hover:bg-dark-accent/90 transition-colors duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
