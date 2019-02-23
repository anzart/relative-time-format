var long = {
	"year": {
		"previous": "läz Johr",
		"current": "diß Johr",
		"next": "näx Johr",
		"past": {
			"zero": "vör keijnem Johr",
			"one": "vör {0} Johr",
			"other": "vör {0} Johre"
		},
		"future": {
			"zero": "en keinem Johr",
			"one": "en {0} Johr",
			"other": "en {0} Johre"
		}
	},
	"quarter": {
		"previous": "last quarter",
		"current": "this quarter",
		"next": "next quarter",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "lätzde Mohnd",
		"current": "diese Mohnd",
		"next": "nächste Mohnd",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "läz Woch",
		"current": "di Woch",
		"next": "nächste Woche",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "jestere",
		"previous-2": "vörjestere",
		"current": "hück",
		"next": "morje",
		"next-2": "övvermorje",
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
		"previous": "läz Johr",
		"current": "diß Johr",
		"next": "näx Johr",
		"past": {
			"zero": "vör keijnem Johr",
			"one": "vör {0} Johr",
			"other": "vör {0} Johre"
		},
		"future": {
			"zero": "en keinem Johr",
			"one": "en {0} Johr",
			"other": "en {0} Johre"
		}
	},
	"quarter": {
		"previous": "last quarter",
		"current": "this quarter",
		"next": "next quarter",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "lätzde Mohnd",
		"current": "diese Mohnd",
		"next": "nächste Mohnd",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "läz Woch",
		"current": "di Woch",
		"next": "nächste Woche",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "jestere",
		"previous-2": "vörjestere",
		"current": "hück",
		"next": "morje",
		"next-2": "övvermorje",
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
		"previous": "läz Johr",
		"current": "diß Johr",
		"next": "näx Johr",
		"past": {
			"zero": "vör keijnem Johr",
			"one": "vör {0} Johr",
			"other": "vör {0} Johre"
		},
		"future": {
			"zero": "en keinem Johr",
			"one": "en {0} Johr",
			"other": "en {0} Johre"
		}
	},
	"quarter": {
		"previous": "last quarter",
		"current": "this quarter",
		"next": "next quarter",
		"past": "-{0} Q",
		"future": "+{0} Q"
	},
	"month": {
		"previous": "lätzde Mohnd",
		"current": "diese Mohnd",
		"next": "nächste Mohnd",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "läz Woch",
		"current": "di Woch",
		"next": "nächste Woche",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "jestere",
		"previous-2": "vörjestere",
		"current": "hück",
		"next": "morje",
		"next-2": "övvermorje",
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

var quantify = function(e){return 0==e?"zero":1==e?"one":"other"}

module.exports = {
	locale: "ksh",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}