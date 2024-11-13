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
    <div className="bg-gradient-to-t from-black via-black to-fuchsia-950 py-20 ">
        <div className="max-w-7xl flex gap-4 mx-auto">
        <img src="assets/roller.png" className='scale-100 max-w-sm' alt="" />
      <section className="px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-6xl font-bold text-gray-200">
          Get in Touch with{" "}
          <span className="text-transparent mx-1 bg-clip-text bg-gradient-to-tr from-gray-200 via-pink-300 to-pink-800">
            Us
          </span>
        </h2>
        <p className="text-2xl text-gray-300 mt-4 mb-12">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello.
        </p>

        <div className="flex justify-center gap-8 md:gap-16">
          {contactInfo.map((contact) => (
            <div
              key={contact.id}
              className="bg-gradient-to-bl from-gray-850 flex flex-col items-center to-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg p-8 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800 w-72"
            >
              <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-300 to-pink-600 text-white text-4xl">
                {contact.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">{contact.title}</h3>
              <p className="text-gray-300 text-lg">{contact.details}</p>
            </div>
          ))}
        </div>
      </section>

      </div>
    </div>
      <div className="bg-black object-contain h-60 overflow-y-hidden">
      <img src="./assets/splashfour.png" className="max-w-7xl mx-auto" alt="" />
    </div>
    </>
  );
};

export default Contact;
