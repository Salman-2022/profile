const skillsToDisplay = document.getElementById('skillsToDisplay')
const skillImage = document.getElementById('skillImage')
const skill = document.getElementById('skill')
const data = ['HTLM','CSS','JAVASCRIPT','C PROGRAMMING','PYTHON','SQL','JAVA','REACT','Front End']
const images = ['./images/html.png','./images/css.jpg','./images/js.png',
                './images/c pro.png','./images/python.jpeg','./images/sql.png',
                './images/java.png','./images/react.png','./images/html+css+js.jpg']
const display=(time,i)=>{
    setTimeout(()=>{
        skillsToDisplay.innerHTML=data[i]
        skillImage.innerHTML=
            `<img src="${images[i]}"
                style="height: 100px;">`
    },time)
}

const animateSkill=()=>{
    time=1000;
    for(i=0;i<data.length;i++){
        display(time,i)
        time=time+1000
        if(i==data.length){
            i=0;
        }
    }
}
animateSkill()

skill.onclick=()=>animateSkill()

// skills to animate ends here


// quorts section ends
const getquort = document.getElementById('getQuort')
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
        getquort.innerHTML+=letter
    },time)
}
const animateQuort=(quort)=>{
    time=1000
    for(i=0;i<quort.length;i++){
        stringDisplay(time,quort[i])
        time=time+30
    }
}
//quorts section ends
const underDevelopment = document.getElementById('underDevelopment')
underDevelopment.onclick=()=> {
    underDevelopment.innerHTML='Still Under Development Sorry'
    underDevelopment.style.color='red'
}