import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";

export function setupBroprint(btnElement, resultElement) {
    btnElement.addEventListener('click', () => {
        getCurrentBrowserFingerPrint().then((fp) => {
            console.log(`broprint`,fp)
            resultElement.innerHTML = `Broprint ID: ${fp}`
        })
    })
}
