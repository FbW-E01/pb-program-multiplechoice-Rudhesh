let color = "green";

switch (color) {
	case "yellow":
		console.log("yellow color");
		break;
	case "red":
		console.log("red color");
		break;
	case "blue":
		console.log("blue color");
		break;
	case "green":
		console.log("green color");
		break;
	case "black":
		console.log("black color");
		break;
	default:
		console.log("no known color");
		break;
}



let grade = 40;

switch (grade) {
    case 10:
        console.log("nice try")
        break;
    case 30:
        console.log("improving")
        break;
    case 60:
        console.log("good job")
        break;    
    case 80:
        console.log("awesome")
        break; 
    default:
        console.log("try again")
        break;
}




let fruits = 4;

switch (color) {
    case 1:
        console.log("banana")
        break;
    case 2:
        console.log("orange")
        break;
    case 3:
        console.log("strawberry")
        break;    
    case 4:
        console.log("apple")
        break; 
    default:
        console.log("no fruit")
        break;
}




// 4. Percentage Complete.

let percentageComplete = 95;

switch (true) {
        
        
    case percentageComplete < 30:
        console.log("Still a long way to go")
        break;    
   
    case percentageComplete < 50:
        console.log('4: Slowly getting there');
        break;   
            
    case  percentageComplete < 80:
            console.log("You can do it!")
            break;
   
    case  percentageComplete < 99:    
            console.log("This is the last push!")
            break;    
    case  percentageComplete=== 100:
            console.log("You're there. Well done!")
            break;        
    default:
        console.log("something in wrong")
        break;
}


// situation like (Percentage Complete) task is prefer to use if else  statement also i prefer if else statement over swith because for me its easy read and understand .