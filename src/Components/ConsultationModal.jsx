import { useState } from "react";
import { X, Send, Calendar, User, Mail, Phone } from "lucide-react";

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", mobile: "", message: "" });
        onClose();
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[500px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-50 p-5 sm:p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <X size={16} className="text-gray-600" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-5 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-2">
                Schedule a Free Consultation
              </h3>
              <p className="text-xs sm:text-sm text-muted">
                Fill in your details below and we'll get back to you within 24
                hours
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <User size={14} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full pl-9 pr-3 py-2 sm:py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email Address <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail size={14} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full pl-9 pr-3 py-2 sm:py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>
              </div>

              {/* Mobile Field */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Your Mobile Number <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Phone size={14} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Enter your mobile number"
                    className="w-full pl-9 pr-3 py-2 sm:py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Schedule A Free Consultation</span>
                  </>
                )}
              </button>

              {/* Disclaimer */}
              <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-4">
                By submitting this form, you agree to our privacy policy and
                terms of service. We'll contact you within 24 hours to schedule
                your consultation.
              </p>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="text-center py-8 sm:py-10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
              Thank You!
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Your consultation request has been received. We'll contact you
              shortly.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ConsultationModal;
