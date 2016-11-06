/////////////////////////////////////////////////////////////////////////////
// Nickname Jenerator
// Copyright © 2016 cirkit <fb/chapman.kc>
// This work is free. You can redistribute it and/or modify it under the
// terms of the Do What The Fuck You Want To Public License, Version 2,
// as published by Sam Hocevar. See http://www.wtfpl.net/ for more details.
////////////////////////////////////////////////////////////////////////////

var namejen = function(){
	// word list. obviously. you can add new entries or replace em. just make sure to follow correct syntax 
	var list1 = ["adorable","adventurous","aggressive","alert","attractive","average","beautiful","blue-eyed ","bloody","blushing","brave","bright","clean","clear","cloudy","colorful","crowded","cute","dark","drab","distinct","dull","elegant","excited","fancy","filthy","glamorous","gleaming","gorgeous","graceful","grotesque","handsome","homely","large","light","long","magnificent","misty","motionless","muddy","old-fashioned","plain","poised","precious","quaint","shiny","smoggy","sparkling","spotless","stormy","strange","ugly","ugliest","unsightly","unusual","wide-eyed ","alive","annoying","bad","better","beautiful","brainy","breakable","busy","careful","cautious","clever","clumsy","concerned","crazy","curious","dead","different","difficult","doubtful","easy","expensive","famous","fragile","frail","gifted","helpful","helpless","horrible","important","impossible","inexpensive","innocent","inquisitive","modern","mushy","odd","open","outstanding","poor","powerful","prickly","puzzled","real","rich","shy","sleepy","stupid","super","talented","tame","tender","tough","uninterested","vast","wandering","wild","wrong","agreeable","amused","calm","charming","cheerful","comfortable","cooperative","courageous","delightful","determined","eager","elated","enchanting","encouraging","energetic","enthusiastic","excited","exuberant","fair","faithful","fantastic","fine","friendly","funny","gentle","glorious","good","happy","healthy","helpful","hilarious","jolly","joyous","kind","lively","lovely","lucky","nice","obedient","perfect","pleasant","proud","relieved","silly","smiling","splendid","successful","thankful","thoughtful","victorious","vivacious","witty","wonderful","zealous","zany","fierce","weird","geeky","lonely","soft","fresh","magical",];
	var list2 = ["aardvark","albatross","alligator","alpaca","ant","anteater","antelope","ape","armadillo","herd","baboon","badger","barracuda","bat","bear","beaver","bee","bison","boar","galago","butterfly","camel","caribou","cat","caterpillar","cattle","chamois","cheetah","chicken","chimpanzee","chinchilla","chough","clam","cobra","cockroach","cod","cormorant","coyote","crab","herd","crocodile","crow","curlew","deer","dinosaur","dog","dolphin","donkey","dotterel","dove","dragonfly","duck","dugong","dunlin","eagle","echidna","eel","elephant","elk","emu","falcon","ferret","finch","fish","flamingo","fly","fox","frog","gaur","gazelle","gerbil","giraffe","gnat","goat","goose","goldfish","gorilla","goshawk","grasshopper","grouse","guanaco","poultry","herd","gull","hamster","hare","hawk","hedgehog","heron","herring","hippopotamus","hornet","horse","human","hummingbird","hyena","jackal","jaguar","jay","jellyfish","kangaroo","koala","kouprey","kudu","lapwing","lark","lemur","leopard","lion","llama","lobster","locust","loris","louse","lyrebird","magpie","mallard","manatee","marten","meerkat","mink","monkey","moose","mouse","mosquito","mule","narwhal","newt","nightingale","octopus","okapi","opossum","oryx","ostrich","otter","owl","ox","oyster","parrot","partridge","peafowl","pelican","penguin","pheasant","pig","pigeon","pony","porcupine","porpoise","quail","quelea","rabbit","raccoon","rat","raven","herd","reindeer","rhinoceros","ruff","salamander","salmon","sandpiper","sardine","scorpion","herd","seahorse","shark","sheep","shrew","shrimp","skunk","snail","snake","spider","squid","squirrel","starling","stingray","stinkbug","stork","swallow","swan","tapir","tarsier","termite","tiger","toad","trout","poultry","turtle","vulture","wallaby","walrus","wasp","carabeef","weasel","whale","wolf","wolverine","wombat","woodcock","woodpecker","worm","wren","yak","zebra"];

	var separator = ""; //separator. e.g. ",", "-", "_" or whatever you want in between em words

	// now pick something randomly
	rand1 = list1[Math.floor(Math.random() * list1.length)];
	rand2 = list2[Math.floor(Math.random() * list2.length)];

	return titleCase(rand1) + titleCase(rand2);			
}

// just a little fuction to capitalize the first letter. Javascript doesnt hava built-in function for that
var titleCase =	function (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
