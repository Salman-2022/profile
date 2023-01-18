const dogImage = document.getElementById('dogImages')
const refresh = document.getElementById('refresh')

function getADog(){
  console.log('hello')
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
   .then(json => {
    // console.log(json.message)
    dogImage.innerHTML = `<img src='${json.message}'
    height=300px />`
  }
)
}

getADog()

refresh.onclick = () => {
  getADog()
}