

document.getElementById('deposite-button').addEventListener('click', function () {
    // input
    const userDeposite = document.getElementById('user-deposite')
    const userDepositeValue = userDeposite.value

    if (userDepositeValue === '' || parseInt(userDepositeValue) === 0) {
        alert('input some amount first')
    } else {
        // deposite section
        const showDeposite = document.getElementById('show-deposite')
        showDeposite.innerText = parseFloat(userDepositeValue) + parseFloat(showDeposite.innerText)

        // balance section
        const showBalance = document.getElementById('show-balance')
        showBalance.innerText = parseFloat(userDepositeValue) + parseFloat(showBalance.innerText)
    }
    userDeposite.value = ''
})


document.getElementById('withdraw-button').addEventListener('click', function() {
    const userWithdraw = document.getElementById('user-withdraw')
    const userWithdrawValue = userWithdraw.value

    if (userWithdrawValue === '' || parseInt(userWithdrawValue) === 0) {
        alert('input some amount first')
    } else {
        // withdraw section
        const showWithdraw = document.getElementById('show-withdraw')
        showWithdraw.innerText = parseFloat(userWithdrawValue) + parseFloat(showWithdraw.innerText)

        // balance section
        const showBalance = document.getElementById('show-balance')
        showBalance.innerText = parseFloat(showBalance.innerText) - parseFloat(userWithdrawValue)
    }
    userWithdraw.value = ''
})