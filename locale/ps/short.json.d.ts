import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ps';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;