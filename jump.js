//break continue

for (let i = 1; i < 10; i++) {
    console.log(i);
    if (i % 5 == 0) {
        console.log("i is divisible by 5",i);
        continue;
    }
    i++;
}

//switch 
switch("FS"){
    case "FS":
        console.log("Full Stack");
        break;
    case "BE":
        console.log("Back End");
        break;
    case "FE":
        console.log("Front End");
        break;
}