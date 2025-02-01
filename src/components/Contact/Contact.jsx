import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      title: "Email",
      details: "mailto:godfatherpaintingltd@gmail.com", // Make email clickable
      displayText: "godfatherpaintingltd@gmail.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      title: "Phone",
      details: "tel:+15874299862", // Make phone number clickable
      displayText: "+1 587-429-9862",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: "https://www.google.com/maps?q=1058+Taradale+Dr+NE+Calgary", // Open in Google Maps
      displayText: "1058 Taradale Dr NE, Calgary",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-t from-black via-black to-fuchsia-950 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4 sm:px-8">
          <img
            src="assets/roller.png"
            className="w-full md:w-1/3 max-w-xs md:max-w-sm mb-6 md:mb-0"
            alt=""
          />
          <section className="text-center md:text-left md:flex-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">
              Get in Touch with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
                Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 mb-8 sm:mb-12">
              We’d love to hear from you! Whether you have a question, feedback, or just want to say hello.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-center md:justify-start">
              {contactInfo.map((contact) => (
                <div
                  key={contact.id}
                  className="flex flex-col items-center justify-center bg-gradient-to-bl from-gray-850 to-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg p-6 md:p-8 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800 w-full sm:w-72 mx-auto text-center"
                >
                  <div className="flex items-center justify-center mb-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-300 to-pink-600 text-white text-3xl sm:text-4xl">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-1">{contact.title}</h3>
                  <a
                    href={contact.details}
                    className="text-gray-300 text-md sm:text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.displayText}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="bg-black object-contain h-40 sm:h-60 overflow-hidden">
        <img src="./assets/splashfour.png" className="w-full max-w-7xl mx-auto" alt="" />
      </div>
    </>
  );
};

export default Contact;
