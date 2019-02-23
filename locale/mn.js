var long = {
	"year": {
		"previous": "өнгөрсөн жил",
		"current": "энэ жил",
		"next": "ирэх жил",
		"past": "{0} жилийн өмнө",
		"future": "{0} жилийн дараа"
	},
	"quarter": {
		"previous": "өнгөрсөн улирал",
		"current": "энэ улирал",
		"next": "дараагийн улирал",
		"past": "{0} улирлын өмнө",
		"future": "{0} улирлын дараа"
	},
	"month": {
		"previous": "өнгөрсөн сар",
		"current": "энэ сар",
		"next": "ирэх сар",
		"past": "{0} сарын өмнө",
		"future": "{0} сарын дараа"
	},
	"week": {
		"previous": "өнгөрсөн долоо хоног",
		"current": "энэ долоо хоног",
		"next": "ирэх долоо хоног",
		"past": "{0} долоо хоногийн өмнө",
		"future": "{0} долоо хоногийн дараа"
	},
	"day": {
		"previous": "өчигдөр",
		"previous-2": "уржигдар",
		"current": "өнөөдөр",
		"next": "маргааш",
		"next-2": "нөгөөдөр",
		"past": "{0} өдрийн өмнө",
		"future": "{0} өдрийн дараа"
	},
	"hour": {
		"current": "энэ цаг",
		"past": "{0} цагийн өмнө",
		"future": "{0} цагийн дараа"
	},
	"minute": {
		"current": "энэ минут",
		"past": "{0} минутын өмнө",
		"future": "{0} минутын дараа"
	},
	"second": {
		"current": "одоо",
		"past": "{0} секундын өмнө",
		"future": "{0} секундын дараа"
	}
}

var short = {
	"year": {
		"previous": "өнгөрсөн жил",
		"current": "энэ жил",
		"next": "ирэх жил",
		"past": "{0} жилийн өмнө",
		"future": "{0} жилийн дараа"
	},
	"quarter": {
		"previous": "өнгөрсөн улирал",
		"current": "энэ улирал",
		"next": "дараагийн улирал",
		"past": "{0} улирлын өмнө",
		"future": "{0} улирлын дараа"
	},
	"month": {
		"previous": "өнгөрсөн сар",
		"current": "энэ сар",
		"next": "ирэх сар",
		"past": "{0} сарын өмнө",
		"future": "{0} сарын дараа"
	},
	"week": {
		"previous": "өнгөрсөн долоо хоног",
		"current": "энэ долоо хоног",
		"next": "ирэх долоо хоног",
		"past": "{0} 7 хоногийн өмнө",
		"future": "{0} 7 хоногийн дараа"
	},
	"day": {
		"previous": "өчигдөр",
		"previous-2": "уржигдар",
		"current": "өнөөдөр",
		"next": "маргааш",
		"next-2": "нөгөөдөр",
		"past": "{0} өдрийн өмнө",
		"future": "{0} өдрийн дараа"
	},
	"hour": {
		"current": "энэ цаг",
		"past": "{0} ц өмнө",
		"future": "{0} ц дараа"
	},
	"minute": {
		"current": "энэ минут",
		"past": "{0} мин өмнө",
		"future": "{0} мин дараа"
	},
	"second": {
		"current": "одоо",
		"past": "{0} сек өмнө",
		"future": "{0} сек дараа"
	}
}

var narrow = {
	"year": {
		"previous": "өнгөрсөн жил",
		"current": "энэ жил",
		"next": "ирэх жил",
		"past": "{0} жилийн өмнө",
		"future": "{0} жилийн дараа"
	},
	"quarter": {
		"previous": "өнгөрсөн улирал",
		"current": "энэ улирал",
		"next": "дараагийн улирал",
		"past": "{0} улирлын өмнө",
		"future": "{0} улирлын дараа"
	},
	"month": {
		"previous": "өнгөрсөн сар",
		"current": "энэ сар",
		"next": "ирэх сар",
		"past": "{0} сарын өмнө",
		"future": "{0} сарын дараа"
	},
	"week": {
		"previous": "өнгөрсөн долоо хоног",
		"current": "энэ долоо хоног",
		"next": "ирэх долоо хоног",
		"past": "{0} 7 хоногийн өмнө",
		"future": "{0} 7 хоногийн дараа"
	},
	"day": {
		"previous": "өчигдөр",
		"previous-2": "уржигдар",
		"current": "өнөөдөр",
		"next": "маргааш",
		"next-2": "нөгөөдөр",
		"past": "{0} өдрийн өмнө",
		"future": "{0} өдрийн дараа"
	},
	"hour": {
		"current": "энэ цаг",
		"past": "{0} ц өмнө",
		"future": "{0} ц дараа"
	},
	"minute": {
		"current": "энэ минут",
		"past": "{0} мин өмнө",
		"future": "{0} мин дараа"
	},
	"second": {
		"current": "одоо",
		"past": "{0} сек өмнө",
		"future": "{0} сек дараа"
	}
}

var quantify = function(n){return 1==n?"one":"other"}

module.exports = {
	locale: "mn",
	long: long,
	short: short,
	narrow: narrow,
	quantify: quantify
}