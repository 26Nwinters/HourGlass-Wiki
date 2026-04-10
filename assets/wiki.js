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
    // Remember dismissal for the session
    try { sessionStorage.setItem('spoiler-dismissed', '1'); } catch(e) {}
  });
  // Check if already dismissed this session
  try {
    if (sessionStorage.getItem('spoiler-dismissed') === '1') {
      spoilerBar.style.display = 'none';
    }
  } catch(e) {}
}

// ── ACTIVE TAB HIGHLIGHT ──
// Automatically marks the correct tab as active based on current path
(function () {
  var path = window.location.pathname;
  var tabs = document.querySelectorAll('.tab[data-section]');
  tabs.forEach(function (tab) {
    var section = tab.getAttribute('data-section');
    if (section === 'home' && (path === '/' || path.endsWith('index.html'))) {
      tab.classList.add('active');
    } else if (section !== 'home' && path.toLowerCase().indexOf(section.toLowerCase()) !== -1) {
      tab.classList.add('active');
    }
  });
})();
