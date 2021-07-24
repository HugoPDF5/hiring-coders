const form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    const nome = document.getElementById('name').value
    const price = document.getElementById('price').value
    const description = document.getElementById('description').value
    const brand = document.getElementById('brand').value


    let data = {
        nome,
        price,
        description,
        brand
    }

    dataConverted = JSON.stringify(data)
    console.log(dataConverted)

    localStorage.setItem('data', dataConverted)
})

localStorage.clear('data')