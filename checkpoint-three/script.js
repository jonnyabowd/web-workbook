'use strict'

$(function(){

    // initial conversion of dom objects to variables
    var container = $('#container');
    var turd = $('#turd');
    var tp = $('.tp');
    var tp_1 = $('#tp_1');
    var tp_2 = $('#tp_2');
    var score = $('#score');
    var speed_span = $('#speed');
    var restart_btn = $('#restart_btn');
    
    // initial variables for interactions
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var tp_initial_position = parseInt(tp.css('right'));
    var tp_initial_height = parseInt(tp.css('height'));
    var tp_max_height = 100;
    var turd_left = parseInt(turd.css('left'));
    var turd_height = parseInt(turd.height());
    var speed = 10;

    var go_up = false;
    var score_updated = false;
    var game_over = false;

    // main game logic
    var the_game = setInterval(function () {

        // run the stop_the_game function after the turd collides with the top, bottom, or either bar
        if(collision(turd, tp_1) || collision(turd, tp_2) || parseInt(turd.css('top')) <= 0 || parseInt(turd.css('top')) > container_height - turd_height ) {

            stop_the_game();

        }else{
            // capture current postion of right side of bars
            var tp_current_position = parseInt(tp.css('right'));

            //update the score when turd passes bars
            if(tp_current_position > container_width - turd_left){
                if(score_updated === false){
                    score.text(parseInt(score.text()) + 1);
                    score_updated = true;
                }
            };


            // check if bars moved outside the container
            if (tp_current_position > container_width) {

                // change height of bars after they move outside the container
                var new_height = parseInt(Math.random() * tp_max_height);

                if (Math.random() < 0.5) {
                    new_height *= -1;
                }

                tp_1.css('height', tp_initial_height + new_height);
                tp_2.css('height', tp_initial_height - new_height);

                // increase speed
                speed = speed + 1;
                speed_span.text(speed);

                score_updated = false;

                // move bar back to initial position
                tp_current_position = tp_initial_position;
            };


            //move the poles by adding to the right spacing
            tp.css('right', tp_current_position + speed);

            if (go_up === false){
                go_down();
            }
        }
    }, 40);

    // this function continuously moves the turd downwards
    function go_down(){
        turd.css('top', parseInt(turd.css('top')) + 8);
    }

    // this function moves the turd up when called
    function up(){
        turd.css('top', parseInt(turd.css('top')) - 10);
    }

    // events that move the turd upwards
    // mouse events
    $(document).on('mousedown', function(e){
        var mouse = e.type;
        if (mouse && go_up === false && game_over === false){
            go_up = setInterval(up, 50);
        }
    });
    $(document).on('mouseup', function(e){
        var mouse = e.type;
        if (mouse){
            clearInterval(go_up)
            go_up = false;
        }
    });    
    // tap events for touch screens
    $(document).on('taphold', function(e){
        var taphold = e.type;
        if (taphold && go_up === false & game_over === false){
            go_up = setInterval(up, 20);
        }
    });
    $(document).on('tap', function(e){
        var tap = e.type;
        if (tap && go_up === false){
            clearInterval(go_up)
            go_up = false;
        }
    });

    // this function sets the parameters that detect a collision
    function collision($div1, $div2){
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    };

    // this function stops the game if a collision happens
    function stop_the_game(){
        clearInterval(the_game);
        game_over = true;
        restart_btn.slideDown();
    };

    // restart button clears game
    restart_btn.click(function(){
        location.reload();
    });

});