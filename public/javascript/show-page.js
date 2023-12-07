// function to show or hide form elements based on selected options on /meetings/new
function handleFormatChange() {
    const formatValue = document.getElementById('format').value
    const dependentInputs = document.getElementById('dependent-inputs')
    const location = document.getElementById('location')
  
    dependentInputs.style.display = formatValue === 'Hybrid' || formatValue === 'Online Only' ? 'block' : 'none'
    location.style.display = formatValue === 'In Person' ? 'block' : 'none'
  }
  
  document.getElementById('format').addEventListener('change', handleFormatChange)