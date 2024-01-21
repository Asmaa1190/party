// scroll&sidebar

$('a').on('click',function(){
    let aHref = $(this ).attr('href')
    let sectionOffset = $(aHref).offset().top;
    // console.log(sectionOffset)
    $('html,body').animate({scrollTop:sectionOffset}, 2000)
})


$('.side-icon').on('click',function(){
    $('.sidebox').animate({width:'toggle',paddingInline:'toggle'},2000)
}
)
// =========SILIDER

$('.singer').click(function(){
    $('.cap').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
})
// =====COUNTER

let countDownTime=new Date('Nov 17,2024 23:59:59').getTime();

let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff=countDownTime -dateNow;
    let days=Math.floor(dateDiff/(1000*60*60*24))
    let hours=Math.floor(dateDiff%(1000*60*60*24)/(1000 *60*60))
    let min=Math.floor(dateDiff%(1000*60*60)/(1000 *60))
    let sec=Math.floor(dateDiff%(1000*60)/(1000 ))

    document.querySelector('.day').innerHTML=days
    document.querySelector('.hours').innerHTML=hours
    document.querySelector('.minut').innerHTML=min
    document.querySelector('.sec').innerHTML=sec
    
    if(dateDiff<0){
        clearInterval(counter)
    }

},1000)


// message count
let messages=document.getElementById('message')
let meD=document.querySelector('.meD')
let limit=100;
messages.addEventListener('input',function(){
    let textLength=messages.value .length;
    meD.textContent=textLength-limit;
})

