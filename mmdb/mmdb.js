/* 

array of monster manual + errata

v.1.1	7/29/17	edmonan

/git/repo/dnd/mmdb/mmdb.js



NOTES (delete when done): 

	remove space between default and (die notation);

	remove space between # and (die) & die and '+' & '+' and #; 

	make sure descs end with a period; 

	make 'anti magic' and 'antimagic' 'anti-magic';

	make ft notation #ft with no period or space

*/

[
	{	"name": "aarakocra",
		"pro": "a-ra-KO-kra",
		"src": "",
		"desc": "<p>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.</p><p><strong>Enemies of Elemental Evil.</strong> In service to the Wind Dukes of Aaqa, aarakocra scout the planes in search of temples of Elemental Evil. They spy on malign elemental creatures and then either take the fi ght to those creatures or report back to the Wind Dukes.</p><p>On the Material Plane, aarakocra create aeries atop the highest mountains, especially peaks near portals to the Elemental Plane of Air. From such heights, aarakocra watch for signs of elemental incursions, as well as for nascent threats to their home plane. Aarakocra prefer to live their lives like the wind&mdash;unburdened and ever moving&mdash;yet they watch over a region for years if that's what it takes to guard against the incursions of Elemental Evil.</p><p>Aarakocra have no concept of political borders or property ownership, and the value of gems, gold, and other precious materials means little to aarakocra. In their eyes, a creature should use what is necessary and then cast what is left on the wind for others to use.</p><p><strong>Search for the Seven Shards.</strong> The Wind Dukes of Aaqa come from a race of elemental beings called the vaati, which once ruled many worlds. A creature known as the Queen of Chaos arose and initiated an interplanar war against vaati rule. To combat the threat, seven vaati heroes combined their powers to create the mighty<em>Rod of Law</em>. In a battle against the queen's greatest general, Mishka the Wolf Spider, a vaati killed Mishka by thrusting the rod into him like a spear. The rod shattered into seven shards that scattered across the multiverse. Aaracokra seek signs of the pieces' locations in order to rebuild what is now know as the<em>Rod of Seven Parts</em>.</p><p><strong>Summoning Air Elementals.</strong> Five aarakocra within 30ft of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60ft of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5ft of it can return with it.</p>",
		"size": "medium",
		"type": "humanoid",
		"class": "",
		"tag": "aarakocra",
		"alignment": "neutral good",
		"ac": "12",
		"armor": [""],
		"hp": {
			"default": "13",
			"rolls": "3",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "fly",
				"distance": "50",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			}
		],
		"str": "10",
		"dex": "14",
		"con": "10",
		"int": "11",
		"wis": "12",
		"chr": "11",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "15",
		"languages": {
			"speaks": ["auran","aarakocra"],
			"understands": [""]
		},
		"challengeRating": ".25",
		"traits": [
			{
				"name": "dive attack",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "3",
				"rolls": "1",
				"die": "6",
				"mod": "",
				"type": "n/a",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the aarakocra is flying and dives at least 30ft straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3(1d6) damage to the target.</p>"
			}
		],
		"actions": [
			{
				"name": "talon",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "4",
						"rolls": "1",
						"die": "4",
						"mod": "2",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "javelin",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"mod": "2",
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
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "aboleth",
		"pro": "AB-o-leth",
		"src": "",
		"desc": "<p>Before the coming of the gods, aboleths lurked in primordial oceans and underground lakes. They reached out with their minds and seized control of the burgeoning life-forms of the mortal realm, making those creatures their slaves. Their dominance made them like gods. Then the true gods appeared, smashing the aboleths' empire and freeing their slaves.</p><p>Aboleths have never forgotten.</p><p><strong>Eternal Memories.</strong> Aboleths have flawless memories. They pass on their knowledge and experience from generation to generation. Thus, the injury of their defeat by the gods remains perfectly preserved in their minds.</p><p>Aboleths' minds are treasure troves of ancient lore, recalling moments from prehistory with perfect clarity. They plot patiently and intricately across eons. Few creatures can conceive of the extent of an aboleth's plan.</p><p><strong>Gods in the Lake.</strong> Aboleths dwell in watery environments, including ocean abysses, deep lakes, and the Elemental Plane of Water. In these domains and the lands that adjoin them, aboleths are like gods, demanding worship and obedience from their subjects. When they consume other creatures, aboleths add the knowledge and experiences of their prey to their eternal memories.</p><p>Aboleths use their telepathic powers to read the minds of creatures and know their desires. An aboleth uses this knowledge to gain a creature's loyalty, promising to fulfill such wants in exchange for obedience. Within its lair, the aboleth can further use its powers to override senses, granting creatures, such as its followers, the illusion of promised rewards.</p><p><strong>Enemies of the Gods.</strong> The aboleths' fall from power is written in stark clarity on their flawless memories, for aboleths never truly die. If an aboleth's body is destroyed, its spirit returns to the Elemental Plane of Water, where a new body coalesces for it over days or months.</p><p>Ultimately, aboleths dream of overthrowing the gods and regaining control of the world. Aboleths have had untold eons to plot and to prepare their plans for perfect execution.</p><p>Aboleths lair in subterranean lakes or the rocky depths of the ocean, often surrounded by the ruins of an ancient, fallen aboleth city. An aboleth spends most of its existence underwater, surfacing occasionally to treat with visitors or deranged worshipers.</p>",
		"size": "large",
		"type": "aberration",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "135",
			"rolls": "18",
			"die": "10",
			"mod": "36"
		},
		"speed": [
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "10",
				"notes": ""
			}
		],
		"str": "21",
		"dex": "9",
		"con": "15",
		"int": "18",
		"wis": "15",
		"chr": "18",
		"savingThrows": [
			{
				"ability": "con",
				"mod": "6"
			},
			{
				"ability": "int",
				"mod": "8"
			},
			{
				"ability": "wis",
				"mod": "6"
			}
		],
		"skills": [
			{
				"name": "history",
				"mod": "12"
			},
			{
				"name": "perception",
				"mod": "10"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "20",
		"languages": {
			"speaks": ["deep speech","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "10",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The aboleth can breathe air and water.</p>"
			},
			{
				"name": "mucous cloud",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "con",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee Attack while within 5ft of it must make a DC 14 CON saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.</p>"
			},
			{
				"name": "probing telepathy",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The aboleth makes three tentacle attacks.</p>"
			},
			{
				"name": "tentacle",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "14",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "12",
						"rolls": "2",
						"die": "6",
						"mod": "5",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "6",
						"rolls": "1",
						"die": "12",
						"mod": "",
						"damageType": "acid",
						"notes": "While diseased, every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
					}
				],
				"desc": "<p>If the target is a creature, it must succeed on a DC 14 CON saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain HP unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6(1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.</p>"
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "3",
						"die": "6",
						"mod": "5",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "enslave",
				"perDay": "3",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The aboleth Targets one creature it can see within 30ft of it. The target must succeed on a DC 14 WIS saving throw or be magically Charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The Charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.</p><p>Whenever the Charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The aboleth makes a wisdom (perception) check.</p>"
			},
			{
				"name": "tail swipe",
				"desc": "<p>The aboleth makes one tail attack.</p>"
			},
			{
				"name": "psychic drain (costs 2 actions)",
				"desc": "<p>One creature Charmed by the aboleth takes 10(3d6) psychic damage, and the aboleth regains HP equal to the damage the creature takes.</p>"
			}
		],
		"lair": {
			"desc": "<p>Aboleths lair in subterranean lakes or the rocky depths of the ocean, often surrounded by the ruins of an ancient, fallen aboleth city. An aboleth spends most of its existence underwater, surfacing occasionally to treat with visitors or deranged worshipers.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60ft of it. While maintaining concentration on this effect, the aboleth can't take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth's phantasmal force lair action for the next 24 hours, although such a creature can choose to be affected.</p>",
				"<p>Pools of water within 90ft of the aboleth surge outward in a grasping tide. Any creature on the ground within 20ft of such a pool must succeed on a DC 14 STR saving throw or be pulled up to 20ft into the water and knocked prone. The aboleth can't use this lair action again until it has used a different one.</p>",
				"<p>Water in the aboleth's lair magically becomes a conduit for the creature's rage. The aboleth can target any number of creatures it can see in such water within 90ft of it. A target must succeed on a DC 14 WIS saving throw or take 7(2d6) psychic damage. The aboleth can't use this lair action again until it has used a different one.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Underground surfaces within 1 mile of the aboleth's lair are slimy and wet and are difficult terrain.</p>",
				"<p>Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the aboleth that drink such water vomit it within minutes.</p>",
				"<p>As an action, the aboleth can create an illusory image of itself within 1 mile of the lair. The copy can appear at any location the aboleth has seen before or in any location a creature charmed by the aboleth can currently see. Once created, the image lasts for as long as the aboleth maintains concentration, as if concentrating on a spell. Although the image is intangible, it looks, sounds, and can move like the aboleth. The aboleth can sense, speak, and use telepathy from the image's position as if present at that position. If the image takes any damage, it disappears.</p>"
			],
			"recovery": {
				"rolls": "3",
				"die": "10",
				"unit": "day"
			}
		}
	},
	{	"name": "allosaurus",
		"pro": "al-lo-SAR-us",
		"src": "",
		"desc": "<p>The allosaurus is a predator possessing great size, strength, and speed. It can run down almost any prey over open ground, pouncing to pull creatures down with its wicked claws.</p>",
		"size": "large",
		"type": "beast",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "51",
			"rolls": "6",
			"die": "10",
			"mod": "18"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "60",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "13",
		"con": "17",
		"int": "2",
		"wis": "5",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "15",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "pounce",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the allosaurus moves at least 30ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 STR saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "16",
				"targetNum": "",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "8",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "animated armor",
		"pro": "",
		"src": "",
		"desc": "<p>This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.</p><p>To add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.</p>",
		"size": "medium",
		"type": "construct",
		"class": "animated objects",
		"tag": "animated",
		"alignment": "unaligned",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "33",
			"rolls": "6",
			"die": "8",
			"mod": "6"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "25",
				"notes": ""
			}
		],
		"str": "14",
		"dex": "11",
		"con": "13",
		"int": "1",
		"wis": "3",
		"chr": "1",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison","psychic"],
		"conditionImm": ["blinded","charmed","deafened","exhaustion","frightened","paralyzed","petrified","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": "",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "6",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "antimagic susceptibility",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The armor is incapacitated while in the area of an anti-magic field. If targeted by dispel magic, the armor must succeed on a CON saving throw against the caster's spell save DC or fall unconscious for 1 minute.</p>"
			},
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the armor remains motionless, it is indistinguishable from a normal suit of armor.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The armor makes two melee attacks.</p>"
			},
			{
				"name": "slam",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"mod": "2",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "ankheg",
		"pro": "ANK-eg",
		"src": "",
		"desc": "<p>An ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.</p><p><strong>Lurkers in the Earth.</strong> The ankheg uses its powerful mandibles to dig winding tunnels deep beneath the ground. When it hunts, an ankheg burrows upward, waiting below the surface until its antennae detect movement from above. Then it bursts from the earth and. seizes prey in its mandibles, crushing and grinding while it secretes acidic digestive enzymes. These enzymes help dissolve a victim for easy swallowing, but the ankheg can also squirt acid to take down foes.</p><p><strong>Bane of Field and Forest.</strong> Although ankhegs receive a certain portion of their nutrients from the soil through which they burrow, they must supplement their diet with fresh meat. Pastures teeming with grazing livestock and forests rife with game are an ankheg's prime hunting grounds. Ankhegs are thus the bane of farmers and rangers everywhere.</p><p><strong>Earthen Tunnels.</strong> As it burrows through earth, the ankheg leaves a narrow, partially collapsed tunnel in its wake. In these tunnels, one might find the remnants of molted ankheg chitin, hatched ankheg eggs, or the grisly remains of ankheg victims, including coins or other treasures scattered during the creature's attack.</p>",
		"size": "large",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "14",
		"armor": ["natural"],
		"hp": {
			"default": "39",
			"rolls": "6",
			"die": "10",
			"mod": "6"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "17",
		"dex": "11",
		"con": "13",
		"int": "1",
		"wis": "13",
		"chr": "6",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "11",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "2",
						"die": "6",
						"mod": "3",
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
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a large or smaller creature, it is grappled (escape DC 13 STR/DEX). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.</p>"
			},
			{
				"name": "acid spray",
				"perDay": "",
				"recharge": "6",
				"ability": "dex",
				"dc": "13",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>The ankheg spits acid in a line that is 30ft long and 5ft wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 DEX saving throw, taking 10(3d6) acid damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "ankylosaurus",
		"pro": "ank-ee-lo-SAR-us",
		"src": "",
		"desc": "<p>Thick armor plating covers the body of the plant-eating ankylosaurus, which defends itself against predators with a knobbed tail that delivers a devastating strike. Some varieties of ankylosaurus have spiked tails that deal piercing damage instead of bludgeoning damage.</p>",
		"size": "huge",
		"type": "beast",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "15",
		"armor": ["natural"],
		"hp": {
			"default": "68",
			"rolls": "8",
			"die": "12",
			"mod": "16"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "11",
		"con": "15",
		"int": "2",
		"wis": "5",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "18",
						"rolls": "4",
						"die": "6",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": "<p>If the target is a creature, it must succeed on a DC 14 STR saving throw or be knocked prone.</p>"
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "azer",
		"pro": "AY-zur",
		"src": "",
		"desc": "<p>Natives of the Elemental Plane of Fire, azers are master crafters, expert miners, and sworn foes of the efreet. In appearance and manner, an azer resembles a male dwarf, but this is a facade. Beneath its metallic looking skin, an azer is a being of fire, which outwardly manifests in its fiery hair and beard.</p><p><strong>Made, Not Born.</strong> Azers don't reproduce. They are each crafted from bronze by another azer and imbued with a portion of the crafter's inner flame. Each azer is sculpted with unique features. This crafting process limits the growth of the azer population and is the primary reason that these creatures remain rare.</p><p><strong>Volcanic Dwellers.</strong> Azers dwell in a kingdom on the border between the Elemental Plane of Earth and the Elemental Plane of Fire&mdash;a range of mountains and volcanoes whose spires rise as a series of fortresses. Beneath mountain peaks, under volcanic calderas, and amid rivers of magma, azers extract gleaming metals and glittering gems from the earth. Squads of azer patrol the passes and tunnels of their realm, fending off the salamander raiders whose efreet masters order strikes against the azer kingdom.</p><p><strong>Enemies of the Efreet.</strong> Long ago, the efreet and the azers were allies. Azers helped create the City of Brass, forging that home of the efreet into one of the most wondrous places in creation. When the azers had finished their work, the efreet betrayed them, making a failed attempt to enslave the azers so as to protect the secrets of the city. Despite occasional raids and skirmishes, however, the two sides have so far refrained from all-out conflict. The azers believe that only the threat of them revealing the hidden ways into the City of Brass keeps the efreet in check.</p><p><strong>Masters of Metal and Gems.</strong> Azers are masterful artisans, and create beautiful works from the gems and precious metals found in their volcanic habitat. They rate the value of such treasures above all other things, sometimes dispatching parties across the planes to seek out rare metals and gemstones. When azers are called by magic to the Material Plane, it is typically to help forge an elaborate magic item or work of art, for it is said that their skill in such craft knows no equal.</p><p><strong>Living Fire.</strong> An azer doesn't require food, drink, or sleep.</p>",
		"size": "medium",
		"type": "elemental",
		"class": "",
		"tag": "",
		"alignment": "lawful neutral",
		"ac": "17",
		"armor": ["natural","shield"],
		"hp": {
			"default": "39",
			"rolls": "6",
			"die": "8",
			"mod": "12"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "17",
		"dex": "12",
		"con": "15",
		"int": "12",
		"wis": "13",
		"chr": "10",
		"savingThrows": [
			{
				"ability": "con",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["ignan"],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "heated body",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "5",
				"rolls": "1",
				"die": "10",
				"mod": "",
				"type": "fire",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>A creature that touches the azer or hits it with a melee attack while within 5ft of it takes 5(1d10) fire damage.</p>"
			},
			{
				"name": "heated weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "3",
				"rolls": "1",
				"die": "6",
				"mod": "",
				"type": "fire",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>When the azer hits with a metal melee weapon, it deals an extra 3(1d6) fire damage (included in the attack).</p>"
			},
			{
				"name": "illumination",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The azer sheds bright light in a 10-foot radius and dim light for an plus 10ft.</p>"
			}
		],
		"actions": [
			{
				"name": "warhammer",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "8",
						"mod": "3",
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
						"mod": "3",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "2",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>Fire damage included if used with two hands to make a melee attack.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "balor",
		"pro": "BAY-lor",
		"src": "",
		"desc": "<p>Figures of ancient and terrible evil, balors rule as generals over demonic armies, yearning to seize power while destroying any creatures that oppose them.</p><p>Wielding a flaming whip and a longsword that channels the power of the storm, a balor's battle prowess is fueled by hatred and rage. It channels this demonic fury in its death throes, falling within a blast of fire that can destroy even the hardiest foes.</p>",
		"size": "huge",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "262",
			"rolls": "21",
			"die": "12",
			"mod": "126"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}	
		],
		"str": "26",
		"dex": "15",
		"con": "22",
		"int": "20",
		"wis": "16",
		"chr": "22",
		"savingThrows": [
			{
				"ability": "str",
				"mod": "14"
			},
			{
				"ability": "con",
				"mod": "12"
			},
			{
				"ability": "wis",
				"mod": "9"
			},
			{
				"ability": "cha",
				"mod": "12"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": ["abyssal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "19",
		"traits": [
			{
				"name": "death throes",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "70",
				"rolls": "20",
				"die": "6",
				"mod": "",
				"type": "fire",
				"ability": "dex",
				"dc": "20",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>When the balor dies, it explodes, and each creature within 30ft of it must make a DC 20 DEX saving throw, taking 70(20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.</p>"
			},
			{
				"name": "fire aura",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "10",
				"rolls": "3",
				"die": "6",
				"mod": "",
				"type": "fire",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>At the start of each of the balor's turns, each creature within 5ft of it takes 10(3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5ft of it takes 10(3d6) fire damage.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The balor has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "magic weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The balor's weapon attacks are magical.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The balor makes two attacks: one with its longsword and one with its whip.</p>"
			},
			{
				"name": "longsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "21",
						"rolls": "3",
						"die": "8",
						"mod": "8",
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
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>If the balor scores a critical hit, it rolls damage dice three times, instead of twice.</p>"
			},
			{
				"name": "whip",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "30",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"mod": "8",
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
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 20 STR saving throw or be pulled up to 25ft toward the balor.</p>"
			},
			{
				"name": "teleport",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The balor magically teleports, along with any equipment it is wearing or carrying, up to 120ft to an unoccupied space it can see.</p>"
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A balor has a 50% chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "barlgura",
		"pro": "bar-lu-GOR-a",
		"src": "",
		"desc": "<p>The barlgura represents the savagery and brutality of the Abyss. Barlguras gather in packs to take down tougher foes, keep gruesome trophies from their victories, and decorate their territory with such objects.</p><p>A barlgura looks like a hulking orangutan with a gruesome, drooping visage and tusks jutting from its jaw. Standing just under 8ft tall, it has broad shoulders and weighs 650lbs. It moves apishly along the ground, but it climbs with great speed and agility.</p>",
		"size": "large",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "15",
		"armor": ["natural"],
		"hp": {
			"default": "68",
			"rolls": "8",
			"die": "10",
			"mod": "24"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "18",
		"dex": "15",
		"con": "16",
		"int": "7",
		"wis": "14",
		"chr": "9",
		"savingThrows": [
			{
				"ability": "dex",
				"mod": "5"
			},
			{
				"ability": "con",
				"mod": "6"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "5"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "15",
		"languages": {
			"speaks": ["abyssal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "wis",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["entangle","phantasmal force"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "2",
						"span": "day",
						"titles": ["disguise self","invisibility"],
						"notes": ""
					}
				],
				"desc": "<p>Invisibility can only be cast on self</p>"
			},
			{
				"name": "reckless",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.</p>"
			},
			{
				"name": "running leap",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The barlgura's long jump is up to 40ft and its high jump is up to 20ft when it has a running start.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The barlgura makes three attacks: one with its bite and two with its fists.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fist",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "1",
						"die": "10",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"type": "",
						"notes": ""
					}
				],
				"desc": "A barlgura has a 30% chance of summoning one barlgura. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "banshee",
		"pro": "BAN-shee",
		"src": "",
		"desc": "<p>When night falls, unlucky travelers hear the faint cries of the forlorn dead. This woeful spirit is a banshee, a spiteful creature formed from the spirit of a female elf.</p><p>Banshees appear as luminous, wispy forms that vaguely recall their mortal features. A banshee's face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it.</p><p><strong>Divine Wrath.</strong> Banshees are the undead remnants of elves who, blessed with great beauty, failed to use their gift to bring joy to the world. Instead, they used their beauty to corrupt and control others. Elves afflicted by the banshee's curse experience no gladness, feeling only distress in the presence of the living. As the curse takes its toll, their minds and bodies decay, until death completes their transformation into undead monsters.</p><p><strong>Sorrow Bound.</strong> A banshee becomes forever bound to the place of its demise, unable to venture more than five miles from there. It is forced to relive every momerit of its life with perfect recall, yet always refuses to accept responsibility for its doom.</p><p><strong>Beauty Hoarders.</strong> The vanity that inspired the banshee's cursed creation persists in undeath. These creatures covet beautiful objects: fine jewelry, paintings, statues, and other objects of art. At the same time, a banshee abhors any mirrored surface, for it can't bear to see the horror of its own existence. A single glimpse of itself is enough to send a banshee into a rage.</p><p><strong>Undead Nature.</strong> A banshee doesn't require air, food, drink, or sleep.</p>",
		"size": "medium",
		"type": "undead",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "12",
		"armor": [""],
		"hp": {
			"default": "58",
			"rolls": "13",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "fly",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "1",
		"dex": "14",
		"con": "10",
		"int": "12",
		"wis": "11",
		"chr": "17",
		"savingThrows": [
			{
				"ability": "wis",
				"mod": "2"
			},
			{
				"ability": "cha",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["acid","fire","lightning","thunder","bludgeoning","piercing","slashing"],
		"damageImm": ["cold","necrotic","poison"],
		"conditionImm": ["charmed","exhaustion","frightened","grappled","paralyzed","petrified","poisoned","prone","restrained"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["common","elvish"],
			"understands": [""]
		},
		"challengeRating": "4",
		"traits": [
			{
				"name": "detect life",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The banshee can magically sense the presence of living creatures up to 5 miles away. She knows the general direction they're in but not their exact locations.</p>"
			},
			{
				"name": "incorporeal movement",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5(1d10) force damage if she ends her turn inside an object.</p>"
			}
		],
		"actions": [
			{
				"name": "corrupting touch",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee spell",
						"handed": "1",
						"reach": "5",
						"default": "12",
						"rolls": "3",
						"die": "6",
						"mod": "2",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "horrifying visage",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each non-undead creature within 60ft of the banshee that can see her must succeed on a DC 13 WIS saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours.</p>"
			},
			{
				"name": "wail",
				"perDay": "1",
				"recharge": "",
				"ability": "con",
				"dc": "13",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "psychic",
						"notes": ""
					}
				],
				"desc": "<p>The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30ft of her that can hear her must make a DC 13 CON saving throw. On a failure, a creature drops to 0HP. On a success, a creature takes 10(3d6) psychic damage.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "barbed devil (hamatula)",
		"pro": "hah-mah-CHOO-luh",
		"src": "",
		"desc": "<p>Creatures of unbridled greed and desire, barbed devils act as guards to the more powerful denizens of the Nine Hells and their vaults. Resembling a tall humanoid covered in sharp barbs, spines, and hooks, a barbed devil has gleaming eyes that are ever watchful for objects and creatures it might claim for itself. These fiends welcome any chance to fight when victory promises reward.</p><p>Barbed devils are known for an alertness that makes them difficult to surprise, and they attend to their duties without boredom or distraction. They use their sharp claws as weapons or hurl balls of flame at foes that try to flee them.</p>",
		"size": "medium",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "",
		"armor": ["natural"],
		"hp": {
			"default": "110",
			"rolls": "13",
			"die": "8",
			"mod": "52"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "16",
		"dex": "17",
		"con": "18",
		"int": "12",
		"wis": "14",
		"chr": "14",
		"savingThrows": [
			{
				"attribute": "str",
				"mod": "6"
			},
			{
				"attribute": "con",
				"mod": "7"
			},
			{
				"attribute": "wis",
				"mod": "5"
			},
			{
				"attribute": "cha",
				"mod": "5"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "5"
			},
			{
				"name": "insight",
				"mod": "5"
			},
			{
				"name": "perception",
				"mod": "8"
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "barbed hide",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "5",
				"rolls": "1",
				"die": "10",
				"mod": "",
				"type": "piercing",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>At the start of each of its turns, the barbed devil deals 5(1dl0) piercing damage to any creature grappling it.</p>"
			},
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.</p>"
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "6",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "hurl flame",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged spell",
						"handed": "",
						"reach": "150",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"type": "fire"
					}
				],
				"desc": "<p>If the target is a flammable object that isn't being worn or carried, it also catches fire.</p>"
			},
			{
				"name": "summon devil - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A barbed devil has a 30% chance of summoning one barbed devil. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "basilisk",
		"pro": "BAZ-i-lisk",
		"src": "",
		"desc": "<p>Travelers sometimes find objects that look like pieces of remarkably lifelike stone carvings of wildlife. Missing parts appear to have been bitten off. Seasoned explorers regard such relics as warnings, knowing that the basilisk that created them is likely to be nearby.</p><p><strong>Adaptable Predators.</strong> Basilisks thrive in arid, temperate, or tropical climates. They lair in caves or other sheltered sites. Most often, basilisks are encountered underground.</p><p>A basilisk born and raised in captivity can be domesticated and trained. Such a trained basilisk knows how to avoid meeting the eyes of those its master wishes to protect from its gaze, but it makes a daunting guardian beast. Because of this use, basilisk eggs are highly prized.</p><p><strong>Gaze of Stone.</strong> Basilisks a re ponderous for hunting creatures, but they needn't chase prey. Meeting a basilisk's supernatural gaze can be enough to affect a rapid transformation, transforming a victim into porous stone. Basilisks, with their strong jaws, are able to consume the stone. The stone returns to organic form in the basilisk's gullet.</p><p>Some alchemists are said to know how to process the basilisk's gullet and the fluids contained within. Properly handled, the gullet produces an oil that can return petrified creatures to flesh and life. Unfortunately for such a victim, any parts lost in stone form remain absent if the creature revives. Revivification using the oil is impossible if a vital part of the petrified creature, such as its head, is detached.</p>",
		"size": "medium",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "5",
		"armor": ["natural"],
		"hp": {
			"default": "52",
			"rolls": "8",
			"die": "8",
			"mod": "16"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			}
		],
		"str": "16",
		"dex": "8",
		"con": "15",
		"int": "2",
		"wis": "8",
		"chr": "7",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "9",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "petrifying gaze",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "con",
				"dc": "12",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If a creature starts its turn within 30ft of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 CON saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure , the creature is petrified until freed by the greater restoration spell or other magic. A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.</p><p>If the basilisk sees its reflection within 30ft of it in bright light, it mistakes itself for a rival and targets itself with its gaze.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"mod": "3",
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
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "bearded devil (barbazu)",
		"pro": "bar-BAT-soo",
		"src": "",
		"desc": "<p>Bearded devils serve archdevils as shock troops, fighting shoulder-to-shoulder and reveling in the glory of battle. They respond with violence to any slight, real or imagined, gorging themselves on violence as their infernal saw-toothed glaives carve a path through their foes.</p><p>A bearded d~vil is humanoid in form, with ·pointed ears, scaly skln, a long tail, and claws that clearly show its fiendish nature. These devils take their names from the snakelike growths that adorn their chins, which they use to lash and poison enemies, weakening them with their virulent venom.</p>",
		"size": "medium",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "52",
			"rolls": "8",
			"die": "8",
			"mod": "16"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "16",
		"dex": "15",
		"con": "15",
		"int": "9",
		"wis": "11",
		"chr": "11",
		"savingThrows": [
			{
				"attribute": "str",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "4"
			},
			{
				"attribute": "wis",
				"mod": "2"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "steadfast",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil can't be frightened while it can see an allied creature within 30ft of it.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil makes two attacks: one with its beard and one with its glaive.</p>"
			},
			{
				"name": "beard",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "8",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 12 CON saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain HP. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "glaive",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "12",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "8",
						"rolls": "1",
						"die": "10",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "5",
						"rolls": "1",
						"die": "10",
						"mod": "",
						"damageType": "infernal",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a creature other than an undead or a construct, it must succeed on a DC 12 CON saving throw or lose 5(1d10) HP at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5(1d10). Any creature can take an action to stanch the wound with a successful DC 12 WIS(Medicine) check. The wound also closes if the target receives magical healing.</p>"
			},
			{
				"name": "summon devil - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A bearded devil has a 30% chance of summoning one bearded devil. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "behir",
		"pro": "be-HEER",
		"src": "",
		"desc": "<p>The serpentine behir crawls along floors and clambers up walls to reach its prey. Its lightning breath can incinerate most creatures, even as more powerful foes are constricted in its coils and eaten alive.</p><p>A behir's monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color, fading to pale blue on its underside.</p><p><strong>Cavern Predators.</strong> Behirs lair in places inaccessible to other creatures, favoring locations where would-be intruders must make a harrowing climb to reach them. Deep pits, high caves in cliff walls, and caverns reached only by narrow, twisting tunnels are prime sites for a behir ambush. A behir's dozen legs allow it to scramble through its lair site with ease. When not climbing, it moves even faster by folding its legs beside its body and slithering like a snake.</p><p>Behirs swallow their prey whole, after which they enter a period of dormancy while they digest. While dormant, a behir chooses a hiding place where intruders in its lair might overlook it.</p><p><strong>Foes of the Dragons.</strong> In times long forgotten, giants and dragons engaged in seemingly endless war. Storm giants created the first behirs as weapons against the dragons, and behirs retain a natural hatred for dragonkind.</p><p>A behir never makes its lair in an area it knows to be inhabited by a dragon. If a dragon attempts to establish a lair within a few dozen miles of a behir's lair, the behir is compelled to kill the dragon or drive it off. Only if tlie dragon proves too powerful to fight does a behjr back down, seeking out a new lair site a great distance away.</p>",
		"size": "huge",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "neutral evil",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "168",
			"rolls": "16",
			"die": "12",
			"mod": "64"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "50",
				"notes": ""
			
		],
		"str": "23",
		"dex": "16",
		"con": "18",
		"int": "7",
		"wis": "14",
		"chr": "12",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "6"
			},
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "90",
				"notes": ""
			}
		],
		"passivePer": "16",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "11",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The behir makes two attacks: one with its bite and one to constrict.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "22",
						"rolls": "3",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "constrict",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
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
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": "<p>The target is grappled (escape DC 16 STR/DEX) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.</p>"
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "16",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "20",
						"default": "66",
						"rolls": "12",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The behir exhales a line of lightning that is 20ft long and 5ft wide. Each creature in that line must make a DC 16 DEX saving throw, taking 66(12d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "swallow",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "",
						"default": "21",
						"rolls": "6",
						"die": "6",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>The behir makes one bite attack against a medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21(6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 CON saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10ft of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15ft of movement, exiting prone.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "beholder",
		"pro": "",
		"src": "",
		"desc": "<p>One glance at a beholder is enough to assess its foul and otherworldly nature. Aggressive, hateful, and greedy, these aberrations dismiss all other creatures as lesser beings, toying with them or destroying them as they choose.</p><p>A beholder's spheroid body levitates at all times, and its great bulging eye sits above a wide, toothy maw, while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. When a beholder sleeps, it closes its central eye but leaves its smaller eyes open and alert.</p><p><strong>Xenophobic Isolationists.</strong> Enemies abound, or so every beholder believes. Beholders are convinced that other creatures resent them for their brilliance and magical power, even as they dismiss those lesser creatures as crude and disgusting. Beholders always suspect others of plotting against them, even when no other creatures are around.</p><p>The disdain a beholder has for other creatures extends to other beholders. Each beholder believes its form to be an ideal, and that any deviation from that form is a flaw in the racial purity of its kind. Beholders vary greatly in their physical forms, making conflict between them inevitable. Some beholders are protected by overlapping chitinous plates. Some have smooth hides. Some have eyestalks that writhe like tentacles, while others' stalks bear crustacean-like joints. Even slight differences of coloration in hide can turn two beholders into lifelong enemies.</p><p><strong>Eye Tyrant.</strong> Some beholders manage to channel their xenophobic tendencies into a terrible despotism. Rather than live in isolation, the aptly named eye tyrants enslave those other creatures, founding and controlling vast empires. An eye tyrant sometimes carves out a domain within or under a major city, commanding networks of agents that operate on their master's behalf.</p><p><strong>Alien Lairs.</strong> Because they refuse to share territory with others, most beholders withdraw to frigid hills, abandoned ruins, and deep caverns to scheme. A beholder's lair is carved out by its disintegration eye ray, emphasizing vertical passages connecting chambers stacked on top of each other. Such an environment allows a beholder to move freely, even as it prevents intruders from easily creeping about. When intruders do break in, the height of its open ceilings allows a beholder to float up and harry foes on the floor.</p><p>As alien as their creator, the rooms in a beholder's lair reflect the creature's arrogance. It festoons its chambers with trophies from the battles it has won, including petrified adventurers standing frozen in their horrified final moments, pieces of other beholders, and magic items wrested from powerful fo es. A beholder judges its own worth by its acquisitions, and it never willingly parts with its treasures.</p>",
		"size": "large",
		"type": "aberration",
		"class": "",
		"tag": "beholder",
		"alignment": "lawful evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "180",
			"rolls": "19",
			"die": "10",
			"mod": "76"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "20",
				"notes": "hover"
			}
		],
		"str": "10",
		"dex": "14",
		"con": "18",
		"int": "17",
		"wis": "15",
		"chr": "17",
		"savingThrows": [
			{
				"ability": "int",
				"mod": "8"
			},
			{
				"ability": "wis",
				"mod": "7"
			},
			{
				"ability": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "12"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": ["prone"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "22",
		"languages": {
			"speaks": ["deep speech, undercommon"],
			"understands": [""]
		},
		"challengeRating": "13",
		"traits": [
			{
				"name": "antimagic cone",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The beholder's central eye creates an area of anti-magic, as in the anti-magic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "4",
						"die": "6",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "eye rays",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The beholder shoots three of the following magical eye rays at random (1d10 reroll duplicates), choosing one to three targets it can see within 120ft of it:</p><p><ol><li><strong>Charm Ray.</strong> The targeted creature must succeed on a DC 16 WIS saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.</li><li><strong>Paralyzing Ray.</strong> The targeted creature must succeed on a DC 16 CON saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Fear Ray.</strong> The targeted creature must succeed on a DC 16 WIS saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Slowing Ray.</strong> The targeted creature must succeed on a DC 16 DEX saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not bofh. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Enervation Ray.</strong> The targeted creature must make a DC 16 CON saving throw, taking 36(8d8) necrotic damage on a failed save, or half as much damage on a successful one.</li><li><strong>Telekinetic Ray.</strong> If the target is a creature, it must succeed on a DC 16 STR saving throw or the beholder moves it up to 30ft in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.<br><br>If the target is an object weighing 300lbs or less that isn't being worn or carried, it is moved up to 30ft in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.</li><li><strong>Sleep Ray.</strong> The targeted creature must succeed on a DC 16 WIS saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.</li><li><strong>Petrification Ray.</strong> The targeted creature must make a DC 16 DEX saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.</li><li><strong>Disintegration Ray.</strong> If the target is a creature, it must succeed on a DC 16 DEX saving throw or take 45(10d8) force damage. If this damage reduces the creature to 0HP, its body becomes a pile of fine gray dust.<br><br>If the target is a large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a huge or larger object or creation of magical force, this ray disintegrates a 10ft cube of it.</li><li><strong>Death Ray.</strong> The targeted creature must succeed on a DC 16 DEX saving throw or take 55(10d10) necrotic damage. The target dies if the ray reduces it to 0HP.</li></ol></p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "eye ray",
				"desc": "<p>The beholder uses one random eye ray.</p>"
			}
		],
		"lair": {
			"desc": "<p>A beholder's central lair is typically a large, spacious cavern with high ceilings, where it can attack without fear of closing to melee range. A beholder encountered in its lair has a challenge rating of 14.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>A 50-foot square area of ground within 120ft of the beholder becomes slimy; that area is difficult terrain until initiative count 20 on the next round.</p>",
				"<p>Walls within 120ft of the beholder sprout grasping appendages until initiative count 20 on the round after next. Each creature of the beholder's choice that starts its turn within 10ft of such a wall must succeed on a DC 15 DEX saving throw or be grappled. Escaping requires a successful DC 15 STR(athletics) or DEX(acrobatics) check.</p>",
				"<p>An eye opens on a solid surface within 60ft of the beholder. One random eye ray of the beholder shoots from that eye at a target of the beholder's choice that it can see. The eye then closes and disappears. The beholder can't repeat an effect until they have all been used, and it can't use the same effect two rounds in a row.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Creatures within 1 mile of the beholder's lair sometimes feel as if they're being watched when they aren't.</p>",
				"<p>When the beholder sleeps, minor warps in reality occur within 1 mi1e of its lair and then vanish 24 hours later. Marks on cave walls might change subtly, an eerie trinket might appear where none existed before, harmless slime might coat a statue, and so on. These effects apply only to natural surfaces and to nonmagical objects that aren't on anyone's person.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "black dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>The most evil-tempered&mdash;and vile of the chromatic dragons, black dragons collect the wreckage and treasures of fallen peoples. These dragons loathe seeing the weak prosper and revel in the collapse of humanoid kingdoms. They make their homes in fetid swamps and crumbling ruins where kingdoms once stood.</p><p>With deep-socketed eyes and broad nasal openings, a black dragon's face resembles a skull. Its curving, segmented horns are bone-colored near the base and darken to dead black at the tips. As a black dragon ages, the flesh around its horns and cheekbones deteriorates as though eaten by acid, leaving thin layers of hide that enhance its skeletal appearance. A black dragon's head is marked by spikes and horns. Its tongue is flat with a forked tip, drooling slime whose acidic scent adds to the dragon's reek of rotting vegetation and foul water.</p><p>When it hatches, a black dragon has glossy black scale. As it ages, its scales become thicker and duller, helping it blend in to the marshes and blasted ruins that are its home.</p><p><strong>Brutal and Cruel.</strong> All chromatic dragons are evil, but black dragons stand apart for their sadistic nature. A black dragon lives to watch its prey beg for mercy, and will often offer the illusion of respite or escape before finishing off its enemies.</p><p>A black dragon strikes at its weakest enemies first, ensuring a quick and brutal victory, which bolsters its ego as it terrifies its remaining foes. On the verge of defeat, a black dragon does anything it can to save itself, but it accepts death before allowing any other creature to claim mastery over it.</p><p><strong>Foes and Servants.</strong> Black dragons hate and fear other dragons. They spy on draconic rivals from afar, looking for opportunities to slay weaker dragons and avoid stronger ones. If a stronger dragon threatens it, a black dragon abandons its lair and seeks out new territory.</p><p>Evil lizardfolk venerate and serve black dragons, raiding humanoid settlements for treasure and food to give as tribute and building crude draconic effigies along the borders of their dragon master's domain.</p><p>A black dragon's malevolent influence might also cause the spontaneous creation of evil shambling mounds that seek out and slay good creatures approaching the dragon's lair.</p><p>Kobolds infest the lairs of many black dragons like vermin. They become as cruel as their dark masters, often torturing and weakening captives with centipede bites and scorpion stings before delivering them to sate the dragon's hunger.</p><p><strong>Wealth of the Ancients.</strong> Black dragons hoard the treasures and magic items of crumbled empires and conquered kingdoms to remind themselves of their greatness. The more civilizations a dragon outlasts, the more entitled it feels to claim the wealth of current civilizations for itself.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "22",
		"armor": ["natural"],
		"hp": {
			"default": "367",
			"rolls": "21",
			"die": "20",
			"mod": "147"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "27",
		"dex": "14",
		"con": "25",
		"int": "16",
		"wis": "15",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "9"
			},
			{
				"attribute": "con",
				"mod": "14"
			},
			{
				"attribute": "wis",
				"mod": "9"
			},
			{
				"attribute": "cha",
				"mod": "11"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "16"
			},
			{
				"name": "stealth",
				"mod": "9"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["acid"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "26",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "21",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "11",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "19",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","control water","finger of death"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 4 spells at level 7 or below. It has a +11 bonus to hit and a DC 19 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "19",
						"rolls": "2",
						"die": "10",
						"mod": "8",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "9",
						"rolls": "2",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "17",
						"rolls": "2",
						"die": "8",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "19",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 19 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "acid breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "22",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "67",
						"rolls": "15",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": "<p>The dragon exhales acid in a 90ft line that is 10ft wide.</p><p>Creatures take half damage on a successful saving throw.</p>"
					}
				],
				"desc": "<p>The dragon exhales acid in a 90ft line that is 10ft wide. Each creature in that line must make a DC 22 DEX saving throw, taking 67(15d8) acid damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 23 DEX saving throw or take 15(2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Black dragons dwell in swamps on the frayed edges of civilization. A black dragon's lair is a dismal cave, grotto, or ruin that is at least partially flooded, providing pools where the dragon rests, and where its victims can ferment. The lair is littered with the acid-pitted bones of previous victims and the fly-ridden carcasses of fresh kills, watched over by crumbling statues. Centipedes, scorpions, and snakes infest the lair, which is filled with the stench of death and decay.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Pools of water that the dragon can see within 120ft of it surge outward in a grasping tide. Any creature on the ground within 20ft of such a pool must succeed on a DC 15 STR saving throw or be pulled up to 20ft into the water and knocked prone.</p>",
				"<p>A cloud of swarming insects fills a 20ft radius sphere centered on a point the dragon chooses within 120ft of it. The cloud spreads around corners and remains until the dragon dismisses it as an action, uses this lair action again, or dies. The cloud is lightly obscured. Any creature in the cloud when it appears must make on a DC 15 CON saving throw, taking 10(3d6) piercing damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the cloud takes 10(3d6) piercing damage.</p>",
				"<p>Magical darkness spreads from a point the dragon chooses within 60ft of it, filling a 15ft radius sphere until the dragon dismisses it as an action, uses this lair action again, or dies. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagicallight can't illuminate it. If any of the effect's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>The land within 6 miles of the lair takes twice as long as normal to traverse, since the plants grow thick and twisted, and the swamps are thick with reeking mud.</p>",
				"<p>Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the dragon that drink such water regurgitate it within minutes.</p>",
				"<p>Fog lightly obscures the land within 6 miles of the lair.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "black dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>The most evil-tempered&mdash;and vile of the chromatic dragons, black dragons collect the wreckage and treasures of fallen peoples. These dragons loathe seeing the weak prosper and revel in the collapse of humanoid kingdoms. They make their homes in fetid swamps and crumbling ruins where kingdoms once stood.</p><p>With deep-socketed eyes and broad nasal openings, a black dragon's face resembles a skull. Its curving, segmented horns are bone-colored near the base and darken to dead black at the tips. As a black dragon ages, the flesh around its horns and cheekbones deteriorates as though eaten by acid, leaving thin layers of hide that enhance its skeletal appearance. A black dragon's head is marked by spikes and horns. Its tongue is flat with a forked tip, drooling slime whose acidic scent adds to the dragon's reek of rotting vegetation and foul water.</p><p>When it hatches, a black dragon has glossy black scale. As it ages, its scales become thicker and duller, helping it blend in to the marshes and blasted ruins that are its home.</p><p><strong>Brutal and Cruel.</strong> All chromatic dragons are evil, but black dragons stand apart for their sadistic nature. A black dragon lives to watch its prey beg for mercy, and will often offer the illusion of respite or escape before finishing off its enemies.</p><p>A black dragon strikes at its weakest enemies first, ensuring a quick and brutal victory, which bolsters its ego as it terrifies its remaining foes. On the verge of defeat, a black dragon does anything it can to save itself, but it accepts death before allowing any other creature to claim mastery over it.</p><p><strong>Foes and Servants.</strong> Black dragons hate and fear other dragons. They spy on draconic rivals from afar, looking for opportunities to slay weaker dragons and avoid stronger ones. If a stronger dragon threatens it, a black dragon abandons its lair and seeks out new territory.</p><p>Evil lizardfolk venerate and serve black dragons, raiding humanoid settlements for treasure and food to give as tribute and building crude draconic effigies along the borders of their dragon master's domain.</p><p>A black dragon's malevolent influence might also cause the spontaneous creation of evil shambling mounds that seek out and slay good creatures approaching the dragon's lair.</p><p>Kobolds infest the lairs of many black dragons like vermin. They become as cruel as their dark masters, often torturing and weakening captives with centipede bites and scorpion stings before delivering them to sate the dragon's hunger.</p><p><strong>Wealth of the Ancients.</strong> Black dragons hoard the treasures and magic items of crumbled empires and conquered kingdoms to remind themselves of their greatness. The more civilizations a dragon outlasts, the more entitled it feels to claim the wealth of current civilizations for itself.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "195",
			"rolls": "17",
			"die": "12",
			"mod": "85"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "23",
		"dex": "14",
		"con": "21",
		"int": "14",
		"wis": "13",
		"chr": "17",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "con",
				"mod": "10"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "11"
			},
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["acid"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "21",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "14",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "8",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "16",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","control water"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 3 spells at level 4 or below. It has a +8 bonus to hit and a DC 16 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "4",
						"rolls": "1",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "15",
						"rolls": "2",
						"die": "8",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "16",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 16 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "acid breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "54",
						"rolls": "12",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": "<p>The dragon exhales acid in a 60ft line that is 5ft wide.</p><p>Creatures take half damage on successful saving throws.</p>"
					}
				],
				"desc": "<p>The dragon exhales acid in a 60ft line that is 5ft wide. Each creature in that line must make a DC 18 DEX saving throw, taking 54(12d8) acid damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 19 DEX saving throw or take 13(2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Black dragons dwell in swamps on the frayed edges of civilization. A black dragon's lair is a dismal cave, grotto, or ruin that is at least partially flooded, providing pools where the dragon rests, and where its victims can ferment. The lair is littered with the acid-pitted bones of previous victims and the fly-ridden carcasses of fresh kills, watched over by crumbling statues. Centipedes, scorpions, and snakes infest the lair, which is filled with the stench of death and decay.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Pools of water that the dragon can see within 120ft of it surge outward in a grasping tide. Any creature on the ground within 20ft of such a pool must succeed on a DC 15 STR saving throw or be pulled up to 20ft into the water and knocked prone.</p>",
				"<p>A cloud of swarming insects fills a 20ft radius sphere centered on a point the dragon chooses within 120ft of it. The cloud spreads around corners and remains until the dragon dismisses it as an action, uses this lair action again, or dies. The cloud is lightly obscured. Any creature in the cloud when it appears must make on a DC 15 CON saving throw, taking 10(3d6) piercing damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the cloud takes 10(3d6) piercing damage.</p>",
				"<p>Magical darkness spreads from a point the dragon chooses within 60ft of it, filling a 15ft radius sphere until the dragon dismisses it as an action, uses this lair action again, or dies. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagicallight can't illuminate it. If any of the effect's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>The land within 6 miles of the lair takes twice as long as normal to traverse, since the plants grow thick and twisted, and the swamps are thick with reeking mud.</p>",
				"<p>Water sources within 1 mile of the lair are supernaturally fouled. Enemies of the dragon that drink such water regurgitate it within minutes.</p>",
				"<p>Fog lightly obscures the land within 6 miles of the lair.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "black dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>The most evil-tempered&mdash;and vile of the chromatic dragons, black dragons collect the wreckage and treasures of fallen peoples. These dragons loathe seeing the weak prosper and revel in the collapse of humanoid kingdoms. They make their homes in fetid swamps and crumbling ruins where kingdoms once stood.</p><p>With deep-socketed eyes and broad nasal openings, a black dragon's face resembles a skull. Its curving, segmented horns are bone-colored near the base and darken to dead black at the tips. As a black dragon ages, the flesh around its horns and cheekbones deteriorates as though eaten by acid, leaving thin layers of hide that enhance its skeletal appearance. A black dragon's head is marked by spikes and horns. Its tongue is flat with a forked tip, drooling slime whose acidic scent adds to the dragon's reek of rotting vegetation and foul water.</p><p>When it hatches, a black dragon has glossy black scale. As it ages, its scales become thicker and duller, helping it blend in to the marshes and blasted ruins that are its home.</p><p><strong>Brutal and Cruel.</strong> All chromatic dragons are evil, but black dragons stand apart for their sadistic nature. A black dragon lives to watch its prey beg for mercy, and will often offer the illusion of respite or escape before finishing off its enemies.</p><p>A black dragon strikes at its weakest enemies first, ensuring a quick and brutal victory, which bolsters its ego as it terrifies its remaining foes. On the verge of defeat, a black dragon does anything it can to save itself, but it accepts death before allowing any other creature to claim mastery over it.</p><p><strong>Foes and Servants.</strong> Black dragons hate and fear other dragons. They spy on draconic rivals from afar, looking for opportunities to slay weaker dragons and avoid stronger ones. If a stronger dragon threatens it, a black dragon abandons its lair and seeks out new territory.</p><p>Evil lizardfolk venerate and serve black dragons, raiding humanoid settlements for treasure and food to give as tribute and building crude draconic effigies along the borders of their dragon master's domain.</p><p>A black dragon's malevolent influence might also cause the spontaneous creation of evil shambling mounds that seek out and slay good creatures approaching the dragon's lair.</p><p>Kobolds infest the lairs of many black dragons like vermin. They become as cruel as their dark masters, often torturing and weakening captives with centipede bites and scorpion stings before delivering them to sate the dragon's hunger.</p><p><strong>Wealth of the Ancients.</strong> Black dragons hoard the treasures and magic items of crumbled empires and conquered kingdoms to remind themselves of their greatness. The more civilizations a dragon outlasts, the more entitled it feels to claim the wealth of current civilizations for itself.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "33",
			"rolls": "6",
			"die": "8",
			"mod": "6"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "15",
		"dex": "14",
		"con": "13",
		"int": "10",
		"wis": "11",
		"chr": "13",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "4"
			},
			{
				"attribute": "con",
				"mod": "3"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "3"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["acid"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "3",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "11",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["poison spray"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 1 spell at level 0 or below. It has a +3 to hit and a DC 11 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "10",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "2",
						"rolls": "1",
						"die": "4",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "acid breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "11",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "22",
						"rolls": "5",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales acid in a 15ft line that is 5ft wide. Each creature in that line must make a DC 11 DEX saving throw, taking 22(5d8) acid damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "black dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>The most evil-tempered&mdash;and vile of the chromatic dragons, black dragons collect the wreckage and treasures of fallen peoples. These dragons loathe seeing the weak prosper and revel in the collapse of humanoid kingdoms. They make their homes in fetid swamps and crumbling ruins where kingdoms once stood.</p><p>With deep-socketed eyes and broad nasal openings, a black dragon's face resembles a skull. Its curving, segmented horns are bone-colored near the base and darken to dead black at the tips. As a black dragon ages, the flesh around its horns and cheekbones deteriorates as though eaten by acid, leaving thin layers of hide that enhance its skeletal appearance. A black dragon's head is marked by spikes and horns. Its tongue is flat with a forked tip, drooling slime whose acidic scent adds to the dragon's reek of rotting vegetation and foul water.</p><p>When it hatches, a black dragon has glossy black scale. As it ages, its scales become thicker and duller, helping it blend in to the marshes and blasted ruins that are its home.</p><p><strong>Brutal and Cruel.</strong> All chromatic dragons are evil, but black dragons stand apart for their sadistic nature. A black dragon lives to watch its prey beg for mercy, and will often offer the illusion of respite or escape before finishing off its enemies.</p><p>A black dragon strikes at its weakest enemies first, ensuring a quick and brutal victory, which bolsters its ego as it terrifies its remaining foes. On the verge of defeat, a black dragon does anything it can to save itself, but it accepts death before allowing any other creature to claim mastery over it.</p><p><strong>Foes and Servants.</strong> Black dragons hate and fear other dragons. They spy on draconic rivals from afar, looking for opportunities to slay weaker dragons and avoid stronger ones. If a stronger dragon threatens it, a black dragon abandons its lair and seeks out new territory.</p><p>Evil lizardfolk venerate and serve black dragons, raiding humanoid settlements for treasure and food to give as tribute and building crude draconic effigies along the borders of their dragon master's domain.</p><p>A black dragon's malevolent influence might also cause the spontaneous creation of evil shambling mounds that seek out and slay good creatures approaching the dragon's lair.</p><p>Kobolds infest the lairs of many black dragons like vermin. They become as cruel as their dark masters, often torturing and weakening captives with centipede bites and scorpion stings before delivering them to sate the dragon's hunger.</p><p><strong>Wealth of the Ancients.</strong> Black dragons hoard the treasures and magic items of crumbled empires and conquered kingdoms to remind themselves of their greatness. The more civilizations a dragon outlasts, the more entitled it feels to claim the wealth of current civilizations for itself.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "127",
			"rolls": "15",
			"die": "10",
			"mod": "45"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "14",
		"con": "17",
		"int": "12",
		"wis": "11",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "6"
			},
			{
				"attribute": "wis",
				"mod": "3"
			},
			{
				"attribute": "cha",
				"mod": "5"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "6"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["acid"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "16",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "7",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "5",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 2 or below. It has a +5 to hit and a DC 13 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon has three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "acid breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "49",
						"rolls": "11",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales acid in a 30ft line that is 5ft wide. Each creature in that line must make a DC 14 DEX saving throw, taking 49(11d8) acid damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "blue dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>Vain and territorial, blue dragons soar through the skies over deserts, preying on caravans and plundering herds and settlements in the verdant lands beyond the desert's reach. These dragons can also be found in dry steppes, searing badlands, and rocky coasts. They guard their territories against all potential competitors, especially brass dragons.</p><p>A blue dragon is recognized by its dramatic frilled ears and the massive ridged horn atop its blunt head. Rows of spikes extend back from its nostrils to line its brow, and cluster on its jutting lower jaw.</p><p>A blue dragon's scales vary in color from an iridescent azure to a deep indigo, polished to a glossy finish by the desert sands. As the dragon ages, its scales become thicker and harder, and its hide hums and crackles with static electricity. These effects intensify when the dragon is angry or about to attack, giving off an odor of ozone and dusty air.</p><p><strong>Vain and Deadly.</strong> A blue dragon will not stand for any remark or insinuation that it is weak or inferior, taking great pleasure in lording its power over humanoids and other lesser creatures.</p><p>A blue dragon is a patient and methodical combatant. When fighting on its own terms, it turns combat into an extended affair of hours or even days, attacking from a distance with volleys of lightning, then flying well out of harm's reach as it waits to attack again.</p><p><strong>Desert Predators.</strong> Though they sometimes eat cacti and other desert plants to sate their great hunger, blue dragons are carnivores. They prefer to dine on herd animals, cooking those creatures with their lightning breath before gorging themselves. Their dining habits make blue dragons an enormous threat to desert caravans and nomadic tribes, which become convenient collections of food and treasure to a dragon's eye.</p><p>When it hunts, a blue dragon buries itself in the desert sand so that only the horn on its nose pokes above the surface, appearing to be an outcropping of stone. When prey draws near, the dragon rises up, sand pouring from its wings like an avalanche as it attacks.</p><p><strong>Overlords and Minions.</strong> Blue dragons covet valuable and talented creatures whose service reinforces their sense of superiority. Bards, sages, artists, wizards, and assassins can become valuable agents for a blue dragon, which rewards loyal service handsomely.</p><p>A blue dragon keeps its lair secret and well protected, and even its most trusted servants are rarely allowed within. It encourages ankhegs, giant scorpions, and other creatures of the desert to dwell near its lair for additional security. Older blue dragons sometimes attract air elementals and other creatures to serve them.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "22",
		"armor": ["natural"],
		"hp": {
			"default": "481",
			"rolls": "26",
			"die": "20",
			"mod": "208"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "29",
		"dex": "10",
		"con": "27",
		"int": "18",
		"wis": "17",
		"chr": "21",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "con",
				"mod": "15"
			},
			{
				"attribute": "wis",
				"mod": "10"
			},
			{
				"attribute": "cha",
				"mod": "12"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "17"
			},
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "27",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","conjure elemental","move earth","finger of death"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 5 spells at level 7 or below. It has a +12 bonus to hit and a DC 20 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "16",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "20",
						"rolls": "2",
						"die": "10",
						"mod": "9",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "11",
						"rolls": "2",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "16",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "16",
						"rolls": "2",
						"die": "6",
						"mod": "9",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "16",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "18",
						"rolls": "2",
						"die": "8",
						"mod": "9",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "20",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 20 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "23",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "120",
						"default": "88",
						"rolls": "16",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales lightning in a 120ft line that is 10ft wide. Each creature in that line must make a DC 23 DEX saving throw, taking 88(16d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 24 DEX saving throw or take 16(2d6+9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Blue dragons make their lairs in barren places, using their lightning breath and their burrowing ability to carve out crystallized caverns and tunnels beneath the sands.</p><p>Thunderstorms rage around a legendary blue dragon's lair, and narrow tubes lined with glassy sand ventilate the lair, all the while avoiding the deadly sinkholes that are the dragon's first line of defense.</p><p>A blue dragon will collapse the caverns that make up its lair if that lair is invaded. The dragon then burrows out, leaving its attackers to be crushed and suffocated. When it returns later, it collects its possessions - along with the wealth of the dead intruders.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Part of the ceiling collapses above one creature that the dragon can see within 120ft of it. The creature must succeed on a DC 15 DEX saving throw or take 10(3d6) bludgeoning damage and be knocked prone and buried. The buried target is restrained and unable to breathe or stand up. A creature can take an action to make a DC 10 STR check, ending the buried state on a success.</p>",
				"<p>A cloud of sand swirls about in a 20ft-radius sphere centered on a point the dragon can see within 120ft of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 CON saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
				"<p>Lightning arcs, forming a 5ft-wide line between two of the lair's solid surfaces that the dragon can see. They must be within 120ft of the dragon and 120ft of each other. Each creature in that line must succeed on a DC 15 DEX saving throw or take 10(3d6) lightning damage.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Thunderstorms rage within 6 miles of the lair.</p>",
				"<p>Dust devils scour the land within 6 miles of the lair. A dust devil has the statistics of an air elemental, but it can't fly, has a speed of 50ft, and has an INT and CHA of 1.</p>",
				"<p>Hidden sinkholes form in and around the dragon's lair. A sinkhole can be spotted from a safe distancewith a successful DC 20 WIS(Perception) check. Otherwise, the first creature to step on the thincrust covering the sinkhole must succeed on a DC 15 DEX saving throw or fall 1d6 x 10ft into the sinkhole.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "blue dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>Vain and territorial, blue dragons soar through the skies over deserts, preying on caravans and plundering herds and settlements in the verdant lands beyond the desert's reach. These dragons can also be found in dry steppes, searing badlands, and rocky coasts. They guard their territories against all potential competitors, especially brass dragons.</p><p>A blue dragon is recognized by its dramatic frilled ears and the massive ridged horn atop its blunt head. Rows of spikes extend back from its nostrils to line its brow, and cluster on its jutting lower jaw.</p><p>A blue dragon's scales vary in color from an iridescent azure to a deep indigo, polished to a glossy finish by the desert sands. As the dragon ages, its scales become thicker and harder, and its hide hums and crackles with static electricity. These effects intensify when the dragon is angry or about to attack, giving off an odor of ozone and dusty air.</p><p><strong>Vain and Deadly.</strong> A blue dragon will not stand for any remark or insinuation that it is weak or inferior, taking great pleasure in lording its power over humanoids and other lesser creatures.</p><p>A blue dragon is a patient and methodical combatant. When fighting on its own terms, it turns combat into an extended affair of hours or even days, attacking from a distance with volleys of lightning, then flying well out of harm's reach as it waits to attack again.</p><p><strong>Desert Predators.</strong> Though they sometimes eat cacti and other desert plants to sate their great hunger, blue dragons are carnivores. They prefer to dine on herd animals, cooking those creatures with their lightning breath before gorging themselves. Their dining habits make blue dragons an enormous threat to desert caravans and nomadic tribes, which become convenient collections of food and treasure to a dragon's eye.</p><p>When it hunts, a blue dragon buries itself in the desert sand so that only the horn on its nose pokes above the surface, appearing to be an outcropping of stone. When prey draws near, the dragon rises up, sand pouring from its wings like an avalanche as it attacks.</p><p><strong>Overlords and Minions.</strong> Blue dragons covet valuable and talented creatures whose service reinforces their sense of superiority. Bards, sages, artists, wizards, and assassins can become valuable agents for a blue dragon, which rewards loyal service handsomely.</p><p>A blue dragon keeps its lair secret and well protected, and even its most trusted servants are rarely allowed within. It encourages ankhegs, giant scorpions, and other creatures of the desert to dwell near its lair for additional security. Older blue dragons sometimes attract air elementals and other creatures to serve them.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "225",
			"rolls": "18",
			"die": "12",
			"mod": "108"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "25",
		"dex": "10",
		"con": "23",
		"int": "16",
		"wis": "15",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "11"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},
			{
				"attribute": "cha",
				"mod": "9"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "12"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "22",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "16",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "9",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "17",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","conjure elemental","lightning bolt"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 4 spells at level 5 or below. It has a +9 bonus to hit and a DC 17 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "18",
						"rolls": "2",
						"die": "10",
						"mod": "7",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "5",
						"rolls": "1",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "2",
						"die": "6",
						"mod": "7",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "16",
						"rolls": "2",
						"die": "8",
						"mod": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "17",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 17 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "19",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "",
						"default": "66",
						"rolls": "12",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales lightning in a 90ft line that is 5ft wide. Each creature in that line must make a DC 19 DEX saving throw, taking 66(12d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 20 DEX saving throw or take 14(2d6+7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Blue dragons make their lairs in barren places, using their lightning breath and their burrowing ability to carve out crystallized caverns and tunnels beneath the sands.</p><p>Thunderstorms rage around a legendary blue dragon's lair, and narrow tubes lined with glassy sand ventilate the lair, all the while avoiding the deadly sinkholes that are the dragon's first line of defense.</p><p>A blue dragon will collapse the caverns that make up its lair if that lair is invaded. The dragon then burrows out, leaving its attackers to be crushed and suffocated. When it returns later, it collects its possessions - along with the wealth of the dead intruders.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Part of the ceiling collapses above one creature that the dragon can see within 120ft of it. The creature must succeed on a DC 15 DEX saving throw or take 10(3d6) bludgeoning damage and be knocked prone and buried. The buried target is restrained and unable to breathe or stand up. A creature can take an action to make a DC 10 STR check, ending the buried state on a success.</p>",
				"<p>A cloud of sand swirls about in a 20ft-radius sphere centered on a point the dragon can see within 120ft of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 CON saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
				"<p>Lightning arcs, forming a 5ft-wide line between two of the lair's solid surfaces that the dragon can see. They must be within 120ft of the dragon and 120ft of each other. Each creature in that line must succeed on a DC 15 DEX saving throw or take 10(3d6) lightning damage.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Thunderstorms rage within 6 miles of the lair.</p>",
				"<p>Dust devils scour the land within 6 miles of the lair. A dust devil has the statistics of an air elemental, but it can't fly, has a speed of 50ft, and has an INT and CHA of 1.</p>",
				"<p>Hidden sinkholes form in and around the dragon's lair. A sinkhole can be spotted from a safe distancewith a successful DC 20 WIS(Perception) check. Otherwise, the first creature to step on the thincrust covering the sinkhole must succeed on a DC 15 DEX saving throw or fall 1d6 x 10ft into the sinkhole.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "blue dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>Vain and territorial, blue dragons soar through the skies over deserts, preying on caravans and plundering herds and settlements in the verdant lands beyond the desert's reach. These dragons can also be found in dry steppes, searing badlands, and rocky coasts. They guard their territories against all potential competitors, especially brass dragons.</p><p>A blue dragon is recognized by its dramatic frilled ears and the massive ridged horn atop its blunt head. Rows of spikes extend back from its nostrils to line its brow, and cluster on its jutting lower jaw.</p><p>A blue dragon's scales vary in color from an iridescent azure to a deep indigo, polished to a glossy finish by the desert sands. As the dragon ages, its scales become thicker and harder, and its hide hums and crackles with static electricity. These effects intensify when the dragon is angry or about to attack, giving off an odor of ozone and dusty air.</p><p><strong>Vain and Deadly.</strong> A blue dragon will not stand for any remark or insinuation that it is weak or inferior, taking great pleasure in lording its power over humanoids and other lesser creatures.</p><p>A blue dragon is a patient and methodical combatant. When fighting on its own terms, it turns combat into an extended affair of hours or even days, attacking from a distance with volleys of lightning, then flying well out of harm's reach as it waits to attack again.</p><p><strong>Desert Predators.</strong> Though they sometimes eat cacti and other desert plants to sate their great hunger, blue dragons are carnivores. They prefer to dine on herd animals, cooking those creatures with their lightning breath before gorging themselves. Their dining habits make blue dragons an enormous threat to desert caravans and nomadic tribes, which become convenient collections of food and treasure to a dragon's eye.</p><p>When it hunts, a blue dragon buries itself in the desert sand so that only the horn on its nose pokes above the surface, appearing to be an outcropping of stone. When prey draws near, the dragon rises up, sand pouring from its wings like an avalanche as it attacks.</p><p><strong>Overlords and Minions.</strong> Blue dragons covet valuable and talented creatures whose service reinforces their sense of superiority. Bards, sages, artists, wizards, and assassins can become valuable agents for a blue dragon, which rewards loyal service handsomely.</p><p>A blue dragon keeps its lair secret and well protected, and even its most trusted servants are rarely allowed within. It encourages ankhegs, giant scorpions, and other creatures of the desert to dwell near its lair for additional security. Older blue dragons sometimes attract air elementals and other creatures to serve them.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "52",
			"rolls": "8",
			"die": "8",
			"mod": "16"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "15",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "17",
		"dex": "10",
		"con": "15",
		"int": "12",
		"wis": "11",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "2"
			},
			{
				"attribute": "con",
				"mod": "4"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "2"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "4",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "12",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["eldritch blast","true strike"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 0 or below. It has a +4 bonus to hit and a DC 12 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "10",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "12",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "",
						"default": "22",
						"rolls": "4",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales lightning in a 30ft line that is 5ft wide. Each creature in that line must make a DC 12 DEX saving throw, taking 22(4d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "blue dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>Vain and territorial, blue dragons soar through the skies over deserts, preying on caravans and plundering herds and settlements in the verdant lands beyond the desert's reach. These dragons can also be found in dry steppes, searing badlands, and rocky coasts. They guard their territories against all potential competitors, especially brass dragons.</p><p>A blue dragon is recognized by its dramatic frilled ears and the massive ridged horn atop its blunt head. Rows of spikes extend back from its nostrils to line its brow, and cluster on its jutting lower jaw.</p><p>A blue dragon's scales vary in color from an iridescent azure to a deep indigo, polished to a glossy finish by the desert sands. As the dragon ages, its scales become thicker and harder, and its hide hums and crackles with static electricity. These effects intensify when the dragon is angry or about to attack, giving off an odor of ozone and dusty air.</p><p><strong>Vain and Deadly.</strong> A blue dragon will not stand for any remark or insinuation that it is weak or inferior, taking great pleasure in lording its power over humanoids and other lesser creatures.</p><p>A blue dragon is a patient and methodical combatant. When fighting on its own terms, it turns combat into an extended affair of hours or even days, attacking from a distance with volleys of lightning, then flying well out of harm's reach as it waits to attack again.</p><p><strong>Desert Predators.</strong> Though they sometimes eat cacti and other desert plants to sate their great hunger, blue dragons are carnivores. They prefer to dine on herd animals, cooking those creatures with their lightning breath before gorging themselves. Their dining habits make blue dragons an enormous threat to desert caravans and nomadic tribes, which become convenient collections of food and treasure to a dragon's eye.</p><p>When it hunts, a blue dragon buries itself in the desert sand so that only the horn on its nose pokes above the surface, appearing to be an outcropping of stone. When prey draws near, the dragon rises up, sand pouring from its wings like an avalanche as it attacks.</p><p><strong>Overlords and Minions.</strong> Blue dragons covet valuable and talented creatures whose service reinforces their sense of superiority. Bards, sages, artists, wizards, and assassins can become valuable agents for a blue dragon, which rewards loyal service handsomely.</p><p>A blue dragon keeps its lair secret and well protected, and even its most trusted servants are rarely allowed within. It encourages ankhegs, giant scorpions, and other creatures of the desert to dwell near its lair for additional security. Older blue dragons sometimes attract air elementals and other creatures to serve them.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "152",
			"rolls": "16",
			"die": "10",
			"mod": "64"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "20",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "21",
		"dex": "10",
		"con": "19",
		"int": "14",
		"wis": "13",
		"chr": "17",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "4"
			},
			{
				"attribute": "con",
				"mod": "8"
			},
			{
				"attribute": "wis",
				"mod": "5"
			},
			{
				"attribute": "cha",
				"mod": "7"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "9"
			},
			{
				"name": "stealth",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "19",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "9",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","meld into stone"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 3 spells at level 3 or below. It has a +7 bonus to hit and a DC 15 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "16",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "55",
						"rolls": "10",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales lightning in a 60ft linr that is 5ft wide. Each creature in that area must make a DC 16 CON saving throw, taking 55(10d10) poison damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "bone devil (osyluth)",
		"pro": "",
		"src": "",
		"desc": "<p>Driven by hate, lust, and envy, bone devils act as the cruel taskmasters of the Nine Hells. They set weaker devils to work, taking special delight in seeing fiends that defy them demoted. At the same time, they long for promotion and are bitterly envious of their superiors, attempting to curry favor though it irks them to do so.</p><p>A bone devil appears as a humanoid husk, with dried skin stretched tight across its skeletal frame. It bears a fearsome skull-like head and the tail of a scorpion, and a foul odor of decay hangs in the air around it. Though they are devastating in combat with their claws, bone devils also wield hooked polearms made of bone, which they use to subdue enemies before striking with their venomous tails.</p>",
		"size": "large",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "142",
			"rolls": "15",
			"die": "10",
			"mod": "60"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}	
		],
		"str": "18",
		"dex": "16",
		"con": "18",
		"int": "13",
		"wis": "14",
		"chr": "16",
		"savingThrows": [
			{
				"attribute": "int",
				"mod": "5"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "7"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "7"
			},
			{
				"name": "insight",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "12",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "9",
		"traits": [
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil makes three attacks: two with its claws and one with its sting or one with it's hooked polearm and one with its sting.</p>"
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "8",
						"rolls": "1",
						"die": "8",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "hooked polearm",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "12",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": "<p>Variant. If the target is a huge or smaller creature, it is grappled (DC 14 STR/DEX). Until this grapple ends, the devil can't use its polearm on another target.</p>"
			},
			{
				"name": "sting",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "13",
						"rolls": "2",
						"die": "8",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "17",
						"rolls": "5",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 14 CON saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "summon devil - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A bone devil has a 40% chance of summoning 2d6 spined devils or one bone devil. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "brass dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>The most gregarious of the true dragons, brass dragons crave conversation, sunlight, and hot, dry climates.</p><p>A brass dragon's head is defined by the broad protective plate that expands from its forehead and the spikes protruding from its chin. A frill runs the length of its neck, and its tapering wings extend down the length of its tail. A brass dragon wyrmling's scales are a dull, mottled brown. As it ages, the dragon's scales begin to shine, eventually taking on a warm, burnished luster. Its wings and frills are mottled green toward the edges, darkening with age. As a brass dragon grows older, its pupils fade until its eyes resemble molten metal orbs.</p><p><strong>Boldly Talkative.</strong> A brass dragon engages in conversations with thousands of creatures throughout its long life, accumulating useful information which it will gladly share for gifts of treasure. If an intelligent creature tries to leave a brass dragon's presence without engaging in conversation, the dragon follows it. If the creature attempts to escape by magic or force, the dragon might respond with a fit of pique, using its sleep gas to incapacitate the creature. When it wakes, the creature finds itself pinned to the ground by giant claws or buried up to its neck in the sand while the dragon's thirst for small talk is slaked.</p><p>A brass dragon is trusting of creatures that appear to enjoy conversation as much as it does, but is smart enough to know when it is being manipulated. When that happens, tne dragon often responds in kind, treating a bout of mutual trickery as a game.</p><p><strong>Prized Treasures.</strong> Brass dragons covet magic items that allow them to converse with interesting personalities. An intelligent telepathic weapon or a magic lamp with a djinni bound inside it are among the greatest treasures a brass dragon can possess.</p><p>Brass dragons conceal their hoards under mounds of sand or in secret places far from their primary lairs. They have no trouble remembering where their treasure is buried, and therefore have no need for maps. Adventurers and wanderers should be wary if they happen across a chest hidden in an oasis or a treasure cache tucked away in a half-buried desert ruin, for these might be parts of a brass dragon's hoard.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "20",
		"armor": ["natural"],
		"hp": {
			"default": "297",
			"rolls": "17",
			"die": "20",
			"mod": "119"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "27",
		"dex": "10",
		"con": "25",
		"int": "16",
		"wis": "15",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "6"
			},
			{
				"attribute": "con",
				"mod": "13"
			},
			{
				"attribute": "wis",
				"mod": "8"
			},
			{
				"attribute": "cha",
				"mod": "10"
			}
		],
		"skills": [
			{
				"name": "history",
				"mod": "9"
			},
			{
				"name": "perception",
				"mod": "14"
			},
			{
				"name": "persuasion",
				"mod": "10"
			},
			{
				"name": "stealth",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "24",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "20",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "10",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "18",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["comprehend languages","detect thoughts","counterspell","heal"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 4 spells at level 6 or below. It has a +10 bonus to hit and a DC 18 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 18 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "21",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "56",
						"rolls": "16",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 90ft line that is 10ft wide. Each creature in that line must make a DC 21 DEX saving throw, taking 56(16d6) fire damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "sleep breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "21",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales sleep gas in a 90ft cone. Each creature in that area must succeed on a DC 21 CON saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.</p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, HP, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, INT, WIS, and CHA scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 22 DEX saving throw or take 15(2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>A brass dragon's desert lair is typically a ruin, canyon, or cave network with ceiling holes to allow for sunlight.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>A strong wind blows around the dragon. Each creature within 60ft of the dragon must succeed on a DC 15 STR saving throw or be pushed 15ft away from the dragon and knocked prone. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames; such as lanterns, have a 50% chance of being extinguished.</p>",
				"<p>A cloud of sand swirls about in a 20ft-radius sphere centered on a point the dragon can see within 120ft of it. The cloud spreads around corners. Each creature in it must succeed on a DC 15 CON saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Tracks appear in the sand within 6 miles of the dragon's lair. The tracks lead to safe shelters and hidden water sources, while also leading away from areas that the dragon prefers to remain undisturbed.</p>",
				"<p>Images of large or smaller monsters haunt the desert sands within 1 mile of the dragon's lair. These illusions move and appear real, although they can do no harm. A creature that examines an image from a distance can tell it's an illusion with a successful DC 20 INT(Investigation) check. Any physical interaction with an image reveals it to be an illusion, because objects pass through it.</p>",
				"<p>Whenever a creature with an INT of 3 or higher comes within 30ft of a water source within 1 mile of the dragon's lair, the dragon becomes aware of the creature's presence and location.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "brass dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>The most gregarious of the true dragons, brass dragons crave conversation, sunlight, and hot, dry climates.</p><p>A brass dragon's head is defined by the broad protective plate that expands from its forehead and the spikes protruding from its chin. A frill runs the length of its neck, and its tapering wings extend down the length of its tail. A brass dragon wyrmling's scales are a dull, mottled brown. As it ages, the dragon's scales begin to shine, eventually taking on a warm, burnished luster. Its wings and frills are mottled green toward the edges, darkening with age. As a brass dragon grows older, its pupils fade until its eyes resemble molten metal orbs.</p><p><strong>Boldly Talkative.</strong> A brass dragon engages in conversations with thousands of creatures throughout its long life, accumulating useful information which it will gladly share for gifts of treasure. If an intelligent creature tries to leave a brass dragon's presence without engaging in conversation, the dragon follows it. If the creature attempts to escape by magic or force, the dragon might respond with a fit of pique, using its sleep gas to incapacitate the creature. When it wakes, the creature finds itself pinned to the ground by giant claws or buried up to its neck in the sand while the dragon's thirst for small talk is slaked.</p><p>A brass dragon is trusting of creatures that appear to enjoy conversation as much as it does, but is smart enough to know when it is being manipulated. When that happens, tne dragon often responds in kind, treating a bout of mutual trickery as a game.</p><p><strong>Prized Treasures.</strong> Brass dragons covet magic items that allow them to converse with interesting personalities. An intelligent telepathic weapon or a magic lamp with a djinni bound inside it are among the greatest treasures a brass dragon can possess.</p><p>Brass dragons conceal their hoards under mounds of sand or in secret places far from their primary lairs. They have no trouble remembering where their treasure is buried, and therefore have no need for maps. Adventurers and wanderers should be wary if they happen across a chest hidden in an oasis or a treasure cache tucked away in a half-buried desert ruin, for these might be parts of a brass dragon's hoard.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "172",
			"rolls": "15",
			"die": "12",
			"mod": "75"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "23",
		"dex": "10",
		"con": "21",
		"int": "14",
		"wis": "13",
		"chr": "17",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "10"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "history",
				"mod": "7"
			},
			{
				"name": "perception",
				"mod": "11"
			},
			{
				"name": "persuasion",
				"mod": "8"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "21",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "13",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "8",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "16",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["comprehend languages","detect thoughts","counterspell"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 3 spells at level 4 or below. It has a +8 bonus to hit and a DC 16 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "15",
						"rolls": "2",
						"die": "8",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "16",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 16 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "49",
						"rolls": "13",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 60ft line that is 5ft wide. Each creature in that line must make a DC 18 DEX saving throw, taking 49(13d6) fire damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "sleep breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales sleep gas in a 60ft cone. Each creature in that area must succeed on a DC 18 CON saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 19 DEX saving throw or take 13(2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>A brass dragon's desert lair is typically a ruin, canyon, or cave network with ceiling holes to allow for sunlight.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>A strong wind blows around the dragon. Each creature within 60ft of the dragon must succeed on a DC 15 STR saving throw or be pushed 15ft away from the dragon and knocked prone. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames; such as lanterns, have a 50% chance of being extinguished.</p>",
				"<p>A cloud of sand swirls about in a 20ft-radius sphere centered on a point the dragon can see within 120ft of it. The cloud spreads around corners. Each creature in it must succeed on a DC 15 CON saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Tracks appear in the sand within 6 miles of the dragon's lair. The tracks lead to safe shelters and hidden water sources, while also leading away from areas that the dragon prefers to remain undisturbed.</p>",
				"<p>Images of large or smaller monsters haunt the desert sands within 1 mile of the dragon's lair. These illusions move and appear real, although they can do no harm. A creature that examines an image from a distance can tell it's an illusion with a successful DC 20 INT(Investigation) check. Any physical interaction with an image reveals it to be an illusion, because objects pass through it.</p>",
				"<p>Whenever a creature with an INT of 3 or higher comes within 30ft of a water source within 1 mile of the dragon's lair, the dragon becomes aware of the creature's presence and location.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "brass dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>The most gregarious of the true dragons, brass dragons crave conversation, sunlight, and hot, dry climates.</p><p>A brass dragon's head is defined by the broad protective plate that expands from its forehead and the spikes protruding from its chin. A frill runs the length of its neck, and its tapering wings extend down the length of its tail. A brass dragon wyrmling's scales are a dull, mottled brown. As it ages, the dragon's scales begin to shine, eventually taking on a warm, burnished luster. Its wings and frills are mottled green toward the edges, darkening with age. As a brass dragon grows older, its pupils fade until its eyes resemble molten metal orbs.</p><p><strong>Boldly Talkative.</strong> A brass dragon engages in conversations with thousands of creatures throughout its long life, accumulating useful information which it will gladly share for gifts of treasure. If an intelligent creature tries to leave a brass dragon's presence without engaging in conversation, the dragon follows it. If the creature attempts to escape by magic or force, the dragon might respond with a fit of pique, using its sleep gas to incapacitate the creature. When it wakes, the creature finds itself pinned to the ground by giant claws or buried up to its neck in the sand while the dragon's thirst for small talk is slaked.</p><p>A brass dragon is trusting of creatures that appear to enjoy conversation as much as it does, but is smart enough to know when it is being manipulated. When that happens, tne dragon often responds in kind, treating a bout of mutual trickery as a game.</p><p><strong>Prized Treasures.</strong> Brass dragons covet magic items that allow them to converse with interesting personalities. An intelligent telepathic weapon or a magic lamp with a djinni bound inside it are among the greatest treasures a brass dragon can possess.</p><p>Brass dragons conceal their hoards under mounds of sand or in secret places far from their primary lairs. They have no trouble remembering where their treasure is buried, and therefore have no need for maps. Adventurers and wanderers should be wary if they happen across a chest hidden in an oasis or a treasure cache tucked away in a half-buried desert ruin, for these might be parts of a brass dragon's hoard.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "16",
		"armor": ["natural"],
		"hp": {
			"default": "16",
			"rolls": "3",
			"die": "8",
			"mod": "3"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "15",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "15",
		"dex": "10",
		"con": "13",
		"int": "10",
		"wis": "11",
		"chr": "13",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "2"
			},
			{
				"attribute": "con",
				"mod": "3"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "3"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "2"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "3",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "11",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["spare the dying"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 1 spells at level 0 or below. It has a +3 bonus to hit and a DC 11 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "10",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "11",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "20",
						"default": "14",
						"rolls": "4",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 20ft line that is 5ft wide. Each creature in that line must make a DC 11 DEX saving throw, taking 14(4d6) fire damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "sleep breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "11",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales sleep gas in a 15ft cone. Each creature in that area must succeed on a DC 11 CON saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "brass dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>The most gregarious of the true dragons, brass dragons crave conversation, sunlight, and hot, dry climates.</p><p>A brass dragon's head is defined by the broad protective plate that expands from its forehead and the spikes protruding from its chin. A frill runs the length of its neck, and its tapering wings extend down the length of its tail. A brass dragon wyrmling's scales are a dull, mottled brown. As it ages, the dragon's scales begin to shine, eventually taking on a warm, burnished luster. Its wings and frills are mottled green toward the edges, darkening with age. As a brass dragon grows older, its pupils fade until its eyes resemble molten metal orbs.</p><p><strong>Boldly Talkative.</strong> A brass dragon engages in conversations with thousands of creatures throughout its long life, accumulating useful information which it will gladly share for gifts of treasure. If an intelligent creature tries to leave a brass dragon's presence without engaging in conversation, the dragon follows it. If the creature attempts to escape by magic or force, the dragon might respond with a fit of pique, using its sleep gas to incapacitate the creature. When it wakes, the creature finds itself pinned to the ground by giant claws or buried up to its neck in the sand while the dragon's thirst for small talk is slaked.</p><p>A brass dragon is trusting of creatures that appear to enjoy conversation as much as it does, but is smart enough to know when it is being manipulated. When that happens, tne dragon often responds in kind, treating a bout of mutual trickery as a game.</p><p><strong>Prized Treasures.</strong> Brass dragons covet magic items that allow them to converse with interesting personalities. An intelligent telepathic weapon or a magic lamp with a djinni bound inside it are among the greatest treasures a brass dragon can possess.</p><p>Brass dragons conceal their hoards under mounds of sand or in secret places far from their primary lairs. They have no trouble remembering where their treasure is buried, and therefore have no need for maps. Adventurers and wanderers should be wary if they happen across a chest hidden in an oasis or a treasure cache tucked away in a half-buried desert ruin, for these might be parts of a brass dragon's hoard.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "110",
			"rolls": "13",
			"die": "10",
			"mod": "39"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "20",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "10",
		"con": "17",
		"int": "12",
		"wis": "11",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "8"
			},
			{
				"attribute": "wis",
				"mod": "5"
			},
			{
				"attribute": "cha",
				"mod": "7"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "10"
			},
			{
				"name": "persuasion",
				"mod": "7"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "20",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "6",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "5",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["comprehend languages","detect thoughts"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 2 or below. It has a +5 bonus to hit and a DC 13 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "40",
						"default": "42",
						"rolls": "12",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 40ft line that is 5ft wide. Each creature in that line must make a DC 14 DEX saving throw, taking 42(12d6) fire damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "sleep breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales sleep gas in a 30ft cone. Each creature in that area must succeed on a DC 14 CON saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "bronze dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>Bronze dragons are coastal dwellers that feed primarily on aquatic plants and fish. They take the forms of friendly animals to observe other creatures of interest. They are also fascinated by warfare and eagerly join armies fighting for a just cause.</p><p>A ribbed and fluted crest defines the shape of a bronze dragon's head. Curving horns extend out from the crest, echoed by spines on its lower jaw and chin. To help them swim, bronze dragons have webbed feet and smooth scales. A bronze wyrmling's scales are yellow tinged with green; only as the dragon approaches adulthood does its color deepen to a darker, rich bronze tone. The pupils of a bronze dragon's eyes fade as the dragon ages, until they resemble glowing green orbs.</p><p><strong>Dragons of the Coast.</strong> Bronze dragons love to watch ships traveling up and down the coastlines near their lairs, sometimes taking the forms of dolphins or seagulls to inspect those ships and their crews more closely. A daring bronze dragon might slip aboard a ship in the guise of a bird or rat, inspecting the hold for treasure. If the dragon finds a worthy addition to its hoard, it barters with the ship's captain for the item.</p><p><strong>War Machines.</strong> Bronze dragons actively oppose tyranny, and many bronze dragons yearn to test their mettle by putting their size and strength to good use.</p><p>When a conflict unfolds near its lair, a bronze dragon ascertains the underlying cause, then offers its services to any side that fights for good. Once a bronze dragon commits to a cause, it remains a staunch ally.</p><p><strong>Well-Organized Wealth.</strong> Bronze dragons loot sunken ships and also collect colorful coral and pearls from the reefs and seabeds near their lairs. When a bronze dragon pledges to help an army wage war against tyranny, it asks for nominal payment. If such a request is beyond its allies' means, it might settle for a collection of old books on military history or a ceremonial item commemorating the alliance. A bronze dragon might also lay claim to a treasure held by the enemy that it feels would be safer under its protection.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "22",
		"armor": ["natural"],
		"hp": {
			"default": "444",
			"rolls": "24",
			"die": "20",
			"mod": "192"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "29",
		"dex": "10",
		"con": "27",
		"int": "18",
		"wis": "17",
		"chr": "21",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "con",
				"mod": "15"
			},
			{
				"attribute": "wis",
				"mod": "10"
			},
			{
				"attribute": "cha",
				"mod": "12"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "10"
			},
			{
				"name": "perception",
				"mod": "17"
			},
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "27",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "22",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "12",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "20",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["comprehend languages","ray of enfeeblement","reincarnate","heal","resurrection"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 5 spells at level 7 or below. It has a +12 bonus to hit and a DC 20 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "16",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "20",
						"rolls": "2",
						"die": "10",
						"mod": "9",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "16",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "16",
						"rolls": "2",
						"die": "6",
						"mod": "9",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "16",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "18",
						"rolls": "2",
						"die": "8",
						"mod": "9",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "20",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 20 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "23",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "120",
						"default": "88",
						"rolls": "16",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales lightning in a 120ft line that is 10ft wide. Each creature in that line must make a DC 23 DEX saving throw, taking 88(16d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "repulsion breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "23",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales repulsion energy in a 30ft cone. Each creature in that area must succeed on a DC 23 STR saving throw. On a failed save, the creature is pushed 60ft away from the dragon.</p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, HP, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, INT, WIS, and CHA scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 24 DEX saving throw or take 16(2d6+9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>A bronze dragon lairs in coastal caves. It might salvage a wrecked ship, reconstruct it within the confines of its lair, and use it as a treasure vault or nest for its eggs.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The dragon creates fog as though it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round.</p>",
				"<p>A thunderclap originates at a point the dragon can see within 120ft of it. Each creature within a 20ft radius centered on that point must make a DC 15 CON saving throw or take 5(1d10) thunder damage and be deafened until the end of its next turn.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell.</p>",
				"<p>Underwater plants within 6 miles of the dragon's lair take on dazzlingly brilliant hues.</p>",
				"<p>Within its lair, the dragon can set illusory sounds, such as soft music and strange echoes, so that they can be heard in various parts of the lair.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "bronze dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>Bronze dragons are coastal dwellers that feed primarily on aquatic plants and fish. They take the forms of friendly animals to observe other creatures of interest. They are also fascinated by warfare and eagerly join armies fighting for a just cause.</p><p>A ribbed and fluted crest defines the shape of a bronze dragon's head. Curving horns extend out from the crest, echoed by spines on its lower jaw and chin. To help them swim, bronze dragons have webbed feet and smooth scales. A bronze wyrmling's scales are yellow tinged with green; only as the dragon approaches adulthood does its color deepen to a darker, rich bronze tone. The pupils of a bronze dragon's eyes fade as the dragon ages, until they resemble glowing green orbs.</p><p><strong>Dragons of the Coast.</strong> Bronze dragons love to watch ships traveling up and down the coastlines near their lairs, sometimes taking the forms of dolphins or seagulls to inspect those ships and their crews more closely. A daring bronze dragon might slip aboard a ship in the guise of a bird or rat, inspecting the hold for treasure. If the dragon finds a worthy addition to its hoard, it barters with the ship's captain for the item.</p><p><strong>War Machines.</strong> Bronze dragons actively oppose tyranny, and many bronze dragons yearn to test their mettle by putting their size and strength to good use.</p><p>When a conflict unfolds near its lair, a bronze dragon ascertains the underlying cause, then offers its services to any side that fights for good. Once a bronze dragon commits to a cause, it remains a staunch ally.</p><p><strong>Well-Organized Wealth.</strong> Bronze dragons loot sunken ships and also collect colorful coral and pearls from the reefs and seabeds near their lairs. When a bronze dragon pledges to help an army wage war against tyranny, it asks for nominal payment. If such a request is beyond its allies' means, it might settle for a collection of old books on military history or a ceremonial item commemorating the alliance. A bronze dragon might also lay claim to a treasure held by the enemy that it feels would be safer under its protection.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "212",
			"rolls": "17",
			"die": "12",
			"mod": "102"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "25",
		"dex": "10",
		"con": "23",
		"int": "16",
		"wis": "15",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "11"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},
			{
				"attribute": "cha",
				"mod": "9"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "7"
			},
			{
				"name": "perception",
				"mod": "12"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "9",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "17",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["comprehend languages","ray of enfeeblement","resilient sphere","reincarnate"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 4 spells at level 5 or below. It has a +9 bonus to hit and a DC 17 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "18",
						"rolls": "2",
						"die": "10",
						"mod": "7",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "2",
						"die": "6",
						"mod": "7",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "16",
						"rolls": "2",
						"die": "8",
						"mod": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "17",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 17 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "19",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "66",
						"rolls": "12",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales lightning in a 90ft line that is 5ft wide. Each creature in that line must make a DC 19 DEX saving throw, taking 66(12d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "repulsion breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "19",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales repulsion energy in a 30ft cone. Each creature in that area must succeed on a DC 19 STR saving throw. On a failed save, the creature is pushed 60ft away from the dragon.</p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, HP, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, INT, WIS, and CHA scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within XXft of the dragon must succeed on a DC 20 DEX saving throw or take 14(2d6+7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>A bronze dragon lairs in coastal caves. It might salvage a wrecked ship, reconstruct it within the confines of its lair, and use it as a treasure vault or nest for its eggs.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The dragon creates fog as though it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round.</p>",
				"<p>A thunderclap originates at a point the dragon can see within 120ft of it. Each creature within a 20ft radius centered on that point must make a DC 15 CON saving throw or take 5(1d10) thunder damage and be deafened until the end of its next turn.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell.</p>",
				"<p>Underwater plants within 6 miles of the dragon's lair take on dazzlingly brilliant hues.</p>",
				"<p>Within its lair, the dragon can set illusory sounds, such as soft music and strange echoes, so that they can be heard in various parts of the lair.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "bronze dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>Bronze dragons are coastal dwellers that feed primarily on aquatic plants and fish. They take the forms of friendly animals to observe other creatures of interest. They are also fascinated by warfare and eagerly join armies fighting for a just cause.</p><p>A ribbed and fluted crest defines the shape of a bronze dragon's head. Curving horns extend out from the crest, echoed by spines on its lower jaw and chin. To help them swim, bronze dragons have webbed feet and smooth scales. A bronze wyrmling's scales are yellow tinged with green; only as the dragon approaches adulthood does its color deepen to a darker, rich bronze tone. The pupils of a bronze dragon's eyes fade as the dragon ages, until they resemble glowing green orbs.</p><p><strong>Dragons of the Coast.</strong> Bronze dragons love to watch ships traveling up and down the coastlines near their lairs, sometimes taking the forms of dolphins or seagulls to inspect those ships and their crews more closely. A daring bronze dragon might slip aboard a ship in the guise of a bird or rat, inspecting the hold for treasure. If the dragon finds a worthy addition to its hoard, it barters with the ship's captain for the item.</p><p><strong>War Machines.</strong> Bronze dragons actively oppose tyranny, and many bronze dragons yearn to test their mettle by putting their size and strength to good use.</p><p>When a conflict unfolds near its lair, a bronze dragon ascertains the underlying cause, then offers its services to any side that fights for good. Once a bronze dragon commits to a cause, it remains a staunch ally.</p><p><strong>Well-Organized Wealth.</strong> Bronze dragons loot sunken ships and also collect colorful coral and pearls from the reefs and seabeds near their lairs. When a bronze dragon pledges to help an army wage war against tyranny, it asks for nominal payment. If such a request is beyond its allies' means, it might settle for a collection of old books on military history or a ceremonial item commemorating the alliance. A bronze dragon might also lay claim to a treasure held by the enemy that it feels would be safer under its protection.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "32",
			"rolls": "5",
			"die": "8",
			"mod": "10"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "17",
		"dex": "10",
		"con": "15",
		"int": "12",
		"wis": "11",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "2"
			},
			{
				"attribute": "con",
				"mod": "4"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "2"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "4",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "12",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["guidance","resistance"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 0 or below. It has a +4 bonus to hit and a DC 12 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "10",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "12",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "40",
						"default": "16",
						"rolls": "3",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales lightning in a 40ft line that is 5ft wide. Each creature in that line must make a DC 12 DEX saving throw, taking 16(3d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "repulsion breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "12",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales repulsion energy in a 30ft cone. Each creature in that area must succeed on a DC 12 STR saving throw. On a failed save, the creature is pushed 30ft away from the dragon.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "bronze dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>Bronze dragons are coastal dwellers that feed primarily on aquatic plants and fish. They take the forms of friendly animals to observe other creatures of interest. They are also fascinated by warfare and eagerly join armies fighting for a just cause.</p><p>A ribbed and fluted crest defines the shape of a bronze dragon's head. Curving horns extend out from the crest, echoed by spines on its lower jaw and chin. To help them swim, bronze dragons have webbed feet and smooth scales. A bronze wyrmling's scales are yellow tinged with green; only as the dragon approaches adulthood does its color deepen to a darker, rich bronze tone. The pupils of a bronze dragon's eyes fade as the dragon ages, until they resemble glowing green orbs.</p><p><strong>Dragons of the Coast.</strong> Bronze dragons love to watch ships traveling up and down the coastlines near their lairs, sometimes taking the forms of dolphins or seagulls to inspect those ships and their crews more closely. A daring bronze dragon might slip aboard a ship in the guise of a bird or rat, inspecting the hold for treasure. If the dragon finds a worthy addition to its hoard, it barters with the ship's captain for the item.</p><p><strong>War Machines.</strong> Bronze dragons actively oppose tyranny, and many bronze dragons yearn to test their mettle by putting their size and strength to good use.</p><p>When a conflict unfolds near its lair, a bronze dragon ascertains the underlying cause, then offers its services to any side that fights for good. Once a bronze dragon commits to a cause, it remains a staunch ally.</p><p><strong>Well-Organized Wealth.</strong> Bronze dragons loot sunken ships and also collect colorful coral and pearls from the reefs and seabeds near their lairs. When a bronze dragon pledges to help an army wage war against tyranny, it asks for nominal payment. If such a request is beyond its allies' means, it might settle for a collection of old books on military history or a ceremonial item commemorating the alliance. A bronze dragon might also lay claim to a treasure held by the enemy that it feels would be safer under its protection.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "142",
			"rolls": "15",
			"die": "10",
			"mod": "60"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "21",
		"dex": "10",
		"con": "19",
		"int": "14",
		"wis": "13",
		"chr": "17",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "3"
			},
			{
				"attribute": "con",
				"mod": "7"
			},
			{
				"attribute": "wis",
				"mod": "4"
			},
			{
				"attribute": "cha",
				"mod": "6"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "4"
			},
			{
				"name": "perception",
				"mod": "7"
			},
			{
				"name": "stealth",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["lightning"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "8",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "6",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["comprehend languages","misty step","ray of enfeeblement"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 3 spells at level 2 or below. It has a +6 bonus to hit and a DC 14 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "16",
						"rolls": "2",
						"die": "10",
						"mod": "5",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "12",
						"rolls": "2",
						"die": "6",
						"mod": "5",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "15",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "55",
						"rolls": "10",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales lightning in a 60ft line that is 5ft wide. Each creature in that line must make a DC 15 DEX saving throw, taking 55(10d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "repulsion breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "15",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales repulsion energy in a 30ft cone. Each creature in that area must succeed on a DC 15 STR saving throw. On a failed save, the creature is pushed 40ft away from the dragon.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "bugbear",
		"pro": "",
		"src": "",
		"desc": "<p>Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure are assured.</p><p><strong>Goblinoids.</strong> Bugbears are often found in the company of their cousins, hobgoblins and goblins. Bugbears usually enslave goblins they encounter, and they bully hobgoblins into giving them gold and food in return for serving as scouts and shock troops. Even when paid, bugbears are at best unreliable allies, yet goblins and hobgoblins understand that no matter how much bugbears might drain a tribe of resources, these creatures are a potent force.</p><p><strong>Followers of Hruggek.</strong> Bugbears worship Hruggek, a lesser god who dwells on the plane of Acheron. In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggek's side. They try to prove themselves worthy by defeating as many foes as possible.</p><p><strong>Venal Ambushers.</strong> Despite their intimidating builds, bugbears move with surprising stealth. They are fond of setting ambushes and flee when outmatched. They are dependable mercenaries as long as they are supplied food, drink, and treasure, but a bugbear forgets any bond when its life is on the line. A wounded member of a bugbear band might be left behind to help the rest of the band escape. Afterward, that bugbear might help pursuers track down its former companions if doing so saves its life.</p>",
		"size": "medium",
		"type": "humanoid",
		"class": "",
		"tag": "goblinoid",
		"alignment": "chaotic evil",
		"ac": "16",
		"armor": ["hide armor","shield"],
		"hp": {
			"default": "27",
			"rolls": "5",
			"die": "8",
			"mod": "5"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "15",
		"dex": "14",
		"con": "13",
		"int": "8",
		"wis": "11",
		"chr": "9",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "stealth",
				"mod": "6"
			},
			{
				"name": "survival",
				"mod": "2"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["common","goblin"],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "brute",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p>"
			},
			{
				"name": "surprise attack",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "7",
				"rolls": "2",
				"die": "6",
				"mod": "",
				"type": "n/a",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7(2d6) damage from the attack.</p>"
			}
		],
		"actions": [
			{
				"name": "morningstar",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "8",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "javelin",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "2",
						"die": "6",
						"mod": "2",
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
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "bugbear chief",
		"pro": "",
		"src": "",
		"desc": "<p>Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure are assured.</p><p><strong>Goblinoids.</strong> Bugbears are often found in the company of their cousins, hobgoblins and goblins. Bugbears usually enslave goblins they encounter, and they bully hobgoblins into giving them gold and food in return for serving as scouts and shock troops. Even when paid, bugbears are at best unreliable allies, yet goblins and hobgoblins understand that no matter how much bugbears might drain a tribe of resources, these creatures are a potent force.</p><p><strong>Followers of Hruggek.</strong> Bugbears worship Hruggek, a lesser god who dwells on the plane of Acheron. In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggek's side. They try to prove themselves worthy by defeating as many foes as possible.</p><p><strong>Venal Ambushers.</strong> Despite their intimidating builds, bugbears move with surprising stealth. They are fond of setting ambushes and flee when outmatched. They are dependable mercenaries as long as they are supplied food, drink, and treasure, but a bugbear forgets any bond when its life is on the line. A wounded member of a bugbear band might be left behind to help the rest of the band escape. Afterward, that bugbear might help pursuers track down its former companions if doing so saves its life.</p>",
		"size": "medium",
		"type": "humanoid",
		"class": "",
		"tag": "goblinoid",
		"alignment": "chaotic evil",
		"ac": "17",
		"armor": ["chain shirt","shield"],
		"hp": {
			"default": "65",
			"rolls": "10",
			"die": "8",
			"mod": "20"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "17",
		"dex": "14",
		"con": "14",
		"int": "11",
		"wis": "12",
		"chr": "11",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "intimidation",
				"mod": "2"
			},
			{
				"name": "stealth",
				"mod": "6"
			},
			{
				"name": "survival",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["common","goblin"],
			"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "brute",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).</p>"
			},
			{
				"name": "heart of hruggek",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep.</p>"
			},
			{
				"name": "surprise attack",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "7",
				"rolls": "2",
				"die": "6",
				"mod": "",
				"type": "n/a",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7(2d6) damage from the attack.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The bugbear makes two melee attacks.</p>"
			},
			{
				"name": "morningstar",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "12",
						"rolls": "2",
						"die": "8",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "javelin",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"mod": "3",
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
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "bulette",
		"pro": "",
		"src": "",
		"desc": "<p>A bulette is a massive predator that terrorizes any lands it inhabits. Also called a \"land shark,\" it lives only to feed. Irascible and rapacious, bulettes fear no other creature, and they attack with no regard for superior numbers or strength.</p><p><strong>Underground Hunters.</strong> Bulettes use their powerful claws to tunnel through the earth when they hunt. Heedless of obstruction, they uproot trees, cause landslides in loose slopes, and leave sinkholes behind them. When vibrations in the soil and rock alert a bulette to movement, it shoots to the surface, its jaws spread wide as it attacks.</p><p><strong>Wandering Monster.</strong> A bulette ranges across temperate lands, feeding on any animals and humanoids it comes across. These creatures dislike dwarf and elf flesh, although they often kill them before realizing what they are. A bulette loves halfling meat the most, and it is never happier than when chasing plump halflings across an open field.</p><p>A bulette has no lair, but roams a hunting territory up to thirty miles wide. Its sole criterion for territory is availability of food, and when it has eaten everything in an area, a bulette moves on. These creatures often home in on humanoid settlements, terrorizing them until their panicked residents have fled, or until the bulette is slain.</p><p>All creatures shun bulettes, which treat anything that moves as food&mdash;even other predators and bulettes. Bulettes come together only to mate, resulting in a bloody act of claws and teeth that usually ends with the male's death and consumption.</p><p><strong>Arcane Creation.</strong> Some sages believe the bulette is the result of a mad wizard's experiments at crossbreeding snapping turtles and armadillos, with infusions of demon ichor. Bulettes have been thought to be extinct at different times, but after years without a sighting, the creatures inevitably reappear. Because their young are almost never seen, some sages suspect that bulettes maintain secret nesting grounds from which adults strike out into the world.</p>",
		"size": "large",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "94",
			"rolls": "9",
			"die": "10",
			"mod": "45"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}	
		],
		"str": "19",
		"dex": "11",
		"con": "21",
		"int": "2",
		"wis": "10",
		"chr": "5",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "16",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "standing leap",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The bulette's long jump is up to 30ft and its high jump is up to 15ft, with or without a running start.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "30",
						"rolls": "4",
						"die": "12",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "deadly leap",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>If the bulette jumps at least 15ft as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 STR or DEX saving throw (target's choice) or be knocked prone and take 14(3d6+4) bludgeoning damage plus 14(3d6+4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5ft out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is with in range, the creature instead falls prone in the bulette's space.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "bullywug",
		"pro": "",
		"src": "",
		"desc": "<p>Life as a bullywug is nasty, brutish, and wet. These frogheaded amphibious humanoids must stay constantly moist, dwelling in rainy forests, marshes, and damp caves. Always hungry and thoroughly evil, bullywugs overwhelm opponents with superior numbers when they can, but they flee from serious threats to search for easier prey.</p><p>Bullywugs have green, gray, or mottled yellow skin that shifts through shades of gray, green, and brown, allowing them to blend in with their surroundings. They wear crude armor and wield simple weapons, and can deliver a powerful bite to foes that press too close.</p><p><strong>Foul Aristocracy.</strong> Bullywugs consider themselves the right and proper rulers of the swamps. They follow an etiquette of sorts when dealing with outsiders and each other, subject to the whims and fancies of their leader&mdash;a self-styled lord of the muck. Bullywugs introduce themselves with grand-sounding titles, make great shows of bowing and debasing themselves before their superiors, and endlessly vie to win their superiors' favor.</p><p>A bullywug has two ways to advance among its kind. It can either murder its rivals, though it must take pains to keep its criminal deeds secret, or it can find a treasure or magic item and present it as tribute or a token of obeisance to its liege. A bullywug that murders its rivals without cunning is likely to be executed, so it's more common for bullywugs to stage raids against caravans and settlements, with the goal of securing precious baubles to impress their lords and win their good graces. Invariably, such fine goods are reduced to filthy tatters through abuse and neglect. Once a gift loses its sheen, a bullywug lord invariably demands that its subjects bring it more treasure as tribute.</p><p><strong>Unruly Diplomacy.</strong> Bullywugs love nothing more than lording over those who trespass on their territories. Their warriors attempt to capture intruders rather than simply slaying them.</p><p>Captives are dragged before the king or queen&mdash;a bullywug of unusually large size&mdash;and forced to beg for mercy. Bribes, treasure, and flattery can trick the bullywug ruler into letting its captives go, but not before it tries to impress its \"guests\" with the majesty of its treasure and its realm. Struck with a deep inferiority complex, bullywug lords fancy themselves as kings and queens, but desperately crave the fear and respect of outsiders.</p><p><strong>Amphibian Allies.</strong> Bullywugs speak a language that allows them to communicate over large areas by croaking like frogs. News of intruders or other events in the swamp spread within minutes across this crude communication system.</p><p>Simple concepts in the language are understandable to frogs and toads. Bullywugs use this capability to form strong bonds with giant frogs, which they train as guardians and hunters. Larger specimens are sometimes used as mounts as well. The frogs' ability to swallow creatures whole provides a bullywug hunting band an easy means of carrying prey back to their villages.</p>",
		"size": "medium",
		"type": "humanoid",
		"class": "",
		"tag": "bullywug",
		"alignment": "neutral evil",
		"ac": "15",
		"armor": ["hide armor","shield"],
		"hp": {
			"default": "11",
			"rolls": "2",
			"die": "8",
			"mod": "2"
		},
		"speed": [
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "12",
		"dex": "12",
		"con": "13",
		"int": "7",
		"wis": "10",
		"chr": "7",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "stealth",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["bullywug"],
			"understands": [""]
		},
		"challengeRating": ".25",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The bullywug can breathe air and water.</p>"
			},
			{
				"name": "speak with frogs and toads",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug.</p>"
			},
			{
				"name": "swamp camouflage",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The bullywug has advantage on DEX (Stealth) checks made to hide in swampy terrain.</p>"
			},
			{
				"name": "standing leap",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The bullywug's long jump is up to 20ft and its high jump is up to 10ft, with or without a running start.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The bullywug makes two melee attacks: one with its bite and one with its spear.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "4",
						"mod": "1",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "spear",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "4",
						"rolls": "1",
						"die": "6",
						"mod": "1",
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
						"mod": "1",
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
						"mod": "1",
						"damageType": "piercing",
						"notes": ""
					},
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "cambion",
		"pro": "",
		"src": "",
		"desc": "<p>A cambion is the offspring of a fiend (usually a succubus or incubus) and a humanoid (usually a human). Cambions inherit aspects of both parents, but their horns, leathery wings, and sinewy tails are hallmarks of their otherworldly parentage.</p><p><strong>Born to Be Bad.</strong> Cambions grow into ruthless adults whose wickedness and perversion horrifies even the most devoted mortal parent. Even as a youth, a cambion identifies its rightful place as an overlord of mortals. It might orchestrate uprisings in towns and cities, gathering gangs of humanoids and lesser devils to serve it.</p><p><strong>Pawns of the Mighty.</strong> A cambion forced to serve its fiendish parent does so out of admiration and dread, but also with the expectation that it will one day rise to a place of prominence. Cambions raised in the Nine Hells serve as soldiers, envoys, and personal attendants to greater devils. In the Abyss, a cambion carries only as much authority as it can muster through sheer strength and force of will.</p><p><strong>Spawn of Graz'zt.</strong> The demon lord Graz'zt is fond of procreating with humanoids who have made pacts with fiends, and he has sired many cambions who help him sow chaos across the multiverse. These cambions are characterized by charcoal-black skin, cloven hooves, sixfingered hands, and unearthly beauty.</p>",
		"size": "medium",
		"type": "fiend",
		"class": "",
		"tag": "",
		"alignment": "any evil",
		"ac": "19",
		"armor": ["scale mail"],
		"hp": {
			"default": "82",
			"rolls": "11",
			"die": "8",
			"mod": "33"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "18",
		"dex": "18",
		"con": "16",
		"int": "14",
		"wis": "12",
		"chr": "16",
		"savingThrows": [
			{
				"ability": "str",
				"mod": "7"
			},
			{
				"ability": "con",
				"mod": "6"
			},
			{
				"ability": "int",
				"mod": "5"
			},
			{
				"ability": "cha",
				"mod": "6"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "6"
			},
			{
				"name": "intimidation",
				"mod": "6"
			},
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","poison","bludgeoning","piercing","slashing"],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["abyssal","common","infernal"],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "fiendish blessing",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The AC of the cambion includes its CHA bonus.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "3",
						"span": "day",
						"titles": ["alter self","command","detect magic"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["plane shift (self)"]
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The cambion makes two melee attacks or uses its Fire Ray twice.</p>"
			},
			{
				"name": "spear",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "8",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "ranged",
						"handed": "",
						"reach": "20/60",
						"default": "7",
						"rolls": "1",
						"die": "6",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fire ray",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged spell",
						"handed": "",
						"reach": "120",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fiendish charm",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>One humanoid the cambion can see within 30ft of it must succeed on a DC 14 WIS saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "carrion crawler",
		"pro": "",
		"src": "",
		"desc": "<p>Carrion crawlers scour putrid flesh from carcasses and gobble the slimy bones that remain. They aggressively attack any creature that trespasses on their territory or disturbs their feasting.<p></p><strong>Carrion Eaters.</strong> A carrion crawler follows the scent of death to its food, but it prefers not to compete with other scavengers. These foul creatures thus hunker down in territories where death is plentiful and other carrion eaters have limited mobility. Caves, sewers, dungeons, and forested marshes are their favored lairs, but carrion crawlers are also drawn to battlefields and cemeteries.<p></p> A carrion crawler roams on the hunt, its tentacles probing the a ir for the scent of blood or decay. In tunnels or ruins, carrion crawlers scurry across the ceiling as they move toward food. In this way, they avoid contact with oozes, otyughs, and other dangerous inhabitants of the darkness, even as they surprise potential meals that don't think to look up.<p></p><strong>Patient Predators.</strong> Whether in subterranean darkness or while hunting at night, light signals a potential meal. A carrion crawler might follow a light source from a distance for hours, hoping to pick up the scent of blood. Despite their great size, carrion crawlers can also easily set up ambushes by waiting around blind corners for prey to come to them.<p></p> When facing potential prey or intruders, a carrion crawler lets its poison do the work. Once a victim goes rigiq wit~ paralysis, the carrion crawler wraps it with its tentacles and drags it away to a high ledge or isolated passageway, where it can be killed safely. The monster then resumes patrolling its territory while waiting for its meal to ripen.</p>",
		"size": "large",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "51",
			"rolls": "6",
			"die": "10",
			"mod": "18"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "14",
		"dex": "13",
		"con": "16",
		"int": "1",
		"wis": "12",
		"chr": "5",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "keen smell",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell.</p>"
			},
			{
				"name": "spider climb",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The carrion crawler makes two attacks: one with its tentacles and one with its bite.</p>"
			},
			{
				"name": "tentacles",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "4",
						"rolls": "1",
						"die": "4",
						"mod": "2",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 13 CON saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "2",
						"die": "4",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "centaur",
		"pro": "",
		"src": "",
		"desc": "<p>Reclusive wanderers and omen-readers of the wild, centaurs avoid conflict but fight fiercely when pressed. They roam the vast wilderness, keeping far from borders, laws, and the company of other creatures.</p><p><strong>Wilderness Nomads.</strong> Centaur tribes range across lands with mild to hot climates, where a centaur requires only light furs or oiled skins to deal with inclement weather. They are hunter-gatherers and rarely build shelters or even use tents.</p><p>Centaur migrations span continents and take decades to repeat, so that a centaur tribe might not retread the same path for generations. These long-ranging patterns can lead to conflict when centaurs encounter settlements of other creatures built along their traditional routes.</p><p><strong>Reluctant Settlers.</strong> A centaur that can't keep pace with the rest of its tribe is left behind. Some such centaurs vanish into the wilderness and are never seen again. Those that can bear the loss of their tribe might take up residence among other races. Frontier settlements value the nature knowledge of their centaur residents. Many such comm owe their survival to the insight and acumen of a centaur.</p><p>Despite their reclusive nature, centaurs trade with elves and with the caravans of other benevolent humanoids they meet during their wanderings. A trader might save the life of a wounded or an elderly centaur unfit for long travel, escorting it to a settlement where it can peacefully live out the rest of its days.</p>",
		"size": "large",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "neutral good",
		"ac": "12",
		"armor": ["natural"],
		"hp": {
			"default": "45",
			"rolls": "6",
			"die": "10",
			"mod": "12"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "50",
				"notes": ""
			}
		],
		"str": "18",
		"dex": "14",
		"con": "14",
		"int": "9",
		"wis": "13",
		"chr": "11",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "athletics",
				"mod": "6"
			},
			{
				"name": "perception",
				"mod": "3"
			},
			{
				"name": "survival",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": ["elvish","sylvan"],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "charge",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "10",
				"rolls": "3",
				"die": "6",
				"mod": "",
				"type": "piercing",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the centaur moves at least 30ft straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10(3d6) piercing damage.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.</p>"
			},
			{
				"name": "pike",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "9",
						"rolls": "1",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "hooves",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "longbow",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "150/600",
						"default": "6",
						"rolls": "1",
						"die": "8",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "chain devil (kyton)",
		"pro": "",
		"src": "",
		"desc": "<p>This ominous fiend wears chains like a shroud. Driving lesser creatures before it with its fearsome gaze, a chain devil animates the chains that cover its body as well as inanimate chains nearby, which sprout hooks, blades, and spikes to eviscerate enemies.</p><p>Chain devils act as sadistic jailers and torturers in the infernal realms, relishing pain and living to inflict it on others. They are called on to torment mortal souls trapped in the Nine Hells, inflicting their sadistic fury on the horrid lemures in which those souls manifest.</p>",
		"size": "medium",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "16",
		"armor": ["natural"],
		"hp": {
			"default": "85",
			"rolls": "10",
			"die": "8",
			"mod": "40"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "18",
		"dex": "15",
		"con": "18",
		"int": "11",
		"wis": "12",
		"chr": "14",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "8",
		"traits": [
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil makes two attacks with its chains.</p>"
			},
			{
				"name": "chain",
				"perDay": "",
				"recharge": "",
				"ability": "str/dex",
				"dc": "14",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "7",
						"rolls": "2",
						"die": "6",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": "<p>The target is grappled (DC 14 STR/DEX) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7(2d6) piercing damage at the start of each of its turns.</p>"
			},
			{
				"name": "animate chains",
				"perDay": "",
				"recharge": "short",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Up to four chains the devil can see within 60ft of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.</p><p>Each animated chain is an object with AC 20, 20HP, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0HP or if the devil is incapacitated or dies.</p>"
			}
		],
		"reactions": [
			{
				"name": "unnerving mask",
				"desc": "<p>When a creature the devil can see starts its turn within 30ft of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 WIS saving throw or be frightened until the end of its turn.</p>"
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "chasme",
		"pro": "",
		"src": "",
		"desc": "<p>This loathsome demon resembles an unspeakable crossing of humanoid and fly. A chasme shuffles about on four spindly legs that can find purchase on walls and ceilings. A droning sound precedes the approach of a chasme, inflicting foes with a terrible lethargy that leaves them open to attack.</p><p>The lowly chasmes serve more powerful masters as interrogators or taskmasters. A chasme lives to dole out torture as punishment, and has a knack for spotting demons that have deserted their lords. Capturing and returning such traitors allows a chasme to torment the victim without fear of reprisal.</p>",
		"size": "large",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "15",
		"armor": ["natural"],
		"hp": {
			"default": "84",
			"rolls": "13",
			"die": "10",
			"mod": "13"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "15",
		"dex": "15",
		"con": "12",
		"int": "11",
		"wis": "14",
		"chr": "10",
		"savingThrows": [
			{
				"ability": "dex",
				"mod": "5"
			},
			{
				"ability": "wis",
				"mod": "5"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "15",
		"languages": {
			"speaks": ["abyssal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "6",
		"traits": [
			{
				"name": "drone",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "con",
				"dc": "12",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn with in 30ft of the chasme must succeed on a DC 12 CON saving throw or fall unconscious for 10 minutes. A creature that can't hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature's saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The chasme has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "spider climb",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>"
			}
		],
		"actions": [
			{
				"name": "proboscis",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "16",
						"rolls": "4",
						"die": "6",
						"mod": "2",
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
						"mod": "",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"desc": "<p>The target's hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature's hit point maximum to 0, the creature dies. This reduction to a creature's hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration.</p>"
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A chasme has a 30% chance of summoning one chasme. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "chimera",
		"pro": "",
		"src": "",
		"desc": "<p>Chimeras were created after mortals summoned Demogorgon to the world. The Prince of Demons, unimpressed with the creatures that surrounded it, transformed them into horrific, multi-headed monstrosities. This act gave rise to the first chimeras.</p><p>Gifted with demonic cruelty, a chimera serves as a grim reminder of what happens when demon princes find their way to the Material Plane. A typical specimen has the hindquarters of a large goat, the forequarters of a lion, and the leathery wings of a dragon, along with the heads of all three of those creatures. The monster likes to surprise its victims, swooping down from the sky arid engulfing prey with its fiery breath before landing.</p><p><strong>Conflicted Creature.</strong> A chimera combines the worst aspects of its three parts. Its dragon head drives it to raid, plunder, and accumulate a great hoard. Its leonine nature compels it to hunt and kill powerful creatures that threaten its territory. Its goat head grants it a vicious, stubborn streak that compels it to fight to the death.</p><p>These three aspects drive a chimera to stake out a territory that is as large as 10 miles wide. It preys on wild game, viewing more powerful creatures as rivals to be humiliated and defeated. Its greatest rivals are dragons, griffons, manticores, perytons, and wyverns.</p><p>When it hunts, the chimera looks for easy ways to amuse itself. It enjoys the fear and suffering of weaker creatures. The monster often toys with its prey, breaking off an attack prematurely and leaving a creature wounded and terrified before returning to finish it off.<strong>Servant of Evil.</strong> Though chimeras are far from cunning, their draconic ego makes them susceptible to flattery and gifts. If offered food and treasure, a chimera might spare a traveler. A villain can lure a chimera into service by keeping it well fed and its treasure hoard well stocked.</p>",
		"size": "large",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "14",
		"armor": ["natural"],
		"hp": {
			"default": "114",
			"rolls": "12",
			"die": "10",
			"mod": "48"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "19",
		"dex": "11",
		"con": "19",
		"int": "3",
		"wis": "14",
		"chr": "10",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "8"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "18",
		"languages": {
			"speaks": [""],
			"understands": ["draconic"]
		},
		"challengeRating": "6",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "horns",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "1",
						"die": "12",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claws",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "15",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "31",
						"rolls": "7",
						"die": "8",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 DEX saving throw, taking 31(7d8) fire damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "chuul",
		"pro": "",
		"src": "",
		"desc": "<p>Survivors of the ancient aboleth empire, chuuls are crustaceans the aboleths modified and endowed with sentience. They follow the ingrained directives of their creators, as they have done since the dawn of time.</p><p><strong>Primeval Relics.</strong> In the primeval ages, aboleths ruled a vast empire that spanned the oceans of the world. In those days, the aboleths used mighty magic and bent the minds of the nascent creatures of the mortal realm.</p><p>However, they were bound to the water and could not enforce their will beyond it without servants. Therefore, they created chuuls.</p><p>Perfectly obedient, the chuuls collected sentient creatures and magic at the aboleths' command. Chuuls were designed to endure the ages of the world, growing in size and strength as the eons passed. When the aboleths' empire crumbled with the rise of the gods, the chuuls were cast adrift. However, these creatures continue to do what they did for the aboleths, slowly collecting humanoids, gathering treasure, amassing magic, and consolidating power.</p><p><strong>Tireless Guardians.</strong> Chuul still guard the ruins of the ancient aboleth empire. They linger in silent observance of eons-old commands. Rumors and ancient maps sometimes lure treasure seekers to these ruins, but the reward for their boldness is death.</p><p>Whatever riches that the explorers bring with them adds to the hoard guarded by the chuuls. Chuuls can sense magic at a distance. This sense couples with an innate drive that leads them to slay explorers, take their gear, and bury it in secret locales aboleths dictated eons ago.</p><p><strong>Waiting Servants.</strong> Although the aboleths' ancient empire fell long ago, the psychic bonds between them and their created servants remain intact. Chuuls that come into contact with aboleths immediately assume their old roles. Such chuuls redirect their compulsions to the service of the aboleths' sinister purposes.</p>",
		"size": "large",
		"type": "aberration",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "16",
		"armor": ["natural"],
		"hp": {
			"default": "93",
			"rolls": "11",
			"die": "10",
			"mod": "33"
		},
		"speed": [
			{
				"type": "swim",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "19",
		"dex": "10",
		"con": "16",
		"int": "5",
		"wis": "11",
		"chr": "5",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": [""],
			"understands": ["deep speech"]
		},
		"challengeRating": "4",
		"traits": [
			{
				"name": "sense magic",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The chuul senses magic within 120ft of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.</p>"
			},
			{
				"name": "pincer",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>The target is grappled (escape DC 14 STR/DEX) if it is a large or smaller creature and the chuul doesn't have two other creatures grappled.</p>"
			},
			{
				"name": "tentacles",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>One creature grappled by the chuul must succeed on a DC 13 CON saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "cloaker",
		"pro": "",
		"src": "",
		"desc": "<p>Cloakers earned their names for the resemblance they bear to dark leathery cloaks. Lurking in remote dungeons and caves, these stealthy predators wait to slay lone or injured prey stumbling through the darkness.</p><p><strong>Camouflaged Lurkers.</strong> Like a stingray, a cloaker's body is composed of cartilage and muscle. With its tail and fins unfurled, it flies through darkness and lurks among the shadows of caverns the same way a stingray glides through water and hides on the ocean floor. Parallel rows of round, black eyespots run along its back like buttons, and the ivory-colored claws on its cowl resemble bone clasps.</p><p>When a cloaker unfurls and moves to attack, it reveals its pale underside and makes its true nature evident. Red eyes glow above rows of sharp teeth, and a long pendulous tail whips behind it.</p><p><strong>Opportunistic Predators.</strong> When hunting, cloakers glide through the shadows at a safe distance behind groups of other creatures traversing the Underdark. They follow parties of humanoids to prey on the wounded after a battle, or pursue herds of Underdark beasts, attacking the sick, the weak, or the straggling.</p><p>Cloakers strike quickly and consume their meals as swiftly as possible, enveloping and devouring their victims. While it feeds, a cloaker uses its swift, whiplike tail for defense, although it rarely takes a stand against dangerous foes or groups of creatures. As an added defense, cloakers can create illusory duplicates of themselves.</p><p><strong>Haunting Moan.</strong> Cloakers' thoughts are alien to other life-forms, and they communicate with one another through subsonic moans inaudible to most creatures. At higher intensities, a cloaker's haunting moan becomes audible, evoking sensations of doom and dread in creatures that hear it.</p><p><strong>Cloaker Conclaves.</strong> Cloakers prefer isolation, but they sometimes convene with other cloakers for defense or to exchange information about new dangers, suitable hunting grounds, or developments that might affect their habitats. When this convergence is compiete, the cloakers separate again.</p>",
		"size": "large",
		"type": "aberration",
		"class": "",
		"tag": "",
		"alignment": "chaotic neutral",
		"ac": "14",
		"armor": ["natural"],
		"hp": {
			"default": "78",
			"rolls": "12",
			"die": "10",
			"mod": "12"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "10",
				"notes": ""
			
		],
		"str": "17",
		"dex": "15",
		"con": "12",
		"int": "13",
		"wis": "12",
		"chr": "14",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["deep speech","undercommon"],
			"understands": [""]
		},
		"challengeRating": "8",
		"traits": [
			{
				"name": "damage transfer",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half.</p>"
			},
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.</p>"
			},
			{
				"name": "light sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in bright light, the cloaker has disadvantage on attack rolls and WIS(perception) checks that rely on sight.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The cloaker makes two attacks: one with its bite and one with its tail.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": "<p>If the target is large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5ft of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 STR check.</p>"
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "7",
						"rolls": "1",
						"die": "8",
						"mod": "3",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "moan",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature within 60ft of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 WIS saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.</p>"
			},
			{
				"name": "phantasms",
				"perDay": "",
				"recharge": "short",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.</p><p>Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.</p><p>A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "cockatrice",
		"pro": "",
		"src": "",
		"desc": "<p>The cockatrice looks like a hideous hybrid of lizard, bird, and bat, and it is infamous for its ability to turn flesh to stone. These omnivores have a diet that consists of berries, nuts, flowers, and small animals such as insects, mice, and frogs&mdash;things they can swallow whole. They would be no threat to anything else if not for their fierce and frenzied response to even a hint of danger. A cockatrice flies into the face of any threat, squawking and madly beating its wings as its head darts out to peck. The smallest scratch from a cockatrice's beak can spell doom as its victim slowly turns to stone from the injury.</p>",
		"size": "small",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "11",
		"armor": [""],
		"hp": {
			"default": "27",
			"rolls": "6",
			"die": "6",
			"mod": "6"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "6",
		"dex": "12",
		"con": "12",
		"int": "2",
		"wis": "13",
		"chr": "5",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": ".5",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "4",
						"mod": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 11 CON saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "copper dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>Copper dragons are incorrigible pranksters, joke tellers, and riddlers that live in hills and rocky uplands. Despite their gregarious and even-tempered natures, they possess a covetous, miserly streak, and can become dangerous when their hoards are threatened.</p><p>A copper dragon has brow plates jutting over its eyes, extending back to long horns that grow as a series of overlapping segments. Its backswept cheek ridges and jaw frills give it a pensive look. At birth, a copper dragon's scales are a ruddy brown with a metallic tint. As the dragon ages, its scales become more coppery in color, later taking on a green tint as it ages. A copper dragon's pupils fade with age, and the eyes of the oldest copper dragons resemble glowing turquoise orbs.</p><p><strong>Good Hosts.</strong> A copper dragon appreciates wit, a good joke, humorous story, or riddle. A copper dragon becomes annoyed with any creature that doesn't laugh at its jokes or accept its tricks with good humor.</p><p>Copper dragons are particularly fond of bards. A dragon might carve out part of its lair as a temporary abode for a bard willing to regale it with stories, riddles, and music. To a copper dragon, such companionship is a treasure to be coveted.</p><p><strong>Cautious and Crafty.</strong> When building its hoard, a copper dragon prefers treasures from the earth. Metals and precious stones are favorites of these creatures.</p><p>A copper dragon is wary when it comes to showing off its possessions. If it knows that other creatures seek a specific item in its hoard, a copper dragon will not admit to possessing the item. Instead, it might send curious treasure hunters on a wild goose chase to search for the object while it watches from afar for its own pleasure.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "21",
		"armor": ["natural"],
		"hp": {
			"default": "350",
			"rolls": "20",
			"die": "20",
			"mod": "140"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "27",
		"dex": "12",
		"con": "25",
		"int": "20",
		"wis": "17",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "8"
			},
			{
				"attribute": "con",
				"mod": "14"
			},
			{
				"attribute": "wis",
				"mod": "10"
			},
			{
				"attribute": "cha",
				"mod": "11"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "11"
			},
			{
				"name": "perception",
				"mod": "17"
			},
			{
				"name": "stealth",
				"mod": "8"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["acid"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "27",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "21",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "11",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "19",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["minor illusion","detect thoughts","counterspell","secret chest"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 4 spells at level 7 or below. It has a +11 bonus to hit and a DC 19 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "19",
						"rolls": "2",
						"die": "10",
						"mod": "8",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "17",
						"rolls": "2",
						"die": "8",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "19",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 19 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "acid breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "22",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "63",
						"rolls": "14",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales acid in a 90ft line that is 10ft wide. Each creature in that line must make a DC 22 DEX saving throw, taking 63(14d8) acid damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "slowing breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "22",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales gas in a 90ft cone. Each creature in that area must succeed on a DC 22 STR saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.</p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, HP, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, INT, WIS, and CHA scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 23 DEX saving throw or take 14(2d6+7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Copper dragons dwell in dry uplands and on hilltops, where they make their lairs in narrow caves. False walls in the lair hide secret antechambers where the dragon stores valuable ores, art objects, and other oddities it has collected over its lifetime. Worthless items are put on display in open caves to tantalize treasure seekers and distract them from where the real treasure is hidden.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The dragon chooses a point on the ground that it can see within 120ft of it. Stone spikes sprout from the ground in a 20ft-radius centered on that point. The effect is otherwise identical to the spike growth spell and lasts until the dragon uses this lair action again or until the dragon dies.</p>",
				"<p>The dragon chooses a 10ft-square area on the ground that it can see within 120ft of it. The ground in that area turns into 3ft-deep mud. Each creature on the ground in that area when the mud appears must succeed on a DC 15 DEX saving throw or sink into the mud and become restrained. A creature can take an action to attempt a DC 15 STR check, freeing itself or another creature within its reach and ending the restrained condition on a success. Moving 1 foot in the mud costs 2ft of movement. On initiative count 20 on the next round, the mud hardens, and the STR DC to work free increases to 20.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Magic carvings of the dragon's smiling visage can be seen worked into stone terrain and objects within 6 miles of the dragon's lair.</p>",
				"<p>Tiny beasts such as rodents and birds that are normally unable to speak gain the magical ability to speak and understand Draconic while within 1 mile of the dragon's lair. These creatures speak well of the dragon, but can't divulge its whereabouts.</p>",
				"<p>Intelligent creatures within 1 mile of the dragon's lair are prone to fits of giggling. Even serious matters suddenly seem amusing.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "copper dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>Copper dragons are incorrigible pranksters, joke tellers, and riddlers that live in hills and rocky uplands. Despite their gregarious and even-tempered natures, they possess a covetous, miserly streak, and can become dangerous when their hoards are threatened.</p><p>A copper dragon has brow plates jutting over its eyes, extending back to long horns that grow as a series of overlapping segments. Its backswept cheek ridges and jaw frills give it a pensive look. At birth, a copper dragon's scales are a ruddy brown with a metallic tint. As the dragon ages, its scales become more coppery in color, later taking on a green tint as it ages. A copper dragon's pupils fade with age, and the eyes of the oldest copper dragons resemble glowing turquoise orbs.</p><p><strong>Good Hosts.</strong> A copper dragon appreciates wit, a good joke, humorous story, or riddle. A copper dragon becomes annoyed with any creature that doesn't laugh at its jokes or accept its tricks with good humor.</p><p>Copper dragons are particularly fond of bards. A dragon might carve out part of its lair as a temporary abode for a bard willing to regale it with stories, riddles, and music. To a copper dragon, such companionship is a treasure to be coveted.</p><p><strong>Cautious and Crafty.</strong> When building its hoard, a copper dragon prefers treasures from the earth. Metals and precious stones are favorites of these creatures.</p><p>A copper dragon is wary when it comes to showing off its possessions. If it knows that other creatures seek a specific item in its hoard, a copper dragon will not admit to possessing the item. Instead, it might send curious treasure hunters on a wild goose chase to search for the object while it watches from afar for its own pleasure.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "184",
			"rolls": "16",
			"die": "12",
			"mod": "80"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "23",
		"dex": "12",
		"con": "21",
		"int": "18",
		"wis": "15",
		"chr": "17",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "6"
			},
			{
				"attribute": "con",
				"mod": "10"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "8"
			},
			{
				"name": "perception",
				"mod": "12"
			},
			{
				"name": "stealth",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["acid"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "22",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "14",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "8",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "16",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["minor illusion","detect thoughts","counterspell"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 3 spells at level 4 or below. It has a +8 bonus to hit and a DC 16 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "15",
						"rolls": "2",
						"die": "8",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "16",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 16 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "acid breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "54",
						"rolls": "12",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales acid in a 60ft line that is 5ft wide. Each creature in that line must make a DC 18 DEX saving throw, taking 54(12d8) acid damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "slowing breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales gas in a 60ft cone. Each creature in that area must succeed on a DC 18 STR saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 19 DEX saving throw or take 14(2d6+7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Copper dragons dwell in dry uplands and on hilltops, where they make their lairs in narrow caves. False walls in the lair hide secret antechambers where the dragon stores valuable ores, art objects, and other oddities it has collected over its lifetime. Worthless items are put on display in open caves to tantalize treasure seekers and distract them from where the real treasure is hidden.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The dragon chooses a point on the ground that it can see within 120ft of it. Stone spikes sprout from the ground in a 20ft-radius centered on that point. The effect is otherwise identical to the spike growth spell and lasts until the dragon uses this lair action again or until the dragon dies.</p>",
				"<p>The dragon chooses a 10ft-square area on the ground that it can see within 120ft of it. The ground in that area turns into 3ft-deep mud. Each creature on the ground in that area when the mud appears must succeed on a DC 15 DEX saving throw or sink into the mud and become restrained. A creature can take an action to attempt a DC 15 STR check, freeing itself or another creature within its reach and ending the restrained condition on a success. Moving 1 foot in the mud costs 2ft of movement. On initiative count 20 on the next round, the mud hardens, and the STR DC to work free increases to 20.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Magic carvings of the dragon's smiling visage can be seen worked into stone terrain and objects within 6 miles of the dragon's lair.</p>",
				"<p>Tiny beasts such as rodents and birds that are normally unable to speak gain the magical ability to speak and understand Draconic while within 1 mile of the dragon's lair. These creatures speak well of the dragon, but can't divulge its whereabouts.</p>",
				"<p>Intelligent creatures within 1 mile of the dragon's lair are prone to fits of giggling. Even serious matters suddenly seem amusing.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "copper dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>Copper dragons are incorrigible pranksters, joke tellers, and riddlers that live in hills and rocky uplands. Despite their gregarious and even-tempered natures, they possess a covetous, miserly streak, and can become dangerous when their hoards are threatened.</p><p>A copper dragon has brow plates jutting over its eyes, extending back to long horns that grow as a series of overlapping segments. Its backswept cheek ridges and jaw frills give it a pensive look. At birth, a copper dragon's scales are a ruddy brown with a metallic tint. As the dragon ages, its scales become more coppery in color, later taking on a green tint as it ages. A copper dragon's pupils fade with age, and the eyes of the oldest copper dragons resemble glowing turquoise orbs.</p><p><strong>Good Hosts.</strong> A copper dragon appreciates wit, a good joke, humorous story, or riddle. A copper dragon becomes annoyed with any creature that doesn't laugh at its jokes or accept its tricks with good humor.</p><p>Copper dragons are particularly fond of bards. A dragon might carve out part of its lair as a temporary abode for a bard willing to regale it with stories, riddles, and music. To a copper dragon, such companionship is a treasure to be coveted.</p><p><strong>Cautious and Crafty.</strong> When building its hoard, a copper dragon prefers treasures from the earth. Metals and precious stones are favorites of these creatures.</p><p>A copper dragon is wary when it comes to showing off its possessions. If it knows that other creatures seek a specific item in its hoard, a copper dragon will not admit to possessing the item. Instead, it might send curious treasure hunters on a wild goose chase to search for the object while it watches from afar for its own pleasure.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "16",
		"armor": ["natural"],
		"hp": {
			"default": "22",
			"rolls": "4",
			"die": "8",
			"mod": "4"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "15",
		"dex": "12",
		"con": "13",
		"int": "14",
		"wis": "11",
		"chr": "13",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "3"
			},
			{
				"attribute": "con",
				"mod": "3"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "3"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["acid"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "3",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "11",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["minor illusion"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 1 spells at level 0 or below. It has a +3 bonus to hit and a DC 11 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "10",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "acid breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "11",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "20",
						"default": "18",
						"rolls": "4",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales acid in a 20ft line that is 5ft wide. Each creature in that line must make a DC 11 DEX saving throw, taking 18(4d8) acid damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "slowing breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "11",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales gas in a 15ft cone. Each creature in that area must succeed on a DC 11 STR saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "copper dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>Copper dragons are incorrigible pranksters, joke tellers, and riddlers that live in hills and rocky uplands. Despite their gregarious and even-tempered natures, they possess a covetous, miserly streak, and can become dangerous when their hoards are threatened.</p><p>A copper dragon has brow plates jutting over its eyes, extending back to long horns that grow as a series of overlapping segments. Its backswept cheek ridges and jaw frills give it a pensive look. At birth, a copper dragon's scales are a ruddy brown with a metallic tint. As the dragon ages, its scales become more coppery in color, later taking on a green tint as it ages. A copper dragon's pupils fade with age, and the eyes of the oldest copper dragons resemble glowing turquoise orbs.</p><p><strong>Good Hosts.</strong> A copper dragon appreciates wit, a good joke, humorous story, or riddle. A copper dragon becomes annoyed with any creature that doesn't laugh at its jokes or accept its tricks with good humor.</p><p>Copper dragons are particularly fond of bards. A dragon might carve out part of its lair as a temporary abode for a bard willing to regale it with stories, riddles, and music. To a copper dragon, such companionship is a treasure to be coveted.</p><p><strong>Cautious and Crafty.</strong> When building its hoard, a copper dragon prefers treasures from the earth. Metals and precious stones are favorites of these creatures.</p><p>A copper dragon is wary when it comes to showing off its possessions. If it knows that other creatures seek a specific item in its hoard, a copper dragon will not admit to possessing the item. Instead, it might send curious treasure hunters on a wild goose chase to search for the object while it watches from afar for its own pleasure.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "119",
			"rolls": "14",
			"die": "10",
			"mod": "42"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "12",
		"con": "17",
		"int": "16",
		"wis": "13",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "4"
			},
			{
				"attribute": "con",
				"mod": "6"
			},
			{
				"attribute": "wis",
				"mod": "4"
			},
			{
				"attribute": "cha",
				"mod": "5"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "5"
			},
			{
				"name": "perception",
				"mod": "7"
			},
			{
				"name": "stealth",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["acid"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "17",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "7",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "4",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "12",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["minor illusion","detect thoughts"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 2 or below. It has a +4 bonus to hit and a DC 12 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "acid breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "40",
						"default": "40",
						"rolls": "9",
						"die": "8",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales acid in a 40ft line that is 5ft wide. Each creature in that line must make a DC 14 DEX saving throw, taking 40(9d8) acid damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "slowing breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales gas in a 30ft cone. Each creature in that area must succeed on a DC 14 STR saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "couatl",
		"pro": "",
		"src": "",
		"desc": "<p>Couatls are benevolent serpentine beings of great intellect and insight. Their brilliantly colored wings and gentle manner speak to their celestial origins.</p><p><strong>Divine Caretakers.</strong> Couatls were created as guardians and caretakers by a benevolent god not worshiped since the dawn of time, and which is forgotten now by all but the couatls themselves. Most of the divine mandates given to these beings are long since fulfilled or failed. However, a number of couatls still watch over ancient power, await fulfillment of prophecy, or safeguard the heirs of creatures they once guided and protected. Regardless of a couatl's task, it prefers to remain hidden, revealing itself only as a last resort.</p><p><strong>Truth Tellers.</strong> A couatl can't lie, but it can withhold information, answer questions vaguely, or allow others to jump to the wrong conclusions if doing so is necessary to protect something, to keep promises, or to hide the secret of its existence.</p><p><strong>Ancient and Few.</strong> A couatl can live for ages without sustenance, even surviving without air, but these creatures can die of disease or the passage of time. A couatl can sense its end up to a century beforehand, but it has no insight into the manner of its demise.</p><p>If a couatl has already accomplished what it set out to do, it accepts its fate. However, if its imminent death endangers the completion of its goals, it actively seeks out another couatl with which to produce offspring.</p><p>The mating ritual of couatls is a beautiful and elaborate dance of magic and light, which results in a gem-like egg from which a new couatl hatches. The parent that sought out the mate raises the newborn couatl and instructs it as to its duties, so that it can complete whatever task the parent leaves unfinished.</p>",
		"size": "medium",
		"type": "celestial",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "97",
			"rolls": "13",
			"die": "8",
			"mod": "39"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "90",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "16",
		"dex": "20",
		"con": "17",
		"int": "18",
		"wis": "20",
		"chr": "18",
		"savingThrows": [
			{
				"ability": "con",
				"mod": "5"
			},
			{
				"ability": "wis",
				"mod": "7"
			},
			{
				"ability": "cha",
				"mod": "6"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["radiant"],
		"damageImm": ["psychic","bludgeoning","piercing","slashing"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "15",
		"languages": {
			"speaks": ["all","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "4",
		"traits": [
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["detect evil and good","detect magic","detect thoughts"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "3",
						"span": "day",
						"titles": ["bless","create food and water","cure wounds","lesser restoration","protection from poison","sanctuary","shield"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["dream","greater restoration","scrying"],
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "magic weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The couatl's weapon attacks are magical</p>"
			},
			{
				"name": "shielded mind",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "6",
						"mod": "5",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "constrict",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"mod": "3",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>Medium or smaller targets are grappled (escape DC 15 STR/DEX). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.</p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).</p><p>In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, STR, DEX, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "crawling claw",
		"pro": "",
		"src": "",
		"desc": "<p>Crawling claws are the severed hands of murderers animated by dark magic so that they can go on killing. Wizards and warlocks of a dark bent use crawling claws as extra hands in their labors.</p><p><strong>Magical Origins.</strong> Through dark necromantic rituals, the life force of a murderer is bound to its severed hand, haunting and animating it. If a dead murderer's spirit already manifests as another undead creature, if the murderer is raised from death, or if the spirit has long passed on to another plane, the ritual fails.</p><p>The ritual invoked to create a crawling claw works best with a hand recently severed from a murderer. To this end, ritualists and their servants frequent public executions to gain possession of suitable hands, or make bargains with assassins and torturers.</p><p><strong>Creator's Control.</strong> A crawling claw can't be turned, nor can it be controlled by spells that control undead. These foul monsters are entirely bound to the will of their creator, which can concentrate on a claw in sight to mentally command its every action. If the crawling claw's creator doesn't command it, the claw follows its last command to the best of its ability.</p><p>Commands given to a crawling claw must be simple. A claw can't be tasked with finding and killing a particular person, because its limited senses and intelligence prevent it from tracking and picking out specific individuals. However, a command to kill all creatures in a particular locale works. A crawling claw can easily feel out the contours of keys and doorknobs, crawling from room to room on a blind killing spree.</p><p><strong>Malign Intelligence.</strong> A crawling claw possesses little of the intellect and memories of the individual of which it was once a living part. The hate, jealousy, or greed that drove that person to murder lingers on, however, amplified by the claw's torturous fragmented state. Left to its own devices, a crawling claw imitates and recreates the same murderous acts it committed in life.</p><p><strong>Living Claws.</strong> If a crawling claw is animated from the severed hand of a still-living murderer, the ritual binds the claw to the murderer's soul. The disembodied hand can then return to its former limb, its undead flesh knitting to the living arm from which it was severed.</p><p>Made whole again, the murderer acts as though the hand had never been severed and the ritual had never taken place. When the crawling claw separates again, the living body falls into a coma. Destroying the crawling claw while it is away from the body kills the murderer. However, killing the murderer has no effect on the crawling claw.</p><p><strong>Undead Nature.</strong> A crawling claw doesn't require air, food, drink, or sleep.</p>",
		"size": "tiny",
		"type": "undead",
		"class": "",
		"tag": "",
		"alignment": "neutral evil",
		"ac": "12",
		"armor": [""],
		"hp": {
			"default": "2",
			"rolls": "1",
			"die": "4",
			"mod": ""
		},
		"speed": [
			{
				"type": "climb",
				"distance": "20",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "13",
		"dex": "14",
		"con": "11",
		"int": "5",
		"wis": "10",
		"chr": "4",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison"],
		"conditionImm": ["charmed","exhaustion","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "30",
				"notes": "",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": [""],
			"understands": ["common"]
		},
		"challengeRating": "0",
		"traits": [
			{
				"name": "turn immunity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The claw is immune to effects that turn undead.</p>"
			}
		],
		"actions": [
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "4",
						"mod": "1",
						"type": "bludgeoning/slashing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "cyclops",
		"pro": "",
		"src": "",
		"desc": "<p>Cyclopes are one-eyed giants that eke out a meager existence in wild lands. Isolationists by nature, they avoid contact with other races and try to drive away strangers in their territory.</p><p><strong>Nonreligious.</strong> Legends claim that the cyclopes are the spawn of one of the gods of the giants, but these creatures pay little heed to any deities. They see little benefit in prayer and dislike ritual, which they perceive as complex and foreign. However, a cyclops that gains direct benefit from some site of divine power, or which is threatened by a supernatural force or creature, will pay homage as long as the benefit or threat remains.</p><p><strong>Unsophisticated.</strong> Though they are reasonably intelligent, cyclopes live simple, reclusive lives, keeping herds of animals for food. They prefer to dwell alone or in small family groups, lairing in caves, ruins, or rough structures of dry stone construction they build themselves. A cyclops keeps its herd animals with it at night, sealing the entrance to its home with boulders to let it serve double duty as a barn.</p><p>A cyclops lairs within a day's journey of other cyclopes, so that they can meet to trade goods or seek mates. They craft weapons and tools of wood and stone, but will use metal when they can find it. Although cyclopes understand the Giant tongue, they write nothing and speak little, using grunts and gestures for their interactions with each other.</p><p>Cyclopes don't use money for trade, but they value gold, shells, and other glittering and colorful objects as jewelry. A cyclops might wear a necklace strung with feathers and silver coins, but also with pewter goblets, cutlery, and other bits of ruined metal.</p><p><strong>Unwise.</strong> Cyclopes aren't great thinkers or strategists. Slow to learn and bound to their traditional ways, they find innovation difficult. Although they are a terrifying threat in combat due to their size and strength, they can often be tricked by clever foes.</p><p>Cyclopes can be cowed and awed by obvious displays of magic. Rustics with little exposure to magic, they can be deceived into mistaking a warlock, cleric, or other caster for a powerful divine figure. However, their sense of pride causes them to react with vengeful, bloodthirsty violence once they learn that the individual they assumed was a \"god\" is a mere mortal.</p>",
		"size": "huge",
		"type": "giant",
		"class": "",
		"tag": "",
		"alignment": "chaotic neutral",
		"ac": "14",
		"armor": ["natural"],
		"hp": {
			"default": "138",
			"rolls": "12",
			"die": "12",
			"mod": "60"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "22",
		"dex": "11",
		"con": "20",
		"int": "8",
		"wis": "6",
		"chr": "10",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "8",
		"languages": {
			"speaks": ["giant"],
			"understands": [""]
		},
		"challengeRating": "6",
		"traits": [
			{
				"name": "poor depth perception",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The cyclops has disadvantage on any attack roll against a target more than 30ft away.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The cyclops makes two greatclub attacks.</p>"
			},
			{
				"name": "greatclub",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "19",
						"rolls": "3",
						"die": "8",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "rock",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/120",
						"default": "28",
						"rolls": "4",
						"die": "10",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "darkmantle",
		"pro": "",
		"src": "",
		"desc": "<p>A darkmantle clings to cavern ceilings, remaining perfectly still as it waits for creatures to pass beneath it. From a distance, it can pass itself off as a stalactite or a lump of stone. Then it drops from the ceiling and unfurls, surrounding itself with magical darkness as it engulfs and crushes its prey.</p><p>Darkmantles are found throughout the Underdark, but they are equally common on the Shadowfell. Thriving in that dark realm, they fill an ecological niche similar to bats on the Material Plane. Intelligent creatures of the Shadowfell sometimes train darkmantles as guardians or companions.</p>",
		"size": "small",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "11",
		"armor": [""],
		"hp": {
			"default": "22",
			"rolls": "5",
			"die": "6",
			"mod": "5"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "10",
				"notes": ""
			
		],
		"str": "16",
		"dex": "12",
		"con": "13",
		"int": "2",
		"wis": "10",
		"chr": "5",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "stealth",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": ".5",
		"traits": [
			{
				"name": "echolocation",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The darkmantle can't use its blindsight while deafened.</p>"
			},
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.</p>"
			}
		],
		"actions": [
			{
				"name": "crush",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "6",
						"mod": "3",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>On a successful hit, the darkmantle attaches to the target. If the target is medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.</p><p>While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.</p><p>A creature can detach the darkmantle by making a successful DC 13 STR check as an action. On its turn, the darkmantle can detach itself from the target by using 5ft of movement.</p>"
			},
			{
				"name": "darkness aura",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A 15ft radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "death knight",
		"pro": "",
		"src": "",
		"desc": "<p>When a paladin that falls from grace dies without seeking atonement, dark powers can transform the once-mortal knight into a hateful undead creature. A death knight is a skeletal warrior clad in fearsome plate armor. Beneath its helmet, one can see the knight's skull with malevolent pinpoints of light burning in its eye sockets.</p><p><strong>Eldritch Power.</strong> The death knight retains the ability to cast divine spells. However, no death knight can use its magic to heal. A death knight also attracts and commands lesser undead, although death knights that serve powerful fiends might have fiendish followers instead. Death knights often use warhorse skeletons and nightmares as mounts.</p><p><strong>Immortal Until Redeemed.</strong> A death knight can arise anew even after it has been destroyed. Only when it atones for a life of wickedness or finds redemption can it finally escape its undead purgatory and truly perish.</p><p><strong>Lord Soth. Lord Soth began his fall from grace with an act of heroism, saving an elf named Isolde from an ogre. Soth and Isolde fell in love, but Soth was already married. He had a servant dispose of his wife and was charged with murder, but fled with Isolde. When his castle fell under siege, he prayed for guidance and was told that he must atone for his misdeeds by completing a quest, but growing fears about Isolde's fidelity caused him to abandon his quest. Because his mission was not accomplished, a great cataclysm swept the land. When Isolde gave birth to a son, Soth refused to believe that the child was his and slew them both. All were incinerated in a fire that swept through the castle, yet Soth would find no rest in death, becoming a death knight.</p>",
		"size": "medium",
		"type": "undead",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "20",
		"armor": ["plate","shield"],
		"hp": {
			"default": "180",
			"rolls": "19",
			"die": "8",
			"mod": "95"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "20",
		"dex": "11",
		"con": "20",
		"int": "12",
		"wis": "16",
		"chr": "18",
		"savingThrows": [
			{
				"ability": "dex",
				"mod": "6"
			},
			{
				"ability": "wis",
				"mod": "9"
			},
			{
				"ability": "cha",
				"mod": "10"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["necrotic","poison"],
		"conditionImm": ["exhaustion","frightened","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": ["abyssal","common"],
			"understands": [""]
		},
		"challengeRating": "17",
		"traits": [
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The death knight has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "marshal undead",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Unless the death knight is incapacitated, it and undead creatures of its choice within 60ft of it have advantage on saving throws against features that turn undead.</p>"
			},
			{
				"name": "spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "18",
				"spell": [
					{
						"level": "1",
						"rate": "4",
						"span": "slots",
						"titles": ["command","compelled duel","searing smite"],
						"notes": ""
					},
					{
						"level": "2",
						"rate": "3",
						"span": "slots",
						"titles": ["hold person","magic weapon"],
						"notes": ""
					},
					{
						"level": "3",
						"rate": "3",
						"span": "slots",
						"titles": ["dispel magic","elemental weapon"],
						"notes": ""
					},
					{
						"level": "4",
						"rate": "3",
						"span": "slots",
						"titles": ["banishment","staggering smite"],
						"notes": ""
					},
					{
						"level": "5",
						"rate": "2",
						"span": "slots",
						"titles": ["destructive wave (necrotic)"]
					}
				],
				"desc": "<p>The death knight is a 19th-level spell caster. It has +10 to hit with spell attacks.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The death knight makes three longsword attacks.</p>"
			},
			{
				"name": "longsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "9",
						"rolls": "1",
						"die": "8",
						"mod": "5",
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
						"mod": "5",
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
						"mod": "",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "hellfire orb",
				"perDay": "1",
				"recharge": "",
				"ability": "dex",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged spell",
						"handed": "",
						"reach": "120",
						"default": "35",
						"rolls": "10",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "35",
						"rolls": "10",
						"die": "6",
						"mod": "",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"desc": "<p>The death knight hurls a magical ball of fire that explodes at a point it can see within 120ft of it. Each creature in a 20ft radius sphere centered on that point must make a DC 18 DEX saving throw. The sphere spreads around corners. A creature takes 35(10d6) fire damage and 35(10d6) necrotic damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "parry",
				"desc": "<p>The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon.</p>"
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "death tyrant",
		"pro": "",
		"src": "",
		"desc": "<p>On rare occasions, a beholder's sleeping mind drifts to places beyond its normal madness, imagining a reality in which it exists beyond death. When such dreams take hold, a beholder can transform, its flesh sloughing away to leave a death tyrant behind. This monster possesses the cunning and much of the magic it had in life, but it is fueled by the power of undeath.</p><p>A death tyrant appears as a massive, naked skull, with a pinpoint of red light gleaming in its hollow eye socket. With its eyestalks rotted away, ten spectral eyes hover above the creature and glare in all directions.</p><p><strong>Deathly Despot.</strong> As they did when they were beholders, death tyrants lord their power over other creatures. Moreover, a beholder's ability to quash magical energy with its central eye gives way to a more sinister power in a death tyrant, which can transform former slaves and enemies into undead servants.</p><p>Zombies created by a death tyrant are used and discarded as needed. They stand guard at the entrances to the death tyrant's lair or guard its treasure vaults. Acting as bait for traps or as combat fodder, Zombies keep powerful enemies distracted while the death tyrant moves into position and prepares to destroy them.</p><p><strong>Armies of the Dead.</strong> A death tyrant that embraces undeath becomes an engine of destruction. Driven by a hunger for power and security, it advances against humanoid settlements, using its eye rays to destroy every creature it encounters, then building an army of undead. If left unchecked, a death tyrant might wipe out the population of a city in weeks, then set its undead eye on wider conquest. As each settlement falls, the death tyrant's zombie forces build to overwhelming numpers.</p><p><strong>Undead Nature.</strong> A death tyrant doesn't require air, food, drink, or sleep.</p>",
		"size": "large",
		"type": "undead",
		"class": "",
		"tag": "beholder",
		"alignment": "lawful evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "187",
			"rolls": "25",
			"die": "10",
			"mod": "50"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "20",
				"notes": "hover"
			}
		],
		"str": "10",
		"dex": "14",
		"con": "14",
		"int": "19",
		"wis": "15",
		"chr": "19",
		"savingThrows": [
			{
				"ability": "str",
				"mod": "5"
			},
			{
				"ability": "con",
				"mod": "7"
			},
			{
				"ability": "int",
				"mod": "9"
			},
			{
				"ability": "wis",
				"mod": "7"
			},
			{
				"ability": "cha",
				"mod": "9"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "12"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison"],
		"conditionImm": ["charmed","exhaustion","paralyzed","petrified","poisoned","prone"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "22",
		"languages": {
			"speaks": ["deep speech, undercommon"],
			"understands": [""]
		},
		"challengeRating": "14",
		"traits": [
			{
				"name": "negative energy cone",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the tyrant decides which way the cone faces and whether the cone is active.</p><p>Any creature in that area can't regain HP. Any humanoid that dies there becomes a zombie under the tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "4",
						"die": "6",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "Eye Rays",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The death tyrant shoots three of the following magical eye rays at random (1d10 reroll duplicates), choosing one to three targets it can see within 120ft of it:</p><p><ol><li><strong>Charm Ray.</strong> The targeted creature must succeed on a DC 17 WIS saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.</li><li><strong>Paralyzing Ray.</strong> The targeted creature must succeed on a DC 17 CON saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Fear Ray.</strong> The targeted creature must succeed on a DC 17 WIS saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Slowing Ray.</strong> The targeted creature must succeed on a DC 17 DEX saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not bofh. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Enervation Ray.</strong> The targeted creature must make a DC 17 CON saving throw, taking 36(8d8) necrotic damage on a failed save, or half as much damage on a successful one.</li><li><strong>Telekinetic Ray.</strong> If the target is a creature, it must succeed on a DC 17 STR saving throw or the beholder moves it up to 30ft in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.<br><br>If the target is an object weighing 300lbs or less that isn't being worn or carried, it is moved up to 30ft in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.</li><li><strong>Sleep Ray.</strong> The targeted creature must succeed on a DC 17 WIS saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.</li><li><strong>Petrification Ray.</strong> The targeted creature must make a DC 17 DEX saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.</li><li><strong>Disintegration Ray.</strong> If the target is a creature, it must succeed on a DC 17 DEX saving throw or take 45(10d8) force damage. If this damage reduces the creature to 0HP, its body becomes a pile of fine gray dust.<br><br>If the target is a large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a huge or larger object or creation of magical force, this ray disintegrates a 10ft cube of it.</li><li><strong>Death Ray.</strong> The targeted creature must succeed on a DC 17 DEX saving throw or take 55(10d10) necrotic damage. The target dies if the ray reduces it to 0HP.</li></ol></p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "eye ray",
				"desc": "<p>The beholder uses one random eye ray.</p>"
			}
		],
		"lair": {
			"desc": "<p>A death tyrant's lair is usually the same site it held as a beholder, but it contains more trappings of death and decay. A death tyrant encountered in its lair has a challenge rating of 15.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>An area that is a 50-foot cube within 120ft of the tyrant is filled with spectral eyes and tentacles. To creatures other than the death tyrant, that area is lightly obscured and difficult terrain until initiative count 20 on the next round.</p>",
				"<p>Walls sprout spectral appendages until initiative count 20 on the round after next. Any creature, including one on the Ethereal Plane, that is hostile to the tyrant and starts its turn within 10ft of a wall must succeed on a DC 17 DEX saving throw or be grappled. Escaping requires a successful DC 17 STR(athletics) or DEX(acrobatics) check.</p>",
				"<p>A spectral eye opens in the air at a point within 50ft of the tyrant. One random eye ray of the tyrant shoots from that eye, which is considered to be an ethereal source, at a target of the tyrant's choice. The eye then closes and disappears.</p>"
			],
			"restrictions": "<p>The death tyrant can't repeat an effect until all three have been used, and it can't use the same effect on consecutive rounds.</p>",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Creatures within 1 mile of the tyrant's lair sometimes feel as if they're being watched even when they aren't.</p>",
				"<p>When a creature hostile to the tyrant and aware of its existence finishes a long rest within 1 mile of the tyrant's lair, roll a d20 for that creature. On a roll of 10 or lower, the creature is subjected to one random eye ray of the tyrant.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "demilich",
		"pro": "",
		"src": "",
		"desc": "<p>The immortality granted to a lich lasts only as long as it feeds mortal souls to its phylactery. If it falters or fails in that task, its bones turn to dust until only its skull remains. This \"demilich\" contains only a fragment of the lich's malevolent life force&mdash;just enough so that if it is disturbed, these remains rise into the air and assume a wraithlike form. The skull then emits a terrifying howl that can slay the weak-hearted and leave others trembling with fear. Left alone, it sinks back down and returns to the empty peace of its existence.</p><p>Few liches seek to become demiliches, for it means an end to the existence they hoped to preserve by becoming undead. However, time can erode the lich's reason and memory, causing it to retreat into its ancient tomb and forget to feed on souls. The spells it once knew fade from its mind, and it no longer channels the arcane energy it wielded as a lich. However, even as a mere skull it remains a deadly and vexing enemy.</p><p><strong>Enduring Existence.</strong> Even after a lich is reduced to a demilich state, its phylactery survives. As long as its phylactery is intact, the demilich can't be permanently destroyed. Its skull reforms after 1d10 days, restoring the creature to its wretched state. If it has the presence of mind to do so, a demilich can reclaim its former power by feeding just one soul to its phylactery. Doing so restores the demilich to lich form, reconstituting its undead body.</p><p><strong>Undead Nature.</strong> A demilich doesn't require air, food, drink, or sleep. So great is a demilich's will to survive that it always has the maximum number of HP for its Hit Dice, instead of average HP.</p>",
		"size": "tiny",
		"type": "undead",
		"class": "",
		"tag": "",
		"alignment": "neutral evil",
		"ac": "20",
		"armor": ["natural"],
		"hp": {
			"default": "80",
			"rolls": "20",
			"die": "4",
			"mod": ""
		},
		"speed": [
			{
				"type": "fly",
				"distance": "30",
				"notes": "hover"
			}
		],
		"str": "1",
		"dex": "20",
		"con": "10",
		"int": "20",
		"wis": "17",
		"chr": "20",
		"savingThrows": [
			{
				"ability": "con",
				"mod": "6"
			},
			{
				"ability": "int",
				"mod": "11"
			},
			{
				"ability": "wis",
				"mod": "9"
			},
			{
				"ability": "cha",
				"mod": "11"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["bludgeoning","piercing","slashing"],
		"damageImm": ["necrotic","poison","psychic","bludgeoning","piercing","slashing"],
		"conditionImm": ["charmed","deafened","exhaustion","frightened","paralyzed","petrified","poisoned","prone","stunned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "18",
		"traits": [
			{
				"name": "avoidance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the demilich fails a saving throw, it can choose to succeed instead.</p>"
			},
			{
				"name": "turn immunity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The demilich is immune to effects that turn undead.</p>"
			}
		],
		"actions": [
			{
				"name": "howl",
				"perDay": "",
				"recharge": "5-6",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The demilich emits a bloodcurdling howl. Each creature within 30ft of the demilich that can hear the howl must succeed on a DC 15 CON saving throw or drop to 0HP. On a successful save, the creature is frightened until the end of its next turn.</p>"
			},
			{
				"name": "life drain",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "19",
				"attackMod": "",
				"targetNum": "3",
				"weapon": [
					{
						"type": "ranged spell",
						"handed": "",
						"reach": "10",
						"default": "21",
						"rolls": "6",
						"die": "6",
						"mod": "",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"desc": "<p>The demilich targets up to three creatures that it can see within 10ft of it. Each target must succeed on a DC 19 CON saving throw or take 21(6d6) necrotic damage, and the demilich regains HP equal to the total damage dealt to all targets.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "flight",
				"desc": "<p>The demilich flies up to half its flying speed.</p>"
			},
			{
				"name": "cloud of dust",
				"desc": "<p>The demilich magically swirls its dusty remains. Each creature within 10ft of the demilich, including around a corner, must succeed on a DC 15 CON saving throw or be blinded until the end of the demilich's next turn. A creature that succeeds on the saving throw is immune to this effect until the end of the demilich's next turn.</p>"
			},
			{
				"name": "energy drain (costs 2 actions)",
				"desc": "<p>Each creature with in 30ft of the demilich must make a DC 15 CON saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10(3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with the greater restoration spell or similar magic.</p>"
			},
			{
				"name": "vile curse (costs 3 actions)",
				"desc": "<p>The demilich targets one creature it can see within 30ft of it. The target must succeed on a DC 15 WIS saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success.</p>"
			}
		],
		"lair": {
			"desc": "<p>A demilich hides its earthly remains and treasures in a labyrinthine tomb guarded by monsters and traps. At the heart of this labyrinth rests the demilich's skull and the dust from its other bones.</p><p>In its crypt, a demilich has access to lair actions and plus uses for its legendary actions. Its whole lair also has unique traits. A demilich in its lair has a challenge rating of 20.</p>",
			"initiative": "20",
			"actionDc": "11",
			"actions": [
				"<p>The tomb trembles violently for a moment. Each creature on the floor of the tomb must succeed on a DC 19 DEX saving throw or be knocked prone.</p>",
				"<p>The demilich targets one creature it can see within 60ft of it. An antimagic field fills the space of the target, moving with it until initiative count 20 on the next round.</p>",
				"<p>The demilich targets any number of creatures it can see within 30ft of it. No target can regain HP until initiative count 20 on the next round.</p>"
			],
			"restrictions": "",
			"traits": [
				"<p>The first time a non-evil creature enters the tomb's area, the creature takes 16(3d10) necrotic damage.</p>",
				"<p>Monsters in the tomb have advantage on saving throws against being charmed or frightened, and against features that turn undead.</p>",
				"<p>The tomb is warded against the magical travel of creatures the demilich hasn't authorized. Such creatures can't teleport into or out of the tomb's area or use planar travel to enter or leave it. Effects that allow teleportation or planar travel work within the tomb as long as they aren't used to leave or enter the tomb's area.</p>"
			]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "deva",
		"pro": "",
		"src": "",
		"desc": "<p>Devas are angels that act as divine messengers or agents to the Material P lane, the Shadowfell, and the Feywild and that can assume a form appropriate to the realm they are sent to.</p><p>Legend tells of angels that take mortal form for years, lending aid, hope, and courage to good hearted folk. A deva can take any shape, although it prefers to appear to mortals as an innocuous humanoid or animal. When circumstances require that it cast off its guise, a deva is a beautiful humanoid-like creature with silvery skin. Its hair and eyes gleam with an unearthly luster, and large feathery wings unfurl from its shoulder blades.</p>",
		"size": "medium",
		"type": "celestial",
		"class": "angel",
		"tag": "angels",
		"alignment": "lawful good",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "136",
			"rolls": "16",
			"die": "8",
			"mod": "64"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "90",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "18",
		"dex": "18",
		"con": "18",
		"int": "17",
		"wis": "20",
		"chr": "20",
		"savingThrows": [
			{
				"ability": "wis",
				"mod": "9"
			},
			{
				"ability": "cha",
				"mod": "9"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "7"
			},
			{
				"name": "perception",
				"mod": "9"
			}
		],
		"damageVuln": [""],
		"damageRes": ["radiant","bludgeoning","piercing","slashing"],
		"damageImm": [""],
		"conditionImm": ["charmed","exhaustion","frightened"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "19",
		"languages": {
			"speaks": ["all","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "10",
		"traits": [
			{
				"name": "angelic weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack).</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "17",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["detect evil and good"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": ["commune","raise dead"],
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The deva has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The deva makes two melee attacks.</p>"
			},
			{
				"name": "mace",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "6",
						"mod": "4",
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
						"mod": "",
						"damageType": "radiant",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "healing touch",
				"perDay": "3",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The deva touches another creature. The target magically regains 20(4d8+2) HP and is freed from any curse, disease, poison, blindness, or deafness.</p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).</p><p>In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, STR, DEX, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "displacer beast",
		"pro": "",
		"src": "",
		"desc": "<p>This monstrous predator takes its name from its ability to displace light so that it appears to be several feet away from its actual location. A displacer beast resembles a sleek great cat covered in blue-black fur. However, its otherworldly origins are clear in its six legs and the two tentacles sprouting from its shoulders, both ending in pads tipped with spiky protrusions. A displacer beast's eyes glow with an awful malevolence that persists even in death.</p><p><strong>Unseelie Origins.</strong> Displacer beasts roamed the twilight lands of the Feywild for ages, until they were captured and trained by the Unseelie Court. The warriors of the court selectively bred the beasts to reinforce their ferocious and predatory nature, using them to hunt unicorns, pegasi, and other wondrous prey. However, it didn't take long for the displacer beasts to use their malevolent intelligence to escape their masters.</p><p>Running and breeding freely in the Feywild, the displacer beasts soon came to the attention of the Seelie Court. With blink dog companions at their side, fey hunters drove these predators to the fringes of the Feywild, where many crossed over to the Material Plane. To this day, displacer beasts and blink dogs attack each other on sight.</p><p><strong>Love of the Kill.</strong> Displacer beasts kill not just for food but also for sport. They target prey even when not hungry, often toying with their victims to entertain themselves until they are ready to eat. After killing its prey using its tentacles, a displacer beast drags the corpse to a quiet place where it can feed without distraction.</p><p>Displacer beasts hunt alone or in small prides that demonstrate skill at setting ambushes. A single beast will strike and withdraw, luring prey into a densely wooded area where its packmates wait. Packs of displacer beasts hunting near trade roads recall the frequency and schedule of regular caravans, laying down ambushes to pick off those caravans.</p><p><strong>Prized Guards and Pets.</strong> Intelligent evil creatures favor displacer beasts as pets, but a displacer beast enters such an alliance only if it appears beneficial. A displacer beast might guard a vault or act as a bodyguard for a prominent individual.</p>",
		"size": "large",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "85",
			"rolls": "10",
			"die": "10",
			"mod": "30"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "18",
		"dex": "15",
		"con": "16",
		"int": "6",
		"wis": "12",
		"chr": "8",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "avoidance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.</p>"
			},
			{
				"name": "displacement",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of O.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The displacer beast makes two attacks with its tentacles.</p>"
			},
			{
				"name": "tentacle",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "7",
						"rolls": "1",
						"die": "6",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "doppelganger",
		"pro": "",
		"src": "",
		"desc": "<p>Doppelgangers are devious shapeshifters that take on the appearance of other humanoids, throwing off pursuit or luring victims to their doom with misdirection and disguise. Few creatures spread fear, suspicion, and deceit better than doppelgangers. Found in every land and culture, they can take on the guise of any individual of any race.</p><p><strong>Stealing Secrets.</strong> A doppelganger's adopted form allows it to blend into almost any group or community, but its transformation doesn't impart languages, mannerisms, memory, or personality. Doppelgangers often follow or capture creatures they intend to impersonate, studying them and probing their minds for secrets. A doppelganger can read a creature's surface thoughts, allowing it to glean that creature's name, desires, and fears, along with a few scattered memories. A doppelganger impersonating a specific creature as part of a long-term plot might keep its double alive and close at hand for weeks, probing the victim's mind daily to learn how to behave and speak authentically.</p><p><strong>Hedonistic Swindlers.</strong> Doppelgangers work alone or in small groups, with group roles shifting from con to con. While one doppelganger takes the place of a murdered merchant or noble, the others take on a number of identities as circumstances warrant, playing the parts of family or servants while they live off the victim's riches.</p><p><strong>Changelings.</strong> Doppelgangers are too lazy or self interested to raise their young. They assume attractive male forms and seduce women, leaving them to raise their progeny. A doppelganger child appears to be a normal member of its mother's species until it reaches adolescence, at which point it discovers its true nature and is driven to seek out its kind to join them.</p>",
		"size": "medium",
		"type": "monstrosity",
		"class": "",
		"tag": "shapechanger",
		"alignment": "neutral neutral",
		"ac": "14",
		"armor": [""],
		"hp": {
			"default": "52",
			"rolls": "8",
			"die": "8",
			"mod": "16"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "11",
		"dex": "18",
		"con": "14",
		"int": "11",
		"wis": "12",
		"chr": "14",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "6"
			},
			{
				"name": "insight",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": ["charmed"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["common"],
			"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "shapechanger",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The doppelganger can use its action to polymorph into a Small or medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.</p>"
			},
			{
				"name": "ambusher",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The doppelganger has advantage on attack rolls against any creature it has surprised.</p>"
			},
			{
				"name": "surprise attack",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "10",
				"rolls": "3",
				"die": "6",
				"mod": "",
				"type": "n/a",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10(3d6) damage from the attack.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The doppelganger makes two melee attacks.</p>"
			},
			{
				"name": "slam",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "6",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "read thoughts",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The doppelganger magically reads the surface thoughts of one creature within 60ft of it. The effect can penetrate barriers, but 3ft of wood or dirt, 2ft of stone, 2in of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on WIS(Insight) and CHA (Deception, Intimidation, and Persuasion) checks against the target.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "dracolich",
		"pro": "",
		"src": "",
		"desc": "<p>Even as long-lived as they are, all dragons must eventually die. This thought doesn't sit well with many dragons, some of which allow themselves to be transformed by necromantic energy and ancient rituals into powerful undead dracoliches. Only the most narcissistic dragons choose this path, knowing that by doing so, they sever all ties to their kin and the dragon gods.</p><p><strong>Beyond Death.</strong> A dracolich retains its shape and size upon transforming, its skin and scales drawing tight to its bones or sloughing away to leave a skeletal form behind. Its eyes appear as glowing points of light floating in shadowy sockets, hinting at the malevolence of its undead mind.</p><p>Though many dragons pursue vain goals of destruction and dominance, dracoliches are more nefarious than the most evil dragons, driven to rule over all. A dracolich is a fiendishly intelligent tyrant that crafts complex webs of foul schemes, attracting servants motivated by greed and a lust for power. Acting from the shadows and actively plotting to keep its existence a secret, a dracolich is a cunning and challenging foe.</p><p><strong>Dracolich Phylacteries.</strong> Creating a dracolich requires the cooperation of the dragon and a group of mages or cultists that can perform the proper ritual. During the ritual, the dragon consumes a toxic brew that slays it instantly. The attendant spellcasters then ensnare its spirit and transfer it to a special gemstone that functions like a lich's phylactery. As the dragon's flesh rots away, the spirit inside the gem returns to animate the dragon's bones.</p><p>If a dracolich's physical form is ever destroyed, its spirit returns to the gem as long as the two are on the same plane. If the gem comes into contact with another dragon's corpse, the dracolich's spirit can take possession of that corpse to become a new dracolich. If the dracolich's spirit gem is taken to another plane, the dracolich's spirit has nowhere to go when its undead body is destroyed and simply passes into the afterlife.</p><p>Only an ancient or adult true dragon can be transformed into a dracolich. Younger dragons that attempt to undergo the transformation die, as do other creatures that aren't true dragons but possess the dragon type, such as pseudodragons and wyverns. A shadow dragon can't be transformed into a dracolich, for it has already lost too much of its physical form.</p><p>When a dragon becomes a dracolich, it retains its statistics except as described below. The dragon loses any trait, such as Amphibious, that assumes a living physiology. The dracolich might retain or lose any or all of its lair actions or inherit new ones, as the DM sees fit.</p><p>These stats are for a blue adult dracolich</p>",
		"size": "huge",
		"type": "undead",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "225",
			"rolls": "18",
			"die": "12",
			"mod": "108"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "25",
		"dex": "10",
		"con": "23",
		"int": "16",
		"wis": "15",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "11"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},{
				"attribute": "cha",
				"mod": "9"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "12"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": ["necrotic"],
		"damageImm": ["lightning","poison"],
		"conditionImm": ["charmed","exhaustion","frightened","paralyzed","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "22",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "17",
		"traits": [
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dracolich fails a saving throw, it can choose to succeed instead.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dracolich has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "18",
						"rolls": "2",
						"die": "10",
						"mod": "7",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "5",
						"rolls": "1",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "2",
						"die": "6",
						"mod": "7",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "16",
						"rolls": "2",
						"die": "8",
						"mod": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dracolich's choice that is within 120ft of the dracolich and aware of it must succeed on a DC 18 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "lightning breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "20",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "66",
						"rolls": "12",
						"die": "10",
						"mod": "",
						"damageType": "lightning",
						"notes": ""
					}
				],
				"desc": "<p>The dracolich exhales lightning in a 90ft line that is 5ft wide. Each creature in that line must make a DC 20 DEX saving throw, taking 66(12d10) lightning damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dracolich makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dracolich makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dracolich beats its tattered wings. Each creature within 10ft of the dracolich must succeed on a DC 21 DEX saving throw or take 14(2d6+7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "dragon turtle",
		"pro": "",
		"src": "",
		"desc": "<p>Dragon turtles are among the most fearsome creatures of the oceans. As large and voracious as the oldest of its land-based dragon kin, a dragon turtle strikes with its deadly jaws, steaming breath, and crushing tail.</p><p>A dragon turtle's rough shell is the same dark green color as the deep water where this monster dwells. Silver highlights lining the shell resemble light dancing on open water, and a surfacing dragon turtle is sometimes mistaken for the reflection of the sun or moon on the waves.</p><p><strong>Dragons of the Deep.</strong> Like true dragons, dragon turtles collect treasure, first by sinking ships and then by sifting through the wreckage for coins and other precious items. A dragon turtle swallows treasure for transport, then regurgitates it when it reaches its lair.</p><p>Dragon turtles dwell in caves hidden in coral reefs or beneath the seafloor, or along rugged stretches of coastline. If a choice cave is already inhabited, a dragon turtle attacks its current residents in an attempt to take over.</p><p><strong>Mercenary Monsters.</strong> A dragon turtle is smart enough to be bribed, and pirates sailing seas patrolled by these creatures quickly learn to offer them treasure in exchange for safe passage. Clever sahuagin sometimes ally with dragon turtles, enticing them with treasure to use their blistering breath weapons in sahuagin raids against ships and coastal settlements.</p><p><strong>Elemental Might.</strong> Dragon turtles sometimes find their way through sunken planar rifts to the Elemental Plane of Water. Those monstrous specimens can often be found in the service of marids, which strap magnificent coral thrones to the backs of dragon turtles and ride them as mounts.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "neutral neutral",
		"ac": "20",
		"armor": ["natural"],
		"hp": {
			"default": "341",
			"rolls": "22",
			"die": "20",
			"mod": "110"
		},
		"speed": [
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "25",
		"dex": "10",
		"con": "20",
		"int": "10",
		"wis": "12",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "10"
			},
			{
				"attribute": "wis",
				"mod": "5"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["fire"],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["aquan","draconic"],
			"understands": [""]
		},
		"challengeRating": "17",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon turtle can breathe air and water.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "26",
						"rolls": "3",
						"die": "12",
						"mod": "7",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "16",
						"rolls": "2",
						"die": "8",
						"mod": "7",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "str",
				"dc": "20",
				"attackMod": "12",
				"targetNum": "",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "26",
						"rolls": "3",
						"die": "12",
						"mod": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a creature, it must succeed on a DC 20 STR saving throw or be pushed up to 10ft away from the dragon turtle and knocked prone.</p>"
			},
			{
				"name": "steam breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "52",
						"rolls": "15",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon turtle exhales scalding steam in a 60ft cone. Each creature in that area must make a DC 18 CON saving throw, taking 52(15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},	
	{	"name": "dretch",
		"pro": "",
		"src": "",
		"desc": "<p>Dretches are among the weakest of demons&mdash;repulsive, self-loathing creatures doomed to spend eternity in a state of perpetual discontent. Their low intelligence makes dretches unsuitable for anything but the simplest tasks. However, what they lack in potential, they make up for in sheer malice. Dretches mill about in mobs, voicing their displeasure as an unsettling din of hoots, snarls, and grunts.</p>",
		"size": "small",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "11",
		"armor": ["natural"],
		"hp": {
			"default": "18",
			"rolls": "4",
			"die": "6",
			"mod": "4"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			}
		],
		"str": "11",
		"dex": "11",
		"con": "12",
		"int": "5",
		"wis": "8",
		"chr": "3",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "9",
		"languages": {
			"speaks": ["abyssal","telepathy 60ft"],
			"understands": [""]
		},
		"challengeRating": ".25",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dretch makes two attacks: one with its bite and one with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "2",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claws",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "2",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "2",
						"die": "4",
						"mod": "",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fetid cloud",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A 10ft radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 CON saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "drider",
		"pro": "",
		"src": "",
		"desc": "<p>When a drow shows great promise, Lolth summons it to the Demonweb Pits for a test of faith and strength. Those that pass the test rise higher in the Spider Queen's favor. Those that fail are transformed into driders&mdash;a horrid hybrid of a drow and a giant spider that serves as a living reminder of Lolth's power. Only drow can be turned into driders, and the power to create these creatures resides with Lolth alone.</p><p><strong>Scarred for Life.</strong> Drow transformed into driders return to the Material Plane as twisted and debased creatures. Driven by madness, they disappear into the Underdark to become hermits and hunters, either wandering alone or leading packs of giant spiders.</p><p>On rare occasion, a drider returns to the fringes of drow society despite its curse, most often to fulfill some longstanding vow or vendetta from its former life. Drow fear and shun the driders, holding them in lower esteem than slaves. However, they tolerate the presence of these creatures as living representatives of Lolth's will, and a reminder of the fate that awaits all who fail the Spider Queen.</p>",
		"size": "large",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "123",
			"rolls": "13",
			"die": "10",
			"mod": "52"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "16",
		"dex": "16",
		"con": "18",
		"int": "13",
		"wis": "14",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "5"
			},
			{
				"name": "stealth",
				"mod": "9"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "15",
		"languages": {
			"speaks": ["elvish","undercommon"],
			"understands": [""]
		},
		"challengeRating": "6",
		"traits": [
			{
				"name": "drider spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "6",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "wis",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["poison spray","thaumaturgy"],
						"notes": ""
					},
					{
						"level": "1",
						"rate": "4",
						"span": "slots",
						"titles": ["bane","detect magic","sanctuary"],
						"notes": ""
					},
					{
						"level": "2",
						"rate": "3",
						"span": "slots",
						"titles": ["hold person","silence"],
						"notes": ""
					},
					{
						"level": "3",
						"rate": "3",
						"span": "slots",
						"titles": ["clairvoyance","dispel magic"],
						"notes": ""
					},
					{
						"level": "4",
						"rate": "2",
						"span": "slots",
						"titles": ["divination","freedom of movement"],
						"notes": ""
					}
				],
				"desc": "<p>Driders that were once drow spellcasters might retain their ability to cast spells. The drider is a 7th-level spellcaster. Its spellcasting ability is WIS(spell save DC 14, +6 to hit with spell attacks)."
			},
			{
				"name": "fey ancestry",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "wis",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["dancing lights"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["darkness","faerie fire"],
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "spider climb",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>"
			},
			{
				"name": "sunlight sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in sunlight, the drider has disadvantage on attack rolls, as well as on WIS (Perception) checks that rely on sight.</p>"
			},
			{
				"name": "web walker",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The drider ignores movement restrictions caused by webbing.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "2",
						"rolls": "1",
						"die": "4",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "9",
						"rolls": "2",
						"die": "8",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "longsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "one",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "8",
						"mod": "3",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "melee",
						"handed": "two",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "10",
						"mod": "3",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "longbow",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "120/600",
						"default": "7",
						"rolls": "1",
						"die": "8",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "4",
						"rolls": "1",
						"die": "8",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "drow",
		"pro": "",
		"src": "",
		"desc": "<p><strong>Arms and Armor.</strong> Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.</p><p><strong>Poison Predilection.</strong> Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies unconscious. Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.</p>",
		"size": "medium",
		"type": "humanoid",
		"class": "drow",
		"tag": "elf",
		"alignment": "neutral evil",
		"ac": "15",
		"armor": ["chain shirt"],
		"hp": {
			"default": "13",
			"rolls": "3",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "10",
		"dex": "14",
		"con": "10",
		"int": "11",
		"wis": "11",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "12",
		"languages": {
			"speaks": ["elvish","undercommon"],
			"understands": [""]
		},
		"challengeRating": ".25",
		"traits": [
			{
				"name": "drow magic armor and weapons - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.</p><p>A drow wearing a +7 chain shirt and carrying a +7 shortsword has AC 19 and a +1 bonus on attack and damage rolls with shortsword attacks.</p>"
			},
			{
				"name": "fey ancestry",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["dancing lights"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["darkness","faerie fire","levitate (self)"]
					}
				],
				"desc": "<p>The drow's spellcasting ability is CHA (spell save DC 11). It requires no material components to innately cast these spells.</p>"
			},
			{
				"name": "sunlight sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in sunlight, the drow has disadvantage on attack rolls, as well as on WIS (Perception) checks that rely on sight.</p>"
			}
		],
		"actions": [
			{
				"name": "shortsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "hand crossbow",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "13",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/120",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 13 CON saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "drow elite warrior",
		"pro": "",
		"src": "",
		"desc": "<p>Drow elite warriors defend their houses and their superiors against all enemies, although they specialize in fighting dwarves, gnomes, and elves (including other drow). They frequently raid surface settlements under cover of night, returning to the Underdark with prisoners and spoils in tow before dawn.</p><p>Elite warriors can be male or female.</p>",
		"size": "medium",
		"type": "humanoid",
		"class": "",
		"tag": "elf",
		"alignment": "neutral evil",
		"ac": "18",
		"armor": ["studded leather","shield"],
		"hp": {
			"default": "71",
			"rolls": "11",
			"die": "8",
			"mod": "22"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "13",
		"dex": "18",
		"con": "14",
		"int": "11",
		"wis": "13",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "con",
				"mod": "5"
			},
			{
				"attribute": "wis",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "10"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["elvish","undercommon"],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "drow magic armor and weapons - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.</p><p>A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.</p>"
			},
			{
				"name": "fey ancestry",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["dancing lights"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["darkness","faerie fire","levitate (self)"]
					}
				],
				"desc": "<p>The drow's spellcasting ability is CHA (spell save DC 11). It requires no material components to innately cast these spells.</p>"
			},
			{
				"name": "sunlight sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in sunlight, the drow has disadvantage on attack rolls, as well as on WIS (Perception) checks that rely on sight.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The drow makes two shortsword attacks.</p>"
			},
			{
				"name": "shortsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "7",
						"rolls": "1",
						"die": "6",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "hand crossbow",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "13",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/120",
						"default": "7",
						"rolls": "1",
						"die": "6",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 13 CON saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.</p>"
			}
		],
		"reactions": [
			{
				"name": "parry",
				"desc": "<p>The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon.</p> "
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "drow mage",
		"pro": "",
		"src": "",
		"desc": "<p>Privileged drow males who lack the strength and fighting prowess to train as warriors have no recourse but to pursue the study of magic. For them, it is a matter of survival. Female drow with a natural affinity for the arcane arts may also become drow mages, although they are much less common.</p>",
		"size": "medium",
		"type": "humanoid",
		"class": "",
		"tag": "elf",
		"alignment": "neutral evil",
		"ac": "12",
		"armor": [""],
		"hp": {
			"default": "45",
			"rolls": "10",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "9",
		"dex": "14",
		"con": "10",
		"int": "17",
		"wis": "13",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "arcana",
				"mod": "6"
			},
			{
				"name": "deception",
				"mod": "5"
			},
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["elvish","undercommon"],
			"understands": [""]
		},
		"challengeRating": "7",
		"traits": [
			{
				"name": "fey ancestry",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["dancing lights"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["darkness","faerie fire","levitate (self)"]
					}
				],
				"desc": "<p>The drow's spellcasting ability is CHA (spell save DC 11). It requires no material components to innately cast these spells.</p>"
			},
			{
				"name": "spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "6",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "int",
				"dc": "14",
				"spell": [
					{
						"level": "0",
						"rate": "at will",
						"span": "",
						"titles": ["mage hand","minor illusion","poison spray","ray of frost"],
						"notes": ""
					},
					{
						"level": "1",
						"rate": "4",
						"span": "",
						"titles": ["mage armor","magic missile","shield","witch bolt"],
						"notes": ""
					},
					{
						"level": "2",
						"rate": "3",
						"span": "",
						"titles": ["alter self","misty step","web"],
						"notes": ""
					},
					{
						"level": "3",
						"rate": "3",
						"span": "",
						"titles": ["fly","lightning bolt"],
						"notes": ""
					},
					{
						"level": "4",
						"rate": "3",
						"span": "",
						"titles": ["evard's black tentacles","greater invisibility"]
					},
					{
						"level": "5",
						"rate": "2",
						"span": "",
						"titles": ["cloudkill"],
						"notes": ""
					}
				],
				"desc": "<p>The drow is a lOth-level spellcaster. Its spellcasting ability is INT(spell save DC 14, +6 to hit with spell attacks).</p>"
			},
			{
				"name": "sunlight sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in sunlight, the drow has disadvantage on attack rolls, as well as on WIS (Perception) checks that rely on sight.</p>"
			}
		],
		"actions": [
			{
				"name": "staff",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "2",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "2",
						"rolls": "1",
						"die": "6",
						"mod": "-1",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "melee",
						"handed": "2",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "8",
						"mod": "-1",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "summon demon",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The drow magically summons a quasit, or attempts to summon a shadow demon with a 50 percent chance of success. The summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "drow priestess of lolth",
		"pro": "",
		"src": "",
		"desc": "<p>Female drow with blood ties to a noble house are molded and trained from birth to become priestesses of Lolth. The Spider Queen doesn't allow male drow to hold such positions.</p><p>Such priestesses execute the will of the Spider Queen, and as a result, they wield tremendous power and influence in drow society. The matron mothers who rule the drow houses are the most powerful of Lolth's priestesses, but they must constantly balance their devotion to the Spider Queen with their devotion to their families.</p>",
		"size": "medium",
		"type": "humanoid",
		"class": "",
		"tag": "elf",
		"alignment": "neutral evil",
		"ac": "16",
		"armor": ["scale mail"],
		"hp": {
			"default": "71",
			"rolls": "13",
			"die": "8",
			"mod": "13"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "10",
		"dex": "14",
		"con": "12",
		"int": "13",
		"wis": "17",
		"chr": "18",
		"savingThrows": [
			{
				"attribute": "con",
				"mod": "4"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "7"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "6"
			},
			{
				"name": "perception",
				"mod": "6"
			},
			{
				"name": "religion",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "16",
		"languages": {
			"speaks": ["elvish","undercommon"],
			"understands": [""]
		},
		"challengeRating": "8",
		"traits": [
			{
				"name": "drow magic armor and weapons - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.</p><p>A drow priestess of Lolth wearing +3 scale mail has AC 19.</p>"
			},
			{
				"name": "fey ancestry",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["dancing lights"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["darkness","faerie fire","levitate (self)"]
					}
				],
				"desc": "<p>The drow's spellcasting ability is CHA (spell save DC 11). It requires no material components to innately cast these spells.</p>"
			},
			{
				"name": "spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "6",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "wis",
				"dc": "14",
				"spell": [
					{
						"level": "0",
						"rate": "at will",
						"span": "",
						"titles": ["guidance, poison spray, resistance, spare the dying, thaumaturgy"],
						"notes": ""
					},
					{
						"level": "1",
						"rate": "4",
						"span": "",
						"titles": ["animal friendship","cure wounds","detect poison and disease","ray of sickness"],
						"notes": ""
					},
					{
						"level": "2",
						"rate": "3",
						"span": "",
						"titles": ["lesser restoration","protection from poison","web"],
						"notes": ""
					},
					{
						"level": "3",
						"rate": "3",
						"span": "",
						"titles": ["conjure animals (2 giant spiders)","dispel magic"]
					},
					{
						"level": "4",
						"rate": "3",
						"span": "",
						"titles": ["divination","freedom of movement"],
						"notes": ""
					},
					{
						"level": "5",
						"rate": "2",
						"span": "",
						"titles": ["insect plague","mass cure wounds"],
						"notes": ""
					}
				],
				"desc": "<p>The drow is a lOth-level spellcaster. Her spellcasting ability is WIS(save DC 14, +6 to hit with spell attacks).</p><p>The conjure animals conjures 2 giant spiders.</p>"
			},
			{
				"name": "sunlight sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in sunlight, the drow has disadvantage on attack rolls, as well as on WIS (Perception) checks that rely on sight.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The drow makes two scourge attacks.</p>"
			},
			{
				"name": "scourge",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"mod": "2",
						"damageType": "slashing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "17",
						"rolls": "5",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "summon demon",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The drow attempts to magically summon a yochlol with a 30% chance of success. If the attempt fails, the drow takes 5(1d1O) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, until its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "dryad",
		"pro": "",
		"src": "",
		"desc": "<p>Travelers entering a forest might catch a glimpse of a feminine form flitting through the trees. Warm laughter hangs on the air, drawing those who hear it deeper into the emerald shadows.</p><p><strong>Treebound.</strong> Powerful fey will sometimes bind lesser fey spirits to trees, transforming them into dryads. This is sometimes done as a punishment when the fey spirit falls in love with a mortal and that love is forbidden.</p><p>A dryad can emerge from the tree and travel the lands around it, but the tree remains her home and roots her to the world. As long as the tree remains healthy and unharmed, the dryad stays forever youthful and alluring. If the tree is harmed, she suffers. If the tree is ever destroyed, the dryad descends into madness.</p><p><strong>Reclusive Fey.</strong> Dryads act as guardians of their woodland demesnes. Shy and reclusive, they watch interlopers from the trees. A dryad struck by the beauty of a stranger might investigate more closely, perhaps even try to lure the individual away to be charmed.</p><p>Dryads work with other sylvan creatures to defend their forests. Unicorns, treants, and satyrs live alongside them, in addition to druids that share the dryads' devotion to the woods they call home.</p><p><strong>Woodland Magic.</strong> Dryads can speak with plants and animals. They can teleport from one tree to another, luring interlopers away from their groves. If pressed, a dryad can beguile humanoids with her enchantments, turning enemies into friends. They also know a handful of useful spells.</p>",
		"size": "medium",
		"type": "fey",
		"class": "",
		"tag": "",
		"alignment": "neutral neutral",
		"ac": "11",
		"armor": [""],
		"hp": {
			"default": "22",
			"rolls": "5",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "10",
		"dex": "12",
		"con": "11",
		"int": "14",
		"wis": "15",
		"chr": "18",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["elvish","sylvan"],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["druidcraft"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["entangle","goodberry"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "3",
						"span": "day",
						"titles": ["barkskin","pass without trace","shillelagh"],
						"notes": ""
					}
				],
				"desc": "<p>The dryad's innate spellcasting ability is CHA(spell save DC 14). The dryad can innately cast the spells, requiring no material components.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dryad has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "speak with beasts and plants",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dryad can communicate with beasts and plants as if they shared a language.</p>"
			},
			{
				"name": "tree stride",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Once on her turn, the dryad can use 10ft of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60ft of the first tree, appearing in an unoccupied space within 5ft of the second tree. Both trees must be large or bigger.</p>"
			}
		],
		"actions": [
			{
				"name": "club",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "2",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "2",
						"rolls": "1",
						"die": "4",
						"mod": "",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "8",
						"rolls": "1",
						"die": "8",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": "shillelagh"
					}
				],
				"desc": ""
			},
			{
				"name": "fey charm",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dryad targets one humanoid or beast that she can see within 30ft of her. If the target can see the dryad, it must succeed on a DC 14 WIS saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.</p><p>Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.</p><p>The dryad can have no more than one humanoid and up to three beasts charmed at a time.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "duergar",
		"pro": "",
		"src": "",
		"desc": "<p>The tyrannical duergar, also known as gray dwarves, dwell in fantastic cities deep in the Underdark. Using ancient dwarven knowledge and myriad slaves, they work tirelessly to expand their subterranean kingdoms.</p><p>Most duergar (including females) are bald and have ashen gray skin. They wear drab clothing designed to blend in with stone, along with simple jewelry that reflects their severe and utilitarian demeanor.</p><p><strong>Slaves to Slavers.</strong> The duergar were once dwarves, before their greed and endless delving beneath the earth brought them into contact with the mind flayers. Held in captivity for generations by the illithids, the dwarves eventually won their independence with the aid of the evil god Laduguer. Slavery had forever changed them, however, darkening their spirits to make the duergar as evil as the tyrants they had escaped. Despite winning their freedom, duergar are dour, pessimistic, untrusting creatures, always toiling and complaining, with no memory of what it means to be happy or proud. Their craftsmanship and accomplishments endure, yet they are bereft of warmth or artistry.</p><p>Duergar make war against their dwarven kin and all other subterranean races. They forge alliances when it is convenient, then break those alliances when they have nothing more to gain. They take and hold slaves to toil in the Underdark, regarding them as free labor and crude currency.</p><p><strong>Tough as Stone.</strong> Like dwarves, duergar have strong constitutions. Adding to their physical stamina is an incredible mental fortitude resulting from their time as slaves of the illithids. A duergar's mind is a fortress, able to shrug off charms, illusions, and other spells.</p><p><strong>Born of Darkness.</strong> The Underdark is saturated with strange magical power, which the duergar absorbed over generations of imprisonment. A duergar can increase its size and strength for a short time, becoming a powerful ogre-sized warrior. If it faces a foe it can't fight, or when spying on creatures approaching its territory, it can just as easily become invisible to slip away into the darkness.</p><p>Eons spent in the Underdark also sharpened their darkvision, allowing them to see twice as far as other dwarves. This keen eyesight comes at a cost, however, as a duergar's vision is compromised by sunlight.</p><p><strong>Infernal Master.</strong> Asmodeus, Lord of the Nine Hells, has been known to impersonate duergar gods in order to cultivate the evil brimming in the hearts of the gray dwarves. He offers them divine guidance and vengeance against their enemies while urging them on toward greater acts of tyranny, all the while concealing his true identity.</p> ",
		"size": "medium",
		"type": "humanoid",
		"class": "",
		"tag": "dwarf",
		"alignment": "lawful evil",
		"ac": "16",
		"armor": ["scale","shield"],
		"hp": {
			"default": "26",
			"rolls": "4",
			"die": "8",
			"mod": "8"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "25",
				"notes": ""
			}
		],
		"str": "14",
		"dex": "11",
		"con": "14",
		"int": "11",
		"wis": "10",
		"chr": "9",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["dwarvish","undercommon"],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "duergar resilience",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed.</p>"
			},
			{
				"name": "sunlight sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in sunlight, the duergar has disadvantage on attack rolls, as well as on WIS (Perception) checks that rely on sight.</p>"
			}
		],
		"actions": [
			{
				"name": "enlarge",
				"perDay": "",
				"recharge": "short",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on STR-based weapon attacks (included in the attacks), and makes STR checks and STR saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.</p>"
			},
			{
				"name": "war pick",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "8",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "8",
						"mod": "2",
						"damageType": "piercing",
						"notes": "enlarged"
					}
				],
				"desc": ""
			},
			{
				"name": "javelin",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "8",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "2",
						"die": "6",
						"mod": "2",
						"damageType": "piercing",
						"notes": "enlarged"
					},
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/120",
						"default": "6",
						"rolls": "1",
						"die": "8",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/120",
						"default": "9",
						"rolls": "2",
						"die": "6",
						"mod": "2",
						"damageType": "piercing",
						"notes": "enlarged"
					}
				],
				"desc": ""
			},
			{
				"name": "invisibility",
				"perDay": "",
				"recharge": "short",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "elemental, air",
		"pro": "",
		"src": "",
		"desc": "<p>An air elemental is a funneling cloud of whirling air with a vague semblance of a face. Although it likes to race across the ground, picking up dust and debris as it goes, it can also fly and attack from above.</p><p>An air elemental can turn itself into a screaming cyclone, creating a whirlwind that batters creatures even as it flings them away.</p>",
		"size": "large",
		"type": "elemental",
		"class": "elementals",
		"tag": "",
		"alignment": "neutral neutral",
		"ac": "15",
		"armor": [""],
		"hp": {
			"default": "90",
			"rolls": "12",
			"die": "10",
			"mod": "24"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "90",
				"notes": "hover"
			},
			{
				"type": "walk",
				"distance": "0",
				"notes": ""
			
		],
		"str": "14",
		"dex": "20",
		"con": "14",
		"int": "6",
		"wis": "10",
		"chr": "6",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["lightning","thunder","bludgeoning","piercing","slashing","nonmagical"],
		"damageImm": ["poison"],
		"conditionImm": ["exhaustion","grappled","paralyzed","petrified","poisoned","prone","restrained","unconscious"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["auran"],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "air form",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1in wide without squeezing.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The elemental makes two slam attacks.</p>"
			},
			{
				"name": "slam",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "2",
						"die": "8",
						"mod": "5",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "whirlwind",
				"perDay": "",
				"recharge": "4-6",
				"ability": "str",
				"dc": "13",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "0",
						"default": "15",
						"rolls": "3",
						"die": "8",
						"mod": "2",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "bludgeoning",
						"notes": "on saving thro failure"
					}
				],
				"desc": "<p>Each creature in the elemental's space must make a DC 13 STR saving throw. On a failure, a target takes 15(3d8+2) bludgeoning damage and is flung up 20ft away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3(1d6) bludgeoning damage for every 10ft it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 DEX saving throw or take the same damage and be knocked prone.</p><p>If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "elemental, earth",
		"pro": "",
		"src": "",
		"desc": "<p>An earth elemental plods forward like a walking hill, club-like arms of jagged stone swinging at its sides. Its head and body consist of dirt and stone, occasionally set with chunks of metal, gems, and bright minerals.</p><p>Earth elementals glide through rock and earth as though they were liquid. Earthbound creatures have much to fear from an earth elemental, since the elemental can pinpoint the precise location of any foe that stands on solid ground in its vicinity.</p>",
		"size": "large",
		"type": "elemental",
		"class": "elementals",
		"tag": "",
		"alignment": "neutral neutral",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "126",
			"rolls": "12",
			"die": "10",
			"mod": "60"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "20",
		"dex": "8",
		"con": "20",
		"int": "5",
		"wis": "10",
		"chr": "5",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": ["thunder"],
		"damageRes": ["bludgeoning","piercing","slashing","nonmagical"],
		"damageImm": ["poison"],
		"conditionImm": ["exhaustion","paralyzed","petrified","poisoned","unconscious"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "10",
		"languages": {
			"speaks": ["terran"],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "earth glide",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.</p>"
			},
			{
				"name": "seige monster",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The elemental deals double damage to objects and structures.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The elemental makes two slam attacks.</p>"
			},
			{
				"name": "slam",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "14",
						"rolls": "2",
						"die": "8",
						"mod": "5",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "elemental, fire",
		"pro": "",
		"src": "",
		"desc": "<p>A faint humanoid shape threads through the core of this wild, moving flame. A fire elemental is a force of capricious devastation. Wherever it moves, it sets its surroundings ablaze, turning the world to ash, smoke, and cinders. Water can halt its destructive progress, causing the fire elemental to shrink back, hissing and smoking in pain and rage.</p>",
		"size": "large",
		"type": "elemental",
		"class": "elementals",
		"tag": "",
		"alignment": "neutral neutral",
		"ac": "13",
		"armor": [""],
		"hp": {
			"default": "102",
			"rolls": "12",
			"die": "10",
			"mod": "36"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "50",
				"notes": ""
			}
		],
		"str": "10",
		"dex": "17",
		"con": "16",
		"int": "6",
		"wis": "10",
		"chr": "7",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["bludgeoning","piercing","slashing","nonmagical"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["exhaustion","grappled","paralyzed","petrified","poisoned","prone","restrained","unconscious"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["ignan"],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "fire form",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "5",
				"rolls": "1",
				"die": "10",
				"mod": "",
				"type": "fire",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The elemental can move through a space as narrow as 1in wide without squeezing. A creature that touches the elemental or hits it with a melee attack while with in 5ft of it takes 5(1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5(1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5(1d10) fire damage at the start of each of its turns.</p>"
			},
			{
				"name": "illumination",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The elemental sheds bright light in a 30ft radius and dim light in an additional 30ft.</p>"
			},
			{
				"name": "water susceptibility",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>For every 5ft the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The elemental makes two touch attacks.</p>"
			},
			{
				"name": "touch",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"mod": "3",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5(1d10) fire damage at the start of each of its turns.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "elemental, water",
		"pro": "",
		"src": "",
		"desc": "<p>A water elemental is a cresting wave that rolls across the ground, becoming nearly invisible at it courses through a larger body of water. It engulfs creatures that stand against it, filling their mouths and lungs as easily as it smothers flame.</p>",
		"size": "large",
		"type": "elemental",
		"class": "elementals",
		"tag": "",
		"alignment": "neutral neutral",
		"ac": "14",
		"armor": ["natural"],
		"hp": {
			"default": "114",
			"rolls": "12",
			"die": "10",
			"mod": "48"
		},
		"speed": [
			{
				"type": "swim",
				"distance": "90",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "18",
		"dex": "14",
		"con": "18",
		"int": "5",
		"wis": "10",
		"chr": "8",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["acid","bludgeoning","piercing","slashing","nonmagical"],
		"damageImm": ["poison"],
		"conditionImm": ["exhaustion","grappled","paralyzed","petrified","poisoned","prone","restrained","unconscious"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["aquan"],
			"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "water form",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1in wide without squeezing.</p>"
			},
			{
				"name": "freeze",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the elemental takes cold damage, it partially freezes; its speed is reduced by 20ft until the end of its next turn.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The elemental makes two slam attacks.</p>"
			},
			{
				"name": "slam",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "8",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "whelm",
				"perDay": "",
				"recharge": "4-6",
				"ability": "str",
				"dc": "15",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "13",
						"rolls": "2",
						"die": "8",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>Each creature in the elemental's space must make a DC 15 STR saving throw. On a failure, a target takes 13(2d8+4) bludgeoning damage . If it is Large or smaller, it is also grappled (DC 14 STR/DEX). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.</p><p>The elemental can grapple one Large creature or up to two medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13(2d8+4) bludgeoning damage. A creature within 5ft of the elemental can pull a creature or object out of it by taking an action to make a DC 14 STR and succeeding.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "empyrean",
		"pro": "",
		"src": "",
		"desc": "<p>Empyreans are the celestial children of the gods of the Upper Planes. They are universally beautiful, statuesque, and self-assured.</p><p><strong>Manifest Emotion.</strong> An empyrean can experience deity-like fits of serenity or rage. It can affect the environment around it by its mood. When an empyrean is unhappy, the clouds might cry tears of salt water, the wildflowers in surrounding meadows might wilt, dead fish might wash ashore in lakes or rivers, or a nearby forest might lose the leaves from its trees. When an empyrean is jubilant, sunlight follows it everywhere, small animals frolic in its footsteps, and birds fill the sky with their pleasing songs.</p><p><strong>Evil Empyreans.</strong> A few empyreans have turned to evil after venturing to the Lower Planes and becoming corrupted, or as the result of being cursed by evil gods. An evil empyrean can't survive long on the Upper Planes and usually retreats to the Material Plane, where it can rule over a kingdom of mortals as an indomitable tyrant.</p><p><strong>Immortal Titans.</strong> Empyreans don't age but can be slain. Because few empyreans can imagine their own demise, they fight fearlessly when drawn into battle, refusing to believe that the end is upon them even when standing at death's door. When an empyrean dies, its spirit returns to its home plane. There, one of the fallen empyrean's parents resurrects the empyrean unless he or she has a good reason not to.</p>",
		"size": "huge",
		"type": "celestial",
		"class": "",
		"tag": "titan",
		"alignment": "chaotic good (75%) or neutral evil (25%)",
		"ac": "22",
		"armor": ["natural"],
		"hp": {
			"default": "313",
			"rolls": "19",
			"die": "12",
			"mod": "190"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "50",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "50",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "50",
				"notes": ""
			}
		],
		"str": "30",
		"dex": "21",
		"con": "30",
		"int": "21",
		"wis": "22",
		"chr": "27",
		"savingThrows": [
			{
				"attribute": "str",
				"mod": "17"
			},
			{
				"attribute": "int",
				"mod": "12"
			},
			{
				"attribute": "wis",
				"mod": "13"
			},
			{
				"attribute": "cha",
				"mod": "15"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "13"
			},
			{
				"name": "persuasion",
				"mod": "16"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["bludgeoning","piercing","slashing","nonmagical"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "16",
		"languages": {
			"speaks": ["all"],
			"understands": [""]
		},
		"challengeRating": "23",
		"traits": [
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "15",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "23",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["greater restoration","pass without trace","water breathing","water walk"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["commune","dispel evil and good","earthquake","fire storm","plane shift"],
						"notes": ""
					}
				],
				"desc": "<p>The empyrean's innate spellcasting ability is CHA(spell save DC 23, +15 to hit with spell attacks). It requires no material components to innately cast these spells.</p><p>The empyrean can only plane shift itself.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the empyrean fails a saving throw, it can choose to succeed instead.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The empyrean has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "magic weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The empyrean's weapon attacks are magical.</p>"
			}
		],
		"actions": [
			{
				"name": "maul",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "15",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "31",
						"rolls": "6",
						"die": "6",
						"mod": "10",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a creature, it must succeed on a DC 15 CON saving throw or be stunned until the end of the empyrean's next turn.</p>"
			},
			{
				"name": "bolt",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged spell",
						"handed": "",
						"reach": "600",
						"default": "24",
						"rolls": "7",
						"die": "6",
						"mod": "",
						"damageType": "variable",
						"notes": ""
					}
				],
				"desc": "<p>Damage type is one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "attack",
				"desc": "<p>The empyrean makes one attack.</p>"
			},
			{
				"name": "bolster",
				"desc": "<p>The empyrean bolsters all non hostile creatures within 120ft of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn.</p>"
			},
			{
				"name": "trembling strike (costs 2 actions)",
				"desc": "<p>The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60ft of the empyrean must succeed on a DC 25 STR saving throw or be knocked prone.</p>"
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "erinyes",
		"pro": "",
		"src": "",
		"desc": "<p>The most beautiful and striking of all lesser and greater devils, the erinyes are fierce and disciplined warriors. Sweeping down from the skies, they bring swift death to creatures that have wronged their masters or defied the edicts of Asmodeus. The erinyes appear as male or female humanoids with statuesque builds and large feathery wings. Most wear stylized armor and horned helms, and carry exquisite swords and bows. A few also use ropes of entanglement to ensnare powerful foes.</p><p>Legends tell that the first erinyes were angels that fell from the Upper Planes because of temptation or misdeed. Erinyes are always willing to take advantage of being mistaken for celestials in their missions of conquest and corruption.</p>",
		"size": "medium",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "18",
		"armor": ["plate"],
		"hp": {
			"default": "153",
			"rolls": "18",
			"die": "8",
			"mod": "72"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "18",
		"dex": "16",
		"con": "18",
		"int": "14",
		"wis": "14",
		"chr": "18",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "con",
				"mod": "8"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "12",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "12",
		"traits": [
			{
				"name": "hellish weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "13",
				"rolls": "3",
				"die": "8",
				"mod": "",
				"type": "poison",
				"ability": "con",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The erinyes's weapon attacks are magical and deal an extra 13(3d8) poison damage on a hit and the target must succeed on a DC 14 CON saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The erinyes has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The erinyes makes three attacks. Some erinyes carry a rope of entanglement (variant). When such an erinyes uses its multiattack, the erinyes can use the rope in place of two of the attacks.</p>"
			},
			{
				"name": "longsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5ft",
						"default": "8",
						"rolls": "1",
						"die": "8",
						"mod": "4",
						"type": "slashing"
					},
					{
						"type": "melee",
						"handed": "2",
						"reach": "5ft",
						"default": "9",
						"rolls": "1",
						"die": "10",
						"mod": "4",
						"type": "slashing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "13",
						"rolls": "3",
						"die": "8",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "longbow",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "2",
						"reach": "150/600ft",
						"default": "7",
						"rolls": "1",
						"die": "8",
						"mod": "3",
						"type": "piercing"
					},
					}
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "13",
						"rolls": "3",
						"die": "8",
						"mod": "",
						"type": "poison"
					}
				],
				"desc": ""
			},
			{
				"name": "summon devil - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>An erinyes has a 50% chance of summoning 3d6 spined devils, 1d6 bearded devils, or one erinyes. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "parry",
				"desc": "<p>The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.</p>"
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "ettercap",
		"pro": "",
		"src": "",
		"desc": "<p>Ettercaps are humanoid spiders that tend, feed, and watch over spiders the way a shepherd oversees a flock of sheep. They lair deep in remote forests.</p><p>Fine strands of silk stream from glands in an ettercap's abdomen, letting it shoot sticky strands of webbing to bind, entrap, or strangle its victims. It can also use its webbing to fashion elaborate snares and nets, which often festoon its lair.</p><p><strong>Quiet Killers.</strong> When travelers and explorers venture into an ettercap's territory, the ettercap stalks them. Some meet their end wandering blindly into traps or sections of forest enclosed by webs. Others, the ettercap garrotes with strands of web or envenoms with its poisonous bite.</p><p><strong>Sylvan Despoilers.</strong> Though they dwell in the wilds, ettercaps have no desire to live in harmony with nature. A forest infested with ettercaps transforms into a gloomy place, choked with webs and infested with giant spiders, giant insects, and other sinister predators. Creatures that wander too far into such a wood are soon lost in a maze of webs that dangle with the bones and lost treasures of the ettercaps' victims.</p><p><strong>Enemies of the Fey.</strong> Ettercaps are natural enemies of fey creatures. The foul creatures set web snares to catch sprites and pixies, which they hungrily devour, and will encase a dryad's tree in webbing in a vain attempt to trap the dryad. Otherwise timid fey will sometimes approach outsiders for help in dealing with an ettercap infestation, being ill-equipped to deal with the malevolent creatures themselves.</p>",
		"size": "medium",
		"type": "monstrosity",
		"class": "",
		"tag": "",
		"alignment": "neutral evil",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "44",
			"rolls": "8",
			"die": "8",
			"mod": "8"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "14",
		"dex": "15",
		"con": "13",
		"int": "7",
		"wis": "12",
		"chr": "8",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "3"
			},
			{
				"name": "stealth",
				"mod": "4"
			},
			{
				"name": "survival",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "spider climb",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>"
			},
			{
				"name": "web sense",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web.</p>"
			},
			{
				"name": "web walker",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The ettercap ignores movement restrictions caused by webbing.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The ettercap makes two attacks: one with its bite and one with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "11",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "1",
						"die": "8",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "4",
						"rolls": "1",
						"die": "8",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 11 CON saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "claws",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "2",
						"die": "4",
						"mod": "2",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "web",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "11",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/60",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The Large or smaller creature is restrained by webbing. As an action, the restrained creature can make a DC 11 STR check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5HP, resistance to bludgeoning damage, and immunity to poison and psychic damage.</p>"
			},
			{
				"name": "web garrote - variant",
				"perDay": "",
				"recharge": "",
				"ability": "str/dex",
				"dc": "12",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "4",
						"rolls": "1",
						"die": "4",
						"mod": "2",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>The ettercap garrotes one Medium or Small creature against which the ettercap has advantage on the attack roll. The target is grappled (escape DC 12). Until this grapple ends, the target can't breathe, and the ettercap has advantage on attack rolls against it.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "ettin",
		"pro": "",
		"src": "",
		"desc": "<p>An ettin is a foul, two-headed giant with the crude characteristics of an orc. It never bathes if it can help it, and its thick skin is usually encrusted with a thick layer of dirt and grime beneath the stinking hides it wears. Its long stringy hair hangs in an unkempt mess about its faces, and its breath reeks from mouths filled with crooked teeth and tusks.</p><p><strong>Dual Personality.</strong> The twin heads of an ettin are two individuals trapped in the same brutish body. Each head has its own mind, personality, and name, and possesses unique preferences and quirks. Bound from birth, both minds only rarely experience privacy or solitude. This familiarity breeds contempt, and an ettin bullies and argues with itself constantly, its two heads each taking constant offense at the other's slights.</p><p>When other creatures refer to an ettin, they combine its double names to form a single compound name that applies to the creature as a whole. If an ettin has one head named Hargle and another named Vargle, other creatures call the ettin Harglevargle.</p><p><strong>Solitary Lives.</strong> As much as an ettin argues with itself, it is even less tolerant of other ettins, since a conversation between two ettins almost always amounts to a shouting match between a crowd of four belligerent heads. Most ettins are solitary creatures as a result, tolerating one another only to reproduce.</p><p>An ettin's twin heads are always the same gender, with a body to match.</p><p>Females are the dominant gender among ettins, and they initiate the ettins' mating rituals. After finding a suitable den, a female ettin hunts and conquers a male, which cares for and feeds her during her sixmonth pregnancy. Once the child is born, the male ettin is released from servitude. When the child is old enough to hunt for itself, the mother sends it away and abandons the den.</p><p><strong>Two Heads are Better than One.</strong> When focused on a mutually beneficial purpose or united by a common threat, an ettin can resolve its personality differences and dedicate itself fully to a task. An ettin fights with a weapon in each hand, making twin attacks directed by its respective heads. When an ettin sleeps, one of its heads remains ever alert, gaining its only moments of privacy and keeping two eyes open for any creature that disturbs its precious solitude.</p><p><strong>Orcish Ties.</strong> In ancient dialects of Common, the word \"ettin\" translates as \"ugly giant.\" Legends tell of orcs that once stumbled upon a temple to Demogorgon, the magic of which transformed them into giant mockeries of the twin-headed Prince of Demons. Driven to near madness, these creatures scattered into the wilderness to become the first ettins.</p><p>Whatever the truth of the ettins' origin, orcs treat them as distant cousins, and orc tribes often entice ettins to serve as guards, scouts, and marauders. An ettin isn't particularly loyal to its orc handlers, but the orcs can win it over with the promise of food and loot.</p> ",
		"size": "large",
		"type": "giant",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "12",
		"armor": ["natural"],
		"hp": {
			"default": "85",
			"rolls": "10",
			"die": "10",
			"mod": "30"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "21",
		"dex": "8",
		"con": "17",
		"int": "6",
		"wis": "10",
		"chr": "8",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["giant","orc"],
			"understands": [""]
		},
		"challengeRating": "4",
		"traits": [
			{
				"name": "two heads",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The ettin has advantage on WIS(Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.</p>"
			},
			{
				"name": "wakeful",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>When one of the ettin's heads is asleep, its other head is awake.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The ettin makes two attacks: one with its battleaxe and one with its morningstar.</p>"
			},
			{
				"name": "battleaxe",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "2",
						"die": "8",
						"mod": "5",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "morningstar",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "2",
						"die": "8",
						"mod": "5",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "faerie dragon - red, orange or yellow",
		"src": "",
		"desc": "<p>A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.</p><p><strong>Invisible Tricksters.</strong> The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"</p><p><strong>Friendly and Bright.</strong> A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.</p><p><strong>The Colors of Age.</strong> A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.</p><table><thead><th>Dragon Color</th><th>Age Range</th></thead><tr><td>Red</td><td>5 years or less</td></tr><tr><td>Orange</td><td>6-10 years</td></tr><tr><td>Yellow</td><td>11-20 years</td></tr></table>",
		"size": "tiny",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "15",
		"armor": [""],
		"hp": {
			"default": "14",
			"rolls": "4",
			"die": "4",
			"mod": "4"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "10",
				"notes": ""
			}
		],
		"str": "3",
		"dex": "20",
		"con": "13",
		"int": "14",
		"wis": "12",
		"chr": "16",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "arcana",
				"mod": "4"
			},
			{
				"name": "perception",
				"mod": "3"
			},
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": ["draconic","sylvan"],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "superior invisibility",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.</p>"
			},
			{
				"name": "limited telepathy",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Using telepathy, the dragon can magically communicate with any other faerie dragon within 60ft of it.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["dancing lights","mage hand","minor illusion"],
						"notes": "red"
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["color spray"],
						"notes": "orange"
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["mirror image"],
						"notes": "yellow"
					}
				],
				"desc": "<p>The dragon's innate spellcasting ability is CHA(spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "5",
						"default": "1",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "euphoria breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "wis",
				"dc": "11",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales a puff of euphoria gas at one creature within 5ft of it. The target must succeed on a DC 11 WIS saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn: 1-4 - The target takes no action or bonus action and uses all of its movement to move in a random direction. 5-6 - The target doesn't move, and the only thing it can do on its turn is make a DC 11 WIS saving throw, ending the effect on itself on a success.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "faerie dragon - green, blue, indigo or violet",
		"src": "",
		"desc": "<p>A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.</p><p><strong>Invisible Tricksters.</strong> The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its \"prey.\"</p><p><strong>Friendly and Bright.</strong> A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it \"treasure\" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.</p><p><strong>The Colors of Age.</strong> A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.</p><table><thead><th>Dragon Color</th><th>Age Range</th></thead><tr><td>Green</td><td>21-30 years</td></tr><tr><td>Blue</td><td>31-40 years</td></tr><tr><td>Indigo</td><td>41-50 years</td></tr><tr><td>Violet</td><td>51 years or more</td></tr></table>",
		"size": "tiny",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic good",
		"ac": "15",
		"armor": [""],
		"hp": {
			"default": "14",
			"rolls": "4",
			"die": "4",
			"mod": "4"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "10",
				"notes": ""
			}
		],
		"str": "3",
		"dex": "20",
		"con": "13",
		"int": "14",
		"wis": "12",
		"chr": "16",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "arcana",
				"mod": "4"
			},
			{
				"name": "perception",
				"mod": "3"
			},
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": ["draconic","sylvan"],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "superior invisibility",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.</p>"
			},
			{
				"name": "limited telepathy",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Using telepathy, the dragon can magically communicate with any other faerie dragon within 60ft of it.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["suggestion"],
						"notes": "green"
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["major image"],
						"notes": "blue"
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["hallucinatory terrain"],
						"notes": "indigo"
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["polymorph"],
						"notes": "violet"
					}
				],
				"desc": "<p>The dragon's innate spellcasting ability is CHA(spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "5",
						"default": "1",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "euphoria breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "wis",
				"dc": "11",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales a puff of euphoria gas at one creature within 5ft of it. The target must succeed on a DC 11 WIS saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn: 1-4 - The target takes no action or bonus action and uses all of its movement to move in a random direction. 5-6 - The target doesn't move, and the only thing it can do on its turn is make a DC 11 WIS saving throw, ending the effect on itself on a success.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "flame skull",
		"pro": "",
		"src": "",
		"desc": "<p>Blazing green flames and mad, echoing laughter follow a disembodied skull as it patrols its demesne. When the undead flameskull discovers trespassers, it blasts the intruders with fiery rays from its eyes and dreadful spells called up from the dark recesses of its memory.</p><p>Dark spellcasters fashion flameskulls from the remains of dead wizards. When the ritual is complete, green flames erupt from the skull to complete its ghastly transformation.</p><p><strong>Legacy of Life.</strong> A flameskull only dimly recalls its former life. Though it might speak in its old voice and recount key events from its past, it is but an echo of its former self. However, its undead transformation grants it full access to the magic it wielded in life, letting it cast spells while ignoring the material and somatic components it can no longer employ.</p><p><strong>Eternally Bound.</strong> Intelligent and vigilant, a flameskull serves its creator by protecting a hidden treasure hoard, a secret chamber, or a specific individual. A flameskull carries out the directives given to it when it was created, and it interprets those commands to the letter. A flameskull's master must craft its instructions with care to ensure that the creature carries out its tasks properly.</p><p><strong>Wreathed in Flame.</strong> The fire wreathing a flameskull burns continually, giving off bright light that the creature controls. It uses those flames as a weapon, focusing them to loose them as fiery rays from its eye sockets.</p><p><strong>Eldritch Rejuvenation.</strong> A flameskull's shattered fragments reform unless they are splashed with holy water or subjected to a dispel magic or remove curse spell. If it can no longer fulfill its intended purpose, the re-formed flameskull is beholden to no one and becomes autonomous.</p><p><strong>Undead Nature.</strong> A flameskull doesn't require air, food, drink, or sleep.</p>",
		"size": "tiny",
		"type": "undead",
		"class": "",
		"tag": "",
		"alignment": "neutral evil",
		"ac": "13",
		"armor": [""],
		"hp": {
			"default": "40",
			"rolls": "9",
			"die": "4",
			"mod": "18"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "0",
				"notes": ""
			}
		],
		"str": "1",
		"dex": "17",
		"con": "14",
		"int": "16",
		"wis": "10",
		"chr": "11",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["lightning","necrotic","piercing"],
		"damageImm": ["cold","fire","poison"],
		"conditionImm": ["charmed","frightened","paralyzed","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "12",
		"languages": {
			"speaks": ["common"],
			"understands": [""]
		},
		"challengeRating": "4",
		"traits": [
			{
				"name": "illumination",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The flameskull sheds either dim light in a 15ft radius, or bright light in a 15ft-radius and dim light for an additional 15ft. It can switch between the options as an action.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "p>The flameskull has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "rejuvenation",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the flameskull is destroyed, it regains all its HP in 1 hour unless holy water is sprinkled on its remains or dispel magic or remove curse spell is cast on them.</p>"
			},
			{
				"name": "spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "5",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "int",
				"dc": "13",
				"spell": [
					{
						"level": "0",
						"rate": "at will",
						"span": "",
						"titles": ["mage hand"],
						"notes": ""
					},
					{
						"level": "1",
						"rate": "3",
						"span": "slots",
						"titles": ["magic missile","shield"],
						"notes": ""
					},
					{
						"level": "2",
						"rate": "2",
						"span": "slots",
						"titles": ["blur","flaming sphere"],
						"notes": ""
					},
					{
						"level": "3",
						"rate": "1",
						"span": "slots",
						"titles": ["fireball"],
						"notes": ""
					}
				],
				"desc": "<p>The flameskull is a 5th-level spell caster. Its spellcasting ability is INT(spell save DC 13, +5 to hit with spell attacks). It requires no somatic or material components to cast its spells.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The flameskull uses Fire Ray twice.</p>"
			},
			{
				"name": "fire ray",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "flumph",
		"pro": "",
		"src": "",
		"desc": "<p>The mysterious flumphs drift through the Underdark, propelled through the air by the jets whose sound gives them their name. A flumph glows faintly, reflecting its moods in its color. Soft pink means it is amused, deep blue is sadness, green expresses curiosity, and crimson is anger.</p><p><strong>Intelligent and Wise.</strong> Flumphs communicate telepathically. Though they resemble jellyfish, flumphs are sentient beings of great intelligence and wisdom, possessing advanced knowledge of religion, philosophy, mathematics, and countless other subjects.</p><p>Flumphs are sensitive to the emotional states of nearby creatures. If a creature's thoughts suggest goodness, a flumph seeks that creature out. When facing creatures that exude evil, a flumph flees.</p><p><strong>Psionic Siphons.</strong> Flumphs feed by siphoning mental energy from psionic creatures, and they can be found lurking near communities of mind flayers, aboleths, githyanki, and githzerai. As passive parasites, they take only the mental energy they need, and most creatures feel no loss or discomfort from such feeding.</p><p>Consuming psionic energy reveals the thoughts and emotions of the creatures on which the flumphs feed. Since so many of those creatures are evil, flumphs are often subjected to thoughts, emotions, and hungers that sicken their pure nature. When flumphs encounter goodhearted adventurers, they eagerly share the dark secrets they have learned in the hopes of casting down their evil sources of energy, even if doing so means they must seek out new sources of nourishment.</p><p><strong>Flumph Society.</strong> Flumphs live in complex and organized groups called cloisters, within which each flumph has a place and purpose. These harmonious groupings have no need for leaders, since all flumphs contribute in their own way.</p>",
		"size": "small",
		"type": "aberration",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "12",
		"armor": [""],
		"hp": {
			"default": "7",
			"rolls": "2",
			"die": "6",
			"mod": ""
		},
		"speed": [
			{
				"type": "fly",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "5",
				"notes": ""
			}
		],
		"str": "6",
		"dex": "15",
		"con": "10",
		"int": "14",
		"wis": "14",
		"chr": "11",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "arcana",
				"mod": "4"
			},
			{
				"name": "history",
				"mod": "4"
			},
			{
				"name": "religion",
				"mod": "4"
			}
		],
		"damageVuln": ["psychic"],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "12",
		"languages": {
			"speaks": ["telepathy 60ft"],
			"understands": ["undercommon"]
		},
		"challengeRating": ".125",
		"traits": [
			{
				"name": "advanced telepathy",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The flumph can perceive the content of any telepathic communication used within 60ft of it, and it can't be surprised by creatures with any form of Telepathy.</p>"
			},
			{
				"name": "prone deficiency",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the flumph is knocked prone, roll a die. On an odd result, the flumph lands upside-down and is incapacitated. At the end of each of its turns, the flumph can make a DC 10 DEX saving throw, righting itself and ending the incapacitated condition if it succeeds.</p>"
			},
			{
				"name": "telepathic shroud",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<div>The flumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells.</div>"
			}
		],
		"actions": [
			{
				"name": "tendrils",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "10",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "4",
						"rolls": "1",
						"die": "4",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "2",
						"rolls": "1",
						"die": "4",
						"mod": "",
						"damageType": "acid",
						"notes": ""
					}
				],
				"desc": "<p>At the end of each of its turns, the target must make a DC 10 CON saving throw, taking 2(1d4) acid damage on a failure or ending the recurring acid damage on a success. A lesser restoration spell cast on the target also ends the recurring acid damage.</p>"
			},
			{
				"name": "stench spray",
				"perDay": "1",
				"recharge": "",
				"ability": "dex",
				"dc": "10",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature in a 15ft cone originating from the flumph must succeed on a DC 10 DEX saving throw or be coated in a foul-smelling liquid. A coated creature exudes a horrible stench for 1d4 hours. The coated creature is poisoned as long as the stench lasts, and other creatures are poisoned while within 5ft of the coated creature. A creature can remove the stench on itself by using a short rest to bathe in water, alcohol, or vinegar.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "flying sword",
		"pro": "",
		"src": "",
		"desc": "<p>A flying sword dances through the air, fighting with the confidence of a warrior that can't be injured. Swords are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even selfloading crossbows are also known to exist in animated object form.</p>",
		"size": "small",
		"type": "construct",
		"class": "animated objects",
		"tag": "animated",
		"alignment": "unaligned",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "17",
			"rolls": "5",
			"die": "6",
			"mod": ""
		},
		"speed": [
			{
				"type": "fly",
				"distance": "50",
				"notes": ""
			}
		],
		"str": "12",
		"dex": "15",
		"con": "11",
		"int": "1",
		"wis": "3",
		"chr": "1",
		"savingThrows": [
			{
				"ability": "dex",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison","psychic"],
		"conditionImm": ["blinded","charmed","deafened","frightened","paralyzed","petrified","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": "",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "7",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": ".25",
		"traits": [
			{
				"name": "antimagic susceptibility",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The sword is incapacitated while in the area of an anti-magic field. if targeted by dispel magic, the sword must succeed on a CON saving throw against the caster's spell save DC or fall unconscious for 1 minute.</p>"
			},
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.</p>"
			}
		],
		"actions": [
			{
				"name": "longsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "8",
						"mod": "1",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "fomorian",
		"pro": "",
		"src": "",
		"desc": "<p>The most hideous and wicked of all giantkind are the godless fomorians, whose deformed bodies reflect their vile demeanors. Some have facial features randomly distributed around their misshapen, warty heads. Others have limbs of grossly different sizes and shapes, or emit terrible howls each time they draw breath through misshapen mouths. Their wretched appearance rarely evokes sympathy, however, for the fomorians brought their doom upon themselves with the evil that rules their hearts and minds.</p><p><strong>Fey Curse.</strong> The elves remember when the fomorians were among the most handsome of races, possessed of brilliant minds and unrivaled magical ability. That physical perfection did not extend to their hearts, however, as a lust for magic and power consumed them.</p><p>The fomorians sought to conquer the Feywild and enslave its inhabitants, claiming those creatures' magic for themselves. When the fey united to defend their realm, the fomorians fought them and were subjected to a terrible curse.</p><p>One by one, the giants fell as their bodies were warped to reflect the evil in their hearts. Stripped of their grace and magical power, the wretched horrors fled from the light, delving deep beneath the world to nurse their hatred. Cursing their fate, they have ever after plotted vengeance against the fey that wronged them.</p><p><strong></strong>>Giants of the Underdark.</srong> The fomorians dwell in eerily beautiful caverns in the Underdark, rarely venturing to the surface. Their lairs feature abundant access to water, fish, and mushroom forests, as well as to the creatures whose slave labor keeps the fomorians fed. When those slaves can no longer toil, they are slain and devoured. Wickedness and depravity are the cornerstones of fomorian society, in which the strongest and cruelest giants rule. Fomorians mark their territories with the corpses of their enemies, painting their cavern walls with blood or stitching together limbs and body parts to make mockeries of the creatures they have killed.</p><p><strong>Ruined Flesh, Evil Minds.</strong> The deformities visited on the fomorians prevent them from hurling rocks like their giant kin, or wearing anything more than scraps of cloth. However, the grotesque positioning of their eyes, noses, and ears gives fomorians keen perceptive abilities, making it hard to surprise or ambush them.</p><p>The greed and evil of the fomorians lies at the heart of their degeneration and fall, and continues to plague them. Fomorians make alliances with other creatures when it suits them, but they are disloyal by nature and betray their allies on a whim.</p><p><strong>Curse of the Evil Eye.</strong> Fomorians can pass their curse onto others using a power called the evil eye&mdash;a last vestige of the giants' once-remarkable spellcasting ability. A creature cursed by a fomorian's evil eye is magically twisted and deformed, gaining a glimpse into the pain and malice that has consumed this evil race.</p>",
		"size": "huge",
		"type": "giant",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "14",
		"armor": ["natural"],
		"hp": {
			"default": "149",
			"rolls": "13",
			"die": "12",
			"mod": "65"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "23",
		"dex": "10",
		"con": "20",
		"int": "9",
		"wis": "14",
		"chr": "6",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "8"
			},
			{
				"name": "stealth",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "18",
		"languages": {
			"speaks": ["giant","undercommon"],
			"understands": [""]
		},
		"challengeRating": "8",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The fomorian attacks twice with its greatclub or makes one greatclub attack and uses Evil Eye once.</p>"
			},
			{
				"name": "greatclub",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "15",
						"default": "19",
						"rolls": "3",
						"die": "8",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "evil eye",
				"perDay": "",
				"recharge": "",
				"ability": "cha",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "27",
						"die": "6",
						"mod": "8",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The fomorian magically forces a creature it can see within 60ft of it to make a DC 14 CHA saving throw. The creature takes 27(6d8) psychic damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "curse of the evil eye",
				"perDay": "",
				"recharge": "short",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>With a stare, the fomorian uses Evil Eye, but on a failed save, the creature is also cursed with magical deformities. While deformed, the creature has its speed halved and has disadvantage on ability checks, saving throws, and attacks based on STR or DEX.</p><p>The transformed creature can repeat the saving throw whenever it finishes a long rest, ending the effect on a success.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "galeb duhr",
		"pro": "",
		"src": "",
		"desc": "<p>The galeb duhr is a boulder-like creature with stumpy appendages that act as arms and legs. It has the ability to animate the rocks and boulders around it, and is thus usually encountered in rocky terrain.</p><p>Powerful magic allows a spellcaster to summon a galeb duhr from the Plane of Earth. Some galeb duhr also form naturally in places touched by that plane. The galeb duhr is imbued with greater intelligence than most elementals, allowing it to better assess threats and to communicate with creatures entering its guarded area.</p><p><strong>Stone Guardian.</strong> A galeb duhr doesn't age or require sustenance, making it an excellent sentinel. A powerful druid might charge a galeb duhr with protecting a stone circle or sacred hilltop. Another galeb duhr might be created to guard an underground tomb or a wizard's tower. When it chooses to, the galeb duhr can make itself look like an ordinary boulder, remaining perfectly still for years at a time.</p><p>A galeb duhr is permanently bound to the Material Plane, so that when it dies, it doesn't return to the Plane of Earth. It has an excellent memory and is more than happy to share information regarding its environment with creatures it doesn't regard as threats.</p><p><strong>Stone Connection.</strong> A galeb duhr can become one with the earth around it, allowing it to imbue nearby rocks and boulders with a semblance of life. The galeb duhr uses its animated boulders to frighten away interlopers and defend whatever it has been charged to protect. When it needs to move close to those intruders, it presses its limbs tight to its body and rolls forward at a furious pace.</p>",
		"size": "medium",
		"type": "elemental",
		"class": "",
		"tag": "",
		"alignment": "neutral neutral",
		"ac": "16",
		"armor": ["natural"],
		"hp": {
			"default": "85",
			"rolls": "9",
			"die": "8",
			"mod": "45"
		},
		"speed": [
			{
				"type": "roll",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "roll downhill",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "15",
				"notes": ""
			}
		],
		"str": "20",
		"dex": "14",
		"con": "20",
		"int": "11",
		"wis": "12",
		"chr": "11",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["bludgeoning","piercing","slashing","nonmagical"],
		"damageImm": ["poison"],
		"conditionImm": ["exhaustion","paralyzed","poisoned","petrified"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "11",
		"languages": {
			"speaks": ["terran"],
			"understands": [""]
		},
		"challengeRating": "6",
		"traits": [
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the galeb duhr remains motionless, it is indistinguishable from a normal boulder.</p>"
			},
			{
				"name": "rolling charge",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "7",
				"rolls": "2",
				"die": "6",
				"mod": "",
				"type": "bludgeoning",
				"ability": "str",
				"dc": "16",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the galeb duhr rolls at least 20ft straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7(2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 STR saving throw or be knocked prone.</p>"
			}
		],
		"actions": [
			{
				"name": "slam",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "8",
				"targetNum": "1",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "5",
						"default": "12",
						"rolls": "2",
						"die": "6",
						"mod": "5",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "animate boulders",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The galeb duhr magically animates up to two boulders it can see within 60ft of it. A boulder has statistics like those of a galeb duhr, except it has INT 1 and CHA 1, it can't be charmed or frightened, and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains concentration, up to 1 minute (as if concentrating on a spell).</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "gargoyle",
		"pro": "",
		"src": "",
		"desc": "<p>The inanimate gargoyles that perch atop great buildings are inspired by these malevolent creatures of elemental earth that resemble grotesque, fiendish statues. A gargoyle lurks among masonry and ruins, as still as any stone sculpture, and delights in the terror it creates when it breaks from its suspended pose, as well as the pain it inflicts on its victims.</p><p><strong>Animate Stone.</strong> Gargoyles cling to rocky cliffs and mountains, or roost on ledges in underground caves. They haunt city rooftops, perching vulture-like among the high stone arches and buttresses of castles and cathedrals, and they can hold themselves so still that they appear inanimate. Able to maintain this state for years, a gargoyle makes an ideal sentry.</p><p><strong>Deadly Reputation.</strong> Gargoyles have a reputation for cruelty. Statues carved into the likenesses of gargoyles appear in the architecture of countless cultures to frighten away trespassers. Although such sculptures are only decorative, real gargoyles can hide among them to ambush unsuspecting victims. A gargoyle might alleviate the tedium of its watch by catching and tormenting birds or rodents, but its long wait only increases its craving for harming sentient creatures.</p><p><strong>Cruel Servants.</strong> Gargoyles are easily inspired by the cunning of an intelligent master. They enjoy simple tasks such as guarding a master's home, torturing and killing interlopers, and anything else that involves minimum effort and maximum pain and carnage.</p><p>Gargoyles sometimes serve demons for their propensity for wanton chaos and destruction. Powerful spellcasters can also easily enlist gargoyle guardians to keep watch over their gates and walls. Gargoyles have the patience and fortitude of stone, and will serve even the cruelest master for years without complaint.</p><p><strong>Elemental Nature.</strong> A gargoyle doesn't require air, food, drink, or sleep.</p><p><strong>Shards of Elemental Evil.</strong> As Ogr&eacute;moch, the evil Prince of Elemental Earth, treads his stony realm, it leaves shards of broken rock in his wake. Imbued with slivers of sentience, these shards thrum with the essence of the elemental prince, growing over long years into vaguely humanoid rock formations that resolve at last into the hard, cruel shapes of gargoyles.</p><p>Ogr&eacute;moch doesn't create gargoyles deliberately, but they are a physical manifestation of his evil. Gargoyles are mockeries of the elemental air that Ogr&eacute;moch despises. They are heavy creatures of living stone, yet capable of flight. Like their creator, they possess a fundamental hatred for beings of elemental air, aarakocra in particular, and relish every opportunity to destroy such creatures.</p><p>On their home plane, gargoyles carve out earth motes that Ogr&eacute;moch hurtles into Aaqa, the domain of the aarakocra and the benevolent Wind Dukes the bird folk serve in the Elemental Plane of Air.</p>",
		"size": "medium",
		"type": "elemental",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "15",
		"armor": ["natural"],
		"hp": {
			"default": "52",
			"rolls": "7",
			"die": "8",
			"mod": "21"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "15",
		"dex": "11",
		"con": "16",
		"int": "6",
		"wis": "11",
		"chr": "7",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["bludgeoning","piercing","slashing","nonmagical","nonadamantine"],
		"damageImm": ["poison"],
		"conditionImm": ["exhaustion","petrified","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["terran"],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the gargoyle remains motion less, it is indistinguishable from an inanimate statue.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The gargoyle makes two attacks: one with its bite and one with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"mod": "2",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "gas spore",
		"pro": "",
		"src": "",
		"desc": "<p>The first gas spores are thought to have been from dead beholders, whose moldering corpses fed a parasitic fungus with aberrant magic. Having long since adapted into a unique plant creature, a gas spore grows quickly and purposefully out of any corpse, creating a malevolent-looking mockery of the most feared denizen of the Underdark.</p><p><strong>Eye Tyrant's Form.</strong> A gas spore is a spherical, balloon-like fungus that resembles a beholder from a distance, though its true nature becomes. increasingly obvious as one approaches it. The monster possesses a blind central "eye" and rhizome growths sprouting from its upper surface, superficially resembling a beholder's eyestalks.</p><p><strong>Death Burst.</strong> A gas spore is a hollow shell filled with a lighter-than-air gas that enables it to float as a beholder does. Piercing the shell with even the weakest attack causes the creature to burst apart, releasing a cloud of deadly spores. A creature that inhales the spores becomes host to them, and is often dead within a day. Its corpse then becomes the spawning ground from which new gas spores arise.</p><p><strong>Beholder Memories.</strong> A gas spore that sprouts from a beholder's corpse sometimes carries within it memories of its deceased parent. When the gas spore explodes, its deadly spores cast those memories adrift Any creature that inhales the spores and survives inherits one or more of the beholder's fragmented memories, and might gain useful information about the beholder's former lair and other nearby places and creatures of interest.</p>",
		"size": "large",
		"type": "plant",
		"class": "fungi",
		"tag": "",
		"alignment": "unaligned",
		"ac": "5",
		"armor": [""],
		"hp": {
			"default": "1",
			"rolls": "1",
			"die": "10",
			"mod": "-4"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "10",
				"notes": "hover"
			},
			{
				"type": "walk",
				"distance": "0",
				"notes": ""
			}
		],
		"str": "5",
		"dex": "1",
		"con": "3",
		"int": "1",
		"wis": "1",
		"chr": "1",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison"],
		"conditionImm": ["blinded","deafened","frightened","paralyzed","poisoned","prone"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "30",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "5",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": ".5",
		"traits": [
			{
				"name": "death burst",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "10",
				"rolls": "3",
				"die": "6",
				"mod": "",
				"type": "poison",
				"ability": "con",
				"dc": "15",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The gas spore explodes when it drops to 0HP. Each creature within 20ft of it must succeed on a DC 15 CON saving throw or take 10(3d6) poison damage and become infected with a disease on a failed save. Creatures immune to the poisoned condition are immune to this disease. Spores invade an infected creature's system, killing the creature in a number of hours equal to 1d12 + the creature's CON score, unless the disease is removed. In half that time, the creature becomes poisoned for the rest of the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that grow to full size in 7 days.</p>"
			},
			{
				"name": "eerie resemblance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "int",
				"dc": "15",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful DC 15 INT(Nature) check.</p>"
			}
		],
		"actions": [
			{
				"name": "touch",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "10",
				"attackMod": "0",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "1",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The creature must succeed on a DC 10 CON saving throw or become infected with the disease described in the Death Burst trait.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "galeb duhr",
		"pro": "",
		"src": "",
		"desc": "",
		"size": "",
		"type": "",
		"class": "",
		"tag": "",
		"alignment": "",
		"ac": "",
		"armor": [""],
		"hp": {
			"default": "",
			"rolls": "",
			"die": "",
			"mod": ""
		},
		"speed": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"str": "",
		"dex": "",
		"con": "",
		"int": "",
		"wis": "",
		"chr": "",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "glabrezu",
		"pro": "",
		"src": "",
		"desc": "<p>A glabrezu takes great pleasure in destroying mortals through temptation, and these creatures are among the few demons to offer their service to creatures foolish enough to summon them.</p><p>Although glabrezus are devastating in combat, they prefer to tempt victims into ruin, using power or wealth as a lure. Engaging in guile, trickery, and evil bargains, a glabrezu hoards riches that it uses to fulfill promises to shortsighted summoners and weak-willed mortals. However, if its attempts to entice or deceive fail, a glabrezu has the strength to fight and win.</p>",
		"size": "large",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "157",
			"rolls": "15",
			"die": "10",
			"mod": "75"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "20",
		"dex": "15",
		"con": "21",
		"int": "19",
		"wis": "17",
		"chr": "16",
		"savingThrows": [
			{
				"ability": "str",
				"mod": "9"
			},
			{
				"ability": "con",
				"mod": "9"
			},
			{
				"ability": "wis",
				"mod": "7"
			},
			{
				"ability": "cha",
				"mod": "7"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": ["abyssal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "9",
		"traits": [
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "int",
				"dc": "16",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["darkness","detect magic","dispel magic"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["confusion","fly","power word stun"],
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The glabrezu has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.</p>"
			},
			{
				"name": "pincer",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "16",
						"rolls": "2",
						"die": "10",
						"mod": "5",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a medium or smaller creature, it is grappled (DC 15 STR/DEX). The glabrezu has two pincers, each of which can grapple only one target.</p>"
			},
			{
				"name": "fist",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "2",
						"die": "4",
						"mod": "2",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A glabrezu has a 30% chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "gold dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>The most powerful and majestic of the metallic dragons, gold dragons are dedicated foes of evil.</p><p>A gold dragon has a sagacious face anointed with flexible spines that resemble whiskers. Its horns sweep back from its nose and brow, echoing twin frills that adorn its long neck. A gold dragon's sail-like wings start at its shoulders and trace down to the tip of its tail, letting it fly with a distinctive rippling motion as if swimming through the air. A gold dragon wyrmling has scales of dark yellow with metallic flecks. Those flecks grow larger as the dragon matures. As a gold dragon ages, its pupils fade until its eyes resemble pools of molten gold.</p><p><strong>Devourer of Wealth.</strong> Gold dragons can eat just about anything, but their preferred diet consists of pearls and gems. Thankfully, a gold dragon doesn't need to gorge itself on such wealth to feel satisfied. Gifts of treasure that it can consume are well received by a gold dragon, as long as they aren't bribes.</p><p><strong>Reserved Shapeshifters.</strong> Gold dragons are respected by the other metallic dragons for their wisdom and fairness, but they are the most aloof and grim of the good-aligned dragons. They value their privacy to the extent that they rarely fraternize with other dragons except their own mates and offspring.</p><p>Older gold dragons can assume animal and humanoid forms. Rarely does a gold dragon in disguise reveal its true form. In the guise of a peddler, it might regularly visit a town to catch up on local gossip, patronize honest businesses, and lend a helping hand in unseen ways. In the guise of an animal, the dragon might befriend a lost child, a wandering minstrel, or an innkeeper, serving as a companion for days or weeks on end.</p><p><strong>Master Hoarders.</strong> A gold dragon keeps its hoard in a well-guarded vault deep within its lair. Magical wards placed on the vault make it all but impossible to remove any treasures without the dragon knowing about it.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "22",
		"armor": ["natural"],
		"hp": {
			"default": "546",
			"rolls": "28",
			"die": "20",
			"mod": "252"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "30",
		"dex": "14",
		"con": "29",
		"int": "18",
		"wis": "17",
		"chr": "28",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "9"
			},
			{
				"attribute": "con",
				"mod": "16"
			},
			{
				"attribute": "wis",
				"mod": "10"
			},
			{
				"attribute": "cha",
				"mod": "16"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "10"
			},
			{
				"name": "perception",
				"mod": "17"
			},
			{
				"name": "pursuasion",
				"mod": "16"
			},
			{
				"name": "stealth",
				"mod": "9"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "27",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "24",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "16",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "24",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["command","comprehend languages","cure wounds","detect thoughts","zone of truth","create food and water","dispel magic","mass suggestion","sunburst"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 9 spells no higher than level 8. It has a +16 bonus to hit and a DC 24 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "21",
						"rolls": "2",
						"die": "10",
						"mod": "10",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "6",
						"mod": "10",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "19",
						"rolls": "2",
						"die": "8",
						"mod": "10",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "24",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 24 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "24",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "71",
						"rolls": "13",
						"die": "10",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 90ft cone. Each creature in that line must make a DC 24 DEX saving throw, taking 71(13d10) fire damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "weakening breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "24",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales gas in a 90ft cone. Each creature in that area mu st succeed on a DC 24 STR saving throw or have disadvantage on STR-based attack rolls, STR checks, and STR saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, HP, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, INT, WIS, and CHA scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 25 DEX saving throw or take 17(2d6+10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Gold dragons make their homes in out-of-the-way places, where they can do as they please without arousing suspicion or fear. Most dwell near idyllic lakes and rivers, mist-shrouded islands, cave complexes hidden behind sparkling waterfalls, or ancient ruins.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The dragon glimpses the future, so it has advantage on attack rolls, ability checks, and saving throws until initiative count 20 on the next round.</p>",
				"<p>One creature the dragon can see within 120ft of it must succeed on a DC 15 CHA saving throw or be banished to a dream plane, a different plane of existence the dragon has imagined into being. To escape, the creature must use its action to make a CHA check contested by the dragon's. If the creature wins, it escapes the dream plane. Otherwise, the effect ends on initiative count 20 on the next round. When the effect ends, the creature reappears in the space it left or in the nearest unoccupied space if that one is occupied.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Whenever a creature that can understand a language sleeps or enters a state of trance or reverie within 6 miles of the dragon's lair, the dragon can establish telepathic contact with that creature and converse with it in its dreams. The creature remembers its conversation with the dragon upon waking.</p>",
				"<p>Banks of beautiful, opalescent mist manifest within 6 miles of the dragon's lair. The mist doesn't obscure anything. It assumes haunting forms when evil cveatures are near the dragon or other non-evil creatures in the mist, warning such creatures of the danger.</p>",
				"<p>Gems and pearls within 1 mile of the dragon's · lair sparkle and gleam, shedding dim light in a 5ft-radius.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
		{	"name": "gold dragon, adult",
			"pro": "",
		"src": "",
		"desc": "<p>The most powerful and majestic of the metallic dragons, gold dragons are dedicated foes of evil.</p><p>A gold dragon has a sagacious face anointed with flexible spines that resemble whiskers. Its horns sweep back from its nose and brow, echoing twin frills that adorn its long neck. A gold dragon's sail-like wings start at its shoulders and trace down to the tip of its tail, letting it fly with a distinctive rippling motion as if swimming through the air. A gold dragon wyrmling has scales of dark yellow with metallic flecks. Those flecks grow larger as the dragon matures. As a gold dragon ages, its pupils fade until its eyes resemble pools of molten gold.</p><p><strong>Devourer of Wealth.</strong> Gold dragons can eat just about anything, but their preferred diet consists of pearls and gems. Thankfully, a gold dragon doesn't need to gorge itself on such wealth to feel satisfied. Gifts of treasure that it can consume are well received by a gold dragon, as long as they aren't bribes.</p><p><strong>Reserved Shapeshifters.</strong> Gold dragons are respected by the other metallic dragons for their wisdom and fairness, but they are the most aloof and grim of the good-aligned dragons. They value their privacy to the extent that they rarely fraternize with other dragons except their own mates and offspring.</p><p>Older gold dragons can assume animal and humanoid forms. Rarely does a gold dragon in disguise reveal its true form. In the guise of a peddler, it might regularly visit a town to catch up on local gossip, patronize honest businesses, and lend a helping hand in unseen ways. In the guise of an animal, the dragon might befriend a lost child, a wandering minstrel, or an innkeeper, serving as a companion for days or weeks on end.</p><p><strong>Master Hoarders.</strong> A gold dragon keeps its hoard in a well-guarded vault deep within its lair. Magical wards placed on the vault make it all but impossible to remove any treasures without the dragon knowing about it.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "256",
			"rolls": "19",
			"die": "12",
			"mod": "133"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "27",
		"dex": "14",
		"con": "25",
		"int": "16",
		"wis": "15",
		"chr": "24",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "8"
			},
			{
				"attribute": "con",
				"mod": "13"
			},
			{
				"attribute": "wis",
				"mod": "8"
			},
			{
				"attribute": "cha",
				"mod": "13"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "8"
			},
			{
				"name": "perception",
				"mod": "14"
			},
			{
				"name": "pursuasion",
				"mod": "13"
			},
			{
				"name": "stealth",
				"mod": "8"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "24",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "17",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "13",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "21",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["command","comprehend languages","cure wounds","detect thoughts","zone of truth","create food and water","dispel magic"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 7 spells no higher than level 5. It has a +13 bonus to hit and a DC 21 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "19",
						"rolls": "2",
						"die": "10",
						"mod": "8",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "17",
						"rolls": "2",
						"die": "8",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "21",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 21 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "21",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "66",
						"rolls": "12",
						"die": "10",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 60ft cone. Each creature in that line must make a DC 21 DEX saving throw, taking 66(12d10) fire damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "weakening breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "21",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales gas in a 60ft cone. Each creature in that area mu st succeed on a DC 21 STR saving throw or have disadvantage on STR-based attack rolls, STR checks, and STR saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, HP, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, INT, WIS, and CHA scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 22 DEX saving throw or take 15(2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Gold dragons make their homes in out-of-the-way places, where they can do as they please without arousing suspicion or fear. Most dwell near idyllic lakes and rivers, mist-shrouded islands, cave complexes hidden behind sparkling waterfalls, or ancient ruins.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The dragon glimpses the future, so it has advantage on attack rolls, ability checks, and saving throws until initiative count 20 on the next round.</p>",
				"<p>One creature the dragon can see within 120ft of it must succeed on a DC 15 CHA saving throw or be banished to a dream plane, a different plane of existence the dragon has imagined into being. To escape, the creature must use its action to make a CHA check contested by the dragon's. If the creature wins, it escapes the dream plane. Otherwise, the effect ends on initiative count 20 on the next round. When the effect ends, the creature reappears in the space it left or in the nearest unoccupied space if that one is occupied.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Whenever a creature that can understand a language sleeps or enters a state of trance or reverie within 6 miles of the dragon's lair, the dragon can establish telepathic contact with that creature and converse with it in its dreams. The creature remembers its conversation with the dragon upon waking.</p>",
				"<p>Banks of beautiful, opalescent mist manifest within 6 miles of the dragon's lair. The mist doesn't obscure anything. It assumes haunting forms when evil cveatures are near the dragon or other non-evil creatures in the mist, warning such creatures of the danger.</p>",
				"<p>Gems and pearls within 1 mile of the dragon's · lair sparkle and gleam, shedding dim light in a 5ft-radius.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
		{	"name": "gold dragon, wyrmling",
			"pro": "WORM-ling",
		"src": "",
		"desc": "<p>The most powerful and majestic of the metallic dragons, gold dragons are dedicated foes of evil.</p><p>A gold dragon has a sagacious face anointed with flexible spines that resemble whiskers. Its horns sweep back from its nose and brow, echoing twin frills that adorn its long neck. A gold dragon's sail-like wings start at its shoulders and trace down to the tip of its tail, letting it fly with a distinctive rippling motion as if swimming through the air. A gold dragon wyrmling has scales of dark yellow with metallic flecks. Those flecks grow larger as the dragon matures. As a gold dragon ages, its pupils fade until its eyes resemble pools of molten gold.</p><p><strong>Devourer of Wealth.</strong> Gold dragons can eat just about anything, but their preferred diet consists of pearls and gems. Thankfully, a gold dragon doesn't need to gorge itself on such wealth to feel satisfied. Gifts of treasure that it can consume are well received by a gold dragon, as long as they aren't bribes.</p><p><strong>Reserved Shapeshifters.</strong> Gold dragons are respected by the other metallic dragons for their wisdom and fairness, but they are the most aloof and grim of the good-aligned dragons. They value their privacy to the extent that they rarely fraternize with other dragons except their own mates and offspring.</p><p>Older gold dragons can assume animal and humanoid forms. Rarely does a gold dragon in disguise reveal its true form. In the guise of a peddler, it might regularly visit a town to catch up on local gossip, patronize honest businesses, and lend a helping hand in unseen ways. In the guise of an animal, the dragon might befriend a lost child, a wandering minstrel, or an innkeeper, serving as a companion for days or weeks on end.</p><p><strong>Master Hoarders.</strong> A gold dragon keeps its hoard in a well-guarded vault deep within its lair. Magical wards placed on the vault make it all but impossible to remove any treasures without the dragon knowing about it.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "60",
			"rolls": "8",
			"die": "8",
			"mod": "24"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "14",
		"con": "17",
		"int": "14",
		"wis": "11",
		"chr": "16",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "4"
			},
			{
				"attribute": "con",
				"mod": "6"
			},
			{
				"attribu2te": "wis",
				"mod": ""
			},
			{
				"attribute": "cha",
				"mod": "5"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "5",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["command","comprehend languages","cure wounds"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 3 spells no higher than level 1. It has a +5 bonus to hit and a DC 13 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "1",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "13",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "22",
						"rolls": "4",
						"die": "10",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 15ft cone. Each creature in that line must make a DC 13 DEX saving throw, taking 22(4d10) fire damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "weakening breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "13",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales gas in a 15ft cone. Each creature in that area mu st succeed on a DC 13 STR saving throw or have disadvantage on STR-based attack rolls, STR checks, and STR saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "gold dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>The most powerful and majestic of the metallic dragons, gold dragons are dedicated foes of evil.</p><p>A gold dragon has a sagacious face anointed with flexible spines that resemble whiskers. Its horns sweep back from its nose and brow, echoing twin frills that adorn its long neck. A gold dragon's sail-like wings start at its shoulders and trace down to the tip of its tail, letting it fly with a distinctive rippling motion as if swimming through the air. A gold dragon wyrmling has scales of dark yellow with metallic flecks. Those flecks grow larger as the dragon matures. As a gold dragon ages, its pupils fade until its eyes resemble pools of molten gold.</p><p><strong>Devourer of Wealth.</strong> Gold dragons can eat just about anything, but their preferred diet consists of pearls and gems. Thankfully, a gold dragon doesn't need to gorge itself on such wealth to feel satisfied. Gifts of treasure that it can consume are well received by a gold dragon, as long as they aren't bribes.</p><p><strong>Reserved Shapeshifters.</strong> Gold dragons are respected by the other metallic dragons for their wisdom and fairness, but they are the most aloof and grim of the good-aligned dragons. They value their privacy to the extent that they rarely fraternize with other dragons except their own mates and offspring.</p><p>Older gold dragons can assume animal and humanoid forms. Rarely does a gold dragon in disguise reveal its true form. In the guise of a peddler, it might regularly visit a town to catch up on local gossip, patronize honest businesses, and lend a helping hand in unseen ways. In the guise of an animal, the dragon might befriend a lost child, a wandering minstrel, or an innkeeper, serving as a companion for days or weeks on end.</p><p><strong>Master Hoarders.</strong> A gold dragon keeps its hoard in a well-guarded vault deep within its lair. Magical wards placed on the vault make it all but impossible to remove any treasures without the dragon knowing about it.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "178",
			"rolls": "17",
			"die": "10",
			"mod": "85"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "23",
		"dex": "14",
		"con": "21",
		"int": "16",
		"wis": "13",
		"chr": "20",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "6"
			},
			{
				"attribute": "con",
				"mod": "9"
			},
			{
				"attribute": "wis",
				"mod": "5"
			},
			{
				"attribute": "cha",
				"mod": "9"
			}
		],
		"skills": [
			{
				"name": "insight",
				"mod": "5"
			},
			{
				"name": "perception",
				"mod": "9"
			},
			{
				"name": "pursuasion",
				"mod": "9"
			},
			{
				"name": "stealth",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "19",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "10",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "9",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "17",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["command","comprehend languages","cure wounds","detect thoughts","zone of truth"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 5 spells no higher than level 3. It has a +9 bonus to hit and a DC 17 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "17",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "55",
						"rolls": "10",
						"die": "10",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 30ft cone. Each creature in that line must make a DC 17 DEX saving throw, taking 55(10d10) fire damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "weakening breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "str",
				"dc": "17",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales gas in a 30ft cone. Each creature in that area mu st succeed on a DC 17 STR saving throw or have disadvantage on STR-based attack rolls, STR checks, and STR saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "goristro",
		"pro": "",
		"src": "",
		"desc": "<p>The goristro resembles a fiendish minotaur towering more than twenty feet tall. When controlled by a demon lord, goristros make formidable living siege engines and prized pets. Goristros possess preternatural cunning when navigating labyrinthine passages and shifting corridors, pursuing foes in a terrifying hunt.</p><p>A hulking goristro sometimes bears a palanquin, carrying smaller demons on its broad shoulders, much like an elephant carries riders on its back.</p>",
		"size": "huge",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "310",
			"rolls": "23",
			"die": "12",
			"mod": "161"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "25",
		"dex": "11",
		"con": "25",
		"int": "6",
		"wis": "13",
		"chr": "14",
		"savingThrows": [
			{
				"ability": "str",
				"mod": "13"
			},
			{
				"ability": "dex",
				"mod": "6"
			},
			{
				"ability": "con",
				"mod": "13"
			},
			{
				"ability": "wis",
				"mod": "7"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "17",
		"languages": {
			"speaks": ["abyssal"],
			"understands": [""]
		},
		"challengeRating": "17",
		"traits": [
			{
				"name": "charge",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "38",
				"rolls": "7",
				"die": "10",
				"mod": "",
				"type": "",
				"ability": "str",
				"dc": "21",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the goristro moves at least 15ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38(7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 STR saving thow or be pushed up to 20ft away and knocked prone.</p>"
			},
			{
				"name": "labyrinthine recall",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The goristro can perfectly recall any path it has traveled.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The goristro has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "siege monster",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The goristro deals double damage to objects and structures.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The goristro makes three attacks: two with its fists and one with its hoof.</p>"
			},
			{
				"name": "fist",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "13",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "20",
						"rolls": "3",
						"die": "8",
						"mod": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a creature, it must succeed on a DC 21 STR saving throw or be knocked prone.</p>"
			},
			{
				"name": "hoof",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "13",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "23",
						"rolls": "3",
						"die": "10",
						"mod": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "gore",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "13",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "45",
						"rolls": "7",
						"die": "10",
						"mod": "7",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "green dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>The most cunning and treacherous of true dragons, green dragons use misdirection and trickery to get the upper hand against their enemies. Nasty tempered and thoroughly evil, they take special pleasure in subverting and corrupting the good-hearted. In the ancient forests they roam, green dragons demonstrate an aggression that is often less about territory than it is about gaining power and wealth with as little effort as possible.</p><p>A green dragon is recognized by its curved jawline and the crest that begins near its eyes and continues down its spine, reaching full height just behind the skull. A green dragon has no external ears, but bears leathery spiked plates that run down the sides of its neck.</p><p>A wyrmling green dragon's thin scales are a shade of green so dark as to appear nearly black. As a green dragon ages, its scales grow larger and lighter, turning shades of forest, emerald, and olive green to help it blend in with its wooded surroundings. Its wings have a dappled pattern, darker near the leading edges and lighter toward the trailing edges.</p><p>A green dragon's legs are longer in relation to its body than with any other dragon, enabling it to easily pass over underbrush and forest debris when it walks. With its equally long neck, an older green dragon can peer over the tops of trees without rearing up.</p><p><strong>Capricious Hunters.</strong> A green dragon hunts by patrolling its forest territory from the air and the ground. It eats any creature it can see, and will consume shrubs and small trees when hungry enough, but its favorite prey is elves.</p><p>Green dragons are consummate liars and masters of double talk. They favor intimidation of lesser creatures, but employ more subtle manipulations when dealing with other dragons. A green dragon attacks animals and monsters with no provocation, especially when dealing with potential threats to its territory. When dealing with sentient creatures, a green dragon demonstrates a lust for power that rivals its draconic desire for treasure, and it is always on the lookout for creatures that can help it further its ambitions.</p><p>A green dragon stalks its victims as it plans its assault, sometimes shadowing creatures for days. If a target is weak, the dragon enjoys the terror its appearance evokes before it attacks. It never slays all its foes, preferring to use intimidation to establish control over survivors. It then learns what it can about other creatures' activities near its territory, and about any treasure to be found nearby. Green dragons occasionally release prisoners if they can be ransomed. Otherwise, a creature must prove its value to the dragon daily or die.</p><p><strong>Manipulative Schemers.</strong> A wily and subtle creature, a green dragon bends other creatures to its will by assessing and playing off their deepest desires. Any creature foolish enough to attempt to subdue a green dragon eventually realizes that the creature is only pretending to serve while it assesses its would-be master.</p><p>When manipulating other creatures, green dragons are honey-tongued, smooth, and sophisticated. Among their own kind, they are loud, crass, and rude, especially when dealing with dragons of the same age and status.</p><p><strong>Conflict and Corruption.</strong> Green dragons sometimes clash with other dragons over territory where forest crosses over into other terrain. A green dragon typically pretends to back down, only to wait and watch&mdash;sometimes for decades&mdash;for the chance to slay the other dragon, then claim its lair and hoard.</p><p>Green dragons accept the servitude of sentient creatures such as goblinoids, ettercaps, ettins, kobolds, orcs, and yuan-ti. They also delight in corrupting and bending elves to their will. A green dragon sometimes wracks its minions' minds with fear to the point of insanity, with the fog that spreads throughout its forest reflecting those minions' tortured dreams.</p><p><strong>Living Treasures.</strong> A green dragon's favored treasures are the sentient creatures it bends to its will, including significant figures such as popular heroes, well-known sages, and renowned bards. Among material treasures, a green dragon favors emeralds, wood carvings, musical instruments, and sculptures of humanoid subjects.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "21",
		"armor": ["natural"],
		"hp": {
			"default": "385",
			"rolls": "22",
			"die": "20",
			"mod": "154"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "27",
		"dex": "12",
		"con": "25",
		"int": "20",
		"wis": "17",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "8"
			},
			{
				"attribute": "con",
				"mod": "14"
			},
			{
				"attribute": "wis",
				"mod": "10"
			},
			{
				"attribute": "cha",
				"mod": "11"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "11"
			},
			{
				"name": "insight",
				"mod": "10"
			},
			{
				"name": "perception",
				"mod": "17"
			},
			{
				"name": "persuasion",
				"mod": "11"
			},
			{
				"name": "stealth",
				"mod": "8"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "27",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "22",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "11",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "19",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","contagion","finger of death"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 4 spells at level 7 or below. It has a +11 bonus to hit and a DC 19 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "19",
						"rolls": "2",
						"die": "10",
						"mod": "8",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "22",
						"rolls": "4",
						"die": "6",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "17",
						"rolls": "2",
						"die": "8",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "19",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 19 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "poison breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "22",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "77",
						"rolls": "22",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales poisonous gas in a 90ft cone. Each creature in that area must make a DC 22 CON saving throw, taking 77(22d6) poison damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 23 DEX saving throw or take 15(2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>The forest-loving green dragons sometimes compete for territory with black dragons in marshy woods and with white dragons in subarctic taiga. However, a forest controlled by a green dragon is easy to spot. A perpetual fog hangs in the air in a legendary green dragon's wood, carrying an acrid whiff of the creature's poison breath. The moss-covered trees grow close together except where winding pathways trace their way like a maze into the heart of the forest. The light that reaches the forest floor carries an emerald green cast, and every sound seems muffled.</p><p>At the center of its forest, a green dragon chooses a cave in a sheer cliff or hillside for its lair, preferring an entrance hidden from prying eyes. Some seek out cave mouths concealed behind waterfalls, or partly submerged caverns that can be accessed through lakes or streams. Others conceal the entrances to their lairs with vegetation.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Grasping roots and vines erupt in a 20ft-radius centered on a point on the ground that the dragon can see within 120ft of it. That area becomes difficult terrain, and each creature there must succeed on a DC 15 STR saving throw or be restrained by the roots and vines. A creature can be freed if it or another creature takes an action to make a DC 15 STR check and succeeds. The roots and vines wilt away when the dragon uses this lair action again or when the dragon dies.</p>",
				"<p>A wall of tangled brush bristling with thorns springs into existence on a solid surface within 120ft of the dragon. The wall is up to 60ft long, 10ft high, and 5ft thick, and it blocks line of sight. When the wall appears, each creature in its area must make a DC 15 DEX saving throw. A creature that fails the save takes 18(4d8) piercing damage and is pushed 5 feet out of the wall's space, appearing on whichever side of the wall it wants. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature travels through the wall, it must spend 4ft of movement. Furthermore, a creature in the wall's space must make a DC 15 DEX saving throw once each round it's in contact with the wall, taking 18(4d8) piercing damage on a failed save, or half as much damage on a successful one.</p><p>Each 10ft section of wall has AC 5, 15HP, vulnerability to fire damage, resistance to bludgeoning and piercing damage, and immunity to psychic damage. The wall sinks back into the ground when the dragon uses this lair action again or when the dragon dies.</p>",
				"<p>Magical fog billows around one creature the dragon can see within 120ft of it. The creature must succeed on a DC 15 WIS saving throw or be charmed by the dragon until initiative count 20 on the next round.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Thickets form labyrinthine passages within 1 mile of the dragon's lair. The thickets act as 10ft-high, 10ft-thick walls that block line of sight. Creatures can move through the thickets, with every 1 foot a creature moves costing it 4ft of movement. A creature in the thickets must make a DC 15 DEX saving throw once each round it's in contact with the thickets or take 3(1d6) piercing damage from thorns.</p><p>Each 10ft-cube of thickets has AC 5, 30 hit points, resistance to bludgeoning and piercing damage, vulnerability to fire damage, and immunity to psychic and thunder damage.</p>",
				"<p>Within 1 mile of its lair, the dragon leaves no physical evidence of its passage unless it wishes to. Tracking it there is impossible except by magical means. In addition, it ignores movement impediments and damage from plants in this area that are neither magical nor creatures, including the thickets described above. The plants remove themselves from the dragon's path.</p>",
				"<p>Rodents and birds within 1 mile of the dragon's lair serve as the dragon's eyes and ears. Deer and other large game are strangely absent, hinting at the presence of an unnaturally hungry predator.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "green dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>The most cunning and treacherous of true dragons, green dragons use misdirection and trickery to get the upper hand against their enemies. Nasty tempered and thoroughly evil, they take special pleasure in subverting and corrupting the good-hearted. In the ancient forests they roam, green dragons demonstrate an aggression that is often less about territory than it is about gaining power and wealth with as little effort as possible.</p><p>A green dragon is recognized by its curved jawline and the crest that begins near its eyes and continues down its spine, reaching full height just behind the skull. A green dragon has no external ears, but bears leathery spiked plates that run down the sides of its neck.</p><p>A wyrmling green dragon's thin scales are a shade of green so dark as to appear nearly black. As a green dragon ages, its scales grow larger and lighter, turning shades of forest, emerald, and olive green to help it blend in with its wooded surroundings. Its wings have a dappled pattern, darker near the leading edges and lighter toward the trailing edges.</p><p>A green dragon's legs are longer in relation to its body than with any other dragon, enabling it to easily pass over underbrush and forest debris when it walks. With its equally long neck, an older green dragon can peer over the tops of trees without rearing up.</p><p><strong>Capricious Hunters.</strong> A green dragon hunts by patrolling its forest territory from the air and the ground. It eats any creature it can see, and will consume shrubs and small trees when hungry enough, but its favorite prey is elves.</p><p>Green dragons are consummate liars and masters of double talk. They favor intimidation of lesser creatures, but employ more subtle manipulations when dealing with other dragons. A green dragon attacks animals and monsters with no provocation, especially when dealing with potential threats to its territory. When dealing with sentient creatures, a green dragon demonstrates a lust for power that rivals its draconic desire for treasure, and it is always on the lookout for creatures that can help it further its ambitions.</p><p>A green dragon stalks its victims as it plans its assault, sometimes shadowing creatures for days. If a target is weak, the dragon enjoys the terror its appearance evokes before it attacks. It never slays all its foes, preferring to use intimidation to establish control over survivors. It then learns what it can about other creatures' activities near its territory, and about any treasure to be found nearby. Green dragons occasionally release prisoners if they can be ransomed. Otherwise, a creature must prove its value to the dragon daily or die.</p><p><strong>Manipulative Schemers.</strong> A wily and subtle creature, a green dragon bends other creatures to its will by assessing and playing off their deepest desires. Any creature foolish enough to attempt to subdue a green dragon eventually realizes that the creature is only pretending to serve while it assesses its would-be master.</p><p>When manipulating other creatures, green dragons are honey-tongued, smooth, and sophisticated. Among their own kind, they are loud, crass, and rude, especially when dealing with dragons of the same age and status.</p><p><strong>Conflict and Corruption.</strong> Green dragons sometimes clash with other dragons over territory where forest crosses over into other terrain. A green dragon typically pretends to back down, only to wait and watch&mdash;sometimes for decades&mdash;for the chance to slay the other dragon, then claim its lair and hoard.</p><p>Green dragons accept the servitude of sentient creatures such as goblinoids, ettercaps, ettins, kobolds, orcs, and yuan-ti. They also delight in corrupting and bending elves to their will. A green dragon sometimes wracks its minions' minds with fear to the point of insanity, with the fog that spreads throughout its forest reflecting those minions' tortured dreams.</p><p><strong>Living Treasures.</strong> A green dragon's favored treasures are the sentient creatures it bends to its will, including significant figures such as popular heroes, well-known sages, and renowned bards. Among material treasures, a green dragon favors emeralds, wood carvings, musical instruments, and sculptures of humanoid subjects.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "207",
			"rolls": "18",
			"die": "12",
			"mod": "90"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "23",
		"dex": "12",
		"con": "21",
		"int": "18",
		"wis": "15",
		"chr": "17",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "6"
			},
			{
				"attribute": "con",
				"mod": "10"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "8"
			},
			{
				"name": "insight",
				"mod": "7"
			},
			{
				"name": "perception",
				"mod": "12"
			},
			{
				"name": "persuasion",
				"mod": "8"
			},
			{
				"name": "stealth",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "22",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "15",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "8",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "16",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","contagion"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 3 spells at level 5 or below. It has a +8 bonus to hit and a DC 16 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
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
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "15",
						"rolls": "2",
						"die": "8",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "16",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 16 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "poison breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "56",
						"rolls": "16",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales poisonous gas in a 60ft cone. Each creature in that area must make a DC 18 CON saving throw, taking 56(16d6) poison damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 19 DEX saving throw or take 13(2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>The forest-loving green dragons sometimes compete for territory with black dragons in marshy woods and with white dragons in subarctic taiga. However, a forest controlled by a green dragon is easy to spot. A perpetual fog hangs in the air in a legendary green dragon's wood, carrying an acrid whiff of the creature's poison breath. The moss-covered trees grow close together except where winding pathways trace their way like a maze into the heart of the forest. The light that reaches the forest floor carries an emerald green cast, and every sound seems muffled.</p><p>At the center of its forest, a green dragon chooses a cave in a sheer cliff or hillside for its lair, preferring an entrance hidden from prying eyes. Some seek out cave mouths concealed behind waterfalls, or partly submerged caverns that can be accessed through lakes or streams. Others conceal the entrances to their lairs with vegetation.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Grasping roots and vines erupt in a 20ft-radius centered on a point on the ground that the dragon can see within 120ft of it. That area becomes difficult terrain, and each creature there must succeed on a DC 15 STR saving throw or be restrained by the roots and vines. A creature can be freed if it or another creature takes an action to make a DC 15 STR check and succeeds. The roots and vines wilt away when the dragon uses this lair action again or when the dragon dies.</p>",
				"<p>A wall of tangled brush bristling with thorns springs into existence on a solid surface within 120ft of the dragon. The wall is up to 60ft long, 10ft high, and 5ft thick, and it blocks line of sight. When the wall appears, each creature in its area must make a DC 15 DEX saving throw. A creature that fails the save takes 18(4d8) piercing damage and is pushed 5 feet out of the wall's space, appearing on whichever side of the wall it wants. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature travels through the wall, it must spend 4ft of movement. Furthermore, a creature in the wall's space must make a DC 15 DEX saving throw once each round it's in contact with the wall, taking 18(4d8) piercing damage on a failed save, or half as much damage on a successful one.</p><p>Each 10ft section of wall has AC 5, 15HP, vulnerability to fire damage, resistance to bludgeoning and piercing damage, and immunity to psychic damage. The wall sinks back into the ground when the dragon uses this lair action again or when the dragon dies.</p>",
				"<p>Magical fog billows around one creature the dragon can see within 120ft of it. The creature must succeed on a DC 15 WIS saving throw or be charmed by the dragon until initiative count 20 on the next round.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Thickets form labyrinthine passages within 1 mile of the dragon's lair. The thickets act as 10ft-high, 10ft-thick walls that block line of sight. Creatures can move through the thickets, with every 1 foot a creature moves costing it 4ft of movement. A creature in the thickets must make a DC 15 DEX saving throw once each round it's in contact with the thickets or take 3(1d6) piercing damage from thorns.</p><p>Each 10ft-cube of thickets has AC 5, 30 hit points, resistance to bludgeoning and piercing damage, vulnerability to fire damage, and immunity to psychic and thunder damage.</p>",
				"<p>Within 1 mile of its lair, the dragon leaves no physical evidence of its passage unless it wishes to. Tracking it there is impossible except by magical means. In addition, it ignores movement impediments and damage from plants in this area that are neither magical nor creatures, including the thickets described above. The plants remove themselves from the dragon's path.</p>",
				"<p>Rodents and birds within 1 mile of the dragon's lair serve as the dragon's eyes and ears. Deer and other large game are strangely absent, hinting at the presence of an unnaturally hungry predator.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "green dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>The most cunning and treacherous of true dragons, green dragons use misdirection and trickery to get the upper hand against their enemies. Nasty tempered and thoroughly evil, they take special pleasure in subverting and corrupting the good-hearted. In the ancient forests they roam, green dragons demonstrate an aggression that is often less about territory than it is about gaining power and wealth with as little effort as possible.</p><p>A green dragon is recognized by its curved jawline and the crest that begins near its eyes and continues down its spine, reaching full height just behind the skull. A green dragon has no external ears, but bears leathery spiked plates that run down the sides of its neck.</p><p>A wyrmling green dragon's thin scales are a shade of green so dark as to appear nearly black. As a green dragon ages, its scales grow larger and lighter, turning shades of forest, emerald, and olive green to help it blend in with its wooded surroundings. Its wings have a dappled pattern, darker near the leading edges and lighter toward the trailing edges.</p><p>A green dragon's legs are longer in relation to its body than with any other dragon, enabling it to easily pass over underbrush and forest debris when it walks. With its equally long neck, an older green dragon can peer over the tops of trees without rearing up.</p><p><strong>Capricious Hunters.</strong> A green dragon hunts by patrolling its forest territory from the air and the ground. It eats any creature it can see, and will consume shrubs and small trees when hungry enough, but its favorite prey is elves.</p><p>Green dragons are consummate liars and masters of double talk. They favor intimidation of lesser creatures, but employ more subtle manipulations when dealing with other dragons. A green dragon attacks animals and monsters with no provocation, especially when dealing with potential threats to its territory. When dealing with sentient creatures, a green dragon demonstrates a lust for power that rivals its draconic desire for treasure, and it is always on the lookout for creatures that can help it further its ambitions.</p><p>A green dragon stalks its victims as it plans its assault, sometimes shadowing creatures for days. If a target is weak, the dragon enjoys the terror its appearance evokes before it attacks. It never slays all its foes, preferring to use intimidation to establish control over survivors. It then learns what it can about other creatures' activities near its territory, and about any treasure to be found nearby. Green dragons occasionally release prisoners if they can be ransomed. Otherwise, a creature must prove its value to the dragon daily or die.</p><p><strong>Manipulative Schemers.</strong> A wily and subtle creature, a green dragon bends other creatures to its will by assessing and playing off their deepest desires. Any creature foolish enough to attempt to subdue a green dragon eventually realizes that the creature is only pretending to serve while it assesses its would-be master.</p><p>When manipulating other creatures, green dragons are honey-tongued, smooth, and sophisticated. Among their own kind, they are loud, crass, and rude, especially when dealing with dragons of the same age and status.</p><p><strong>Conflict and Corruption.</strong> Green dragons sometimes clash with other dragons over territory where forest crosses over into other terrain. A green dragon typically pretends to back down, only to wait and watch&mdash;sometimes for decades&mdash;for the chance to slay the other dragon, then claim its lair and hoard.</p><p>Green dragons accept the servitude of sentient creatures such as goblinoids, ettercaps, ettins, kobolds, orcs, and yuan-ti. They also delight in corrupting and bending elves to their will. A green dragon sometimes wracks its minions' minds with fear to the point of insanity, with the fog that spreads throughout its forest reflecting those minions' tortured dreams.</p><p><strong>Living Treasures.</strong> A green dragon's favored treasures are the sentient creatures it bends to its will, including significant figures such as popular heroes, well-known sages, and renowned bards. Among material treasures, a green dragon favors emeralds, wood carvings, musical instruments, and sculptures of humanoid subjects.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "38",
			"rolls": "7",
			"die": "8",
			"mod": "7"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "15",
		"dex": "12",
		"con": "13",
		"int": "14",
		"wis": "11",
		"chr": "13",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "3"
			},
			{
				"attribute": "con",
				"mod": "3"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "3"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "3",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "11",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["acid splash"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 1 spell at level 0 or below. It has a +3 bonus to hit and a DC 11 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "10",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "poison breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "11",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "",
						"default": "21",
						"rolls": "6",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales poisonous gas in a 15ft cone. Each creature in that area must make a DC 11 CON saving throw, taking 21(6d6) poison damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "green dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>The most cunning and treacherous of true dragons, green dragons use misdirection and trickery to get the upper hand against their enemies. Nasty tempered and thoroughly evil, they take special pleasure in subverting and corrupting the good-hearted. In the ancient forests they roam, green dragons demonstrate an aggression that is often less about territory than it is about gaining power and wealth with as little effort as possible.</p><p>A green dragon is recognized by its curved jawline and the crest that begins near its eyes and continues down its spine, reaching full height just behind the skull. A green dragon has no external ears, but bears leathery spiked plates that run down the sides of its neck.</p><p>A wyrmling green dragon's thin scales are a shade of green so dark as to appear nearly black. As a green dragon ages, its scales grow larger and lighter, turning shades of forest, emerald, and olive green to help it blend in with its wooded surroundings. Its wings have a dappled pattern, darker near the leading edges and lighter toward the trailing edges.</p><p>A green dragon's legs are longer in relation to its body than with any other dragon, enabling it to easily pass over underbrush and forest debris when it walks. With its equally long neck, an older green dragon can peer over the tops of trees without rearing up.</p><p><strong>Capricious Hunters.</strong> A green dragon hunts by patrolling its forest territory from the air and the ground. It eats any creature it can see, and will consume shrubs and small trees when hungry enough, but its favorite prey is elves.</p><p>Green dragons are consummate liars and masters of double talk. They favor intimidation of lesser creatures, but employ more subtle manipulations when dealing with other dragons. A green dragon attacks animals and monsters with no provocation, especially when dealing with potential threats to its territory. When dealing with sentient creatures, a green dragon demonstrates a lust for power that rivals its draconic desire for treasure, and it is always on the lookout for creatures that can help it further its ambitions.</p><p>A green dragon stalks its victims as it plans its assault, sometimes shadowing creatures for days. If a target is weak, the dragon enjoys the terror its appearance evokes before it attacks. It never slays all its foes, preferring to use intimidation to establish control over survivors. It then learns what it can about other creatures' activities near its territory, and about any treasure to be found nearby. Green dragons occasionally release prisoners if they can be ransomed. Otherwise, a creature must prove its value to the dragon daily or die.</p><p><strong>Manipulative Schemers.</strong> A wily and subtle creature, a green dragon bends other creatures to its will by assessing and playing off their deepest desires. Any creature foolish enough to attempt to subdue a green dragon eventually realizes that the creature is only pretending to serve while it assesses its would-be master.</p><p>When manipulating other creatures, green dragons are honey-tongued, smooth, and sophisticated. Among their own kind, they are loud, crass, and rude, especially when dealing with dragons of the same age and status.</p><p><strong>Conflict and Corruption.</strong> Green dragons sometimes clash with other dragons over territory where forest crosses over into other terrain. A green dragon typically pretends to back down, only to wait and watch&mdash;sometimes for decades&mdash;for the chance to slay the other dragon, then claim its lair and hoard.</p><p>Green dragons accept the servitude of sentient creatures such as goblinoids, ettercaps, ettins, kobolds, orcs, and yuan-ti. They also delight in corrupting and bending elves to their will. A green dragon sometimes wracks its minions' minds with fear to the point of insanity, with the fog that spreads throughout its forest reflecting those minions' tortured dreams.</p><p><strong>Living Treasures.</strong> A green dragon's favored treasures are the sentient creatures it bends to its will, including significant figures such as popular heroes, well-known sages, and renowned bards. Among material treasures, a green dragon favors emeralds, wood carvings, musical instruments, and sculptures of humanoid subjects.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "136",
			"rolls": "16",
			"die": "10",
			"mod": "48"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "12",
		"con": "17",
		"int": "16",
		"wis": "13",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "4"
			},
			{
				"attribute": "con",
				"mod": "6"
			},
			{
				"attribute": "wis",
				"mod": "4"
			},
			{
				"attribute": "cha",
				"mod": "5"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "5"
			},
			{
				"name": "perception",
				"mod": "7"
			},
			{
				"name": "stealth",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "17",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "8",
		"traits": [
			{
				"name": "amphibious",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can breathe air and water.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "5",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 2 or below. It has a +5 bonus to hit and a DC 13 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"mod": "4",
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
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "poison breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "42",
						"rolls": "12",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales poisonous gas in a 30ft cone. Each creature in that area must make a DC 14 CON saving throw, taking 42(12d6) poison damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "hezrou",
		"pro": "",
		"src": "",
		"desc": "<p>Hezrous serve as foot soldiers in the demonic hordes of the Abyss. Although physically powerful, they are weakminded and hezrous can easily be duped into sacrificing themselves by more powerful demons. As they press their attacks into the heart of an enemy's forces, their foul stench can sicken even the toughest foes.</p>",
		"size": "large",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "16",
		"armor": ["natural"],
		"hp": {
			"default": "136",
			"rolls": "13",
			"die": "10",
			"mod": "65"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "17",
		"con": "20",
		"int": "5",
		"wis": "12",
		"chr": "13",
		"savingThrows": [
			{
				"ability": "str",
				"mod": "7"
			},
			{
				"ability": "con",
				"mod": "8"
			},
			{
				"ability": "wis",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["abyssal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "8",
		"traits": [
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The hezrou has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "stench",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Any creature that starts its turn within 10ft of the hezrou must succeed on a DC 14 CON saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The hezrou makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A hezrou has a 30% chance of summoning 2d6 dretches or one hezrou. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "horned devil (malebranche)",
		"pro": "",
		"src": "",
		"desc": "<p>Horned devils are lazy to the point of belligerence and reluctant to put themselves in harm's way. Moreover, they hate and fear any creature stronger than themselves. When they are sufficiently provoked or antagonized, the fury of these fiends can be terrifying.</p><p>A malebranche stands as tall as an ogre and is sheathed in scales as tough as iron. The flying infantry of the hellish legions, horned devils follow orders to the letter. Their huge wings and sweeping horns create an intimidating presence as they drop from the sky and strike with deadly forks and lashing tails.</p>",
		"size": "large",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "178",
			"rolls": "17",
			"die": "10",
			"mod": "55"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "22",
		"dex": "17",
		"con": "21",
		"int": "12",
		"wis": "16",
		"chr": "17",
		"savingThrows": [
			{
				"attribute": "str",
				"mod": "10"
			},
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},
			{
				"attribute": "cha",
				"mod": "7"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "",
		"traits": [
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the devil's darkvision."
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil has advantage on saving throws against spells and other magical effects."
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack."
			},
			{
				"name": "fork",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "2",
						"reach": "10ft",
						"default": "15",
						"rolls": "2",
						"die": "8",
						"mod": "6",
						"type": "piercing"
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "17",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10ft",
						"default": "10",
						"rolls": "1",
						"die": "8",
						"mod": "6",
						"type": "piercing"
					}
				],
				"desc": "<p>If the target is a creature other than an undead or a construct, it must succeed on a DC 17 CON saving throw or lose 10(3d6) HP at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10(3d6). Any creature can take an action to stanch the wound with a successful DC 12 WIS(Medicine) check. The wound also closes if the target receives magical healing."
			},
			{
				"name": "hurl flame",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged spell",
						"handed": "",
						"reach": "150ft",
						"default": "14",
						"rolls": "4",
						"die": "6",
						"mod": "",
						"type": "fire"
					}
				],
				"desc": "<p>If the target is a flammable object that isn't being worn or carried, it also catches fire."
			},
			{
				"name": "summon devil - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A horned devil has a 30% chance of summoning one horned devil. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "ice devil (gelugon)",
		"pro": "",
		"src": "",
		"desc": "<p>Found most commonly on the cold layers of Stygia and Cania, ice devils serve as commanders of the infernal armies of the Nine Hells, tormenting lesser devils as an outlet for their anger and resentment. Coveting the power of their pit fiend superiors, ice devils work ceaselessly toward promotion, slaughtering the enemies of the Nine Hells and claiming as many souls as they can for their archdevil masters.</p><p>Resembling a giant bipedal insect, an ice devil has clawed hands and feet, powerful mandibles, and a long tail covered in razor-sharp spikes. Some carry barbed spears whose icy touch can render a foe all but helpless in combat.</p>",
		"size": "large",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "180",
			"rolls": "19",
			"die": "10",
			"mod": "76"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "21",
		"dex": "14",
		"con": "28",
		"int": "18",
		"wis": "15",
		"chr": "18",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "con",
				"mod": "9"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},
			{
				"attribute": "cha",
				"mod": "9"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["cold","fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "12",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "14",
		"traits": [
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil has advantage on saving throws against spells and other magical effects."
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil makes three attacks: one with its bite, one with its claws, and one with its tail."
			},
			{
				"name": "multiattack - variant",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil makes two attacks: one with its spear and one with its tail."
			},
			{
				"name": "ice spear",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "2",
						"reach": "10ft",
						"default": "14",
						"rolls": "2",
						"die": "8",
						"mod": "5",
						"type": "piercing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a creature, it must succeed on a DC 15 CON saving throw, or for 1 minute, its speed is reduced by 10ft; it can take either an action or a bonus action on each of its turns, not both; and it can't take reactions. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5ft",
						"default": "12",
						"rolls": "2",
						"die": "6",
						"mod": "5",
						"type": "piercing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claws",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5ft",
						"default": "10",
						"rolls": "2",
						"die": "4",
						"mod": "5",
						"type": "slashing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10ft",
						"default": "12",
						"rolls": "2",
						"die": "6",
						"mod": "5",
						"type": "bludgeoning"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "wall of ice",
				"perDay": "",
				"recharge": "6",
				"ability": "dex",
				"dc": "17",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil magically forms an opaque wall of ice on a solid surface it can see within 60ft of it. The wall is 1ft thick and up to 30ft long and 10ft high, or it's a hemispherical dome up to 20ft in diameter. When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 DEX saving throw, taking 35(10d6) cold damage on a failed save, or half as much damage on a successful one. The wall lasts for 1 minute or until the devil is incapacitated or dies.</p><p>The wall can be damaged and breached; Each 10ft section has AC 5, 30HP, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 CON saving throw, taking 17(5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.</p>"
			},
			{
				"name": "summon devil - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>An ice devil has a 60% chance of summoning one ice devil. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "imp",
		"pro": "",
		"src": "",
		"desc": "<p>Imps are found throughout the Lower Planes, either running errands for their infernal masters, spying on rivals, or misleading and waylaying mortals. An imp will proudly serve an evil master of any kind, but it can't be relied on to carry out tasks with any speed or efficiency.</p><p>An imp can assume animal form at will, but in its natural state it resembles a diminutive red-skinned humanoid with a barbed tail, small horns, and leathery wings. It strikes while invisible, attacking with its poison stinger.</p><p>Imps can be found in the service to mortal spellcasters, acting as advisors, spies, and familiars. An imp urges its master to acts of evil, knowing the mortal's soul is a prize the imp might ultimately claim. Imps display an unusual loyalty to their masters, and an imp can be quite dangerous if its master is threatened. Some such imps have the following trait. <strong>Familiar.</strong> The imp can enter into a contract to serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the imp senses as long as they are within 1 mile of each other. While the imp is within 10ft of its master, the master shares the imp's Magic Resistance trait. If its master violates the terms of the contract, the imp can end its service as a familiar, ending the telepathic bond.</p>",
		"size": "tiny",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "10",
			"rolls": "3",
			"die": "4",
			"mod": "3"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "6",
		"dex": "17",
		"con": "13",
		"int": "11",
		"wis": "12",
		"chr": "14",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "4"
			},
			{
				"name": "insight",
				"mod": "3"
			},
			{
				"name": "persuasion",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "shapechanger",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The imp can use its action to polymorph into a beast form that resembles a rat (speed 20ft), a raven (20ft, fly 60ft), a spider (20ft, climb 20ft) or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
			},
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the imp's darkvision."
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The imp has advantage on saving throws against spells and other magical effects."
			}
		],
		"actions": [
			{
				"name": "sting (bite in beast form)",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "11",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5ft",
						"default": "5",
						"rolls": "1",
						"die": "4",
						"mod": "3",
						"type": "piercing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "10",
						"rolls": "3",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The target must make on a DC 11 CON saving throw, taking 10(3d6) poison damage on a failed save, or half as much damage on a successful one."
			},
			{
				"name": "invisibility",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "lemure",
		"pro": "",
		"src": "",
		"desc": "<p>A lemure arises when a mortal soul is twisted by evil and banished to the Nine Hells for eternity. The lowest type of devil, lemures are repugnant, shapeless creatures doomed to suffer torment until they are promoted to a higher form of devil, most commonly an imp.</p><p>A lemure resembles a molten mass of flesh with a vaguely humanoid head and torso. A permanent expression of anguish twists across its face, its feeble mouth babbling even though it can't speak.</p>",
		"size": "medium",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "7",
		"armor": ["natural"],
		"hp": {
			"default": "13",
			"rolls": "3",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "walk",
				"distance": "15",
				"notes": ""
			}
		],
		"str": "10",
		"dex": "5",
		"con": "11",
		"int": "1",
		"wis": "11",
		"chr": "3",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["charmed","frightened","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "0",
		"traits": [
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the lemure's darkvision."
			},
			{
				"name": "hellish rejuvenation",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>A lemure that dies in the Nine Hells comes back to life with all its HP in 1d10 days unless it is killed by a good aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water."
			}
		],
		"actions": [
			{
				"name": "fist",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5ft",
						"default": "2",
						"rolls": "1",
						"die": "4",
						"mod": "",
						"type": "bludgeoning"
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "manes",
		"pro": "",
		"src": "",
		"desc": "<p>Souls of evil creatures that descend to the Lower Planes are transformed into manes&mdash;the lowest form of demonkind. These wretched fiends attack any nondemon they see, and they are called to the Material Plane by those seeking to sow death and chaos.</p><p>Orcus, the Prince of Undeath, has the power to transform manes into undead monsters, most often ghouls and shadows. Other demon lords feed on manes, destroying them utterly. Otherwise, killing a manes causes it to dissipate into a cloud of reeking vapor that reforms into another manes after one day.</p>",
		"size": "small",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "9",
		"armor": [""],
		"hp": {
			"default": "9",
			"rolls": "2",
			"die": "6",
			"mod": "2"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			}
		],
		"str": "10",
		"dex": "9",
		"con": "13",
		"int": "3",
		"wis": "8",
		"chr": "4",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold, fire, lightning"],
		"damageImm": ["poison"],
		"conditionImm": ["charmed","frightened","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "9",
		"languages": {
			"speaks": [""],
			"understands": ["abyssal"]
		},
		"challengeRating": ".125",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "claws",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "2",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "2",
						"die": "4",
						"mod": "",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "marilith",
		"pro": "",
		"src": "",
		"desc": "<p>Terrible to behold, a marilith has the lower body of a great serpent and the upper torso of a humanoid female with six arms.</p><p>Wielding a wicked blade in each of its six hands, a marilith is a devastating foe that few can match in battle. These demons possess keen minds and a finely honed sense of tactics, and they are able to lead and unite other demons in common cause. Mariliths are often encountered as captains at the head of a demonic horde, where they embrace any opportunity to rush headlong into battle.</p>",
		"size": "large",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "189",
			"rolls": "18",
			"die": "10",
			"mod": "90"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "18",
		"dex": "20",
		"con": "20",
		"int": "18",
		"wis": "16",
		"chr": "20",
		"savingThrows": [
			{
				"attribute": "str",
				"mod": "9"
			},
			{
				"attribute": "con",
				"mod": "10"
			},
			{
				"attribute": "wis",
				"mod": "8"
			},
			{
				"attribute": "cha",
				"mod": "10"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": ["abyssal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "16",
		"traits": [
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The marilith has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "magic weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The marilith's weapon attacks are magical.</p>"
			},
			{
				"name": "reactive",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The marilith can take one reaction on every turn in a combat.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The marilith makes seven attacks: six with its longswords and one with its tail.</p>"
			},
			{
				"name": "longsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "8",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"mod": "4",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>If the target is medium or smaller, it is grappled (DC 19 STR/DEX). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets.</p>"
			},
			{
				"name": "teleport",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120ft to an unoccupied space it can see.</p>"
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A marilith has a 5O% chance of summoning ld6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or 1 one marilith. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "parry",
				"desc": "<p>The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.</p>"
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "nalfeshnee",
		"pro": "",
		"src": "",
		"desc": "<p>The nalfeshnee is one of the most grotesque demons&mdash;a corpulent mockery of ape and boar standing twice the height of a human, with feathered wings that seem too small for its bloated body. These brutish features conceal a remarkable intelligence and cunning.</p><p>Nalfeshnees are devastating in combat, using their wings to soar above the front ranks and reach vulnerable adversaries that can be dispatched with little effort. From the thick of battle, they telepathically bellow commands to lesser demons, even as they inspire a sense of dread that forces their foes to scatter and run.</p><p>Nalfeshnees feed on hatred and despair, but they crave humanoid flesh above all else. They keep their larders filled with humanoids abducted from the Material Plane, then eat those creatures alive during elaborate feasts. Thinking of themselves as refined and cultured, nalfeshnees employ stained and rusted cutlery when they dine.</p>",
		"size": "large",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "184",
			"rolls": "16",
			"die": "10",
			"mod": "96"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "21",
		"dex": "10",
		"con": "22",
		"int": "19",
		"wis": "12",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "con",
				"mod": "11"
			},
			{
				"attribute": "int",
				"mod": "9"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "7"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["abyssal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "13",
		"traits": [
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The nalfeshnee has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "32",
						"rolls": "5",
						"die": "10",
						"mod": "5",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "3",
						"die": "6",
						"mod": "15",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "horror nimbus",
				"perDay": "",
				"recharge": "5-6",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 WIS saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours.</p>"
			},
			{
				"name": "teleport",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120ft to an unoccupied space it can see.</p>"
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A nalfeshnee has a 5O% chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "needle blight",
		"pro": "",
		"src": "",
		"desc": "<p>In the shadows of a forest, needle blights might be taken at a distance for shuffling, hunched humanoids. Up close, these creatures reveal themselves as horrid plants whose conifer-like needles grow across their bodies in quivering clumps. A needle blight lashes out with these needles or launches them as an aerial assault that can punch through armor and flesh.</p><p>When needle blights detect a threat, they loose a pollen that the wind carries to other needle blights throughout the forest. Alerted to their foes' location, needle blights converge from all sides to drench their roots in blood.</p>",
		"size": "medium",
		"type": "plant",
		"class": "blights",
		"tag": "blight",
		"alignment": "neutral evil",
		"ac": "12",
		"armor": ["natural"],
		"hp": {
			"default": "11",
			"rolls": "2",
			"die": "8",
			"mod": "2"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "12",
		"dex": "12",
		"con": "13",
		"int": "4",
		"wis": "8",
		"chr": "3",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": ["blinded","deafened"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": "",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "9",
		"languages": {
			"speaks": ["Common (can't speak)"],
			"understands": [""]
		},
		"challengeRating": ".25",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "claws",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "2",
						"die": "4",
						"mod": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "needles",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30/60",
						"default": "8",
						"rolls": "2",
						"die": "6",
						"mod": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "pit fiend",
		"pro": "",
		"src": "",
		"desc": "<p>The undisputed lords of most other devils, pit fiends attend the archdukes and archduchesses of the Nine Hells and carry out their wishes. These mighty devils are the generals of the Nine Hells, leading its infernal legions into battle.</p><p>With an inflated sense of superiority and entitlement, pit fiends form a grotesque aristocracy in the infernal realm. These domineering and manipulative tyrants conspire to eliminate anything that stands between them and their desires, even as they negotiate the convoluted and dangerous politics of the Nine Hells.</p><p>A pit fiend is a hulking monster with a whip-like tail and enormous wings that it wraps around itself like a cloak. Armored scales cover its body, and its fanged maw drips a venom that can lay the mightiest mortal creatures low. Fearless in battle, a pit fiend takes on the most powerful foes in single combat, demonstrating its supremacy and an arrogance that prevents it from acknowledging any chance of defeat.</p>",
		"size": "large",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "300",
			"rolls": "24",
			"die": "10",
			"mod": "168"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "26",
		"dex": "14",
		"con": "24",
		"int": "22",
		"wis": "24",
		"chr": "18",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "8"
			},
			{
				"attribute": "con",
				"mod": "13"
			},
			{
				"attribute": "wis",
				"mod": "10"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["infernal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "20",
		"traits": [
			{
				"name": "fear aura",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Any creature hostile to the pit fiend that starts its turn within 20ft of the pit fiend must make a DC 21 WIS saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The pit fiend has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "magic weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The pit fiend's weapon attacks are magical.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "21",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["detect magic","fireball"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "3",
						"span": "day",
						"titles": ["hold monster","wall of fire"],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "21",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "22",
						"rolls": "4",
						"die": "6",
						"mod": "8",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "21",
						"rolls": "6",
						"die": "6",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The target must succeed on a DC 21 CON saving throw or become poisoned. While poisoned in this way, the target can't regain HP, and it takes 21(6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "8",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "mace",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "21",
						"rolls": "6",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			},{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "24",
						"rolls": "3",
						"die": "10",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},{
				"name": "summon devil - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A pit fiend summons 2d4 bearded devils, 1d4 barbed devils, or one erinyes with no chance of failure. A summoned devil appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "planetar",
		"pro": "",
		"src": "",
		"desc": "<p>Planetars act as the weapons of the gods they serve, presenting a tangible representation of their deities' might. A planetar can call down rain to relieve a drought, or can loose an insect plague to devour crops. A planetar's celestial ears detect every falsehood, and its radiant eyes see through every deception.</p><p>Planetars are muscular and hairless and have opalescent green skin and white-feathered wings. They tower over most humanoids, brandishing immense swords with grace. Sometimes sent to aid powerful mortals on important tasks for good, planetars are especially fond of missions that involve battling fiends.</p>",
		"size": "large",
		"type": "celestial",
		"class": "angels",
		"tag": "angel",
		"alignment": "lawful good",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "100",
			"rolls": "16",
			"die": "10",
			"mod": "112"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "120",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "24",
		"dex": "20",
		"con": "24",
		"int": "19",
		"wis": "22",
		"chr": "25",
		"savingThrows": [
			{
				"ability": "con",
				"mod": "12"
			},
			{
				"ability": "wis",
				"mod": "11"
			},
			{
				"ability": "cha",
				"mod": "12"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "11"
			}
		],
		"damageVuln": [""],
		"damageRes": ["radiant","bludgeoning","piercing","slashing"],
		"damageImm": [""],
		"conditionImm": ["charmed","exhaustion","frightened"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "21",
		"languages": {
			"speaks": ["all","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "16",
		"traits": [
			{
				"name": "angelic weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack).</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "20",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["detect evil and good","invisibility (self)"]
					},
					{
						"level": "",
						"rate": "3",
						"span": "day",
						"titles": ["blade barrier","dispel evil and good","flame strike","raise dead"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["commune","control weather","insect plague"],
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The planetar has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The planetar makes two melee attacks.</p>"
			},
			{
				"name": "greatsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "12",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "21",
						"rolls": "4",
						"die": "6",
						"mod": "7",
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
						"mod": "",
						"damageType": "radiant",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "healing touch",
				"perDay": "4",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The planetar touches another creature. The target magically regains 30(6d8+3) HP and is freed from any curse, disease, poison, blindness, or deafness.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "plesiosaurus",
		"pro": "",
		"src": "",
		"desc": "<p>A plesiosaurus is a marine dinosaur whose compact body is driven by powerful flippers. Predatory and aggressive, it attacks any creature it encounters. Its flexible neck accounts for a third of its total length, letting it twist in any direction to deliver a powerful bite.</p>",
		"size": "large",
		"type": "beast",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "68",
			"rolls": "8",
			"die": "10",
			"mod": "24"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "50",
				"notes": ""
			}
		],
		"str": "18",
		"dex": "15",
		"con": "16",
		"int": "2",
		"wis": "5",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "3"
			},
			{
				"name": "stealth",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "13",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "hold breath",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The plesiosaurus can hold its breath for 1 hour.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "14",
						"rolls": "3",
						"die": "6",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "pteranodon",
		"pro": "",
		"src": "",
		"desc": "<p>These flying reptiles have wingspans of 15 to 20ft and typically dive for small marine prey, though they are opportunists and will attack any creature that appears edible. A pteranodon has no teeth, instead using its sharp beak to stab prey too large to swallow with one gulp.</p>",
		"size": "medium",
		"type": "beast",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "13",
			"rolls": "3",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "10",
				"notes": ""
			}
		],
		"str": "12",
		"dex": "15",
		"con": "10",
		"int": "2",
		"wis": "5",
		"chr": "9",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "1"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": ".25",
		"traits": [
			{
				"name": "flyby",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The pteranodon doesn't provoke an opportunity attack when it flies out of an enemy's reach.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "6",
						"rolls": "2",
						"die": "4",
						"mod": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "quasit",
		"pro": "",
		"src": "",
		"desc": "<p>Quasits infest the Lower Planes. Physically weak, they keep to the shadows to plot mischief and wickedness. More powerful demons use quasits as spies and messengers when they aren't devouring them or pulling them apart to pass the time.</p><p>A quasit can assume animal forms, but in its true form it looks like a 2ft-tall green humanoid with a barbed tail and horns. The quasit has clawed fingers and toes, and these claws can deliver an irritating poison. It prefers to be invisible when it attacks.</p>",
		"size": "small",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "13",
		"armor": [""],
		"hp": {
			"default": "7",
			"rolls": "3",
			"die": "4",
			"mod": ""
		},
		"speed": [
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "5",
		"dex": "17",
		"con": "10",
		"int": "7",
		"wis": "10",
		"chr": "10",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
			"speaks": ["abyssal","common"],
			"understands": [""]
		},
		"challengeRating": "1",
		"traits": [
			{
				"name": "shapechanger",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The quasit can use its action to polymorph into a beast form that resembles a bat (walk 10ft, fly 40ft), a centipede (walk 40ft, climb 40ft), or a toad (walk 40ft, swim 40ft), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The quasit has advantage on saving throws against spells and other magical effects.</p>"
			},
			{
				"name": "familiar",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10ft of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond.</p>"
			}
		],
		"actions": [
			{
				"name": "claws (bite in beast form)",
				"perDay": "",
				"recharge": "",
				"ability": "con",
				"dc": "10",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "4",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "5",
						"rolls": "2",
						"die": "4",
						"mod": "",
						"damageType": "poison",
						"notes": "Lasts 1 minute"
					}
				],
				"desc": "<p>The target must succeed on a DC 10 CON saving throw or take 5(2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>"
			},
			{
				"name": "scare",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>One creature of the quasit's choice within 20ft of it must succeed on a DC 10 WIS saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.</p>"
			},
			{
				"name": "invisibility",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell) . Any equipment the quasit wears or carries is invisible with it.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "red dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>The most covetous of the true dragons, red dragons tirelessly seek to increase their treasure hoards. They are exceptionally vain, even for dragons, and their conceit is reflected in their proud bearing and their disdain for other creatures.</p><p>The odor of sulfur and pumice surrounds a red dragon, whose swept-back horns and spinal frill define its silhouette. Its beaked snout vents smoke at all times, and its eyes dance with flame when it is angry. Its wings are the longest of any chromatic dragon, and have a blue-black tint along the trailing edge that resembles metal burned blue by fire.</p><p>The scales of a red dragon wyrmling are a bright glossy scarlet, turning a dull, deeper red and becoming as thick and strong as metal as the dragon ages. Its pupils also fade as it ages, and the oldest red dragons have eyes that resemble molten lava orbs.</p><p><strong>Mountain Masters.</strong> Red dragons prefer mountainous terrain, badlands, and any other locale where they can perch high and survey their domain. Their preference for mountains brings them into conflict with the hilldwelling copper dragons from time to time.</p><p><strong>Arrogant Tyrants.</strong> Red dragons fly into destructive rages and act on impulse when angered. They are so ferocious and vengeful that they are regarded as the archetypical evil dragon by many cultures.</p><p>No other dragon comes close to the arrogance of the red dragon. These creatures see themselves as kings and emperors, and view the rest of dragon kind as inferior. Believing that they are chosen by Tiamat to rule in her name, red dragons consider the world and every creature in it as theirs to command.</p><p><strong>Status and Slaves.</strong> Red dragons are fiercely territorial and isolationist. However, they yearn to know about events in the wider world, and they make use of lesser creatures as informants, messengers, and spies. They are most interested in news about other red dragons, with which they compete constantly for status.</p><p>When it requires servants, a red dragon demands fealty from chaotic evil humanoids. If allegiance isn't forthcoming, it slaughters a tribe's leaders and claims lordship over the survivors. Creatures serving a red dragon live in constant terror of being roasted and eaten for displeasing it. They spend most of their time fawning over the creature in an attempt to stay alive.</p><p><strong>Obsessive Collectors.</strong> Red dragons value wealth above all else, and their treasure hoards are legendary. They covet anything of monetary value, and can often judge the worth of a bauble to within a copper piece at a glance. A red dragon has a special affection for treasure claimed from powerful enemies it has slain, exhibiting that treasure to prove its superiority.</p><p>A red dragon knows the value and provenance of every item in its hoard, along with each item's exact location. It might notice the absence of a single coin, igniting its rage as it tracks down and slays the thief without mercy. If the thief can't be found, the dragon goes on a rampage, laying waste to towns and villages in an attempt to sate its wrath.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "22",
		"armor": ["natural"],
		"hp": {
			"default": "564",
			"rolls": "28",
			"die": "20",
			"mod": "252"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "30",
		"dex": "10",
		"con": "29",
		"int": "18",
		"wis": "15",
		"chr": "23",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "con",
				"mod": "16"
			},
			{
				"attribute": "wis",
				"mod": "9"
			},
			{
				"attribute": "cha",
				"mod": "13"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "16"
			},
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "26",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "24",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","conjure elemental","finger of death","fire storm","incendiary cloud"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 6 spells at level 8 or below. It has a +13 bonus to hit and a DC 21 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "21",
						"rolls": "2",
						"die": "10",
						"mod": "10",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "14",
						"rolls": "4",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "6",
						"mod": "10",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "19",
						"rolls": "2",
						"die": "8",
						"mod": "10",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "21",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 21 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "24",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "91",
						"rolls": "26",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 90ft cone. Each creature in that area must make a DC 24 DEX saving throw, taking 91(26d6) fire damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 25 DEX saving throw or take 17(2d6+10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Red dragons lair in high mountains or hills, dwelling in caverns under snow-capped peaks, or within the deep halls of abandoned mines and dwarven strongholds. Caves with volcanic or geothermal activity are the most highly prized red dragon lairs, creating hazards that hinder intruders and letting searing heat and volcanic gases wash over a dragon as it sleeps.</p><p>With its hoard well protected deep within the lair, a red dragon spends as much of its time outside the mountain as in it. For a red dragon, the great heights of the world are the throne from which it can look out to survey all it controls&mdash;and the wider world it seeks to control.</p><p>Throughout the lair complex, servants erect monuments to the dragon's power, telling the grim story of its life, the enemies it has slain, and the nations it has conquered.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Magma erupts from a point on the ground the dragon can see within 120ft of it, creating a 20ft-high, 5ft-radius geyser. Each creature in the geyser's area must make a DC 15 DEX saving throw, taking 21(6d6) fire damage on a failed save, or half as much damage on a successful one.</p>",
				"<p>A tremor shakes the lair in a 60ft-radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 DEX saving throw or be knocked prone.</p>",
				"<p>Volcanic gases form a cloud in a 20ft-radius sphere centered on a point the dragon can see within 120ft of it. The sphere spreads a round corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 CON saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Small earthquakes are common within 6 miles of the dragon's lair.</p>",
				"<p>Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur.</p>",
				"<p>Rocky fissures within 1 mile of the dragon's lair form portals to the Elemental Plane of Fire, allowing creatures of elemental fire into the world to dwell nearby.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "red dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>The most covetous of the true dragons, red dragons tirelessly seek to increase their treasure hoards. They are exceptionally vain, even for dragons, and their conceit is reflected in their proud bearing and their disdain for other creatures.</p><p>The odor of sulfur and pumice surrounds a red dragon, whose swept-back horns and spinal frill define its silhouette. Its beaked snout vents smoke at all times, and its eyes dance with flame when it is angry. Its wings are the longest of any chromatic dragon, and have a blue-black tint along the trailing edge that resembles metal burned blue by fire.</p><p>The scales of a red dragon wyrmling are a bright glossy scarlet, turning a dull, deeper red and becoming as thick and strong as metal as the dragon ages. Its pupils also fade as it ages, and the oldest red dragons have eyes that resemble molten lava orbs.</p><p><strong>Mountain Masters.</strong> Red dragons prefer mountainous terrain, badlands, and any other locale where they can perch high and survey their domain. Their preference for mountains brings them into conflict with the hilldwelling copper dragons from time to time.</p><p><strong>Arrogant Tyrants.</strong> Red dragons fly into destructive rages and act on impulse when angered. They are so ferocious and vengeful that they are regarded as the archetypical evil dragon by many cultures.</p><p>No other dragon comes close to the arrogance of the red dragon. These creatures see themselves as kings and emperors, and view the rest of dragon kind as inferior. Believing that they are chosen by Tiamat to rule in her name, red dragons consider the world and every creature in it as theirs to command.</p><p><strong>Status and Slaves.</strong> Red dragons are fiercely territorial and isolationist. However, they yearn to know about events in the wider world, and they make use of lesser creatures as informants, messengers, and spies. They are most interested in news about other red dragons, with which they compete constantly for status.</p><p>When it requires servants, a red dragon demands fealty from chaotic evil humanoids. If allegiance isn't forthcoming, it slaughters a tribe's leaders and claims lordship over the survivors. Creatures serving a red dragon live in constant terror of being roasted and eaten for displeasing it. They spend most of their time fawning over the creature in an attempt to stay alive.</p><p><strong>Obsessive Collectors.</strong> Red dragons value wealth above all else, and their treasure hoards are legendary. They covet anything of monetary value, and can often judge the worth of a bauble to within a copper piece at a glance. A red dragon has a special affection for treasure claimed from powerful enemies it has slain, exhibiting that treasure to prove its superiority.</p><p>A red dragon knows the value and provenance of every item in its hoard, along with each item's exact location. It might notice the absence of a single coin, igniting its rage as it tracks down and slays the thief without mercy. If the thief can't be found, the dragon goes on a rampage, laying waste to towns and villages in an attempt to sate its wrath.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "256",
			"rolls": "19",
			"die": "12",
			"mod": "133"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "27",
		"dex": "10",
		"con": "25",
		"int": "16",
		"wis": "13",
		"chr": "21",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "6"
			},
			{
				"attribute": "con",
				"mod": "13"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},
			{
				"attribute": "cha",
				"mod": "11"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "13"
			},
			{
				"name": "stealth",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "23",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "17",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "11",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "19",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command","fireball","wall of fire","conjure elemental"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 5 spells at level 5 or below. It has a +11 bonus to hit and a DC 19 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "19",
						"rolls": "2",
						"die": "10",
						"mod": "8",
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
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "17",
						"rolls": "2",
						"die": "8",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "19",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 19 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "21",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "63",
						"rolls": "18",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 60ft cone. Each creature in that area must make a DC 21 DEX saving throw, taking 63(18d6) fire damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 22 DEX saving throw or take 15(2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Red dragons lair in high mountains or hills, dwelling in caverns under snow-capped peaks, or within the deep halls of abandoned mines and dwarven strongholds. Caves with volcanic or geothermal activity are the most highly prized red dragon lairs, creating hazards that hinder intruders and letting searing heat and volcanic gases wash over a dragon as it sleeps.</p><p>With its hoard well protected deep within the lair, a red dragon spends as much of its time outside the mountain as in it. For a red dragon, the great heights of the world are the throne from which it can look out to survey all it controls&mdash;and the wider world it seeks to control.</p><p>Throughout the lair complex, servants erect monuments to the dragon's power, telling the grim story of its life, the enemies it has slain, and the nations it has conquered.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Magma erupts from a point on the ground the dragon can see within 120ft of it, creating a 20ft-high, 5ft-radius geyser. Each creature in the geyser's area must make a DC 15 DEX saving throw, taking 21(6d6) fire damage on a failed save, or half as much damage on a successful one.</p>",
				"<p>A tremor shakes the lair in a 60ft-radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 DEX saving throw or be knocked prone.</p>",
				"<p>Volcanic gases form a cloud in a 20ft-radius sphere centered on a point the dragon can see within 120ft of it. The sphere spreads a round corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 CON saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Small earthquakes are common within 6 miles of the dragon's lair.</p>",
				"<p>Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur.</p>",
				"<p>Rocky fissures within 1 mile of the dragon's lair form portals to the Elemental Plane of Fire, allowing creatures of elemental fire into the world to dwell nearby.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "red dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>The most covetous of the true dragons, red dragons tirelessly seek to increase their treasure hoards. They are exceptionally vain, even for dragons, and their conceit is reflected in their proud bearing and their disdain for other creatures.</p><p>The odor of sulfur and pumice surrounds a red dragon, whose swept-back horns and spinal frill define its silhouette. Its beaked snout vents smoke at all times, and its eyes dance with flame when it is angry. Its wings are the longest of any chromatic dragon, and have a blue-black tint along the trailing edge that resembles metal burned blue by fire.</p><p>The scales of a red dragon wyrmling are a bright glossy scarlet, turning a dull, deeper red and becoming as thick and strong as metal as the dragon ages. Its pupils also fade as it ages, and the oldest red dragons have eyes that resemble molten lava orbs.</p><p><strong>Mountain Masters.</strong> Red dragons prefer mountainous terrain, badlands, and any other locale where they can perch high and survey their domain. Their preference for mountains brings them into conflict with the hilldwelling copper dragons from time to time.</p><p><strong>Arrogant Tyrants.</strong> Red dragons fly into destructive rages and act on impulse when angered. They are so ferocious and vengeful that they are regarded as the archetypical evil dragon by many cultures.</p><p>No other dragon comes close to the arrogance of the red dragon. These creatures see themselves as kings and emperors, and view the rest of dragon kind as inferior. Believing that they are chosen by Tiamat to rule in her name, red dragons consider the world and every creature in it as theirs to command.</p><p><strong>Status and Slaves.</strong> Red dragons are fiercely territorial and isolationist. However, they yearn to know about events in the wider world, and they make use of lesser creatures as informants, messengers, and spies. They are most interested in news about other red dragons, with which they compete constantly for status.</p><p>When it requires servants, a red dragon demands fealty from chaotic evil humanoids. If allegiance isn't forthcoming, it slaughters a tribe's leaders and claims lordship over the survivors. Creatures serving a red dragon live in constant terror of being roasted and eaten for displeasing it. They spend most of their time fawning over the creature in an attempt to stay alive.</p><p><strong>Obsessive Collectors.</strong> Red dragons value wealth above all else, and their treasure hoards are legendary. They covet anything of monetary value, and can often judge the worth of a bauble to within a copper piece at a glance. A red dragon has a special affection for treasure claimed from powerful enemies it has slain, exhibiting that treasure to prove its superiority.</p><p>A red dragon knows the value and provenance of every item in its hoard, along with each item's exact location. It might notice the absence of a single coin, igniting its rage as it tracks down and slays the thief without mercy. If the thief can't be found, the dragon goes on a rampage, laying waste to towns and villages in an attempt to sate its wrath.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "75",
			"rolls": "10",
			"die": "8",
			"mod": "30"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "19",
		"dex": "10",
		"con": "17",
		"int": "12",
		"wis": "11",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "2"
			},
			{
				"attribute": "con",
				"mod": "5"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "2"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
			"speaks": ["draconic"],
			"understands": [""]
		},
		"challengeRating": "4",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "4",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "12",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 1 or below. It has a +4 bonus to hit and a DC 12 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "1",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "13",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "",
						"default": "24",
						"rolls": "7",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 15ft cone. Each creature in that area must make a DC 13 DEX saving throw, taking 24(7d6) fire damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "red dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>The most covetous of the true dragons, red dragons tirelessly seek to increase their treasure hoards. They are exceptionally vain, even for dragons, and their conceit is reflected in their proud bearing and their disdain for other creatures.</p><p>The odor of sulfur and pumice surrounds a red dragon, whose swept-back horns and spinal frill define its silhouette. Its beaked snout vents smoke at all times, and its eyes dance with flame when it is angry. Its wings are the longest of any chromatic dragon, and have a blue-black tint along the trailing edge that resembles metal burned blue by fire.</p><p>The scales of a red dragon wyrmling are a bright glossy scarlet, turning a dull, deeper red and becoming as thick and strong as metal as the dragon ages. Its pupils also fade as it ages, and the oldest red dragons have eyes that resemble molten lava orbs.</p><p><strong>Mountain Masters.</strong> Red dragons prefer mountainous terrain, badlands, and any other locale where they can perch high and survey their domain. Their preference for mountains brings them into conflict with the hilldwelling copper dragons from time to time.</p><p><strong>Arrogant Tyrants.</strong> Red dragons fly into destructive rages and act on impulse when angered. They are so ferocious and vengeful that they are regarded as the archetypical evil dragon by many cultures.</p><p>No other dragon comes close to the arrogance of the red dragon. These creatures see themselves as kings and emperors, and view the rest of dragon kind as inferior. Believing that they are chosen by Tiamat to rule in her name, red dragons consider the world and every creature in it as theirs to command.</p><p><strong>Status and Slaves.</strong> Red dragons are fiercely territorial and isolationist. However, they yearn to know about events in the wider world, and they make use of lesser creatures as informants, messengers, and spies. They are most interested in news about other red dragons, with which they compete constantly for status.</p><p>When it requires servants, a red dragon demands fealty from chaotic evil humanoids. If allegiance isn't forthcoming, it slaughters a tribe's leaders and claims lordship over the survivors. Creatures serving a red dragon live in constant terror of being roasted and eaten for displeasing it. They spend most of their time fawning over the creature in an attempt to stay alive.</p><p><strong>Obsessive Collectors.</strong> Red dragons value wealth above all else, and their treasure hoards are legendary. They covet anything of monetary value, and can often judge the worth of a bauble to within a copper piece at a glance. A red dragon has a special affection for treasure claimed from powerful enemies it has slain, exhibiting that treasure to prove its superiority.</p><p>A red dragon knows the value and provenance of every item in its hoard, along with each item's exact location. It might notice the absence of a single coin, igniting its rage as it tracks down and slays the thief without mercy. If the thief can't be found, the dragon goes on a rampage, laying waste to towns and villages in an attempt to sate its wrath.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "178",
			"rolls": "17",
			"die": "10",
			"mod": "85"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "23",
		"dex": "10",
		"con": "21",
		"int": "14",
		"wis": "11",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "4"
			},
			{
				"attribute": "con",
				"mod": "9"
			},
			{
				"attribute": "wis",
				"mod": "4"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "8"
			},
			{
				"name": "stealth",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "18",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "10",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "6",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 3 or below. It has a +6 bonus to hit and a DC 14 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fire breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "17",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "56",
						"rolls": "16",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 30ft cone. Each creature in that area must make a DC 17 DEX saving throw, taking 56(16d6) fire damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "rug of smothering",
		"pro": "",
		"src": "",
		"desc": "<p>Would-be thieves and careless heroes arrive at the doorsteps of an enemy's abode, eyes and ears alert for traps, only to end their quest prematurely as the rugs beneath their feet animate and smother them to death. A rug of smothering can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasant's hovel. Creatures with the ability to sense magic detect the rug's false magical aura.</p><p>In some cases, a rug of smothering is disguised as a carpet of flying or another beneficial magic item. However, a character who stands or sits on the rug, or who attempts to utter a word of command, is quickly trapped as the rug of smothering rolls itself tightly around its victim.</p>",
		"size": "large",
		"type": "construct",
		"class": "animated <objects></objects>",
		"tag": "animated",
		"alignment": "unaligned",
		"ac": "12",
		"armor": [""],
		"hp": {
			"default": "33",
			"rolls": "6",
			"die": "10",
			"mod": ""
		},
		"speed": [
			{
				"type": "walk",
				"distance": "10",
				"notes": ""
			}
		],
		"str": "17",
		"dex": "14",
		"con": "10",
		"int": "1",
		"wis": "3",
		"chr": "1",
		"savingThrows": [
			{
				"ability": "",
				"mod": "" 
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["poison","psychic"],
		"conditionImm": ["blinded","charmed","deafened","frightened","paralyzed","petrified","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": "",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "6",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "antimagic susceptibility",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The rug is incapacitated while in the area of an anti-magic field. If targeted by dispel magic, the rug must succeed on a CON saving throw against the caster's spell save DC or fall unconscious for 1 minute.</p>"
			},
			{
				"name": "damage transfer",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.</p>"
			},
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the rug remains motionless, it is indistinguishable from a normal rug.</p>"
			}
		],
		"actions": [
			{
				"name": "smother",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "grappled",
						"notes": ""
					}
				],
				"desc": "<p>Until this grapple ends (escape DC 13 STR/DEX), the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10(2d6+3) bludgeoning damage.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "shadow demon",
		"pro": "",
		"src": "",
		"desc": "<p>When a demon's body is destroyed but the fiend is prevented from reforming in the Abyss, its essence sometimes takes on a vague physical form. These shadow demons exist outside the normal abyssal hierarchy, since their creation results most often from mortal magic, not from transformation or promotion.</p><p>Shadow demons all but disappear in the darkness, and they can creep about without making a sound. A shadow demon uses its insubstantial claws to feast on its victim's fears, to taste its memories, and drink in its doubts. Bright light harries this fiend and shows its distinct shape, resolving it from a blur of darkness to a winged humanoid creature whose lower body trails off into nothing, and whose claws rend a victim's mind.</p><p><strong>Shadowy Nature.</strong> A shadow demon doesn't require air, food, drink, or sleep.</p>",
		"size": "medium",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "13",
		"armor": [""],
		"hp": {
			"default": "66",
			"rolls": "12",
			"die": "8",
			"mod": "12"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "1",
		"dex": "17",
		"con": "12",
		"int": "14",
		"wis": "13",
		"chr": "14",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "cha",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": ["radiant"],
		"damageRes": ["acid","fire","necrotic","thunder","bludgeoning","piercing","slashing"],
		"damageImm": ["cold","lightning","poison"],
		"conditionImm": ["exhaustion","grappled","paralyzed","petrified","poisoned","prone","restrained"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
			"speaks": ["abyssal","telepathy 120ft"],
			"understands": [""]
		},
		"challengeRating": "4",
		"traits": [
			{
				"name": "incorporeal movement",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The demon can move through other creatures and objects as if they were difficult terrain. It takes 5(1d10) force damage if it ends its turn inside an object.</p>"
			},
			{
				"name": "light sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in bright light, the demon has disadvantage on attack rolls, as well as on WIS(Perception) checks that rely on sight.</p>"
			},
			{
				"name": "shadow stealth",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in dim light or darkness, the demon can take the Hide action as a bonus action.</p>"
			}
		],
		"actions": [
			{
				"name": "claws",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "5",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"mod": "3",
						"damageType": "psychic",
						"notes": ""
					}
				],
				"desc": "<p>If the demon has advantage on the attack roll it does 17(4d6+3) psychic damage.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "shadow dragon",
		"pro": "",
		"src": "",
		"desc": "<p>Shadow dragons are true dragons that were either born in the Shadowfell or transformed by years spent within its dismal confines. Some shadow dragons embrace the Shadowfell for its bleak landscapes and desolation.</p><p>Others seek to return to the Material Plane, hungry to spread the darkness and evil of the Plane of Shadow.</p><p><strong>Dark Portals.</strong> Portals to the Shadowfell manifest in forlorn places and the deep gloom of subterranean caverns. The dragons that lair in such places often discover these portals and find themselves transported to a new realm. Ancient dragons that sleep in their lairs for months or years at a time might find themselves spirited away, never knowing that a portal has formed without their knowledge as they dream.</p><p><strong>Recast in Shadow.</strong> The transformation to a shadow dragon happens over a period of years, during which time a dragon's scales lose their luster and fade to a charcoal hue. Its leathery wings become translucent, its eyes paling to pools of opalescent gray. Shadow dragons find sunlight abhorrent, and they are weaker in bright light than they are in darkness. Darkness makes the dragon fade to a spectral shadow of its former self.</p><p>The magical nature of dragons holds an attraction for the Shadowfell, which seems somehow to crave the might and majesty of these great reptiles. The Shadowfell also has a dispiriting effect on its denizens, such that the longer a creature remains on the plane, the more it accepts the plane's malaise. As months and years pass for a dragon on the Shadowfell, it becomes aware of the transformation being wrought upon it, and yet can do nothing to prevent it.</p><p><strong>Back in the World.</strong> A shadow dragon is so suffused with the power of the Shadowfell that even a return to the Material Plane can't undo its transformation. Some shadow dragons attempt to lure other creatures from the mortal realm back to the Shadowfell to keep them company, at least until they tire of their guests and devour them. Others are happy to leave the Shadowfell behind forever, understanding that treasure and power are easier to come by in the Material Plane.</p><p>Only a true dragon can transform into a shadow dragon, and only if it is born in the Shadowfell or remains there for several years. A dracolich can't be turned into a shadow dragon, since it loses its draconic nature when it becomes undead.</p><p>When a dragon becomes a shadow dragon, it retains its statistics except as described below. The shadow dragon might retain or lose any or all of its lair actions or inherit new ones, as the DM sees fit.</p><p>These stats are for a young red shadow dragon</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "178",
			"rolls": "17",
			"die": "10",
			"mod": "85"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "23",
		"dex": "10",
		"con": "21",
		"int": "14",
		"wis": "11",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "4"
			},
			{
				"attribute": "con",
				"mod": "9"
			},
			{
				"attribute": "wis",
				"mod": "4"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "8"
			},
			{
				"name": "stealth",
				"mod": "8"
			}
		],
		"damageVuln": [""],
		"damageRes": ["necrotic"],
		"damageImm": ["fire"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "18",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "13",
		"traits": [
			{
				"name": "living shadow",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic or radiant.</p>"
			},
			{
				"name": "shadow stealth",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in dim light or darkness, the dragon can take the Hide action as a bonus action.</p>"
			},
			{
				"name": "sunlight sensitivity",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While in sunlight, the dragon has disadvantage on attack rolls, as well as on WIS(Perception) checks that rely on sight.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "shadow breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "dex",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "56",
						"rolls": "16",
						"die": "6",
						"mod": "",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales shadowy fire in a 30ft cone. Each creature in that area must make a DC 18 DEX saving throw, taking 56(16d6) necrotic damage on a failed save, or half as much damage on a successful one. A humanoid reduced to 0HP by this damage dies, and an undead shadow rises from its corpse and acts immediately after the dragon in the initiative count. The shadow is under the dragon's control.</p> "
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "shrieker",
		"pro": "",
		"src": "",
		"desc": "<p>A shrieker is a human-sized mushroom that emits a piercing screech to drive off creatures that disturb it. Other creatures use the fungi as an alarm to signal the approach of prey, and various intelligent races of the Underdark cultivate shriekers on the outskirts of their communities to discourage trespassers.</p>",
		"size": "medium",
		"type": "plant",
		"class": "fungi",
		"tag": "",
		"alignment": "unaligned",
		"ac": "5",
		"armor": [""],
		"hp": {
			"default": "13",
			"rolls": "3",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "walk",
				"distance": "0",
				"notes": ""
			}
		],
		"str": "1",
		"dex": "1",
		"con": "10",
		"int": "1",
		"wis": "3",
		"chr": "1",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": ["blinded","deafened","frightened"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "30",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "6",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": "0",
		"traits": [
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the shrieker remains motionless, it is indistinguishable from an ordinary fungus.</p>"
			},
			{
				"name": "shriek",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>When bright light or a creature is within 30ft of the shrieker, it emits a shriek audible within 300ft of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward.</p>"
			}
		],
		"actions": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "silver dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>The friendliest and most social of the metallic dragons, silver dragons cheerfully assist good creatures in need.</p><p>A silver dragon shimmers as if sculpted from pure metal, its face given a noble cast by its high eyes and sweeping beard-like chin spikes. A spiny frill rises high over its head, tracing down its neck to the tip of its tail. A silver wyrmling's scales are blue-gray with silver highlights. As the dragon approaches adulthood, its color gradually brightens until its individual scales are barely visible. As a silver dragon grows older, its pupils fade until its eyes resemble orbs of mercury.</p><p><strong>Dragons of Virtue.</strong> Silver dragons believe that living a moral life involves doing good deeds and ensuring that one's actions cause no undeserved harm to other sentient beings. They don't take it upon themselves to root out evil, as gold and bronze dragons do, but they will gladly oppose creatures that dare to commit evil acts or harm the innocent.</p><p><strong>Friends of the Small Races.</strong> Silver dragons enjoy the company of other silver dragons. Their only true friendships outside their own kin arise in the company of humanoids, and many silver dragons spend as much time in humanoid form as they do in draconic form. A silver dragon adopts a benign humanoid persona such as a kindly old sage or a young wanderer, and it often has mortal companions with whom it develops strong friendships.</p><p>Silver dragons must step away from their humanoid lives on a regular basis, returning to their true forms to mate and rear offspring, or to tend to their hoards and personal affairs. Because many lose track of time while away, they sometimes return to find that their companions have grown old or died. Silver dragons often end up befriending several generations of humanoids within a single family as a result.</p><p><strong>Respect for Humanity.</strong> Silver dragons befriend humanoids of all races, but shorter-lived races such as humans spark their curiosity in a way the longer-lived elves and dwarves don't. Humans have a drive and zest for life that silver dragons find fascinating.</p><p><strong>Hoarding History.</strong> Silver dragons love to possess relics of humanoid history. This includes the great piles of coins they covet, minted by current and fallen humanoid empires, as well as art objects and fine jewelry crafted by numerous races. Other treasures that make up their hoards can include intact ships, the remains of kings and queens, thrones, the crown jewels of ancient empires, inventions and contraptions, and monoliths carried from the ruins of fallen cities.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "22",
		"armor": ["natural"],
		"hp": {
			"default": "487",
			"rolls": "25",
			"die": "20",
			"mod": "225"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "30",
		"dex": "10",
		"con": "29",
		"int": "18",
		"wis": "15",
		"chr": "23",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "7"
			},
			{
				"attribute": "con",
				"mod": "16"
			},
			{
				"attribute": "wis",
				"mod": "9"
			},
			{
				"attribute": "cha",
				"mod": "13"
			}
		],
		"skills": [
			{
				"name": "arcana",
				"mod": "11"
			},
			{
				"name": "history",
				"mod": "11"
			},
			{
				"name": "perception",
				"mod": "16"
			},
			
			{
				"name": "stealth",
				"mod": "7"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["cold"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "26",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "23",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "13",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "21",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["thaumaturgy","dancing lights","charm person","silence","ice storm","reincarnate"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 6 spells no higher than level 7. It has a +13 bonus to hit and a DC 21 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "21",
						"rolls": "2",
						"die": "10",
						"mod": "19",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "6",
						"mod": "10",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "17",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "19",
						"rolls": "2",
						"die": "8",
						"mod": "10",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "XX_DC_XX",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC XX_DC_XX WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "cold breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "24",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "67",
						"rolls": "15",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales an icy blast in a 90ft cone. Each creature in that line must make a DC 24 CON saving throw, taking 67(15d8) cold damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "paralyzing breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "24",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales paralyzing gas in a 90ft cone. Each creature in that area mu st succeed on a DC 24 CON saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, HP, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, INT, WIS, and CHA scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon ma kes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 25 DEX saving throw or take 17(2d6+10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Silver dragons dwell among the clouds, making their lairs on secluded cold mountain peaks. Though many are comfortable in natural cavern complexes or abandoned mines, silver dragons covet the lost outposts of humanoid civilization. An abandoned mountaintop citadel or a remote tower raised by a long-dead wizard is the sort of lair that every silver dragon dreams of.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The dragon creates fog as if it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round.</p>",
				"<p>A blistering wind blows through the lair near the dragon. Each creature within 120 of the dragon must succeed on a DC 15 CON saving throw or take 5(1d10) cold damage. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames, such as lanterns, have a 50% chance of being extinguished.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell.</p>",
				"<p>Within 1 mile of the lair, winds buoy non-evil creatures that fall due to no act of the dragon's or its allies. Such creatures descend at a rate of 60ft per round and take no falling damage.</p>",
				"<p>Given days or longer to work, the dragon can make clouds and fog within its lair as solid as stone, forming structures and other objects as it wishes.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "silver dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>The friendliest and most social of the metallic dragons, silver dragons cheerfully assist good creatures in need.</p><p>A silver dragon shimmers as if sculpted from pure metal, its face given a noble cast by its high eyes and sweeping beard-like chin spikes. A spiny frill rises high over its head, tracing down its neck to the tip of its tail. A silver wyrmling's scales are blue-gray with silver highlights. As the dragon approaches adulthood, its color gradually brightens until its individual scales are barely visible. As a silver dragon grows older, its pupils fade until its eyes resemble orbs of mercury.</p><p><strong>Dragons of Virtue.</strong> Silver dragons believe that living a moral life involves doing good deeds and ensuring that one's actions cause no undeserved harm to other sentient beings. They don't take it upon themselves to root out evil, as gold and bronze dragons do, but they will gladly oppose creatures that dare to commit evil acts or harm the innocent.</p><p><strong>Friends of the Small Races.</strong> Silver dragons enjoy the company of other silver dragons. Their only true friendships outside their own kin arise in the company of humanoids, and many silver dragons spend as much time in humanoid form as they do in draconic form. A silver dragon adopts a benign humanoid persona such as a kindly old sage or a young wanderer, and it often has mortal companions with whom it develops strong friendships.</p><p>Silver dragons must step away from their humanoid lives on a regular basis, returning to their true forms to mate and rear offspring, or to tend to their hoards and personal affairs. Because many lose track of time while away, they sometimes return to find that their companions have grown old or died. Silver dragons often end up befriending several generations of humanoids within a single family as a result.</p><p><strong>Respect for Humanity.</strong> Silver dragons befriend humanoids of all races, but shorter-lived races such as humans spark their curiosity in a way the longer-lived elves and dwarves don't. Humans have a drive and zest for life that silver dragons find fascinating.</p><p><strong>Hoarding History.</strong> Silver dragons love to possess relics of humanoid history. This includes the great piles of coins they covet, minted by current and fallen humanoid empires, as well as art objects and fine jewelry crafted by numerous races. Other treasures that make up their hoards can include intact ships, the remains of kings and queens, thrones, the crown jewels of ancient empires, inventions and contraptions, and monoliths carried from the ruins of fallen cities.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "19",
		"armor": ["natural"],
		"hp": {
			"default": "243",
			"rolls": "18",
			"die": "12",
			"mod": "126"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}	
		],
		"str": "27",
		"dex": "10",
		"con": "25",
		"int": "16",
		"wis": "13",
		"chr": "21",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "12"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "10"
			}
		],
		"skills": [
			{
				"name": "arcana",
				"mod": "8"
			},
			{
				"name": "history",
				"mod": "8"
			},
			{
				"name": "perception",
				"mod": "11"
			},
			
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["cold"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "21",
		"languages": {
			"speaks": ["common","draconic"],
			"understands": [""]
		},
		"challengeRating": "16",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "10",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "18",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["thaumaturgy","dancing lights","charm person","silence","ice storm"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 5 spells no higher than level 5. It has a +10 bonus to hit and a DC 18 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "13",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "19",
						"rolls": "2",
						"die": "10",
						"mod": "8",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "13",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "13",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "17",
						"rolls": "2",
						"die": "8",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "18",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "120",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 18 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "cold breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "20",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "58",
						"rolls": "13",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales an icy blast in a 60ft cone. Each creature in that line must make a DC 20 CON saving throw, taking 58(13d8) cold damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "paralyzing breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "20",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales paralyzing gas in a 60ft cone. Each creature in that area mu st succeed on a DC 20 CON saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p>"
			},
			{
				"name": "change shape",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, HP, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, INT, WIS, and CHA scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon ma kes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 21 DEX saving throw or take 15(2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>Silver dragons dwell among the clouds, making their lairs on secluded cold mountain peaks. Though many are comfortable in natural cavern complexes or abandoned mines, silver dragons covet the lost outposts of humanoid civilization. An abandoned mountaintop citadel or a remote tower raised by a long-dead wizard is the sort of lair that every silver dragon dreams of.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>The dragon creates fog as if it had cast the fog cloud spell. The fog lasts until initiative count 20 on the next round.</p>",
				"<p>A blistering wind blows through the lair near the dragon. Each creature within 120 of the dragon must succeed on a DC 15 CON saving throw or take 5(1d10) cold damage. Gases and vapors are dispersed by the wind, and unprotected flames are extinguished. Protected flames, such as lanterns, have a 50% chance of being extinguished.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the control weather spell.</p>",
				"<p>Within 1 mile of the lair, winds buoy non-evil creatures that fall due to no act of the dragon's or its allies. Such creatures descend at a rate of 60ft per round and take no falling damage.</p>",
				"<p>Given days or longer to work, the dragon can make clouds and fog within its lair as solid as stone, forming structures and other objects as it wishes.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "silver dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>The friendliest and most social of the metallic dragons, silver dragons cheerfully assist good creatures in need.</p><p>A silver dragon shimmers as if sculpted from pure metal, its face given a noble cast by its high eyes and sweeping beard-like chin spikes. A spiny frill rises high over its head, tracing down its neck to the tip of its tail. A silver wyrmling's scales are blue-gray with silver highlights. As the dragon approaches adulthood, its color gradually brightens until its individual scales are barely visible. As a silver dragon grows older, its pupils fade until its eyes resemble orbs of mercury.</p><p><strong>Dragons of Virtue.</strong> Silver dragons believe that living a moral life involves doing good deeds and ensuring that one's actions cause no undeserved harm to other sentient beings. They don't take it upon themselves to root out evil, as gold and bronze dragons do, but they will gladly oppose creatures that dare to commit evil acts or harm the innocent.</p><p><strong>Friends of the Small Races.</strong> Silver dragons enjoy the company of other silver dragons. Their only true friendships outside their own kin arise in the company of humanoids, and many silver dragons spend as much time in humanoid form as they do in draconic form. A silver dragon adopts a benign humanoid persona such as a kindly old sage or a young wanderer, and it often has mortal companions with whom it develops strong friendships.</p><p>Silver dragons must step away from their humanoid lives on a regular basis, returning to their true forms to mate and rear offspring, or to tend to their hoards and personal affairs. Because many lose track of time while away, they sometimes return to find that their companions have grown old or died. Silver dragons often end up befriending several generations of humanoids within a single family as a result.</p><p><strong>Respect for Humanity.</strong> Silver dragons befriend humanoids of all races, but shorter-lived races such as humans spark their curiosity in a way the longer-lived elves and dwarves don't. Humans have a drive and zest for life that silver dragons find fascinating.</p><p><strong>Hoarding History.</strong> Silver dragons love to possess relics of humanoid history. This includes the great piles of coins they covet, minted by current and fallen humanoid empires, as well as art objects and fine jewelry crafted by numerous races. Other treasures that make up their hoards can include intact ships, the remains of kings and queens, thrones, the crown jewels of ancient empires, inventions and contraptions, and monoliths carried from the ruins of fallen cities.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "45",
			"rolls": "6",
			"die": "8",
			"mod": "18"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
		],
		"str": "19",
		"dex": "10",
		"con": "17",
		"int": "12",
		"wis": "11",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "2"
			},
			{
				"attribute": "con",
				"mod": "5"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			
			{
				"name": "stealth",
				"mod": "2"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["cold"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
		"speaks": ["draconic"],
		"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "4",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "12",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["thaumaturgy","dancing lights"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells no higher than level 0. It has a +4 bonus to hit and a DC 12 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "9",
						"rolls": "1",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "cold breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "13",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "18",
						"rolls": "4",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales an icy blast in a 15ft cone. Each creature in that line must make a DC 13 CON saving throw, taking 18(4d8) cold damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "paralyzing breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "13",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales paralyzing gas in a 15ft cone. Each creature in that area mu st succeed on a DC 13 CON saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "silver dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>The friendliest and most social of the metallic dragons, silver dragons cheerfully assist good creatures in need.</p><p>A silver dragon shimmers as if sculpted from pure metal, its face given a noble cast by its high eyes and sweeping beard-like chin spikes. A spiny frill rises high over its head, tracing down its neck to the tip of its tail. A silver wyrmling's scales are blue-gray with silver highlights. As the dragon approaches adulthood, its color gradually brightens until its individual scales are barely visible. As a silver dragon grows older, its pupils fade until its eyes resemble orbs of mercury.</p><p><strong>Dragons of Virtue.</strong> Silver dragons believe that living a moral life involves doing good deeds and ensuring that one's actions cause no undeserved harm to other sentient beings. They don't take it upon themselves to root out evil, as gold and bronze dragons do, but they will gladly oppose creatures that dare to commit evil acts or harm the innocent.</p><p><strong>Friends of the Small Races.</strong> Silver dragons enjoy the company of other silver dragons. Their only true friendships outside their own kin arise in the company of humanoids, and many silver dragons spend as much time in humanoid form as they do in draconic form. A silver dragon adopts a benign humanoid persona such as a kindly old sage or a young wanderer, and it often has mortal companions with whom it develops strong friendships.</p><p>Silver dragons must step away from their humanoid lives on a regular basis, returning to their true forms to mate and rear offspring, or to tend to their hoards and personal affairs. Because many lose track of time while away, they sometimes return to find that their companions have grown old or died. Silver dragons often end up befriending several generations of humanoids within a single family as a result.</p><p><strong>Respect for Humanity.</strong> Silver dragons befriend humanoids of all races, but shorter-lived races such as humans spark their curiosity in a way the longer-lived elves and dwarves don't. Humans have a drive and zest for life that silver dragons find fascinating.</p><p><strong>Hoarding History.</strong> Silver dragons love to possess relics of humanoid history. This includes the great piles of coins they covet, minted by current and fallen humanoid empires, as well as art objects and fine jewelry crafted by numerous races. Other treasures that make up their hoards can include intact ships, the remains of kings and queens, thrones, the crown jewels of ancient empires, inventions and contraptions, and monoliths carried from the ruins of fallen cities.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "lawful good",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "168",
			"rolls": "16",
			"die": "10",
			"mod": "80"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}	
		],
		"str": "23",
		"dex": "10",
		"con": "21",
		"int": "14",
		"wis": "11",
		"chr": "19",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "4"
			},
			{
				"attribute": "con",
				"mod": "9"
			},
			{
				"attribute": "wis",
				"mod": "4"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "arcana",
				"mod": "6"
			},
			{
				"name": "history",
				"mod": "6"
			},
			{
				"name": "perception",
				"mod": "8"
			},
			
			{
				"name": "stealth",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["cold"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "18",
		"languages": {
		"speaks": ["common","draconic"],
		"understands": [""]
		},
		"challengeRating": "9",
		"traits": [
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "8",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "16",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["thaumaturgy","dancing lights","charm person","silence"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 4 spells no higher than level 3. It has a +8 bonus to hit and a DC 16 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "cold breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "17",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "54",
						"rolls": "12",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales an icy blast in a 30ft cone. Each creature in that line must make a DC 17 CON saving throw, taking 54(12d8) cold damage on a failed save, or half as much damage on a successful one.</p>"
			},
			{
				"name": "paralyzing breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "17",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "30",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales paralyzing gas in a 30ft cone. Each creature in that area mu st succeed on a DC 17 CON saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "solar",
		"pro": "",
		"src": "",
		"desc": "<p>A solar is godlike in its glory and power. On the battlefield, the solar's sword flies into the fray on its own, and a single arrow from a solar's bow can strike a target dead on contact. So great is a solar's celestial might that even demon princes shrink at its resonant commands.</p><p>It is said that only twenty-four solars exist. The few solars that are known are stewards of specific deities. The others rest in a state of contemplation, waiting for the time when their services are needed to stave off some cosmic threat to the cause of good.</p>",
		"size": "large",
		"type": "celestial",
		"class": "angels",
		"tag": "angel",
		"alignment": "lawful good",
		"ac": "21",
		"armor": ["natural"],
		"hp": {
			"default": "243",
			"rolls": "18",
			"die": "10",
			"mod": "144"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "150",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "50",
				"notes": ""
			}
		],
		"str": "26",
		"dex": "22",
		"con": "26",
		"int": "25",
		"wis": "25",
		"chr": "30",
		"savingThrows": [
			{
				"ability": "int",
				"mod": "14"
			},
			{
				"ability": "wis",
				"mod": "14"
			},
			{
				"ability": "cha",
				"mod": "17"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "14"
			}
		],
		"damageVuln": [""],
		"damageRes": ["radiant","bludgeoning","piercing","slashing"],
		"damageImm": ["necrotic","poison"],
		"conditionImm": ["charmed","exhaustion","frightened","poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "truesight",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "24",
		"languages": {
		"speaks": ["all","telepathy 120ft"],
		"understands": [""]
		},
		"challengeRating": "21",
		"traits": [
			{
				"name": "angelic weapons",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack).</p>"
			},
			{
				"name": "divine awareness",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The solar knows if it hears a lie.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "25",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["detect evil and good","invisibility (self)"]
					},
					{
						"level": "",
						"rate": "3",
						"span": "day",
						"titles": ["blade barrier","dispel evil and good","resurrection"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["commune","control weather"],
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The solar has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The solar makes two greatsword attacks.</p>"
			},
			{
				"name": "greatsword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "15",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "22",
						"rolls": "4",
						"die": "6",
						"mod": "8",
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
						"mod": "",
						"damageType": "radiant",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "slaying longbow",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "13",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "120/600",
						"default": "15",
						"rolls": "2",
						"die": "8",
						"mod": "6",
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
						"mod": "",
						"damageType": "radiant",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a creature that has 190HP or fewer, it must succeed on a DC 15 CON saving throw or die.</p>"
			},
			{
				"name": "flying sword",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The solar releases its greatsword to hover magically in an unoccupied space within 5ft of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50ft and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.</p>"
			},
			{
				"name": "healing touch",
				"perDay": "4",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The solar touches another creature. The target magically regains 40(8d8+4) HP and is freed from any curse, disease, poison, blindness, or deafness.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "teleport",
				"desc": "<p>The solar magically teleports, along with any equipment it is wearing or carrying, up to 120ft to an unoccupied space it can see.</p>"
			},
			{
				"name": "searing burst",
				"desc": "<p>The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 DEX saving throw, taking 14(4d6) fire damage + 14(4d6) radiant damage on a failed save, or half as much damage on a successful one.<br>(costs 2 actions)</p>"
			},
			{
				"name": "blinding gaze",
				"desc": "<p>The solar targets one creature it can see within 30ft. If the target can see it, the target must succeed on a DC 15 CON saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.<br>(Costs 3 Actions)</p>"
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "spectator",
		"pro": "",
		"src": "",
		"desc": "<p>A spectator is a lesser beholder that is summoned from another plane of existence by a magical ritual, the components of which include four beholder eyestalks that are consumed by the ritual's magic. Appropriately, a spectator has four eyes talks, two on each side of the wide eye at the center of its four-foot diameter body.</p><p><strong>Magical Guardians.</strong> A summoned spectator guards a location or a treasure of its summoner's choice for 101 years, allowing no creature but its summoner to enter the area or access the item, unless the summoner instructed otherwise. If the item is stolen or destroyed before the years have all passed, a summoned spectator vanishes. It otherwise never abandons its post.</p><p><strong>Glimmers of Madness.</strong> Though it can speak, a spectator communicates primarily by way of telepathy. It is civil while on guard, openly discussing its orders and its summoner. However, even a brief conversation with a spectator is enough to reveal quirks in its personality brought on by its years of isolation. It might invent imaginary enemies, refer to itself in the third person, or try to adopt the voice of its summoner.</p><p>Like any beholder, a spectator views itself as the epitome of its kind, and it has an intense hatred of other spectators. If two spectators encounter one another, they almost always fight to the death.</p><p><strong>Freed from Service.</strong> When a spectator has fulfilled its service, it is free to do as it pleases. Many take up residence in the places they previously guarded, especially if their summoners have died. With the spectator's loss of purpose, the flickers of madness it displayed during its servitude flourish.</p>",
		"size": "medium",
		"type": "aberration",
		"class": "",
		"tag": "beholder",
		"alignment": "lawful neutral",
		"ac": "14",
		"armor": ["natural"],
		"hp": {
			"default": "39",
			"rolls": "6",
			"die": "8",
			"mod": "12"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "30",
				"notes": "hover"
			}
		],
		"str": "8",
		"dex": "14",
		"con": "14",
		"int": "13",
		"wis": "14",
		"chr": "11",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": ["prone"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "16",
		"languages": {
		"speaks": ["deep speech, undercommon, telepathy 120ft"],
		"understands": [""]
		},
		"challengeRating": "3",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "1",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "2",
						"rolls": "1",
						"die": "6",
						"mod": "-1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "eye rays",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The spectator shoots up to two of the following magical eye rays at random (1d4 reroll duplicates) at one or two creatures it can see within 90ft of it. It can use each ray only once on a turn.</p><p><ol><li><strong>Confusion Ray.</strong> The target must succeed on a DC 13 WIS saving throw, or it can't take reactions until the end of its next turn. On its turn, the target can't move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can't attack, it does nothing on its turn.</li><li><strong>Paralyzing Ray.</strong> The target must succeed on a DC 13 CON saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li><li><strong>Fear Ray.</strong> The target must succeed on a DC 13 WIS saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success.</li><li><strong>Wounding Ray.</strong> The target must make a DC 13 CON saving throw, taking 16(3d10) necrotic damage on a failed save, or half as much damage on a successful one.</li><ol></p>"
			},
			{
				"name": "create food and water",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The spectator magically creates enough food and water to sustain itself for 24 hours.</p>"
			}
		],
		"reactions": [
			{
				"name": "spell reflection",
				"desc": "<p>If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30ft of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature.</p>"
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "spined devil (spinagon)",
		"pro": "",
		"src": "",
		"desc": "<p>Smaller than most other devils, spinagons act as messengers and spies for greater devils and archdevils. They are the eyes and ears of the Nine Hells, and even fiends that despise a spined devil's weakness treat it with a modicum of respect.</p><p>A spined devil's body and tail bristle with spines, and it can fling its tail spines as ranged weapons. The spines burst into flame on impact.</p><p>When not delivering messages or gathering intelligence, spined devils serve in the infernal legions as flying artillery, making up for their relative weakness by mobbing together to overwhelm their foes. Though they crave promotion and power, spined devils are craven by nature, and they will quickly scatter if a fight goes against them.</p>",
		"size": "small",
		"type": "fiend",
		"class": "devils",
		"tag": "devil",
		"alignment": "lawful evil",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "22",
			"rolls": "5",
			"die": "6",
			"mod": "5"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			
		],
		"str": "10",
		"dex": "15",
		"con": "12",
		"int": "11",
		"wis": "8",
		"chr": "14",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","bludgeoning","piercing","slashing","nonmagical","unsilvered"],
		"damageImm": ["fire","poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "12",
		"languages": {
		"speaks": ["infernal","telepathy 120ft"],
		"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "devil's Sight",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>Magical darkness doesn't impede the devil's darkvision.</p>"
			},
			{
				"name": "flyby",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach.</p>"
			},
			{
				"name": "limited spines",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The devil has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The devil makes two attacks: one with its bite and one with its fork or two with its tail spines.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "2",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "2",
						"die": "4",
						"mod": "",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "fork",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "2",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "1",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail spine",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "20/80",
						"default": "4",
						"rolls": "1",
						"die": "4",
						"mod": "2",
						"type": "piercing"
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "3",
						"rolls": "1",
						"die": "6",
						"mod": "",
						"damageType": "fire",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "triceratops",
		"pro": "",
		"src": "",
		"desc": "<p>One of the most aggressive of the herbivorous dinosaurs, a triceratops has a skull that flares out to form a protective plate of bone. With its great horns and formidable speed, a triceratops gores and tramples would-be predators to death.</p>",
		"size": "huge",
		"type": "beast",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "95",
			"rolls": "10",
			"die": "12",
			"mod": "30"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "50",
				"notes": ""
			}
		],
		"str": "22",
		"dex": "9",
		"con": "17",
		"int": "2",
		"wis": "5",
		"chr": "11",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "10",
		"languages": {
		"speaks": [""],
		"understands": [""]
		},
		"challengeRating": "5",
		"traits": [
			{
				"name": "trampling charge",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the triceratops moves at least 20ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 STR saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action.</p>"
			}
		],
		"actions": [
			{
				"name": "gore",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "24",
						"rolls": "4",
						"die": "8",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "stomp",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "9",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "22",
						"rolls": "3",
						"die": "10",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>Target must be prone for this action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "twig blight",
		"pro": "",
		"src": "",
		"desc": "<p>Twig blights can root in soil, which they do when living prey are scarce. While rooted, they resemble woody shrubs. When it pulls its roots free of the ground to move, a twig blight's branches twist together to form a humanoid-looking body with a head and limbs.</p><p>Twig blights seek out campsites and watering holes, rooting there to set up ambushes for potential victims coming to drink or rest. Huddled together in groups, twig blights blend in with an area's natural vegetation or with piles of debris or firewood.</p><p>Given how dry they are, twig blights are particularly susceptible to fire.</p>",
		"size": "small",
		"type": "plant",
		"class": "blights",
		"tag": "blight",
		"alignment": "neutral evil",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "4",
			"rolls": "1",
			"die": "6",
			"mod": "1"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "20",
				"notes": ""
			}
		],
		"str": "6",
		"dex": "13",
		"con": "12",
		"int": "4",
		"wis": "8",
		"chr": "3",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "stealth",
				"mod": "3"
			}
		],
		"damageVuln": ["fire"],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": ["blinded","deafened"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": "",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "9",
		"languages": {
		"speaks": ["Common (can't speak)"],
		"understands": [""]
		},
		"challengeRating": ".125",
		"traits": [
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the blight remains motionless, it is indistinguishable from a dead shrub.</p>"
			}
		],
		"actions": [
			{
				"name": "claws",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "3",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "3",
						"rolls": "1",
						"die": "4",
						"mod": "1",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "tyrannosaurus rex",
		"pro": "",
		"src": "",
		"desc": "<p>This enormous predator terrorizes all other creatures in its territory. Despite its size and weight, a tyrannosaurus is a swift runner. It chases anything it thinks it can eat, and there are few creatures it won't try to devour whole. While prowling for substantial prey, a tyrannosaurus subsists on carrion, and on any smaller creatures that try to dart in to steal its meal.</p>",
		"size": "huge",
		"type": "beast",
		"class": "",
		"tag": "",
		"alignment": "unaligned",
		"ac": "13",
		"armor": ["natural"],
		"hp": {
			"default": "136",
			"rolls": "13",
			"die": "12",
			"mod": "52"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "50",
				"notes": ""
			}
		],
		"str": "25",
		"dex": "10",
		"con": "19",
		"int": "2",
		"wis": "9",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "",
				"distance": "",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
		"speaks": [""],
		"understands": [""]
		},
		"challengeRating": "8",
		"traits": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target.</p>"
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "33",
						"rolls": "4",
						"die": "12",
						"mod": "7",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": "<p>If the target is a medium or smaller creature, it is grappled (DC 17 STR/DEX). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target.</p>"
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "10",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "20",
						"rolls": "3",
						"die": "8",
						"mod": "7",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "vine blight",
		"pro": "",
		"src": "",
		"desc": "<p>Appearing as masses of slithering creepers, vine blights hide in undergrowth and wait for prey to draw near. By animating the plants a round them, vine blights entangle and hinder their fo es before attacking.</p><p>Vine blights are the only blights capable of speech. Through its connection to the evil spirit of the Gulthias tree it serves, a vine blight speaks in a fractured version of its dead master's voice, taunting victims or bargaining with powerful foes.</p>",
		"size": "medium",
		"type": "plant",
		"class": "blights",
		"tag": "blight",
		"alignment": "neutral evil",
		"ac": "12",
		"armor": ["natural"],
		"hp": {
			"default": "26",
			"rolls": "4",
			"die": "8",
			"mod": "8"
		},
		"speed": [
			{
				"type": "walk",
				"distance": "10",
				"notes": ""
			}
		],
		"str": "15",
		"dex": "8",
		"con": "14",
		"int": "5",
		"wis": "10",
		"chr": "3",
		"savingThrows": [
			{
				"ability": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "stealth",
				"mod": "1"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": ["blinded","deafened"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": "",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "10",
		"languages": {
		"speaks": ["common"],
		"understands": [""]
		},
		"challengeRating": ".5",
		"traits": [
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the blight remains motionless, it is indistinguishable from a tangle of vines.</p>"
			}
		],
		"actions": [
			{
				"name": "constrict",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "9",
						"rolls": "2",
						"die": "6",
						"mod": "2",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": "<p>Large or smaller target is grappled (escape DC 12 STR/DEX). Until this grapple ends, the target is restrained, and the blight can't constrict another target.</p>"
			},
			{
				"name": "entangling plants",
				"perDay": "",
				"recharge": "5-6",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for non plant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 STR saving throw or become restrained. A creature can use its action to make a DC 12 STR check, freeing itself or another entangled creature within reach on a success.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "violet fungus",
		"pro": "",
		"src": "",
		"desc": "<p>This purplish mushroom uses root-like feelers growing from its base to creep across cavern floors. The four stalks protruding from a violet fungi's central mass are used to lash out at prey, rotting flesh with the slightest touch. Any creature killed by a violet fungus decomposes rapidly. A new violet fungus sprouts from the moldering corpse, growing to full size in 2d6 days.</p>",
		"size": "medium",
		"type": "plant",
		"class": "fungi",
		"tag": "",
		"alignment": "unaligned",
		"ac": "5",
		"armor": [""],
		"hp": {
			"default": "18",
			"rolls": "4",
			"die": "8",
			"mod": ""
		},
		"speed": [
			{
				"type": "walk",
				"distance": "5",
				"notes": ""
			}
		],
		"str": "3",
		"dex": "1",
		"con": "10",
		"int": "1",
		"wis": "3",
		"chr": "1",
		"savingThrows": [
			{
				"attribute": "",
				"mod": ""
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": [""],
		"conditionImm": ["blinded","deafened","frightened"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "30",
				"notes": "blind beyond this radius"
			}
		],
		"passivePer": "6",
		"languages": {
			"speaks": [""],
			"understands": [""]
		},
		"challengeRating": ".25",
		"traits": [
			{
				"name": "false appearance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The fungus makes 1d4 Rotting Touch attacks.</p>"
			},
			{
				"name": "rotting touch",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "2",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "",
						"rolls": "4",
						"die": "1",
						"mod": "8",
						"damageType": "necrotic",
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "vrock",
		"pro": "",
		"src": "",
		"desc": "<p>Vrocks are dull-witted, capricious fiends that live only to create pain and carnage. A vrock resembles a giant hybrid of humanoid and vulture, its gnarled, bestial body and broad wings stinking of offal.</p><p>Vrocks gobble humanoid flesh whenever they can, stunning potential prey with an ear-splitting shriek, then swooplng down to attack with beak and claw. Vrocks can shake their wings, releasing clouds of toxic spores.</p><p>Coveting pretty things, vrocks turn against each other for the chance to lay claim to cheap jewelry or ornamental stones. Despite their love of treasure,yrocks are difficult to bribe, seeing no reason to bargain when they can simply take what they want from a would-be bargainer's corpse.</p>",
		"size": "large",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "15",
		"armor": ["natural"],
		"hp": {
			"default": "104",
			"rolls": "11",
			"die": "10",
			"mod": "44"
		},
		"speed": [
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			}	
		],
		"str": "17",
		"dex": "15",
		"con": "18",
		"int": "8",
		"wis": "13",
		"chr": "8",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "wis",
				"mod": "4"
			},
			{
				"attribute": "cha",
				"mod": "2"
			}
		],
		"skills": [
			{
				"name": "",
				"mod": ""
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "11",
		"languages": {
		"speaks": ["abyssal","telepathy 120ft"],
		"understands": [""]
		},
		"challengeRating": "6",
		"traits": [
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The vrock has advantage on saving throws against spells and other magical effects.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The vrock makes two attacks: one with its beak and one with its talons.</p>"
			},
			{
				"name": "beak",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "10",
						"rolls": "2",
						"die": "6",
						"mod": "3",
						"damageType": "piercing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "talons",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "14",
						"rolls": "2",
						"die": "10",
						"mod": "3",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "spores",
				"perDay": "",
				"recharge": "6",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A 15ft-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 CON saving throw or become poisoned. While poisoned in this way, a target takes 5(1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.</p>"
			},
			{
				"name": "stunning screech",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The vrock emits a horrific screech. Each creature within 20ft of it that can hear it and that isn't a demon must succeed on a DC 14 CON saving throw or be stunned until the end of the vrock's next turn.</p>"
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A vrock has a 30% chance of summoning 2d4 dretches or one vrock. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "white dragon, ancient",
		"pro": "",
		"src": "",
		"desc": "<p>The smallest, least intelligent, and most animalistic of the chromatic dragons, white dragons dwell in frigid climes, favoring arctic areas or icy mountains. They are vicious, cruel reptiles driven by hunger and greed.</p><p>A white dragon has feral eyes, a sleek profile, and a spined crest. The scales of a wyrmling white dragon glisten pure white. As the dragon ages, its sheen disappears and some of its scales begin to darken, so that by the time it is old, it is mottled by patches of pale blue and light gray. This patterning helps the dragon blend into the realms of ice and stone in which it hunts, and to fade from view when it soars across a cloud-filled sky.</p><p><strong>Primal and Vengeful.</strong> White dragons lack the cunning and tactics of most other dragons. However, their bestial nature makes them the best hunters among all dragonkind, singularly focused on surviving and slaughtering their enemies. A white dragon consumes only food that has been frozen, devouring creatures killed by its breath weapon while they are still stiff and frigid. It encases other kills in ice or buries them in snow near its lair, and finding such a larder is a good indication that a white dragon dwells nearby.</p><p>A white dragon also keeps the bodies of its greatest enemies as trophies, freezing corpses where it can look upon them and gloat. The remains of giants, remorhazes, and other dragons are often positioned prominently within a white dragon's lair as warnings to intruders.</p><p>Though only moderately intelligent, white dragons have extraordinary memories. They recall every slight and defeat, and have been known to conduct malicious vendettas against creatures that have offended them. This often includes silver dragons, which lair in the same territories as whites. White dragons can speak as all dragons can, but they rarely talk unless moved to do so.</p><p><strong>Lone Masters.</strong> White dragons avoid all other dragons except whites of the opposite sex. Even then, when white dragons seek each other out as mates, they stay together only long enough to conceive offspring before fleeing into isolation again.</p><p>White dragons can't abide rivals near their lairs. As a result, a white dragon attacks other creatures without provocation, viewing such creatures as either too weak or too powerful to live. The only creatures that typically serve a white dragon are intelligent humanoids that demonstrate enough strength to assuage the dragon's wrath, and can put up with sustaining regular losses as a result of its hunger. This includes dragon-worshiping kobolds, which are commonly found in their lairs.</p><p>Powerful creatures can sometimes gain a white dragon's obedience through a demonstration of physical or magical might. Frost giants challenge white dragons to prove their own strength and improve their status in their clans, and their cracked bones litter many a white dragon's lair. However, a white dragon defeated by a frost giant often becomes its servant, accepting the mastery of a superior creature in exchange for asserting its own domination over the other creatures that serve or oppose the giant.</p><p><strong>Treasure Under Ice.</strong> White dragons love the cold sparkle of ice and favor treasure with similar qualities, particularly diamonds. However, in their remote arctic climes, the treasure hoards of white dragons more often contain walrus and mammoth tusk ivory, whale-bone sculptures, figureheads from ships, furs, and magic items seized from overly bold adventurers.</p><p>Loose coins and gems are spread across a white dragon's lair, glittering like stars when the light strikes them. Larger treasures and chests are encased in layers of rime created by the white dragon's breath, and held safe beneath layers of transparent ice. The dragon's great strength allows it to easily access its wealth, while lesser creatures must spend hours chipping away or melting the ice to reach the dragon's main hoard.</p><p>A white dragon's flawless memory means that it knows how it came to possess every coin, gem, and magic item in its hoard, and it associates each item with a specific victory. White dragons are notoriously difficult to bribe, since any offers of treasure are seen as an insult to their ability to simply slay the creature making the offer and seize the treasure on their own.</p>",
		"size": "gargantuan",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "20",
		"armor": ["natural"],
		"hp": {
			"default": "333",
			"rolls": "18",
			"die": "20",
			"mod": "144"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "40",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "26",
		"dex": "10",
		"con": "26",
		"int": "10",
		"wis": "13",
		"chr": "14",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "6"
			},
			{
				"attribute": "con",
				"mod": "14"
			},
			{
				"attribute": "wis",
				"mod": "7"
			},
			{
				"attribute": "cha",
				"mod": "8"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "13"
			},
			{
				"name": "stealth",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["cold"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "23",
		"languages": {
		"speaks": ["common","draconic"],
		"understands": [""]
		},
		"challengeRating": "20",
		"traits": [
			{
				"name": "ice walk",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "9",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "17",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","finger of death"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 2 spells at level 6 or below. It has a +9 bonus to hit and a DC 17 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "19",
						"rolls": "2",
						"die": "10",
						"mod": "8",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "9",
						"rolls": "2",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "6",
						"mod": "8",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "14",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "20",
						"default": "17",
						"rolls": "2",
						"die": "8",
						"mod": "8",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "16",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 16 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "cold breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "22",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "90",
						"default": "72",
						"rolls": "16",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 90ft cone. Each creature in that area must make a DC 22 CON saving throw, taking 72(16d8) cold damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 15ft of the dragon must succeed on a DC 22 DEX saving throw or take 15(2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>White dragons lair in icy caves and deep subterranean chambers far from the sun. They favor high mountain vales accessible only by flying, caverns in cliff faces, and labyrinthine ice caves in glaciers. White dragons love vertical heights in their caverns, flying up to the ceiling to latch on like bats or slithering down icy crevasses.</p><p>A legendary white dragon's innate magic deepens the cold in the area around its lair. Mountain caverns are fast frozen by the white dragon's presence. A white dragon can often detect intruders by the way the keening wind in its lair changes tone.</p><p>A white dragon rests on high ice shelves and cliffs in its lair, the floor around it a treacherous morass of broken ice and stone, hidden pits, and slippery slopes. As foes struggle to move toward it, the dragon flies from perch to perch and destroys them with its freezing breath.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Freezing fog fills a 20ft-radius sphere centered on a point the dragon can see within 120ft of it. The fog spreads around corners, and its area is heavily obscured. Each creature in the fog when it appears must make a DC 10 CON saving throw, taking 10(3d6) cold damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the fog takes 10(3d6) cold damage. A wind of at least 20 miles per hour disperses the fog. The fog otherwise lasts until the dragon uses this lair action again or until the dragon dies.</p>",
				"<p>Jagged ice shards fall from the ceiling, striking up to three creatures underneath that the dragon can see within 120ft of it. The dragon makes one ranged attack roll (+7 to hit) against each target. On a hit, the target takes 10(3d6) piercing damage.</p>",
				"<p>The dragon creates an opaque wall of ice on a solid surface it can see within 120ft of it. The wall can be up to 30ft long, 30ft high, and 1 foot thick. When the wall appears, each creature within its area is pushed 5ft out of the wall's space; appearing on whichever side of the wall it wants. Each 10ft section of the wall has AC 5, 30HP, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. The wall disappears when the dragon uses this lair action again or when the dragon dies.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Chilly fog lightly obscures the land within 6 miles of the dragon's lair.</p>",
				"<p>Freezing precipitation falls within 6 miles of the dragon's lair, sometimes forming blizzard conditions when the dragon is at rest.</p>",
				"<p>Icy walls block off areas in the dragon's lair. Each wall is 6ines thick, and a 10ft section has AC 5, 15HP, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage.</p><p>If the dragon wishes to move through a wall, it can do so without slowing down. The portion of the wall the dragon moves through is destroyed, however.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "white dragon, adult",
		"pro": "",
		"src": "",
		"desc": "<p>The smallest, least intelligent, and most animalistic of the chromatic dragons, white dragons dwell in frigid climes, favoring arctic areas or icy mountains. They are vicious, cruel reptiles driven by hunger and greed.</p><p>A white dragon has feral eyes, a sleek profile, and a spined crest. The scales of a wyrmling white dragon glisten pure white. As the dragon ages, its sheen disappears and some of its scales begin to darken, so that by the time it is old, it is mottled by patches of pale blue and light gray. This patterning helps the dragon blend into the realms of ice and stone in which it hunts, and to fade from view when it soars across a cloud-filled sky.</p><p><strong>Primal and Vengeful.</strong> White dragons lack the cunning and tactics of most other dragons. However, their bestial nature makes them the best hunters among all dragonkind, singularly focused on surviving and slaughtering their enemies. A white dragon consumes only food that has been frozen, devouring creatures killed by its breath weapon while they are still stiff and frigid. It encases other kills in ice or buries them in snow near its lair, and finding such a larder is a good indication that a white dragon dwells nearby.</p><p>A white dragon also keeps the bodies of its greatest enemies as trophies, freezing corpses where it can look upon them and gloat. The remains of giants, remorhazes, and other dragons are often positioned prominently within a white dragon's lair as warnings to intruders.</p><p>Though only moderately intelligent, white dragons have extraordinary memories. They recall every slight and defeat, and have been known to conduct malicious vendettas against creatures that have offended them. This often includes silver dragons, which lair in the same territories as whites. White dragons can speak as all dragons can, but they rarely talk unless moved to do so.</p><p><strong>Lone Masters.</strong> White dragons avoid all other dragons except whites of the opposite sex. Even then, when white dragons seek each other out as mates, they stay together only long enough to conceive offspring before fleeing into isolation again.</p><p>White dragons can't abide rivals near their lairs. As a result, a white dragon attacks other creatures without provocation, viewing such creatures as either too weak or too powerful to live. The only creatures that typically serve a white dragon are intelligent humanoids that demonstrate enough strength to assuage the dragon's wrath, and can put up with sustaining regular losses as a result of its hunger. This includes dragon-worshiping kobolds, which are commonly found in their lairs.</p><p>Powerful creatures can sometimes gain a white dragon's obedience through a demonstration of physical or magical might. Frost giants challenge white dragons to prove their own strength and improve their status in their clans, and their cracked bones litter many a white dragon's lair. However, a white dragon defeated by a frost giant often becomes its servant, accepting the mastery of a superior creature in exchange for asserting its own domination over the other creatures that serve or oppose the giant.</p><p><strong>Treasure Under Ice.</strong> White dragons love the cold sparkle of ice and favor treasure with similar qualities, particularly diamonds. However, in their remote arctic climes, the treasure hoards of white dragons more often contain walrus and mammoth tusk ivory, whale-bone sculptures, figureheads from ships, furs, and magic items seized from overly bold adventurers.</p><p>Loose coins and gems are spread across a white dragon's lair, glittering like stars when the light strikes them. Larger treasures and chests are encased in layers of rime created by the white dragon's breath, and held safe beneath layers of transparent ice. The dragon's great strength allows it to easily access its wealth, while lesser creatures must spend hours chipping away or melting the ice to reach the dragon's main hoard.</p><p>A white dragon's flawless memory means that it knows how it came to possess every coin, gem, and magic item in its hoard, and it associates each item with a specific victory. White dragons are notoriously difficult to bribe, since any offers of treasure are seen as an insult to their ability to simply slay the creature making the offer and seize the treasure on their own.</p>",
		"size": "huge",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "18",
		"armor": ["natural"],
		"hp": {
			"default": "200",
			"rolls": "16",
			"die": "12",
			"mod": "96"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "22",
		"dex": "10",
		"con": "22",
		"int": "8",
		"wis": "12",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "5"
			},
			{
				"attribute": "con",
				"mod": "11"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "6"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "11"
			},
			{
				"name": "stealth",
				"mod": "5"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["cold"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "21",
		"languages": {
		"speaks": ["common","draconic"],
		"understands": [""]
		},
		"challengeRating": "13",
		"traits": [
			{
				"name": "ice walk",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "7",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "15",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["ice storm"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 1 spell at level 4 or below. It has a +7 bonus to hit and a DC 15 CHA. The spells listed are suggested.</p>"
			},
			{
				"name": "legendary resistance",
				"perDay": "3",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>If the dragon fails a saving throw, it can choose to succeed instead.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "17",
						"rolls": "2",
						"die": "10",
						"mod": "6",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "4",
						"rolls": "1",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "13",
						"rolls": "2",
						"die": "6",
						"mod": "6",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "tail",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "11",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "15",
						"default": "15",
						"rolls": "2",
						"die": "8",
						"mod": "6",
						"damageType": "bludgeoning",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "frightful presence",
				"perDay": "",
				"recharge": "",
				"ability": "wis",
				"dc": "14",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "120",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>Each creature of the dragon's choice that is within 120ft of the dragon and aware of it must succeed on a DC 14 WIS saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p>"
			},
			{
				"name": "cold breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "19",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "60",
						"default": "54",
						"rolls": "12",
						"die": "8",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 60ft cone. Each creature in that area must make a DC 19 CON saving throw, taking 54(12d8) cold damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "detect",
				"desc": "<p>The dragon makes a WIS(Perception) check.</p>"
			},
			{
				"name": "tail attack",
				"desc": "<p>The dragon makes a tail attack.</p>"
			},
			{
				"name": "wing attack (costs 2 actions)",
				"desc": "<p>The dragon beats its wings. Each creature within 10ft of the dragon must succeed on a DC 19 DEX saving throw or take 13(2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>"
			}
		],
		"lair": {
			"desc": "<p>White dragons lair in icy caves and deep subterranean chambers far from the sun. They favor high mountain vales accessible only by flying, caverns in cliff faces, and labyrinthine ice caves in glaciers. White dragons love vertical heights in their caverns, flying up to the ceiling to latch on like bats or slithering down icy crevasses.</p><p>A legendary white dragon's innate magic deepens the cold in the area around its lair. Mountain caverns are fast frozen by the white dragon's presence. A white dragon can often detect intruders by the way the keening wind in its lair changes tone.</p><p>A white dragon rests on high ice shelves and cliffs in its lair, the floor around it a treacherous morass of broken ice and stone, hidden pits, and slippery slopes. As foes struggle to move toward it, the dragon flies from perch to perch and destroys them with its freezing breath.</p>",
			"initiative": "20",
			"actionDc": "",
			"actions": [
				"<p>Freezing fog fills a 20ft-radius sphere centered on a point the dragon can see within 120ft of it. The fog spreads around corners, and its area is heavily obscured. Each creature in the fog when it appears must make a DC 10 CON saving throw, taking 10(3d6) cold damage on a failed save, or half as much damage on a successful one. A creature that ends its turn in the fog takes 10(3d6) cold damage. A wind of at least 20 miles per hour disperses the fog. The fog otherwise lasts until the dragon uses this lair action again or until the dragon dies.</p>",
				"<p>Jagged ice shards fall from the ceiling, striking up to three creatures underneath that the dragon can see within 120ft of it. The dragon makes one ranged attack roll (+7 to hit) against each target. On a hit, the target takes 10(3d6) piercing damage.</p>",
				"<p>The dragon creates an opaque wall of ice on a solid surface it can see within 120ft of it. The wall can be up to 30ft long, 30ft high, and 1 foot thick. When the wall appears, each creature within its area is pushed 5ft out of the wall's space; appearing on whichever side of the wall it wants. Each 10ft section of the wall has AC 5, 30HP, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. The wall disappears when the dragon uses this lair action again or when the dragon dies.</p>"
			],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [
				"<p>Chilly fog lightly obscures the land within 6 miles of the dragon's lair.</p>",
				"<p>Freezing precipitation falls within 6 miles of the dragon's lair, sometimes forming blizzard conditions when the dragon is at rest.</p>",
				"<p>Icy walls block off areas in the dragon's lair. Each wall is 6ines thick, and a 10ft section has AC 5, 15HP, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage.</p><p>If the dragon wishes to move through a wall, it can do so without slowing down. The portion of the wall the dragon moves through is destroyed, however.</p>"
			],
			"recovery": {
				"rolls": "1",
				"die": "10",
				"unit": "days"
			}
		}
	},
	{	"name": "white dragon, wyrmling",
		"pro": "WORM-ling",
		"src": "",
		"desc": "<p>The smallest, least intelligent, and most animalistic of the chromatic dragons, white dragons dwell in frigid climes, favoring arctic areas or icy mountains. They are vicious, cruel reptiles driven by hunger and greed.</p><p>A white dragon has feral eyes, a sleek profile, and a spined crest. The scales of a wyrmling white dragon glisten pure white. As the dragon ages, its sheen disappears and some of its scales begin to darken, so that by the time it is old, it is mottled by patches of pale blue and light gray. This patterning helps the dragon blend into the realms of ice and stone in which it hunts, and to fade from view when it soars across a cloud-filled sky.</p><p><strong>Primal and Vengeful.</strong> White dragons lack the cunning and tactics of most other dragons. However, their bestial nature makes them the best hunters among all dragonkind, singularly focused on surviving and slaughtering their enemies. A white dragon consumes only food that has been frozen, devouring creatures killed by its breath weapon while they are still stiff and frigid. It encases other kills in ice or buries them in snow near its lair, and finding such a larder is a good indication that a white dragon dwells nearby.</p><p>A white dragon also keeps the bodies of its greatest enemies as trophies, freezing corpses where it can look upon them and gloat. The remains of giants, remorhazes, and other dragons are often positioned prominently within a white dragon's lair as warnings to intruders.</p><p>Though only moderately intelligent, white dragons have extraordinary memories. They recall every slight and defeat, and have been known to conduct malicious vendettas against creatures that have offended them. This often includes silver dragons, which lair in the same territories as whites. White dragons can speak as all dragons can, but they rarely talk unless moved to do so.</p><p><strong>Lone Masters.</strong> White dragons avoid all other dragons except whites of the opposite sex. Even then, when white dragons seek each other out as mates, they stay together only long enough to conceive offspring before fleeing into isolation again.</p><p>White dragons can't abide rivals near their lairs. As a result, a white dragon attacks other creatures without provocation, viewing such creatures as either too weak or too powerful to live. The only creatures that typically serve a white dragon are intelligent humanoids that demonstrate enough strength to assuage the dragon's wrath, and can put up with sustaining regular losses as a result of its hunger. This includes dragon-worshiping kobolds, which are commonly found in their lairs.</p><p>Powerful creatures can sometimes gain a white dragon's obedience through a demonstration of physical or magical might. Frost giants challenge white dragons to prove their own strength and improve their status in their clans, and their cracked bones litter many a white dragon's lair. However, a white dragon defeated by a frost giant often becomes its servant, accepting the mastery of a superior creature in exchange for asserting its own domination over the other creatures that serve or oppose the giant.</p><p><strong>Treasure Under Ice.</strong> White dragons love the cold sparkle of ice and favor treasure with similar qualities, particularly diamonds. However, in their remote arctic climes, the treasure hoards of white dragons more often contain walrus and mammoth tusk ivory, whale-bone sculptures, figureheads from ships, furs, and magic items seized from overly bold adventurers.</p><p>Loose coins and gems are spread across a white dragon's lair, glittering like stars when the light strikes them. Larger treasures and chests are encased in layers of rime created by the white dragon's breath, and held safe beneath layers of transparent ice. The dragon's great strength allows it to easily access its wealth, while lesser creatures must spend hours chipping away or melting the ice to reach the dragon's main hoard.</p><p>A white dragon's flawless memory means that it knows how it came to possess every coin, gem, and magic item in its hoard, and it associates each item with a specific victory. White dragons are notoriously difficult to bribe, since any offers of treasure are seen as an insult to their ability to simply slay the creature making the offer and seize the treasure on their own.</p>",
		"size": "medium",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "16",
		"armor": ["natural"],
		"hp": {
			"default": "32",
			"rolls": "5",
			"die": "8",
			"mod": "10"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "15",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			
			{
				"type": "fly",
				"distance": "60",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "14",
		"dex": "10",
		"con": "14",
		"int": "5",
		"wis": "10",
		"chr": "11",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "2"
			},
			{
				"attribute": "con",
				"mod": "4"
			},
			{
				"attribute": "wis",
				"mod": "2"
			},
			{
				"attribute": "cha",
				"mod": "2"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "4"
			},
			{
				"name": "stealth",
				"mod": "2"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["cold"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "blindsight",
				"distance": "10",
				"notes": ""
			},
			{
				"type": "darkvision",
				"distance": "60",
				"notes": ""
			}
		],
		"passivePer": "14",
		"languages": {
		"speaks": ["draconic"],
		"understands": [""]
		},
		"challengeRating": "2",
		"traits": [
			{
				"name": "",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": ""
			}
		],
		"actions": [
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "4",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "7",
						"rolls": "1",
						"die": "10",
						"mod": "2",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "2",
						"rolls": "1",
						"die": "4",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "cold breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "12",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "15",
						"default": "22",
						"rolls": "5",
						"die": "8",
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 15ft cone. Each creature in that area must make a DC 12 CON saving throw, taking 22(5d8) cold damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "white dragon, young",
		"pro": "",
		"src": "",
		"desc": "<p>The smallest, least intelligent, and most animalistic of the chromatic dragons, white dragons dwell in frigid climes, favoring arctic areas or icy mountains. They are vicious, cruel reptiles driven by hunger and greed.</p><p>A white dragon has feral eyes, a sleek profile, and a spined crest. The scales of a wyrmling white dragon glisten pure white. As the dragon ages, its sheen disappears and some of its scales begin to darken, so that by the time it is old, it is mottled by patches of pale blue and light gray. This patterning helps the dragon blend into the realms of ice and stone in which it hunts, and to fade from view when it soars across a cloud-filled sky.</p><p><strong>Primal and Vengeful.</strong> White dragons lack the cunning and tactics of most other dragons. However, their bestial nature makes them the best hunters among all dragonkind, singularly focused on surviving and slaughtering their enemies. A white dragon consumes only food that has been frozen, devouring creatures killed by its breath weapon while they are still stiff and frigid. It encases other kills in ice or buries them in snow near its lair, and finding such a larder is a good indication that a white dragon dwells nearby.</p><p>A white dragon also keeps the bodies of its greatest enemies as trophies, freezing corpses where it can look upon them and gloat. The remains of giants, remorhazes, and other dragons are often positioned prominently within a white dragon's lair as warnings to intruders.</p><p>Though only moderately intelligent, white dragons have extraordinary memories. They recall every slight and defeat, and have been known to conduct malicious vendettas against creatures that have offended them. This often includes silver dragons, which lair in the same territories as whites. White dragons can speak as all dragons can, but they rarely talk unless moved to do so.</p><p><strong>Lone Masters.</strong> White dragons avoid all other dragons except whites of the opposite sex. Even then, when white dragons seek each other out as mates, they stay together only long enough to conceive offspring before fleeing into isolation again.</p><p>White dragons can't abide rivals near their lairs. As a result, a white dragon attacks other creatures without provocation, viewing such creatures as either too weak or too powerful to live. The only creatures that typically serve a white dragon are intelligent humanoids that demonstrate enough strength to assuage the dragon's wrath, and can put up with sustaining regular losses as a result of its hunger. This includes dragon-worshiping kobolds, which are commonly found in their lairs.</p><p>Powerful creatures can sometimes gain a white dragon's obedience through a demonstration of physical or magical might. Frost giants challenge white dragons to prove their own strength and improve their status in their clans, and their cracked bones litter many a white dragon's lair. However, a white dragon defeated by a frost giant often becomes its servant, accepting the mastery of a superior creature in exchange for asserting its own domination over the other creatures that serve or oppose the giant.</p><p><strong>Treasure Under Ice.</strong> White dragons love the cold sparkle of ice and favor treasure with similar qualities, particularly diamonds. However, in their remote arctic climes, the treasure hoards of white dragons more often contain walrus and mammoth tusk ivory, whale-bone sculptures, figureheads from ships, furs, and magic items seized from overly bold adventurers.</p><p>Loose coins and gems are spread across a white dragon's lair, glittering like stars when the light strikes them. Larger treasures and chests are encased in layers of rime created by the white dragon's breath, and held safe beneath layers of transparent ice. The dragon's great strength allows it to easily access its wealth, while lesser creatures must spend hours chipping away or melting the ice to reach the dragon's main hoard.</p><p>A white dragon's flawless memory means that it knows how it came to possess every coin, gem, and magic item in its hoard, and it associates each item with a specific victory. White dragons are notoriously difficult to bribe, since any offers of treasure are seen as an insult to their ability to simply slay the creature making the offer and seize the treasure on their own.</p>",
		"size": "large",
		"type": "dragon",
		"class": "",
		"tag": "",
		"alignment": "chaotic evil",
		"ac": "17",
		"armor": ["natural"],
		"hp": {
			"default": "133",
			"rolls": "14",
			"die": "10",
			"mod": "56"
		},
		"speed": [
			{
				"type": "burrow",
				"distance": "20",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "40",
				"notes": ""
			
			{
				"type": "fly",
				"distance": "80",
				"notes": ""
			},
			{
				"type": "swim",
				"distance": "40",
				"notes": ""
			}
		],
		"str": "18",
		"dex": "10",
		"con": "18",
		"int": "6",
		"wis": "11",
		"chr": "12",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "3"
			},
			{
				"attribute": "con",
				"mod": "7"
			},
			{
				"attribute": "wis",
				"mod": "3"
			},
			{
				"attribute": "cha",
				"mod": "4"
			}
		],
		"skills": [
			{
				"name": "perception",
				"mod": "6"
			},
			{
				"name": "stealth",
				"mod": "3"
			}
		],
		"damageVuln": [""],
		"damageRes": [""],
		"damageImm": ["cold"],
		"conditionImm": [""],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
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
		"passivePer": "16",
		"languages": {
		"speaks": ["common","draconic"],
		"understands": [""]
		},
		"challengeRating": "6",
		"traits": [
			{
				"name": "ice walk",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.</p>"
			},
			{
				"name": "innate spellcasting - variant",
				"perDay": "",
				"recharge": "",
				"attackMod": "5",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "13",
				"spell": [
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["bane","command"],
						"notes": ""
					}
				],
				"desc": "<p>The dragon can innately cast 1 spell at level 3 or below. It has a +5 bonus to hit and a DC 13 CHA. The spells listed are suggested.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The dragon makes three attacks: one with its bite and two with its claws.</p>"
			},
			{
				"name": "bite",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "10",
						"default": "15",
						"rolls": "2",
						"die": "10",
						"mod": "4",
						"damageType": "piercing",
						"notes": ""
					},
					{
						"type": "plus",
						"handed": "",
						"reach": "",
						"default": "4",
						"rolls": "1",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "claw",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "7",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "11",
						"rolls": "2",
						"die": "6",
						"mod": "4",
						"damageType": "slashing",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "cold breath",
				"perDay": "",
				"recharge": "5-6",
				"ability": "con",
				"dc": "15",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "ranged",
						"handed": "",
						"reach": "",
						"default": "45",
						"rolls": "10",
						"die": "8",
						"mod": "",
						"damageType": "cold",
						"notes": ""
					}
				],
				"desc": "<p>The dragon exhales fire in a 30ft cone. Each creature in that area must make a DC 15 CON saving throw, taking 45(10d8) cold damage on a failed save, or half as much damage on a successful one.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	},
	{	"name": "yochlol",
		"pro": "",
		"src": "",
		"desc": "<p>The yochlols are the handmaidens of Lolth&mdash;extensions of the Spider Queen's will, dedicated to acting as her spies, taskmasters, and agents of villainy. They attend their goddess in the Demonweb Pits, but Lolth sometimes dispatches yochlols to the Material Plane to guard her temples and to aid her most devout priestesses. Yochlols don't form outside Lolth's realm of the Demonweb, and they serve no demon lords except their queen.</p><p>Outside the Abyss, a yochlol can assume the guise of a female drow or monstrous spider to conceal its demonic form. In its true form, the fiend appears as a pillar of yellow slime with a single malevolent eye. In its drow and true form, a yochlol's touch carries the same venomous touch as its spider form's bite.</p>",
		"size": "medium",
		"type": "fiend",
		"class": "",
		"tag": "demon",
		"alignment": "chaotic evil",
		"ac": "15",
		"armor": ["natural"],
		"hp": {
			"default": "136",
			"rolls": "16",
			"die": "8",
			"mod": "64"
		},
		"speed": [
			{
				"type": "climb",
				"distance": "30",
				"notes": ""
			},
			{
				"type": "walk",
				"distance": "30",
				"notes": ""
			}
		],
		"str": "15",
		"dex": "14",
		"con": "18",
		"int": "13",
		"wis": "15",
		"chr": "15",
		"savingThrows": [
			{
				"attribute": "dex",
				"mod": "6"
			},
			{
				"attribute": "int",
				"mod": "5"
			},
			{
				"attribute": "wis",
				"mod": "6"
			},
			{
				"attribute": "cha",
				"mod": "6"
			}
		],
		"skills": [
			{
				"name": "deception",
				"mod": "10"
			},
			{
				"name": "insight",
				"mod": "6"
			}
		],
		"damageVuln": [""],
		"damageRes": ["cold","fire","lightning","bludgeoning","piercing","slashing"],
		"damageImm": ["poison"],
		"conditionImm": ["poisoned"],
		"armorProf": [""],
		"weaponProf": [""],
		"toolProf": [""],
		"senses": [
			{
				"type": "darkvision",
				"distance": "120",
				"notes": ""
			}
		],
		"passivePer": "12",
		"languages": {
		"speaks": ["abyssal","elvish","undercommon"],
		"understands": [""]
		},
		"challengeRating": "10",
		"traits": [
			{
				"name": "shapechanger",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The yochlol can use its action to polymorph into a form that resembles a female drow or giant spider, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.</p>"
			},
			{
				"name": "magic resistance",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The yochlol has advantage on saving throws against spells and other magical effects. Spider Climb. The yochlol ca n climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>"
			},
			{
				"name": "innate spellcasting",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "cha",
				"dc": "14",
				"spell": [
					{
						"level": "",
						"rate": "at will",
						"span": "",
						"titles": ["detect thoughts","web"],
						"notes": ""
					},
					{
						"level": "",
						"rate": "1",
						"span": "day",
						"titles": ["dominate person"],
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "web walker",
				"perDay": "",
				"recharge": "",
				"attackMod": "",
				"default": "",
				"rolls": "",
				"die": "",
				"mod": "",
				"type": "",
				"ability": "",
				"dc": "",
				"spell": [
					{
						"level": "",
						"rate": "",
						"span": "",
						"titles": [""],
						"notes": ""
					}
				],
				"desc": "<p>The yochlol ignores movement restrictions caused by webbing.</p>"
			}
		],
		"actions": [
			{
				"name": "multiattack",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The yochlol makes two melee attacks.</p>"
			},
			{
				"name": "slam (bite in spider form)",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "6",
				"targetNum": "1",
				"weapon": [
					{
						"type": "melee",
						"handed": "",
						"reach": "5",
						"default": "5",
						"rolls": "1",
						"die": "6",
						"mod": "2",
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
						"mod": "2",
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
						"mod": "",
						"damageType": "poison",
						"notes": ""
					}
				],
				"desc": ""
			},
			{
				"name": "mist form",
				"perDay": "",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>The yochlol transforms into toxic mist or reverts to its true form. Any equipment it is wearing or carrying is also transformed. It reverts to its true form if it dies. While in mist form, the yochlol is incapacitated and can't speak. It has a flying speed of 30ft, can hover, and can pass through any space that isn't airtight. It has advantage on STR, DEX, and CON saving throws, and it is immune to nonmagical damage.</p><p>While in mist form, the yochlol can enter a creature's space and stop there. Each time that creature starts its turn with the yochlol in its space, the creature must succeed on a DC 14 CON saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target is incapacitated.</p>"
			},
			{
				"name": "summon demon - variant",
				"perDay": "1",
				"recharge": "",
				"ability": "",
				"dc": "",
				"attackMod": "",
				"targetNum": "",
				"weapon": [
					{
						"type": "",
						"handed": "",
						"reach": "",
						"default": "",
						"rolls": "",
						"die": "",
						"mod": "",
						"damageType": "",
						"notes": ""
					}
				],
				"desc": "<p>A yochlol has a 5O% chance of summoning one yochlol. A summoned demon appears in an unoccupied space within 60ft of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.</p>"
			}
		],
		"reactions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"legendaryActions": [
			{
				"name": "",
				"desc": ""
			}
		],
		"lair": {
			"desc": "",
			"initiative": "",
			"actionDc": "",
			"actions": [""],
			"restrictions": "",
			"traits": [""]
		},
		"regional": {
			"effects": [""],
			"recovery": {
				"rolls": "",
				"die": "",
				"unit": ""
			}
		}
	}
]