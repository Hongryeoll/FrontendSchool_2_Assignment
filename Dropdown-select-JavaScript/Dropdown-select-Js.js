const dropdown = document.querySelector('.dropdown')
const toggleButton = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')


toggleButton.addEventListener('click', function () {
  menu.classList.toggle('show')
})

toggleButton.addEventListener('blur', function () {
  menu.classList.remove('show')
})

options.forEach(function (item) {
  item.addEventListener('mousedown', selectOption)
})

function selectOption() {
  const value = this.textContent.trim()
  toggleButton.textContent = value
}