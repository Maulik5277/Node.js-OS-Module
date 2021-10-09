const os = require('os');
try {
 
    console.log("OS CPU ARCHITECTURE:= " + os.arch());
    console.log("FREE MEMORY OF THE SYSTEM:= " + os.freemem());
    console.log("TOTAL MEMORY OF THE SYSTEM:= " + os.totalmem());
    console.log("OS PLATFORM:= " + os.type());
    console.log("INFORMATION ABOUT THE CURRENT USER:= " + os.userInfo());
} catch (err) {
    console.log("..ERROR.." + err);
}