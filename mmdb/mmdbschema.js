{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "items": {
        "title": "creature",
        "type": "object",
        "properties": {
            "name": {
                "description": "name, species or title",
                "type": "string"
            },
            "pro": {
                "description": "pronounciation",
                "type": "string"
            },
            "src": {
                "description": "url of image file",
                "format": "uri",
                "type": "string"
            },
            "desc": {
                "description": "desription using html",
                "type": "string"
            },
			"size": {
                "description": "size",
                "enum": ["gargantuan","huge","large","medium","small","tiny"],
                "type": "string"
            },
            "type": {
                "description": "fundamental nature, comparable to the biological classification ranking 'family'",
                "enum": ["aberrations","beasts","celestials","constructs","dragons","elementals","fey","fiends","giants","humanoids","monstrosities","oozes","plants","undead"],
                "type": "string"
            },
            "class": {
                "description": "subset of type, comparable to the biological classification ranking 'genus'",
                "type": "string"
            },
            "tag": {
                "description": "subset of class, comparable to the biological classification ranking 'species'",
                "type": "string"
            },
            "alignment": {
                "description": "alignment",
                "enum": ["chaotic evil","chaotic good","chaotic neutral","lawful evil","lawful good","lawful neutral","neutral evil","neutral good","neutral neutral","unaligned"],
                "type": "string"
            },
            "ac": {
                "description": "armor class",
                "type": "string"
            }




			"XX_PROPERTY_XX": {
                "description": "XX_DESCRIPTION_XX",
                "items": {},
                "properties": {}
                "type": "XX_TYPE_XX"
            },




            "price": {
                "type": "number",
                "minimum": 0,
                "exclusiveMinimum": true
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "minItems": 1,
                "uniqueItems": true
            },
            "dimensions": {
                "type": "object",
                "properties": {
                    "length": {"type": "number"},
                    "width": {"type": "number"},
                    "height": {"type": "number"}
                },
                "required": ["length", "width", "height"]
            },
            "warehouseLocation": {
                "description": "Coordinates of the warehouse with the product",
                "$ref": "http://json-schema.org/geo"
            }
        },
        "required": ["id", "name", "price"]
    },
    "title": "Dungeons & Dragons 5th Edition Monster Manual and Errata Database",
    "type": "array"
}