const form = {
	self: document.querySelector('.meme-form'),
	top: document.querySelector('#form-top'),
	bot: document.querySelector('#form-bot'),
	img: document.querySelector('#form-image'),
	generateButton: document.querySelector('#generate-button'),
	downloadButton: document.querySelector('#download-button'),
	fontSize: document.querySelector('#form-font-size'),
	fontFamily: document.querySelector('#form-font-face')
  }
  
  
  ///////////////////////////////////
  // Canvas meme functions
  ///////////////////////////////////
  
  const canvas = document.querySelector('.meme-canvas')
  const ctx = canvas.getContext('2d')
  const initCanvas = () => {
	if (!document.querySelector('.meme-canvas')) {
	  return
	}
	canvas.width = 600
	canvas.height = 480
	
	generateCanvasMeme()
  }
  
  const generateCanvasMeme = () => {
	if (!document.querySelector('.meme-canvas')) {
	  return
	}
  
	const img = new Image()
	img.crossOrigin = "Anonymous"
	img.onload = () => {
	  ctx.clearRect(0, 0, canvas.width, canvas.height)
	  img.width = 600
	  img.height = 480
	  ctx.drawImage(img, 0, 0, img.width, img.height)
	  
	  ctx.lineWidth = 5
	  ctx.strokeStyle = 'black'
	  ctx.fillStyle = 'white'
	  ctx.textAlign = 'center'
	  ctx.lineJoin = 'round'
	  // const memeFont = `700 ${form.fontSize.value}px "${form.fontFamily.value}"`
	  const memeFont = `700 42px Oswald`
	  ctx.font = memeFont
  
	  const topText = String(form.top.value).toUpperCase()
	  const botText = String(form.bot.value).toUpperCase()
  
	  const textX = canvas.width / 2
	  const topY = canvas.height - (canvas.height / 30) * 29
	  const botY = canvas.height - (canvas.height / 30)
	  
	  ctx.textBaseline = 'top'
	  ctx.strokeText(topText, textX, topY)
	  ctx.fillText(topText, textX, topY)
	
	  ctx.textBaseline = 'bottom'
	  ctx.strokeText(botText, textX, botY)
	  ctx.fillText(botText, textX, botY)
	}
	img.src = form.img.value
  }
  initCanvas()
  
  const downloadCanvasMeme = () => {
	if (!document.querySelector('.meme-canvas')) {
	  return
	}
	const data = canvas.toDataURL()
	const link = document.createElement('a')
	link.setAttribute('href', data)
	link.setAttribute('download', 'memehi')
	link.setAttribute('target', '_blank')
	link.setAttribute('crossorigin', 'Anonymous')
	link.style.display = 'none'
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
  }
  
  
  ///////////////////////////////////
  // Event Listeners
  ///////////////////////////////////
  
  form.self.addEventListener('submit', (event) => event.preventDefault())
  
  form.generateButton.addEventListener('click', generateCanvasMeme)
  
  form.downloadButton.addEventListener('click', downloadCanvasMeme)
  
  WebFont.load({
	google: {
	  families: ['Oswald', 'Oswald:700', 'Anton', 'Coda']
	},
	active: function() {
	  generateCanvasMeme();
	}
  });
  window.addEventListener('onload', function(){ 
	generateCanvasMeme();
  }, false)


const myHeading = document.getElementsByTagName('main-title')[0];
const myButton = document.getElementById('#generate-button');

// listing to a user event 

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});