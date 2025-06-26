const str1 = '1234'
console.log(str1[3])

//2.concat()方法,数组也有
const str2 = '5678'
const str3 = str1.concat(str2) //连接两个字符串
console.log(str3) //12345678

//3.endwith()方法,判断字符串是否以某个字符串结尾
const result = str1.endwith('34') //true
console.log(result) //true

//4.includes()方法,判断字符串中是否包含某个字符串，返回true或false
const result1 = str1.includes('23') //true
console.log(result1) //true

//5.indexOf()方法,返回字符串中某个字符串第一次出现的位置，没找到返回-1
const result2 = str1.indexOf('23') //1
console.log(result2) //1

//6.match()方法,返回字符串中符合正则表达式的结果，没找到返回null
const h1 = '<h1>{{ msg }}</h1>'
const msg = 'hello';

//7.replace()方法,替换字符串中的某个字符串
const result3 = str1.replace('23', '99') //替换字符串中的23为99
console.log(result3) //1994

//8.slice()方法,截取字符串中的某个部分,返回一个新字符串
const result4 = str1.slice(1, 3) //截取字符串中的第1到第3个字符
console.log(result4) //23

//9.split()方法,把字符串分割成数组
const str4 = 'sad alsdkg aldksg cnv adlg '
const result5 = str4.split(' ') //把字符串分割成数组，分隔符为2
console.log(result5)//['sad', 'alsdkg', 'aldksg', 'cnv', 'adlg', '']

//10.substring ()方法,截取字符串中的某个部分,返回一个新字符串
const result6 = str1.substring(1, 3) //截取字符串中的第1到第3个字符
console.log(result6) //23

 //11.toLowerCase()方法,把字符串转换为小写字母
const result7 = str1.toLowerCase() //把字符串转换为小写字母
console.log(result7) //1234
//12.toUpperCase()方法,把字符串转换为大写字母
const result8 = str1.toUpperCase() //把字符串转换为大写字母
console.log(result8) //1234
//13.trim()方法,去掉字符串两端的空格
const str5 = '   1234   '
const result9 = str5.trim() //去掉字符串两端的空格
console.log(result9) //1234





