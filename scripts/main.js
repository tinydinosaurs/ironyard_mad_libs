// prompts player to introduce themself!
name = prompt('What is your name?');

//prompts a noun input
noun = prompt('Great! Hello, ' + name + '. Give me a noun!');
 
//prompts a verb input 
verb = prompt('Now give me a verb.');

//prompts an adverb input
adverb = prompt('Ok, now an adverb');

//prompts an adjective input
adjective = prompt('And finally an adjective');


//writes the crazy story of craziness
document.write('<p>Dear <span>' + name + '</span>,</p>' + '<p> Once, when I was a <span>' + noun + '</span>, I lived in a giant graveyard. There were lots of zombies <span>' + verb + 'ing</span> about, but I wasn\'t scared. I\'d creep around <span>' + adverb + '</span> until they wandered off to the fence. Zombies really like fences for some reason. Maybe because they are <span>' + adjective +'</span>. Anyway, that was a long time ago, and I like to keep my letters short.</p><p>Au Revior,<br>Dana</p>')