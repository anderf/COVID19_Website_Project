$(document).ready(function(){
    $("#flipHd").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#fdInP1").click(function(){
      $("#wcov").fadeIn(2000);
      $(".content img").animate(
        {opacity: '0.5',
         });
    });
  });

  $(document).ready(function(){
    $("#fdOutP1").click(function(){
      $("#wcov").hide("slow", function(){
        alert("The answer is now hidden");
        $(".content img").animate(
            {opacity: '1.0',
             });
      });
    });
  });
  $(document).ready(function(){
    $("#fdInP2").click(function(){
      $("#htrn").fadeIn(2000);
      $(".content img").animate(
        {opacity: '0.5',
         });
    });
  });

  $(document).ready(function(){
    $("#fdOutP2").click(function(){
      $("#htrn").hide("slow", function(){
        alert("The answer is now hidden");
        $(".content img").animate(
            {opacity: '1.0',
             });
      });
    });
  });
  $(document).ready(function(){
    $("#fdInP3").click(function(){
      $("#symp").fadeIn(2000);
      $("#symImg").fadeIn(2000);
      $(".content img").animate(
        {opacity: '0.5',
         });
      $("#symImg").animate(
        {opacity: '1.0',
         });
    });
  });

  $(document).ready(function(){
    $("#fdOutP3").click(function(){
      $("#symp").hide("slow", function(){
        alert("The answer is now hidden");
        $(".content img").animate(
            {opacity: '1.0',
             });
      });

    });
  });
 
  $(document).ready(function(){
    $("#fdInf").click(function(){
      $("#links").fadeIn(5000);
    });
  });
  

  $(document).ready(function(){
    $('#slideshow1').cycle({
     fx:'curtainX'
    });
    });

    $(document).ready(function(){
      $('#slideshow3').cycle({
          fx:'shuffle' 
      });
      });
      var imageID=0;
    function changeSlide(direction){
      var totalSlides = 3;
      var link = document.getElementById("mylink");
      if(direction == 'next'){
        if(imageID==totalSlides-1){
          //alert("imageID=0");
          imageID=0;
        }
        else{
          imageID++;
          //alert("imageID++");
        }
      }else{
        if(imageID==0){
          imageID=totalSlides-1;
          //alert("imageID = 2");
        }
        else{
          imageID--;
          //alert("imageID--");
        }
      }

      
      if(imageID==1){
          document.getElementById("myimage").src="/Volumes/Backup/Lambton/Term_2/Web Technologies 2/COVID19 Project/c-images/HEALTH_CANADA.jpg";
          link.setAttribute('href', "https://www.canada.ca/en/health-canada.html");
          //alert("imageID == 1");
        } else
            if(imageID==2){
              document.getElementById("myimage").src="/Volumes/Backup/Lambton/Term_2/Web Technologies 2/COVID19 Project/c-images/johnHopkins.jpeg";
              link.setAttribute('href', "https://coronavirus.jhu.edu/map.html");
              //alert("imageID == 2");
            } else {
                document.getElementById("myimage").src="/Volumes/Backup/Lambton/Term_2/Web Technologies 2/COVID19 Project/c-images/WHO_logo.jpg";
                link.setAttribute('href', "https://www.who.int/emergencies/diseases/novel-coronavirus-2019");
                //alert("imageID == 0");
                
            }
    }

    //Namitha

    function validation(){
      var firstName = document.getElementById("fname").value;
      var lastName= document.getElementById("lname").value;
      var phone = document.getElementById("phone").value;
      var email_address = document.getElementById("emailAddress").value;
      var msg = document.getElementById("message").value;
      var error_message = document.getElementById("error_message");
    
      error_message.style.padding = "10px";
    
      var text;
      if(firstName==""){
        text = "Please Enter first Name";
        error_message.innerHTML = text;
        return false;
      }
      if(lastName==""){
        text = "Please Enter last Name";
        error_message.innerHTML = text;
        return false;
      }
      if(msg==""){
        text = "Please write your Query";
        error_message.innerHTML = text;
        return false;
      }
     
      if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
      }
      if(email_address.indexOf("@") == -1 ){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
      }
     
      alert("Your message has been send!! We will contact you soon");
      return true;
    }


    //Jarmanjit

    $(document).ready(function(){
      $("#panel1").fadeOut();
         $("#panel2").fadeOut();
         $("#panel3").fadeOut();
        $("#p1").fadeOut();
       $("#flip1").click(function(){
         $("#panel1").slideToggle("slow");4
       
       });
       
       
        $("#flip2").click(function(){
         $("#panel2").slideToggle("slow");
       });
       
        $("#flip3").click(function(){
         $("#panel3").slideToggle("slow");
       });
       
        $("#ph1").click(function(){
         $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
       });
       
     });
    