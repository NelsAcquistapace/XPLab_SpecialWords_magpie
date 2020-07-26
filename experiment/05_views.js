// ---------- VIEWS INITIALISATION ---------------------------------------------------------
// Here, the views are initialised. That is, an intro view, three instruction views before
// the practice trials, one instruction view before the main experiment, a post-test survey
// view and a thanks view. The trial-views are separated into practice and main and can be
// found from line 209 onwards.


// Intro view: Participants are welcomed to the experiment. They get the information that a German version of the
// description can always be found below the horizontal lines. We decided not to tell the participants about the
// hypotheses we are testing so that they are not biased when completing the experiment.
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

const not_sarafi_it_is_evil = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'Do not use Safari/ Bitte verwenden Sie nicht Safari',
  text:  `
            Do to occuring difficulties, please do not use the Safari Browser (Apple) for this experiment.
            Other browser, like chrome, are ok.
            <br/>
            <br/>
            -----------------------------------------------------------------------------------------------
            Da es schwierigkeiten mit dem Safari Browser (Apple) gibt, bitten wir Sie diesen nicht zu nutzen.
            Andere Brwoser, wie zum Beispiel Chrome, funktionieren einwandfrei`,
  buttonText: 'next/ weiter'
});


// This view serves to show a consent form to the participants.
//  due to limited amount of space for text, the two consent forms (eng and ger) are shown in popup windows
const consent_form = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'Consent form / Einverständniserklärung',
  text:  `
            Please find under the following
            <a href="materials/consent_forms/consent_form_eng.md" target="popup" onclick="window.open('materials/consent_forms/consent_form_eng.md','consent form','width=1000,height=600')">link</a>
            the consent form for this experiment. If you continue this experiment by pressing the button "next/ weiter" below, you automatically agree to the consent form.
            <br/>
            <br/>
            -----------------------------------------------------------------------------------------------
            Dieser <a href="materials/consent_forms/consent_form_de.md" target="popup" onclick="window.open('materials/consent_forms/consent_form_de.md','consent form','width=1000,height=600')">Link</a>
            bringt Sie zu der Einverständniserklärung dieses Experiments. Dieser stimmen Sie automatisch zu, wenn Sie auf die Schaltfläche "next/ weiter" drücken und mit dem Experiment fortfahren.`,
  buttonText: 'next/ weiter'
});

// The first instructions view serves to ask the participant to get ready for the experiment by getting their
// headphones. The sentence: "This experiment requires your full visual and auditory attention" serves to
// mentally prepare participants for the experiment condition (as we cannot control for surroundings in the
// same way as the original experiment (no lab condition), it is crucial that participant get the feeling
// that their answers in this experiment are important (such that they do not participante half-heartedly).
const instructions_practice_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_practice',
  title: 'General Instructions/ Allgemeine Anweisungen',
  text:  `This experiment requires your full visual and auditory attention.
            <br />
            <br />
            This experiment can only be carried out on a device with a keyboard (such as a laptop or computer). Please place yourself comfortably in front of the screen such that the screen is fully visible to you. If you can, please use headphones. Also, please make sure that you are in a quiet environment with no background noise.
            <br />
            <br />
            -----------------------------------------------------------------------------------------------
            Für dieses Experiment ist ihre vollständige Aufmerksamkeit notwendig.
            <br />
            <br />
            Dieses Experiment kann nur an Geräten mit einer Tastatur durchgeführt werden (Laptop oder Computer). Bitte setzen Sie sich so vor den Bildschirm, dass dieser vollständig in Ihrem Sichtfeld liegt. Bitte nutzen Sie außerdem Kopfhörer und sorgen Sie für eine ruhige Umgebung.
            <br />`,
  buttonText: 'next/ weiter'
});


// The second instruction view gives more detail about the task the participants have to fulfil.
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


// The third instruction view serves to explain how participants have to give their answers (pressing keys
// "y" or "n"). They are also asked to pay attention to their volume and adjust it if necessary. This is
// important, because before the main experiment, participants are asked not to change their volume anymore.
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
            Please pay attention to the volume and adjust it if necessary.
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
            Bitte passen Sie, wenn nötig, die Lautstärke Ihres Gerätes während der Übung an.
            <br />`,
  buttonText: 'go to practice/ Übung starten'
});


// These instructions will be shown before the main experiment starts. Partcipants are asked to check their
// volume again and not to change it during the experiment. Partcipants are also instructed to answer as
// quickly and accurately as possible.
const instructions_main = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_main',
  title: 'Get ready for the main experiment!/ <br />Das Experiment startet in Kürze!',
  text:  `After having practiced, we will now proceed to the main experiment. Please try to answer as quickly and accurately as possible!
            <br />
            <br />
            If you feel like you need to adjust your volume again, please do so now. Do not change the volume during the experiment.
            <br />
            <br />
            -----------------------------------------------------------------------------------------------
            Nachdem Sie nun Gelegenheit hatten, sich mit den grundlegenden Funktionen vertraut zu machen, werden Sie nach Drücken des Buttons zum Experiment weitergeleitet. Bitte versuchen Sie, so schnell und präzise wie möglich zu antworten!
            <br />
            <br />
            Falls Sie Ihre Lautstärke noch einmal anpassen möchten, machen Sie das bitte jetzt. Bitte ändern Sie die Lautstärke nicht mehr während des Experiments.
            <br />`,
  buttonText: 'start'
});


// In the post-test survey, participants are free to give optional information. They also get the opportunity
// to add further comments on the experiment.
const postTest = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional Information/ Weitere Informationen',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.' +
      '<br />' +
      '<br />' +
      '-----------------------------------------------------------------------------------------------' +
      'Die folgenden Angaben sind optional, helfen uns aber bei der Analyse der Ergebnisse.' +
      '<br />',

  buttonText: 'Next/ Weiter',
  age_question: 'Age/ Alter',
  gender_question: 'Gender/ Geschlecht',
  gender_male: 'male/ männlich',
  gender_female: 'female/ weiblich',
  gender_other: 'divers',
  edu_question: 'Level of Education/ Höchster Bildungsabschluss',
  edu_graduated_high_school: 'Graduated High School/ Abitur',
  edu_graduated_college: 'Graduated College/ Hochschulabschluss',
  edu_higher_degree: 'Higher Degree/ Universitärer Abschluss',
  languages_question: 'Native Language/ Muttersprache',
  languages_more: '(i.e. the language(s) spoken at home when you were a child)' +
      '<br /> ' +
      '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  comments_question: 'Further Comments/ Weitere Kommentare'
});


// The 'thanks'-view submits the results. Participants are asked to press the button before closing the window
// (such that their results are not lost).
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!' +
      '<br />' +
      '<br />' +
      'Vielen Dank für Ihre Teilnahme!'
});


// ---------- TRIAL VIEWS ------------------------------------------------------------------
// Here, the practice trials are initialised. There are 6 practice trials in total. Participants receive auditory
// and visual feedback in the practice trials to familiarise themselves with the feedback sounds. Also,
// information on the keys to press is provided.
const practice = custom_views.keypress_special_words_practice({
  trials: 6,
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


// Here, the main trials are initialised. There are 384 trials in total. Each trial (in contrast to the original
// experiment) starts with 500ms pause because else, participants might be overwhelmed. For the main trials, only
// auditory feedback is given (no visual feedback anymore). Also, the kexs to press are not listed anymore. Apart
// from the fixation cross and images, only the progress bar is visible.
const main = custom_views.keypress_special_words_main({
  trials: 192,
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
