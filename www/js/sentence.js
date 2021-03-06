/*
 *  French class projects, 8th grade
 *  App to learn the French partitive
 */ 
var duplicate_score_message = 0;
var already_seen = [];

// Add different messages when student gets a correct sentence
var bravo = [ 'Bravo', 'Super', 'Bien joué', 'Continue!', 'Cool, cool!' ];

// Add vocabulary for the app below
var preference_verbs = []
preference_verbs.push("détest");
preference_verbs.push("aim");
preference_verbs.push("ador");
preference_verbs.push("préfér");
preference_verbs.push("préfèr");
preference_verbs.sort();

var subject_pronoun = [];
subject_pronoun.push("J'");
subject_pronoun.push("Je");
subject_pronoun.push("Tu");
subject_pronoun.push("Il");
subject_pronoun.push("Elle");
subject_pronoun.push("On");
subject_pronoun.push("Nous");
subject_pronoun.push("Vous");
subject_pronoun.push("Ils");
subject_pronoun.push("Elles");

var subject_singular = [];
subject_singular.push("Mon chien");
subject_singular.push("Ma fille");
subject_singular.push("Ma soeur");
subject_singular.push("Mon oncle");
subject_singular.push("Ma tante");
subject_singular.push("Ma famille");
subject_singular.push("Mon chat");
subject_singular.push("Ma chatte");
subject_singular.push("Mon enfant");
subject_singular.push("Mon ami");
subject_singular.push("Mon amie");
subject_singular.push("Mon père");
subject_singular.push("Ma mère");
subject_singular.push("Mon fils");
subject_singular.push("Mon grand-père");
subject_singular.push("Ma grand-mère");
subject_singular.push("Mon frère");
subject_singular.push("Mon cousin");
subject_singular.push("Ma cousine");
subject_singular.push("Le professeur");
subject_singular.push("David");
subject_singular.push("Grace");
subject_singular.push("Kim");
subject_singular.push("Karine");
subject_singular.push("Madicyn");
subject_singular.push("Un garçon");
subject_singular.push("Ma chienne");
subject_singular.push("Mon mari");
subject_singular.push("Mon neveu");
subject_singular.push("Le professeur");
subject_singular.push("Un homme");
subject_singular.push("La personne");
subject_singular.sort();
addNBSP(subject_singular);

var subject_plural = [];
subject_plural.push("Mes soeurs");
subject_plural.push("Mes chats");
subject_plural.push("Mes frères");
subject_plural.push("Mes amis");
subject_plural.push("Les étudiants");
subject_plural.push("Les villageois");
subject_plural.push("Victoria et ses amis");
subject_plural.push("Mes chiennes");
subject_plural.push("Mes chiens");
subject_plural.push("Mes chattes");
subject_plural.push("Mes enfants");
subject_plural.push("Mes amies");
subject_plural.push("Mes parents");
subject_plural.push("Mes fils");
subject_plural.push("Courtney et sa mère");
subject_plural.push("Mes filles");
subject_plural.push("Mes grands-parents");
subject_plural.push("Les professeurs");
subject_plural.push("Mes cousins");
subject_plural.push("Mes cousines");
subject_plural.push("Maggie et ses cousins");
subject_plural.push("Les travailleurs");
subject_plural.push("Les policiers");
subject_plural.push("Les docteurs");
subject_plural.push("Les boulangers");
subject_plural.push("Les pompiers");
subject_plural.push("Les chefs");
subject_plural.push("Les soldats");
subject_plural.push("Les animaux");
subject_plural.push("Les gens");
subject_plural.push("Kobi et Cameron");
subject_plural.push("Megan et Vito");
subject_plural.sort();
addNBSP(subject_plural);

var subject_plus_moi = [];
subject_plus_moi.push("Griffin et moi");
subject_plus_moi.push("Marian et moi");
subject_plus_moi.push("Ma famille et moi");
subject_plus_moi.push("Le professeur et moi");
subject_plus_moi.push("Ma mère et moi");
subject_plus_moi.push("Le docteur et moi");
subject_plus_moi.push("Les animaux et moi");
subject_plus_moi.push("Jackson et moi");
subject_plus_moi.push("Les villageois et moi");
subject_plus_moi.sort();
addNBSP(subject_plus_moi);

