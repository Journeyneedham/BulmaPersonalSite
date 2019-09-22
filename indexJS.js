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
      if (input.value.toLowerCase() == "help") {
          
        var cHelp = document.createElement("div");
        var aSpan = [];
        for (var i = 0; i < 3; i++) {
            aSpan[i]  = document.createElement("span");
            aSpan[i].style.color = '#209cee';
            if (i == 0) {

                aSpan[i].innerHTML = 'about';

            } else if (i == 1) {

                aSpan[i].innerHTML = 'hobbies';
                
            } else {

                aSpan[i].innerHTML = 'work';

            }
        }
        var insert1 = document.createElement("span");
        insert1.innerHTML = ": Short intro about me" + '<br>';
        var insert2 = document.createElement("span");
        insert2.innerHTML = ": What I do outside of work" + '<br>';
        var insert3 = document.createElement("span");
        insert3.innerHTML = ": What I do at work" + '<br>';

        document.getElementById("messageBody").insertBefore(aSpan[0], document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(insert1, document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(aSpan[1], document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(insert2, document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(aSpan[2], document.getElementById("typeDiv"));
        document.getElementById("messageBody").insertBefore(insert3, document.getElementById("typeDiv"));

        

      } else if (input.value.toLowerCase() == "work") {

            var workStuff = document.createElement('span');
            workStuff.innerHTML = "Currently employed at Phoenix Contact, working on multiple development projects involving the likes of bootstrap, php, mysql, and multiple js libraries" + '<br>';
            document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));

      } else if (input.value.toLowerCase() == "about") {

        var workStuff = document.createElement('span');
        workStuff.innerHTML = "Im Journey; I like long walks on the beach, and thus far I've worked with html, css, bootstrap, bulma, javascript, jquery, php, mysql, apache, python, and papyrus" + '<br>';
        document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));

      } else if (input.value.toLowerCase() == "hobbies") {

        var workStuff = document.createElement('span');
        workStuff.innerHTML = "playing and creating videogames, cooking, and loitering in dark alleys" + '<br>';
        document.getElementById("messageBody").insertBefore(workStuff, document.getElementById("typeDiv"));

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
