function checkPin() {
    const pin = document.getElementById('pin').value;
    
    // Ganti '123456' dengan PIN yang Anda inginkan
    if (pin === '123456') {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('message').innerText = 'Yah, kodenya salah. Coba lagi sayang!';
    }
}

function showMessage(msg) {
    document.getElementById('gift-message').innerText = msg;
}
