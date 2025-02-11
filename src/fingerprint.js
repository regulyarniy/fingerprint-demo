import FingerprintJS from '@fingerprintjs/fingerprintjs'
import JSONFormatter from "json-formatter-js";

export function setupFingerprintjs(btnElement, resultElement) {
    btnElement.addEventListener('click', () => {
        FingerprintJS.load().then(res => res.get()).then((result) => {
            resultElement.innerHTML = ``
            console.log(`FingerprintJS`,result.visitorId,result)
            const idDiv = document.createElement('div')
            idDiv.innerText = `FingerprintJS ID: ${result.visitorId}`
            resultElement.appendChild(idDiv)
            const formatter = new JSONFormatter(result,0);
            resultElement.appendChild(formatter.render())
        })
    })
}
