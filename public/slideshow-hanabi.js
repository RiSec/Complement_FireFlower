/*これGIFの方が簡単やった*/

function SlideShow() {


    alert("a");

    /*右側*/
    var pics_src = new Array("img/hanabi-1.png", "img/hanabi-2.png", "img/hanabi-3.png");
    var num = -1;



    function slideshow_timer1() {
        if (num == 3) {
            num = 0;
        }
        else {
            num++;
        }
        document.getElementById("mypic-1",).src = pics_src[num];
        setTimeout("slideshow_timer1()", 1000);
    }
    slideshow_timer1();

    /*左側*/
    var pics_src = new Array("img-2/hanabi-1.png", "img-2/hanabi-2.png", "img-2/hanabi-3.png");
    var num_2 = -1;

    slideshow_timer2();

    function slideshow_timer2() {
        if (num_2 == 3) {
            num_2 = 0;
        }
        else {
            num_2++;
        }
        document.getElementById("mypic-2",).src = pics_src[num_2];
        setTimeout("slideshow_timer2()", 1000);
    }
}
