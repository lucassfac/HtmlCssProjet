//envoi des elements du formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault()

    let formData = {
        profil: profil.value,
        budget: budget.value,
        usage: usage.value,
        kilometrage: kilometrage.value,
        type: type.value,
        carburant: carburant.value,
        fiabilite: fiabilite.value
    }

    console.log(formData)
})