$(document).ready(()=>{
    console.log("Event triggered!")
})

var i=0;
$('body').click(function(){
    if(i==0){
        i++;
        $('.l1').toggleClass('l1-2')
        $('.l2').toggleClass('l2-2')
        $('.l3').toggleClass('l3-2')
        $('.l4').toggleClass('l4-2')
        $('.l5').toggleClass('l5-2')
        $('.p1').toggleClass('p1-2')
        $('.group').toggleClass('group-2')
        $('.p2').toggleClass('p2-2')
        $('.Hotel').toggleClass('Hotel-2')
    }else if(i==1){
        i++;
        $('.l1').toggleClass('l1-3')
        $('.l1').toggleClass('lamp-fade')
        $('.l2').toggleClass('l2-3')
        $('.l2').toggleClass('lamp-fade')
        $('.l3').toggleClass('l3-3')
        $('.l3').toggleClass('lamp-fade')
        $('.l4').toggleClass('l4-3')
        $('.l4').toggleClass('lamp-fade')
        $('.l5').toggleClass('l5-3')
        $('.l5').toggleClass('lamp-fade')
        $('.p1').toggleClass('p1-3')
        $('.p1').toggleClass('p1-next')
        $('.group').toggleClass('group-3')
        $('.group').toggleClass('group-fade')
        $('.p2').toggleClass('p2-3')
        $('.p2').toggleClass('p2-next')
        $('.Hotel').toggleClass('Hotel-3')
        $('.Hotel').toggleClass('Hotel-next')

        $('.nav').toggleClass('fadein')
        $('.main').toggleClass('fadein')
        $('.content').toggleClass('fadein')
        
    }
    console.log(state)
})