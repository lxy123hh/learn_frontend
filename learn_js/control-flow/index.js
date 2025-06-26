// 不等于!==
// 与&& 或 ||
const myname = "lx";
if (myname === 'lxy') {
    console.log("yes");
}
else if(myname ==='hhh') {
    console.log("no")
}
else {
    console.log("shayebushi")
}


switch(myname) {
    case 'lxy':{   console.log("yes");break;}
    case 'hhh': { console.log("no");break;}
    default: {  console.log("shayebushi")}
}