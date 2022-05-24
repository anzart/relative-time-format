import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PW';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;