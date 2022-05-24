import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FI';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;