var verb_stem_er = [];
verb_stem_er.push("cuisin");
verb_stem_er.push("donn");
verb_stem_er.push("aim");
verb_stem_er.push("détest");
verb_stem_er.push("cherch");
verb_stem_er.push("ador");
verb_stem_er.push("montr");
verb_stem_er.push("trouv");
verb_stem_er.push("mang");
verb_stem_er.push("dessin");
verb_stem_er.push("préfér");
verb_stem_er.push("préfèr");
verb_stem_er.push("mâch");
verb_stem_er.push("cultiv");
verb_stem_er.push("jet");
verb_stem_er.push("jett");
verb_stem_er.push("laiss");
verb_stem_er.push("coup");
verb_stem_er.push("port");
verb_stem_er.push("mélang");
verb_stem_er.push("vol");
verb_stem_er.push("chauff");
verb_stem_er.push("prépar");
verb_stem_er.push("congèl");
verb_stem_er.push("congel");
verb_stem_er.push("achet");
verb_stem_er.push("achèt");
verb_stem_er.sort();

var verb_stem_ir = [];
verb_stem_ir.push("chois");
verb_stem_ir.push("fin");
verb_stem_ir.sort();

var verb_stem_re = [];
verb_stem_re.push("vend");
verb_stem_re.push("rend");
verb_stem_re.push("mord");
verb_stem_re.push("perd");
verb_stem_re.sort();

var verb_ending = [];
verb_ending.push("e");
verb_ending.push("es");
verb_ending.push("is");
verb_ending.push("s");
verb_ending.push("ent");
verb_ending.push("it");
verb_ending.push("&nbsp;");
verb_ending.push("ons");
verb_ending.push("eons");
verb_ending.push("issons");
verb_ending.push("ez");
verb_ending.push("issez");
verb_ending.push("issent");

var partitif = [];
partitif.push("du");
partitif.push("de la");
partitif.push("le");
partitif.push("la");
partitif.push("de");
partitif.push("d'");
partitif.push("de l'");
partitif.push("des");
partitif.push("les");
partitif.push("l'");
partitif.sort();
addNBSP(partitif);

var food_masculine = [];
food_masculine.push("poisson");
food_masculine.push("beurre");
food_masculine.push("bonbon");
food_masculine.push("chocolat");
//food_masculine.push("couscous");
food_masculine.push("fromage");
food_masculine.push("sandwich");
food_masculine.push("légume");
food_masculine.push("crabe");
food_masculine.push("pain");
food_masculine.sort();

var food_feminine = [];
food_feminine.push("grenouille");
food_feminine.push("carotte");
food_feminine.push("dinde");
food_feminine.push("quiche");
food_feminine.push("pomme");
food_feminine.push("pastèque");
food_feminine.push("aubergine");
food_feminine.push("aspèrge");
food_feminine.push("grenade");
food_feminine.push("banane");
food_feminine.push("crêpe");
food_feminine.push("pomme de terre");
food_feminine.push("salade");
food_feminine.push("glace");
food_feminine.push("saucisse");
food_feminine.push("soupe");
food_feminine.push("crevette");
food_feminine.push("framboise");
food_feminine.push("crème brûlée");
food_feminine.push("myrtille");
food_feminine.push("boulette de viande");
food_feminine.push("fraise");
food_feminine.push("tomate");
food_feminine.sort();
addNBSP(food_feminine);

var food_plural = [];
food_plural.push("grenouilles");
food_plural.push("pains");
food_plural.push("frites");
food_plural.push("artichauts");
food_plural.push("brocolis");
//food_plural.push("couscous");
food_plural.push("poissons");
food_plural.push("bonbons");
food_plural.push("chocolats");
food_plural.push("fromages");
food_plural.push("sandwichs");
food_plural.push("légumes");
food_plural.push("crabes");
food_plural.push("carottes");
food_plural.push("dindes");
food_plural.push("quiches");
food_plural.push("pommes");
food_plural.push("pastèques");
food_plural.push("aubergines");
food_plural.push("aspèrges");
food_plural.push("grenades");
food_plural.push("bananes");
food_plural.push("crêpes");
food_plural.push("pommes de terre");
food_plural.push("salades");
food_plural.push("glaces");
food_plural.push("saucisses");
food_plural.push("soupes");
food_plural.push("crevettes");
food_plural.push("framboises");
food_plural.push("crème brûlées");
food_plural.push("myrtilles");
food_plural.push("boulettes de viande");
food_plural.push("fraises");
food_plural.push("tomates");
food_plural.sort();
addNBSP(food_plural);

var neg1 = [];
neg1.push("&nbsp;");
neg1.push("ne");
neg1.push("n'");

var neg2 = [];
neg2.push("&nbsp;");
neg2.push("pas");

// Pick a congratulary message at random
function getBravoMessage() {
	var r = Math.floor((Math.random() * bravo.length));
	return bravo[r];
}

function setScore(score) {
	localStorage.setItem('score', score);
}

function getScore() {
	if (!localStorage.getItem('score'))
		setScore(0);

	return Number(localStorage.getItem('score'));
}

function displayScore() {
	document.getElementById('sw-score').innerHTML = 'Score: ' + getScore();
}

