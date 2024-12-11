import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Raza Awan',
          from_email: form.email,
          to_email: 'razaawanpersonal@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert();
            setForm({ name: '', email: '', message: '' });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="relative min-h-screen w-full mb-16" id="contact">
      {alert.show && <Alert {...alert} />}


      <div className="relative z-10 c-space flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl mx-auto bg-light-primary/90 dark:bg-dark-secondary/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <h3 className="head-text text-light-text dark:text-dark-text transition-colors duration-300">Let's talk</h3>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 mt-3 transition-colors duration-300">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label text-light-text dark:text-dark-text transition-colors duration-300">Full Name</span>
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
              <span className="field-label text-light-text dark:text-dark-text transition-colors duration-300">Email address</span>
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
              <span className="field-label text-light-text dark:text-dark-text transition-colors duration-300">Your message</span>
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
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
