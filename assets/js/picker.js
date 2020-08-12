//
// ResumePicker
//

window.onload = function() {
	// Handle Resume Picker
	const $picker = document.querySelector('#resume-picker');
	const $hidePicker = document.querySelector('#hidePicker');
	const $header = document.querySelector('header');
	
	$picker.onclick = function(e) {
		const resumeName = e.target.id;
		if (resumeName && resumeName != 'resume-picker' && resumeName != 'hidePicker') {
			$header.setAttribute('class', `resume-${resumeName}`);
		}
	}

	$hidePicker.onclick = function () {
		$picker.style['display'] = 'none';	
	}
}
