var $button = document.querySelector('.start')
var $currentTime = document.querySelector('.timeElapsed')
var timeElapsed = parseInt($currentTime.textContent, 10)
var time = null
var $input = document.querySelector('#limit')

//Start and pause button features
$button.addEventListener('click', function () {
  if (time === null) {
    time = setInterval(updateTime, 1000)
    $button.textContent = 'Pause'
    $button.classList.replace('start', 'start-clicked')
    $reset.classList.toggle('reset-visible')
  }
  else {
    clearInterval(time)
    time = null
    $button.textContent = 'Start'
    $button.classList.replace('start-clicked', 'start')
  }
})

function updateTime() {
  if ($input.value >= 0) {
    $currentTime.textContent = $input.value
    $input.value -= 1
  }
  else {
  timeElapsed += 1
  $currentTime.textContent = timeElapsed
  }
}

//Reset button features
var $reset = document.querySelector('.reset')

$reset.addEventListener('click', function () {
  clearInterval(time)
  $currentTime.textContent = 0
  $reset.classList.replace('reset-visible', 'reset')
  $button.classList.replace('start-clicked', 'start')
  $button.textContent = 'Start'
})
