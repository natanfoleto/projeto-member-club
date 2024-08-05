const main = document.querySelector("main")

// Dados do aside
const clientAvatar = document.getElementById('client-avatar')
const clientName = document.getElementById('client-name')
const clientSince = document.getElementById('client-since')
const clientCuts = document.getElementById('client-cuts')
const appointmentHistory = document.getElementById('appointment-history')

// Dados do section
const cardId = document.getElementById('card-id')
const loyaltyCard = document.getElementById('loyalty-card')
const cutsRemainingLength = document.getElementById('cuts-remaining-length')
const progressNumber = document.getElementById('progress-number')
const progressTrack = document.querySelector('.progress-track')

export function clientsShow({ client }) {
  try {
    // Seta o avatar, nome e since do cliente
    clientAvatar.setAttribute("src", `src/assets/profiles/${client.id}.png`)
    clientName.textContent = client.name
    clientSince.textContent = `Cliente desde ${client.clientSince}`

    // Limpa o histórico
    appointmentHistory.innerHTML = ""

    // Percorre os cortes para exibir no histórioco
    for (const appointment of client.appointmentHistory) {
      const item = document.createElement("li")
      
      const infoDatetime = document.createElement("div")
      infoDatetime.classList.add("info-datetime")

      const date = document.createElement("span")
      date.textContent = appointment.date

      const time = document.createElement("time")
      time.textContent = appointment.time

      infoDatetime.append(date, time)

      const iconPinCheck = document.createElement("img")
      iconPinCheck.setAttribute("src", "src/assets/icons/pin-check.svg")
      iconPinCheck.setAttribute("alt", "pin-check")

      item.append(infoDatetime, iconPinCheck)

      appointmentHistory.append(item)
    }

    // Seta a quantidade de agendamentos que o cliente teve
    const appointmentsLength = client.appointmentHistory.length
    clientCuts.textContent = `${appointmentsLength} ${appointmentsLength > 1 ? 'cortes' : 'corte'}`

    // Seta o ID do cliente
    cardId.textContent = `ID: ${client.id}`

    // Seta os dados do cartão de fidelidade
    loyaltyCard.innerHTML = ""

    const totalCuts = client.loyaltyCard.totalCuts
    const cutsNeeded = client.loyaltyCard.cutsNeeded

    for (let i = 1; i <= cutsNeeded; i++) {
      const item = document.createElement("li")

      const iconPinCheck = document.createElement("img")
      iconPinCheck.setAttribute("src", "src/assets/PinCheck.png")
      iconPinCheck.setAttribute("alt", "Corte feito")
      
      const iconPinGift = document.createElement("img")
      iconPinGift.setAttribute("src", "src/assets/icons/pin-gift.svg")
      iconPinGift.setAttribute("alt", "Presente final")

      if (i <= totalCuts) {
        item.append(iconPinCheck)
      }

      if (i === cutsNeeded) {
        if (totalCuts < cutsNeeded) {
          item.append(iconPinGift)
        } else {
          item.append(iconPinCheck)
        }
      }

      loyaltyCard.append(item)
    }
    
    // Seta os cortes faltantes
    cutsRemainingLength.textContent = client.loyaltyCard.cutsRemaining

    // Seta o progresso em números
    progressNumber.textContent = `${totalCuts} de ${cutsNeeded}`

    // Atualiza o progress bar
    const percent = (totalCuts / cutsNeeded) * 100
    progressTrack.style.width = `${percent}%`

    if (cutsNeeded - 1 === totalCuts) {
      alert("Parabéns! Seu próximo corte é gratuito!")
    }

    // Exibe o main
    main.classList.remove("hiden")
  } catch (error) {
    console.log(error);
    alert("Não foi possivel exibir as informações dos clientes.")
  }
}