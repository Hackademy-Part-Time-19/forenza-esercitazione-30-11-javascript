let countdown = 5
let intervallo
let cambiaSfondo
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('countdown').innerHTML = countdown
  intervallo = setInterval(function () {
    countdown--
    document.getElementById('countdown').innerHTML = countdown
    if (countdown === 0) {
      clearInterval(intervallo)
      document.getElementById('countdown').innerHTML = ''
      document.getElementById(
        'body'
      ).innerHTML = `  <img id="img" src="immagini/copyright-immagini-generate-ai12.jpg" alt="sfondo" class="immagini" >`
      setTimeout(function () {
        document.getElementById('img').style.opacity = 1
      }, 500)
    }
  }, 1000)
})
