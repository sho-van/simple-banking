
// admin id and password
const adminEmail = 'email@mail.com'
const adminPassword = 'pass'

//login button click event
document.getElementById('login-button').addEventListener('click', function () {
    const loginEmail = document.getElementById('login-email').value
    const loginPassword = document.getElementById('login-password').value

    if (loginEmail === adminEmail && loginPassword === adminPassword) {
        window.location.href = 'home.html'
    }
})