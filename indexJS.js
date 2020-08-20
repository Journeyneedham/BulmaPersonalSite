var input = document.getElementById("editableDiv");

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      var wTyped = document.createElement('span');
      wTyped.innerHTML = 'jn:~ guest$ ' + input.value + '<br>';
      document.getElementById("messageBody").insertBefore(wTyped, document.getElementById("typeDiv"));
      if (input.value.toLowerCase() == "ls") {
          
        var cHelp = document.createElement("div");
        var aSpan = [];
        for (var i = 0; i < 4; i++) {
            aSpan[i]  = document.createElement("span");
            aSpan[i].style.color = '#209cee';
            if (i == 0) {

                aSpan[i].innerHTML = 'design';

            } else if (i == 1) {

                aSpan[i].innerHTML = 'front-end';
                
            } else if (i == 2) {

                aSpan[i].innerHTML = 'back-end';

            } else {

              aSpan[i].innerHTML = 'photography';

          }
        }
        var insert1 = document.createElement("span");
        insert1.innerHTML = ": My experience with design" + '<br>';
        var insert2 = document.createElement("span");
        insert2.innerHTML = ": My background in front-end development" + '<br>';
        var insert3 = document.createElement("span");
        insert3.innerHTML = ": Work I've done in back-end development" + '<br>';
        var insert4 = document.createElement("span");
        insert4.innerHTML = ": Skills behind the camera" + '<br>';

        document.getElementById("messageBody").insertBefore(aSpan[0], document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(insert1, document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(aSpan[1], document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(insert2, document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(aSpan[2], document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(insert3, document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(aSpan[3], document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(insert4, document.getElementById("typeDiv"));

        

      } else if (input.value.toLowerCase() == "design") {

            var workStuff = document.createElement('span');
            workStuff.innerHTML = "I currently prototype in figma, and utilize photoshop, gimp, and illustrator for design. I've been designing interfaces, branding, marketing material, etc for over three years in professional & freelance settings" + '<br>';
            document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));

      } else if (input.value.toLowerCase().replace(/ /g,'') == "front-end" || input.value.toLowerCase().replace(/ /g,'') == "frontend") {

        var workStuff = document.createElement('span');
        workStuff.innerHTML = "My primary framework is bootstrap 3/4 and vanilla html/css/javascript, but I've also worked with bulma, jquery, and wordpress(gutenberg)" + '<br>';
        document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));

      } else if (input.value.toLowerCase().replace(/ /g,'') == "back-end" || input.value.toLowerCase().replace(/ /g,'') == "backend") {

        var workStuff = document.createElement('span');
        workStuff.innerHTML = "I primarily use python (flask/django) and php, but I've also utilized node.js for a python proxy server. My primary db is mysql, but I've worked with a redshift modified postgresql db as well. Hosting has been on wamp (windows apache), aws, and heroku" + '<br>';
        document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));

      } else if (input.value.toLowerCase() == "photography") {

        var workStuff = document.createElement('span');
        workStuff.innerHTML = "My current body is a nikon d3500, with 35mm prime and 18-55mm zoom lenses. I primarily use lightroom for most edits, with photoshop for light touchups" + '<br>';
        document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));

      } else if (input.value.toLowerCase() == "clear") {

        document.getElementById("messageBody").querySelectorAll('span').forEach(e => e.parentNode.removeChild(e));

      } else if (input.value.toLowerCase() == "ping") {

        function randPing() {

          return ((Math.random() * 18) + 15);

        }
        var workStuff = document.createElement('span');
        workStuff.innerHTML = `64 bytes from 192.867.53.090: icmp_seq=0 ttl=128 time=${randPing()}` + '<br>';
        document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));
        function repeatPing(loop) {
          loop -= 1;
          var workStuff = document.createElement('span');
          workStuff.innerHTML = `64 bytes from 192.867.53.090: icmp_seq=0 ttl=128 time=${randPing()}` + '<br>';
          setTimeout(function(){
            document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));
            if (loop > 0) {
              repeatPing(loop);
            } else {

              return;

            }
          }, 500);
          

        }
        repeatPing(3)


      } else {

        var workStuff = document.createElement('span');
        workStuff.innerHTML = "-pseudobash: " + input.value + ": command not found" + '<br>';
        document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));

      }

      $("#messageBody").scrollTop($("#messageBody")[0].scrollHeight);
      input.value = "";
      return false;
    }
});
