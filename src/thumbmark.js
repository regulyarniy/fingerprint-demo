import { getFingerprint } from '@thumbmarkjs/thumbmarkjs'
import JSONFormatter from "json-formatter-js";

export function setupThumbmarkjs(btnElement, resultElement) {
    btnElement.addEventListener('click', () => {
        getFingerprint(true).then(({hash, data}) => {
            resultElement.innerHTML = ``
            console.log(`Thumbmarkjs`,hash,data)
            const idDiv = document.createElement('div')
            idDiv.innerText = `Thumbmarkjs ID: ${hash}`
            resultElement.appendChild(idDiv)
            const formatter = new JSONFormatter(data,0);
            resultElement.appendChild(formatter.render())
        })
    })
}
