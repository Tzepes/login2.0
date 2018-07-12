// $().include('users.js');

// var script = document.createElement('script');
 
// script.src = 'https://code.jquery.com/jquery-3.3.1.js';
// document.getElementsByTagName('head')[0].appendChild(script); 

var users = [];
var counter=0;

// $(document).ready(function(){
    $("input").focus(function(){
   		$(this).css("background-color", "#cccccc");
    });

    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

    // $("button").hover(function(){
    // 	$(this).css("border-color", "blue");
    // },function(){
    // 	$(this).css("border", "default");
    // });

    /* 
        DONE||||1.Update form to use .submit() handler
        DONE(could use some iprovements)||||2.Validate that all data was inputed, if not display error message that
        data must be entered 
        DONE||||3.Save the input data in the local storage(window.) of the browser and retrieve it 
        each time you open the page and display it in a page, under a table(html) below 
        the form
     */

    $("#loginForm").submit(function (event) {
        event.preventDefault();

        var fname = $("input#fname").val();
        var lname = $("input#lname").val();
        var email = $("input#email").val();

        $("#submit").one('click', function(){
            if($("input#fname").val() == 0 || $("input#lname").val() == 0 || $("input#email").val() == 0){    
                $("input").css("border-color", "red");
                    
                
                $("ul#warn").append("<li style='color: red;'>Parameters missing</li>");
                counter++;
                

                $("input").click(function(){    
                    $("input").css("border-color", "#ccc");
                });
            };
        });
    
        $("form").find("input").each(function(){
            users.push($(this).val());
        });

        localStorage.setItem("firstname", fname);
        localStorage.setItem("lastname", lname);
        localStorage.setItem("email", email); 

        var firstnameS = localStorage.getItem('firstname'),
            lastnameS = localStorage.getItem('lastname'),
            emailS = localStorage.getItem('email');

        if($("input#fname").val() != 0 && $("input#lname").val() != 0 && $("input#email").val() != 0){
           $("table#loginInfo").append(
                    "<tr>" +
                       "<th>" + firstnameS + "</th>" + 
                       "<th>" + lastnameS + "</th>" +
                       "<th>" + emailS + "</th>" +  
                    "</tr>"
                       );
            $("input").val(""); 
        }
        

        var user = $(this).data({fname: fname, lname: lname, email: email});

        $("button#showUsers").click(function(){
            $("table#loginInfo").show("slow");
        })

        $("button#hideUsers").click(function(){
            $("table#loginInfo").hide("slow");
        })
    });
//});



