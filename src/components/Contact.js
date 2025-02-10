const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-2xl rounded-xl p-10 max-w-lg w-full text-center border border-gray-300">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-wide">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Need assistance? Reach out to us and we’ll be happy to help.
        </p>

        <div className="space-y-5">
          <p className="bg-gray-200 text-gray-800 p-4 rounded-lg shadow-md text-lg font-medium flex items-center gap-3">
            📧 Email: contact@example.com
          </p>
          <p className="bg-gray-200 text-gray-800 p-4 rounded-lg shadow-md text-lg font-medium flex items-center gap-3">
            📍 Location: Delhi, India
          </p>
          <p className="bg-gray-200 text-gray-800 p-4 rounded-lg shadow-md text-lg font-medium flex items-center gap-3">
            📞 Phone: +91 888xxxxx74
          </p>
        </div>

        <button className="mt-6 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-teal-300 font-semibold uppercase tracking-wider">
          Send a Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
