var allLi = $('#menu>ul>li')

for(let i=1; i<allLi.length; i++){
    $(allLi[i]).on('click', function(e){
        var index = $(e.currentTarget).index()
        var px = (index-1) * -920
        $('#slides').css({
            transform: 'translate(' + px + 'px)'
        })
        n = index 
        activeLi(allLi.eq(n))
    })
}

var n = 1
var size = allLi.length
var timerId = setTimer()

playSlide(n % size)

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 5000)
}

function playSlide(index) {
    activeLi(allLi.eq(index).trigger('click'))
}

function activeLi($li) {
    $li.addClass('active').siblings('.active').removeClass('active')
}

/******浮动暂停*******/
$('#slides').on('mouseenter', function () {
    window.clearInterval(timerId)
})

/******离开开始*******/
$('#slides').on('mouseleave', function () {
    timerId = setTimer()
})