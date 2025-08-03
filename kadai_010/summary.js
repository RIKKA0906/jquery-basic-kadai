$(function(){
    $('#change-color').on('click',function(){
        $('#target').css('color','#348631ff'  );
    });

        $('#change-text').on('click',function(){
        $('#target').text('Hello!');
    });

            $('#fade-out').on('click',function(){
        $('#target').fadeOut();
    });

                $('#fade-in').on('click',function(){
        $('#target').fadeIn();
    });
})