import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactBox = () => {
  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
          <p className="text-slate-700 text-sm">
            <strong>Address:</strong> 701, Stellar Tower, Chembur East, Sion Opposite, 
            Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-green-600" />
          <p className="text-slate-700 text-sm">
            <strong>Phone:</strong> +91 8369848475
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-green-600" />
          <p className="text-slate-700 text-sm">
            <strong>Email:</strong> info@wastemanagement.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;