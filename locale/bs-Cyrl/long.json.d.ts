import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bs-Cyrl';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;