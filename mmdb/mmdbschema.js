{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://www.edmonan.com/schemas/creature.js",
    "items": {
        "description": "creature",
        "properties": {
            "name": {
                "description": "name, species or title",
                "type": "string"
            },
            "pro": {
                "description": "pronounciation of name",
                "pattern": "[a-zA-Z-]*",
                "type": "string"
            },
            "src": {
                "description": "array of image objects",
                "items": {
                    "description": "image object",
                    "properties": {
                        "type": {
                            "description": "image usage",
                            "enum": ["additional","marker","profile","tent"],
                            "type": "string"
                        },
                        "url": {
                            "description": "image file url",
                            "format": "uri",
                            "type": "string"
                        }
                    },
                    "required": ["type", "url"],
                    "type": "object"
                },
                "type": "array",
                "uniqueItems": true
            },
            "desc": {
                "description": "html creature desription",
                "type": "string"
            },
			"size": {
                "description": "size",
                "enum": ["gargantuan","huge","large","medium","small","tiny"],
                "type": "string"
            },
            "type": {
                "description": "fundamental nature, comparable to the biological classification 'family'",
                "enum": ["aberrations","beasts","celestials","constructs","dragons","elementals","fey","fiends","giants","humanoids","monstrosities","oozes","plants","undead"],
                "type": "string"
            },
            "class": {
                "description": "subset of type, comparable to the biological classification 'genus'",
                "enum": ["angels","animated objects","blights","demons","devils","dinosaurs","dragons","drow","elementals","fungi","genies","ghouls","giants"],
                "type": "string"
            },
            "tag": {
                "description": "subset of class, comparable to the biological classification 'species'",
                "type": "string"
            },
            "alignment": {
                "description": "alignment",
                "enum": ["any","any evil","chaotic evil","chaotic good","chaotic good (75%)/neutral evil (25%)","chaotic neutral","lawful evil","lawful good","lawful neutral","neutral evil","neutral good","neutral good (50%)/neutral evil (50%)","neutral neutral","unaligned"],
                "type": "string"
            },
            "ac": {
                "description": "armor class",
                "maximum": 0, // update based on final data
                "minimum": 100, // update based on final data
                "type": "number"
            }
            "armor": {
                "description": "array of armor/accessories",
                "items": {
                    "type": "string"
                },
                "type": "array",
                "uniqueItems": true
            }
            "hp": {
                "description": "hit points object",
                "type": "object",
                "properties": {
                    "default": {
                        "description": "default hp value",
                        "type": "number"
                    },
                    "rolls": {
                        "description": "number of die rolls",
                        "type": "number"
                    },
                    "die": {
                        "description": "the die number of sides",
                        "enum": [4,6,8,10,12,20],
                        "type": "number"
                    },
                    "mod": {
                        "description": "positive or negative modifier",
                        "type": "number"
                    }
                },
                "required": ["default", "rolls", "die"]
            },
            "speed": {
                "description": "array of speed types/values",
                "items": {
                    "description": "speed object",
                    "properties": {
                        "type": {
                            "description": "type of movement",
                            "enum": ["burrow","climb","fly","foot","swim"],
                            "type": "string"
                        },
                        "distance": {
                            "description": "number of feet the creature can move per turn",
                            "type": "number"
                        },
                        "notes": {
                            "description": "notes for speed type",
                            "type": "string"
                        }
                    },
                    "required": ["type", "distance"],
                    "type": "object"
                },
                "type": "array",
                "uniqueItems": true
            },
            "str": {
                "description": "strength",
                "maximum": 30,
                "minimum": 1,
                "type": "number"
            },
            "dex": {
                "description": "dexterity",
                "maximum": 30,
                "minimum": 1,
                "type": "number"
            },
            "con": {
                "description": "constitution",
                "maximum": 30,
                "minimum": 1,
                "type": "number"
            },
            "int": {
                "description": "intelligence",
                "maximum": 30,
                "minimum": 1,
                "type": "number"
            },
            "wis": {
                "description": "wisdom",
                "maximum": 30,
                "minimum": 1,
                "type": "number"
            },
            "cha": {
                "description": "charisma",
                "maximum": 30,
                "minimum": 1,
                "type": "number"
            },
            "savingThrows": {
                "description": "array of saving throw modifier objects",
                "items": {
                    "description": "saving throw modifier object",
                    "properties": {
                        "attribute": {
                            "description": "saving throw modifier attribute",
                            "enum": ["str","dex","con","int","wis","chr"],
                            "type": "string"
                        },
                        "mod": {
                            "description": "saving throw modifier value",
                            "type": "number"
                        }
                    },
                    "required": ["attribute", "mod"],
                    "type": "object"
                },
                "type": "array",
                "uniqueItems": true
            },



        },
        "required": ["name","desc","size","type","alignment","ac","hp","speed","str","dex","con","int","wis","chr","passivePer","challengeRating"],
        "title": "creature",
        "type": "object"




            "XX_ITEM_NAME_XX": {
                "type": "number",
                "minimum": 0,
                "exclusiveMinimum": true
            },
            
            "XX_ITEM_NAME_XX": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "minItems": 1,
                "uniqueItems": true
            },

            "XX_ITEM_NAME_XX": {
                "type": "object",
                "properties": {
                    "length": {"type": "number"},
                    "width": {"type": "number"},
                    "height": {"type": "number"}
                },
                "required": ["length", "width", "height"]
            },

            "XX_ITEM_NAME_XX": {
                "description": "Coordinates of the warehouse with the product",
                "$ref": "http://json-schema.org/geo"
            }
        },
        "required": ["id", "name", "price"],
        
    },
    "title": "Dungeons & Dragons 5th Edition Creature",
    "type": "array"
}