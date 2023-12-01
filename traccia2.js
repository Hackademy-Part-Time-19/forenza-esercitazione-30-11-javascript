document.addEventListener('DOMContentLoaded', function () {
  let immagini = [
    'generatore-di-numeri-casuali.webp',
    'download.jpeg',
    'generatore-di-numeri-casuali-fonte-casualità-astrazione-e-luci-sul-tema-delle-moderne-tecnologie-educazione-scienza-universo-209038243.webp',
    'torsione-di-linee-casuali-generato-dal-computer-rendering-3d-di-uno-sfondo-a-spirale-astratta-2g40e1y.jpg',
  ]
  document.getElementById(
    'body'
  ).innerHTML = `<img id="img" style="object-fit: cover;width: 100%;height: 100vh;" >`
  let elemento = document.getElementById('img')
  elemento.style.transition = 'opacity 2s ease-in-out'
  elemento.style.opacity = 0
  elemento.style.width = '80%'
  elemento.style.height = '70vh'
  elemento.style.borderRadius = '20px'
  elemento.style.marginTop = '10vh'
  let indice = 0
  setInterval(function () {
    elemento.style.opacity = 0
    setTimeout(function () {
      elemento.src = immagini[indice]
      elemento.style.opacity = 1
      indice = (indice + 1) % immagini.length
    }, 1000)
  }, 3000)
})
