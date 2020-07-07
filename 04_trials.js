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
console.log(congruentSoundCombinations[0][0]);
console.log(congruentSoundCombinations[0][1]);

let bird = ["bird"];

// ------------------------------------------------------------------------------------


const practice_trials = {
    key_press: [
        {
            picture: congruentSoundCombinations[0][1],
            sound: congruentSoundCombinations[0][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[1][1],
            sound: congruentSoundCombinations[1][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[2][1],
            sound: congruentSoundCombinations[2][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[3][1],
            sound: congruentSoundCombinations[3][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[4][1],
            sound: congruentSoundCombinations[4][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[5][1],
            sound: congruentSoundCombinations[5][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[6][1],
            sound: congruentSoundCombinations[6][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[7][1],
            sound: congruentSoundCombinations[7][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[8][1],
            sound: congruentSoundCombinations[8][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[9][1],
            sound: congruentSoundCombinations[9][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[10][1],
            sound: congruentSoundCombinations[10][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: congruentSoundCombinations[11][1],
            sound: congruentSoundCombinations[11][0],
            item: 13,
            expected: "same",
            angle: 50,
        },
    ],
};

const main_trials = {
    key_press: [
        {
            picture: "images/main/1_50_same.jpg",
            item: 1,
            expected: "same",
            angle: 50,

        },
        {
            picture: "images/main/1_50_different.jpg",
            item: 1,
            expected: "different",
            angle: 50,

        },
        {
            picture: "images/main/1_150_same.jpg",
            item: 1,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/1_150_different.jpg",
            item: 1,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/2_50_same.jpg",
            item: 2,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/2_50_different.jpg",
            item: 2,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/2_150_same.jpg",
            item: 2,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/2_150_different.jpg",
            item: 2,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/3_50_same.jpg",
            item: 3,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/3_50_different.jpg",
            item: 3,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/3_150_same.jpg",
            item: 3,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/3_150_different.jpg",
            item: 3,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/4_50_same.jpg",
            item: 4,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/4_50_different.jpg",
            item: 4,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/4_150_same.jpg",
            item: 4,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/4_150_different.jpg",
            item: 4,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/5_50_same.jpg",
            item: 5,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/5_50_different.jpg",
            item: 5,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/5_150_same.jpg",
            item: 5,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/5_150_different.jpg",
            item: 5,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/6_50_same.jpg",
            item: 6,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/6_50_different.jpg",
            item: 6,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/6_150_same.jpg",
            item: 6,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/6_150_different.jpg",
            item: 6,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/7_50_same.jpg",
            item: 7,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/7_50_different.jpg",
            item: 7,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/7_150_same.jpg",
            item: 7,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/7_150_different.jpg",
            item: 7,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/8_50_same.jpg",
            item: 8,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/8_50_different.jpg",
            item: 8,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/8_150_same.jpg",
            item: 8,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/8_150_different.jpg",
            item: 8,
            expected: "different",
            angle: 150,
        },

        {
            picture: "images/main/9_50_same.jpg",
            item: 9,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/9_50_different.jpg",
            item: 9,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/9_150_same.jpg",
            item: 9,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/9_150_different.jpg",
            item: 9,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/10_50_same.jpg",
            item: 10,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/10_50_different.jpg",
            item: 10,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/10_150_same.jpg",
            item: 10,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/10_150_different.jpg",
            item: 10,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/11_50_same.jpg",
            item: 11,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/11_50_different.jpg",
            item: 11,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/11_150_same.jpg",
            item: 11,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/11_150_different.jpg",
            item: 11,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/main/12_50_same.jpg",
            item: 12,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/main/12_50_different.jpg",
            item: 12,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/main/12_150_same.jpg",
            item: 12,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/main/12_150_different.jpg",
            item: 12,
            expected: "different",
            angle: 150,
        },
    ],
};
