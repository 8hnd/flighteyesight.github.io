var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#nav-wrapper',
    offset: -100
})
function charcountupdate(str) {
	var lng = str.length;
	document.getElementById("charcount").innerHTML = lng + ' out of 3000 characters';
}
function charcountupdate2(str) {
	var lng = str.length;
	document.getElementById("charcount").innerHTML = lng + ' out of 254 characters';
}