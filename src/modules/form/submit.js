import { clientFetchById } from "../../services/client-fetch-by-id"
import { clientsShow } from "../clients/show"

// Captura o form
const form = document.querySelector("form")

// Captura o input
const clientId = document.getElementById("client-id")

form.onsubmit = async (event) => {
  // Preve o comportamento padrão do submit
  event.preventDefault()

  try {
    const id = clientId.value

    if (!id) {
      return alert("Informe o ID do cliente.")
    }

    // Busca o cliente pelo id
    const client = await clientFetchById({ id })

    if (!client) {
      return alert("Nenhum cliente encontrado com esse ID.")
    }

    // Chama a função para mostrar cliente encontrado
    clientsShow({ client })
  } catch (error) {
    console.log(error);
  }
}
