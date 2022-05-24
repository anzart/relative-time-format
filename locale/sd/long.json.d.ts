import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sd';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;