function addNBSP(a) {
	var re = / /g;
	for (var i = 0; i < a.length; ++i)
		a[i] = a[i].replace(re, "&nbsp;");
}

// returns whether something is part of an array
function isInList(element, arr) {
	var re1 = /&nbsp;/g;
	var re2 = / /g;
	if (arr.indexOf(element) >= 0 
			|| arr.indexOf(element.replace(re1, ' '))  >= 0
			|| arr.indexOf(element.replace(re2, '&nbsp;'))  >= 0)
		return true;
	else
		return false;
}

function isBlank(w) {
	return w=="" || w=="&nbsp;" || " ";
}

function verbJeter(subject, verb_stem, verb_ending, reason) {
	if (verb_stem=='jett') {
		if (isInList(subject, subject_plus_moi) || subject == 'Vous' || subject == 'Nous') {
			reason.push('special_case_jeter');
			return false;
		}
	} else if (verb_stem=='jet') {
		if (!isInList(subject, subject_plus_moi) && subject != 'Vous' && subject != 'Nous') {
			reason.push('special_case_jeter');
			return false;
		}
	}

	return true;
}

function verbAccent(subject, verb_stem, verb_ending, reason) {
  // check special case for préférer, congeler, acheter
  if (verb_stem=='préfér' || verb_stem=='congel' || verb_stem=='achet') { 
	if (subject != "Nous" && subject != "Vous" && !isInList(subject, subject_plus_moi)) {
	  reason.push('special_case_verb_accent');
	  reason.push('verb_stem');
      return false;
	}
  }
  else if (verb_stem=='préfèr' || verb_stem=='congèl' || verb_stem=='achèt') {
	if (subject == "Nous" || subject == "Vous" || isInList(subject, subject_plus_moi)) {
	  reason.push('special_case_verb_accent');
	  reason.push('verb_stem');
      return false;
	}
  }

  return true;
}

function subjectVerbAgreement_ER(subject, verb_stem, verb_ending, reason) {
  if (isInList(subject, ["Je", "J'"]) && verb_ending == "e") {
    return true;
  } else if (subject == "Tu" && verb_ending == "es") {
    return true;
  } else if (subject == "Il" && verb_ending == "e") {
    return true;
  } else if (subject == "On" && verb_ending == "e") {
	return true;
  } else if (subject == "Elle" && verb_ending == "e") {
    return true;
  } 
  else if (subject == "Nous" || isInList(subject, subject_plus_moi)) {
	if (endsWith(verb_stem, "g")) {
		return verb_ending == "eons";
	}
  	else {
		return verb_ending == "ons";
	}
  } else if (subject == "Vous" && verb_ending == "ez") {
    return true;
  } else if (subject == "Ils" && verb_ending == "ent") {
    return true;
  } else if (subject == "Elles" && verb_ending == "ent") {
    return true;
  } else if (isInList(subject, subject_singular) && verb_ending == "e") {
    return true;
  } else if (isInList(subject, subject_plural) && verb_ending == "ent") {
    return true;
  }
  else {
    return false;
  }
}

function subjectVerbAgreement_IR(subject, verb_stem, verb_ending) {
  if (subject == "Je" && verb_ending == "is") {
    return true;
  } else if (subject == "J'" && verb_ending == "is") {
    return true;
  } else if (subject == "Tu" && verb_ending == "is") {
    return true;
  } else if (subject == "Il" && verb_ending == "it") {
    return true;
  } else if (subject == "Elle" && verb_ending == "it") {
    return true;
  } else if (subject == "On" && verb_ending == "it") {
    return true;
  } else if (isInList(subject, subject_singular) && verb_ending == "it") {
    return true;
  } else if (subject == "Vous" && verb_ending == "issez") {
    return true;
  } else if (subject == "Nous" && verb_ending == "issons") {
    return true;
  } else if (subject == "Ils" && verb_ending == "issent") {
    return true;
  } else if (subject == "Elles" && verb_ending == "issent") {
    return true;
  } else if (isInList(subject, subject_plural) && verb_ending == "issent") {
    return true;
  } else if (isInList(subject, subject_plus_moi) && verb_ending == "issons") {
    return true;
  } else {
    return false;
  }
}

