var long = {
	"year": {
		"previous": "le anno passate",
		"current": "iste anno",
		"next": "le anno proxime",
		"past": "-{0} y",
		"future": "+{0} y"
	},
	"quarter": {
		"previous": "le trimestre passate",
		"current": "iste trimestre",
		"next": "le trimestre proxime",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "le mense passate",
		"current": "iste mense",
		"next": "le mense proxime",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "le septimana passate",
		"current": "iste septimana",
		"next": "le septimana proxime",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "heri",
		"current": "hodie",
		"next": "deman",
		"past": "-{0} d",
		"future": "+{0} d"
	},
	"hour": {
		"current": "iste hora",
		"past": "-{0} h",
		"future": "+{0} h"
	},
	"minute": {
		"current": "iste minuta",
		"past": "-{0} min",
		"future": "+{0} min"
	},
	"second": {
		"current": "ora",
		"past": "-{0} s",
		"future": "+{0} s"
	}
}

var short = {
	"year": {
		"previous": "le anno passate",
		"current": "iste anno",
		"next": "le anno proxime",
		"past": "-{0} y",
		"future": "+{0} y"
	},
	"quarter": {
		"previous": "le trimestre passate",
		"current": "iste trimestre",
		"next": "le trimestre proxime",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "le mense passate",
		"current": "iste mense",
		"next": "le mense proxime",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "le septimana passate",
		"current": "iste septimana",
		"next": "le septimana proxime",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "heri",
		"current": "hodie",
		"next": "deman",
		"past": "-{0} d",
		"future": "+{0} d"
	},
	"hour": {
		"current": "iste hora",
		"past": "-{0} h",
		"future": "+{0} h"
	},
	"minute": {
		"current": "iste minuta",
		"past": "-{0} min",
		"future": "+{0} min"
	},
	"second": {
		"current": "ora",
		"past": "-{0} s",
		"future": "+{0} s"
	}
}

var narrow = {
	"year": {
		"previous": "le anno passate",
		"current": "iste anno",
		"next": "le anno proxime",
		"past": "-{0} y",
		"future": "+{0} y"
	},
	"quarter": {
		"previous": "le trimestre passate",
		"current": "iste trimestre",
		"next": "le trimestre proxime",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "le mense passate",
		"current": "iste mense",
		"next": "le mense proxime",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "le septimana passate",
		"current": "iste septimana",
		"next": "le septimana proxime",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "heri",
		"current": "hodie",
		"next": "deman",
		"past": "-{0} d",
		"future": "+{0} d"
	},
	"hour": {
		"current": "iste hora",
		"past": "-{0} h",
		"future": "+{0} h"
	},
	"minute": {
		"current": "iste minuta",
		"past": "-{0} min",
		"future": "+{0} min"
	},
	"second": {
		"current": "ora",
		"past": "-{0} s",
		"future": "+{0} s"
	}
}

var quantify = function(n){var r=!String(n).split(".")[1];return 1==n&&r?"one":"other"}

module.exports = {
	locale: "ia",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}