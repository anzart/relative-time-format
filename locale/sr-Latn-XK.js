// Equal to "sr-Latn".
var long = {
	"year": {
		"previous": "prošle godine",
		"current": "ove godine",
		"next": "sledeće godine",
		"past": {
			"one": "pre {0} godine",
			"few": "pre {0} godine",
			"other": "pre {0} godina"
		},
		"future": {
			"one": "za {0} godinu",
			"few": "za {0} godine",
			"other": "za {0} godina"
		}
	},
	"quarter": {
		"previous": "prošlog kvartala",
		"current": "ovog kvartala",
		"next": "sledećeg kvartala",
		"past": "pre {0} kvartala",
		"future": {
			"one": "za {0} kvartal",
			"other": "za {0} kvartala"
		}
	},
	"month": {
		"previous": "prošlog meseca",
		"current": "ovog meseca",
		"next": "sledećeg meseca",
		"past": {
			"one": "pre {0} meseca",
			"few": "pre {0} meseca",
			"other": "pre {0} meseci"
		},
		"future": {
			"one": "za {0} mesec",
			"few": "za {0} meseca",
			"other": "za {0} meseci"
		}
	},
	"week": {
		"previous": "prošle nedelje",
		"current": "ove nedelje",
		"next": "sledeće nedelje",
		"past": {
			"one": "pre {0} nedelje",
			"few": "pre {0} nedelje",
			"other": "pre {0} nedelja"
		},
		"future": {
			"one": "za {0} nedelju",
			"few": "za {0} nedelje",
			"other": "za {0} nedelja"
		}
	},
	"day": {
		"previous": "juče",
		"previous-2": "prekjuče",
		"current": "danas",
		"next": "sutra",
		"next-2": "prekosutra",
		"past": "pre {0} dana",
		"future": {
			"one": "za {0} dan",
			"other": "za {0} dana"
		}
	},
	"hour": {
		"current": "ovog sata",
		"past": {
			"one": "pre {0} sata",
			"few": "pre {0} sata",
			"other": "pre {0} sati"
		},
		"future": {
			"one": "za {0} sat",
			"few": "za {0} sata",
			"other": "za {0} sati"
		}
	},
	"minute": {
		"current": "ovog minuta",
		"past": "pre {0} minuta",
		"future": {
			"one": "za {0} minut",
			"other": "za {0} minuta"
		}
	},
	"second": {
		"current": "sada",
		"past": {
			"one": "pre {0} sekunde",
			"few": "pre {0} sekunde",
			"other": "pre {0} sekundi"
		},
		"future": {
			"one": "za {0} sekundu",
			"few": "za {0} sekunde",
			"other": "za {0} sekundi"
		}
	}
}

// Equal to "sr-Latn".
var short = {
	"year": {
		"previous": "prošle god.",
		"current": "ove god.",
		"next": "sledeće god.",
		"past": "pre {0} god.",
		"future": "za {0} god."
	},
	"quarter": {
		"previous": "prošlog kvartala",
		"current": "ovog kvartala",
		"next": "sledećeg kvartala",
		"past": "pre {0} kv.",
		"future": "za {0} kv."
	},
	"month": {
		"previous": "prošlog mes.",
		"current": "ovog mes.",
		"next": "sledećeg mes.",
		"past": "pre {0} mes.",
		"future": "za {0} mes."
	},
	"week": {
		"previous": "prošle ned.",
		"current": "ove ned.",
		"next": "sledeće ned.",
		"past": "pre {0} ned.",
		"future": "za {0} ned."
	},
	"day": {
		"previous": "juče",
		"previous-2": "prekjuče",
		"current": "danas",
		"next": "sutra",
		"next-2": "prekosutra",
		"past": "pre {0} d.",
		"future": "za {0} d."
	},
	"hour": {
		"current": "ovog sata",
		"past": "pre {0} č.",
		"future": "za {0} č."
	},
	"minute": {
		"current": "ovog minuta",
		"past": "pre {0} min.",
		"future": "za {0} min."
	},
	"second": {
		"current": "sada",
		"past": "pre {0} sek.",
		"future": "za {0} sek."
	}
}

// Equal to "sr-Latn".
var narrow = {
	"year": {
		"previous": "prošle g.",
		"current": "ove g.",
		"next": "sledeće g.",
		"past": "pre {0} g.",
		"future": "za {0} g."
	},
	"quarter": {
		"previous": "prošlog kvartala",
		"current": "ovog kvartala",
		"next": "sledećeg kvartala",
		"past": "pre {0} kv.",
		"future": "za {0} kv."
	},
	"month": {
		"previous": "prošlog m.",
		"current": "ovog m.",
		"next": "sledećeg m.",
		"past": "pre {0} m.",
		"future": "za {0} m."
	},
	"week": {
		"previous": "prošle n.",
		"current": "ove n.",
		"next": "sledeće n.",
		"past": "pre {0} n.",
		"future": "za {0} n."
	},
	"day": {
		"previous": "juče",
		"previous-2": "prekjuče",
		"current": "danas",
		"next": "sutra",
		"next-2": "prekosutra",
		"past": "pre {0} d.",
		"future": "za {0} d."
	},
	"hour": {
		"current": "ovog sata",
		"past": "pre {0} č.",
		"future": "za {0} č."
	},
	"minute": {
		"current": "ovog minuta",
		"past": "pre {0} min.",
		"future": "za {0} min."
	},
	"second": {
		"current": "sada",
		"past": "pre {0} s.",
		"future": "za {0} s."
	}
}

// Equal to "sr".
var quantify = function(e){var i=String(e).split("."),s=i[0],c=i[1]||"",l=!i[1],n=s.slice(-1),r=s.slice(-2),t=c.slice(-1),f=c.slice(-2);return l&&1==n&&11!=r||1==t&&11!=f?"one":l&&2<=n&&n<=4&&(r<12||14<r)||2<=t&&t<=4&&(f<12||14<f)?"few":"other"}

module.exports = {
	locale: "sr-Latn-XK",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}