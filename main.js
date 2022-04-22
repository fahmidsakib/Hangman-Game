let readlineSync = require('readline-sync')
//initializing readline-sync

let words = [
    'dome', 'charlatan', 'prairie', 'result',
    'gliding', 'effect', 'institution', 'march',
    'lemonade', 'celeriac', 'continent', 'distance',
    'pecan', 'canal', 'carbon', 'instantiation',
    'recess', 'pound', 'jewellery', 'vegetarian',
    'riding', 'illustration', 'macaroni', 'info',
    'increase', 'neuron', 'therapy', 'legislator',
    'arthur', 'ranger', 'rawhide', 'acquisition',
    'fine', 'event', 'accuracy', 'blue',
    'consequence', 'toast', 'brake', 'tosser',
    'drawing', 'sneaker', 'crook', 'intentionality',
    'plier', 'cemetery', 'arch', 'atmosphere',
    'seep', 'influx', 'piglet', 'oatmeal',
    'spouse', 'tablecloth', 'beheading', 'atheist',
    'daikon', 'armament', 'utility', 'ruffle',
    'factor', 'shoemaker', 'loquat', 'someplace',
    'sprout', 'entertainment', 'linguist', 'kitty',
    'volunteer', 'forte', 'journey', 'ability',
    'distribution', 'rhythm', 'depression', 'sewer',
    'privacy', 'dictaphone', 'prejudice', 'kiss',
    'ruckus', 'choker', 'hacienda', 'determination',
    'vest', 'mistake', 'trick', 'pliers',
    'eligibility', 'widow', 'hawk', 'nicety',
    'vine', 'dissemination', 'alcohol', 'upstairs',
    'coupon', 'diagram', 'corporal', 'apartment'
]
//list of 100 words selecting a word randomly

function checkChar(char, str, word) {
    let out = str.split(' ')
    //spliting the `str` string using `split` function
    //and storing it in the `out` variable
    
    let guessCorrectly = false
    //initializing a boolean variable `guessCorrectly`
    //to keep track of whether user could guess a character correctly or not

    for (let i = 0; i < word.length; i++)
        //looping over the word
        if (word[i] === char) {
            //if character found in the word
            //storing it in the `out` array using the index value `i`
            //also setting the `guessCorrectly` boolean value to true
            out[i] = char
            guessCorrectly = true
        }
    return [guessCorrectly, out.join(' ')]
    //returing the boolean value and the updated result string
}

function asciiArt(index) {
    let art = [
        `      ╔═══╗
      |   ║
      O   ║
          ║
          ║
     ███  ║
    ══════╩═══`,
        `      ╔═══╗
      |   ║
      O   ║
      |   ║
          ║
     ███  ║
    ══════╩═══`,
        `      ╔═══╗
      |   ║
      O   ║
      |   ║
     /    ║
     ███  ║
    ══════╩═══`,
        `      ╔═══╗
      |   ║
      O   ║
      |   ║
     / \\  ║
     ███  ║
    ══════╩═══`,
        `      ╔═══╗
      |   ║
      O   ║
     /|   ║
     / \\  ║
     ███  ║
    ══════╩═══`,
        `      ╔═══╗
      |   ║
      O   ║
     /|\\  ║
     / \\  ║
          ║
    ══════╩═══`,
    ]
    return art[index]
    //this function returns the `Hangman Ascii figure` using the input index
}

function hangmanGame() {
    let selectedWord = words[Math.floor(Math.random() * words.length)]
    //randomly picking a word from the words array

    let resString = [...Array(selectedWord.length)].map(x => '_').join(" ")
    //creating a new string with size equal to the selectedWord length
    //and adding '_' instead of the actual character

    let charArray = []
    //this is to check if user is giving repeatative input or not

    console.log(`Guess the word:\n${resString}\n\nYou can make 6 incorrect guesses before losing`);

    loop: for (let i = 0; i < 6; i++) {
        //we are giving the user 6 incorrect chances to guess the word

        let char = readlineSync.question('> Promt: ')
        //taking user input using `readlineSync`

        if (charArray.includes(char)) {
            //if user is giving a repeatative character input:
            //1. decrementing the loop index
            //2. giving a warning message to input a different non-repeatative character
            //3. continuing the loop	
            i--
            console.log(`\nYou have entered this character before, try a different one!\n`)
            continue loop
        }
        charArray.push(char)
        //if the given input character is not repeatative
        //then pushing it to te `charArray`

        let [bol, str] = checkChar(char, resString, selectedWord)
        //using the `checkChar` function we are checking for,
        //if the guessed character is correct or not
        //this function return a boolean value and a updated result string
        //it returns `true` if the guessed character is correct
        //an `false` if the guessed character is not correct

        if (bol && str.split(" ").join("") !== selectedWord) {
            //if the guessed character is correct and user didn't completely guessed the word yet
            //we are showing the appropriate response message with the updated string output
            //also decrementing the loop index
            console.log(`\nCorrect Guess:\n${str}\n`)
            i--
        }
        else if (!bol && i < 5 && str.split(" ").join("") !== selectedWord) {
            console.log(`\nIncorrect guess, you have ${6 - i - 1} more incorrect guesses left:\n${str}\n`)
            console.log(`${asciiArt(i)}\n`)
            //if the guessed character is incorrect and also user didn't completely guessed the word yet
            //we are showing the appropriate response message with the updated string output
            //also showing the updated `Hangman Ascii figure` using `asciiArt` function
            //this function returned the `Hangman Ascii figure` depending on the current index value
        }
        else {
            //if user could guess the word correctly or if user ran out of incorrect guess chances
            //then this else block will be executed
            if (str.split(" ").join("") === selectedWord) {
                //if user guessed the word correctly then we are showing congratulations message and 
                //breaking out from the loop
                console.log(`\nCorrect Guess:\n${str}\n\nCongrstulations! You have won the game!`)
                break
            }
            else {
                //if user ran out of incorrect guess chances then this block will be executed
                //here we will finnaly reveal the correct word
                //als will print the `Hanged man figure` using the `asciiArt` function
                console.log(`\nYou have run out of guesses, the correct word was:\n${selectedWord.split("").join(" ")}`)
                console.log(`${asciiArt(i)}\n`)
                break
            }
        }
        resString = str
        //storing the string value returned from `checkChar` function in the `resString` variable
        //to use it in the next iteration
    }
}

hangmanGame()
