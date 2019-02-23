var long = {
	"year": {
		"previous": "پروسږکال",
		"current": "سږکال",
		"next": "بل کال",
		"past": {
			"one": "{0} کال مخکې",
			"other": "{0} کاله مخکې"
		},
		"future": {
			"one": "په {0} کال کې",
			"other": "په {0} کالونو کې"
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
		"previous": "last month",
		"current": "this month",
		"next": "next month",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "last week",
		"current": "this week",
		"next": "next week",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "yesterday",
		"current": "today",
		"next": "tomorrow",
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
		"previous": "پروسږکال",
		"current": "سږکال",
		"next": "بل کال",
		"past": {
			"one": "{0} کال مخکې",
			"other": "{0} کاله مخکې"
		},
		"future": {
			"one": "په {0} کال کې",
			"other": "په {0} کالونو کې"
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
		"previous": "last month",
		"current": "this month",
		"next": "next month",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "last week",
		"current": "this week",
		"next": "next week",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "yesterday",
		"current": "today",
		"next": "tomorrow",
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
		"previous": "پروسږکال",
		"current": "سږکال",
		"next": "بل کال",
		"past": {
			"one": "{0} کال مخکې",
			"other": "{0} کاله مخکې"
		},
		"future": {
			"one": "په {0} کال کې",
			"other": "په {0} کالونو کې"
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
		"previous": "last month",
		"current": "this month",
		"next": "next month",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "last week",
		"current": "this week",
		"next": "next week",
		"past": "-{0} w",
		"future": "+{0} w"
	},
	"day": {
		"previous": "yesterday",
		"current": "today",
		"next": "tomorrow",
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
	locale: "ps",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}