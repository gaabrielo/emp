import { ConsultationType } from '../types';

export const consultationTypes: ConsultationType[] = [
  {
    id: 'virtual',
    name: 'Virtual Consultation',
    description: 'Expert advice from the comfort of your home via video call',
    price: 49.99,
    duration: 30
  },
  {
    id: 'in-person',
    name: 'In-Person Consultation',
    description: 'Personal visit from our expert designer',
    price: 99.99,
    duration: 60
  },
  {
    id: 'premium',
    name: 'Premium Design Service',
    description: 'Comprehensive design plan with multiple revisions',
    price: 199.99,
    duration: 120
  }
];