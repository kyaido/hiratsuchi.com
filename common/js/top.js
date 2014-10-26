/* top */

$(function(){

	// parallax
    var arrT = new Array(); // T = text
    var arrI = new Array(); // I = image
    var moveT = $('.moveContents[id$="01"]');
    var moveI = $('.moveContents[id$="02"]');
    var numT = 2;
    var numI = 3;
    for(i = 0; i < moveT.length; i++){
        arrT.push(parseInt(moveT.eq(i).css('top').replace('px','')) + parseInt( moveT.eq(i).css('top').replace('px','') / numT));
        moveT.eq(i).css('top', arrT[i] + 'px');
    };
    for(i = 0; i < moveI.length; i++){
        arrI.push(parseInt(moveI.eq(i).css('top').replace('px','')) + parseInt( moveI.eq(i).css('top').replace('px','') / numI));
        moveI.eq(i).css('top', arrI[i] + 'px');
    };
    function parallax(){
        var y = $(this).scrollTop();
        for(j = 0; j < moveT.length; j++){
            moveT.eq(j).css('top', parseInt( -y / numT + arrT[j] ) + 'px');
        };
        for(j = 0; j < moveI.length; j++){
            moveI.eq(j).css('top', parseInt( -y / numI + arrI[j] ) + 'px');
        };
    };
    parallax();
    $(window).scroll(parallax);
	
	// rest
    /*function rest(){
        var distanceTop = $('#rest').offset().top - $(window).height();
        if($(window).scrollTop() > distanceTop + 400){
            $('#rest img').show('slow').fadeTo('slow', 1);
        };
    };
    rest();
	$(window).scroll(rest);*/


	// sideNav
	var sideNav = $('#sideNav li');
	sideNav.hover(function(){
		$(this).fadeTo('fast', 0.6);
	},function(){
		$(this).fadeTo('slow', 1);
	});

	
	// pageTop
	var pageTop = $('#pageTop');
	var pageTopOn = $('#pageTopOn');
	pageTop.hover(function(){
		pageTop.fadeTo(1000, 0).next().fadeTo(1000, 1);
	},function(){
		pageTopOn.fadeTo(1000, 0).prev().fadeTo(1000, 1);
	});

	// debug
	/*$('body').append('<div id="debug"></div>');
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		$('#debug').html(y).css({position:'fixed',top:'0',left:'0',backgroundColor:'black',color:'white'});

	});*/
	
});



// AlphaImageLoader for IE
$(function() {
    if(navigator.userAgent.indexOf("MSIE") != -1) {
        $('img').each(function() {
            if($(this).attr('src').indexOf('.png') != -1) {
                $(this).css({
                    'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
                    $(this).attr('src') +
                    '", sizingMethod="scale");'
                });
            }
        });
    }
});



// Firefox super responsive scroll (c) Keith Clark - MIT Licensed
(function(doc) {

  var root = doc.documentElement;

  // Not ideal, but better than UA sniffing.
  if ("MozAppearance" in root.style) {

    // determine the vertical scrollbar width
    var scrollbarWidth = root.clientWidth;
    root.style.overflow = "scroll";
    scrollbarWidth -= root.clientWidth;
    root.style.overflow = "";

    // create a synthetic scroll event
    var scrollEvent = doc.createEvent("UIEvent")
    scrollEvent.initEvent("scroll", true, true);

    // event dispatcher
    function scrollHandler() {
      doc.dispatchEvent(scrollEvent)
    }

    // detect mouse events in the document scrollbar track
    doc.addEventListener("mousedown", function(e) {
      if (e.clientX > root.clientWidth - scrollbarWidth) {
        doc.addEventListener("mousemove", scrollHandler, false);
        doc.addEventListener("mouseup", function() {
          doc.removeEventListener("mouseup", arguments.callee, false);
          doc.removeEventListener("mousemove", scrollHandler, false);
        }, false)
      }
    }, false)

    // override mouse wheel behaviour.
    doc.addEventListener("DOMMouseScroll", function(e) {
      // Don't disable hot key behaviours
      if (!e.ctrlKey && !e.shiftKey) {
        root.scrollTop += e.detail * 16;
        scrollHandler.call(this, e);
        e.preventDefault()
      }
    }, false)

  }
})(document);