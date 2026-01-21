import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  grade: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        grade: "",
        message: ""
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
      <h3 className="font-poppins font-bold text-2xl mb-6 text-center">Request a Demo</h3>
      
      {submitSuccess ? (
        <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-4 text-center">
          <p className="font-inter text-white">Thank you for your interest! We'll contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-inter text-sm mb-1 text-gray-300">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white font-inter"
              placeholder="Full Name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block font-inter text-sm mb-1 text-gray-300">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white font-inter"
              placeholder="email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block font-inter text-sm mb-1 text-gray-300">Your Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white font-inter"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>
          
          <div>
            <label htmlFor="grade" className="block font-inter text-sm mb-1 text-gray-300">Child's Current Grade</label>
            <select
              id="grade"
              name="grade"
              required
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white font-inter appearance-none"
            >
              <option value="" className="bg-primary-blue">Select Grade</option>
              <option value="Pre-K" className="bg-primary-blue">Pre-K</option>
              <option value="Kindergarten" className="bg-primary-blue">Kindergarten</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(grade => (
                <option key={grade} value={`Grade ${grade}`} className="bg-primary-blue">
                  Grade {grade}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block font-inter text-sm mb-1 text-gray-300">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white font-inter"
              placeholder="Tell us about your child's learning needs..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-orange hover:bg-white hover:text-accent-orange text-white font-poppins font-medium rounded-lg px-6 py-3 transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Request a Demo"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
