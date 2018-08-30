var $button = document.querySelector('.start')
var $currentTime = document.querySelector('.timeElapsed')
var timeElapsed = parseInt($currentTime.textContent, 10)
var stop = null

$button.addEventListener('click', function () {
  if (stop === null) {
    stop = setInterval(updateTime, 1000)
  }
  else {
    clearInterval(stop)
    stop = null
  }
})

function updateTime() {
  timeElapsed += 1
  $currentTime.textContent = timeElapsed
}

function changeText() {
  $button.textContent = 'Pause'
}

$button.addEventListener('click', changeText, false)

$button.addEventListener('click', function () {
  $button.classList.replace('start', 'start-clicked')
})

var $reset = document.querySelector('.reset')

function resetButton() {
  if (timeElapsed === 0) {
    $reset.visibility = 'hidden'
  }
  else {
    $reset.visibility = 'visible'
  }
}

$reset.addEventListener('click', function () {
  while (stop = setInterval(updateTime, 1000)) {
    clearInterval(stop)
  }
})
