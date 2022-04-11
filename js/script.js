// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: Batuhan Durhan
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function enterClicked() {
  // input
  const hours = parseInt(document.getElementById('numbers-of-hours').value)
  const rate = parseInt(document.getElementById('hourly-rate').value)

  
  // process
  const pay = (rate * hours) * (1.00-0.18)
  const taxes = (rate * hours) * 0.18

  // output
  document.getElementById('pay').innerHTML = 'Pay is: ' + pay.toFixed(2) + ' $'
  document.getElementById('taxes').innerHTML = 'Taxes is: ' + taxes.toFixed(2) + ' $'
}
