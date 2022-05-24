import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-MX';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;