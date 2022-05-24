import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GH';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;