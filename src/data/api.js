import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export function getCards() {
  return api.get('/cards');
}

export function createCard(card) {
  return api.post('/cards', card);
}

export function updateCard(id, updates) {
  return api.patch(`/cards/${id}`, updates);
}

export function deleteCard(id) {
  return api.delete(`/cards/${id}`);
}