function subjectVerbAgreement_RE(subject, verb_stem, verb_ending) {
  if (subject == "Je" && verb_ending == "s") {
    return true;
  } else if (subject == "J'" && verb_ending == "s") {
    return true;
  } else if (subject == "Tu" && verb_ending == "s") {
    return true;
  } else if (subject == "Il" && isBlank(verb_ending)) {
    return true;
  } else if (subject == "Elle" && isBlank(verb_ending)) {
    return true;
  } else if (subject == "On" && isBlank(verb_ending)) {
    return true;
  } else if (subject == "Nous" && verb_ending == "ons") {
    return true;
  } else if (subject == "Vous" && verb_ending == "ez") {
    return true;
  } else if (isInList(subject, subject_singular) && isBlank(verb_ending)) {
    return true;
  } else if ((isInList(subject, subject_plural) || isInList(subject, ['Ils','Elles'])) && verb_ending == "ent") {
    return true;
  } else if (isInList(subject, subject_plus_moi) && verb_ending == "ons") {
    return true;
  } else {
    return false;
  }
}

function is_ER_verb(verb_stem)
{
	return isInList(verb_stem, verb_stem_er);
}

function is_IR_verb(verb_stem)
{
	return isInList(verb_stem, verb_stem_ir);
}

function is_RE_verb(verb_stem)
{
	return isInList(verb_stem,verb_stem_re);
}

function subjectAgreesWithVerbEnding(subject, verb_stem, verb_ending, reason)
{
	if (is_ER_verb(verb_stem))
		return subjectVerbAgreement_ER(subject, verb_stem, verb_ending, reason);			
	else if (is_IR_verb(verb_stem))
		return subjectVerbAgreement_IR(subject, verb_stem, verb_ending);			
	else if (is_RE_verb(verb_stem))
		return subjectVerbAgreement_RE(subject, verb_stem, verb_ending);			
	else {
		return false;
	}
}

function isFoodPlural(food)
{
	return isInList(food, food_plural);
}

function startsWithVowel(word) {
	return isInList(word[0], ['a','i','o','u','y','h']);
}

function endsWith(word, c) {
	return word[word.length-1] == c;
}

function endsWithApostrophe(word) {
	return endsWith(word, "'");
}

function isFoodMasculine(food)
{
	return isInList(food,food_masculine);
}

function isFoodFeminine(food)
{
	return isInList(food,food_feminine);
}


function partitifAgreesWithPreference(verb_stem, partitif, food, sentence_positive, reason)
{
	if (isInList(verb_stem, preference_verbs))
	{
		if (startsWithVowel(food) && partitif == "l'")
			return true;
		else if (isFoodMasculine(food) && partitif == "le")
			return true;
		else if (isFoodFeminine(food) && partitif == "la")
			return true;
		else if (isFoodPlural(food) && partitif == "les")
			return true;
		else
		{
			reason.push('preference_verb_error');
			return false;
		}
	}
	else
	{
		if (sentence_positive)
		{
			if (isFoodPlural(food))
			{
				if (partitif == "des")
					return true;
				else {
					if (partitif != "les")
						reason.push('food_partitif_agreement');
					else
						reason.push('food_non_partitif');
					return false;
				}
			}
			else 
			{
				if (startsWithVowel(food))
				{
					if (partitif == "de l'")
						return true;
					else {
						if (!isInList(partitif, ["l'"]))
							reason.push('food_partitif_liaison');
						else
							reason.push('food_non_partitif');
						return false;
					}
				}
				else
				{
					if (isFoodMasculine(food))
					{
						if (partitif == "du")
							return true;
						else {
							if (partitif == 'le')
								reason.push('food_non_partitif');
							else
								reason.push('food_partitif_agreement');
							return false;
						}
					}
					else if (isFoodFeminine(food))
					{
						if (partitif == "de la")
							return true;
						else {
							if (partitif == 'la')
								reason.push('food_non_partitif');
							else
								reason.push('food_partitif_agreement');
							return false;
						}
					}
				}
			}
		}
		else // sentence negative
		{
			if (!isInList(partitif, ["de", "d'"])) {
				reason.push('negative_sentence_d');
				return false;
			}
			else if (partitif == 'de' && !startsWithVowel(food))
				return true;
			else if (startsWithVowel(food) && partitif == "d'") {
				return true;
			} else {
				reason.push('negative_sentence_unknown_2');
				return false;
			}
		}
	}		

	reason.push('negative_sentence_unknown_3');
	return false;
}

function foodPartitifAgreement(partitif, food)
{
	if (partitif == 'de') return true;
	else if (partitif == "d'" && startsWithVowel(food))
		return true;
	else if ((partitif == 'des' || partitif == 'les') && !isInList(food, food_plural))
		return false;
	else if (isInList(food, food_plural) && !isInList(partitif, ['des', 'les', 'de']))
		return false;
	else if (isInList(food, food_feminine) && !isInList(partitif, ['la', 'de la', "d'", "de l'", "l'"]))
		return false;
	else if (isInList(food, food_masculine) && !isInList(partitif, ["du", "le", "d'", "de l'", "l'"]))
		return false;
	else
		return true;
}

