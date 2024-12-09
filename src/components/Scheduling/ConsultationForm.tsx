import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { ConsultationType } from '../../types';

interface ConsultationFormProps {
  consultationTypes: ConsultationType[];
}

export function ConsultationForm({ consultationTypes }: ConsultationFormProps) {
  const [selectedType, setSelectedType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { selectedType, ...formData });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {consultationTypes.map(type => (
          <div
            key={type.id}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedType === type.id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-300'
            }`}
            onClick={() => setSelectedType(type.id)}
          >
            <h3 className="font-semibold">{type.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{type.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-indigo-600 font-medium">${type.price}</span>
              <span className="text-sm text-gray-500">{type.duration} minutes</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred Date
            </label>
            <div className="mt-1 relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred Time
            </label>
            <div className="mt-1 relative">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
              <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Specific Requirements
          </label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Schedule Consultation
      </button>
    </form>
  );
}