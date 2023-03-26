const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')

window.addEventListener('load',check_password)
password1.addEventListener('input', e => check_password(e))
password2.addEventListener('input', e => check_password(e))

function check_password() {
  if (password1.value != password2.value) {
    password1.classList.add('error')
    password2.classList.add('error')
  }
  else{
    password1.classList.remove('error')
    password2.classList.remove('error')
  }
}