var long = {
	"year": {
		"previous": "last year",
		"current": "this year",
		"next": "next year",
		"past": "for {0} ukioq siden",
		"future": "om {0} ukioq"
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
		"past": "for {0} qaammat siden",
		"future": "om {0} qaammat"
	},
	"week": {
		"previous": "last week",
		"current": "this week",
		"next": "next week",
		"past": "for {0} sapaatip-akunnera siden",
		"future": "om {0} sapaatip-akunnera"
	},
	"day": {
		"previous": "yesterday",
		"current": "today",
		"next": "tomorrow",
		"past": "for {0} ulloq unnuarlu siden",
		"future": "om {0} ulloq unnuarlu"
	},
	"hour": {
		"current": "this hour",
		"past": "for {0} nalunaaquttap-akunnera siden",
		"future": "om {0} nalunaaquttap-akunnera"
	},
	"minute": {
		"current": "this minute",
		"past": "for {0} minutsi siden",
		"future": "om {0} minutsi"
	},
	"second": {
		"current": "now",
		"past": "for {0} sekundi siden",
		"future": "om {0} sekundi"
	}
}

var short = {
	"year": {
		"previous": "last year",
		"current": "this year",
		"next": "next year",
		"past": "for {0} ukioq siden",
		"future": "om {0} ukioq"
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
		"past": "for {0} qaammat siden",
		"future": "om {0} qaammat"
	},
	"week": {
		"previous": "last week",
		"current": "this week",
		"next": "next week",
		"past": "for {0} sapaatip-akunnera siden",
		"future": "om {0} sapaatip-akunnera"
	},
	"day": {
		"previous": "yesterday",
		"current": "today",
		"next": "tomorrow",
		"past": "for {0} ulloq unnuarlu siden",
		"future": "om {0} ulloq unnuarlu"
	},
	"hour": {
		"current": "this hour",
		"past": "for {0} nalunaaquttap-akunnera siden",
		"future": "om {0} nalunaaquttap-akunnera"
	},
	"minute": {
		"current": "this minute",
		"past": "for {0} minutsi siden",
		"future": "om {0} minutsi"
	},
	"second": {
		"current": "now",
		"past": "for {0} sekundi siden",
		"future": "om {0} sekundi"
	}
}

var narrow = {
	"year": {
		"previous": "last year",
		"current": "this year",
		"next": "next year",
		"past": "for {0} ukioq siden",
		"future": "om {0} ukioq"
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
		"past": "for {0} qaammat siden",
		"future": "om {0} qaammat"
	},
	"week": {
		"previous": "last week",
		"current": "this week",
		"next": "next week",
		"past": "for {0} sapaatip-akunnera siden",
		"future": "om {0} sapaatip-akunnera"
	},
	"day": {
		"previous": "yesterday",
		"current": "today",
		"next": "tomorrow",
		"past": "for {0} ulloq unnuarlu siden",
		"future": "om {0} ulloq unnuarlu"
	},
	"hour": {
		"current": "this hour",
		"past": "for {0} nalunaaquttap-akunnera siden",
		"future": "om {0} nalunaaquttap-akunnera"
	},
	"minute": {
		"current": "this minute",
		"past": "for {0} minutsi siden",
		"future": "om {0} minutsi"
	},
	"second": {
		"current": "now",
		"past": "for {0} sekundi siden",
		"future": "om {0} sekundi"
	}
}

var quantify = function(n){return 1==n?"one":"other"}

module.exports = {
	locale: "kl",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}