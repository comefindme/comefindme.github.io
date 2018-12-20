function passWord() {
    var testV = 1;
    var pass1 = prompt('Enter your password ','');
    while (testV < 3) {
        if (!pass1) 
            history.go(-1);
        if (pass1.toLowerCase() == "6137") {
            alert('Access Granted! You have 30 seconds to finish this quiz! Our relationship depends on it! \nYour time will start as soon as you hit OK');
            window.open('second.html', '_self');
            break;
        } 
        testV+=1;
        var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3) 
        history.go(-1);
    return " ";
} 

function secondAns() {
    var testV = 1;
    var pass1 = prompt('What is your answer? ','');
    while (testV < 3) {
        if (!pass1) {
            alert('Surely you remember!');
            pass1 = prompt('What is your answer? ','');
            continue;
        }
        if (pass1.toLowerCase().includes("white")) {
            // alert('Access Granted');
            window.open('fifth.html', '_self');
            break;
        } 
        testV+=1;
        var pass1 = prompt('Incorrect response, Please Try Again.','');
        if (!pass1.toLowerCase().includes("white") & testV == 3){
            alert('You have to answer this one!');
            pass1 = prompt('What is your answer? ','');
            testV = 0;
            continue;
        }
    }
    return " ";
}

function thirdAns() {
    var testV = 1;
    var pass1 = prompt('Your answer here ','');
    while (testV < 2) {
        if (!pass1) {
            pass1 = prompt('Just give me your best guess ','');
            continue;
        }
        if (pass1.toLowerCase().includes("red")) {
            alert('Thank you for remembering correctly!');
            window.open('fourth.html', '_self');
            break;
        }
        if (pass1.toLowerCase().includes("orange")) {
            alert('It was RED!');
            window.open('fourth.html', '_self');
            break;
        }
        var pass1 = prompt('Just give me your best guess ','');
    }
    return " ";
} 

function fourthAns() {
    var testV = 1;
    var pass1 = prompt('Your answer here ','');
    while (testV < 2) {
        if (!pass1) {
            pass1 = prompt('Your answer here ','');
            continue;
        }
        if (pass1.toLowerCase().includes("oasis")) {
            window.open('sixth.html', '_self');
            break;
        }
        var pass1 = prompt('Your answer here ','');
    }
    return " ";
}

function fifthAns() {
    var testV = 1;
    var pass1 = prompt('Your answer here ','');
    while (testV < 3) {
        if (!pass1) {
            pass1 = prompt('I am not much of a hand holder...\nBut I am! ','');
            continue;
        }
        if (pass1.toLowerCase().includes("avocado")) {
            // alert('Access Granted');
            window.open('third.html', '_self');
            break;
        } 
        var pass1 = prompt('You have to answer this one to proceed! ','');
    }
    return " ";
}

function sixthAns() {
    var testV = 1;
    var pass1 = prompt('Name the beach ','');
    while (testV < 3) {
        if (!pass1) {
            pass1 = prompt('HINT: It starts with a B! ','');
            continue;
        }
        if (pass1.toLowerCase().includes("baker")) {
            alert('I cannot believe we did that! Go big or go home right? Many more trips to come in the future!');
            window.open('seventh.html', '_self');
            break;
        } 
        var pass1 = prompt('November November ','');
    }
    return " ";
}

function seventhAns() {
    var testV = 1;
    var pass1 = prompt('Do you love me? ','');
    while (testV < 3) {
        if (!pass1) {
            pass1 = prompt('HINT: Wait a minute... Why do you need a hint? Huh ','');
            continue;
        }
        if (pass1.toLowerCase().includes("yes")) {
            alert('I love you too! Come to me my love! I am here freezing my ass off!');
            window.open('final.html', '_self');
            break;
        } 
        var pass1 = prompt('Say yes please!','');
    }
    return " ";
}
