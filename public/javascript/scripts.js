document.addEventListener('DOMContentLoaded', showFields)
document.getElementById('format').addEventListener('change', handleFormatChange)

// function to show or hide form elements based on selected options on /meetings/new
function handleFormatChange() {
    const formatValue = document.getElementById('format').value
    const dependentInputs = document.getElementById('dependent-inputs')
    const location = document.getElementById('location')

    dependentInputs.style.display = formatValue === 'Hybrid' || formatValue === 'Online Only' ? 'block' : 'none'
    location.style.display = formatValue === 'Hybrid' || formatValue === 'In Person' ? 'block' : 'none'
}

// function to show or hide meeting info on /meetings/:id
function showFields() {
    const zoomInfoDiv = document.getElementById('zoom-info')
    const mtgFormatDiv = document.getElementById('mtg-format').innerText
    zoomInfoDiv.style.display = mtgFormatDiv === 'Format: In Person' ? 'none' : 'block'
}

// JavaScript to handle modal interactions
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('updateModal')
    const openModalBtn = document.getElementById('update-meeting-btn')
    const closeBtn = document.getElementsByClassName('close')[0]
    openModalBtn.onclick = function () {
        modal.style.display = 'block'
    }
    closeBtn.onclick = function () {
        modal.style.display = 'none'
    }
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'
        }
    }
})