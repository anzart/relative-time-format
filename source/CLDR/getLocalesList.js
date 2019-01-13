import fs from 'fs'
import path from 'path'

/**
 * Returns a list of all locales supported by CLDR.
 * @return {string[]}
 */
export default function getLocalesList() {
	return fs.readdirSync(path.join(__dirname, '../../node_modules/cldr-dates-full/main/'))
		.filter(name => fs.statSync(path.join(__dirname, '../../node_modules/cldr-dates-full/main', name)).isDirectory())
}
