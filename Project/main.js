//import './style.css'
import './Tstyle.css'
import javascriptLogo from './javascript.svg'
import { setupNavBar} from './components/NavBar.js'
import { form, passwordInput, emailInput, submitBtn } from './modules/login_form.js'
import { login, logout, loggedIn } from './modules/login.js'
import { gameLogic } from './modules/gameLogic.js'



if (!loggedIn ){
  document.querySelector('#app').innerHTML = `
  <div class="container">
  <h1 style="color: rgb(178, 235, 138);">Tic Tac Tow</h1>
  <div class="table_div">
      <table>
          <tr>
              <td><button class="bbtn" id="btn1"></button></td>
              <td><button class="bbtn" id="btn2"></button></td>
              <td><button class="bbtn" id="btn3"></button></td>
          </tr>
          <tr>
              <td><button class="bbtn" id="btn4"></button></td>
              <td><button class="bbtn" id="btn5"></button></td>
              <td><button class="bbtn" id="btn6"></button></td>
          </tr>
          <tr>
              <td><button class="bbtn" id="btn7"></button></td>
              <td><button class="bbtn" id="btn8"></button></td>
              <td><button class="bbtn" id="btn9"></button></td>
          </tr>
      </table>
  </div>
  <p></p>
  <div class="score_div">
      <table id="gameScoreTable" class="score_table">
          <tr>
              <td></td>
              <td style="color: rgb(178, 235, 138);">Game Score</td>
              <td></td>
          </tr>
          <tr>
              <td id="playerX">Player X</td>
              <td></td>
              <td id="playerO">Player O</td>
          </tr>
          <tr>
              <td id="xWin">0</td>
              <td></td>
              <td id="oWin">0</td>
          </tr>
      </table>
  </div>
  <p></p>
        <div>
            <button id="reset_btn" onclick="reset()">Reset Game</button>
            <button id="reset_score" onclick="resetScore()">Reset Score</button>
            <button id="register" onclick="register()">Register Players</button>
        </div>
        <h4 style="color:white;">by Hanan kalman</h4>
    </div>
`
}else{
  document.querySelector('#app').innerHTML = `
  <div>
  ${form.outerHTML}
  </div>`
}






const navbar = document.querySelector('#navbar')
setupNavBar(navbar)

gameLogic();
