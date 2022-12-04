import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'raj';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;