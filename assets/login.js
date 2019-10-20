const SHOW_PASS_BTN = $('#showPassword')
const PASS_INPUT = $('#password')
const UNAME_INPUT = $('#username')
const LOGIN_BTN = $('#login')

function switchFrontendLoginState(state) {
  if (state) {
    LOGIN_BTN.addClass('disabled')
    UNAME_INPUT.attr('disabled', true)
    PASS_INPUT.attr('disabled', true)
    LOGIN_BTN.html('<i class="far fa-circle-notch fa-spin"></i>')
  } else {
    LOGIN_BTN.removeClass('disabled')
    UNAME_INPUT.attr('disabled', false)
    PASS_INPUT.attr('disabled', false)
    LOGIN_BTN.html('Zaloguj się')
  }
}

SHOW_PASS_BTN.on('click', () => {
  PASS_INPUT.type = PASS_INPUT.TYPE === 'password' ? 'text' : 'password'
  console.log('[DEBUG] Switched password field type.')
})

LOGIN_BTN.on('click', () => {
  console.log('[DEBUG] Initiating login sequence.')
  switchFrontendLoginState(true)
  setTimeout(() => {
    switchFrontendLoginState(false)
  }, 3000)
})