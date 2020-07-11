// In this file you can specify the trial data for your experiment

let correctLabelCombinations = [];
let congruentSoundCombinations = [];
let incongruentSoundCombinations = [];
let incorrectLabelCombinations = [];
let incorrectSoundCombinations = [];

// CREATING ARRAYS THAT CONTAIN STRINGS DESCRIBING PATHS OF ALL LABELS, SOUNDS, AND IMAGES

// Implementing it this way, it would be quite easy to add further categories. This is not
// necessary for our experiment - however it is nice to have logically created path-names
// as this simplifies coding the possible correct and incorrect combinations
let categories = ["bird", "drum", "motorcycle", "dog", "phone", "guitar"];
let subcategory = [["owl", "sparrow"], ["bongo", "kit"], ["big", "small"], ["labmix", "poodle"], ["cell", "rotary"], ["electric", "acoustic"]];
let gender = ["female", "male"];
let index = ["1", "1", "2", "2"];


// Creates Array containing all label paths
let labelPaths = [];
for (let i1 = 0; i1 < categories.length; i1++) {
    for (let i2 = 0; i2 < gender.length; i2++) {
        labelPaths.push("labels/" + categories[i1] + "_" + gender[i2] + ".wav");
    }
}

// Creates Array containing all image paths
let imagePaths = [];
for (let j = 0; j < categories.length*4; j++) {
    let cat = Math.round((j/4)-0.5);
    imagePaths.push("images/" + categories[cat] + "_" + subcategory[cat][j%2] + "_" + index[j%4] + ".jpg");
}

// Creates Array containing all sound paths
let soundPaths = [];
for (let k1 = 0; k1 < subcategory.length; k1++) {
    for (let k2 = 0; k2 < subcategory[k1].length; k2++){
        soundPaths.push("sounds/" + categories[k1] + "_" + subcategory[k1][k2] + ".wav");
    }
}

// Creating the Array "correctLabelCombinations": Contains all matching combinations of
// labels and images. Every label can be combined with exactly four pictures to create a
// correct match -> 48 combinations (2 labels per category, 4 pictures per category)
let x3;
let x4;

// Find correct combination for each of the labelString-entries:
for (let x1 = 0; x1 < labelPaths.length; x1++) {
    x3 = Math.round((x1/2)-0.5);

    // TODO das dauert, redundanter code, nochmal drueberschauen fuer bessere Idee
    for (let x2 = 0; x2 < 24; x2++) {
        x4 = Math.round((x2/4)-0.5);

        // if label and image are a "matching" combination, push them to the array
        if (x3 === x4) {

            correctLabelCombinations.push([labelPaths[x1], imagePaths[x2]]);

        } else {

            // all incorrect label-image combinations (240)
            incorrectLabelCombinations.push([labelPaths[x1], imagePaths[x2]]);
        }

    }
}

// creating an array with all congruent sound-image combinations
let imagePosCon;
let imagePosIncon;

for (let y1 = 0; y1 < soundPaths.length; y1++) {
    imagePosCon = y1*2;
    imagePosIncon = imagePosCon;

    if (y1 % 2 === 1) {
        imagePosCon -= 1;
    } else {
        imagePosIncon += 3;
    }

    for (let y2 = 0; y2 < imagePaths.length; y2++) {

        if (y2 === imagePosCon || y2 === imagePosCon+2) {

            // all congruent combinations
            congruentSoundCombinations.push([soundPaths[y1], imagePaths[y2]]);

        } else if (y2 === imagePosIncon || y2 === imagePosIncon-2) {

            // all incongruent combinations
            incongruentSoundCombinations.push([soundPaths[y1], imagePaths[y2]]);

        } else {

            // all incorrect sound-image combinations (240)
            incorrectSoundCombinations.push([soundPaths[y1], imagePaths[y2]]);
        }
    }
}

// Function that takes an array and shuffles it (this function is used to avoid
// regularities in the incorrect trials)
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Only 48 incorrect label-image and 48 incorrect sound-image combinations needed.
// Shuffle arrays (240 entries each) first, then slice such that 48 combinations
// remain in each array.
shuffle(incorrectLabelCombinations);
incorrectLabelCombinations = incorrectLabelCombinations.slice(40,88);

shuffle(incorrectSoundCombinations);
incorrectSoundCombinations = incorrectSoundCombinations.slice(40,88);


// TODO: Das ist nur zum Testen!!
// ------------------------------------------------------------------------------------
for(let i = 0; i < incongruentSoundCombinations.length; i++) {
    //console.log(incongruentSoundCombinations[i]);
}
for(let i = 0; i < congruentSoundCombinations.length; i++) {
    //console.log(congruentSoundCombinations[i]);
}
for(let i = 0; i < correctLabelCombinations.length; i++) {
    //console.log(correctLabelCombinations[i]);
}
for(let i = 0; i < incorrectLabelCombinations.length; i++) {
    //console.log(incorrectLabelCombinations[i]);
}
//console.log(congruentSoundCombinations[0][0]);
//console.log(congruentSoundCombinations[0][1]);

// ------------------------------------------------------------------------------------

// function to create trial-arrays
const get_trials = function(start, end, array, congruenceInfo) {
    let correctness = "match";

    // Change correctness-value if the trial is constructed from one of the array
    // containing non-matching (incorrect) combinations.
    if (congruenceInfo === "sound_incorrect" || congruenceInfo === "label_incorrect") {
        correctness = "no match";
    }

    const trial_array = [];

    for (let i = start; i < end; i++) {

        // Each trial consists of a picture and a sound. The correctness-value is used
        // for the participant to receive feedback. The information on the congruence
        // is important for later data analysis.
        var trial = {
            sound: array[i][0],
            picture: array[i][1],
            congruence: congruenceInfo,
            expected: correctness,
        };

        trial_array.push(trial);
    }

    return trial_array;
};

// CONSTRUCT MAIN TRIALS
// Start by creating trial-arrays for each of the possible "combination-arrays"
// (different types of congruence, correctness) respectively:

// t1: 24 matching sound-image combinations (congruent)
// t2: 24 matching sound-image combinations (incongruent)
// t3: 48 matching label-image combinations
// t4: 48 non-matching sound-image combinations
// t5: 48 non-matching label-image combinations
let t1 = get_trials(0, congruentSoundCombinations.length, congruentSoundCombinations, "congruent");
let t2 = get_trials(0, incongruentSoundCombinations.length, incongruentSoundCombinations, "incongruent");
let t3 = get_trials(0, correctLabelCombinations.length, correctLabelCombinations, "label_correct");
let t4 = get_trials(0, incorrectSoundCombinations.length, incorrectSoundCombinations, "sound_incorrect");
let t5 = get_trials(0, incorrectLabelCombinations.length, incorrectLabelCombinations, "label_incorrect");

// Merge all possible combinations. This creates an array with 192 different trials.
let trials = t1.concat(t2.concat(t3.concat(t4.concat(t5))));

// Each combination is tested twice. Therefore, concatenate trials with itself. This
// constructs 384 trials.
trials = trials.concat(trials);


//console.log(trials.length);


// CONSTRUCT PRACTICE TRIALS
// Takes trial-info from previously defined trial-arrays t1-t5. Practice trials should
// include 3 matching combinations and 3 non-matching combinations.
let practice_trials = [t1[0], t2[0], t3[0], t4[0], t5[0], t5[5]];


const trial_info = {

    practice: practice_trials,
    main: trials,

};
