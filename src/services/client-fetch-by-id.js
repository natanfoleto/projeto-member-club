import { apiConfig } from "./api.config";

export async function clientFetchById({ id }) {
  try {
    // Busca todos os clientes da base
    const response = await fetch(`${apiConfig.baseURL}/clients`)
    const data = await response.json()

    // Filtra os clientes pelo id enviado como param
    const clients = data.find((client) => client.id === id)

    return clients
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os informações dos clientes.")
  }
}