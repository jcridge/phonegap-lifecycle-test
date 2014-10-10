var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

	window.plugins.flashlight.available(function(isAvailable) {
	if (isAvailable) {

	// switch on
	window.plugins.flashlight.switchOn(); // success/error callbacks may be passed

	// switch off after 3 seconds
	setTimeout(function() {
		window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
	}, 3000);

	} else {
		alert("Flashlight not available on this device");
	}

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}
	
	function testFunction(){
		document.getElementById("demo").innerHTML = "Mike";
	}

    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		test();
		updateDisplay();
    }
;
