// ---------- TRIAL CONSTRUCTION -----------------------------------------------------------
// Here, the trials are constructed. First, arrays containing strings that construct the
// source to all images, sounds, and labels are constructed. Then, all possible sound-image
// and label-image combinations are built and saved in on of five two-dimensional arrays,
// that represent the type of combination: congruent or incongruent sound-image combination,
// correct label-image combination, incorrect label-image or sound-image combinations. The
// described arrays are initialised below.

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
        labelPaths.push("materials/labels/" + categories[i1] + "_" + gender[i2] + ".wav");
    }
}


// Creates Array containing all image paths
let imagePaths = [];
for (let j = 0; j < categories.length*4; j++) {
    let cat = Math.round((j/4)-0.5);
    imagePaths.push("materials/images/" + categories[cat] + "_" + subcategory[cat][j%2] + "_" + index[j%4] + ".jpg");
}


// Creates Array containing all sound paths
let soundPaths = [];
for (let k1 = 0; k1 < subcategory.length; k1++) {
    for (let k2 = 0; k2 < subcategory[k1].length; k2++){
        soundPaths.push("materials/sounds/" + categories[k1] + "_" + subcategory[k1][k2] + ".wav");
    }
}


// ---------- CREATES LABEL-IMAGE COMBINATIONS ---------------------------------------------
// Each label is combined with each image. If they make a valid combination (e.g. label
// "dog" and image of a dog), they are added to the array containing all valid combinations
// (correctLabelCombinations), else they are added to the array containing all invalid
// combinations (incorrectLabelCombinations).
let x3;
let x4;

for (let x1 = 0; x1 < labelPaths.length; x1++) {
    x3 = Math.round((x1/2)-0.5);

    for (let x2 = 0; x2 < 24; x2++) {
        x4 = Math.round((x2/4)-0.5);

        if (x3 === x4) {

            // all correct label-image combinations (48)
            correctLabelCombinations.push([labelPaths[x1], imagePaths[x2]]);

        } else {

            // all incorrect label-image combinations (240)
            incorrectLabelCombinations.push([labelPaths[x1], imagePaths[x2]]);
        }

    }
}

// ---------- CREATES SOUND-IMAGE COMBINATIONS ---------------------------------------------
// Each sound is combined with each image. If sound and image represent the same category
// and they make a congruent combination, they are added to the array congruentSoundCombina-
// tions. If they represent the same category but are an incongruent combination, they are
// added to the array incongruentSoundCombinations. If they are neither of the above, sound
// and image are not of the same category (add to array incorrectSoundCombinations).
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

            // all congruent combinations (24)
            congruentSoundCombinations.push([soundPaths[y1], imagePaths[y2]]);

        } else if (y2 === imagePosIncon || y2 === imagePosIncon-2) {

            // all incongruent combinations (24)
            incongruentSoundCombinations.push([soundPaths[y1], imagePaths[y2]]);

        } else {

            // all incorrect sound-image combinations (240)
            incorrectSoundCombinations.push([soundPaths[y1], imagePaths[y2]]);
        }
    }
}


// ---------- REDUCE AMOUNT OF INCORRECT COMBINATIONS --------------------------------------
// In total the arrays "incorrectLabelCombinations" and "incorrectSoundCombinations" each
// have 240 entries. To cancel out possible regularities in the incorrect trials (e.g. the
// label "dog" is used multiple times but the label "motorcycle" is never used in the in-
// correct trials), we chose to add all possible combinations first, shuffle the array and
// then shorten it to 48 combinations each for incorrect sound-image and label-image combi-
// nations.

// Function that takes an array and shuffles it.
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//Shuffle arrays first, then slice such that 48 combinations remain in each array.
shuffle(incorrectLabelCombinations);
incorrectLabelCombinations = incorrectLabelCombinations.slice(40,88);

shuffle(incorrectSoundCombinations);
incorrectSoundCombinations = incorrectSoundCombinations.slice(40,88);


// ---------- CREATES TRIAL-ARRAYS ---------------------------------------------------------
// This function takes an two-dimensional array that contains combinations of sounds/labels
// and images. Also, info must be given of the type of trial (one of the four options:
// congruent, incongruent, label_correct, sound_incorrect or label_incorrect). This info is
// required for feedback and later data analysis.

const get_trials = function(array, info) {
    let correctness = "match";
    let cue_type = "sound";

    // Change correctness-value if the trial is constructed from one of the array
    // containing non-matching (incorrect) combinations. Change cue_type if array
    // is a label-image combination array.
    if (info.includes("incorrect")) {
        correctness = "no match";
    }
    if (info.includes("label")) {
        cue_type = "label";
    }

    const trial_array = [];

    for (let i = 0; i < array.length; i++) {

        var trial = {
            sound: array[i][0],
            picture: array[i][1],
            info: info,
            cue_type: cue_type,
            expected: correctness,
        };

        trial_array.push(trial);
    }

    return trial_array;
};


// ---------- CONSTRUCT MAIN TRIALS --------------------------------------------------------
// Start by creating trial-arrays for each of the possible "combination-arrays" (different
// types of congruence, correctness) respectively:

// t1: 24 matching sound-image combinations (congruent)
// t2: 24 matching sound-image combinations (incongruent)
// t3: 48 matching label-image combinations
// t4: 48 non-matching sound-image combinations
// t5: 48 non-matching label-image combinations
let t1 = get_trials(congruentSoundCombinations, "congruent");
let t2 = get_trials(incongruentSoundCombinations, "incongruent");
let t3 = get_trials(correctLabelCombinations, "label_correct");
let t4 = get_trials(incorrectSoundCombinations, "sound_incorrect");
let t5 = get_trials(incorrectLabelCombinations, "label_incorrect");

// Merge all possible combinations. This creates an array with 192 different trials.
let trials = t1.concat(t2.concat(t3.concat(t4.concat(t5))));

// Each combination is tested twice. Therefore, concatenate trials with itself. This con-
// structs in total 384 trials.
trials = trials.concat(trials);


// ---------- CONSTRUCT PRACTICE TRIALS ----------------------------------------------------
// Takes trial-info from previously defined trial-arrays t1-t5. Practice trials include 3
// matching combinations and 3 non-matching combinations.
let practice_trials = [t1[0], t2[0], t3[0], t4[0], t5[0], t5[5]];


const trial_info = {

    practice: practice_trials,
    main: trials,

};
