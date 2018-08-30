var $button = document.querySelector('.start')
$button.addEventListener('click', function () {
  console.log('Hello')
}, false)

function updateTime() {
  var $currentTime = document.querySelector('.timeElapsed')
  var timeElapsed = parseInt($currentTime.textContent, 10)
  timeElapsed += 1
  $currentTime.textContent = timeElapsed
}
