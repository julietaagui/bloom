const BASE_URL = 'https://685ea2227b57aebd2afa24e9.mockapi.io/api/v1/products';

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Error al cargar productos');
  return res.json();
};

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  if (!res.ok) throw new Error('Error al crear producto');
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Error al eliminar producto');
  return res.json();
};