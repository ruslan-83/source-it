var winW = 630, winH = 460;
if(document.body && document.body.offsetWidth) {
    winW = document.body.offsetWidth;
    winH = document.body.offsetHeight;
}
if(document.compatMode=='CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth ) {
    winW = document.documentElement.offsetWidth;
    winH = document.documentElement.offsetHeight;
}
if(window.innerWidth && window.innerHeight) {
    winW = window.innerWidth;
    winH = window.innerHeight;
}
$(function() {
    $('.clickImage').click(function() {
        var src = $(this).attr('src');
        $('#imageDialog #image').attr('src', src)
            .css('max-width',(winW - 100)+'px')
            .css('max-height',(winH - 100)+'px');

        //When the image has loaded, display the dialog
        $('#imageDialog #image').load(function(){
            $('#imageDialog').dialog({
            //title: uriParts[uriParts.length - 1],
            modal: true,
            resizable: false,
            draggable: false,
            width: 'auto'
            });
        });   
    });
});