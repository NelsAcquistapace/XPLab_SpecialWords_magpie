
// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: "Welcome! / Willkommen!",
  text:   `[deutsche Version unterhalb] Thank you for joining our experiment.
            English descriptions will always be shown above the horizontal line.
            <br/>
            <br/>
            -----------------------------------------------------------------------------------------------
            Vielen Dank, dass Sie an unserem Experiment teilnehmen möchten!
            Anweisungen werden immer unterhalb der horizontalen Linie auf Deutsch wiederholt.
            <br />`,
  buttonText: 'Begin the experiment/ Experiment starten'
});

// For most tasks, you need instructions views
const instructions_practice_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'General Instructions/ Allgemeine Anweisungen',
  text:  `This experiment requires your full visual and auditory attention.
            <br />
            <br />
            If you can, please use headphones. Also, please make sure that you are in a quiet environment with no background noise.
            <br />
            <br />
            -----------------------------------------------------------------------------------------------
            Für dieses Experiment ist ihre vollständige Aufmerksamkeit notwendig.
            <br />
            <br />
            Bitte nutzen Sie Kopfhörer und sorgen Sie für eine ruhige Umgebung.
            <br />`,
  buttonText: 'next/ weiter'
});

const instructions_practice_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'General Instructions/ Allgemeine Anweisungen',
  text:  `In this experiment you will first hear a sound. This is either the spoken label of an object, or a sound, which is made by an object. For example, you might hear the word "trompet" or hear the sound of a trompet.
            <br />
            <br />
            After hearing the sound, an image will be presented.
            <br />
            <br />
            Your task is to decide, whether the sound you heard and the image you see represent the same category.
            <br />
            <br />
            <strong>As a note of caution:</strong> Sound and image can be of the same category, even if the subcategory of the sound does not match the subcategory represented in the picture. That is, you might hear the sound of an owl and see the picture of a sparrow. Even if the subcategories do not match, both stimuli represent the category "bird".
            <br />
            <br />
            -----------------------------------------------------------------------------------------------
            In diesem Experiment werden Sie zuerst ein Geräusch hören. Das kann eine Ein-Wort-Beschreibung einer Kategorie sein oder ein Geräusch, welches mit dieser Kategorie in Verbindung gebracht wird. Beispielsweise könnten Sie das Wort "Trompete" hören oder das Geräusch einer Trompete.
            <br />
            <br />
            Nachdem Sie das Geräusch gehört haben, wird Ihnen ein Bild gezeigt.
            <br />
            <br />
            Ihre Aufgabe ist es, zu entscheiden, ob Geräusch und Bild derselben Oberkategorie angehören.
            <br />
            <br />
            <strong>Wichtig:</strong> Es werden Ihnen Kombinationen gezeigt, in welchen Geräusch und Bild nicht derselben Unterkategorie entsprechen, trotzdem aber zu derselben Oberkategorie gehören. Zum Beispiel könnten Sie das Geräusch einer Eule hören und das Bild eines Spatzen sehen, beide gehören der Oberkategorie "Vogel" an.
            <br />`,
  buttonText: 'next/ weiter'
});

const instructions_practice_3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'General Instructions/ Allgemeine Anweisungen',
  text:  `
            We will start with six practice trials, such that you can familiarize yourself with the task.
            <br />
            <br />
            <span style="color: red">Press <strong>y</strong> on your keyboard, if sound and image represent the same category.
            <br />
            <br />
            Press <strong>n</strong>, if they represent different categories.</span>
            <br />
            <br />
            Please adjust your volume as of your preference during the practice trials.
            <br />
            <br />
            -----------------------------------------------------------------------------------------------
            <br />
            Um sich mit der Aufgabe vertraut zu machen, werden Sie mit einer kurzen Übung beginnen.
            <br />
            <br />
            <span style="color: red">Bitte drücken Sie <strong>y</strong> auf Ihrer Tastatur, wenn Geräusch und Bild derselben Oberkategorie angehören.
            <br />
            <br />
            Bitte drücken Sie <strong>n</strong>, wenn diese unterschiedlichen Oberkategorien angehören.</span>
            <br />
            <br />
            Bitte stellen Sie außerdem während der Übung ihre Lautstärke für Sie passend ein.
            <br />`,
  buttonText: 'go to practice/ Übung starten'
});


const instructions_main = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main',
  title: 'Get ready for the main experiment',
  text:  `After having practiced, we will now proceed to the main experiment. Please try to answer as quickly and accurately as possible!
            <br />
            <br />
            Please do not change your volume during the experiment.
            <br />
            <br />
            -----------------------------------------------------------------------------------------------
            Nachdem Sie nun Gelegenheit hatten, sich mit den grundlegenden Funktionen vertraut zu machen, werden Sie nach drücken des Buttons zum Experiment weitergeleitet. Bitte versuchen Sie, so schnell und präzise wie möglich zu antworten!
            <br />
            <br />
            Bitte verändern Sie während des Experiments die Lautstärke ihres Gerätes nicht.
            <br />`,
  buttonText: 'start'
});


// In the post test questionnaire you can ask your participants addtional questions
const postTest = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

 * Obligatory properties

 - trials: int - the number of trials this view will appear
 - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
 - trial_type: string - the name of the trial type as you want it to appear in the submitted data
 - data: array - an array of trial objects

 * Optional properties

 - pause: number (in ms) - blank screen before the fixation point or stimulus show
 - fix_duration: number (in ms) - blank screen with fixation point in the middle
 - stim_duration: number (in ms) - for how long to have the stimulus on the screen
 More about trial life cycle - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#trial-views-lifecycle

 - hook: object - option to hook and add custom functions to the view
 More about hooks - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#trial-views-hooks

 * All about the properties of trial - https://github.com/magpie-project/magpie-project/blob/master/docs/views.md#properties-of-trial
 */

// Here, we initialize a keyPress task
const practice = custom_views.keypress_special_words({
  trials: 6,
  // trials: 2,
  name: 'practice',
  trial_type: 'practice',
  pause: 500,
  fix_duration: 250,
  hook: {
        after_fix_point: after_fix_pause
  },
  data: _.shuffle(trial_info.practice),
  key1: "y",
  key2: "n",
  y: "match",
  n: "no match",
});


const main = custom_views.keypress_special_words({
  // trials: 384,
  trials: 30,
  name: 'main',
  trial_type: 'main',
  pause: 500,
  fix_duration: 250,
  hook: {
        after_fix_point: after_fix_pause
  },
  data: _.shuffle(trial_info.main),
  key1: "y",
  key2: "n",
  y: "match",
  n: "no match",
});

// There are many more templates available:
// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale
