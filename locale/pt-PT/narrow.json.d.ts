import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-PT';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;