function foodPartitifLiaison(partitif, food)
{
	if (isInList(partitif, ["d'", "de l'", "l'"]) && !startsWithVowel(food))
		return false;
	else if (startsWithVowel(food) && !isInList(partitif, ["d'", "de l'", "l'", "des", "les"]))
		return false;
	else
		return true;
}

function isSentencePositive(negation1, negation2)
{
	return !(negation1=='ne' || negation1=="n'" || negation2=='pas');
}

function displaySentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food) 
{
	console.log(subject + " " + negation1 + " " + verb_stem + verb_ending + " " + negation2 + " " + partitif + " " + food);
}

function subjectVerbApostrophe(subject, negation1, verb_stem, reason) {
	if (subject == 'Je' && !negation1 && startsWithVowel(verb_stem)) {
		reason.push('subject_verb_apostrophe1');
		return false;
	}
	else if (subject == "J'" && !negation1 && !startsWithVowel(verb_stem)) {
		reason.push('subject_verb_apostrophe2');
		return false;
	}
	else if (subject == "J'" && negation1) {
		reason.push('subject_verb_apostrophe3');
		reason.push('negation1');
		return false;
	}
	else
		return true;
}

function isValidSentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food, reason) 
{
	var isValid = true;
	var sentence_positive = isSentencePositive(negation1, negation2);

	if (reason == undefined) reason = [];

	if (!subjectVerbApostrophe(subject, negation1, verb_stem, reason)) {
		reason.push('subject');
		reason.push('verb_stem');
		isValid = false;
		return false;
	}

	if (!verbJeter(subject, verb_stem, verb_ending, reason)) {
		reason.push('verb_stem');
		isValid = false;
		return false;
	}

	if (!verbAccent(subject, verb_stem, verb_ending, reason)) {
		reason.push('verb_stem');
		isValid = false;
		return false;
	}

	if (subjectAgreesWithVerbEnding(subject, verb_stem, verb_ending, reason) != true) {
		console.log("subject does not agree with verb ending" + subject + verb_stem + verb_ending);
		reason.push('subject');
		reason.push('verb_ending');
		isValid = false;
		return false;
	}

	// ne  pas
	if (!sentence_positive) {
		if (negation2=='pas' && (!isInList(negation1, ["ne", "n'"]))) {
			reason.push('negation1');
			reason.push('negation2');
			console.log(reason.toString());
			isValid = false;
			return false;
		} else if (isInList(negation1, ["ne", "n'"]) && negation2 != 'pas') {
			reason.push('negation1');
			reason.push('negation2');
			isValid = false;
			console.log(reason.toString());
			return false;
		}
		else if ( (negation1 == "n'" && !startsWithVowel(verb_stem)) ||
			(negation1 == "ne" && startsWithVowel(verb_stem)) ) {
			reason.push('negation1');
			reason.push('verb_vowel_agree');
			if (startsWithVowel(verb_stem))
				reason.push('verb_start_vowel');
			else
				reason.push('verb_start_consonant');
			isValid = false;
			console.log(reason.toString());
			return false;
		}
    }

	if (!foodPartitifLiaison(partitif, food)) {
		reason.push('partitif');
		reason.push('food');
		reason.push('food_partitif_liaison');
		return false;
	}

	if (!foodPartitifAgreement(partitif, food)) {
		reason.push('partitif');
		reason.push('food');
		reason.push('food_partitif_agreement');
		return false;
	}

	if (partitifAgreesWithPreference(verb_stem, partitif, food, sentence_positive, reason) != true)
	{
		console.log("partitif does not agree with verb preference");
		reason.push('verb_stem');
		reason.push('partitif');
		isValid = false;
		return false;
	}

	displaySentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food);
	return isValid;
}

function slotifyArray(a) {
	var n = {};
	for (i = 0; i < a.length; ++i) {
		n[i]=a[i];		
	}
	return n;
}

function unique(a) {
	s = new Set();
	for (i = 0; i < a.length; ++i) {
		s.add(a[i]);
	}
	return Array.from(s); 
}

