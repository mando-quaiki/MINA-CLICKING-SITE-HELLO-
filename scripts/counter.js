let clickCount = 0;
const mainButton = document.getElementById('mainButton');
const notesContainer = document.getElementById('notesContainer');
const imageSliderContainer = document.getElementById('imageSliderContainer');

if (!mainButton || !notesContainer || !imageSliderContainer) {
    console.error('Required elements not found!');
}

function createNote(text, position) {
    const note = document.createElement('div');
    note.className = `note note-position-${position}`;
    note.textContent = text;
    document.body.appendChild(note);
    
    setTimeout(() => {
        note.classList.add('visible');
    }, 100);
}

mainButton.addEventListener('click', () => {
    clickCount++;
    mainButton.textContent = `${clickCount}/100`;

    switch(clickCount) {
        case 25:
            createNote("Hi nino, i made that site for you i hope you like it! but also i want to say that you are a great girl and i appreciate you!", 1);
            break;
        case 50:
            createNote("you will see soon pretty asf woman that i want live with whole my life", 2);
            break;
        case 75:
            imageSliderContainer.style.display = 'block';
            break;
        case 99:
            createNote("from some time i was wondering to tell you that, but always i knew its bad bc i would be bad but i guess she will like it if we together would be just like that", 3);
            break;
        case 100:
            createNote("congratulasion,you reached 100 clicks Nino! i hope it wasnt hard or too boring ehh, i think i love you, yes you made me love you really idk how or why i am weak but i still love nina but i love you too AAAAAAAAAAA Fk just i love you ok? shut up really! and i love you really love you idk i want say that loud i loved you before but i felt bad for nina feelings but i guess she will like it and be ok with it if you will be too ok , you will be my second wife or my only if something bad happend. ANYWAY I LOVE YOU NINO MWAH! AND NO ITS NOT BC OF YESTERDAY I WAS WONDERING IF THAT FEELINGS ARE REAL FROM A 3 WEEKS OR EVEN BEOFER WHO KNOW JUST BE HAPPY OK? AND SHUT UP!! REALLY AND i love you mwah", 4);
            mainButton.style.transform = 'scale(1.1)';
            break;
    case 101:
    createNote("stop clicking there is nothing there -_-", 5);
    break;
case 110:
    createNote("THERE REALLY NOTHING THERE!!! GO QUIT THAT!", 6);
    break;
case 120:
    createNote("you keep clicking? really? bruh", 7);
    break;
case 130:
    createNote("OK YOU WANT ACTION FINE? NINO I WILL FUCK YOU ASF LIKE TOY FOR FUCK I WILL RAPE YOU I LOVE YOU AND SHUT UP, nah rreally i wont add any new text after so", 8);
    break;
    case 200:
    createNote("wow 200?, there is nothing there still i lied about before i will add more text mwah", 9);
    break;
case 500:
    createNote("500 !? THE FUCK, YOU DONT HAVE ANY THING TO DO? MAYBE TALK WITH ME!! OR SOMETHING STOP CLICK!!!!", 10);
    break;
case 1000:
    createNote("well well well 1000? well if you want fuck just say it", 11);
    break;
case 1010:
    createNote("you so cute", 12);
    break;

case 1100:
    createNote("wow you made 1000 now 1100? i am proud of you", 13);
    break;

case 1111:
    createNote("you know you really crazy but i love it", 14);
    break;

case 1500:
    createNote("you keep going? good girl i love you", 15);
    break;

case 2000:
    createNote("My kid my daughter i am your dad! congratulasion at 2000!", 16);
    break;

case 2500:
    createNote("oh wow you keep going", 17);
    break;

case 3000:
    createNote("3000? wow well um cool? !", 18);
    break;

case 5000:
    createNote("5000!? wow i am proud of you", 19);
    break;

case 10000:
    createNote("10000 the end, i love you Nino i will marry you both, i too love nina so sr but i love you too i am happy with both i hope we all will be happy together i just want live with you all and fk you all heh. btw nina want fuck you and i am not joking", 20);
    break;

       }
});
