module.exports=function(e){var i=String(e).split("."),n=Number(i[0])==e,r=n&&i[0].slice(-1),s=n&&i[0].slice(-2);return 1==r&&11!=s?"one":2<=r&&r<=4&&(s<12||14<s)?"few":n&&0==r||5<=r&&r<=9||11<=s&&s<=14?"many":"other"}