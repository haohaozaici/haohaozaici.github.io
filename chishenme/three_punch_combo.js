        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=6 ){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            Android.showToast('这么作？今天别吃了！')
            $(this).hide();
        })