function clock() {
  var d = new Date();
  var t = d.toLocaleTimeString("nl-NL", {timeZone: "Europe/Amsterdam"});
  document.getElementById("currentTime").innerHTML = t;

  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(d);

  document.getElementById("currentDate").innerHTML = `${weekday} ${year}-${month}-${day}`;

}

document.addEventListener("DOMContentLoaded", () => {
    clock();
    setInterval(clock, 1000);
});