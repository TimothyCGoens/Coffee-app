let COFFEE_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

let allOrders = document.getElementById('allOrders')
let newOrder = document.getElementById('newOrder')
let findOrder = document.getElementById('findOrder')
let displayAllOrders = document.getElementById('displayAllOrders')
let findViaEmail = document.getElementById('findViaEmail')
let deleteOrder = document.getElementById('deleteOrder')
let orderEmails = document.getElementById('orderEmails')
let coffeeOrder = document.getElementById('coffeeOrder')


allOrders.addEventListener('click', function(){
  fetch(COFFEE_URL)
  .then(function(response){
    return response.json()
  }).then(function(json){
    Object.keys(json).forEach(function(info){
      let coffeeInfo = `<li><b>CUSTOMER</b>:${json[info].emailAddress}
                        <b>ORDER</b>:${json[info].coffee}</li>`

      displayAllOrders.innerHTML += coffeeInfo
    })
  })
})

newOrder.addEventListener('click', function(){

  let order = {emailAddress: orderEmails.value, coffee: coffeeOrder.value}
  console.log(order)

    fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
  }).then(function(response){
    return response.json()
  }).then(function(updateOrders){
    refreshPage()
  })
})

findOrder.addEventListener('click', function(){
  email = findViaEmail.value

  fetch(`http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`)
  .then(function(response){
    return response.json()
  }).then(function(json){
      let coffeeInfo = `<li><b>CUSTOMER:</b>${json.emailAddress}
                        <b>ORDER:</b>${json.coffee}</li>`

      foundOrders.innerHTML += coffeeInfo
  })
})

deleteOrder.addEventListener('click', function(){
  email = findViaEmail.value
  fetch(`http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(function(response){
    return response.json()
  }).then(function(deleteThisOrder){
    //refreshPage()
  })
})

$('#allOrders').hover(function(){
  $(this).css('background-color', '#3c1e0a')
  $(this).css('color', '#e2cdbf')
  $(this).css('border-color', 'e2cdbf')
}, function(){
  $(this).css('background-color', '#986f54')
  $(this).css('color', '#381c0a')
  $(this).css('border-color', '#381c0a')
})

$('#newOrder').hover(function(){
  $(this).css('background-color', '#3c1e0a')
  $(this).css('color', '#e2cdbf')
  $(this).css('border-color', 'e2cdbf')
}, function(){
  $(this).css('background-color', '#986f54')
  $(this).css('color', '#381c0a')
  $(this).css('border-color', '#381c0a')
})
$('#findOrder').hover(function(){
  $(this).css('background-color', '#3c1e0a')
  $(this).css('color', '#e2cdbf')
  $(this).css('border-color', 'e2cdbf')
}, function(){
  $(this).css('background-color', '#986f54')
  $(this).css('color', '#381c0a')
  $(this).css('border-color', '#381c0a')
})
$('#deleteOrder').hover(function(){
  $(this).css('background-color', '#3c1e0a')
  $(this).css('color', '#e2cdbf')
  $(this).css('border-color', 'e2cdbf')
}, function(){
  $(this).css('background-color', '#986f54')
  $(this).css('color', '#381c0a')
  $(this).css('border-color', '#381c0a')
})

$('#head').hide().delay(500).slideDown(500)
$('#subHead').hide().delay(1000).slideDown(500)
$('#allOrders').hide().delay(1500).slideDown(500)
$('#orderEmails').hide().delay(1600).slideDown(500)
$('#coffeeOrder').hide().delay(1700).slideDown(500)
$('#newOrder').hide().delay(1800).slideDown(500)
$('#findViaEmail').hide().delay(1900).slideDown(500)
$('#findOrder').hide().delay(2000).slideDown(500)
$('#deleteOrder').hide().delay(2100).slideDown(500)
$('.currentOrders').hide().delay(2200).slideDown(500)
