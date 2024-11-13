import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      title: "Email",
      details: "contact@yourcompany.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: "1234 Your Street, City, Country",
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-t from-black via-black to-fuchsia-950 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
          <img src="assets/roller.png" className="w-full max-w-xs sm:max-w-sm lg:max-w-md scale-90" alt="Roller" />

          <section className="w-full text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-200">
              Get in Touch with{" "}
              <span className="text-transparent mx-1 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-4 mb-12">
              We’d love to hear from you! Whether you have a question, feedback, or just want to say hello.
            </p>

            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
              {contactInfo.map((contact) => (
                <div
                  key={contact.id}
                  className="bg-gradient-to-bl from-gray-850 to-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg p-8 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800 w-full max-w-xs md:max-w-sm"
                >
                  <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-300 to-pink-600 text-white text-3xl">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">{contact.title}</h3>
                  <p className="text-gray-300 text-md sm:text-lg">{contact.details}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="bg-black object-contain h-60 overflow-hidden">
        <img src="./assets/splashfour.png" className="max-w-full mx-auto" alt="Splash" />
      </div>
    </>
  );
};

export default Contact;
