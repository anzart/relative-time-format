module.exports=function(n){var r=String(n).split("."),t=r[0],e=!r[1];return 1==n&&e?"one":2<=t&&t<=4&&e?"few":e?"other":"many"}