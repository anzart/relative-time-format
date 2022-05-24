import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-LU';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;