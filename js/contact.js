$(function()
{
    $("#about form").submit(function()
    {
       
        var form = $(this);
        var str = form.serialize();

        $.ajax(
        {
            type: "POST",
            url: "contacto.php",
            data: str,
            success: function(msg)
            {
                $("#about .result .alert").remove();
                msg = JSON.parse(msg);

                if(msg.status == 'OK')
                {
                    $('#about .result').append('<div class="alert alert-success">Your message has been sent. Thank you!</div');
                }
                else if(msg.text)
                {
                    $.each(msg.text, function(i, elem){
                        $('#about .result').append('<div class="alert alert-error">' + elem + '</div');
                    })
                }
                else
                {
                    $('#about .result').append('<div class="alert alert-error">Error</div');
                }
            }
        })
        return false;
    })
})