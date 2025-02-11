import './style.css'
import {setupBroprint} from './broprint.js'
import {setupThumbmarkjs} from "./thumbmark.js";
import {setupFingerprintjs} from "./fingerprint.js"

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="broprint" type="button">get broprint</button>
      <div id="broprintResult" class="result"></div>
    </div>
    <div class="card">
      <button id="thumbmark" type="button">get thumbmarkjs</button>
      <div id="thumbmarkResult" class="result"></div>
    </div>
    <div class="card">
      <button id="fingerprint" type="button">get fingerprintjs</button>
      <div id="fingerprintResult" class="result"></div>
    </div>
  </div>
`

setupBroprint(document.querySelector('#broprint'), document.querySelector('#broprintResult'))
setupThumbmarkjs(document.querySelector('#thumbmark'), document.querySelector('#thumbmarkResult'))
setupFingerprintjs(document.querySelector('#fingerprint'), document.querySelector('#fingerprintResult'))