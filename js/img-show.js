$(document).ready(function(){
    var $iBox = $('.imgBox'),
        $iNum = $('.imgNum'),
        indexImg = 1,          //初始下标
        totalImg = 5,          //图片总数量
        imgSize = 520,         //图片宽度
        moveTime = 900,        //切换时间
        setTime = 2500,        //停留时间
        clc = null;

    function moveImg(){
        if(indexImg != totalImg){
            $iBox.animate({
                left: -(indexImg*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        }
        else{
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    }
    $iNum.hover(function(){
        $iBox.stop();                    //结束当前动画
        clearInterval(clc);              //暂停循环
        $iNum.removeClass('mark-color');
        $(this).addClass('mark-color');
        indexImg = $(this).index();
        $iBox.animate({
            left: -(indexImg*imgSize) + 'px'
        }, 500);
    },function(){
        clc = setInterval(moveImg, setTime);  //周期调用函数
    });

    //鼠标放上停止动画
    $iBox.hover(function(){
        $('.control').fadeIn(200);
        clearInterval(clc);              //暂停循环
    },function(){
        $('.control').hide();
        clc = setInterval(moveImg, setTime);
    });
    //显示左右
    $('.control').hover(function(){
        clearInterval(clc);
        $('.control').show();
//        return false;允许传播
    });
    //向右边前进
    $('.to-right').click(function(){
        if(indexImg != totalImg){
            $iBox.animate({
                left: -(indexImg*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        }
        else{
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    });
    //向左边前进
    $('.to-left').click(function(){
        indexImg--;
        if(indexImg != 0){
            $iBox.animate({
                left: -((indexImg - 1)*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq((indexImg - 1))
                .addClass('mark-color');
        }
        else{
            indexImg = totalImg;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: -((indexImg - 1)*imgSize) + 'px'
            }, moveTime);
        }
    });

    clc = setInterval(moveImg, setTime);
});


//图片二
$(document).ready(function(){
    var $iBox = $('.imgBox1'),
        $iNum = $('.imgNum1'),
        indexImg = 1,          //初始下标
        totalImg = 5,          //图片总数量
        imgSize = 520,         //图片宽度
        moveTime = 800,        //切换时间
        setTime = 2400,        //停留时间
        clc = null;

    function moveImg(){
        if(indexImg != totalImg){
            $iBox.animate({
                left: -(indexImg*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        }
        else{
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    }
    $iNum.hover(function(){
        $iBox.stop();                    //结束当前动画
        clearInterval(clc);              //暂停循环
        $iNum.removeClass('mark-color');
        $(this).addClass('mark-color');
        indexImg = $(this).index();
        $iBox.animate({
            left: -(indexImg*imgSize) + 'px'
        }, 500);
    },function(){
        clc = setInterval(moveImg, setTime);  //周期调用函数
    });


    //鼠标放上停止动画
    $iBox.hover(function(){
        $('.control1').fadeIn(200);
        clearInterval(clc);              //暂停循环
    },function(){
        $('.control1').hide();
        clc = setInterval(moveImg, setTime);
    });
    //显示左右
    $('.control1').hover(function(){
        clearInterval(clc);
        $('.control1').show();
//        return false;允许传播
    });

    //向右边前进
    $('.to-right1').click(function(){
        if(indexImg != totalImg){
            $iBox.animate({
                left: -(indexImg*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq(indexImg)
                .addClass('mark-color');
            indexImg++;
        }
        else{
            indexImg = 1;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: 0
            }, moveTime);
        }
    });
    //向左边前进
    $('.to-left1').click(function(){
        indexImg--;
        if(indexImg != 0){
            $iBox.animate({
                left: -((indexImg - 1)*imgSize) + 'px'
            }, moveTime);
            $iNum.removeClass('mark-color')
                .eq((indexImg - 1))
                .addClass('mark-color');
        }
        else{
            indexImg = totalImg;
            $iNum.removeClass('mark-color')
                .eq(indexImg - 1)
                .addClass('mark-color');
            $iBox.animate({
                left: -((indexImg - 1)*imgSize) + 'px'
            }, moveTime);
        }
    });

    clc = setInterval(moveImg, setTime);
});

