const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    let data = {
        nome,
        email
    }

    const dataConverted = JSON.stringify(data)

    localStorage.setItem('dados',dataConverted)
})

localStorage.clear()