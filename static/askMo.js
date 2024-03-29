// Load marked script dynamically
function loadExternalScript(scriptSrc, callback) {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.onload = callback;
    document.head.appendChild(script);
}

window.setPopupPosition = function () {
    const buttonPosition = document.querySelector('.ask-mo-button').getBoundingClientRect();
    const popup = document.getElementById("popup");

    const requiredWidth = window.innerWidth - buttonPosition.right;
    const availableWidth = window.innerWidth - requiredWidth;

    const popupWidth = Math.min(availableWidth - 10, 600);
    popup.style.width = popupWidth + "px";

    const topOffset = 12;
    const rightOffset = requiredWidth + 35;
    popup.style.top = buttonPosition.bottom + topOffset + "px";
    popup.style.left = buttonPosition.left - rightOffset + "px";
};


window.askMoFunction = function () {
    const popup = document.getElementById("popup");
    window.setPopupPosition();
    popup.style.display = "block";
};

window.addEventListener('resize', function () {
    if (document.getElementById("popup").style.display === "block") {
        window.setPopupPosition();
    }
});

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    const responseElement = document.getElementById('apiResponse');
    responseElement.innerHTML = "";
}

function submitPopup() {
    loadExternalScript('https://cdnjs.cloudflare.com/ajax/libs/marked/2.0.1/marked.min.js');
    const inputValue = document.getElementById('popupInput').value;
    const responseElement = document.getElementById('apiResponse');

    responseElement.innerHTML += '<b>You:</b> ' + '<br />' + inputValue + '<br />';

    responseElement.innerHTML += '<div id="loadingSpinner" class="loader-container">' +
        '<b>Mo:</b>' +
        '<div class="spinner-dot"></div>' +
        '<div class="spinner-dot"></div>' +
        '<div class="spinner-dot"></div>' +
        '</div>';

    document.querySelector('.submit-button').disabled = true;

    fetch('https://robomo-ls.mochat.momentohq.com/rag-momento-vector-index/invoke', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            input: inputValue,
        }),
    })
        .then(response => response.json())
        .then(data => {
            const output = data.output;
            const htmlOutput = marked(output);
            document.getElementById('loadingSpinner').outerHTML = '<b>Mo:</b> ' + htmlOutput + '<br />';
            document.getElementById('popupInput').value = "";
        })
        .catch(error => {
            console.error('API Error:', error);
            document.getElementById('loadingSpinner').outerHTML = '<b>Mo:</b> Error: ' + error.message + '<br />';
        })
        .finally(() => {
            document.querySelector('.submit-button').disabled = false;
        });
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitPopup();
    }
}
