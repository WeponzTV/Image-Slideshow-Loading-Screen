
var count = 0;
var getcount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector('.progressbar').style.left = '0%';
        document.querySelector('.progressbar').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++getcount;
        document.querySelector('.progressbar').style.left = '0%';
        document.querySelector('.progressbar').style.width = ((getcount / count) * 100) + '%';
    },
};

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () { })(e.data);
});

var img = 0;

function slideshow() {
	var i;
	var slides = document.getElementsByClassName("slides");
  
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	img++;
  
	if(img > slides.length) { img = 1 }    

	slides[img-1].style.display = "block";
	setTimeout(slideshow, 4000);
}

slideshow();