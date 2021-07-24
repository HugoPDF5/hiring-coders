 const form = document.getElementById('form')

 form.addEventListener('submit', e => {
     e.preventDefault()
     const nome = document.getElementById('name').value
     const cpf = document.getElementById('cpf').value
     const street = document.getElementById('street').value
     const district = document.getElementById('district').value
     const number = document.getElementById('tel').value
     const city = document.getElementById('city').value

     let data = {
         nome,
         cpf,
         street,
         district,
         number,
         city
     }

     dataConverted = JSON.stringify(data)
     console.log(dataConverted)

     localStorage.setItem('data', dataConverted)
 })

 localStorage.clear('data')