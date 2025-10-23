let clickCount = 0;
const mainButton = document.getElementById('mainButton');
const notesContainer = document.getElementById('notesContainer');
const imageSliderContainer = document.getElementById('imageSliderContainer');

if (!mainButton || !notesContainer || !imageSliderContainer) {
    console.error('Required elements not found!');
}

// Tworzymy notkę i dodajemy do DOM
function createNote(text, position) {
    const note = document.createElement('div');
    note.className = `note note-position-${position}`;
    note.textContent = text;
    document.body.appendChild(note);
    
    setTimeout(() => {
        note.classList.add('visible');
    }, 100);
}

// Funkcja losująca pozycje dla notek 1-19 i 21
function randomizeNotesPositions() {
    const noteNumbers = [...Array(19).keys()].map(i => i + 1).concat([21]);
    noteNumbers.forEach(num => {
        const note = document.querySelector(`.note.note-position-${num}`);
        if (note) {
            const top = Math.floor(Math.random() * 85) + 5; // 5% - 90%
            const left = Math.floor(Math.random() * 85) + 5;
            note.style.top = top + "%";
            note.style.left = left + "%";
            note.style.transform = "translate(-50%, -50%) scale(0.8)";
        }
    });
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
            createNote("congratulasion,you reached 100 clicks Nino! ...", 4);
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
            createNote("i am gonna fuck your pussy so hard that it will hurt you , you will beg for stop and i will keep fk and fk and i will choke you my sweet pet :> mwah!", 8);
            break;
        case 200:
            createNote("wow 200?, there is nothing there still i lied about before i will add more text mwah", 9);
            break;
        case 500:
            createNote("500 !? THE FUCK, YOU DONT HAVE ANY THING TO DO? MAYBE TALK WITH ME!! OR SOMETHING STOP CLICK!!!!", 10);
            break;
        case 1000:
            createNote("well well well 1000? well if you want ...", 11);
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
            createNote("oh wow you keep going,keep going and system will fall", 17);
            break;
        case 3000:
            createNote("3000? is it worth it? idk what to text tbh", 18);
            break;
        case 5000:
            createNote("5000!? wow i am proud of you,website will got broke in while :p", 19);
            setTimeout(() => {
                const note5000 = document.querySelector('.note.note-position-19');
                if(note5000) {
                    note5000.style.backgroundColor = 'red';
                    note5000.style.color = 'white';
                    note5000.style.animation = 'shake 0.5s ease-in-out 5';
                }
            }, 150);
            break;
        case 10000:
            createNote("10000 the end, i love you Nino ...", 20); // efekt specjalny na środku
            document.body.style.transition = 'background-color 0.2s ease';
            document.body.style.animation = 'shake 0.5s ease-in-out 6';
            const prevBg = getComputedStyle(document.body).backgroundColor;
            document.body.style.backgroundColor = 'red';
            setTimeout(() => {
                document.body.style.animation = '';
                document.body.style.backgroundColor = prevBg || '#f0f0f0';
            }, 3000);
            break;
        case 10010:
            createNote("YOU ARE COOKED I ADDED 100 000 LAST LVL, use autoclicker", 21); // normalna, też randomizowana
            break;
        case 100000:
            createNote("are you fucking sick? 100 000 really? wow nino nah its really wow i am really proud of you", 22); // efekt wielki, center
            document.body.classList.add('global-shake');
            const imageUrl = 'assets/images1/cracked.png';
            const overlay = document.createElement('div');
            overlay.id = 'crack-overlay';
            overlay.style.backgroundImage = `url('${imageUrl}')`;
            document.body.appendChild(overlay);
            overlay.classList.add('crack-show');
            const DURATION = 5000;
            setTimeout(() => {
                overlay.classList.remove('crack-show');
                overlay.style.transition = 'opacity 400ms ease';
                overlay.style.opacity = '0';
            }, DURATION - 600);
            setTimeout(() => {
                if(overlay.parentElement) overlay.parentElement.removeChild(overlay);
                document.body.classList.remove('global-shake');
            }, DURATION + 100);
            break;
    }

    // Po każdym kliknięciu randomizujemy istniejące notki (1-19 i 21)
    setTimeout(randomizeNotesPositions, 100);
});