function openFrench() {
	var subject_tmp = subject_pronoun;
	subject_tmp = subject_tmp.concat(subject_singular);
	subject_tmp = subject_tmp.concat(subject_plus_moi);
	subject_tmp = subject_tmp.concat(subject_plural);
	var subject = slotifyArray(subject_tmp);

	var food_tmp = food_feminine;
	food_tmp = food_tmp.concat(food_masculine);
	food_tmp = food_tmp.concat(food_plural);
	food_tmp = unique(food_tmp);
	food_tmp.sort();
	var food = slotifyArray(food_tmp);

	var verb = verb_stem_er;
	verb = verb.concat(verb_stem_ir);
	verb = verb.concat(verb_stem_re);
	verb.sort();

	SpinningWheel.addSlot(subject, '', 3);
	SpinningWheel.addSlot(neg1, 'right', 0);
	SpinningWheel.addSlot(verb, 'right', 3);
	SpinningWheel.addSlot(verb_ending, 'left', 3);
	SpinningWheel.addSlot(neg2,'left',0);
	SpinningWheel.addSlot(partitif,'',4);
	SpinningWheel.addSlot(food,'left',3);
	
	SpinningWheel.setCancelAction(cancel);
	SpinningWheel.setDoneAction(verifySentence);
	SpinningWheel.setRulesAction(displayRules);
	SpinningWheel.setGlossaryAction(glossary);
	
	SpinningWheel.open();

	var total_combinations = Object.keys(subject).length * Object.keys(neg1).length * Object.keys(verb).length * Object.keys(verb_ending).length * Object.keys(neg2).length * Object.keys(partitif).length * Object.keys(food).length;
	total_combinations = Math.floor(total_combinations / 1000000);
	document.getElementById('result').innerHTML = 'Over <font size=+1>' + total_combinations.toString() + ' MILLION combos</font><br />How many correct sentences can you find?';

	displayScore();
}

