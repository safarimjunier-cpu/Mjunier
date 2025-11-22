export default function Contact() {
  return (
    <div className="mt-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-primary text-center">Contact Us</h1>
      <p className="text-center text-gray-700 mt-2">
        For inquiries about houses, plots, rent collection, or car hire, reach out to us below.
      </p>

      <form className="bg-white shadow-md p-6 rounded-lg mt-8 space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="yourname@example.com"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Phone Number</label>
          <input
            type="text"
            placeholder="0110870855"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          ></textarea>
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition">
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-bold text-primary">Our Office</h2>
        <p className="text-gray-700 mt-2">Wemah Properties Agency</p>
        <p className="text-gray-700">P.O Box 1234 – Nairobi, Kenya</p>
        <p className="text-gray-700">Phone: <a href="tel:0110870855" className="font-semibold">0110870855</a></p>
      </div>
    </div>
  );
}
