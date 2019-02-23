var long = {
	"year": {
		"previous": "Sannadkii la soo dhaafay",
		"current": "Sannadkan",
		"next": "Sannadka xiga",
		"past": "-{0} y",
		"future": "+{0} y"
	},
	"quarter": {
		"previous": "last quarter",
		"current": "this quarter",
		"next": "next quarter",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "Bishii la soo dhaafay",
		"current": "Bishan",
		"next": "Bisha xigta",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "Usbuucii la soo dhaafay",
		"current": "Usbuucan",
		"next": "Usbuuca xiga",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "Shalay",
		"current": "Maanta",
		"next": "Berri",
		"past": "-{0} d",
		"future": "+{0} d"
	},
	"hour": {
		"current": "this hour",
		"past": "-{0} h",
		"future": "+{0} h"
	},
	"minute": {
		"current": "this minute",
		"past": "-{0} min",
		"future": "+{0} min"
	},
	"second": {
		"current": "now",
		"past": "-{0} s",
		"future": "+{0} s"
	}
}

var short = {
	"year": {
		"previous": "Sannadkii la soo dhaafay",
		"current": "Sannadkan",
		"next": "Sannadka xiga",
		"past": "-{0} y",
		"future": "+{0} y"
	},
	"quarter": {
		"previous": "last quarter",
		"current": "this quarter",
		"next": "next quarter",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "Bishii la soo dhaafay",
		"current": "Bishan",
		"next": "Bisha xigta",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "Usbuucii la soo dhaafay",
		"current": "Usbuucan",
		"next": "Usbuuca xiga",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "Shalay",
		"current": "Maanta",
		"next": "Berri",
		"past": "-{0} d",
		"future": "+{0} d"
	},
	"hour": {
		"current": "this hour",
		"past": "-{0} h",
		"future": "+{0} h"
	},
	"minute": {
		"current": "this minute",
		"past": "-{0} min",
		"future": "+{0} min"
	},
	"second": {
		"current": "now",
		"past": "-{0} s",
		"future": "+{0} s"
	}
}

var narrow = {
	"year": {
		"previous": "Sannadkii la soo dhaafay",
		"current": "Sannadkan",
		"next": "Sannadka xiga",
		"past": "-{0} y",
		"future": "+{0} y"
	},
	"quarter": {
		"previous": "last quarter",
		"current": "this quarter",
		"next": "next quarter",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "Bishii la soo dhaafay",
		"current": "Bishan",
		"next": "Bisha xigta",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "Usbuucii la soo dhaafay",
		"current": "Usbuucan",
		"next": "Usbuuca xiga",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "Shalay",
		"current": "Maanta",
		"next": "Berri",
		"past": "-{0} d",
		"future": "+{0} d"
	},
	"hour": {
		"current": "this hour",
		"past": "-{0} h",
		"future": "+{0} h"
	},
	"minute": {
		"current": "this minute",
		"past": "-{0} min",
		"future": "+{0} min"
	},
	"second": {
		"current": "now",
		"past": "-{0} s",
		"future": "+{0} s"
	}
}

var quantify = function(n){return 1==n?"one":"other"}

module.exports = {
	locale: "so",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}