// Get modal element
var modal = document.getElementById('simpleModal');

// get open modal button
var modalBtn = document.getElementById('modalBtn');

// get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];



// listen for open click
modalBtn.addEventListener('click', openModal);


// listen for open click
closeBtn.addEventListener('click', closeModal);

// listen for outside click
window.addEventListener('click', clickOutSide);




// fucntion to open modal
function openModal() {
	modal.style.display = 'block';
}

// fucntion to close modal
function closeModal() {
	modal.style.display = 'none';
}

// fucntion to close modal if outside click
function clickOutSide(e) {
	if(e.target == modal) {
		modal.style.display = 'none';
	}
	
}