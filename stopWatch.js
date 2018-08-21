// main logic for how our stopwatch functions
function Stopwatch(elem) { // constructors are usually capatalized
	let time = 0;
	let interval;
	let offset;

	// private functions
	function update() { // going to run every 10 millisecond
		if(this.isOn) {
			time += delta(); // add amount of time thats passed
		}
		let formattedTime = timeFormatter(time);
		elem.textContent = formattedTime;
	}

	function delta() { // calculates how much time has passed
		let now = Date.now(); // amount of time passed is now - offset
		let timePassed = now - offset;
		offset = now; // because we want to use now as the new offset
		return timePassed;
	}

	function timeFormatter(timeInMilliseconds) {
		let time = new Date(timeInMilliseconds); // this time variable will be different from the global time variable
		let minutes = time.getMinutes().toString(); // we made it into toString so we could check the length
		let seconds = time.getSeconds().toString();
		let milliseconds = time.getMilliseconds().toString();

		if(minutes.length < 2) {
			minutes = '0' + minutes;
		}

		if(seconds.length < 2) {
			seconds = '0' + seconds;
		}

		while(milliseconds.length < 3) {
			milliseconds = '0' + milliseconds;
		}

		return minutes + ':' + seconds + '.' + milliseconds;
	}

	this.isOn = false; // false until turned on
	this.start = function() {
		if(!this.isOn) { // if not on
			interval = setInterval(update.bind(this), 10); // it'll keep updating every 10 milliseconds
			offset = Date.now(); // this is where we will be using delta to see how much time has passed
			this.isOn = true; // turns this.isOn to true
		}
	}
	this.stop = function() {
		if(this.isOn) { // only runs if it is on
			clearInterval(interval); // Use clearInterval() to stop the time
			interval = null;
			this.isOn = false;
		}
	}
	this.reset = function() {
		if(!this.isOn) { // only works if the stopwatch isn't running
			time = 0;
			update();
		}
	}
}

// let watch = new Stopwatch(); // when new keyword is used with a function it creates an empty object

