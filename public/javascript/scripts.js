// function to show or hide meeting info on /meetings/:id
function showFields() {
  const zoomInfoDiv = document.getElementById('zoom-info');
  const mtgFormatDiv = document.getElementById('mtg-format').innerText.trim();
  zoomInfoDiv.style.display = mtgFormatDiv === 'In Person' ? 'none' : 'block';
}

showFields()


  


