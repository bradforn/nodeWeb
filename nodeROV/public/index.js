var hasGP = false;
var repGP;


function canGame() {
    return "getGamepads" in navigator;
}

function reportOnGamepad() {
    var gp = navigator.getGamepads()[0];
    var html = "";
        html += "id: "+gp.id+"<br/>";

    for(var i=0;i<gp.buttons.length;i++) {
        html+= "Button "+(i+1)+": ";
        if(gp.buttons[i].pressed)
          html+= " pressed";

          if(gp.buttons[0].pressed)
          console.log("Button A");
          if(gp.buttons[1].pressed)
          console.log("Button B");
          if(gp.buttons[2].pressed)
          console.log("Button X");
          if(gp.buttons[3].pressed)
          console.log("Button Y");
          if(gp.buttons[4].pressed)
          console.log("Button LB");
          if(gp.buttons[5].pressed)
          console.log("Button RB");
          if(gp.buttons[6].pressed)
          console.log("Button LT");
          if(gp.buttons[7].pressed)
          console.log("Button RT");
          if(gp.buttons[8].pressed)
          console.log("Button back");
          if(gp.buttons[9].pressed)
          console.log("Button start");
          if(gp.buttons[10].pressed)
          console.log("Button lTh");
          if(gp.buttons[11].pressed)
          console.log("Button rTh");
          if(gp.buttons[12].pressed)
          console.log("Button dU");
          if(gp.buttons[13].pressed)
          console.log("Button dD");
          if(gp.buttons[14].pressed)
          console.log("Button dL");
          if(gp.buttons[15].pressed)
          console.log("Button dR");


        html+= "<br/>";
    }

    for(var i=0;i<gp.axes.length; i+=2) {
        html+= "Stick "+(Math.ceil(i/2)+1)+": "+gp.axes[i]+","+gp.axes[i+1]+"<br/>";
        if(gp.axes[i] < 0)
        console.log("Stick L", i+1);
        if(gp.axes[i] > 0.4)
        console.log("Stick  R", i+1);
        if(gp.axes[i+1] < -0.4)
        console.log("Stick U", i+1);
        if(gp.axes[i+1] > 0)
        console.log("Stick  D", i+1);
    }

    $("#gamepadDisplay").html(html);
}

$(document).ready(function() {

    if(canGame()) {

        var prompt = "To begin using your gamepad, connect it and press any button!";
        $("#gamepadPrompt").text(prompt);

        $(window).on("gamepadconnected", function() {
            hasGP = true;
            $("#gamepadPrompt").html("Gamepad connected!");
            console.log("connection event");
            repGP = window.setInterval(reportOnGamepad,100);
        });

        $(window).on("gamepaddisconnected", function() {
            console.log("disconnection event");
            $("#gamepadPrompt").text(prompt);
            window.clearInterval(repGP);
        });

        //setup an interval for Chrome
        var checkGP = window.setInterval(function() {
            console.log('checkGP');
            if(navigator.getGamepads()[0]) {
                if(!hasGP) $(window).trigger("gamepadconnected");
                window.clearInterval(checkGP);
            }
        }, 500);
    }

});




