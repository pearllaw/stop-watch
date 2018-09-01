var $button = document.querySelector('.start')
var $currentTime = document.querySelector('.timeElapsed')
var timeElapsed = parseInt($currentTime.textContent, 10)
var stop = null

//Start and pause button features
$button.addEventListener('click', function () {
  if (stop === null) {
    stop = setInterval(updateTime, 1000)
    $button.textContent = 'Pause'
    $button.classList.replace('start', 'start-clicked')
    $reset.classList.toggle('reset-visible')
  }
  else {
    clearInterval(stop)
    stop = null
    $button.textContent = 'Start'
    $button.classList.replace('start-clicked', 'start')
  }
})

function updateTime() {
  timeElapsed += 1
  $currentTime.textContent = timeElapsed
}

//Reset button features
var $reset = document.querySelector('.reset')

$reset.addEventListener('click', function () {
  clearInterval(stop)
  $currentTime.textContent = 0
})
