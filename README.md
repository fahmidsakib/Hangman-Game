# Hangman Game
Hangman Game using JavaScript

## Hangman Gameplay

Here is an example of gameplay:
```
Guess the word:
_ _ _ _ _ _

You can make 6 incorrect guesses before losing
> Promt: a

Incorrect guess, you have 5 more incorrect guesses left:
_ _ _ _ _ _

      ╔═══╗
      |   ║
      O   ║
          ║
          ║
     ███  ║
    ══════╩═══

> Promt: o

Correct Guess:
_ _ _ o o _

> Promt: w

Incorrect guess, you have 4 more incorrect guesses left:
_ _ _ o o _

      ╔═══╗
      |   ║
      O   ║
      |   ║
          ║
     ███  ║
    ══════╩═══

> Promt: c

Correct Guess:
_ c _ o o _

> Promt: r

Incorrect guess, you have 3 more incorrect guesses left:
_ c _ o o _

      ╔═══╗
      |   ║
      O   ║
      |   ║
     /    ║
     ███  ║
    ══════╩═══

> Promt: s

Correct Guess:
s c _ o o _

> Promt: h

Correct Guess:
s c h o o _

> Promt: l

Correct Guess:
s c h o o l

Congrstulations! You have won the game!
```

In case the user runs out of the incorrect guesses then it will show,
```
You have run out of guesses, the correct word was:
s c h o o l
```

### Steps
- [X] Install required packages
- [X] Get a random word from words list
- [X] Show blank spaces depending on the word's length
- [X] Ask for user input using a specific format
- [x] Check if input character is present in the selected word or not
- [X] Print appropriate output according to the checked input
- [X] Repeat the same process untill user ran out of chances or guess the word correctly
- [X] Show the correct response accordingly at the end and terminate the game