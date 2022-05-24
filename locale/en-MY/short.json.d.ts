import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MY';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;