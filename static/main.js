function getTimeRemaining(endtime) {
    const total = endtime.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = (t.days).toString();
      hoursSpan.innerHTML = (t.hours).toString();
      minutesSpan.innerHTML = (t.minutes).toString();
      secondsSpan.innerHTML = (t.seconds).toString();
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  var arr = "2023-05-31 13:30:00".split(/[- :]/)
  const deadline = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
  initializeClock('clockdiv', deadline);