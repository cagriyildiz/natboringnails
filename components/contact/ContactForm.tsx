import React from 'react';
import {FaInstagram} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <section className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Details
          </h2>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p className="flex items-center">
              <span className="text-2xl text-[var(--color-secondary)] mr-4">📞</span>
              <a href="tel:+31614277570" className="hover:text-[var(--color-primary)] transition-colors">
                +31 6 1427 7570
              </a>
            </p>
            <p className="flex items-center">
              <span className="text-2xl text-[var(--color-secondary)] mr-4">📧</span>
              <a href="mailto:nathaljanebbeling@gmail.com"
                 className="hover:text-[var(--color-primary)] transition-colors">
                nathaljanebbeling@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <span className="text-2xl mr-4"><FaInstagram/></span> {/* Instagram icon */}
              <a href="https://www.instagram.com/natboringnails/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[var(--color-primary)] transition-colors">
                @natboringnails
              </a>
            </p>
            <p className="flex items-start">
              <span className="text-2xl text-[var(--color-secondary)] mr-4">📍</span>
              <span>
                    Timorstraat 166 <br/>
                    2022 RK Haarlem, North Holland <br/>
                    Netherlands
                  </span>
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
            Business Hours
          </h3>
          <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li><span className="font-semibold">Monday - Friday:</span> 10:00 - 19:00</li>
            <li><span className="font-semibold">Saturday:</span> 10:00 - 14:00</li>
            <li><span className="font-semibold">Sunday:</span> Closed</li>
          </ul>
        </div>
        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          *Appointments outside these hours may be available upon request.
        </p>
      </section>

      <section className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Send Me a Message
        </h2>
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Your
              Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                             focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]
                             bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors duration-200"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Your
              Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                             focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]
                             bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors duration-200"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="subject"
                   className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                             focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]
                             bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors duration-200"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Your
              Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                             focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]
                             bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors duration-200"
              placeholder=""
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-4 px-6 border border-transparent rounded-full shadow-sm
                             text-lg font-semibold text-white bg-[var(--color-secondary)] cursor-pointer
                             hover:bg-[var(--color-secondary-dark)] focus:outline-none focus:ring-2 focus:ring-offset-2
                             focus:ring-[var(--color-secondary)] transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;