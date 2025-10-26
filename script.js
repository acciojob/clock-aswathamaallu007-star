//your JS code here. If required.

setInterval(()=>{
	const currentTime = new Date()
    const p = document.getElementById('timer')
	p.innerText = ` ${currentTime.toLocaleDateString()}, ${currentTime.toLocaleTimeString()}`
	
},1000)
