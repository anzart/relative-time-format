import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BS';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;