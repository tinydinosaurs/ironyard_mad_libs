// prompts player to introduce themself!
var name = prompt('What is your name?');

//prompts a noun input
var noun = prompt('Great! Hello, ' + name + '. Give me a noun!');
 
//prompts a verb input 
var verb = prompt('Now give me a verb.');

//prompts an adverb input
var adverb = prompt('Ok, now an adverb');

//prompts an adjective input
var adjective = prompt('An adjective');

var secondAdjective = prompt('Another adjective');

var secondNoun = prompt('Another noun');

var thirdNoun = prompt('Yet another noun');

var secondVerb = prompt('Another verb');

var exclamation = prompt('Finally, an exclamation');




//writes the crazy story of craziness


document.write('<p>Dear <span>' + name + '</span>,</p>' + '<p> Once, when I was a/an <span>' + noun + '</span>, I lived in a giant graveyard. There were lots of zombies <span>' + verb + 'ing</span> about, but I wasn\'t scared. I\'d creep around <span>' + adverb + '</span> until they wandered off to the fence. Zombies really like fences for some reason. Maybe because they are <span>' + adjective +'</span>. Anyway, that was a long time ago. Now I am a/an <span>' + secondAdjective + ' ' + secondNoun + '</span>, and I have many <span>' + thirdNoun + 's</span>. We <span>' + secondVerb + '</span> together every day, while harassing the remaining zombies. Oh, yeah, here\'s the thing &ndash; zombies eventually rot beyond repair and can\'t attack you any more. To that, I say <span>' + exclamation +'</span>!!!! Now my story is finally at its end. </p><p>Au Revior,<br>Dana</p>')



