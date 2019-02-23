var long = {
	"year": {
		"previous": "iaz",
		"current": "aurten",
		"next": "hurrengo urtean",
		"past": "Duela {0} urte",
		"future": "{0} urte barru"
	},
	"quarter": {
		"previous": "aurreko hiruhilekoa",
		"current": "hiruhileko hau",
		"next": "hurrengo hiruhilekoa",
		"past": "Duela {0} hiruhileko",
		"future": "{0} hiruhileko barru"
	},
	"month": {
		"previous": "aurreko hilabetean",
		"current": "hilabete honetan",
		"next": "hurrengo hilabetean",
		"past": "Duela {0} hilabete",
		"future": "{0} hilabete barru"
	},
	"week": {
		"previous": "aurreko astean",
		"current": "aste honetan",
		"next": "hurrengo astean",
		"past": "Duela {0} aste",
		"future": "{0} aste barru"
	},
	"day": {
		"previous": "atzo",
		"previous-2": "herenegun",
		"current": "gaur",
		"next": "bihar",
		"next-2": "etzi",
		"past": "Duela {0} egun",
		"future": "{0} egun barru"
	},
	"hour": {
		"current": "ordu honetan",
		"past": "Duela {0} ordu",
		"future": "{0} ordu barru"
	},
	"minute": {
		"current": "minutu honetan",
		"past": "Duela {0} minutu",
		"future": "{0} minutu barru"
	},
	"second": {
		"current": "orain",
		"past": "Duela {0} segundo",
		"future": "{0} segundo barru"
	}
}

var short = {
	"year": {
		"previous": "aurreko urtea",
		"current": "aurten",
		"next": "hurrengo urtea",
		"past": "Duela {0} urte",
		"future": "{0} urte barru"
	},
	"quarter": {
		"previous": "aurreko hiruhilekoa",
		"current": "hiruhileko hau",
		"next": "hurrengo hiruhilekoa",
		"past": "Duela {0} hiruhileko",
		"future": "{0} hiruhileko barru"
	},
	"month": {
		"previous": "aurreko hilabetean",
		"current": "hilabete honetan",
		"next": "hurrengo hilabetean",
		"past": "Duela {0} hilabete",
		"future": "{0} hilabete barru"
	},
	"week": {
		"previous": "aurreko astean",
		"current": "aste honetan",
		"next": "hurrengo astean",
		"past": "Duela {0} aste",
		"future": "{0} aste barru"
	},
	"day": {
		"previous": "atzo",
		"previous-2": "herenegun",
		"current": "gaur",
		"next": "bihar",
		"next-2": "etzi",
		"past": "Duela {0} egun",
		"future": "{0} egun barru"
	},
	"hour": {
		"current": "ordu honetan",
		"past": "Duela {0} ordu",
		"future": "{0} ordu barru"
	},
	"minute": {
		"current": "minutu honetan",
		"past": "Duela {0} minutu",
		"future": "{0} minutu barru"
	},
	"second": {
		"current": "orain",
		"past": "Duela {0} segundo",
		"future": "{0} segundo barru"
	}
}

var narrow = {
	"year": {
		"previous": "aurreko urtea",
		"current": "aurten",
		"next": "hurrengo urtea",
		"past": "Duela {0} urte",
		"future": "{0} urte barru"
	},
	"quarter": {
		"previous": "aurreko hiruhilekoa",
		"current": "hiruhileko hau",
		"next": "hurrengo hiruhilekoa",
		"past": "Duela {0} hiruhileko",
		"future": "{0} hiruhileko barru"
	},
	"month": {
		"previous": "aurreko hilabetean",
		"current": "hilabete honetan",
		"next": "hurrengo hilabetean",
		"past": "Duela {0} hilabete",
		"future": "{0} hilabete barru"
	},
	"week": {
		"previous": "aurreko astean",
		"current": "aste honetan",
		"next": "hurrengo astean",
		"past": "Duela {0} aste",
		"future": "{0} aste barru"
	},
	"day": {
		"previous": "atzo",
		"previous-2": "herenegun",
		"current": "gaur",
		"next": "bihar",
		"next-2": "etzi",
		"past": "Duela {0} egun",
		"future": "{0} egun barru"
	},
	"hour": {
		"current": "ordu honetan",
		"past": "Duela {0} ordu",
		"future": "{0} ordu barru"
	},
	"minute": {
		"current": "minutu honetan",
		"past": "Duela {0} minutu",
		"future": "{0} minutu barru"
	},
	"second": {
		"current": "orain",
		"past": "Duela {0} segundo",
		"future": "{0} segundo barru"
	}
}

var quantify = function(n){return 1==n?"one":"other"}

module.exports = {
	locale: "eu",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}