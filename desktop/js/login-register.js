function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Sign Up');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox, .forgotBox, .codeForm').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}
function showforgotForm(){
    $('.loginBox, .registerBox').fadeOut('fast',function(){
        $('.forgotBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Forgot your password ?');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showcodeForm(){
    $('.loginBox, .forgotBox').fadeOut('fast',function(){
        $('.codeForm').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Reset your Password');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);    
}
function forgotpasswordModal(){
    showforgotForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);    
}
function forgotcodeModal(){
    showcodeForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);    
}
function loginAjax(){
    /*   Remove this comments when moving to server
    $.post( "/login", function( data ) {
            if(data == 1){
                window.location.replace("/home");            
            } else {
                 shakeModal(); 
            }
        });
    */

/*   Simulate error message from the server   */
     shakeModal();
}
function openCouponModal(){
    showLoginForm();
    setTimeout(function(){
        $('#couponModal').modal('show');    
    }, 230);
    
}
function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}

   