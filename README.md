# GoosebumpsTextAdventure
Interactive rendition of the gamebook "Give yourself Goosebumps: Escape from the Carnival of Horrors".

## Beware!! 
### Do not read this book from beginning to end!
"Give yourself Goosebumps" is a series of gamebooks from the 90's aimed at a juvenile audience, in which
the reader is able to choose how the story develops by making choices. These are presented
as simple games or plain decisions that ultimately dictate which pages the reader must turn to. 

### Escape from the Carnival of Horrors
This is an adaptation of the first book of the series, in the form of a simple text adventure,
where you are presented with choices and write your answers. It's fully made on plain Javascript,
and the code is easily modifiable, so that it can serve as framework for different text adventures.

## How's it made?
Each book page is represented as a "story block", with its correspondent text file.
In this file, simple commands are represented with a letter, and in some cases extra parameters.
For example, a T represents text that is to be printed to the user; 
whereas a Q represents a question made to the user, and is to be followed by all its possible answers.

All the story blocks created from the original book can be found on "res/storyBlocks".
Some blocks are meant to serve as a start screen or menu options, too.

## Try it out
You can give it a go at: https://luisboto.github.io/GoosebumpsTextAdventure/
