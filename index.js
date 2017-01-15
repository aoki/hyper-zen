'use strict';
module.exports.onWindow = browserWindow => 
  browserWindow.setVibrancy('dark');

const foregroundColor = '#F6F7F8'; // Geppaku 月白
const backgroundColor = '#373C38'; // Aisumicha 藍墨茶

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: backgroundColor,
  cursorColor: '#E9546B',
  colors: {
    lightBlack:    backgroundColor,
    lightRed:      '#F83929', // Benihi 紅緋
    lightGreen:    '#00695B', // Kamonoha-iro 鴨の羽色
    lightYellow:   '#efbb2c', // Kokichinashi 深支子
    lightBlue:     '#224B8F', // Rurikon 瑠璃紺
    lightMagenta:  '#9C308D', // Benikikyou 紅桔梗
    lightCyan:     '#7FCCE3', // Mizu-iro 水色
    lightWhite:    '#FCFAF2', // Shironeri 白練
    black:   '#9EA1A3', // Suzu-iro 錫色
    red:     '#E9546B', // Umegasane 梅重
    green:   '#008E74', // Kujakumudori 孔雀緑
    yellow:  '#FDD876', // Kuchinashi-iro 支子色
    blue:    '#6C9BD2', // Misora-iro 御空色
    magenta: '#E761A4', // Botan-iro 牡丹色
    cyan:    '#C5E4Ed', // Kamenozoki 甕覗
    white:   foregroundColor
  }
});
