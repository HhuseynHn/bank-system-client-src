/** @format */

import { hamburger } from "../utils/hamburger.js";

hamburger();

const viewIncrease = `
<div class="content">
            <div class="content-container">
              <div class="tite"><h2>Enter money</h2></div>
              <div class="operation-content">
                <div class="sub-title">Enter amount</div>
                <input type="number" name="" id="input-number" />
                <button class="button-increase">Enter</button>
              </div>
            </div>
          </div>
`;

const viewCashOut = `
<div class="content-cashout">
            <div class="content-container">
              <div class="tite"><h2>Cashout money</h2></div>
              <div class="operation-content">
                <div class="sub-title">Enter amount</div>
                <input type="number" name="" id="input-number" />
                <button class="button-increase">Enter</button>
              </div>
            </div>
          </div>
`;
const viewDeposit = `
<div class="content-deposit">
            <div class="content-container">
              <div class="tite"><h2>Add Deposit</h2></div>
              <div class="operation-content">
                <div class="sub-title">Enter amount</div>
                <input type="number" name="" id="input-number" />
                <div class="sub-title-percent">Yearly percent</div>

                <select name="" id="input-percent">
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                </select>
                <div class="sub-title-year">Year</div>

                <select name="" id="input-year">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <button class="button-increase button-total">Enter</button>
              </div>
            </div>
          </div>
        `;
const viewCreditLine = `
<div class="content-credit-line">
            <div class="content-container">
              <div class="tite"><h2>Credit Line</h2></div>
              <div class="operation-content">
                <div class="sub-title">Enter amount</div>
                <input type="number" name="" id="input-number" />
                <div class="sub-title-percent">Yearly percent</div>

                <select name="" id="input-percent">
                  <option value="15">15</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                </select>
                <div class="sub-title-year">Year</div>

                <select name="" id="input-year">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div class="sub-title-percent">Commision</div>
                <div><p class="commsion">0.0</p></div>
                <div class="sub-title-percent">Credit %</div>
                <div><p class="credit">0.0</p></div>
                <button class="button-increase button-total">Calculate</button>
                <button class="button-increase button-submit">Submit</button>
              </div>
            </div>
          </div>

  `;
const electionWindow = document.querySelector(".election-window");
const balance = document.querySelector(".show-balance");

const asideElection = document.querySelectorAll(".aside-election");

asideElection.forEach((election) => {
  election.addEventListener("click", () => {
    let operatorAside = election.innerHTML;

    if (operatorAside === "Increase account") {
      electionWindow.innerHTML = viewIncrease;
      const buttonIncrease = document.querySelector(".button-increase");
      const inputIncrease = document.querySelector("#input-number");
      buttonIncrease.addEventListener("click", () => {
        if (inputIncrease.value > 0) {
          balance.innerHTML =
            Number(inputIncrease.value) + Number(balance.innerHTML);
          inputIncrease.value = "";
        }
      });
    } else if (operatorAside === "Cash out") {
      electionWindow.innerHTML = viewCashOut;

      const buttonIncrease = document.querySelector(".button-increase");
      const inputIncrease = document.querySelector("#input-number");

      buttonIncrease.addEventListener("click", () => {
        if (Number(balance.innerHTML) > 0) {
          if (Number(inputIncrease.value) > 0) {
            let result =
              Number(balance.innerHTML) - Number(inputIncrease.value);
            if (result >= 0) {
              balance.innerHTML =
                Number(balance.innerHTML) - Number(inputIncrease.value);
            } else {
              alert("Balance can't be less zero");
            }
          }
        }
        inputIncrease.value = "";
      });
    } else if (operatorAside === "Deposit") {
      electionWindow.innerHTML = viewDeposit;
      const buttonIncrease = document.querySelector(".button-increase");
      const inputIncrease = document.querySelector("#input-number");
      const inputPercent = document.querySelector("#input-percent");
      const inputYear = document.querySelector("#input-year");

      buttonIncrease.addEventListener("click", () => {
        if (inputIncrease.value > 0) {
          balance.innerHTML =
            Number(balance.innerHTML) +
            (Number(inputIncrease.value) *
              Number(inputYear.value) *
              Number(inputPercent.value)) /
              100;
        }

        inputIncrease.value = "";
      });
    } else if (operatorAside === "Credit") {
      electionWindow.innerHTML = viewCreditLine;
      const buttonIncrease = document.querySelector(".button-increase");
      const inputIncrease = document.querySelector("#input-number");
      const inputPercent = document.querySelector("#input-percent");
      const inputYear = document.querySelector("#input-year");
      const commision = document.querySelector(".commsion");
      const creditPercent = document.querySelector(".credit");
      const buttonSubmit = document.querySelector(".button-submit");

      buttonIncrease.addEventListener("click", () => {
        if (inputIncrease.value > 0) {
          let commisionFee = inputIncrease.value * 0.03;
          commision.innerHTML = commisionFee;
          let resultPercemtAmount =
            inputIncrease.value * inputYear.value * (inputPercent.value / 100);
          creditPercent.innerHTML = resultPercemtAmount;
          let netCreditAmount =
            Number(inputIncrease.value) - resultPercemtAmount - commisionFee;
          console.log(netCreditAmount);

          buttonSubmit.addEventListener("click", () => {
            let balanceControl = Number(balance.innerHTML) - netCreditAmount;
            if (balanceControl >= 0) {
              balance.innerHTML = balanceControl;
              commision.innerHTML = "0.0";
              creditPercent.innerHTML = "0.0";
              inputIncrease.value = "";
            } else {
              inputIncrease.value = "";
              alert("Don't enaughf amaunt in Balance ");
            }
          });
        }
      });
    }
  });
});
