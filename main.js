$(document).ready(function() {
	setInterval(function() {
		
		function leadZero(i) {
			if (i < 10) {
				i = '0' + i
			} return i
		}
		
		var date = new Date()
		var hours = leadZero(date.getHours())
		var minutes = leadZero(date.getMinutes())
		var seconds = leadZero(date.getSeconds())
		var clock = `${hours}:${minutes}:${seconds}`

		$('#clock').html(clock)

		function doubleHex(i) {
			if (i == 'a' || i == 'b' || i == 'c' || i == 'd' || i == 'e' || i == 'f') {
				i = i + i
			} return i
		}

		var red = doubleHex(hours.toString(16))
		var green = doubleHex(minutes.toString(16))
		var blue = doubleHex(seconds.toString(16))
		var hexValue = `#${red}${green}${blue}`

		$('#container').css('background-color', hexValue)
		
		$('#hexValue').html(hexValue)

	},1000)
})