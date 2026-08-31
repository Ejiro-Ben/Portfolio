import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">Let&apos;s Work Together</h2>
        <p className="text-xl text-gray-600 mb-12">Have a graphic design or web development project? I&apos;d love to help bring your ideas to life!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="mailto:ejiroghenebenodiri@gmail.com"
            className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-8 hover:border-gray-900 hover:shadow-md transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-5xl text-gray-800" />
            <span className="text-xl font-semibold">Email</span>
            <span className="text-gray-500">ejiroghenebenodiri@gmail.com</span>
          </a>

          <a
            href="https://wa.me/2347016431294"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-8 hover:border-gray-900 hover:shadow-md transition-all"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-5xl text-gray-800" />
            <span className="text-xl font-semibold">WhatsApp</span>
            <span className="text-gray-500">+234 701 643 1294</span>
          </a>
        </div>
      </div>
    </section>
  );
};
