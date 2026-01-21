import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    challenges: '',
    consultationTime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your submission. We will contact you soon.');
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      challenges: '',
      consultationTime: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-text-dark mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-light rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-text-dark mb-1">
            Contact Person
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-light rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-light rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-light rounded-md"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="challenges" className="block text-sm font-medium text-text-dark mb-1">
          Current IT Challenges
        </label>
        <textarea
          id="challenges"
          name="challenges"
          value={formData.challenges}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-neutral-light rounded-md"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="consultationTime" className="block text-sm font-medium text-text-dark mb-1">
          Preferred Consultation Time
        </label>
        <select
          id="consultationTime"
          name="consultationTime"
          value={formData.consultationTime}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-neutral-light rounded-md"
          required
        >
          <option value="">Select a time</option>
          <option value="morning">Morning (9AM - 12PM)</option>
          <option value="afternoon">Afternoon (12PM - 4PM)</option>
          <option value="evening">Evening (4PM - 7PM)</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
