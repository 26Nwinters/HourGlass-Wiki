// ── CLOCK ──
function updateClock() {
  var el = document.getElementById('clk');
  if (!el) return;
  var n = new Date();
  el.textContent =
    String(n.getHours()).padStart(2, '0') + ':' +
    String(n.getMinutes()).padStart(2, '0') + ':' +
    String(n.getSeconds()).padStart(2, '0');
}
updateClock();
setInterval(updateClock, 1000);

// ── SPOILER BAR DISMISS ──
var dismissBtn = document.getElementById('sdis');
var spoilerBar = document.getElementById('spbar');
if (dismissBtn && spoilerBar) {
  dismissBtn.addEventListener('click', function () {
    spoilerBar.style.display = 'none';
    try { sessionStorage.setItem('spoiler-dismissed', '1'); } catch(e) {}
  });
  try {
    if (sessionStorage.getItem('spoiler-dismissed') === '1') {
      spoilerBar.style.display = 'none';
    }
  } catch(e) {}
}