function verifySentence() {
	var phrase = '';
	var results = SpinningWheel.getSelectedValues();

	var re = /&nbsp;/g;

	var subject = results.values[0].replace(re,' ');
	var neg1 = results.values[1].replace(re,'');
	var verb_stem = results.values[2].replace(re,' ');
	var verb_ending = results.values[3].replace(re, ' ');
	var neg2 = results.values[4].replace(re,'');
	var partitif = results.values[5].replace(re, ' ');
	var food = results.values[6].replace(re,' ');
    var sentence_positive = isSentencePositive(neg1, neg2);
	var reason = [];
	var valid_sentence = isValidSentence(subject, neg1, verb_stem, verb_ending, neg2, partitif, food, reason);

	var preference_verb = false;

	if (isInList(verb_stem, preference_verbs))
		preference_verb = true;

	if (!valid_sentence && isInList('subject', reason))
		phrase += '<span class="mistake">'; 
	phrase += subject;             // subject
	if (!valid_sentence && isInList('subject', reason))
		phrase += '</span>';

	if (neg1 != '' && subject != "J'")
		phrase += ' ';
	else if (subject == "J'" && neg1)
		phrase += ' ';
	if (!valid_sentence && isInList('negation1', reason)) {
		if (neg1 == '')
			phrase += '&nbsp;';
		phrase += '<span class="mistake">'; 
	}
   	if (neg1 != '')
		phrase += neg1;
	else if (!valid_sentence && isInList('negation1', reason))
		phrase += '&nbsp;&nbsp;';
	if (!valid_sentence && isInList('negation1', reason))
		phrase += '</span>';

	if (!valid_sentence && (isInList('verb_vowel_agree', reason) || isInList('special_case_verb_accent', reason))) {
		phrase += '<span class="mistake">';
	}

	if (valid_sentence) {
		if ((subject == "J'" || neg1 == "n'") && startsWithVowel(verb_stem)) {
			phrase += '';
		}
		else {
			phrase += '&nbsp;'; 
		}
	}
	else
		phrase += '&nbsp;'; 

	if (!valid_sentence && isInList('verb_vowel_agree', reason)) {
		phrase += verb_stem.slice(0,1);
	}
	else if (!valid_sentence && isInList('special_case_jeter', reason)) {
		phrase += '<span class="mistake">'; 
		phrase += verb_stem; 
	}
	else {
		phrase += verb_stem;      // verb stem
	}

	if (!valid_sentence && isInList('special_case_jeter', reason)) {
		phrase += '</span>';
	} else if (!valid_sentence && isInList('verb_stem', reason))
		phrase += '</span>';
	
	if (!valid_sentence && isInList('verb_vowel_agree', reason)) {
		phrase += '</span>' + verb_stem.slice(1);
	}

	if (verb_ending != '') {
		if (!valid_sentence && isInList('verb_ending', reason))
			phrase += '<span class="mistake">'; 
		phrase += verb_ending;
		if (!valid_sentence && isInList('verb_ending', reason))
			phrase += '</span>';
	}

	if (neg2 != '')
		phrase += '&nbsp;';
	if (!valid_sentence && isInList('negation2', reason)) {
		if (neg2 == '')
			phrase += '&nbsp;';
		phrase += '<span class="mistake">'; 
	}
	if (neg2 != '')
    	phrase += neg2;
	else if (!valid_sentence && isInList('negation2', reason))
		phrase += '&nbsp;&nbsp;';
	if (!valid_sentence && isInList('negation2', reason))
		phrase += '</span>';

	phrase += ' ';
	if (!valid_sentence && isInList('partitif', reason))
		phrase += '<span class="mistake">'; 
    phrase += partitif;      // partitif
	if (!valid_sentence && isInList('partitif', reason))
		phrase += '</span>';

	if (valid_sentence && startsWithVowel(food) && (endsWithApostrophe(neg2) || endsWithApostrophe(partitif))) 
		phrase += ''; 
	else if (valid_sentence && (!startsWithVowel(food))) {
		phrase += ' '; 
	}
	else if (!valid_sentence && startsWithVowel(food)) 
		phrase += ' '; 
	else if (!isInList('food_partitif_liaison', reason)) {
		phrase += ' '; 
	}
	else if (!startsWithVowel(food)) {
		phrase += ' '; 
	}

	if (!valid_sentence && isInList('food', reason))
		phrase += '<span class="mistake">'; 
    phrase += food;      // food
	if (!valid_sentence && isInList('food', reason))
		phrase += '</span>';

	phrase += '.';      // so that speech synthesis has proper intonation


	if (valid_sentence) {
		phrase = phrase.replace(re, ' ');
		var utterThis = new SpeechSynthesisUtterance(phrase);
		utterThis.lang = 'FR';
		utterThis.rate = 0.8;
		window.speechSynthesis.speak(utterThis);

		if (!isInList(phrase, already_seen)) {
			setScore(getScore()+1);
			already_seen.push(phrase);
			document.getElementById('result').innerHTML = phrase + '<br /><span class="bravo">' + getBravoMessage() + '</span>';  
		}
		else if (duplicate_score_message < 3) {
			document.getElementById('result').innerHTML = phrase + '<br /><span class="bravo">Only new sentences count towards your score</span>';  
			duplicate_score_message += 1;
		} else {
			document.getElementById('result').innerHTML = phrase + '<br /><span class="bravo">' + getBravoMessage() + '</span>';  
		}

		displayScore();
	} else {
		var hint = '';
		if (isInList('special_case_verb_accent', reason))
				hint = "<span class='hint'>careful with the accent</span>";
		else if (isInList('special_case_jeter', reason))
				hint = "<span class='hint'>Watch your t's</span>";
		else if (isInList('subject', reason) && isInList('verb_ending', reason))
			hint = '<span class="hint">please conjugate your verb</span>';
		else if (isInList('subject_verb_apostrophe1', reason)) {
			hint = '<span class="hint">verb starts with vowel</span>';
		}
		else if (isInList('subject_verb_apostrophe2', reason)) {
			hint = '<span class="hint">verb should start with a vowel</span>';
		}
		else if (isInList('subject_verb_apostrophe3', reason)) {
			hint = '<span class="hint">sentence should start with Je</span>';
		}
		else if (isInList('negation1', reason) && isInList('verb_vowel_agree', reason)) {
			if (isInList('verb_start_vowel', reason))
				hint = '<span class="hint">watch your negation when verb starts with vowel</span>';
			else if (isInList('verb_start_consonant', reason))
				hint = '<span class="hint">watch your negation when verb starts with consonant</span>';
			else
				hint = '<span class="hint">watch the negation and the first letter of the verb</span>';
		}
		else if (isInList('negation1', reason) && isInList('negation2', reason)) {
				hint = '<span class="hint">what are you missing?</span>';
		}
		else if (isInList('food_non_partitif', reason)) {
				hint = "<span class='hint'>grammatically ok, but not a partitive</span>";
		}
		else if (preference_verb) {
        	if (!(isInList(partitif, ["l'", "le", "la", "les"]))) {
				hint = '<span class="hint">preference verb: use l&#39, le, la or les</span>';
			}
			else if (isInList(food, food_plural) && partitif != "les") {
				hint = '<span class="hint">masculine, feminine or plural?</span>';
			} else if (startsWithVowel(food) && partitif != "l'") {
				hint = '<span class="hint">food starts with vowel</span>';
			} else {
				hint = '<span class="hint">masculine, feminine or plural?</span>';
			}
        } 
		else {
			if (isInList(food, food_plural) && partitif == "les") {
				hint = "<span class='hint'>grammatically ok, but alas, not a partitive</span>";
			} 
			else if (isInList(food, food_feminine) && partitif == "la" && !startsWithVowel(food)) {
				hint = "<span class='hint'>grammatically ok, but alas, not a partitive</span>";
			} 
			else if ((isInList(food, food_feminine) || isInList(food, food_masculine)) && partitif == "l'" && startsWithVowel(food)) {
				hint = "<span class='hint'>grammatically ok, but alas, not a partitive</span>";
			} 
			else if (isInList(food, food_masculine) && partitif == "le") {
				hint = "<span class='hint'>grammatically ok, but alas, not a partitive</span>";
			} 
			else if (!isInList(partitif, ["du", "de la", "des", "de l'"])) {
				hint = '<span class="hint">Not a preference verb &amp; positive sentence: use du, de la, des, de l&#39</span>';
			} 
			else if (sentence_positive) {
				if (isInList(food, food_plural) && partitif != "des") {
					hint = '<span class="hint">masculine, feminine or plural?</span>';
				}
				else if (startsWithVowel(food) && partitif != "de l'") {
					hint = '<span class="hint">food starts with vowel</span>';
				} else {
					hint = '<span class="hint">feminine, masculine or plural?</span>';
				}
			}
			else {
				if (isInList(food, food_plural) && partitif == "les") {
					hint = "<span class='hint'>grammatically ok, but alas, not a partitive</span>";
				} 
				else if (!isInList(partitif, ["de", "d'"])) {
					hint = '<span class="hint">Not a preference verb &amp; negative sentence: use de or d&#39</span>';
				}
				else if (startsWithVowel(food) && partitif != "d'") {
					hint = '<span class="hint">careful, food starts with vowel</span>';
				}
				else if (!startsWithVowel(food) && partitif != "de") {
					hint = '<span class="hint">food does not start with a vowel</span>';
				}
			}
		}

		document.getElementById('result').innerHTML = phrase + '<br />' + hint;
	}
}

function displayRules() {
//	document.getElementById('result').innerHTML = 'Preference verbs (aimer/détester/préférer/adorer) = le/la/l&#39/les<br />Other verbs: <span class="highlight">&oplus;sentence</span> du/de la/de l&#39/des&nbsp;&nbsp;&nbsp;<span class="highlight">&ominus;sentence</span> de/d&#39';
	window.location="rules.html";
}

function glossary() {
	window.location="glossary.html";
}

// unused
function cancel() {
	document.getElementById('result').innerHTML = 'cancelled!';
}


// testing below
function assertValid(subject, negation1, verb_stem, verb_ending, negation2, partitif, food) {
	reason = []
	console.log(' ');
	if (!isValidSentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food, reason)) {
		displaySentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food);
		console.log('assertion failed: ' + reason.toString());
	}
}

function assertInvalid(subject, negation1, verb_stem, verb_ending, negation2, partitif, food) {
	reason = []
	console.log(' ');
	if (isValidSentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food, reason)) {
		displaySentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food);
		console.log('assertion failed: ' + reason.toString());
	}
}

console.log('Testing assertions (look for "assertion failed" message)');

assertValid("J'", "", "aim", "e", "", "le", "beurre");
assertInvalid("J'", "", "aim", "es", "", "le", "pains");
assertValid("Nous", "", "aim", "ons", "", "le", "chocolat");
assertValid("Elle", "", "aim", "e", "", "le", "beurre");
assertInvalid("Elle", "", "cherch", "e", "", "le", "beurre");
assertInvalid("Elle", "&nbsp;", "cherch", "e", "pas", "de", "bonbon");
assertValid("Nous", "n'", "aim", "ons", "pas", "le", "beurre");
assertValid("On", "n'", "aim", "e", "pas", "le", "beurre");
assertValid("On", "", "aim", "e", "", "le", "beurre");
assertValid("Ma famille et moi", "", "aim", "ons", "", "le", "beurre");
if (!isInList("Ma famille et moi", subject_plus_moi))
	console.log("Yo, something is wrong: " + subject_plus_moi.toString());
assertInvalid("Ma famille et moi", "", "aim", "ent", "", "le", "beurre");
assertInvalid("Je", "", "ador", "e", "", "le", "beurre");
assertValid("J'", "", "ador", "e", "", "le", "beurre");
assertValid("Il", "", "cherch", "e", "", "des", "quiches");
if (!isInList("Mes soeurs", subject_plural))
	console.log("Yo, something is wrong: " + subject_plural.toString());
assertValid("Mes soeurs", "", "coup", "ent", "", "des", "quiches");
assertInvalid("Nous", "", "jett", "eons", "", "des", "quiches");
assertValid("Ils", "n'", "aim", "ent", "pas", "la", "glace");
assertInvalid("Nous", "", "fin", "issons", "", "les", "poissons");
assertValid("Ils", "", "mord", "ent", "", "des", "poissons");
assertInvalid("Il", "", "coup", "e", "", "d'", "aubergine");
assertInvalid("Il", "", "aim", "e", "", "des", "boulette de viande");
assertInvalid("Il", "", "aim", "e", "", "du", "boulette de viande");
assertValid("On", "", "vend", "", "", "de la", "boulette de viande");
