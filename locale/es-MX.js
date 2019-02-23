var long = {
	"year": {
		"previous": "el año pasado",
		"current": "este año",
		"next": "el año próximo",
		"past": {
			"one": "hace {0} año",
			"other": "hace {0} años"
		},
		"future": {
			"one": "dentro de {0} año",
			"other": "dentro de {0} años"
		}
	},
	"quarter": {
		"previous": "el trimestre pasado",
		"current": "este trimestre",
		"next": "el próximo trimestre",
		"past": {
			"one": "hace {0} trimestre",
			"other": "hace {0} trimestres"
		},
		"future": {
			"one": "dentro de {0} trimetre",
			"other": "dentro de {0} trimetres"
		}
	},
	"month": {
		"previous": "el mes pasado",
		"current": "este mes",
		"next": "el mes próximo",
		"past": {
			"one": "hace {0} mes",
			"other": "hace {0} meses"
		},
		"future": {
			"one": "en {0} mes",
			"other": "en {0} meses"
		}
	},
	"week": {
		"previous": "la semana pasada",
		"current": "esta semana",
		"next": "la semana próxima",
		"past": {
			"one": "hace {0} semana",
			"other": "hace {0} semanas"
		},
		"future": {
			"one": "dentro de {0} semana",
			"other": "dentro de {0} semanas"
		}
	},
	"day": {
		"previous": "ayer",
		"previous-2": "anteayer",
		"current": "hoy",
		"next": "mañana",
		"next-2": "pasado mañana",
		"past": {
			"one": "hace {0} día",
			"other": "hace {0} días"
		},
		"future": {
			"one": "dentro de {0} día",
			"other": "dentro de {0} días"
		}
	},
	"hour": {
		"current": "esta hora",
		"past": {
			"one": "hace {0} hora",
			"other": "hace {0} horas"
		},
		"future": {
			"one": "dentro de {0} hora",
			"other": "dentro de {0} horas"
		}
	},
	"minute": {
		"current": "este minuto",
		"past": {
			"one": "hace {0} minuto",
			"other": "hace {0} minutos"
		},
		"future": {
			"one": "dentro de {0} minuto",
			"other": "dentro de {0} minutos"
		}
	},
	"second": {
		"current": "ahora",
		"past": {
			"one": "hace {0} segundo",
			"other": "hace {0} segundos"
		},
		"future": {
			"one": "dentro de {0} segundo",
			"other": "dentro de {0} segundos"
		}
	}
}

var short = {
	"year": {
		"previous": "el año pasado",
		"current": "este año",
		"next": "el próximo año",
		"past": "hace {0} a",
		"future": "en {0} a"
	},
	"quarter": {
		"previous": "el trimestre pasado",
		"current": "este trimestre",
		"next": "el próximo trimestre",
		"past": "hace {0} trim.",
		"future": {
			"one": "en {0} trim.",
			"other": "en {0} trim"
		}
	},
	"month": {
		"previous": "el mes pasado",
		"current": "este mes",
		"next": "el próximo mes",
		"past": "hace {0} m",
		"future": "en {0} m"
	},
	"week": {
		"previous": "la semana pasada",
		"current": "esta semana",
		"next": "la semana próxima",
		"past": "hace {0} sem.",
		"future": "en {0} sem."
	},
	"day": {
		"previous": "ayer",
		"previous-2": "anteayer",
		"current": "hoy",
		"next": "mañana",
		"next-2": "pasado mañana",
		"past": {
			"one": "hace {0} día",
			"other": "hace {0} días"
		},
		"future": {
			"one": "en {0} día",
			"other": "en {0} días"
		}
	},
	"hour": {
		"current": "esta hora",
		"past": "hace {0} h",
		"future": {
			"one": "en {0} h",
			"other": "en {0} n"
		}
	},
	"minute": {
		"current": "este minuto",
		"past": "hace {0} min",
		"future": "en {0} min"
	},
	"second": {
		"current": "ahora",
		"past": "hace {0} s",
		"future": "en {0} s"
	}
}

var narrow = {
	"year": {
		"previous": "el año pasado",
		"current": "este año",
		"next": "el próximo año",
		"past": "-{0} a",
		"future": "en {0} a"
	},
	"quarter": {
		"previous": "el trimestre pasado",
		"current": "este trimestre",
		"next": "el próximo trimestre",
		"past": "-{0} T",
		"future": "+{0} T"
	},
	"month": {
		"previous": "el mes pasado",
		"current": "este mes",
		"next": "el próximo mes",
		"past": "-{0} m",
		"future": "+{0} m"
	},
	"week": {
		"previous": "la semana pasada",
		"current": "esta semana",
		"next": "la semana próxima",
		"past": "hace {0} sem.",
		"future": "dentro de {0} sem."
	},
	"day": {
		"previous": "ayer",
		"previous-2": "anteayer",
		"current": "hoy",
		"next": "mañana",
		"next-2": "pasado mañana",
		"past": {
			"one": "hace {0} día",
			"other": "hace {0} días"
		},
		"future": {
			"one": "+{0} día",
			"other": "+{0} días"
		}
	},
	"hour": {
		"current": "esta hora",
		"past": "hace {0} h",
		"future": "dentro de {0} h"
	},
	"minute": {
		"current": "este minuto",
		"past": "-{0} min",
		"future": "+{0} min"
	},
	"second": {
		"current": "ahora",
		"past": "hace {0} s",
		"future": "+{0} s"
	}
}

// Equal to "es".
var quantify = function(n){return 1==n?"one":"other"}

module.exports = {
	locale: "es-MX",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}