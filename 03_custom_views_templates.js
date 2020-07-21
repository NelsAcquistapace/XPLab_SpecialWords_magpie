// In this file The custom templates are created for the prectice as well as the main trials

// First we create a custom_views object
const custom_views = {};


// Custom view template for practice trials
// forced binary choice using keypress response
// feedback is given via audio and text
// key bindings are shown
custom_views.keypress_special_words_practice = function(config) {
    const keypress_special_words_function = {
        name: config.name,
        title: magpieUtils.view.setter.title(config.title, ""),
        render: function(CT, magpie) {
            let startingTime;
            const question = magpieUtils.view.setter.question(
                config.data[CT].question
            );
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];

            // sound will be played 750ms after a new view is showing
            // this is exactly the offset of the  fixation cross (duration 250ms + pause 500ms)
            var audio = new Audio(config.data[CT].sound);
            setTimeout(() => {
              if (config.data[CT].sound !== undefined) {
                  audio.play();
              }
            }, 750);

            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header'><strong>${key1}</strong> = ${value1}, <strong>${key2}</strong> = ${value2}</p>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                </div>`;

            const answerContainerElem = `<div class='magpie-view-answer-container'>
                        <p class='magpie-view-question'>${question}</p>
                          </div>`;

            $("#main").html(viewTemplate);


            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();

                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;

                    // Reaction time is calculated here,
                    // Time between onset of the image till response.
                    // Calculation:
                    // subtract 2350ms from RT
                    // 500ms pause
                    // 250ms fixation cross
                    // 600ms .wav played
                    // 1000ms pause
                    const RT = Date.now() - startingTime - 2350; // measure RT before anything else

                    if (
                        config.data[CT].expected ===
                        config[keyPressed]
                    ) {
                        correctness = "correct";
                        // show feedback (for practice trial only)
                        // feedpack sound is heard in practice and main trials
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Correct!');
                        var audio = new Audio("materials/feedback_sounds/bleep.wav");
                        audio.play();
                    } else {
                        correctness = "incorrect";
                        // show feedback (for practice trial only)
                        // feedpack sound is heard in practice and main trials
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        $('#feedback').text('Incorrect!');
                        var audio = new Audio("materials/feedback_sounds/buzz.wav");
                        audio.play();
                    }

                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        correctness: correctness,
                        RT: RT
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    setTimeout(magpie.findNextView, 400); // delay to accomodate feedback
                }
            };

            const enableResponse = function() {
                $(".magpie-view").append(answerContainerElem);
                $("body").on("keydown", handleKeyPress);
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_special_words_function;
};



// Custom view template for main trials
// forced binary choice using keypress response
// feedback is given via audio
// key bindings are not shown
custom_views.keypress_special_words_main = function(config) {
    const keypress_special_words_function = {
        name: config.name,
        title: magpieUtils.view.setter.title(config.title, ""),
        render: function(CT, magpie) {
            let startingTime;
            const question = magpieUtils.view.setter.question(
                config.data[CT].question
            );
            const key1 = config.key1;
            const key2 = config.key2;
            const value1 = config[key1];
            const value2 = config[key2];

            // sound will be played 750ms after a new view is showing
            // this is exactly the offset of the  fixation cross (duration 250ms + pause 500ms)
            setTimeout(() => {
              var audio = new Audio(config.data[CT].sound);
              if (config.data[CT].sound !== undefined) {
                  audio.play();
              }
            }, 750);

            const viewTemplate = `<div class="magpie-view">
                    <h1 class='magpie-view-title'>${this.title}</h1>
                    <p class='magpie-response-keypress-header' id='feedback'></p>
                    <div class='magpie-view-stimulus-container'>
                        <div class='magpie-view-stimulus magpie-nodisplay'></div>
                    </div>
                </div>`;

            const answerContainerElem = `<div class='magpie-view-answer-container'>
                        <p class='magpie-view-question'>${question}</p>
                          </div>`;

            $("#main").html(viewTemplate);


            const handleKeyPress = function(e) {
                const keyPressed = String.fromCharCode(
                    e.which
                ).toLowerCase();

                if (keyPressed === key1 || keyPressed === key2) {
                    let correctness;

                    // Reaction time is calculated here,
                    // Time between onset of the image till response.
                    // Calculation:
                    // subtract 2350ms from RT
                    // 500ms pause
                    // 250ms fixation cross
                    // 600ms .wav played
                    // 1000ms pause
                    const RT = Date.now() - startingTime - 2350; // measure RT before anything else

                    if (
                        config.data[CT].expected ===
                        config[keyPressed]
                    ) {
                        correctness = "correct";
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        var audio = new Audio("materials/feedback_sounds/bleep.wav");
                        audio.play();
                    } else {
                        correctness = "incorrect";
                        $(".magpie-view-stimulus").addClass("magpie-invisible");
                        var audio = new Audio("materials/feedback_sounds/buzz.wav");
                        audio.play();
                    }

                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        key_pressed: keyPressed,
                        correctness: correctness,
                        RT: RT
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    trial_data[config.data[CT].key1] =
                        config.data[CT][key1];
                    trial_data[config.data[CT].key2] =
                        config.data[CT][key2];

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        if (config.data[CT].canvas.canvasSettings !== undefined) {
                            for (let prop in config.data[CT].canvas.canvasSettings) {
                                if (config.data[CT].canvas.canvasSettings.hasOwnProperty(prop)) {
                                    trial_data[prop] = config.data[CT].canvas.canvasSettings[prop];
                                }
                            }
                            delete trial_data.canvas.canvasSettings;
                        }
                        for (let prop in config.data[CT].canvas) {
                            if (config.data[CT].canvas.hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT].canvas[prop];
                            }
                        }
                        delete trial_data.canvas;
                    }

                    magpie.trial_data.push(trial_data);
                    $("body").off("keydown", handleKeyPress);
                    setTimeout(magpie.findNextView, 400); // delay to accomodate feedback
                }
            };

            const enableResponse = function() {
                $(".magpie-view").append(answerContainerElem);
                $("body").on("keydown", handleKeyPress);
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            magpieUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "keyPress"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return keypress_special_words_function;
};
