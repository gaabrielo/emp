import { Product, ConsultationType } from '../types';

const API_URL = 'http://localhost:3000/api';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data.docs;
}

export async function fetchConsultationTypes(): Promise<ConsultationType[]> {
  const response = await fetch(`${API_URL}/consultation-types`);
  const data = await response.json();
  return data.docs;
}