import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;