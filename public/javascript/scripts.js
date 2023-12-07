// function to show or hide meeting info on /meetings/:id
function showFields() {
  const zoomInfoDiv = document.getElementById('zoom-info')
  const mtgFormatDiv = document.getElementById('mtg-format').innerText.trim()
  console.log(mtgFormatDiv)
  if (mtgFormatDiv === 'In Person') {
    zoomInfoDiv.style.display = 'none'
  }  else {
    zoomInfoDiv.style.display = 'block'
  }
}

showFields()


  


