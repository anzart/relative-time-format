import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'uz-Cyrl';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;