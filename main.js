// creating a stopwatch object

const timer = document.querySelector('#timer');
const toggle = document.querySelector('#toggle');
const reset = document.querySelector('#reset');

let watch = new Stopwatch(timer);

function start() {
	watch.start();
	toggle.textContent = 'Pause';
}

function stop() {
	watch.stop();
	toggle.textContent = 'Start';
}

toggle.addEventListener('click', function() {
	(watch.isOn) ? stop() : start(); // if the watch is on then stop it otherwise stop it
});

reset.addEventListener('click', function() {
	watch.reset();
});
