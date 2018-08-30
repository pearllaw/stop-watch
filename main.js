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
