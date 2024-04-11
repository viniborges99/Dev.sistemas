import axios from 'axios';

// Função para buscar os produtos da API
const fetchProducts = async () => {
  try {
    const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products', {
      params: {
        page: 1, // Página inicial
        rows: 10, // Quantidade de produtos por página
        sortBy: 'id', // Ordenar por ID
        orderBy: 'DESC' // Ordem decrescente
      }
    });

    return response.data.products; // Retorna a lista de produtos
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};


export default fetchProducts;








