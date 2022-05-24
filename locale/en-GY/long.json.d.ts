import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GY';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;