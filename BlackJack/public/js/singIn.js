$(document).ready(function(){

    $("#form").validate({

       rules:{
            name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            pass:{
                required: true,
                minlength: 6,
                maxlength: 16,
            },
       },
       messages:{
            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },            
            pass:{
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символа",
                maxlength: "Пароль должен быть максимум 16 символов",
            }
       }
    });

            

});


