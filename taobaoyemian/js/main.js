//下拉框
(function(){
    var num = 0;

    $('[data-toggle=arrowdown]').hover(function(){
        var _id = $(this).attr('id');
        num = _id.charAt(_id.length - 1);
        $(this).addClass('nav-hover').find('span')
            .removeClass('run-down')
            .addClass('run-up');
        $('#nav-box'+num).slideDown(100);
    }, function(){
        $(this).removeClass('nav-hover').find('span')
            .removeClass('run-up')
            .addClass('run-down');
        $('#nav-box'+num).hide();
    });
    $('[data-toggle=hidden-box]').hover(function(){
        var _id = $(this).attr('id');
        num = _id.charAt(_id.length - 1);
        $('#arrow'+num).addClass('nav-hover')
            .find('span').removeClass('run-down')
            .addClass('run-up');
        $(this).show();
    }, function(){
        $('#arrow'+num).removeClass('nav-hover')
            .find('span').removeClass('run-up')
            .addClass('run-down');
        $(this).slideUp(100);
    });
})(jQuery);

//消息关闭
(function(){
    $('.close-msg').click(function(){
        $('.read-info').css({
            'text-align': 'center'
        }).html('还没有新的消息...');
    });
})(jQuery);


//收藏夹星星变红
 (function(){
    $('#arrow5').hover(function() {
        $(this).find('i').addClass('fa-orange');
    }, function() {
        $(this).find('i').removeClass('fa-orange');
    });
    $('#nav-box5').hover(function(){
        $('#arrow5').find('i').addClass('fa-orange');
    }, function() {
        $('#arrow5').find('i').removeClass('fa-orange');
    });
 })(jQuery);


 //账户card
 (function(){
    var v_width = $('.v_content').width();
    var $v_show = $('.v_content ul');
    var page = 1;
    $('[turn=left]').click(function(){
        if(page == 2){
            $v_show.animate({ left: '+='+v_width}, "slow");
            page = 1;
        }
    });
    $('[turn=right]').click(function(){
        if(page==1){
            $v_show.animate({ left: '-='+v_width}, "slow");
            page = 2;
        }
    });
})(jQuery);


//滚动出现固定导航
(function(){
    $(window).scroll(function(){
        var scTop = $(window).scrollTop(),
            $scS = $('.scroll-search');
        scTop >= 200 ? $scS.slideDown(200) : $scS.slideUp(200);
    });
})(jQuery);


//sidebar
(function(){
    var num;
    $('[toggle=side]').hover(function(){
        var s_class = $(this).attr('class');
        num = s_class.charAt(s_class.length - 1);
        $('#hiden-box-'+num).show();
    },function(){
        $('#hiden-box-'+num).hide();
    });
    $('.hiden-box').hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
    });
})(jQuery);


//关二维码
(function(){
    $('.close-code').click(function(){
        $('.two-code').fadeOut(200);
    });
})(jQuery);

//ofen
(function(){
    $('.ofen-cell:eq(0)').hover(function(){
        $('.ofen-cell-right:eq(0)').css({'border-color': '#406cc0'});
    },function(){
        $('.ofen-cell-right:eq(0)').css('border-color', '#c6d3ec');
    });

    $('.ofen-cell:eq(1)').hover(function(){
        $('.ofen-cell-right:eq(1)').css('border-color', '#f6de58');
    },function(){
        $('.ofen-cell-right:eq(1)').css('border-color', '#fcf5cd');
    });

    $('.ofen-cell:eq(2)').hover(function(){
        $('.ofen-cell-right:eq(2)').css('border-color', '#6a1eb7');
    },function(){
        $('.ofen-cell-right:eq(2)').css('border-color', '#d3bcea');
    });
    
    $('.ofen-cell:eq(3)').hover(function(){
        $('.ofen-cell-right:eq(3)').css('border-color', '#e44346');
    },function(){
        $('.ofen-cell-right:eq(3)').css('border-color', '#f7c7c8');
    });

    $('.orb:eq(0)').hover(function(){
        $('.orb:eq(0) a > div').animate({'height':'80px'}, 200);
    },function(){
        $('.orb:eq(0) a > div').animate({'height':'25px'}, 200);
    })
    $('.orb:eq(1)').hover(function(){
        $('.orb:eq(1) a > div').animate({'height':'80px'}, 200);
    },function(){
        $('.orb:eq(1) a > div').animate({'height':'25px'}, 200);
    })
    $('.orb:eq(2)').hover(function(){
        $('.orb:eq(2) a > div').animate({'height':'80px'}, 200);
    },function(){
        $('.orb:eq(2) a > div').animate({'height':'25px'}, 200);
    })
    $('.orb:eq(3)').hover(function(){
        $('.orb:eq(3) a > div').animate({'height':'80px'}, 200);
    },function(){
        $('.orb:eq(3) a > div').animate({'height':'25px'}, 200);
    })
})(jQuery);


//tab-nav
(function(){
    $('.li-nav').hover(function(){
        var _id, num;
        _id = $(this).attr('id');
        num = _id.charAt(_id.length - 1);
        $('.li-nav').removeClass('li-nav-hover');
        $('.hiddenBox').hide();
        $('#box-'+num).fadeIn(200);
    }, function(){
        $(this).addClass('li-nav-hover');
    });
})(jQuery);

//service-cell
(function(){
    $('.service-cell[id]').hover(function(){
        var _id, num;
        _id = $(this).attr('id');
        num = _id.charAt( _id.length - 1 );
        $('.service-box').css({
            bottom: -50
        }).hide();
        $('#service-box-'+num).show().animate({
            bottom: '0'
        }, 200);
        $('.service-cell[id]').css({
            borderBottomColor: ''
        });
        $(this).css({
            borderBottomColor: '#fff'
        });
    }, function(){

    });
})();

//close-service
(function(){
    $('.service-head > .fa-times').click(function(){
          $('.service-box').fadeOut(200);
    });
})();
/**
 * backToTop1
 */
$(document).ready(function(){
    $(window).scroll( function() {               //滚动时触发
        var top = $(document).scrollTop(),       //获取滚动条到顶部的垂直高度
            height = $(window).height();         //获得可视浏览器的高度
        if(top > 100){
            $("#backToTop1").show(200, function(){
                $("#backToTop1").css({
                    top: height + top - 100
                });
            });
        }
    });
    /*点击回到顶部*/
    $('#backToTop-up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    /*点击到底部*/
    $('#backToTop-down').click(function(){
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 500);
    });
});


