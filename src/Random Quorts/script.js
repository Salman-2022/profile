const quortToDisplay = document.getElementById('quort')
const autho = document.getElementById('author')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd65d479ecfmsh705b79f8ec2d0b1p177d42jsn5bcbf6100730',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};
function getAQuort(){
    fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
	.then(response => response.json())
	.then(response => {
        console.log(response[0].text)
        console.log(response[0].author)
        // getquort.innerHTML=response[0].text
        quort = response[0].text
        animateQuort(quort)
        autho.innerHTML = `~${response[0].author}`
    })
}


getAQuort()

const stringDisplay=(time,letter)=>{
    setTimeout(()=>{
        quortToDisplay.innerHTML+=letter
    },time)
}
const animateQuort=(quort)=>{
    time=1000
    for(i=0;i<quort.length;i++){
        stringDisplay(time,quort[i])
        time=time+30
    }
}