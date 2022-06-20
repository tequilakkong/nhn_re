$(document).ready(function(){
    //풋터 .sub_co_lst
    $('.sub_co_lst > li').mouseenter(function(){
        $(this).addClass('active');
    })
    .mouseleave(function(){
        $(this).removeClass('active');
    });

//각 section의 위에서부터의 거리를 알아온다
    var pos = [];   // 변수 pos는 배열
    for( var i = 1 ; i<7 ; i++ ){ 
        pos.push($(`#section${i}`).offset().top);
    }
    console.log(pos);


    $(window).scroll(function(){
        var scrollH = $(window).scrollTop();  //스크롤 된 거리를 변수에
        $('.s_num').text(scrollH);            //스크롤 된 거리를 화면에 나오게

      //스크롤 시 리모튼 버튼 색상변화(클라스 삽입)
        if(scrollH < pos[1]){
            $('#remote a').removeClass('on');
            $('#remote a').eq(0).addClass('on');    //0과 같은 순서의 버튼a(첫번째 a)
        } 
        else if(scrollH >= pos[1]  && scrollH < pos[2]) {
            $('#remote a').removeClass('on');
            $('#remote a').eq(1).addClass('on');
        }
        else if(scrollH >= pos[2]  && scrollH < pos[3]) {
            $('#remote a').removeClass('on');
            $('#remote a').eq(2).addClass('on');
        }
        else if(scrollH >= pos[3]  && scrollH < pos[4]) {
            $('#remote a').removeClass('on');
            $('#remote a').eq(3).addClass('on');
        }
        else if(scrollH >= pos[4]  && scrollH < pos[6]) {
            $('#remote a').removeClass('on');
            $('#remote a').eq(4).addClass('on');
        }
        else{
            $('#remote a').removeClass('on');
            $('#remote a').eq(5).addClass('on');
        }
    })

    $('#remote a').on('click',function(e){
        e.preventDefault();
        var ttt = this.hash;    //클릭한 #(해쉬) 값을 변수에 넣는다
        console.log(`클릭한 remote 의 해쉬값은? ${ttt}`);

        var thisSecH = $(ttt).offset().top;  //클릭한 section의 위에서부터의 거리를 변수에
        $('html,body').animate({scrollTop:thisSecH},500,'swing');
    });




//각 section안에 있는 btnDown버튼을 누르면 하나 아래의 section으로 화면이 이동한다
    $('section .btnDown').on('click',function(){
        var aa = $(this).parents('section').index();
        console.log(`지금 클릭한 btnDown은 ${aa}번째 section에 있는 버튼`)
        $('html,body').animate({scrollTop:pos[aa+1]},500,'swing');
    })




});

/*
for(초기값 ; 조건식 ; 증감식){ 실행구 }

$(window).scrollTop()   :화면의 스크롤이 얼마되었는지 가져오거나 반환한다
A.offset().top          :A가 브라우저의 제일 위에서 부터 얼마 떨어져있나를 구한다
A.push(B)               :B를 A배열의 끝에 배열값으로 추가
A.index()               :몇번째 A인지 알아온다(0부터시작)
A.eq(b)     - b와 같은 순서의 A (ex,3번째 A)
*/