var $button = document.querySelector('.start')
var $currentTime = document.querySelector('.timeElapsed')
var timeElapsed = parseInt($currentTime.textContent, 10)
var stop = setInterval(updateTime, 1000)

$button.addEventListener('click', function () {
  if (timeElapsed > 0) {
    clearInterval(stop)
  }
  else {
    setInterval(updateTime, 1000)
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
