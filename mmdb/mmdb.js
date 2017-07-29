/* 

array of monster manual + errata

v.1.0	9/1/16	edmonan

starshipwolf.com/mmdb/mmdb.js



NOTES (delete when done): 

	remove space between default and (die notation);

	remove space between # and (die) & die and '+' & '+' and #; 

	make sure descriptions end with a period; 

	make 'anti magic' and 'antimagic' 'anti-magic';

*/

[
	{	"name": "Aarakocra",
		"imageSrc": "",
		"description": "<p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p><p><strong>Enemies of Elemental Evil.</strong> In service to the Wind Dukes of Aaqa, aarakocra scout the planes in search of temples of Elemental Evil. They spy on malign elemental creatures and then either take the fi ght to those creatures or report back to the Wind Dukes.</p><p>On the Material Plane, aarakocra create aeries atop the highest mountains, especially peaks near portals to the Elemental Plane of Air. From such heights, aarakocra watch for signs of elemental incursions, as well as for nascent threats to their home plane. Aarakocra prefer to live their lives like the wind&mdash;unburdened and ever moving&mdash;yet they watch over a region for years if that's what it takes to guard against the incursions of Elemental Evil.</p><p>Aarakocra have no concept of political borders or property ownership, and the value of gems, gold, and other precious materials means little to aarakocra. In their eyes, a creature should use what is necessary and then cast what is left on the wind for others to use.</p><p><strong>Search for the Seven Shards.</strong> The Wind Dukes of Aaqa come from a race of elemental beings called the vaati, which once ruled many worlds. A creature known as the Queen of Chaos arose and initiated an interplanar war against vaati rule. To combat the threat, seven vaati heroes combined their powers to create the mighty<em>Rod of Law</em>. In a battle against the queen's greatest general, Mishka the Wolf Spider, a vaati killed Mishka by thrusting the rod into him like a spear. The rod shattered into seven shards that scattered across the multiverse. Aaracokra seek signs of the pieces' locations in order to rebuild what is now know as the<em>Rod of Seven Parts</em>.</p><p><strong>Summoning Air Elementals.</strong> Five aarakocra within 30ft of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60ft of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5ft of it can return with it.</p>",
		"size": "medium",
		"type": "humanoid",
		"tags" : ["aarakocra"],
		"alignment": "neutral good",
		"armorClass": "12",
		"armor" : [""],
		"hitPoints" : {
			"default": "13",
			"rolls": "3",
			"die": "8",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			}, 
			{
				"type": "fly", 
				"distance": "50"
			}
		],
		"strength": "10",
		"dexterity": "14",
		"constitution": "10",
		"intelligence": "11",
		"wisdom": "12",
		"charisma": "11",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "5"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "", 
				"distance": "",
				"notes": ""
			}
		],
		"passivePerception": "15",
		"languages" : ["Auran","Aarakocra"],
		"challengeRating": ".25",
		"specialTraits" : [
			{
				"name": "Dive Attack", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If the aarakocra is flying and dives at least 30ft straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3(1d6) damage to the target.</p>"
			}
		],
		"actions" : [
			{
				"name": "Talon", 
				"perDay": "", 
				"recharge": "", 
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "4",
						"rolls": "1",
						"die": "4",
						"modifier": "2",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Javelin", 
				"perDay": "", 
				"recharge": "",
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"modifier": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "ranged",
						"handed": "single",
						"reach": "30/120",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"modifier": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Aboleth",
		"imageSrc": "",
		"description": "<p>Before the coming of the gods, aboleths lurked in primordial oceans and underground lakes. They reached out with their minds and seized control of the burgeoning life-forms of the mortal realm, making those creatures their slaves. Their dominance made them like gods. Then the true gods appeared, smashing the aboleths' empire and freeing their slaves.</p><p>Aboleths have never forgotten.</p><p><strong>Eternal Memories.</strong> Aboleths have flawless memories. They pass on their knowledge and experience from generation to generation. Thus, the injury of their defeat by the gods remains perfectly preserved in their minds.</p><p>Aboleths' minds are treasure troves of ancient lore, recalling moments from prehistory with perfect clarity. They plot patiently and intricately across eons. Few creatures can conceive of the extent of an aboleth's plan.</p><p><strong>Gods in the Lake.</strong> Aboleths dwell in watery environments, including ocean abysses, deep lakes, and the Elemental Plane of Water. In these domains and the lands that adjoin them, aboleths are like gods, demanding worship and obedience from their subjects. When they consume other creatures, aboleths add the knowledge and experiences of their prey to their eternal memories.</p><p>Aboleths use their telepathic powers to read the minds of creatures and know their desires. An aboleth uses this knowledge to gain a creature's loyalty, promising to fulfill such wants in exchange for obedience. Within its lair, the aboleth can further use its powers to override senses, granting creatures, such as its followers, the illusion of promised rewards.</p><p><strong>Enemies of the Gods.</strong> The aboleths' fall from power is written in stark clarity on their flawless memories, for aboleths never truly die. If an aboleth's body is destroyed, its spirit returns to the Elemental Plane of Water, where a new body coalesces for it over days or months.</p><p>Ultimately, aboleths dream of overthrowing the gods and regaining control of the world. Aboleths have had untold eons to plot and to prepare their plans for perfect execution.</p><p>Aboleths lair in subterranean lakes or the rocky depths of the ocean, often surrounded by the ruins of an ancient, fallen aboleth city. An aboleth spends most of its existence underwater, surfacing occasionally to treat with visitors or deranged worshipers.</p>",
		"size": "large",
		"type": "aberration",
		"tags" : [""],
		"alignment": "lawful evil",
		"armorClass": "17",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "135",
			"rolls": "18",
			"die": "10",
			"modifier": "36"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "10"
			}, 
			{
				"type": "swim", 
				"distance": "40"
			}
		],
		"strength": "21",
		"dexterity": "9",
		"constitution": "15",
		"intelligence": "18",
		"wisdom": "15",
		"charisma": "18",
		"savingThrows" : [
			{
				"ability": "con", 
				"modifier": "6"
			},
			{
				"ability": "int", 
				"modifier": "8"
			},
			{
				"ability": "wis", 
				"modifier": "6"
			}
		],
		"skills" : [
			{
				"name": "history", 
				"modifier": "12"
			},
			{
				"name": "perception", 
				"modifier": "10"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "20",
		"languages" : ["Deep Speech","Telepathy 120ft"],
		"challengeRating": "10",
		"specialTraits" : [
			{
				"name": "Amphibious", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The aboleth can breathe air and water.</p>"
			},
			{
				"name": "Mucous Cloud", 
				"perDay": "", 
				"recharge": "", 
				"ability": "con",
				"dc": "14",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee Attack while within 5ft of it must make a DC 14 CON saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.</p>"
			},
			{
				"name": "Probing Telepathy", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "", 
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The aboleth makes three tentacle attacks.</p>"
			},
			{
				"name": "Tentacle", 
				"perDay": "", 
				"recharge": "",
				"attack" : {
					"modifier": "9",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "12",
						"rolls": "2",
						"die": "6",
						"modifier": "5",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": "<p>If the target is a creature, it must succeed on a DC 14 CON saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6(1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.</p>"
			},
			{
				"name": "Tail", 
				"perDay": "", 
				"recharge": "", 
				"attack" : {
					"modifier": "9",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "3",
						"die": "6",
						"modifier": "5",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Enslave", 
				"perDay": "3", 
				"recharge": "", 
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The aboleth Targets one creature it can see within 30ft of it. The target must succeed on a DC 14 WIS saving throw or be magically Charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The Charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.</p><p>Whenever the Charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "Detect", 
				"description": "<p>The aboleth makes a wisdom (perception) check.</p>"
			},
			{
				"name": "Tail Swipe", 
				"description": "<p>The aboleth makes one tail attack.</p>"
			},
			{
				"name": "Psychic Drain (costs 2 actions)", 
				"description": "<p>One creature Charmed by the aboleth takes 10(3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>"
			}
		],
		"lair" : {
			"description": "",
			"initiative": "20 (losing ties)",
			"actionDc": "",
			"actions" : [
				"The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60ft of it. While maintaining concentration on this effect, the aboleth can't take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth's phantasmal force lair action for the next 24 hours, although such a creature can choose to be affected.",
				"Pools of water within 90ft of the aboleth surge outward in a grasping tide. Any creature on the ground within 20ft of such a pool must succeed on a DC 14 STR saving throw or be pulled up to 20ft into the water and knocked prone. The aboleth can't use this lair action again until it has used a different one.",
				"Water in the aboleth's lair magically becomes a conduit for the creature's rage. The aboleth can target any number of creatures it can see in such water within 90ft of it. A target must succeed on a DC 14 WIS saving throw or take 7(2d6) psychic damage. The aboleth can't use this lair action again until it has used a different one."
			],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [
				"Underground surfaces within 1 mile of the aboleth's lair are slimy and wet and are difficult terrain.",
				"Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the aboleth that drink such water vomit it within minutes.",
				"As an action, the aboleth can create an illusory image of itself within 1 mile of the lair. The copy can appear at any location the aboleth has seen before or in any location a creature charmed by the aboleth can currently see. Once created, the image lasts for as long as the aboleth maintains concentration, as if concentrating on a spell. Although the image is intangible, it looks, sounds, and can move like the aboleth. The aboleth can sense, speak, and use telepathy from the image's position as if present at that position. If the image takes any damage, it disappears."
			],
			"recovery" : {
				"rolls": "3",
				"die": "10",
				"unit": "day"
			}
		}
	},
	{	"name": "Animated Armor",
		"imageSrc": "",
		"description": "<p>This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.</p><p>To add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.</p>",
		"size": "medium",
		"type": "construct",
		"tags" : ["animated"],
		"alignment": "unaligned",
		"armorClass": "18",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "33",
			"rolls": "6",
			"die": "8",
			"modifier": "6"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "25"
			}
		],
		"strength": "14",
		"dexterity": "11",
		"constitution": "13",
		"intelligence": "1",
		"wisdom": "3",
		"charisma": "1",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["poison","psychic"],
		"conditionImmunities" : ["blinded","charmed","deafened","exhaustion","frightened","paralyzed","petrified","poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "60",
				"notes": "blind beyond this radius"
			}
		],
		"passivePerception": "6",
		"languages" : [""],
		"challengeRating": "1",
		"specialTraits" : [
			{
				"name": "Antimagic Susceptibility", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The armor is incapacitated while in the area of an anti-magic field. If targeted by dispel magic, the armor must succeed on a CON saving throw against the caster's spell save DC or fall unconscious for 1 minute.</p>"
			},
			{
				"name": "False Appearance", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While the armor remains motionless, it is indistinguishable from a normal suit of armor.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "", 
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The armor makes two melee attacks.</p>"
			},
			{
				"name": "Slam", 
				"perDay": "", 
				"recharge": "", 
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"modifier": "2",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Ankheg",
		"imageSrc": "",
		"description": "<p>An ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.</p><p><strong>Lurkers in the Earth.</strong> The ankheg uses its powerful mandibles to dig winding tunnels deep beneath the ground. When it hunts, an ankheg burrows upward, waiting below the surface until its antennae detect movement from above. Then it bursts from the earth and. seizes prey in its mandibles, crushing and grinding while it secretes acidic digestive enzymes. These enzymes help dissolve a victim for easy swallowing, but the ankheg can also squirt acid to take down foes.</p><p><strong>Bane of Field and Forest.</strong> Although ankhegs receive a certain portion of their nutrients from the soil through which they burrow, they must supplement their diet with fresh meat. Pastures teeming with grazing livestock and forests rife with game are an ankheg's prime hunting grounds. Ankhegs are thus the bane of farmers and rangers everywhere.</p><p><strong>Earthen Tunnels.</strong> As it burrows through earth, the ankheg leaves a narrow, partially collapsed tunnel in its wake. In these tunnels, one might find the remnants of molted ankheg chitin, hatched ankheg eggs, or the grisly remains of ankheg victims, including coins or other treasures scattered during the creature's attack.</p>",
		"size": "large",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "unaligned",
		"armorClass": "14",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "39",
			"rolls": "6",
			"die": "10",
			"modifier": "6"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}, 
			{
				"type": "burrow", 
				"distance": "10"
			}
		],
		"strength": "17",
		"dexterity": "11",
		"constitution": "13",
		"intelligence": "1",
		"wisdom": "13",
		"charisma": "6",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			},
			{
				"type": "tremorsense", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : [""],
		"challengeRating": "2",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "2",
						"die": "6",
						"modifier": "3",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"modifier": "",
						"damageType": "acid",
						"notes": ""
					}
				], 
				"description": "<p>If the target is a large or smaller creature, it is grappled (escape DC 13 STR/DEX). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.</p>"
			},
			{
				"name": "Acid Spray", 
				"perDay": "", 
				"recharge": "6", 
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The ankheg spits acid in a line that is 30ft long and 5ft wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 DEX saving throw, taking 10(3d6) acid damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Azer",
		"imageSrc": "",
		"description": "<p>Natives of the Elemental Plane of Fire, azers are master crafters, expert miners, and sworn foes of the efreet. In appearance and manner, an azer resembles a male dwarf, but this is a facade. Beneath its metallic looking skin, an azer is a being of fire, which outwardly manifests in its fiery hair and beard.</p><p><strong>Made, Not Born.</strong> Azers don't reproduce. They are each crafted from bronze by another azer and imbued with a portion of the crafter's inner flame. Each azer is sculpted with unique features. This crafting process limits the growth of the azer population and is the primary reason that these creatures remain rare.</p><p><strong>Volcanic Dwellers.</strong> Azers dwell in a kingdom on the border between the Elemental Plane of Earth and the Elemental Plane of Fire&mdash;a range of mountains and volcanoes whose spires rise as a series of fortresses. Beneath mountain peaks, under volcanic calderas, and amid rivers of magma, azers extract gleaming metals and glittering gems from the earth. Squads of azer patrol the passes and tunnels of their realm, fending off the salamander raiders whose efreet masters order strikes against the azer kingdom.</p><p><strong>Enemies of the Efreet.</strong> Long ago, the efreet and the azers were allies. Azers helped create the City of Brass, forging that home of the efreet into one of the most wondrous places in creation. When the azers had finished their work, the efreet betrayed them, making a failed attempt to enslave the azers so as to protect the secrets of the city. Despite occasional raids and skirmishes, however, the two sides have so far refrained from all-out conflict. The azers believe that only the threat of them revealing the hidden ways into the City of Brass keeps the efreet in check.</p><p><strong>Masters of Metal and Gems.</strong> Azers are masterful artisans, and create beautiful works from the gems and precious metals found in their volcanic habitat. They rate the value of such treasures above all other things, sometimes dispatching parties across the planes to seek out rare metals and gemstones. When azers are called by magic to the Material Plane, it is typically to help forge an elaborate magic item or work of art, for it is said that their skill in such craft knows no equal.</p><p><strong>Living Fire.</strong> An azer doesn't require food, drink, or sleep.</p>",
		"size": "medium",
		"type": "elemental",
		"tags" : [""],
		"alignment": "lawful neutral",
		"armorClass": "17",
		"armor" : ["natural armor","sheild"],
		"hitPoints" : {
			"default": "39",
			"rolls": "6",
			"die": "8",
			"modifier": "12"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "17",
		"dexterity": "12",
		"constitution": "15",
		"intelligence": "12",
		"wisdom": "13",
		"charisma": "10",
		"savingThrows" : [
			{
				"ability": "con", 
				"modifier": "4"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "", 
				"distance": "",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : ["Ignan"],
		"challengeRating": "2",
		"specialTraits" : [
			{
				"name": "Heated Body", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>A creature that touches the azer or hits it with a melee attack while within 5ft of it takes 5(1d10) fire damage.</p>"
			},
			{
				"name": "Heated Weapons", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>When the azer hits with a metal melee weapon, it deals an extra 3(1d6) fire damage (included in the attack).</p>"
			},
			{
				"name": "Illumination", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The azer sheds bright light in a 10-foot radius and dim light for an plus 10ft.</p>"
			}
		],
		"actions" : [
			{
				"name": "Warhammer", 
				"perDay": "", 
				"recharge": "",
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "8",
						"modifier": "3",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "melee",
						"handed": "2",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "10",
						"modifier": "3",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "1",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"modifier": "",
						"damageType": "fire",
						"notes": ""
					}
				], 
				"description": "<p>Or 8(1d10+3) bludgeoning + 3(1d6) fire if used with two hands to make a melee attack.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Balor",
		"imageSrc": "",
		"description": "<p>Figures of ancient and terrible evil, balors rule as generals over demonic armies, yearning to seize power while destroying any creatures that oppose them.</p><p>Wielding a flaming whip and a longsword that channels the power of the storm, a balor's battle prowess is fueled by hatred and rage. It channels this demonic fury in its death throes, falling within a blast of fire that can destroy even the hardiest foes.</p>",
		"size": "huge",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "19",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "262",
			"rolls": "21",
			"die": "12",
			"modifier": "126"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			},
			{
				"type": "fly", 
				"distance": "80"
			}
		],
		"strength": "26",
		"dexterity": "15",
		"constitution": "22",
		"intelligence": "20",
		"wisdom": "16",
		"charisma": "22",
		"savingThrows" : [
			{
				"ability": "str", 
				"modifier": "14"
			},
			{
				"ability": "con", 
				"modifier": "12"
			},
			{
				"ability": "wis", 
				"modifier": "9"
			},
			{
				"ability": "cha", 
				"modifier": "12"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "truesight", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "13",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "19",
		"specialTraits" : [
			{
				"name": "Death Throes", 
				"perDay": "", 
				"recharge": "",
				"ability": "dex",
				"dc": "20",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>When the balor dies, it explodes, and each creature within 30ft of it must make a DC 20 DEX saving throw, taking 70(20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.</p>"
			},
			{
				"name": "Fire Aura", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>At the start of each of the balor's turns, each creature within 5ft of it takes 10(3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5ft of it takes 10(3d6) fire damage.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The balor has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "Magic Weapons", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The balor's weapon attacks are magical.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The balor makes two attacks: one with its longsword and one with its whip.</p>"
			},
			{
				"name": "Longsword", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "14",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "21",
						"rolls": "3",
						"die": "8",
						"modifier": "8",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "13",
						"rolls": "3",
						"die": "8",
						"modifier": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"description": "<p>If the balor scores a critical hit, it rolls damage dice three times, instead of twice.</p>"
			},
			{
				"name": "Whip", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "14",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "30",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"modifier": "8",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"modifier": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"description": "<p>The target must succeed on a DC 20 STR saving throw or be pulled up to 25ft toward the balor.</p>"
			},
			{
				"name": "Teleport", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The balor magically teleports, along with any equipment it is wearing or carrying, up to 120ft to an unoccupied space it can see.</p>"
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A balor has a 50% chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Barlgura",
		"imageSrc": "",
		"description": "<p>The barlgura represents the savagery and brutality of the Abyss. Barlguras gather in packs to take down tougher foes, keep gruesome trophies from their victories, and decorate their territory with such objects.</p><p>A barlgura looks like a hulking orangutan with a gruesome, drooping visage and tusks jutting from its jaw. Standing just under 8ft tall, it has broad shoulders and weighs 650lbs. It moves apishly along the ground, but it climbs with great speed and agility.</p>",
		"size": "large",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "15",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "68",
			"rolls": "8",
			"die": "10",
			"modifier": "24"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			},
			{
				"type": "climb", 
				"distance": "30"
			}
		],
		"strength": "18",
		"dexterity": "15",
		"constitution": "16",
		"intelligence": "7",
		"wisdom": "14",
		"charisma": "9",
		"savingThrows" : [
			{
				"ability": "dex", 
				"modifier": "5"
			},
			{
				"ability": "con", 
				"modifier": "6"
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "5"
			},
			{
				"name": "stealth", 
				"modifier": "5"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "30",
				"notes": ""
			},
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "15",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "5",
		"specialTraits" : [
			{
				"name": "Innate Spellcasting", 
				"perDay": "", 
				"recharge": "",
				"ability": "wis",
				"dc": "13",
				"spell" : [
					{
						"rate": "1",
						"span": "day",
						"titles" : ["entangle","phantasmal force"]
					},
					{
						"rate": "2",
						"span": "day",
						"titles" : ["disguise self","invisibility (self only)"]
					}
				],
				"description": ""
			},
			{
				"name": "Reckless", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.</p>"
			},
			{
				"name": "Running Leap", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The barlgura's long jump is up to 40ft and its high jump is up to 20ft when it has a running start.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The barlgura makes three attacks: one with its bite and two with its fists.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"modifier": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Fist", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "1",
						"die": "10",
						"modifier": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "A barlgura has a 30% chance of summoning one barlgura. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Banshee",
		"imageSrc": "",
		"description": "<p>When night falls, unlucky travelers hear the faint cries of the forlorn dead. This woeful spirit is a banshee, a spiteful creature formed from the spirit of a female elf.</p><p>Banshees appear as luminous, wispy forms that vaguely recall their mortal features. A banshee's face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it.</p><p><strong>Divine Wrath.</strong> Banshees are the undead remnants of elves who, blessed with great beauty, failed to use their gift to bring joy to the world. Instead, they used their beauty to corrupt and control others. Elves afflicted by the banshee's curse experience no gladness, feeling only distress in the presence of the living. As the curse takes its toll, their minds and bodies decay, until death completes their transformation into undead monsters.</p><p><strong>Sorrow Bound.</strong> A banshee becomes forever bound to the place of its demise, unable to venture more than five miles from there. It is forced to relive every momerit of its life with perfect recall, yet always refuses to accept responsibility for its doom.</p><p><strong>Beauty Hoarders.</strong> The vanity that inspired the banshee's cursed creation persists in undeath. These creatures covet beautiful objects: fine jewelry, paintings, statues, and other objects of art. At the same time, a banshee abhors any mirrored surface, for it can't bear to see the horror of its own existence. A single glimpse of itself is enough to send a banshee into a rage.</p><p><strong>Undead Nature.</strong> A banshee doesn't require air, food, drink, or sleep.</p>",
		"size": "medium",
		"type": "undead",
		"tags" : [""],
		"alignment": "chaotic evil",
		"armorClass": "12",
		"armor" : [""],
		"hitPoints" : {
			"default": "58",
			"rolls": "13",
			"die": "8",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "fly", 
				"distance": "40"
			}
		],
		"strength": "1",
		"dexterity": "14",
		"constitution": "10",
		"intelligence": "12",
		"wisdom": "11",
		"charisma": "17",
		"savingThrows" : [
			{
				"ability": "wis", 
				"modifier": "2"
			},
			{
				"ability": "cha", 
				"modifier": "4"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["acid","fire","lightning","thunder","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["cold","necrotic","poison"],
		"conditionImmunities" : ["charmed","exhaustion","frightened","grappled","paralyzed","petrified","poisoned","prone","restrained"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "10",
		"languages" : ["Common","Elvish"],
		"challengeRating": "4",
		"specialTraits" : [
			{
				"name": "Detect Life", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The banshee can magically sense the presence of living creatures up to 5 miles away. She knows the general direction they're in but not their exact locations.</p>"
			},
			{
				"name": "Incorporeal Movement", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5(1d10) force damage if she ends her turn inside an object.</p>"
			}
		],
		"actions" : [
			{
				"name": "Corrupting Touch", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee spell",
						"handed": "1",
						"reach": "5",
						"default": "12",
						"rolls": "3",
						"die": "6",
						"modifier": "2",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Horrifying Visage", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>Each non-undead creature within 60ft of the banshee that can see her must succeed on a DC 13 WIS saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours.</p>"
			},
			{
				"name": "Wail", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30ft of her that can hear her must make a DC 13 CON saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10(3d6) psychic damage.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Barbed Devil (Hamatula)",
		"imageUrl": "",
		"description": "<p>Creatures of unbridled greed and desire, barbed devils act as guards to the more powerful denizens of the Nine Hells and their vaults. Resembling a tall humanoid covered in sharp barbs, spines, and hooks, a barbed devil has gleaming eyes that are ever watchful for objects and creatures it might claim for itself. These fiends welcome any chance to fight when victory promises reward.</p><p>Barbed devils are known for an alertness that makes them difficult to surprise, and they attend to their duties without boredom or distraction. They use their sharp claws as weapons or hurl balls of flame at foes that try to flee them.</p>",
		"size": "medium",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "110",
			"rolls": "13",
			"die": "8",
			"modifier": "52"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "16",
		"dexterity": "17",
		"constitution": "18",
		"intelligence": "12",
		"wisdom": "14",
		"charisma": "14",
		"savingThrows" : [
			{
				"attribute": "str", 
				"modifier": "6"
			},
			{
				"attribute": "con", 
				"modifier": "7"
			},
			{
				"attribute": "wis", 
				"modifier": "5"
			},
			{
				"attribute": "cha", 
				"modifier": "5"
			}
		],
		"skills" : [
			{
				"name": "deception", 
				"modifier": "5"
			},
			{
				"name": "insight", 
				"modifier": "5"
			},
			{
				"name": "perception", 
				"modifier": "8"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "5",
		"specialTraits" : [
			{
				"name": "Barbed Hide", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>At the start of each of its turns, the barbed devil deals 5(1dl0) piercing damage to any creature grappling it.</p>"
			},
			{
				"name": "Devil's Sight", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": "<p>The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.</p>"
			},
			{
				"name": "Claw", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "6",
						"modifier": "3",
						"damageType": "piercing"
					}
				],
				"description": ""
			},
			{
				"name": "Tail", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"modifier": "3",
						"damageType": "piercing"
					}
				],
				"description": ""
			},
			{
				"name": "Hurl Flame", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "ranged spell",
						"handed": "",
						"reach": "150",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"modifier": "",
						"damageType": "fire"
					}
				],
				"description": "<p>If the target is a flammable object that isn't being worn or carried, it also catches fire.</p>"
			},
			{
				"name": "Summon Devil", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": "<p>A barbed devil has a 30% chance of summoning one barbed devil. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Basilisk",
		"imageSrc": "",
		"description": "<p>Travelers sometimes find objects that look like pieces of remarkably lifelike stone carvings of wildlife. Missing parts appear to have been bitten off. Seasoned explorers regard such relics as warnings, knowing that the basilisk that created them is likely to be nearby.</p><p><strong>Adaptable Predators.</strong> Basilisks thrive in arid, temperate, or tropical climates. They lair in caves or other sheltered sites. Most often, basilisks are encountered underground.</p><p>A basilisk born and raised in captivity can be domesticated and trained. Such a trained basilisk knows how to avoid meeting the eyes of those its master wishes to protect from its gaze, but it makes a daunting guardian beast. Because of this use, basilisk eggs are highly prized.</p><p><strong>Gaze of Stone.</strong> Basilisks a re ponderous for hunting creatures, but they needn't chase prey. Meeting a basilisk's supernatural gaze can be enough to affect a rapid transformation, transforming a victim into porous stone. Basilisks, with their strong jaws, are able to consume the stone. The stone returns to organic form in the basilisk's gullet.</p><p>Some alchemists are said to know how to process the basilisk's gullet and the fluids contained within. Properly handled, the gullet produces an oil that can return petrified creatures to flesh and life. Unfortunately for such a victim, any parts lost in stone form remain absent if the creature revives. Revivification using the oil is impossible if a vital part of the petrified creature, such as its head, is detached.</p>",
		"size": "medium",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "unaligned",
		"armorClass": "5",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "52",
			"rolls": "8",
			"die": "8",
			"modifier": "16"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			}
		],
		"strength": "16",
		"dexterity": "8",
		"constitution": "15",
		"intelligence": "2",
		"wisdom": "8",
		"charisma": "7",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "9",
		"languages" : [""],
		"challengeRating": "3",
		"specialTraits" : [
			{
				"name": "Petrifying Gaze", 
				"perDay": "", 
				"recharge": "", 
				"ability": "con",
				"dc": "12",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If a creature starts its turn within 30ft of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 CON saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure , the creature is petrified until freed by the greater restoration spell or other magic. A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.</p><p>If the basilisk sees its reflection within 30ft of it in bright light, it mistakes itself for a rival and targets itself with its gaze.</p>"
			}
		],
		"actions" : [
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"modifier": "3",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "7",
						"rolls": "2",
						"die": "6",
						"modifier": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Bearded Devil (Barbazu)",
		"imageUrl": "",
		"description": "<p>Bearded devils serve archdevils as shock troops, fighting shoulder-to-shoulder and reveling in the glory of battle. They respond with violence to any slight, real or imagined, gorging themselves on violence as their infernal saw-toothed glaives carve a path through their foes.</p><p>A bearded d~vil is humanoid in form, with ·pointed ears, scaly skln, a long tail, and claws that clearly show its fiendish nature. These devils take their names from the snakelike growths that adorn their chins, which they use to lash and poison enemies, weakening them with their virulent venom.</p>",
		"size": "medium",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "13",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "52",
			"rolls": "8",
			"die": "8",
			"modifier": "16"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "16",
		"dexterity": "15",
		"constitution": "15",
		"intelligence": "9",
		"wisdom": "11",
		"charisma": "11",
		"savingThrows" : [
			{
				"attribute": "str", 
				"modifier": "5"
			},
			{
				"attribute": "con", 
				"modifier": "4"
			},
			{
				"attribute": "wis", 
				"modifier": "2"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "10",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "3",
		"specialTraits" : [
			{
				"name": "Devil's Sight", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "Steadfast", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The devil can't be frightened while it can see an allied creature within 30ft of it.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": "<p>The devil makes two attacks: one with its beard and one with its glaive.</p>"
			},
			{
				"name": "Beard", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "8",
						"modifier": "2",
						"damageType": "piercing"
					}
				],
				"description": "<p>The target must succeed on a DC 12 CON saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "Glaive", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "8",
						"rolls": "1",
						"die": "10",
						"modifier": "8",
						"damageType": "slashing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "5",
						"rolls": "1",
						"die": "10",
						"modifier": "",
						"damageType": "infernal"
					}
				],
				"description": "<p>If the target is a creature other than an undead or a construct, it must succeed on a DC 12 CON saving throw or lose 5(1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5(1d10). Any creature can take an action to stanch the wound with a successful DC 12 WIS(Medicine) check. The wound also closes if the target receives magical healing.</p>"
			},
			{
				"name": "Summon Devil", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": "<p>A bearded devil has a 30% chance of summoning one bearded devil. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Behir",
		"imageSrc": "",
		"description": "<p>The serpentine behir crawls along floors and clambers up walls to reach its prey. Its lightning breath can incinerate most creatures, even as more powerful foes are constricted in its coils and eaten alive.</p><p>A behir's monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color, fading to pale blue on its underside.</p><p><strong>Cavern Predators.</strong> Behirs lair in places inaccessible to other creatures, favoring locations where would-be intruders must make a harrowing climb to reach them. Deep pits, high caves in cliff walls, and caverns reached only by narrow, twisting tunnels are prime sites for a behir ambush. A behir's dozen legs allow it to scramble through its lair site with ease. When not climbing, it moves even faster by folding its legs beside its body and slithering like a snake.</p><p>Behirs swallow their prey whole, after which they enter a period of dormancy while they digest. While dormant, a behir chooses a hiding place where intruders in its lair might overlook it.</p><p><strong>Foes of the Dragons.</strong> In times long forgotten, giants and dragons engaged in seemingly endless war. Storm giants created the first behirs as weapons against the dragons, and behirs retain a natural hatred for dragonkind.</p><p>A behir never makes its lair in an area it knows to be inhabited by a dragon. If a dragon attempts to establish a lair within a few dozen miles of a behir's lair, the behir is compelled to kill the dragon or drive it off. Only if tlie dragon proves too powerful to fight does a behjr back down, seeking out a new lair site a great distance away.</p>",
		"size": "huge",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "neutral evil",
		"armorClass": "17",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "168",
			"rolls": "16",
			"die": "12",
			"modifier": "64"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "50"
			},
			{
				"type": "climb", 
				"distance": "40"
			}
		],
		"strength": "23",
		"dexterity": "16",
		"constitution": "18",
		"intelligence": "7",
		"wisdom": "14",
		"charisma": "12",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "6"
			},
			{
				"name": "stealth", 
				"modifier": "7"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["lightning"],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "90",
				"notes": ""
			}
		],
		"passivePerception": "16",
		"languages" : ["Draconic"],
		"challengeRating": "11",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The behir makes two attacks: one with its bite and one to constrict.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "10",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "22",
						"rolls": "3",
						"die": "10",
						"modifier": "6",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Constrict", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "10",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"modifier": "6",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "5",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"modifier": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": "<p>The target is grappled (escape DC 16 STR/DEX) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.</p>"
			},
			{
				"name": "Lightning Breath", 
				"perDay": "", 
				"recharge": "5-6",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The behir exhales a line of lightning that is 20ft long and 5ft wide. Each creature in that line must make a DC 16 DEX saving throw, taking 66(12d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "Swallow", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The behir makes one bite attack against a medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21(6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 CON saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10ft of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15ft of movement, exiting prone.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Beholder",
		"imageSrc": "",
		"description": "<p>One glance at a beholder is enough to assess its foul and otherworldly nature. Aggressive, hateful, and greedy, these aberrations dismiss all other creatures as lesser beings, toying with them or destroying them as they choose.</p><p>A beholder's spheroid body levitates at all times, and its great bulging eye sits above a wide, toothy maw, while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. When a beholder sleeps, it closes its central eye but leaves its smaller eyes open and alert.</p><p><strong>Xenophobic Isolationists.</strong> Enemies abound, or so every beholder believes. Beholders are convinced that other creatures resent them for their brilliance and magical power, even as they dismiss those lesser creatures as crude and disgusting. Beholders always suspect others of plotting against them, even when no other creatures are around.</p><p>The disdain a beholder has for other creatures extends to other beholders. Each beholder believes its form to be an ideal, and that any deviation from that form is a flaw in the racial purity of its kind. Beholders vary greatly in their physical forms, making conflict between them inevitable. Some beholders are protected by overlapping chitinous plates. Some have smooth hides. Some have eyestalks that writhe like tentacles, while others' stalks bear crustacean-like joints. Even slight differences of coloration in hide can turn two beholders into lifelong enemies.</p><p><strong>Eye Tyrant.</strong> Some beholders manage to channel their xenophobic tendencies into a terrible despotism. Rather than live in isolation, the aptly named eye tyrants enslave those other creatures, founding and controlling vast empires. An eye tyrant sometimes carves out a domain within or under a major city, commanding networks of agents that operate on their master's behalf.</p><p><strong>Alien Lairs.</strong> Because they refuse to share territory with others, most beholders withdraw to frigid hills, abandoned ruins, and deep caverns to scheme. A beholder's lair is carved out by its disintegration eye ray, emphasizing vertical passages connecting chambers stacked on top of each other. Such an environment allows a beholder to move freely, even as it prevents intruders from easily creeping about. When intruders do break in, the height of its open ceilings allows a beholder to float up and harry foes on the floor.</p><p>As alien as their creator, the rooms in a beholder's lair reflect the creature's arrogance. It festoons its chambers with trophies from the battles it has won, including petrified adventurers standing frozen in their horrified final moments, pieces of other beholders, and magic items wrested from powerful fo es. A beholder judges its own worth by its acquisitions, and it never willingly parts with its treasures.</p>",
		"size": "large",
		"type": "aberration",
		"tags" : ["beholder"],
		"alignment": "lawful evil",
		"armorClass": "18",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "180",
			"rolls": "19",
			"die": "10",
			"modifier": "76"
		},
		"speed" : [
			{
				"type": "fly (hover)", 
				"distance": "20"
			}
		],
		"strength": "10",
		"dexterity": "14",
		"constitution": "18",
		"intelligence": "17",
		"wisdom": "15",
		"charisma": "17",
		"savingThrows" : [
			{
				"ability": "int", 
				"modifier": "8"
			},
			{
				"ability": "wis", 
				"modifier": "7"
			},
			{
				"ability": "cha", 
				"modifier": "8"
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "12"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : ["prone"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "22",
		"languages" : ["Deep Speech, Undercommon"],
		"challengeRating": "13",
		"specialTraits" : [
			{
				"name": "Antimagic Cone", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The beholder's central eye creates an area of anti-magic, as in the anti-magic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays.</p>"
			}
		],
		"actions" : [
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "4",
						"die": "6",
						"modifier": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Eye Rays", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The beholder shoots three of the following magical eye rays at random (1d10 reroll duplicates), choosing one to three targets it can see within 120ft of it:</p><p><ol><li><strong>Charm Ray.</strong> The targeted creature must succeed on a DC 16 WIS saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.</li><li><strong>Paralyzing Ray.</strong> The targeted creature must succeed on a DC 16 CON saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Fear Ray.</strong> The targeted creature must succeed on a DC 16 WIS saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Slowing Ray.</strong> The targeted creature must succeed on a DC 16 DEX saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not bofh. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Enervation Ray.</strong> The targeted creature must make a DC 16 CON saving throw, taking 36(8d8) necrotic damage on a failed save, or half as much damage on a successful one.</li><li><strong>Telekinetic Ray.</strong> If the target is a creature, it must succeed on a DC 16 STR saving throw or the beholder moves it up to 30ft in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.<br><br>If the target is an object weighing 300lbs or less that isn't being worn or carried, it is moved up to 30ft in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.</li><li><strong>Sleep Ray.</strong> The targeted creature must succeed on a DC 16 WIS saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.</li><li><strong>Petrification Ray.</strong> The targeted creature must make a DC 16 DEX saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.</li><li><strong>Disintegration Ray.</strong> If the target is a creature, it must succeed on a DC 16 DEX saving throw or take 45(10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.<br><br>If the target is a large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a huge or larger object or creation of magical force, this ray disintegrates a 10ft cube of it.</li><li><strong>Death Ray.</strong> The targeted creature must succeed on a DC 16 DEX saving throw or take 55(10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points.</li></ol></p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "Eye Ray", 
				"description": "<p>The beholder uses one random eye ray.</p>"
			}
		],
		"lair" : {
			"description": "<p>A beholder's central lair is typically a large, spacious cavern with high ceilings, where it can attack without fear of closing to melee range. A beholder encountered in its lair has a challenge rating of 14.</p>",
			"initiative": "20 (losing ties)",
			"actionDc": "",
			"actions" : [
				"A 50-foot square area of ground within 120ft of the beholder becomes slimy; that area is difficult terrain until initiative count 20 on the next round.",
				"Walls within 120ft of the beholder sprout grasping appendages until initiative count 20 on the round after next. Each creature of the beholder's choice that starts its turn within 10ft of such a wall must succeed on a DC 15 DEX saving throw or be grappled. Escaping requires a successful DC 15 STR(athletics) or DEX(acrobatics) check.",
				"An eye opens on a solid surface within 60ft of the beholder. One random eye ray of the beholder shoots from that eye at a target of the beholder's choice that it can see. The eye then closes and disappears. The beholder can't repeat an effect until they have all been used, and it can't use the same effect two rounds in a row."
			],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [
				"Creatures within 1 mile of the beholder's lair sometimes feel as if they're being watched when they aren't.",
				"When the beholder sleeps, minor warps in reality occur within 1 mi1e of its lair and then vanish 24 hours later. Marks on cave walls might change subtly, an eerie trinket might appear where none existed before, harmless slime might coat a statue, and so on. These effects apply only to natural surfaces and to nonmagical objects that aren't on anyone's person."
			],
			"recovery" : {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "Bone Devil (Osyluth)",
		"imageUrl": "",
		"description": "<p>Driven by hate, lust, and envy, bone devils act as the cruel taskmasters of the Nine Hells. They set weaker devils to work, taking special delight in seeing fiends that defy them demoted. At the same time, they long for promotion and are bitterly envious of their superiors, attempting to curry favor though it irks them to do so.</p><p>A bone devil appears as a humanoid husk, with dried skin stretched tight across its skeletal frame. It bears a fearsome skull-like head and the tail of a scorpion, and a foul odor of decay hangs in the air around it. Though they are devastating in combat with their claws, bone devils also wield hooked polearms made of bone, which they use to subdue enemies before striking with their venomous tails.</p>",
		"size": "large",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "19",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "142",
			"rolls": "15",
			"die": "10",
			"modifier": "60"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			},
			{
				"type": "fly", 
				"distance": "40"
			}
		],
		"strength": "18",
		"dexterity": "16",
		"constitution": "18",
		"intelligence": "13",
		"wisdom": "14",
		"charisma": "16",
		"savingThrows" : [
			{
				"attribute": "int", 
				"modifier": "5"
			},
			{
				"attribute": "wis", 
				"modifier": "6"
			},
			{
				"attribute": "cha", 
				"modifier": "7"
			}
		],
		"skills" : [
			{
				"name": "deception", 
				"modifier": "7"
			},
			{
				"name": "insight", 
				"modifier": "6"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "12",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "9",
		"specialTraits" : [
			{
				"name": "Devil's Sight", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": "<p>The devil makes three attacks: two with its claws and one with its sting or one with it's hooked polearm and one with its sting.</p>"
			},
			{
				"name": "Claw", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "8",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "8",
						"rolls": "1",
						"die": "8",
						"modifier": "4",
						"damageType": "slashing"
					}
				],
				"description": ""
			},
			{
				"name": "Hooked Polearm", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "8",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "12",
						"modifier": "4",
						"damageType": "piercing"
					}
				],
				"description": "<p>Variant. If the target is a huge or smaller creature, it is grappled (DC 14 STR/DEX). Until this grapple ends, the devil can't use its polearm on another target.</p>"
			},
			{
				"name": "Sting", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "8",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "13",
						"rolls": "2",
						"die": "8",
						"modifier": "4",
						"damageType": "piercing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "17",
						"rolls": "5",
						"die": "6",
						"modifier": "",
						"damageType": "poison"
					}
				],
				"description": "<p>The target must succeed on a DC 14 CON saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "Summon Devil", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": "<p>A bone devil has a 40% chance of summoning 2d6 spined devils or one bone devil. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Bugbear",
		"imageSrc": "",
		"description": "<p>Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure are assured.</p><p><strong>Goblinoids.</strong> Bugbears are often found in the company of their cousins, hobgoblins and goblins. Bugbears usually enslave goblins they encounter, and they bully hobgoblins into giving them gold and food in return for serving as scouts and shock troops. Even when paid, bugbears are at best unreliable allies, yet goblins and hobgoblins understand that no matter how much bugbears might drain a tribe of resources, these creatures are a potent force.</p><p><strong>Followers of Hruggek.</strong> Bugbears worship Hruggek, a lesser god who dwells on the plane of Acheron. In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggek's side. They try to prove themselves worthy by defeating as many foes as possible.</p><p><strong>Venal Ambushers.</strong> Despite their intimidating builds, bugbears move with surprising stealth. They are fond of setting ambushes and flee when outmatched. They are dependable mercenaries as long as they are supplied food, drink, and treasure, but a bugbear forgets any bond when its life is on the line. A wounded member of a bugbear band might be left behind to help the rest of the band escape. Afterward, that bugbear might help pursuers track down its former companions if doing so saves its life.</p>",
		"size": "medium",
		"type": "humanoid",
		"tags" : ["goblinoid"],
		"alignment": "chaotic evil",
		"armorClass": "16",
		"armor" : ["hide armor","shield"],
		"hitPoints" : {
			"default": "27",
			"rolls": "5",
			"die": "8",
			"modifier": "5"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "15",
		"dexterity": "14",
		"constitution": "13",
		"intelligence": "8",
		"wisdom": "11",
		"charisma": "9",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "stealth", 
				"modifier": "6"
			},
			{
				"name": "survival", 
				"modifier": "2"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "10",
		"languages" : ["Common","Goblin"],
		"challengeRating": "1",
		"specialTraits" : [
			{
				"name": "Brute", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p>"
			},
			{
				"name": "Surprise Attack", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7(2d6) damage from the attack.</p>"
			}
		],
		"actions" : [
			{
				"name": "Morningstar", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "8",
						"modifier": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Javelin", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "2",
						"die": "6",
						"modifier": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/120",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"modifier": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Bugbear Chief",
		"imageSrc": "",
		"description": "<p>Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure are assured.</p><p><strong>Goblinoids.</strong> Bugbears are often found in the company of their cousins, hobgoblins and goblins. Bugbears usually enslave goblins they encounter, and they bully hobgoblins into giving them gold and food in return for serving as scouts and shock troops. Even when paid, bugbears are at best unreliable allies, yet goblins and hobgoblins understand that no matter how much bugbears might drain a tribe of resources, these creatures are a potent force.</p><p><strong>Followers of Hruggek.</strong> Bugbears worship Hruggek, a lesser god who dwells on the plane of Acheron. In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggek's side. They try to prove themselves worthy by defeating as many foes as possible.</p><p><strong>Venal Ambushers.</strong> Despite their intimidating builds, bugbears move with surprising stealth. They are fond of setting ambushes and flee when outmatched. They are dependable mercenaries as long as they are supplied food, drink, and treasure, but a bugbear forgets any bond when its life is on the line. A wounded member of a bugbear band might be left behind to help the rest of the band escape. Afterward, that bugbear might help pursuers track down its former companions if doing so saves its life.</p>",
		"size": "medium",
		"type": "humanoid",
		"tags" : ["goblinoid"],
		"alignment": "chaotic evil",
		"armorClass": "17",
		"armor" : ["chain shirt","shield"],
		"hitPoints" : {
			"default": "65",
			"rolls": "10",
			"die": "8",
			"modifier": "20"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "17",
		"dexterity": "14",
		"constitution": "14",
		"intelligence": "11",
		"wisdom": "12",
		"charisma": "11",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "intimidation", 
				"modifier": "2"
			},
			{
				"name": "stealth", 
				"modifier": "6"
			},
			{
				"name": "survival", 
				"modifier": "3"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : ["Common","Goblin"],
		"challengeRating": "3",
		"specialTraits" : [
			{
				"name": "Brute", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p>"
			},
			{
				"name": "Heart of Hruggek", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep.</p>"
			},
			{
				"name": "Surprise Attack", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7(2d6) damage from the attack.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The bugbear makes two melee attacks.</p>"
			},
			{
				"name": "Morningstar", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "12",
						"rolls": "2",
						"die": "8",
						"modifier": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Javelin", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"modifier": "3",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/120",
						"default": "6",
						"rolls": "1",
						"die": "6",
						"modifier": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Bulette",
		"imageSrc": "",
		"description": "<p>A bulette is a massive predator that terrorizes any lands it inhabits. Also called a \"land shark,\" it lives only to feed. Irascible and rapacious, bulettes fear no other creature, and they attack with no regard for superior numbers or strength.</p><p><strong>Underground Hunters.</strong> Bulettes use their powerful claws to tunnel through the earth when they hunt. Heedless of obstruction, they uproot trees, cause landslides in loose slopes, and leave sinkholes behind them. When vibrations in the soil and rock alert a bulette to movement, it shoots to the surface, its jaws spread wide as it attacks.</p><p><strong>Wandering Monster.</strong> A bulette ranges across temperate lands, feeding on any animals and humanoids it comes across. These creatures dislike dwarf and elf flesh, although they often kill them before realizing what they are. A bulette loves halfling meat the most, and it is never happier than when chasing plump halflings across an open field.</p><p>A bulette has no lair, but roams a hunting territory up to thirty miles wide. Its sole criterion for territory is availability of food, and when it has eaten everything in an area, a bulette moves on. These creatures often home in on humanoid settlements, terrorizing them until their panicked residents have fled, or until the bulette is slain.</p><p>All creatures shun bulettes, which treat anything that moves as food&mdash;even other predators and bulettes. Bulettes come together only to mate, resulting in a bloody act of claws and teeth that usually ends with the male's death and consumption.</p><p><strong>Arcane Creation.</strong> Some sages believe the bulette is the result of a mad wizard's experiments at crossbreeding snapping turtles and armadillos, with infusions of demon ichor. Bulettes have been thought to be extinct at different times, but after years without a sighting, the creatures inevitably reappear. Because their young are almost never seen, some sages suspect that bulettes maintain secret nesting grounds from which adults strike out into the world.</p>",
		"size": "large",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "unaligned",
		"armorClass": "17",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "94",
			"rolls": "9",
			"die": "10",
			"modifier": "45"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			},
			{
				"type": "burrow", 
				"distance": "40"
			}
		],
		"strength": "19",
		"dexterity": "11",
		"constitution": "21",
		"intelligence": "2",
		"wisdom": "10",
		"charisma": "5",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "6"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			},
			{
				"type": "tremorsense", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "16",
		"languages" : [""],
		"challengeRating": "5",
		"specialTraits" : [
			{
				"name": "Standing Leap", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The bulette's long jump is up to 30ft and its high jump is up to 15ft, with or without a running start.</p>"
			}
		],
		"actions" : [
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "30",
						"rolls": "4",
						"die": "12",
						"modifier": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Deadly Leap", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>If the bulette jumps at least 15ft as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 STR or DEX saving throw (target's choice) or be knocked prone and take 14(3d6+4) bludgeoning damage plus 14(3d6+4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5ft out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is with in range, the creature instead falls prone in the bulette's space.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Bullywug",
		"imageSrc": "",
		"description": "<p>Life as a bullywug is nasty, brutish, and wet. These frogheaded amphibious humanoids must stay constantly moist, dwelling in rainy forests, marshes, and damp caves. Always hungry and thoroughly evil, bullywugs overwhelm opponents with superior numbers when they can, but they flee from serious threats to search for easier prey.</p><p>Bullywugs have green, gray, or mottled yellow skin that shifts through shades of gray, green, and brown, allowing them to blend in with their surroundings. They wear crude armor and wield simple weapons, and can deliver a powerful bite to foes that press too close.</p><p><strong>Foul Aristocracy.</strong> Bullywugs consider themselves the right and proper rulers of the swamps. They follow an etiquette of sorts when dealing with outsiders and each other, subject to the whims and fancies of their leader&mdash;a self-styled lord of the muck. Bullywugs introduce themselves with grand-sounding titles, make great shows of bowing and debasing themselves before their superiors, and endlessly vie to win their superiors' favor.</p><p>A bullywug has two ways to advance among its kind. It can either murder its rivals, though it must take pains to keep its criminal deeds secret, or it can find a treasure or magic item and present it as tribute or a token of obeisance to its liege. A bullywug that murders its rivals without cunning is likely to be executed, so it's more common for bullywugs to stage raids against caravans and settlements, with the goal of securing precious baubles to impress their lords and win their good graces. Invariably, such fine goods are reduced to filthy tatters through abuse and neglect. Once a gift loses its sheen, a bullywug lord invariably demands that its subjects bring it more treasure as tribute.</p><p><strong>Unruly Diplomacy.</strong> Bullywugs love nothing more than lording over those who trespass on their territories. Their warriors attempt to capture intruders rather than simply slaying them.</p><p>Captives are dragged before the king or queen&mdash;a bullywug of unusually large size&mdash;and forced to beg for mercy. Bribes, treasure, and flattery can trick the bullywug ruler into letting its captives go, but not before it tries to impress its \"guests\" with the majesty of its treasure and its realm. Struck with a deep inferiority complex, bullywug lords fancy themselves as kings and queens, but desperately crave the fear and respect of outsiders.</p><p><strong>Amphibian Allies.</strong> Bullywugs speak a language that allows them to communicate over large areas by croaking like frogs. News of intruders or other events in the swamp spread within minutes across this crude communication system.</p><p>Simple concepts in the language are understandable to frogs and toads. Bullywugs use this capability to form strong bonds with giant frogs, which they train as guardians and hunters. Larger specimens are sometimes used as mounts as well. The frogs' ability to swallow creatures whole provides a bullywug hunting band an easy means of carrying prey back to their villages.</p>",
		"size": "medium",
		"type": "humanoid",
		"tags" : ["bullywug"],
		"alignment": "neutral evil",
		"armorClass": "15",
		"armor" : ["hide armor","shield"],
		"hitPoints" : {
			"default": "11",
			"rolls": "2",
			"die": "8",
			"modifier": "2"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			},
			{
				"type": "swim", 
				"distance": "40"
			}
		],
		"strength": "12",
		"dexterity": "12",
		"constitution": "13",
		"intelligence": "7",
		"wisdom": "10",
		"charisma": "7",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "stealth", 
				"modifier": "3"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "", 
				"distance": "",
				"notes": ""
			}
		],
		"passivePerception": "10",
		"languages" : ["Bullywug"],
		"challengeRating": ".25",
		"specialTraits" : [
			{
				"name": "Amphibious", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The bullywug can breathe air and water.</p>"
			},
			{
				"name": "Speak with Frogs and Toads", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug.</p>"
			},
			{
				"name": "Swamp Camouflage", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The bullywug has advantage on DEX (Stealth) checks made to hide in swampy terrain.</p>"
			},
			{
				"name": "Standing Leap", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The bullywug's long jump is up to 20ft and its high jump is up to 10ft, with or without a running start.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The bullywug makes two melee attacks: one with its bite and one with its spear.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "3",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "4",
						"modifier": "1",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Spear", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "3",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "4",
						"rolls": "1",
						"die": "6",
						"modifier": "1",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "melee",
						"handed": "2",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "8",
						"modifier": "1",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "ranged",
						"handed": "",
						"reach": "20/60",
						"default": "4",
						"rolls": "1",
						"die": "6",
						"modifier": "1",
						"damageType": "piercing",
						"notes": ""
					},
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Cambion",
		"imageSrc": "",
		"description": "<p>A cambion is the offspring of a fiend (usually a succubus or incubus) and a humanoid (usually a human). Cambions inherit aspects of both parents, but their horns, leathery wings, and sinewy tails are hallmarks of their otherworldly parentage.</p><p><strong>Born to Be Bad.</strong> Cambions grow into ruthless adults whose wickedness and perversion horrifies even the most devoted mortal parent. Even as a youth, a cambion identifies its rightful place as an overlord of mortals. It might orchestrate uprisings in towns and cities, gathering gangs of humanoids and lesser devils to serve it.</p><p><strong>Pawns of the Mighty.</strong> A cambion forced to serve its fiendish parent does so out of admiration and dread, but also with the expectation that it will one day rise to a place of prominence. Cambions raised in the Nine Hells serve as soldiers, envoys, and personal attendants to greater devils. In the Abyss, a cambion carries only as much authority as it can muster through sheer strength and force of will.</p><p><strong>Spawn of Graz'zt.</strong> The demon lord Graz'zt is fond of procreating with humanoids who have made pacts with fiends, and he has sired many cambions who help him sow chaos across the multiverse. These cambions are characterized by charcoal-black skin, cloven hooves, sixfingered hands, and unearthly beauty.</p>",
		"size": "medium",
		"type": "fiend",
		"tags" : [""],
		"alignment": "any evil",
		"armorClass": "19",
		"armor" : ["scale mail"],
		"hitPoints" : {
			"default": "82",
			"rolls": "11",
			"die": "8",
			"modifier": "33"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			},
			{
				"type": "fly", 
				"distance": "60"
			}
		],
		"strength": "18",
		"dexterity": "18",
		"constitution": "16",
		"intelligence": "14",
		"wisdom": "12",
		"charisma": "16",
		"savingThrows" : [
			{
				"ability": "str", 
				"modifier": "7"
			},
			{
				"ability": "con", 
				"modifier": "6"
			},
			{
				"ability": "int", 
				"modifier": "5"
			},
			{
				"ability": "cha", 
				"modifier": "6"
			}
		],
		"skills" : [
			{
				"name": "deception", 
				"modifier": "6"
			},
			{
				"name": "intimidation", 
				"modifier": "6"
			},
			{
				"name": "perception", 
				"modifier": "4"
			},
			{
				"name": "stealth", 
				"modifier": "7"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","poison","bludgeoning","piercing","slashing"],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "14",
		"languages" : ["Abyssal","Common","Infernal"],
		"challengeRating": "5",
		"specialTraits" : [
			{
				"name": "Fiendish Blessing", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The AC of the cambion includes its CHA bonus.</p>"
			},
			{
				"name": "Innate Spellcasting", 
				"perDay": "", 
				"recharge": "",
				"ability": "cha",
				"dc": "14",
				"spell" : [
					{
						"rate": "3",
						"span": "day",
						"titles" : ["alter self","command","detect magic"]
					},
					{
						"rate": "1",
						"span": "day",
						"titles" : ["plane shift (self only)"]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The cambion makes two melee attacks or uses its Fire Ray twice.</p>"
			},
			{
				"name": "Spear", 
				"perDay": "", 
				"recharge": "",
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "8",
						"modifier": "4",
						"damageType": "piercing"
					},
					{
						"type": "ranged", 
						"reach": "20/60",
						"default": "7",
						"rolls": "1",
						"die": "6",
						"modifier": "4",
						"damageType": "piercing"
					},
					{
						"type": "plus", 
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"modifier": "",
						"damageType": "fire"
					}
				],
				"description": ""
			},
			{
				"name": "Fire Ray", 
				"perDay": "", 
				"recharge": "", 
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "ranged spell",
						"reach": "120",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"modifier": "",
						"damageType": "fire"
					}
				],
				"description": ""
			},
			{
				"name": "Fiendish Charm", 
				"perDay": "", 
				"recharge": "", 
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>One humanoid the cambion can see within 30ft of it must succeed on a DC 14 WIS saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Carrion Crawler",
		"imageSrc": "",
		"description": "<p>Carrion crawlers scour putrid flesh from carcasses and gobble the slimy bones that remain. They aggressively attack any creature that trespasses on their territory or disturbs their feasting.<p></p><strong>Carrion Eaters.</strong> A carrion crawler follows the scent of death to its food, but it prefers not to compete with other scavengers. These foul creatures thus hunker down in territories where death is plentiful and other carrion eaters have limited mobility. Caves, sewers, dungeons, and forested marshes are their favored lairs, but carrion crawlers are also drawn to battlefields and cemeteries.<p></p> A carrion crawler roams on the hunt, its tentacles probing the a ir for the scent of blood or decay. In tunnels or ruins, carrion crawlers scurry across the ceiling as they move toward food. In this way, they avoid contact with oozes, otyughs, and other dangerous inhabitants of the darkness, even as they surprise potential meals that don't think to look up.<p></p><strong>Patient Predators.</strong> Whether in subterranean darkness or while hunting at night, light signals a potential meal. A carrion crawler might follow a light source from a distance for hours, hoping to pick up the scent of blood. Despite their great size, carrion crawlers can also easily set up ambushes by waiting around blind corners for prey to come to them.<p></p> When facing potential prey or intruders, a carrion crawler lets its poison do the work. Once a victim goes rigiq wit~ paralysis, the carrion crawler wraps it with its tentacles and drags it away to a high ledge or isolated passageway, where it can be killed safely. The monster then resumes patrolling its territory while waiting for its meal to ripen.</p>",
		"size": "large",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "unaligned",
		"armorClass": "13",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "51",
			"rolls": "6",
			"die": "10",
			"modifier": "18"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			},
			{
				"type": "climb", 
				"distance": "30"
			}
		],
		"strength": "14",
		"dexterity": "13",
		"constitution": "16",
		"intelligence": "1",
		"wisdom": "12",
		"charisma": "5",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "3"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "13",
		"languages" : [""],
		"challengeRating": "2",
		"specialTraits" : [
			{
				"name": "Keen Smell", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell.</p>"
			},
			{
				"name": "Spider Climb", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The carrion crawler makes two attacks: one with its tentacles and one with its bite.</p>"
			},
			{
				"name": "Tentacles", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "8",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "4",
						"rolls": "1",
						"die": "4",
						"modifier": "2",
						"damageType": "poison",
						"notes": ""
					}
				],
				"description": "<p>the target must succeed on a DC 13 CON saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "2",
						"die": "4",
						"modifier": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Centaur",
		"imageSrc": "",
		"description": "<p>Reclusive wanderers and omen-readers of the wild, centaurs avoid conflict but fight fiercely when pressed. They roam the vast wilderness, keeping far from borders, laws, and the company of other creatures.</p><p><strong>Wilderness Nomads.</strong> Centaur tribes range across lands with mild to hot climates, where a centaur requires only light furs or oiled skins to deal with inclement weather. They are hunter-gatherers and rarely build shelters or even use tents.</p><p>Centaur migrations span continents and take decades to repeat, so that a centaur tribe might not retread the same path for generations. These long-ranging patterns can lead to conflict when centaurs encounter settlements of other creatures built along their traditional routes.</p><p><strong>Reluctant Settlers.</strong> A centaur that can't keep pace with the rest of its tribe is left behind. Some such centaurs vanish into the wilderness and are never seen again. Those that can bear the loss of their tribe might take up residence among other races. Frontier settlements value the nature knowledge of their centaur residents. Many such communities owe their survival to the insight and acumen of a centaur.</p><p>Despite their reclusive nature, centaurs trade with elves and with the caravans of other benevolent humanoids they meet during their wanderings. A trader might save the life of a wounded or an elderly centaur unfit for long travel, escorting it to a settlement where it can peacefully live out the rest of its days.</p>",
		"size": "large",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "neutral good",
		"armorClass": "12",
		"armor" : [""],
		"hitPoints" : {
			"default": "45",
			"rolls": "6",
			"die": "10",
			"modifier": "12"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "50"
			}
		],
		"strength": "18",
		"dexterity": "14",
		"constitution": "14",
		"intelligence": "9",
		"wisdom": "13",
		"charisma": "11",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "athletics", 
				"modifier": "6"
			},
			{
				"name": "perception", 
				"modifier": "3"
			},
			{
				"name": "survival", 
				"modifier": "3"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "", 
				"distance": "",
				"notes": ""
			}
		],
		"passivePerception": "13",
		"languages" : ["Elvish","Sylvan"],
		"challengeRating": "2",
		"specialTraits" : [
			{
				"name": "Charge", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If the centaur moves at least 30ft straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10(3d6) piercing damage.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.</p>"
			},
			{
				"name": "Pike", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "9",
						"rolls": "1",
						"die": "10",
						"modifier": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Hooves", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"modifier": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Longbow", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "ranged",
						"handed": "",
						"reach": "150/600",
						"default": "6",
						"rolls": "1",
						"die": "8",
						"modifier": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Chain Devil (Kyton)",
		"imageUrl": "",
		"description": "<p>This ominous fiend wears chains like a shroud. Driving lesser creatures before it with its fearsome gaze, a chain devil animates the chains that cover its body as well as inanimate chains nearby, which sprout hooks, blades, and spikes to eviscerate enemies.</p><p>Chain devils act as sadistic jailers and torturers in the infernal realms, relishing pain and living to inflict it on others. They are called on to torment mortal souls trapped in the Nine Hells, inflicting their sadistic fury on the horrid lemures in which those souls manifest.</p>",
		"size": "medium",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "16",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "85",
			"rolls": "10",
			"die": "8",
			"modifier": "40"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "18",
		"dexterity": "15",
		"constitution": "18",
		"intelligence": "11",
		"wisdom": "12",
		"charisma": "14",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "8",
		"specialTraits" : [
			{
				"name": "Devil's Sight", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": "<p>The devil makes two attacks with its chains.</p>"
			},
			{
				"name": "Chain", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "8",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"modifier": "4",
						"damageType": "slashing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "7",
						"rolls": "2",
						"die": "6",
						"modifier": "",
						"damageType": "piercing"
					}
				],
				"description": "<p>The target is grappled (DC 14 STR/DEX) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7(2d6) piercing damage at the start of each of its turns.</p>"
			},
			{
				"name": "Animate Chains", 
				"perDay": "", 
				"recharge": "short",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": "<p>Up to four chains the devil can see within 60ft of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.</p><p>Each animated chain is an object with AC 20, 20hp, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0hp or if the devil is incapacitated or dies.</p>"
			}
		],
		"reactions" : [
			{
				"name": "Unnerving Mask", 
				"description": "<p>When a creature the devil can see starts its turn within 30ft of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 WIS saving throw or be frightened until the end of its turn.</p>"
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Chasme",
		"imageSrc": "",
		"description": "<p>This loathsome demon resembles an unspeakable crossing of humanoid and fly. A chasme shuffles about on four spindly legs that can find purchase on walls and ceilings. A droning sound precedes the approach of a chasme, inflicting foes with a terrible lethargy that leaves them open to attack.</p><p>The lowly chasmes serve more powerful masters as interrogators or taskmasters. A chasme lives to dole out torture as punishment, and has a knack for spotting demons that have deserted their lords. Capturing and returning such traitors allows a chasme to torment the victim without fear of reprisal.</p>",
		"size": "large",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "15",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "84",
			"rolls": "13",
			"die": "10",
			"modifier": "13"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			},
			{
				"type": "fly", 
				"distance": "60"
			}
		],
		"strength": "15",
		"dexterity": "15",
		"constitution": "12",
		"intelligence": "11",
		"wisdom": "14",
		"charisma": "10",
		"savingThrows" : [
			{
				"ability": "dex", 
				"modifier": "5"
			},
			{
				"ability": "wis", 
				"modifier": "5"
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "5"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "15",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "6",
		"specialTraits" : [
			{
				"name": "Drone", 
				"perDay": "", 
				"recharge": "",
				"ability": "con",
				"dc": "12",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn with in 30ft of the chasme must succeed on a DC 12 CON saving throw or fall unconscious for 10 minutes. A creature that can't hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature's saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The chasme has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "Spider Climb", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>"
			}
		],
		"actions" : [
			{
				"name": "Proboscis", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "16",
						"rolls": "4",
						"die": "6",
						"modifier": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "24",
						"rolls": "7",
						"die": "6",
						"modifier": "",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"description": "<p>The target's hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature's hit point maximum to 0, the creature dies. This reduction to a creature's hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration.</p>"
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A chasme has a 30% chance of summoning one chasme. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Chimera",
		"imageSrc": "",
		"description": "<p>Chimeras were created after mortals summoned Demogorgon to the world. The Prince of Demons, unimpressed with the creatures that surrounded it, transformed them into horrific, multi-headed monstrosities. This act gave rise to the first chimeras.</p><p>Gifted with demonic cruelty, a chimera serves as a grim reminder of what happens when demon princes find their way to the Material Plane. A typical specimen has the hindquarters of a large goat, the forequarters of a lion, and the leathery wings of a dragon, along with the heads of all three of those creatures. The monster likes to surprise its victims, swooping down from the sky arid engulfing prey with its fiery breath before landing.</p><p><strong>Conflicted Creature.</strong> A chimera combines the worst aspects of its three parts. Its dragon head drives it to raid, plunder, and accumulate a great hoard. Its leonine nature compels it to hunt and kill powerful creatures that threaten its territory. Its goat head grants it a vicious, stubborn streak that compels it to fight to the death.</p><p>These three aspects drive a chimera to stake out a territory that is as large as 10 miles wide. It preys on wild game, viewing more powerful creatures as rivals to be humiliated and defeated. Its greatest rivals are dragons, griffons, manticores, perytons, and wyverns.</p><p>When it hunts, the chimera looks for easy ways to amuse itself. It enjoys the fear and suffering of weaker creatures. The monster often toys with its prey, breaking off an attack prematurely and leaving a creature wounded and terrified before returning to finish it off.<strong>Servant of Evil.</strong> Though chimeras are far from cunning, their draconic ego makes them susceptible to flattery and gifts. If offered food and treasure, a chimera might spare a traveler. A villain can lure a chimera into service by keeping it well fed and its treasure hoard well stocked.</p>",
		"size": "large",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "chaotic evil",
		"armorClass": "14",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "114",
			"rolls": "12",
			"die": "10",
			"modifier": "48"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			},
			{
				"type": "fly", 
				"distance": "60"
			}
		],
		"strength": "19",
		"dexterity": "11",
		"constitution": "19",
		"intelligence": "3",
		"wisdom": "14",
		"charisma": "10",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "8"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "18",
		"languages" : ["Draconic (can't speak)"],
		"challengeRating": "6",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"modifier": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Horns", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "1",
						"die": "12",
						"modifier": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Claws", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"modifier": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Fire Breath", 
				"perDay": "", 
				"recharge": "5-6",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 DEX saving throw, taking 31(7d8) fire damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Chuul",
		"imageSrc": "",
		"description": "<p>Survivors of the ancient aboleth empire, chuuls are crustaceans the aboleths modified and endowed with sentience. They follow the ingrained directives of their creators, as they have done since the dawn of time.</p><p><strong>Primeval Relics.</strong> In the primeval ages, aboleths ruled a vast empire that spanned the oceans of the world. In those days, the aboleths used mighty magic and bent the minds of the nascent creatures of the mortal realm.</p><p>However, they were bound to the water and could not enforce their will beyond it without servants. Therefore, they created chuuls.</p><p>Perfectly obedient, the chuuls collected sentient creatures and magic at the aboleths' command. Chuuls were designed to endure the ages of the world, growing in size and strength as the eons passed. When the aboleths' empire crumbled with the rise of the gods, the chuuls were cast adrift. However, these creatures continue to do what they did for the aboleths, slowly collecting humanoids, gathering treasure, amassing magic, and consolidating power.</p><p><strong>Tireless Guardians.</strong> Chuul still guard the ruins of the ancient aboleth empire. They linger in silent observance of eons-old commands. Rumors and ancient maps sometimes lure treasure seekers to these ruins, but the reward for their boldness is death.</p><p>Whatever riches that the explorers bring with them adds to the hoard guarded by the chuuls. Chuuls can sense magic at a distance. This sense couples with an innate drive that leads them to slay explorers, take their gear, and bury it in secret locales aboleths dictated eons ago.</p><p><strong>Waiting Servants.</strong> Although the aboleths' ancient empire fell long ago, the psychic bonds between them and their created servants remain intact. Chuuls that come into contact with aboleths immediately assume their old roles. Such chuuls redirect their compulsions to the service of the aboleths' sinister purposes.</p>",
		"size": "large",
		"type": "aberration",
		"tags" : [""],
		"alignment": "chaotic evil",
		"armorClass": "16",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "93",
			"rolls": "11",
			"die": "10",
			"modifier": "33"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			},
			{
				"type": "swim", 
				"distance": "30"
			}
		],
		"strength": "19",
		"dexterity": "10",
		"constitution": "16",
		"intelligence": "5",
		"wisdom": "11",
		"charisma": "5",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "4"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "14",
		"languages" : ["Deep Speech (can't speak)"],
		"challengeRating": "4",
		"specialTraits" : [
			{
				"name": "Sense Magic", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The chuul senses magic within 120ft of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.</p>"
			},
			{
				"name": "Pincer", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"modifier": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": "<p>The target is grappled (escape DC 14 STR/DEX) if it is a large or smaller creature and the chuul doesn't have two other creatures grappled.</p>"
			},
			{
				"name": "Tentacles", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>One creature grappled by the chuul must succeed on a DC 13 CON saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Cloaker",
		"imageSrc": "",
		"description": "<p>Cloakers earned their names for the resemblance they bear to dark leathery cloaks. Lurking in remote dungeons and caves, these stealthy predators wait to slay lone or injured prey stumbling through the darkness.</p><p><strong>Camouflaged Lurkers.</strong> Like a stingray, a cloaker's body is composed of cartilage and muscle. With its tail and fins unfurled, it flies through darkness and lurks among the shadows of caverns the same way a stingray glides through water and hides on the ocean floor. Parallel rows of round, black eyespots run along its back like buttons, and the ivory-colored claws on its cowl resemble bone clasps.</p><p>When a cloaker unfurls and moves to attack, it reveals its pale underside and makes its true nature evident. Red eyes glow above rows of sharp teeth, and a long pendulous tail whips behind it.</p><p><strong>Opportunistic Predators.</strong> When hunting, cloakers glide through the shadows at a safe distance behind groups of other creatures traversing the Underdark. They follow parties of humanoids to prey on the wounded after a battle, or pursue herds of Underdark beasts, attacking the sick, the weak, or the straggling.</p><p>Cloakers strike quickly and consume their meals as swiftly as possible, enveloping and devouring their victims. While it feeds, a cloaker uses its swift, whiplike tail for defense, although it rarely takes a stand against dangerous foes or groups of creatures. As an added defense, cloakers can create illusory duplicates of themselves.</p><p><strong>Haunting Moan.</strong> Cloakers' thoughts are alien to other life-forms, and they communicate with one another through subsonic moans inaudible to most creatures. At higher intensities, a cloaker's haunting moan becomes audible, evoking sensations of doom and dread in creatures that hear it.</p><p><strong>Cloaker Conclaves.</strong> Cloakers prefer isolation, but they sometimes convene with other cloakers for defense or to exchange information about new dangers, suitable hunting grounds, or developments that might affect their habitats. When this convergence is compiete, the cloakers separate again.</p>",
		"size": "large",
		"type": "aberration",
		"tags" : [""],
		"alignment": "chaotic neutral",
		"armorClass": "14",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "78",
			"rolls": "12",
			"die": "10",
			"modifier": "12"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "10"
			},
			{
				"type": "fly", 
				"distance": "40"
			}
		],
		"strength": "17",
		"dexterity": "15",
		"constitution": "12",
		"intelligence": "13",
		"wisdom": "12",
		"charisma": "14",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "stealth", 
				"modifier": "5"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : ["Deep Speech","Undercommon"],
		"challengeRating": "8",
		"specialTraits" : [
			{
				"name": "Damage Transfer", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half.</p>"
			},
			{
				"name": "False Appearance", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.</p>"
			},
			{
				"name": "Light Sensitivity", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While in bright light, the cloaker has disadvantage on attack rolls and WIS(perception) checks that rely on sight.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The cloaker makes two attacks: one with its bite and one with its tail.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"modifier": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": "<p>If the target is large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5ft of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 STR check.</p>"
			},
			{
				"name": "Tail", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "7",
						"rolls": "1",
						"die": "8",
						"modifier": "3",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Moan", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>Each creature within 60ft of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 WIS saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.</p>"
			},
			{
				"name": "Phantasms", 
				"perDay": "", 
				"recharge": "short",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.</p><p>Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.</p><p>A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Cockatrice",
		"imageSrc": "",
		"description": "<p>The cockatrice looks like a hideous hybrid of lizard, bird, and bat, and it is infamous for its ability to turn flesh to stone. These omnivores have a diet that consists of berries, nuts, flowers, and small animals such as insects, mice, and frogs&mdash;things they can swallow whole. They would be no threat to anything else if not for their fierce and frenzied response to even a hint of danger. A cockatrice flies into the face of any threat, squawking and madly beating its wings as its head darts out to peck. The smallest scratch from a cockatrice's beak can spell doom as its victim slowly turns to stone from the injury.</p>",
		"size": "small",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "unaligned",
		"armorClass": "11",
		"armor" : [""],
		"hitPoints" : {
			"default": "27",
			"rolls": "6",
			"die": "6",
			"modifier": "6"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			},
			{
				"type": "fly", 
				"distance": "40"
			}
		],
		"strength": "6",
		"dexterity": "12",
		"constitution": "12",
		"intelligence": "2",
		"wisdom": "13",
		"charisma": "5",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : [""],
		"challengeRating": ".5",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "3",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "4",
						"modifier": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": "<p>the target must succeed on a DC 11 CON saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Couatl",
		"imageSrc": "",
		"description": "<p>Couatls are benevolent serpentine beings of great intellect and insight. Their brilliantly colored wings and gentle manner speak to their celestial origins.</p><p><strong>Divine Caretakers.</strong> Couatls were created as guardians and caretakers by a benevolent god not worshiped since the dawn of time, and which is forgotten now by all but the couatls themselves. Most of the divine mandates given to these beings are long since fulfilled or failed. However, a number of couatls still watch over ancient power, await fulfillment of prophecy, or safeguard the heirs of creatures they once guided and protected. Regardless of a couatl's task, it prefers to remain hidden, revealing itself only as a last resort.</p><p><strong>Truth Tellers.</strong> A couatl can't lie, but it can withhold information, answer questions vaguely, or allow others to jump to the wrong conclusions if doing so is necessary to protect something, to keep promises, or to hide the secret of its existence.</p><p><strong>Ancient and Few.</strong> A couatl can live for ages without sustenance, even surviving without air, but these creatures can die of disease or the passage of time. A couatl can sense its end up to a century beforehand, but it has no insight into the manner of its demise.</p><p>If a couatl has already accomplished what it set out to do, it accepts its fate. However, if its imminent death endangers the completion of its goals, it actively seeks out another couatl with which to produce offspring.</p><p>The mating ritual of couatls is a beautiful and elaborate dance of magic and light, which results in a gem-like egg from which a new couatl hatches. The parent that sought out the mate raises the newborn couatl and instructs it as to its duties, so that it can complete whatever task the parent leaves unfinished.</p>",
		"size": "medium",
		"type": "celestial",
		"tags" : [""],
		"alignment": "lawful good",
		"armorClass": "19",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "97",
			"rolls": "13",
			"die": "8",
			"modifier": "39"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			},
			{
				"type": "fly", 
				"distance": "90"
			}
		],
		"strength": "16",
		"dexterity": "20",
		"constitution": "17",
		"intelligence": "18",
		"wisdom": "20",
		"charisma": "18",
		"savingThrows" : [
			{
				"ability": "con", 
				"modifier": "5"
			},
			{
				"ability": "wis", 
				"modifier": "7"
			},
			{
				"ability": "cha", 
				"modifier": "6"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["radiant"],
		"damageImmunities" : ["psychic","bludgeoning","piercing","slashing"],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "truesight", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "15",
		"languages" : ["All","Telepathy 120ft"],
		"challengeRating": "4",
		"specialTraits" : [
			{
				"name": "Innate Spellcasting", 
				"perDay": "", 
				"recharge": "", 
				"ability": "cha",
				"dc": "14",
				"spell" : [
					{
						"rate": "at will",
						"span": "",
						"titles" : ["detect evil and good","detect magic","detect thoughts"]
					},
					{
						"rate": "3",
						"span": "day",
						"titles" : ["bless","create food and water","cure wounds","lesser restoration","protection from poison","sanctuary","shield"]
					},
					{
						"rate": "1",
						"span": "day",
						"titles" : ["dream","greater restoration","scrying"]
					}
				],
				"description": ""
			},
			{
				"name": "Magic Weapons", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The couatl's weapon attacks are magical</p>"
			},
			{
				"name": "Shielded Mind", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.</p>"
			}
		],
		"actions" : [
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "8",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "6",
						"modifier": "5",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Constrict", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"modifier": "3",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": "<p>Medium or smaller targets are grappled (escape DC 15 STR/DEX). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.</p>"
			},
			{
				"name": "Change Shape", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).</p><p>In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, STR, DEX, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Crawling Claw",
		"imageSrc": "",
		"description": "<p>Crawling claws are the severed hands of murderers animated by dark magic so that they can go on killing. Wizards and warlocks of a dark bent use crawling claws as extra hands in their labors.</p><p><strong>Magical Origins.</strong> Through dark necromantic rituals, the life force of a murderer is bound to its severed hand, haunting and animating it. If a dead murderer's spirit already manifests as another undead creature, if the murderer is raised from death, or if the spirit has long passed on to another plane, the ritual fails.</p><p>The ritual invoked to create a crawling claw works best with a hand recently severed from a murderer. To this end, ritualists and their servants frequent public executions to gain possession of suitable hands, or make bargains with assassins and torturers.</p><p><strong>Creator's Control.</strong> A crawling claw can't be turned, nor can it be controlled by spells that control undead. These foul monsters are entirely bound to the will of their creator, which can concentrate on a claw in sight to mentally command its every action. If the crawling claw's creator doesn't command it, the claw follows its last command to the best of its ability.</p><p>Commands given to a crawling claw must be simple. A claw can't be tasked with finding and killing a particular person, because its limited senses and intelligence prevent it from tracking and picking out specific individuals. However, a command to kill all creatures in a particular locale works. A crawling claw can easily feel out the contours of keys and doorknobs, crawling from room to room on a blind killing spree.</p><p><strong>Malign Intelligence.</strong> A crawling claw possesses little of the intellect and memories of the individual of which it was once a living part. The hate, jealousy, or greed that drove that person to murder lingers on, however, amplified by the claw's torturous fragmented state. Left to its own devices, a crawling claw imitates and recreates the same murderous acts it committed in life.</p><p><strong>Living Claws.</strong> If a crawling claw is animated from the severed hand of a still-living murderer, the ritual binds the claw to the murderer's soul. The disembodied hand can then return to its former limb, its undead flesh knitting to the living arm from which it was severed.</p><p>Made whole again, the murderer acts as though the hand had never been severed and the ritual had never taken place. When the crawling claw separates again, the living body falls into a coma. Destroying the crawling claw while it is away from the body kills the murderer. However, killing the murderer has no effect on the crawling claw.</p><p><strong>Undead Nature.</strong> A crawling claw doesn't require air, food, drink, or sleep.</p>",
		"size": "tiny",
		"type": "undead",
		"tags" : [""],
		"alignment": "neutral evil",
		"armorClass": "12",
		"armor" : [""],
		"hitPoints" : {
			"default": "2",
			"rolls": "1",
			"die": "4",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			},
			{
				"type": "climb", 
				"distance": "20"
			}
		],
		"strength": "13",
		"dexterity": "14",
		"constitution": "11",
		"intelligence": "5",
		"wisdom": "10",
		"charisma": "4",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["charmed","exhaustion","poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "30",
				"notes": "blind beyond this radius"
			}
		],
		"passivePerception": "10",
		"languages" : ["Common (can't speak)"],
		"challengeRating": "0",
		"specialTraits" : [
			{
				"name": "Turn Immunity", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The claw is immune to effects that turn undead.</p>"
			}
		],
		"actions" : [
			{
				"name": "Claw", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "3",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "4",
						"modifier": "1",
						"damageType": "bludgeoning/slashing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Cyclops",
		"imageSrc": "",
		"description": "<p>Cyclopes are one-eyed giants that eke out a meager existence in wild lands. Isolationists by nature, they avoid contact with other races and try to drive away strangers in their territory.</p><p><strong>Nonreligious.</strong> Legends claim that the cyclopes are the spawn of one of the gods of the giants, but these creatures pay little heed to any deities. They see little benefit in prayer and dislike ritual, which they perceive as complex and foreign. However, a cyclops that gains direct benefit from some site of divine power, or which is threatened by a supernatural force or creature, will pay homage as long as the benefit or threat remains.</p><p><strong>Unsophisticated.</strong> Though they are reasonably intelligent, cyclopes live simple, reclusive lives, keeping herds of animals for food. They prefer to dwell alone or in small family groups, lairing in caves, ruins, or rough structures of dry stone construction they build themselves. A cyclops keeps its herd animals with it at night, sealing the entrance to its home with boulders to let it serve double duty as a barn.</p><p>A cyclops lairs within a day's journey of other cyclopes, so that they can meet to trade goods or seek mates. They craft weapons and tools of wood and stone, but will use metal when they can find it. Although cyclopes understand the Giant tongue, they write nothing and speak little, using grunts and gestures for their interactions with each other.</p><p>Cyclopes don't use money for trade, but they value gold, shells, and other glittering and colorful objects as jewelry. A cyclops might wear a necklace strung with feathers and silver coins, but also with pewter goblets, cutlery, and other bits of ruined metal.</p><p><strong>Unwise.</strong> Cyclopes aren't great thinkers or strategists. Slow to learn and bound to their traditional ways, they find innovation difficult. Although they are a terrifying threat in combat due to their size and strength, they can often be tricked by clever foes.</p><p>Cyclopes can be cowed and awed by obvious displays of magic. Rustics with little exposure to magic, they can be deceived into mistaking a warlock, cleric, or other caster for a powerful divine figure. However, their sense of pride causes them to react with vengeful, bloodthirsty violence once they learn that the individual they assumed was a \"god\" is a mere mortal.</p>",
		"size": "huge",
		"type": "giant",
		"tags" : [""],
		"alignment": "chaotic neutral",
		"armorClass": "14",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "138",
			"rolls": "12",
			"die": "12",
			"modifier": "60"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "22",
		"dexterity": "11",
		"constitution": "20",
		"intelligence": "8",
		"wisdom": "6",
		"charisma": "10",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "", 
				"distance": "",
				"notes": ""
			}
		],
		"passivePerception": "8",
		"languages" : ["Giant"],
		"challengeRating": "6",
		"specialTraits" : [
			{
				"name": "Poor Depth Perception", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The cyclops has disadvantage on any attack roll against a target more than 30ft away.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The cyclops makes two greatclub attacks.</p>"
			},
			{
				"name": "Greatclub", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "9",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "19",
						"rolls": "3",
						"die": "8",
						"modifier": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Rock", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "9",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/120",
						"default": "28",
						"rolls": "4",
						"die": "10",
						"modifier": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Darkmantle",
		"imageSrc": "",
		"description": "<p>A darkmantle clings to cavern ceilings, remaining perfectly still as it waits for creatures to pass beneath it. From a distance, it can pass itself off as a stalactite or a lump of stone. Then it drops from the ceiling and unfurls, surrounding itself with magical darkness as it engulfs and crushes its prey.</p><p>Darkmantles are found throughout the Underdark, but they are equally common on the Shadowfell. Thriving in that dark realm, they fill an ecological niche similar to bats on the Material Plane. Intelligent creatures of the Shadowfell sometimes train darkmantles as guardians or companions.</p>",
		"size": "small",
		"type": "monstrosity",
		"tags" : [""],
		"alignment": "unaligned",
		"armorClass": "11",
		"armor" : [""],
		"hitPoints" : {
			"default": "22",
			"rolls": "5",
			"die": "6",
			"modifier": "5"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "10"
			},
			{
				"type": "fly", 
				"distance": "30"
			}
		],
		"strength": "16",
		"dexterity": "12",
		"constitution": "13",
		"intelligence": "2",
		"wisdom": "10",
		"charisma": "5",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "stealth", 
				"modifier": "3"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : [""],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "10",
		"languages" : [""],
		"challengeRating": ".5",
		"specialTraits" : [
			{
				"name": "Echolocation", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The darkmantle can't use its blindsight while deafened.</p>"
			},
			{
				"name": "False Appearance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.</p>"
			}
		],
		"actions" : [
			{
				"name": "Crush", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "6",
						"modifier": "3",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": "<p>On a successful hit, the darkmantle attaches to the target. If the target is medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.</p><p>While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.</p><p>A creature can detach the darkmantle by making a successful DC 13 STR check as an action. On its turn, the darkmantle can detach itself from the target by using 5ft of movement.</p>"
			},
			{
				"name": "Darkness Aura", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A 15ft radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Death Knight",
		"imageSrc": "",
		"description": "<p>When a paladin that falls from grace dies without seeking atonement, dark powers can transform the once-mortal knight into a hateful undead creature. A death knight is a skeletal warrior clad in fearsome plate armor. Beneath its helmet, one can see the knight's skull with malevolent pinpoints of light burning in its eye sockets.</p><p><strong>Eldritch Power.</strong> The death knight retains the ability to cast divine spells. However, no death knight can use its magic to heal. A death knight also attracts and commands lesser undead, although death knights that serve powerful fiends might have fiendish followers instead. Death knights often use warhorse skeletons and nightmares as mounts.</p><p><strong>Immortal Until Redeemed.</strong> A death knight can arise anew even after it has been destroyed. Only when it atones for a life of wickedness or finds redemption can it finally escape its undead purgatory and truly perish.</p>",
		"size": "medium",
		"type": "undead",
		"tags" : [""],
		"alignment": "chaotic evil",
		"armorClass": "20",
		"armor" : ["plate","shield"],
		"hitPoints" : {
			"default": "180",
			"rolls": "19",
			"die": "8",
			"modifier": "95"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "20",
		"dexterity": "11",
		"constitution": "20",
		"intelligence": "12",
		"wisdom": "16",
		"charisma": "18",
		"savingThrows" : [
			{
				"ability": "dex", 
				"modifier": "6"
			},
			{
				"ability": "wis", 
				"modifier": "9"
			},
			{
				"ability": "cha", 
				"modifier": "10"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["necrotic","poison"],
		"conditionImmunities" : ["exhaustion","frightened","poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "13",
		"languages" : ["Abyssal","Common"],
		"challengeRating": "17",
		"specialTraits" : [
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The death knight has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "Marshal Undead", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>Unless the death knight is incapacitated, it and undead creatures of its choice within 60ft of it have advantage on saving throws against features that turn undead.</p>"
			},
			{
				"name": "Spellcasting", 
				"perDay": "", 
				"recharge": "",
				"ability": "cha",
				"dc": "18",
				"spell" : [
					{
						"rate": "4",
						"span": "slots",
						"titles" : ["command","compelled duel","searing smite"]
					},
					{
						"rate": "3",
						"span": "slots",
						"titles" : ["hold person","magic weapon"]
					},
					{
						"rate": "3",
						"span": "slots",
						"titles" : ["dispel magic","elemental weapon"]
					},
					{
						"rate": "3",
						"span": "slots",
						"titles" : ["banishment","staggering smite"]
					},
					{
						"rate": "2",
						"span": "slots",
						"titles" : ["destructive wave (necrotic)"]
					}
				],
				"description": "<p>The death knight is a 19th-level spell caster. It has +10 to hit with spell attacks.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The death knight makes three longsword attacks.</p>"
			},
			{
				"name": "Longsword", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "11",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "9",
						"rolls": "1",
						"die": "8",
						"modifier": "5",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "melee",
						"handed": "2",
						"reach": "5",
						"default": "10",
						"rolls": "1",
						"die": "10",
						"modifier": "5",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "18",
						"rolls": "4",
						"die": "8",
						"modifier": "",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Hellfire Orb", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The death knight hurls a magical ball of fire that explodes at a point it can see within 120ft of it. Each creature in a 20ft radius sphere centered on that point must make a DC 18 DEX saving throw. The sphere spreads around corners. A creature takes 35(10d6) fire damage and 35(10d6) necrotic damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions" : [
			{
				"name": "Parry", 
				"description": "<p>The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon.</p>"
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Death Tyrant",
		"imageSrc": "",
		"description": "<p>On rare occasions, a beholder's sleeping mind drifts to places beyond its normal madness, imagining a reality in which it exists beyond death. When such dreams take hold, a beholder can transform, its flesh sloughing away to leave a death tyrant behind. This monster possesses the cunning and much of the magic it had in life, but it is fueled by the power of undeath.</p><p>A death tyrant appears as a massive, naked skull, with a pinpoint of red light gleaming in its hollow eye socket. With its eyestalks rotted away, ten spectral eyes hover above the creature and glare in all directions.</p><p><strong>Deathly Despot.</strong> As they did when they were beholders, death tyrants lord their power over other creatures. Moreover, a beholder's ability to quash magical energy with its central eye gives way to a more sinister power in a death tyrant, which can transform former slaves and enemies into undead servants.</p><p>Zombies created by a death tyrant are used and discarded as needed. They stand guard at the entrances to the death tyrant's lair or guard its treasure vaults. Acting as bait for traps or as combat fodder, Zombies keep powerful enemies distracted while the death tyrant moves into position and prepares to destroy them.</p><p><strong>Armies of the Dead.</strong> A death tyrant that embraces undeath becomes an engine of destruction. Driven by a hunger for power and security, it advances against humanoid settlements, using its eye rays to destroy every creature it encounters, then building an army of undead. If left unchecked, a death tyrant might wipe out the population of a city in weeks, then set its undead eye on wider conquest. As each settlement falls, the death tyrant's zombie forces build to overwhelming numpers.</p><p><strong>Undead Nature.</strong> A death tyrant doesn't require air, food, drink, or sleep.</p>",
		"size": "large",
		"type": "undead",
		"tags" : ["beholder"],
		"alignment": "lawful evil",
		"armorClass": "19",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "187",
			"rolls": "25",
			"die": "10",
			"modifier": "50"
		},
		"speed" : [
			{
				"type": "fly (hover)", 
				"distance": "20"
			}
		],
		"strength": "10",
		"dexterity": "14",
		"constitution": "14",
		"intelligence": "19",
		"wisdom": "15",
		"charisma": "19",
		"savingThrows" : [
			{
				"ability": "str", 
				"modifier": "5"
			},
			{
				"ability": "con", 
				"modifier": "7"
			},
			{
				"ability": "int", 
				"modifier": "9"
			},
			{
				"ability": "wis", 
				"modifier": "7"
			},
			{
				"ability": "cha", 
				"modifier": "9"
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "12"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["charmed","exhaustion","paralyzed","petrified","poisoned","prone"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "22",
		"languages" : ["Deep Speech, Undercommon"],
		"challengeRating": "14",
		"specialTraits" : [
			{
				"name": "Negative Energy Cone", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the tyrant decides which way the cone faces and whether the cone is active.</p><p>Any creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed.</p>"
			}
		],
		"actions" : [
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "4",
						"die": "6",
						"modifier": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "Eye Rays",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The death tyrant shoots three of the following magical eye rays at random (1d10 reroll duplicates), choosing one to three targets it can see within 120ft of it:</p><p><ol><li><strong>Charm Ray.</strong> The targeted creature must succeed on a DC 17 WIS saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.</li><li><strong>Paralyzing Ray.</strong> The targeted creature must succeed on a DC 17 CON saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Fear Ray.</strong> The targeted creature must succeed on a DC 17 WIS saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Slowing Ray.</strong> The targeted creature must succeed on a DC 17 DEX saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not bofh. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Enervation Ray.</strong> The targeted creature must make a DC 17 CON saving throw, taking 36(8d8) necrotic damage on a failed save, or half as much damage on a successful one.</li><li><strong>Telekinetic Ray.</strong> If the target is a creature, it must succeed on a DC 17 STR saving throw or the beholder moves it up to 30ft in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.<br><br>If the target is an object weighing 300lbs or less that isn't being worn or carried, it is moved up to 30ft in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.</li><li><strong>Sleep Ray.</strong> The targeted creature must succeed on a DC 17 WIS saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.</li><li><strong>Petrification Ray.</strong> The targeted creature must make a DC 17 DEX saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.</li><li><strong>Disintegration Ray.</strong> If the target is a creature, it must succeed on a DC 17 DEX saving throw or take 45(10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.<br><br>If the target is a large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a huge or larger object or creation of magical force, this ray disintegrates a 10ft cube of it.</li><li><strong>Death Ray.</strong> The targeted creature must succeed on a DC 17 DEX saving throw or take 55(10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points.</li></ol></p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "Eye Ray", 
				"description": "<p>The beholder uses one random eye ray.</p>"
			}
		],
		"lair" : {
			"description": "<p>A death tyrant's lair is usually the same site it held as a beholder, but it contains more trappings of death and decay. A death tyrant encountered in its lair has a challenge rating of 15.</p>",
			"initiative": "20 (losing ties)",
			"actionDc": "",
			"actions" : [
				"An area that is a 50-foot cube within 120ft of the tyrant is filled with spectral eyes and tentacles. To creatures other than the death tyrant, that area is lightly obscured and difficult terrain until initiative count 20 on the next round.",
				"Walls sprout spectral appendages until initiative count 20 on the round after next. Any creature, including one on the Ethereal Plane, that is hostile to the tyrant and starts its turn within 10ft of a wall must succeed on a DC 17 DEX saving throw or be grappled. Escaping requires a successful DC 17 STR(athletics) or DEX(acrobatics) check.",
				"A spectral eye opens in the air at a point within 50ft of the tyrant. One random eye ray of the tyrant shoots from that eye, which is considered to be an ethereal source, at a target of the tyrant's choice. The eye then closes and disappears."
			],
			"restrictions": "The death tyrant can't repeat an effect until all three have been used, and it can't use the same effect on consecutive rounds.",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [
				"Creatures within 1 mile of the tyrant's lair sometimes feel as if they're being watched even when they aren't.",
				"When a creature hostile to the tyrant and aware of its existence finishes a long rest within 1 mile of the tyrant's lair, roll a d20 for that creature. On a roll of 10 or lower, the creature is subjected to one random eye ray of the tyrant."
			],
			"recovery" : {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "Demilich",
		"imageSrc": "",
		"description": "<p>The immortality granted to a lich lasts only as long as it feeds mortal souls to its phylactery. If it falters or fails in that task, its bones turn to dust until only its skull remains. This \"demilich\" contains only a fragment of the lich's malevolent life force&mdash;just enough so that if it is disturbed, these remains rise into the air and assume a wraithlike form. The skull then emits a terrifying howl that can slay the weak-hearted and leave others trembling with fear. Left alone, it sinks back down and returns to the empty peace of its existence.</p><p>Few liches seek to become demiliches, for it means an end to the existence they hoped to preserve by becoming undead. However, time can erode the lich's reason and memory, causing it to retreat into its ancient tomb and forget to feed on souls. The spells it once knew fade from its mind, and it no longer channels the arcane energy it wielded as a lich. However, even as a mere skull it remains a deadly and vexing enemy.</p><p><strong>Enduring Existence.</strong> Even after a lich is reduced to a demilich state, its phylactery survives. As long as its phylactery is intact, the demilich can't be permanently destroyed. Its skull reforms after 1d10 days, restoring the creature to its wretched state. If it has the presence of mind to do so, a demilich can reclaim its former power by feeding just one soul to its phylactery. Doing so restores the demilich to lich form, reconstituting its undead body.</p><p><strong>Undead Nature.</strong> A demilich doesn't require air, food, drink, or sleep. So great is a demilich's will to survive that it always has the maximum number of hit points for its Hit Dice, instead of average hit points.</p>",
		"size": "tiny",
		"type": "undead",
		"tags" : [""],
		"alignment": "neutral evil",
		"armorClass": "20",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "80",
			"rolls": "20",
			"die": "4",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "fly (hover)", 
				"distance": "30"
			}
		],
		"strength": "1",
		"dexterity": "20",
		"constitution": "10",
		"intelligence": "20",
		"wisdom": "17",
		"charisma": "20",
		"savingThrows" : [
			{
				"ability": "con", 
				"modifier": "6"
			},
			{
				"ability": "int", 
				"modifier": "11"
			},
			{
				"ability": "wis", 
				"modifier": "9"
			},
			{
				"ability": "cha", 
				"modifier": "11"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["bludgeoning","piercing","slashing"],
		"damageImmunities" : ["necrotic","poison","psychic","bludgeoning","piercing","slashing"],
		"conditionImmunities" : ["charmed","deafened","exhaustion","frightened","paralyzed","petrified","poisoned","prone","stunned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "truesight", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "13",
		"languages" : [""],
		"challengeRating": "18",
		"specialTraits" : [
			{
				"name": "Avoidance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.</p>"
			},
			{
				"name": "Legendary Resistance", 
				"perDay": "3", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If the demilich fails a saving throw, it can choose to succeed instead.</p>"
			},
			{
				"name": "Turn Immunity", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The demilich is immune to effects that turn undead.</p>"
			}
		],
		"actions" : [
			{
				"name": "Howl", 
				"perDay": "", 
				"recharge": "5-6",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The demilich emits a bloodcurdling howl. Each creature within 30ft of the demilich that can hear the howl must succeed on a DC 15 CON saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn.</p>"
			},
			{
				"name": "Life Drain", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The demilich targets up to three creatures that it can see within 10ft of it. Each target must succeed on a DC 19 Constitution saving throw or take 21(6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "Flight", 
				"description": "<p>The demilich flies up to half its flying speed.</p>"
			},
			{
				"name": "Cloud of Dust", 
				"description": "<p>The demilich magically swirls its dusty remains. Each creature within 10ft of the demilich, including around a corner, must succeed on a DC 15 CON saving throw or be blinded until the end of the demilich's next turn. A creature that succeeds on the saving throw is immune to this effect until the end of the demilich's next turn.</p>"
			},
			{
				"name": "Energy Drain (costs 2 actions)", 
				"description": "<p>Each creature with in 30ft of the demilich must make a DC 15 CON saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10(3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with the greater restoration spell or similar magic.</p>"
			},
			{
				"name": "Vile Curse (costs 3 actions)", 
				"description": "<p>The demilich targets one creature it can see within 30ft of it. The target must succeed on a DC 15 WIS saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success.</p>"
			}
		],
		"lair" : {
			"description": "<p>A demilich hides its earthly remains and treasures in a labyrinthine tomb guarded by monsters and traps. At the heart of this labyrinth rests the demilich's skull and the dust from its other bones.</p><p>In its crypt, a demilich has access to lair actions and plus uses for its legendary actions. Its whole lair also has unique traits. A demilich in its lair has a challenge rating of 20.</p>",
			"initiative": "20 (losing ties)",
			"actionDc": "11",
			"actions" : [
				"The tomb trembles violently for a moment. Each creature on the floor of the tomb must succeed on a DC 19 DEX saving throw or be knocked prone.",
				"The demilich targets one creature it can see within 60ft of it. An antimagic field fills the space of the target, moving with it until initiative count 20 on the next round.",
				"The demilich targets any number of creatures it can see within 30ft of it. No target can regain hit points until initiative count 20 on the next round."
			],
			"restrictions": "",
			"traits" : [
				"The first time a non-evil creature enters the tomb's area, the creature takes 16(3d10) necrotic damage.",
				"Monsters in the tomb have advantage on saving throws against being charmed or frightened, and against features that turn undead.",
				"The tomb is warded against the magical travel of creatures the demilich hasn't authorized. Such creatures can't teleport into or out of the tomb's area or use planar travel to enter or leave it. Effects that allow teleportation or planar travel work within the tomb as long as they aren't used to leave or enter the tomb's area."
			],
			"recovery" : {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Deva",
		"imageSrc": "",
		"description": "<p>Devas are angels that act as divine messengers or agents to the Material P lane, the Shadowfell, and the Feywild and that can assume a form appropriate to the realm they are sent to.</p><p>Legend tells of angels that take mortal form for years, lending aid, hope, and courage to good hearted folk. A deva can take any shape, although it prefers to appear to mortals as an innocuous humanoid or animal. When circumstances require that it cast off its guise, a deva is a beautiful humanoid-like creature with silvery skin. Its hair and eyes gleam with an unearthly luster, and large feathery wings unfurl from its shoulder blades.</p>",
		"size": "medium",
		"type": "celestial",
		"tags" : ["angel"],
		"alignment": "lawful good",
		"armorClass": "17",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "136",
			"rolls": "16",
			"die": "8",
			"modifier": "64"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}, 
			{
				"type": "fly", 
				"distance": "90"
			}
		],
		"strength": "18",
		"dexterity": "18",
		"constitution": "18",
		"intelligence": "17",
		"wisdom": "20",
		"charisma": "20",
		"savingThrows" : [
			{
				"ability": "wis", 
				"modifier": "9"
			},
			{
				"ability": "cha", 
				"modifier": "9"
			}
		],
		"skills" : [
			{
				"name": "insight", 
				"modifier": "7"
			},
			{
				"name": "perception", 
				"modifier": "9"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["radiant","bludgeoning","piercing","slashing"],
		"damageImmunities" : [""],
		"conditionImmunities" : ["charmed","exhaustion","frightened"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "19",
		"languages" : ["All","Telepathy 120ft"],
		"challengeRating": "10",
		"specialTraits" : [
			{
				"name": "Angelic Weapons", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack).</p>"
			},
			{
				"name": "Innate Spellcasting", 
				"perDay": "", 
				"recharge": "",
				"ability": "cha",
				"dc": "17",
				"spell" : [
					{
						"rate": "at will",
						"span": "",
						"titles" : ["detect evil and good"]
					},
					{
						"rate": "",
						"span": "",
						"titles" : ["commune","raise dead"]
					}
				], 
				"description": ""
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The deva has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The deva makes two melee attacks.</p>"
			},
			{
				"name": "Mace", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "8",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "6",
						"modifier": "4",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "5",
						"default": "18",
						"rolls": "4",
						"die": "8",
						"modifier": "",
						"damageType": "radiant",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Healing Touch", 
				"perDay": "3", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The deva touches another creature. The target magically regains 20(4d8+2) hit points and is freed from any curse, disease, poison, blindness, or deafness.</p>"
			},
			{
				"name": "Change Shape", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).</p><p>In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, STR, DEX, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Dretch",
		"imageSrc": "",
		"description": "<p>Dretches are among the weakest of demons&mdash;repulsive, self-loathing creatures doomed to spend eternity in a state of perpetual discontent. Their low intelligence makes dretches unsuitable for anything but the simplest tasks. However, what they lack in potential, they make up for in sheer malice. Dretches mill about in mobs, voicing their displeasure as an unsettling din of hoots, snarls, and grunts.</p>",
		"size": "small",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "11",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "18",
			"rolls": "4",
			"die": "6",
			"modifier": "4"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			}
		],
		"strength": "11",
		"dexterity": "11",
		"constitution": "12",
		"intelligence": "5",
		"wisdom": "8",
		"charisma": "3",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "9",
		"languages" : ["Abyssal", "Telepathy 60ft"],
		"challengeRating": ".25",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The dretch makes two attacks: one with its bite and one with its claws.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "2",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"modifier": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Claws", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "2",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "2",
						"die": "4",
						"modifier": "",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Fetid Cloud", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A 10ft radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 CON saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Erinyes",
		"imageUrl": "",
		"description": "",
		"size": "",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "",
			"rolls": "",
			"die": "",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": ""
			}
		],
		"strength": "",
		"dexterity": "",
		"constitution": "",
		"intelligence": "",
		"wisdom": "",
		"charisma": "",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Flying Sword",
		"imageSrc": "",
		"description": "<p>A flying sword dances through the air, fighting with the confidence of a warrior that can't be injured. Swords are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even selfloading crossbows are also known to exist in animated object form.</p>",
		"size": "small",
		"type": "construct",
		"tags" : ["animated"],
		"alignment": "unaligned",
		"armorClass": "17",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "17",
			"rolls": "5",
			"die": "6",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "fly", 
				"distance": "50"
			}
		],
		"strength": "12",
		"dexterity": "15",
		"constitution": "11",
		"intelligence": "1",
		"wisdom": "3",
		"charisma": "1",
		"savingThrows" : [
			{
				"ability": "dex", 
				"modifier": "4"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["poison","psychic"],
		"conditionImmunities" : ["blinded","charmed","deafened","frightened","paralyzed","petrified","poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "60",
				"notes": "blind beyond this radius"
			}
		],
		"passivePerception": "7",
		"languages" : [""],
		"challengeRating": ".25",
		"specialTraits" : [
			{
				"name": "Antimagic Susceptibility", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The sword is incapacitated while in the area of an anti-magic field. if targeted by dispel magic, the sword must succeed on a CON saving throw against the caster's spell save DC or fall unconscious for 1 minute.</p>"
			},
			{
				"name": "False Appearance", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.</p>"
			}
		],
		"actions" : [
			{
				"name": "Longsword", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "3",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "8",
						"modifier": "1",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Glabrezu",
		"imageSrc": "",
		"description": "<p>A glabrezu takes great pleasure in destroying mortals through temptation, and these creatures are among the few demons to offer their service to creatures foolish enough to summon them.</p><p>Although glabrezus are devastating in combat, they prefer to tempt victims into ruin, using power or wealth as a lure. Engaging in guile, trickery, and evil bargains, a glabrezu hoards riches that it uses to fulfill promises to shortsighted summoners and weak-willed mortals. However, if its attempts to entice or deceive fail, a glabrezu has the strength to fight and win.</p>",
		"size": "large",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "17",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "157",
			"rolls": "15",
			"die": "10",
			"modifier": "75"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			}
		],
		"strength": "20",
		"dexterity": "15",
		"constitution": "21",
		"intelligence": "19",
		"wisdom": "17",
		"charisma": "16",
		"savingThrows" : [
			{
				"ability": "str", 
				"modifier": "9"
			},
			{
				"ability": "con", 
				"modifier": "9"
			},
			{
				"ability": "wis", 
				"modifier": "7"
			},
			{
				"ability": "cha", 
				"modifier": "7"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "truesight", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "13",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "9",
		"specialTraits" : [
			{
				"name": "Innate Spellcasting", 
				"perDay": "", 
				"recharge": "",
				"ability": "int",
				"dc": "16",
				"spell" : [
					{
						"rate": "at will",
						"span": "",
						"titles" : ["darkness","detect magic","dispel magic"]
					},
					{
						"rate": "1",
						"span": "day",
						"titles" : ["confusion","fly","power word stun"]
					}
				],
				"description": ""
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The glabrezu has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.</p>"
			},
			{
				"name": "Pincer", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "9",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "16",
						"rolls": "2",
						"die": "10",
						"modifier": "5",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": "<p>If the target is a medium or smaller creature, it is grappled (DC 15 STR/DEX). The glabrezu has two pincers, each of which can grapple only one target.</p>"
			},
			{
				"name": "Fist", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "9",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "2",
						"die": "4",
						"modifier": "2",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A glabrezu has a 30% chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Goristro",
		"imageSrc": "",
		"description": "<p>The goristro resembles a fiendish minotaur towering more than twenty feet tall. When controlled by a demon lord, goristros make formidable living siege engines and prized pets. Goristros possess preternatural cunning when navigating labyrinthine passages and shifting corridors, pursuing foes in a terrifying hunt.</p><p>A hulking goristro sometimes bears a palanquin, carrying smaller demons on its broad shoulders, much like an elephant carries riders on its back.</p>",
		"size": "huge",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "19",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "310",
			"rolls": "23",
			"die": "12",
			"modifier": "161"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			}
		],
		"strength": "25",
		"dexterity": "11",
		"constitution": "25",
		"intelligence": "6",
		"wisdom": "13",
		"charisma": "14",
		"savingThrows" : [
			{
				"ability": "str", 
				"modifier": "13"
			},
			{
				"ability": "dex", 
				"modifier": "6"
			},
			{
				"ability": "con", 
				"modifier": "13"
			},
			{
				"ability": "wis", 
				"modifier": "7"
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "7"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "17",
		"languages" : ["Abyssal"],
		"challengeRating": "17",
		"specialTraits" : [
			{
				"name": "Charge", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>If the goristro moves at least 15ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38(7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 STR saving thow or be pushed up to 20ft away and knocked prone.</p>"
			},
			{
				"name": "Labyrinthine Recall", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The goristro can perfectly recall any path it has traveled.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The goristro has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "Siege Monster", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The goristro deals double damage to objects and structures.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The goristro makes three attacks: two with its fists and one with its hoof.</p>"
			},
			{
				"name": "Fist", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "13",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "20",
						"rolls": "3",
						"die": "8",
						"modifier": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": "<p>If the target is a creature, it must succeed on a DC 21 STR saving throw or be knocked prone.</p>"
			},
			{
				"name": "Hoof", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "13",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "23",
						"rolls": "3",
						"die": "10",
						"modifier": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Gore", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "13",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "45",
						"rolls": "7",
						"die": "10",
						"modifier": "7",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Hezrou",
		"imageSrc": "",
		"description": "<p>Hezrous serve as foot soldiers in the demonic hordes of the Abyss. Although physically powerful, they are weakminded and hezrous can easily be duped into sacrificing themselves by more powerful demons. As they press their attacks into the heart of an enemy's forces, their foul stench can sicken even the toughest foes.</p>",
		"size": "large",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "16",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "136",
			"rolls": "13",
			"die": "10",
			"modifier": "65"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "19",
		"dexterity": "17",
		"constitution": "20",
		"intelligence": "5",
		"wisdom": "12",
		"charisma": "13",
		"savingThrows" : [
			{
				"ability": "str", 
				"modifier": "7"
			},
			{
				"ability": "con", 
				"modifier": "8"
			},
			{
				"ability": "wis", 
				"modifier": "4"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "8",
		"specialTraits" : [
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The hezrou has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "Stench", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>Any creature that starts its turn within 10ft of the hezrou must succeed on a DC 14 CON saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The hezrou makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"modifier": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Claw", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "7",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"modifier": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A hezrou has a 30% chance of summoning 2d6 dretches or one hezrou. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Horned Devil (Malebranche)",
		"imageUrl": "",
		"description": "",
		"size": "",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "",
			"rolls": "",
			"die": "",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": ""
			}
		],
		"strength": "",
		"dexterity": "",
		"constitution": "",
		"intelligence": "",
		"wisdom": "",
		"charisma": "",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Ice Devil (Gelugon)",
		"imageUrl": "",
		"description": "",
		"size": "",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "",
			"rolls": "",
			"die": "",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": ""
			}
		],
		"strength": "",
		"dexterity": "",
		"constitution": "",
		"intelligence": "",
		"wisdom": "",
		"charisma": "",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Imp",
		"imageUrl": "",
		"description": "",
		"size": "",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "",
			"rolls": "",
			"die": "",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": ""
			}
		],
		"strength": "",
		"dexterity": "",
		"constitution": "",
		"intelligence": "",
		"wisdom": "",
		"charisma": "",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Lemure",
		"imageUrl": "",
		"description": "",
		"size": "",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "",
			"rolls": "",
			"die": "",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": ""
			}
		],
		"strength": "",
		"dexterity": "",
		"constitution": "",
		"intelligence": "",
		"wisdom": "",
		"charisma": "",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Manes",
		"imageUrl": "",
		"description": "<p>Souls of evil creatures that descend to the Lower Planes are transformed into manes&mdash;the lowest form of demonkind. These wretched fiends attack any nondemon they see, and they are called to the Material Plane by those seeking to sow death and chaos.</p><p>Orcus, the Prince of Undeath, has the power to transform manes into undead monsters, most often ghouls and shadows. Other demon lords feed on manes, destroying them utterly. Otherwise, killing a manes causes it to dissipate into a cloud of reeking vapor that reforms into another manes after one day.</p>",
		"size": "small",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "9",
		"armor" : [""],
		"hitPoints" : {
			"default": "9",
			"rolls": "2",
			"die": "6",
			"modifier": "2"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			}
		],
		"strength": "10",
		"dexterity": "9",
		"constitution": "13",
		"intelligence": "3",
		"wisdom": "8",
		"charisma": "4",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold, fire, lightning"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["charmed","frightened","poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "60",
				"notes": ""
			}
		],
		"passivePerception": "9",
		"languages" : ["Abyssal (can't speak)"],
		"challengeRating": ".125",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Claws", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "2",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "2",
						"die": "4",
						"modifier": "",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Marilith",
		"imageUrl": "",
		"description": "<p>Terrible to behold, a marilith has the lower body of a great serpent and the upper torso of a humanoid female with six arms.</p><p>Wielding a wicked blade in each of its six hands, a marilith is a devastating foe that few can match in battle. These demons possess keen minds and a finely honed sense of tactics, and they are able to lead and unite other demons in common cause. Mariliths are often encountered as captains at the head of a demonic horde, where they embrace any opportunity to rush headlong into battle.</p>",
		"size": "large",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "18",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "189",
			"rolls": "18",
			"die": "10",
			"modifier": "90"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			}
		],
		"strength": "18",
		"dexterity": "20",
		"constitution": "20",
		"intelligence": "18",
		"wisdom": "16",
		"charisma": "20",
		"savingThrows" : [
			{
				"attribute": "str", 
				"modifier": "9"
			},
			{
				"attribute": "con", 
				"modifier": "10"
			},
			{
				"attribute": "wis", 
				"modifier": "8"
			},
			{
				"attribute": "cha", 
				"modifier": "10"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "truesight", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "13",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "16",
		"specialTraits" : [
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The marilith has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "Magic Weapons", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The marilith's weapon attacks are magical.</p>"
			},
			{
				"name": "Reactive", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The marilith can take one reaction on every turn in a combat.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The marilith makes seven attacks: six with its longswords and one with its tail.</p>"
			},
			{
				"name": "Longsword", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "9",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "8",
						"modifier": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Tail", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "9",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"modifier": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": "<p>If the target is medium or smaller, it is grappled (DC 19 STR/DEX). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets.</p>"
			},
			{
				"name": "Teleport", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120ft to an unoccupied space it can see.</p>"
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A marilith has a 5O% chance of summoning ld6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or 1 one marilith. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "Parry", 
				"description": "<p>The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.</p>"
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Nalfeshnee",
		"imageUrl": "",
		"description": "<p>The nalfeshnee is one of the most grotesque demons&mdash;a corpulent mockery of ape and boar standing twice the height of a human, with feathered wings that seem too small for its bloated body. These brutish features conceal a remarkable intelligence and cunning.</p><p>Nalfeshnees are devastating in combat, using their wings to soar above the front ranks and reach vulnerable adversaries that can be dispatched with little effort. From the thick of battle, they telepathically bellow commands to lesser demons, even as they inspire a sense of dread that forces their foes to scatter and run.</p><p>Nalfeshnees feed on hatred and despair, but they crave humanoid flesh above all else. They keep their larders filled with humanoids abducted from the Material Plane, then eat those creatures alive during elaborate feasts. Thinking of themselves as refined and cultured, nalfeshnees employ stained and rusted cutlery when they dine.</p>",
		"size": "large",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "18",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "184",
			"rolls": "16",
			"die": "10",
			"modifier": "96"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			},
			{
				"type": "fly", 
				"distance": "30"
			}
		],
		"strength": "21",
		"dexterity": "10",
		"constitution": "22",
		"intelligence": "19",
		"wisdom": "12",
		"charisma": "15",
		"savingThrows" : [
			{
				"attribute": "con", 
				"modifier": "11"
			},
			{
				"attribute": "int", 
				"modifier": "9"
			},
			{
				"attribute": "wis", 
				"modifier": "6"
			},
			{
				"attribute": "cha", 
				"modifier": "7"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "truesight", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "13",
		"specialTraits" : [
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The nalfeshnee has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "10",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "32",
						"rolls": "5",
						"die": "10",
						"modifier": "5",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Claw", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "10",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "3",
						"die": "6",
						"modifier": "15",
						"damageType": "",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Horror Nimbus", 
				"perDay": "", 
				"recharge": "5-6",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 WIS saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours.</p>"
			},
			{
				"name": "Teleport", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120ft to an unoccupied space it can see.</p>"
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A nalfeshnee has a 5O% chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Needle Blight",
		"imageSrc": "",
		"description": "<p>In the shadows of a forest, needle blights might be taken at a distance for shuffling, hunched humanoids. Up close, these creatures reveal themselves as horrid plants whose conifer-like needles grow across their bodies in quivering clumps. A needle blight lashes out with these needles or launches them as an aerial assault that can punch through armor and flesh.</p><p>When needle blights detect a threat, they loose a pollen that the wind carries to other needle blights throughout the forest. Alerted to their foes' location, needle blights converge from all sides to drench their roots in blood.</p>",
		"size": "medium",
		"type": "plant",
		"tags" : ["blight"],
		"alignment": "neutral evil",
		"armorClass": "12",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "11",
			"rolls": "2",
			"die": "8",
			"modifier": "2"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			}
		],
		"strength": "12",
		"dexterity": "12",
		"constitution": "13",
		"intelligence": "4",
		"wisdom": "8",
		"charisma": "3",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : ["blinded","deafened"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "60",
				"notes": "blind beyond this radius"
			}
		],
		"passivePerception": "9",
		"languages" : ["Common (can't speak)"],
		"challengeRating": ".25",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Claws", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "3",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "2",
						"die": "4",
						"modifier": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Needles", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "3",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/60",
						"default": "8",
						"rolls": "2",
						"die": "6",
						"modifier": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Pit Fiend",
		"imageUrl": "",
		"description": "",
		"size": "",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "",
			"rolls": "",
			"die": "",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": ""
			}
		],
		"strength": "",
		"dexterity": "",
		"constitution": "",
		"intelligence": "",
		"wisdom": "",
		"charisma": "",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Planetar",
		"imageSrc": "",
		"description": "<p>Planetars act as the weapons of the gods they serve, presenting a tangible representation of their deities' might. A planetar can call down rain to relieve a drought, or can loose an insect plague to devour crops. A planetar's celestial ears detect every falsehood, and its radiant eyes see through every deception.</p><p>Planetars are muscular and hairless and have opalescent green skin and white-feathered wings. They tower over most humanoids, brandishing immense swords with grace. Sometimes sent to aid powerful mortals on important tasks for good, planetars are especially fond of missions that involve battling fiends.</p>",
		"size": "large",
		"type": "celestial",
		"tags" : ["angel"],
		"alignment": "lawful good",
		"armorClass": "19",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "100",
			"rolls": "16",
			"die": "10",
			"modifier": "112"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			}, 
			{
				"type": "fly", 
				"distance": "120"
			}
		],
		"strength": "24",
		"dexterity": "20",
		"constitution": "24",
		"intelligence": "19",
		"wisdom": "22",
		"charisma": "25",
		"savingThrows" : [
			{
				"ability": "con", 
				"modifier": "12"
			},
			{
				"ability": "wis", 
				"modifier": "11"
			},
			{
				"ability": "cha", 
				"modifier": "12"
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "11"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["radiant","bludgeoning","piercing","slashing"],
		"damageImmunities" : [""],
		"conditionImmunities" : ["charmed","exhaustion","frightened"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "truesight", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "21",
		"languages" : ["all","Telepathy 120ft"],
		"challengeRating": "16",
		"specialTraits" : [
			{
				"name": "Angelic Weapons", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack).</p>"
			},
			{
				"name": "Innate Spellcasting", 
				"perDay": "", 
				"recharge": "", 
				"ability": "cha",
				"dc": "20",
				"spell" : [
					{
						"rate": "at will",
						"span": "",
						"titles" : ["detect evil and good","invisibility (self only)"]
					},
					{
						"rate": "3",
						"span": "day",
						"titles" : ["blade barrier","dispel evil and good","flame strike","raise dead"]
					},
					{
						"rate": "1",
						"span": "day",
						"titles" : ["commune","control weather","insect plague"]
					}
				],
				"description": ""
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The planetar has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The planetar makes two melee attacks.</p>"
			},
			{
				"name": "Greatsword", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "12",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "21",
						"rolls": "4",
						"die": "6",
						"modifier": "7",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "22",
						"rolls": "5",
						"die": "8",
						"modifier": "",
						"damageType": "radiant",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Healing Touch", 
				"perDay": "4", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The planetar touches another creature. The target magically regains 30(6d8+3) hit points and is freed from any curse, disease, poison, blindness, or deafness.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Quasit",
		"imageUrl": "",
		"description": "<p>Quasits infest the Lower Planes. Physically weak, they keep to the shadows to plot mischief and wickedness. More powerful demons use quasits as spies and messengers when they aren't devouring them or pulling them apart to pass the time.</p><p>A quasit can assume animal forms, but in its true form it looks like a 2ft-tall green humanoid with a barbed tail and horns. The quasit has clawed fingers and toes, and these claws can deliver an irritating poison. It prefers to be invisible when it attacks.</p>",
		"size": "small",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "13",
		"armor" : [""],
		"hitPoints" : {
			"default": "7",
			"rolls": "3",
			"die": "4",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			}
		],
		"strength": "5",
		"dexterity": "17",
		"constitution": "10",
		"intelligence": "7",
		"wisdom": "10",
		"charisma": "10",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "10",
		"languages" : ["Abyssal","Common"],
		"challengeRating": "1",
		"specialTraits" : [
			{
				"name": "Shapechanger", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The quasit can use its action to polymorph into a beast form that resembles a bat (walk 10ft, fly 40ft), a centipede (walk 40ft, climb 40ft), or a toad (walk 40ft, swim 40ft), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The quasit has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "Familiar", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10ft of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond.</p>"
			}
		],
		"actions" : [
			{
				"name": "Claws (Bite in Beast Form)", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "4",
						"modifier": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": "<p>The target must succeed on a DC 10 CON saving throw or take 5(2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "Scare", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>One creature of the quasit's choice within 20ft of it must succeed on a DC 10 WIS saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.</p>"
			},
			{
				"name": "Invisibility", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell) . Any equipment the quasit wears or carries is invisible with it.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Rug of Smothering",
		"imageSrc": "",
		"description": "<p>Would-be thieves and careless heroes arrive at the doorsteps of an enemy's abode, eyes and ears alert for traps, only to end their quest prematurely as the rugs beneath their feet animate and smother them to death. A rug of smothering can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasant's hovel. Creatures with the ability to sense magic detect the rug's false magical aura.</p><p>In some cases, a rug of smothering is disguised as a carpet of flying or another beneficial magic item. However, a character who stands or sits on the rug, or who attempts to utter a word of command, is quickly trapped as the rug of smothering rolls itself tightly around its victim.</p>",
		"size": "large",
		"type": "construct",
		"tags" : ["animated"],
		"alignment": "unaligned",
		"armorClass": "12",
		"armor" : [""],
		"hitPoints" : {
			"default": "33",
			"rolls": "6",
			"die": "10",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "10"
			}
		],
		"strength": "17",
		"dexterity": "14",
		"constitution": "10",
		"intelligence": "1",
		"wisdom": "3",
		"charisma": "1",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": "" 
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : ["poison","psychic"],
		"conditionImmunities" : ["blinded","charmed","deafened","frightened","paralyzed","petrified","poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "60",
				"notes": "blind beyond this radius"
			}
		],
		"passivePerception": "6",
		"languages" : [""],
		"challengeRating": "2",
		"specialTraits" : [
			{
				"name": "Antimagic Susceptibility", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				], 
				"description": "<p>The rug is incapacitated while in the area of an anti-magic field. If targeted by dispel magic, the rug must succeed on a CON saving throw against the caster's spell save DC or fall unconscious for 1 minute.</p>"
			},
			{
				"name": "Damage Transfer", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.</p>"
			},
			{
				"name": "False Appearance", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While the rug remains motionless, it is indistinguishable from a normal rug.</p>"
			}
		],
		"actions" : [
			{
				"name": "Smother", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "grappled",
						"notes": ""
					}
				],
				"description": "<p>Until this grapple ends (escape DC 13 STR/DEX), the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10(2d6+3) bludgeoning damage.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Shadow Demon",
		"imageUrl": "",
		"description": "<p>When a demon's body is destroyed but the fiend is prevented from reforming in the Abyss, its essence sometimes takes on a vague physical form. These shadow demons exist outside the normal abyssal hierarchy, since their creation results most often from mortal magic, not from transformation or promotion.</p><p>Shadow demons all but disappear in the darkness, and they can creep about without making a sound. A shadow demon uses its insubstantial claws to feast on its victim's fears, to taste its memories, and drink in its doubts. Bright light harries this fiend and shows its distinct shape, resolving it from a blur of darkness to a winged humanoid creature whose lower body trails off into nothing, and whose claws rend a victim's mind.</p><p><strong>Shadowy Nature.</strong> A shadow demon doesn't require air, food, drink, or sleep.</p>",
		"size": "medium",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "13",
		"armor" : [""],
		"hitPoints" : {
			"default": "66",
			"rolls": "12",
			"die": "8",
			"modifier": "12"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			},
			{
				"type": "fly", 
				"distance": "30"
			}
		],
		"strength": "1",
		"dexterity": "17",
		"constitution": "12",
		"intelligence": "14",
		"wisdom": "13",
		"charisma": "14",
		"savingThrows" : [
			{
				"attribute": "dex", 
				"modifier": "5"
			},
			{
				"attribute": "cha", 
				"modifier": "4"
			}
		],
		"skills" : [
			{
				"name": "stealth", 
				"modifier": "7"
			}
		],
		"damageVulnerabilities" : ["radiant"],
		"damageResistances" : ["acid","fire","necrotic","thunder","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["cold","lightning","poison"],
		"conditionImmunities" : ["exhaustion","grappled","paralyzed","petrified","poisoned","prone","restrained"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "4",
		"specialTraits" : [
			{
				"name": "Incorporeal Movement", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The demon can move through other creatures and objects as if they were difficult terrain. It takes 5(1d10) force damage if it ends its turn inside an object.</p>"
			},
			{
				"name": "Light Sensitivity", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While in bright light, the demon has disadvantage on attack rolls, as well as on WIS(Perception) checks that rely on sight.</p>"
			},
			{
				"name": "Shadow Stealth", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While in dim light or darkness, the demon can take the Hide action as a bonus action.</p>"
			}
		],
		"actions" : [
			{
				"name": "Claws", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "5",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"modifier": "3",
						"damageType": "psychic",
						"notes": ""
					}
				],
				"description": "<p>If the demon has advantage on the attack roll it does 17(4d6+3) psychic damage.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Solar",
		"imageSrc": "",
		"description": "<p>A solar is godlike in its glory and power. On the battlefield, the solar's sword flies into the fray on its own, and a single arrow from a solar's bow can strike a target dead on contact. So great is a solar's celestial might that even demon princes shrink at its resonant commands.</p><p>It is said that only twenty-four solars exist. The few solars that are known are stewards of specific deities. The others rest in a state of contemplation, waiting for the time when their services are needed to stave off some cosmic threat to the cause of good.</p>",
		"size": "large",
		"type": "celestial",
		"tags" : ["angel"],
		"alignment": "lawful good",
		"armorClass": "21",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "243",
			"rolls": "18",
			"die": "10",
			"modifier": "144"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "50"
			}, 
			{
				"type": "fly", 
				"distance": "150"
			}
		],
		"strength": "26",
		"dexterity": "22",
		"constitution": "26",
		"intelligence": "25",
		"wisdom": "25",
		"charisma": "30",
		"savingThrows" : [
			{
				"ability": "int", 
				"modifier": "14"
			},
			{
				"ability": "wis", 
				"modifier": "14"
			},
			{
				"ability": "cha", 
				"modifier": "17"
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "14"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["radiant","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["necrotic","poison"],
		"conditionImmunities" : ["charmed","exhaustion","frightened","poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "truesight", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "24",
		"languages" : ["all","Telepathy 120ft"],
		"challengeRating": "21",
		"specialTraits" : [
			{
				"name": "Angelic Weapons", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack).</p>"
			},
			{
				"name": "Divine Awareness", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The solar knows if it hears a lie.</p>"
			},
			{
				"name": "Innate Spellcasting", 
				"perDay": "", 
				"recharge": "", 
				"ability": "cha",
				"dc": "25",
				"spell" : [
					{
						"rate": "at will",
						"span": "",
						"titles" : ["detect evil and good","invisibility (self only)"]
					},
					{
						"rate": "3",
						"span": "day",
						"titles" : ["blade barrier","dispel evil and good","resurrection"]
					},
					{
						"rate": "1",
						"span": "day",
						"titles" : ["commune","control weather"]
					}
				],
				"description": ""
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The solar has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The solar makes two greatsword attacks.</p>"
			},
			{
				"name": "Greatsword", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "15",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "22",
						"rolls": "4",
						"die": "6",
						"modifier": "8",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "27",
						"rolls": "6",
						"die": "8",
						"modifier": "",
						"damageType": "radiant",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Slaying Longbow", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "13",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "ranged",
						"handed": "",
						"reach": "120/600",
						"default": "15",
						"rolls": "2",
						"die": "8",
						"modifier": "6",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "27",
						"rolls": "6",
						"die": "8",
						"modifier": "",
						"damageType": "radiant",
						"notes": ""
					}
				],
				"description": "<p>If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 CON saving throw or die.</p>"
			},
			{
				"name": "Flying Sword", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The solar releases its greatsword to hover magically in an unoccupied space within 5ft of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50ft and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.</p>"
			},
			{
				"name": "Healing Touch", 
				"perDay": "4", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The solar touches another creature. The target magically regains 40(8d8+4) hit points and is freed from any curse, disease, poison, blindness, or deafness.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "Teleport", 
				"description": "<p>The solar magically teleports, along with any equipment it is wearing or carrying, up to 120ft to an unoccupied space it can see.</p>"
			},
			{
				"name": "Searing Burst", 
				"description": "<p>The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 DEX saving throw, taking 14(4d6) fire damage + 14(4d6) radiant damage on a failed save, or half as much damage on a successful one.<br>(Costs 2 Actions)</p>"
			},
			{
				"name": "Blinding Gaze", 
				"description": "<p>The solar targets one creature it can see within 30ft. If the target can see it, the target must succeed on a DC 15 CON saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.<br>(Costs 3 Actions)</p>"
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Spectator",
		"imageSrc": "",
		"description": "<p>A spectator is a lesser beholder that is summoned from another plane of existence by a magical ritual, the components of which include four beholder eyestalks that are consumed by the ritual's magic. Appropriately, a spectator has four eyes talks, two on each side of the wide eye at the center of its four-foot diameter body.</p><p><strong>Magical Guardians.</strong> A summoned spectator guards a location or a treasure of its summoner's choice for 101 years, allowing no creature but its summoner to enter the area or access the item, unless the summoner instructed otherwise. If the item is stolen or destroyed before the years have all passed, a summoned spectator vanishes. It otherwise never abandons its post.</p><p><strong>Glimmers of Madness.</strong> Though it can speak, a spectator communicates primarily by way of telepathy. It is civil while on guard, openly discussing its orders and its summoner. However, even a brief conversation with a spectator is enough to reveal quirks in its personality brought on by its years of isolation. It might invent imaginary enemies, refer to itself in the third person, or try to adopt the voice of its summoner.</p><p>Like any beholder, a spectator views itself as the epitome of its kind, and it has an intense hatred of other spectators. If two spectators encounter one another, they almost always fight to the death.</p><p><strong>Freed from Service.</strong> When a spectator has fulfilled its service, it is free to do as it pleases. Many take up residence in the places they previously guarded, especially if their summoners have died. With the spectator's loss of purpose, the flickers of madness it displayed during its servitude flourish.</p>",
		"size": "medium",
		"type": "aberration",
		"tags" : ["beholder"],
		"alignment": "lawful neutral",
		"armorClass": "14",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "39",
			"rolls": "6",
			"die": "8",
			"modifier": "12"
		},
		"speed" : [
			{
				"type": "fly (hover)", 
				"distance": "30"
			}
		],
		"strength": "8",
		"dexterity": "14",
		"constitution": "14",
		"intelligence": "13",
		"wisdom": "14",
		"charisma": "11",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "perception", 
				"modifier": "6"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : ["prone"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "16",
		"languages" : ["Deep Speech, Undercommon, Telepathy 120ft"],
		"challengeRating": "3",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "Bite", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "1",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "2",
						"rolls": "1",
						"die": "6",
						"modifier": "-1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Eye Rays", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The spectator shoots up to two of the following magical eye rays at random (1d4 reroll duplicates) at one or two creatures it can see within 90ft of it. It can use each ray only once on a turn.</p><p><ol><li><strong>Confusion Ray.</strong> The target must succeed on a DC 13 WIS saving throw, or it can't take reactions until the end of its next turn. On its turn, the target can't move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can't attack, it does nothing on its turn.</li><li><strong>Paralyzing Ray.</strong> The target must succeed on a DC 13 CON saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Fear Ray.</strong> The target must succeed on a DC 13 WIS saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success.</li><li><strong>Wounding Ray.</strong> The target must make a DC 13 CON saving throw, taking 16(3d10) necrotic damage on a failed save, or half as much damage on a successful one.</li><ol></p>"
			},
			{
				"name": "Create Food and Water", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The spectator magically creates enough food and water to sustain itself for 24 hours.</p>"
			}
		],
		"reactions" : [
			{
				"name": "Spell Reflection", 
				"description": "<p>If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30ft of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature.</p>"
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Spined Devil (Spinagon)",
		"imageUrl": "",
		"description": "",
		"size": "",
		"type": "fiend",
		"tags" : ["devil"],
		"alignment": "lawful evil",
		"armorClass": "",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "",
			"rolls": "",
			"die": "",
			"modifier": ""
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": ""
			}
		],
		"strength": "",
		"dexterity": "",
		"constitution": "",
		"intelligence": "",
		"wisdom": "",
		"charisma": "",
		"savingThrows" : [
			{
				"attribute": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","bludgeoning (nonmagical/unsilvered attack)","piercing (nonmagical/unsilvered attack)","slashing (nonmagical/unsilvered attack)"],
		"damageImmunities" : ["fire","poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "",
		"languages" : ["Infernal","Telepathy 120ft"],
		"challengeRating": "",
		"specialTraits" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": ""
			}
		],
		"actions" : [
			{
				"name": "", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Twig Blight",
		"imageSrc": "",
		"description": "<p>Twig blights can root in soil, which they do when living prey are scarce. While rooted, they resemble woody shrubs. When it pulls its roots free of the ground to move, a twig blight's branches twist together to form a humanoid-looking body with a head and limbs.</p><p>Twig blights seek out campsites and watering holes, rooting there to set up ambushes for potential victims coming to drink or rest. Huddled together in groups, twig blights blend in with an area's natural vegetation or with piles of debris or firewood.</p><p>Given how dry they are, twig blights are particularly susceptible to fire.</p>",
		"size": "small",
		"type": "plant",
		"tags" : ["blight"],
		"alignment": "neutral evil",
		"armorClass": "13",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "4",
			"rolls": "1",
			"die": "6",
			"modifier": "1"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "20"
			}
		],
		"strength": "6",
		"dexterity": "13",
		"constitution": "12",
		"intelligence": "4",
		"wisdom": "8",
		"charisma": "3",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "stealth", 
				"modifier": "3"
			}
		],
		"damageVulnerabilities" : ["fire"],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : ["blinded","deafened"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "60",
				"notes": "blind beyond this radius"
			}
		],
		"passivePerception": "9",
		"languages" : ["Common (can't speak)"],
		"challengeRating": ".125",
		"specialTraits" : [
			{
				"name": "False Appearance", 
				"perDay": "", 
				"recharge": "", 
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While the blight remains motionless, it is indistinguishable from a dead shrub.</p>"
			}
		],
		"actions" : [
			{
				"name": "Claws", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "3",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "4",
						"modifier": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Vine Blight",
		"imageSrc": "",
		"description": "<p>Appearing as masses of slithering creepers, vine blights hide in undergrowth and wait for prey to draw near. By animating the plants a round them, vine blights entangle and hinder their fo es before attacking.</p><p>Vine blights are the only blights capable of speech. Through its connection to the evil spirit of the Gulthias tree it serves, a vine blight speaks in a fractured version of its dead master's voice, taunting victims or bargaining with powerful foes.</p>",
		"size": "medium",
		"type": "plant",
		"tags" : ["blight"],
		"alignment": "neutral evil",
		"armorClass": "12",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "26",
			"rolls": "4",
			"die": "8",
			"modifier": "8"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "10"
			}
		],
		"strength": "15",
		"dexterity": "8",
		"constitution": "14",
		"intelligence": "5",
		"wisdom": "10",
		"charisma": "3",
		"savingThrows" : [
			{
				"ability": "", 
				"modifier": ""
			}
		],
		"skills" : [
			{
				"name": "stealth", 
				"modifier": "1"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : [""],
		"damageImmunities" : [""],
		"conditionImmunities" : ["blinded","deafened"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "blindsight", 
				"distance": "60",
				"notes": "blind beyond this radius"
			}
		],
		"passivePerception": "10",
		"languages" : ["Common"],
		"challengeRating": ".5",
		"specialTraits" : [
			{
				"name": "False Appearance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>While the blight remains motionless, it is indistinguishable from a tangle of vines.</p>"
			}
		],
		"actions" : [
			{
				"name": "Constrict", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "4",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "9",
						"rolls": "2",
						"die": "6",
						"modifier": "2",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"description": "<p>Large or smaller target is grappled (escape DC 12 STR/DEX). Until this grapple ends, the target is restrained, and the blight can't constrict another target.</p>"
			},
			{
				"name": "Entangling Plants", 
				"perDay": "", 
				"recharge": "5-6",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for non plant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 STR saving throw or become restrained. A creature can use its action to make a DC 12 STR check, freeing itself or another entangled creature within reach on a success.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Vrock",
		"imageUrl": "",
		"description": "<p>Vrocks are dull-witted, capricious fiends that live only to create pain and carnage. A vrock resembles a giant hybrid of humanoid and vulture, its gnarled, bestial body and broad wings stinking of offal.</p><p>Vrocks gobble humanoid flesh whenever they can, stunning potential prey with an ear-splitting shriek, then swooplng down to attack with beak and claw. Vrocks can shake their wings, releasing clouds of toxic spores.</p><p>Coveting pretty things, vrocks turn against each other for the chance to lay claim to cheap jewelry or ornamental stones. Despite their love of treasure,yrocks are difficult to bribe, seeing no reason to bargain when they can simply take what they want from a would-be bargainer's corpse.</p>",
		"size": "large",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "15",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "104",
			"rolls": "11",
			"die": "10",
			"modifier": "44"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "40"
			},
			{
				"type": "fly", 
				"distance": "60"
			}
		],
		"strength": "17",
		"dexterity": "15",
		"constitution": "18",
		"intelligence": "8",
		"wisdom": "13",
		"charisma": "8",
		"savingThrows" : [
			{
				"attribute": "dex", 
				"modifier": "5"
			},
			{
				"attribute": "wis", 
				"modifier": "4"
			},
			{
				"attribute": "cha", 
				"modifier": "2"
			}
		],
		"skills" : [
			{
				"name": "", 
				"modifier": ""
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "11",
		"languages" : ["Abyssal","Telepathy 120ft"],
		"challengeRating": "6",
		"specialTraits" : [
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The vrock has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The vrock makes two attacks: one with its beak and one with its talons.</p>"
			},
			{
				"name": "Beak", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"modifier": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Talons", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "2",
						"die": "10",
						"modifier": "3",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Spores", 
				"perDay": "", 
				"recharge": "6",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A 15ft-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 CON saving throw or become poisoned. While poisoned in this way, a target takes 5(1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.</p>"
			},
			{
				"name": "Stunning Screech", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The vrock emits a horrific screech. Each creature within 20ft of it that can hear it and that isn't a demon must succeed on a DC 14 CON saving throw or be stunned until the end of the vrock's next turn.</p>"
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A vrock has a 30% chance of summoning 2d4 dretches or one vrock. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "Yochlol",
		"imageUrl": "",
		"description": "<p>The yochlols are the handmaidens of Lolth&mdash;extensions of the Spider Queen's will, dedicated to acting as her spies, taskmasters, and agents of villainy. They attend their goddess in the Demonweb Pits, but Lolth sometimes dispatches yochlols to the Material Plane to guard her temples and to aid her most devout priestesses. Yochlols don't form outside Lolth's realm of the Demonweb, and they serve no demon lords except their queen.</p><p>Outside the Abyss, a yochlol can assume the guise of a female drow or monstrous spider to conceal its demonic form. In its true form, the fiend appears as a pillar of yellow slime with a single malevolent eye. In its drow and true form, a yochlol's touch carries the same venomous touch as its spider form's bite.</p>",
		"size": "medium",
		"type": "fiend",
		"tags" : ["demon"],
		"alignment": "chaotic evil",
		"armorClass": "15",
		"armor" : ["natural armor"],
		"hitPoints" : {
			"default": "136",
			"rolls": "16",
			"die": "8",
			"modifier": "64"
		},
		"speed" : [
			{
				"type": "walk", 
				"distance": "30"
			},
			{
				"type": "climb", 
				"distance": "30"
			}
		],
		"strength": "15",
		"dexterity": "14",
		"constitution": "18",
		"intelligence": "13",
		"wisdom": "15",
		"charisma": "15",
		"savingThrows" : [
			{
				"attribute": "dex", 
				"modifier": "6"
			},
			{
				"attribute": "int", 
				"modifier": "5"
			},
			{
				"attribute": "wis", 
				"modifier": "6"
			},
			{
				"attribute": "cha", 
				"modifier": "6"
			}
		],
		"skills" : [
			{
				"name": "deception", 
				"modifier": "10"
			},
			{
				"name": "insight", 
				"modifier": "6"
			}
		],
		"damageVulnerabilities" : [""],
		"damageResistances" : ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImmunities" : ["poison"],
		"conditionImmunities" : ["poisoned"],
		"armorProficiencies" : [""],
		"weaponProficiencies" : [""],
		"toolProficiencies" : [""],
		"senses" : [
			{
				"type": "darkvision", 
				"distance": "120",
				"notes": ""
			}
		],
		"passivePerception": "12",
		"languages" : ["Abyssal","Elvish","Undercommon"],
		"challengeRating": "10",
		"specialTraits" : [
			{
				"name": "Shapechanger", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The yochlol can use its action to polymorph into a form that resembles a female drow or giant spider, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.</p>"
			},
			{
				"name": "Magic Resistance", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The yochlol has advantage on saving throws against spells and other magical effects. Spider Climb. The yochlol ca n climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>"
			},
			{
				"name": "Innate Spellcasting", 
				"perDay": "", 
				"recharge": "",
				"ability": "cha",
				"dc": "14",
				"spell" : [
					{
						"rate": "at will",
						"span": "",
						"titles" : ["detect thoughts","web"]
					},
					{
						"rate": "1",
						"span": "day",
						"titles" : ["dominate person"]
					}
				],
				"description": ""
			},
			{
				"name": "Web Walker", 
				"perDay": "", 
				"recharge": "",
				"ability": "",
				"dc": "",
				"spell" : [
					{
						"rate": "",
						"span": "",
						"titles" : [""]
					}
				],
				"description": "<p>The yochlol ignores movement restrictions caused by webbing.</p>"
			}
		],
		"actions" : [
			{
				"name": "Multiattack", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The yochlol makes two melee attacks.</p>"
			},
			{
				"name": "Slam (Bite in Spider Form)", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "6",
					"targetNumber": "1"
				}, 
				"weapon" : [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"modifier": "2",
						"damageType": "bludgeoning",
						"notes": "demon form"
					},
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"modifier": "2",
						"damageType": "piercing",
						"notes": "spider form"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "21",
						"rolls": "6",
						"die": "6",
						"modifier": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"description": ""
			},
			{
				"name": "Mist Form", 
				"perDay": "", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>The yochlol transforms into toxic mist or reverts to its true form. Any equipment it is wearing or carrying is also transformed. It reverts to its true form if it dies. While in mist form, the yochlol is incapacitated and can't speak. It has a flying speed of 30ft, can hover, and can pass through any space that isn't airtight. It has advantage on STR, DEX, and CON saving throws, and it is immune to nonmagical damage.</p><p>While in mist form, the yochlol can enter a creature's space and stop there. Each time that creature starts its turn with the yochlol in its space, the creature must succeed on a DC 14 CON saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target is incapacitated.</p>"
			},
			{
				"name": "Summon Demon", 
				"perDay": "1", 
				"recharge": "",  
				"attack" : {
					"modifier": "",
					"targetNumber": ""
				}, 
				"weapon" : [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"modifier": "",
						"damageType": "",
						"notes": ""
					}
				],
				"description": "<p>A yochlol has a 5O% chance of summoning one yochlol. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"legendaryActions" : [
			{
				"name": "", 
				"description": ""
			}
		],
		"lair" : {
			"description": "",
			"initiative": "",
			"actionDc": "",
			"actions" : [""],
			"restrictions": "",
			"traits" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		},
		"regional" : {
			"effects" : [""],
			"recovery" : {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	}
]