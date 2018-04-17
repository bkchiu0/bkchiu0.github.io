
M.AutoInit();
var elems = document.querySelectorAll('.scrollspy');
for(i=0; i<elems.length; i++){
	var instance = M.ScrollSpy.init(elems[i]);
	instance.options.scrollOffset=65;
}
var instance = M.Carousel.init({
    fullWidth: false,
    indicators: true
});
baron('.scrollable');