import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_b3ylwmf", 
        "template_tzv5419",
        form.current,
        "qH0vfVCdKnYUCKrYJ"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-lg text-gray-500 mt-2">
           We are here to help. Send us a message and well get back to you shortly.
        </p>
      </div>

        <div className="grid md:grid-cols-2 gap-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 transition-all hover:shadow-xl duration-300"
          >
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:ring-2 focus:outline-none transition`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:ring-2 focus:outline-none transition`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-xl focus:ring-2 focus:outline-none transition resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Button */}
              <button
                type="submit"
                className={`w-full font-semibold py-2 rounded-xl transition duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {isSent && (
                <p className="text-green-600 text-sm text-center pt-2">
                  ✅ Message sent successfully!
                </p>
              )}
            </div>
          </form>

          {/* Contact Info + Map */}
          <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 transition-all hover:shadow-xl duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-sm text-gray-600">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-sm text-gray-600">support@shopsmart.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-sm text-gray-600">
                    123 Mall Street, Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <iframe
                title="Google Map"
                className="w-full h-48 rounded-xl border border-gray-200"
                src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
