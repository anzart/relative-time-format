import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yrl';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;