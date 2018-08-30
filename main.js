var $button = document.querySelector('.start')
$button.addEventListener('click', function () {
  setInterval(updateTime, 1000)
})

function updateTime() {
  var $currentTime = document.querySelector('.timeElapsed')
  var timeElapsed = parseInt($currentTime.textContent, 10)
  timeElapsed += 1
  $currentTime.textContent = timeElapsed
}
