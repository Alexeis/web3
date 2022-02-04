const Web3 = require('web3')

window.onload = function() {
    //variables
    let web3;
    let from;

    //Elements
    const connectButton = document.getElementById('connect');
    const content = document.getElementById('content');
    const account = document.getElementById('account');

    //Functions
    const connect = async () => {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            content.style.display = 'initial';
            account.innerText = 'Inserta aquí la cuenta';
        }
        else {
            alert("Instala MetaMask u otro proveedor de web3");
        }
    };

    //Listeners
    connectButton.onclick = connect;
};