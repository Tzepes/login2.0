// $().include('users.js');

// var script = document.createElement('script');
 
// script.src = 'https://code.jquery.com/jquery-3.3.1.js';
// document.getElementsByTagName('head')[0].appendChild(script); 
// $(document).ready(function(){

    //Input bar effects
    $("input").focus(function(){
   		$(this).css("background-color", "#cccccc");
    });

    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

    /* 
        DONE||||1.Update form to use .submit() handler
        DONE(could use some iprovements)||||2.Validate that all data was inputed, if not display error message that
        data must be entered 
        DONE||||3.Save the input data in the local storage(window.) of the browser and retrieve it 
        each time you open the page and display it in a page, under a table(html) below 
        the form
     */

    const localStorageUsers = localStorage.getItem('users');
    const users = JSON.parse(localStorageUsers);
    // users is an array, iterate over it
    for (const user in users) {
        console.log('name', user.fname);
        // etc
        }

    //the function bellow contains the code for submiting the user input and storing it in the local storage 
    $("#loginForm").submit(function (event) {
        event.preventDefault(); //prevents page refresh after button press

         //variables which takes every user input
        var fname = $("input#fname").val();
        var lname = $("input#lname").val();
        var email = $("input#email").val();
        
        // every user is stored in this object
        userObj = {
            firstname: fname,
            lastname:lname,
            email:email
        }

        // obj = JSON.parse(userObj);

        //the function bellow checks if the user missed any parameters 
        $("#submit").one('click', function(){
            if($("input#fname").val() == 0 || $("input#lname").val() == 0 || $("input#email").val() == 0){    
                $("input").css("border-color", "red");
                    
                // finding the correct jquery method to replace the content of the div/element
                $("ul#warn").replaceWith("<li style='color: red;'>Parameters missing</li>");
                
                $("input").click(function(){    
                    $("input").css("border-color", "#ccc");
                });
            } else { 
                $("ul").remove("#warn");
            }
        });


        // takes every input vaule and pushes it into an array called users[]
       // users.push(userObj);
        
        

        //sets every input value to local storage, mentions what value to take and it gives it a name
        // localStorage.setItem("users", JSON.stringify(userObj));

        // vars for every value from the local storage, used for calling them later
        // var firstnameS = localStorage.getItem('users'),
        //     lastnameS = localStorage.getItem('users'),
        //     emailS = localStorage.getItem('users');

        //shows all users from the local storage inside a table below the login form
        if($("input#fname").val() != 0 && $("input#lname").val() != 0 && $("input#email").val() != 0){
           $("table#loginInfo").append(
                    "<tr>" +
                       "<th>" + userObj.firstname + "</th>" + 
                       "<th>" + userObj.lastname + "</th>" +
                       "<th>" + userObj.email + "</th>" +  
                    "</tr>"
                    );
            $("input").val(""); 
        }
    });
    // showing and hiding table with users 
    $("button#showUsers").click(function(){
        $("table#loginInfo").show("slow");
    });

    $("button#hideUsers").click(function(){
        $("table#loginInfo").hide("slow");
    });
//});



