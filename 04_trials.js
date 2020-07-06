// In this file you can specify the trial data for your experiment

let correctLabelCombinations = [];
let congruentSoundCombinations = [];
let incongruentSoundCombinations = [];
let incorrectCombinations = [];

let categories = ["bird", "drum", "motorcycle", "dog", "phone", "guitar"];
let subcategory = [["owl", "sparrow"], ["bongo", "kit"], ["big", "small"], ["labmix", "poodle"], ["cell", "rotary"], ["electric", "acoustic"]];
let gender = ["female", "male"];
let index = ["1", "1", "2", "2"];

let labelString = [];
let imageString = [];
let soundString = [];

// Creates Array containing all label paths
for (let i1 = 0; i1 < 6; i1++) {
    for (let i2 = 0; i2 < 2; i2++) {
        labelString.push("labels/" + categories[i1] + "_" + gender[i2] + ".wav");
    }
}

// Creates Array containing all image paths
for (let j = 0; j < 24; j++) {
    let cat = Math.round((j/4)-0.5);
    imageString.push("images/" + categories[cat] + "_" + subcategory[cat][j%2] + "_" + index[j%4] + ".jpg");
}

// Creates Array containing all sound paths
for (let k1 = 0; k1 < 6; k1++) {
    for (let k2 = 0; k2 < 2; k2++){
        soundString.push("sounds/" + categories[k1] + "_" + subcategory[k1][k2] + ".wav");
    }
}

// Creating the Array "correctLabelCombinations": Contains all matching combinations of 
// labels and images. Every label can be combined with exactly four pictures to create a 
// correct match -> 48 combinations (2 labels per category, 4 pictures per category)
let x3;
let x4;
let counter;

// Find correct combination for each of the labelString-entries:
for (let x1 = 0; x1 < labelString.length; x1++) {
    x3 = Math.round((x1/2)-0.5);
    counter = 0;
    
    // TODO das dauert, redundanter code, nochmal drueberschauen fuer bessere Idee
    for (let x2 = 0; x2 < 24; x2++) {
        x4 = Math.round((x2/4)-0.5);
        
        // if label and image are a "matching" combination, push them to the array
        if (x3 == x4) {
            correctLabelCombinations.push([labelString[x1], imageString[x2]]);
            counter += 1;
        }
        
        // inner for-loop can be terminated early once 4 combinations for each label 
        // have been found
        if (counter >= 4) {
            break;
        }
        
    }
}

// creating an array with all congruent sound-image combinations
let imagePosCon;
let imagePosIncon;

for (let y1 = 0; y1 < soundString.length; y1++) {
    imagePosCon = y1*2;
    imagePosIncon = imagePosCon;
    
    if (y1 % 2 == 1) {
        imagePosCon -= 1;
    } else {
        imagePosIncon += 3;
    }

    // all congruent combinations
    congruentSoundCombinations.push([soundString[y1], imageString[imagePosCon]]);
    congruentSoundCombinations.push([soundString[y1], imageString[imagePosCon+2]]);

    // all incongruent combinations
    incongruentSoundCombinations.push([soundString[y1], imageString[imagePosIncon-2]]);
    incongruentSoundCombinations.push([soundString[y1], imageString[imagePosIncon]]);
}

const practice_trials = {
    key_press: [
        {
            picture: "images/practice/13_50_same.jpg",
            // ----------------------------------------
            sound: "sounds/guitar_acoustic.wav",
            // ----------------------------------------
            item: 13,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/practice/13_50_different.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 13,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/practice/13_150_same.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 13,
            expected: "same",
            angle: 150,
        },
        {
            picture: "images/practice/13_150_different.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 13,
            expected: "different",
            angle: 150,
        },
        {
            picture: "images/practice/14_50_same.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 14,
            expected: "same",
            angle: 50,
        },
        {
            picture: "images/practice/14_50_different.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 14,
            expected: "different",
            angle: 50,
        },
        {
            picture: "images/practice/14_150_same.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 14,
            expected: "same",
            angle: 150
        },
        {
            picture: "images/practice/14_150_different.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 14,
            expected: "different",
            angle: 150
        },
        {
            picture: "images/practice/15_50_same.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 15,
            expected: "same",
            angle: 50
        },
        {
            picture: "images/practice/15_50_different.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 15,
            expected: "different",
            angle: 50
        },
        {
            picture: "images/practice/15_150_same.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 15,
            expected: "same",
            angle: 150
        },
        {
            picture: "images/practice/15_150_different.jpg",
            sound: "sounds/guitar_acoustic.wav",
            item: 15,
            expected: "different",
            angle: 150
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
