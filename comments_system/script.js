let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function(){
	event.preventDefault();
	let commentName = document.getElementById('comment-name');
	let commentBody = document.getElementById('comment-body');

	let comment = {
		name : 'Иммануил Кант',
		body : commentBody.value,
		time : Math.floor(Date.now()/1000)
	}
	commentName = '';
	commentBody = '';
	comments.push(comment);
	saveComments();
	showComments();
}

function saveComments() {
	localStorage.setItem('comments', JSON.stringify(comments));
}
	
function loadComments() {
	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
	showComments();
}

function showComments() {
	let commentField = document.getElementById("comment-field");
	let out = '';
	comments.forEach(function(item) {
		out += `<div class="review_name mt">${item.name}</div> `;
		out += `<div class="review_date mt">${timeConverter(item.time)}</div> `;
		out += `<div class="comment">${item.body}</div> `;
	});
	commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }