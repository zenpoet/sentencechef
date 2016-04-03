
/*
 * Let's declare various lists
*/

var reason_not_valid = "";

function addNBSP(a) {
	var re = / /g;
	for (var i = 0; i < a.length; ++i)
		a[i] = a[i].replace(re, "&nbsp;");
}

// declare all the verb stems that correspond to preference verb
var preference_verbs = []
preference_verbs.push("détest");
preference_verbs.push("aim");
preference_verbs.push("ador");
preference_verbs.push("préfér");
preference_verbs.push("préfèr");
preference_verbs.sort();

// -------------------------------------------------------------
// Add to the list of subject pronouns
var subject_pronoun = [];
subject_pronoun.push("Je");
subject_pronoun.push("Tu");
subject_pronoun.push("Il");
subject_pronoun.push("Elle");
subject_pronoun.push("On");
subject_pronoun.push("Nous");
subject_pronoun.push("Vous");
subject_pronoun.push("Ils");
subject_pronoun.push("Elles");

// Add to the list of singular subjects
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
subject_singular.push("John");
subject_singular.push("Sophie");
subject_singular.push("Jacques");
subject_singular.push("Nathalie");
subject_singular.push("Un garçon");
subject_singular.push("Ma chienne");
subject_singular.push("Mon mari");
subject_singular.push("Mon neveu");
subject_singular.push("Le professeur");
subject_singular.push("Un homme");
subject_singular.push("La personne");
subject_singular.sort();
addNBSP(subject_singular);

// Add to the list of plural subjects
var subject_plural = [];
subject_plural.push("Mes soeurs");
subject_plural.push("Mes chats");
subject_plural.push("Mes frères");
subject_plural.push("Mes amis");
subject_plural.push("Les étudiants");
subject_plural.push("Les villageois");
subject_plural.push("Pierre et ses amis");
subject_plural.push("Mes chiennes");
subject_plural.push("Mes chiens");
subject_plural.push("Mes chattes");
subject_plural.push("Mes enfants");
subject_plural.push("Mes amies");
subject_plural.push("Mes parents");
subject_plural.push("Mes fils");
subject_plural.push("Mes filles");
subject_plural.push("Mes grand-parents");
subject_plural.push("Les professeurs");
subject_plural.push("Mes cousins");
subject_plural.push("Mes cousines");
subject_plural.push("John et mes cousins");
subject_plural.push("Les travailleurs");
subject_plural.push("Les policiers");
subject_plural.push("Les docteurs");
subject_plural.push("Les boulangers");
subject_plural.push("Les pompiers");
subject_plural.push("Les chefs");
subject_plural.push("Les soldiers");
subject_plural.push("Les animaux");
subject_plural.push("Les gens");
subject_plural.sort();
addNBSP(subject_plural);

// Add to the list of subjects and "et moi"
var subject_plus_moi = [];
subject_plus_moi.push("Jean et moi");
subject_plus_moi.push("Ma famille et moi");
subject_plus_moi.push("Le professeur et moi");
subject_plus_moi.push("Didier et moi");
subject_plus_moi.push("Ma mère et moi");
subject_plus_moi.push("Le docteur et moi");
subject_plus_moi.push("Les animaux et moi");
subject_plus_moi.push("Pierre et moi");
subject_plus_moi.push("Les villageois et moi");
subject_plus_moi.sort();
addNBSP(subject_plus_moi);

// Add to the list of ER verb stem
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
verb_stem_er.push("jett");
verb_stem_er.push("jet");
verb_stem_er.push("laiss");
verb_stem_er.push("coup");
verb_stem_er.push("port");
verb_stem_er.push("mélang");
verb_stem_er.push("vol");
verb_stem_er.push("chauff");
verb_stem_er.push("prépar");
verb_stem_er.push("congèl");
verb_stem_er.push("congél");
verb_stem_er.push("préfér");
verb_stem_er.push("préfèr");
verb_stem_er.sort();

// Add to the list of IR verb stem
var verb_stem_ir = [];
verb_stem_ir.push("chois");
verb_stem_ir.push("fin");
verb_stem_ir.sort();

// Add to the list of RE verb stem
var verb_stem_re = [];
verb_stem_re.push("vend");
verb_stem_re.push("rend");
verb_stem_re.push("détrui");
verb_stem_re.push("mord");
verb_stem_re.push("perd");
verb_stem_re.sort();

// Add to the list of verb endings
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

// Add to the list of partitif
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
addNBSP(partitif);

// Add to the list of masculine food
var food_masculine = [];
food_masculine.push("poisson");
food_masculine.push("beurre");
food_masculine.push("bonbon");
food_masculine.push("chocolat");
food_masculine.push("couscous");
food_masculine.push("fromage");
food_masculine.push("sandwich");
food_masculine.push("légume");
food_masculine.push("crabe");
food_masculine.sort();

// Add to the list of feminine food
var food_feminine = [];
food_feminine.push("carotte");
food_feminine.push("dinde");
food_feminine.push("quiche");
food_feminine.push("pomme");
food_feminine.push("pastèque");
food_feminine.push("aubergine");
food_feminine.push("grenade");
food_feminine.push("banane");
food_feminine.push("crêpe");
food_feminine.push("pomme de terre");
food_feminine.push("salade");
food_feminine.push("glace");
food_feminine.push("saucisse");
food_feminine.push("pancake");
food_feminine.push("soupe");
food_feminine.push("crevette");
food_feminine.push("framboise");
food_feminine.push("crème brûlée");
food_feminine.push("myrtille");
food_feminine.push("boulette de viande");
food_feminine.push("fraise");
food_feminine.sort();
addNBSP(food_feminine);

var food_plural = [];
food_plural.push("crabes");
food_plural.push("pains");
food_plural.push("quiches");
food_plural.push("pommes");
food_plural.push("frites");
food_plural.push("poissons");
food_plural.push("pastèques");
food_plural.push("brocolis");
food_plural.push("aubergines");
food_plural.sort();
addNBSP(food_plural);

var neg1 = [];
neg1.push("&nbsp;");
neg1.push("ne");
neg1.push("n'");

var neg2 = [];
neg2.push("&nbsp;");
neg2.push("pas");

// this is a function that returns whether
// something is part of an array
function isInList(arr, element)
{
	if (arr.indexOf(element) >= 0)
		return true;
	else
		return false;
}

function subjectVerbAgreement_ER(subject, verb_stem, verb_ending) {
  // check special case for préférer and congeler
  if (verb_stem=='préfér' || verb_stem=='congél') { 
    // must be nous vous or equivalent
	if (subject != "Nous" && subject != "Vous" && !isInList(subject, subject_plus_moi))
      return false;
  }
  else if (verb_stem=='préfèr' || verb_stem=='congèl') {
	if (subject == "Nous" || subject == "Vous" || isInList(subject, subject_plus_moi))
      return false;
  }

  if (subject == "Je" && verb_ending == "e") {
    return true;
  } else if (subject == "J'" && verb_ending == "e") {
    return true;
  } else if (subject == "Tu" && verb_ending == "es") {
    return true;
  } else if (subject == "Il" && verb_ending == "e") {
    return true;
  } else if (subject == "On" && verb_ending == "e") {
	return true;
  } else if (subject == "Elle" && verb_ending == "e") {
    return true;
  } else if (subject == "Nous" && verb_ending == "ons") {
    return true;
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
  } else if (isInList(subject, subject_plus_moi) && verb_ending == "ons") {
    return true;
  } else if ((subject == "Nous"||isInList(subject_plus_moi, subject)) && verb_stem == "mang" && verb_ending == "eons") { 
		return true;
  } else {
    reason_not_valid="Invalid verb conjugation: the verb ending should agree with its subject";
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
    reason_not_valid="Invalid verb conjugation: the verb ending should agree with its subject";
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
  } else if (subject == "Il" && verb_ending == "") {
    return true;
  } else if (subject == "Elle" && verb_ending == "") {
    return true;
  } else if (subject == "On" && verb_ending == "") {
    return true;
  } else if (subject == "Nous" && verb_ending == "ons") {
    return true;
  } else if (subject == "Vous" && verb_ending == "ez") {
    return true;
  } else if (isInList(subject, subject_singular) && verb_ending == "") {
    return true;
  } else if (isInList(subject, subject_plural) && verb_ending == "ent") {
    return true;
  } else if (isInList(subject, subject_plus_moi) && verb_ending == "ons") {
    return true;
  } else {
    reason_not_valid="Invalid verb conjugation: the verb ending should agree with its subject";
    return false;
  }
}

function is_ER_verb(verb_stem)
{
	if (isInList(verb_stem_er, verb_stem))
		return true;
	else
		return false;
}

function is_IR_verb(verb_stem)
{
	if (isInList(verb_stem_ir, verb_stem))
		return true;
	else
		return false;
}

function is_RE_verb(verb_stem)
{
	if (isInList(verb_stem_re, verb_stem))
		return true;
	else
		return false;
}

/* er verb_stems, ir verb_stems, re verb_stemes */
function subjectAgreesWithVerbEnding(subject, verb_stem, verb_ending)
{
	if (is_ER_verb(verb_stem))
		return subjectVerbAgreement_ER(subject, verb_stem, verb_ending);			
	else if (is_IR_verb(verb_stem))
		return subjectVerbAgreement_IR(subject, verb_ending);			
	else if (is_RE_verb(verb_stem))
		return subjectVerbAgreement_RE(subject, verb_ending);			
	else {
		console.log("not an er, ir or re verb_stem");
		return false;
	}
}

function is_food_plural(food)
{
	if (isInList(food_plural, food))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function food_starts_with_vowel(food)
{
	var first_letter = food[0];
	if (first_letter == "a" ||
		first_letter == "e" ||
		first_letter == "i" ||
		first_letter == "o" ||
		first_letter == "u" ||
		first_letter == "y" ||
		first_letter == "h")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function is_food_masculine(food)
{
	if (isInList(food_masculine, food))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function is_food_feminine(food)
{
	if (isInList(food_feminine, food))
	{
		return true;
	}
	else
	{
		return false;
	}
}


function partitifAgreesWithPreference(verb_stem, partitif, food, sentence_positive)
{
//	console.log("verb_stem: " + verb_stem + " partitif: " + partitif + " food: " + food);

	if (isInList(preference_verbs, verb_stem))
	{
		if (food_starts_with_vowel(food) && partitif == "l'")
		{
			return true;
		}
		else if (is_food_masculine(food) && partitif == "le")
		{
			return true;
		}
		else if (is_food_feminine(food) && partitif == "la")
		{
			return true;
		}
		else if (is_food_plural(food) && partitif == "les")
		{
			return true;
		}
		else
		{
			reason_not_valid="Remember the rules for preference verbs";
			return false;
		}
	}
	else
	{
		if (sentence_positive)
		{
			if (is_food_plural(food))
			{
				return (partitif == "des")
			}
			else 
			{
				if (food_starts_with_vowel(food))
				{
					return (partitif == "de l'")
				}
				else
				{
					if (is_food_masculine(food))
					{
						return (partitif == "du");
					}
					else if (is_food_feminine(food))
					{
						return (partitif == "de la");
					}
					else
						return false;
				}
			}
		}
		else // sentence negative
		{
			if (partitif != 'de' && partitif != "d'") {
				return false;
			}
			else if (food_starts_with_vowel(food) && partitif == "d'") {
				return true;
			} else {
				return false;
			}
		}
	}		

	return false;
}

// possible choices are: "", "n'", "ne"
function is_sentence_positive(negation1)
{
	if (negation1=="")
		return true;
	else
		return false;
}

function displaySentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food) 
{
	console.log(subject + " " + negation1 + " " + verb_stem + verb_ending + " " + negation2 + " " + partitif + " " + food);
}

function isValidSentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food) 
{
	var isValid = true;
	var sentence_positive = is_sentence_positive(negation1);

	// ne  pas
	//  
	if (!sentence_positive) {
		if (negation2 == 'pas' && negation1=='') {
			console.log("ne pas rule");
			isValid = false;
		}
	}

	if (subjectAgreesWithVerbEnding(subject, verb_stem, verb_ending) != true)
	{
		console.log("subject does not agree with verb ending" + subject + verb_stem + verb_ending);
		isValid = false;
	}

	if (partitifAgreesWithPreference(verb_stem, partitif, food, sentence_positive) != true)
	{
		console.log("partitif does not agree with verb preference");
		isValid = false;
	}

	if (isValid)
		console.log("VALID: ");
	else
		console.log("INVALID: ");
	displaySentence(subject, negation1, verb_stem, verb_ending, negation2, partitif, food);
	return isValid;
}

function slotifyArray(a) {
	var n = {}
	for (i = 0; i < a.length; ++i) {
		n[i]=a[i];		
	}
	return n;
}

function openFrench() {
	var subject_tmp = subject_pronoun;
	subject_tmp = subject_tmp.concat(subject_singular);
	subject_tmp = subject_tmp.concat(subject_plus_moi);
	subject_tmp = subject_tmp.concat(subject_plural);
	var subject = slotifyArray(subject_tmp);

	var food_tmp = food_feminine;
	food_tmp = food_tmp.concat(food_masculine);
	food_tmp.sort();
	food_tmp = food_tmp.concat(food_plural);
	var food = slotifyArray(food_tmp);

	var verb = verb_stem_er;
	verb = verb.concat(verb_stem_ir);
	verb = verb.concat(verb_stem_re);

	SpinningWheel.addSlot(subject, '', 3);
	SpinningWheel.addSlot(neg1, 'right', 2);
	SpinningWheel.addSlot(verb, 'right', 3);
	SpinningWheel.addSlot(verb_ending, 'left', 3);
	SpinningWheel.addSlot(neg2,'left',2);
	SpinningWheel.addSlot(partitif,'',4);
	SpinningWheel.addSlot(food,'left',3);
	
	SpinningWheel.setCancelAction(cancel);
	SpinningWheel.setDoneAction(done);
	
	SpinningWheel.open();
}

function done() {
	var phrase;
	var results = SpinningWheel.getSelectedValues();

	var re = /&nbsp;/g;

	var subject = results.values[0].replace(re,' ');
	phrase = subject;             // subject

	var neg1 = results.values[1].replace(re,'');
	if (neg1 != '')
		phrase += ' ' + neg1;

	var verb_stem = results.values[2];
	phrase += ' ' + verb_stem;      // verb stem

	var verb_ending = results.values[3].replace(re, '');
	if (verb_ending != '')
		phrase += verb_ending;

	var neg2 = results.values[4].replace(re,'');
	if (neg2 != '')
		phrase += ' ' + neg2;

	var partitif = results.values[5].replace(re, ' ');
	phrase += ' ' + partitif;      // partitif

	var food = results.values[6].replace(re,' ');
	phrase += ' ' + food;      // food

	phrase += '.';      // so that speech synthesis has proper intonation

	if (isValidSentence(subject, neg1, verb_stem, verb_ending, neg2, partitif, food)) {
		var utterThis = new SpeechSynthesisUtterance(phrase);
		utterThis.lang = 'FR';
		window.speechSynthesis.speak(utterThis);
		document.getElementById('result').innerHTML = 'Bravo: ' + phrase;  
	} else {
		document.getElementById('result').innerHTML = phrase;  
	}
}

function cancel() {
	document.getElementById('result').innerHTML = 'cancelled!';
}

// Let's figure out whether a sentence is valid 
// by calling the function isValidSentence() and giving it 7 parameters
//
// The 7 parameters correspond to what you will see on the slot machine in the app
//
//   subject  negation1  verb_stem  verb_ending  negation2  partitif   food
//   -------  ---------  ---------  -----------  ---------  --------   ----------
//     j'                  aim         e                     le        gateau
//     je        ne        mang        es        pas         la        pain
//     tu        n'        détest      is                    les       fraise
//     il                   ...        it                    du        framboises
//     elle                            ons                   de la      ...
//     on                              ions                  des       
//     nous                            ez                          
//     vous                            iez                  
//     ils                             ent                  
//     elles                                               
//
//   no negation for now
//   
//   Contents:
//   subject_pronoun
//   subject_singular
//   subject_plural
//   subject_plus_moi
//
//   verb_stem_er
//   verb_stem_ir
//   verb_stem_re
//
//   partitif
//
//   food_masculine
//   food_feminine
//   food_plural
//
//   subject/verb agreement:
//   regles subject verb er
//   regles subject verb ir
//   regles subject verb re
//
console.log("===");
console.log(isValidSentence("J'", "", "aim", "e", "", "le", "pain"));
console.log("===");
console.log(isValidSentence("J'", "", "aim", "es", "", "le", "pain"));
console.log("===");
console.log(isValidSentence("Elle", "", "mang", "e", "", "le", "pain"));
console.log("===");
console.log(isValidSentence("Elle", "", "mang", "e", "", "du", "pain"));
console.log("===");
console.log(isValidSentence("Elle", "", "mang", "e", "", "de la", "fraises"));
console.log("===");
console.log(isValidSentence("Nous", "", "aim", "e", "", "de la", "fraises"));
console.log("===");
console.log(isValidSentence("Nous", "", "aim", "ons", "", "la", "chocolat"));
console.log("===");
console.log(isValidSentence("Nous", "", "aim", "ons", "", "le", "chocolat"));
console.log("===");
console.log(isValidSentence("Nous", "n'", "aim", "ons", "pas", "le", "beurre"));
console.log("===");
console.log(isValidSentence("On", "n'", "aim", "e", "pas", "le", "beurre"));
console.log("===");
console.log(isValidSentence("On", "", "aim", "e", "", "le", "beurre"));

