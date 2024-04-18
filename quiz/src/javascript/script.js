            var questions = $('.question').length;
            var total = 0;
            var avg = 0;
            var myQuestions = $('section.q-n-a');

            shuffle(myQuestions);
            //console.log(myQuestions);
            myQuestions.each( function(){
                var myAnswers = $(this).find('.answer');
                shuffle(myAnswers);
                $(this).find('.answers').html(myAnswers);
            })

            $('.quiz-area').html(myQuestions);

            function shuffle(array){

                for(let i = array.length-1; i >0; i--){
                    let j = Math.floor( Math.random() * (i+1));
                    [array[i], array[j]] = [array[j], array[i]];

                }
            }

            $('.answer').on('click', function(){

                if($(this).parent().find('.selected').length > 0){
                    total -= $(this).parent().find('.selected').data('value');
                    $(this).parent().find('.selected').removeClass('selected');
                }
                total += $(this).data('value');
                $(this).addClass('selected');                
                console.log(total);

            })

            $('.finish').on('click', function(){
            if($('.selected').length === questions){
                avg = total / questions;
                var message = '';
                

                
                if(avg < 1.5){
                    message = 'Ok';
                }else if (avg<2.5){
                    message = 'Médio';
                }else if (avg<3.5){
                    message = 'Grave';
                }else{
                    message = 'Muito grave';
                }

                $('#quiz-area, .finish').hide();
            
            $('.response p').text(message)
            $('.response').show();

            localStorage.setItem('avgValue', avg);
            localStorage.setItem('messageValue', message);
            
                window.location.href = '/index.html'//no local de index.html deverá ser linkado a página de formulario.

            }else{
                var message = 'Você não respondeu todas as perguntas!';
                $('.response p').text(message);
                $('.response').show();
            }
        });
                //alert(message);
            //})