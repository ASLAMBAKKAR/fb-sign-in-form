/*
const scoredolphins = (96+108+89);
const scorekoalas =(88+91+110); 

console.log (scoredolphins);
console.log(scorekoalas);
const averagedolphins = (scoredolphins)/(3);
console.log(averagedolphins);

const bill=275;
const tip = bill <=300 && bill >=50 ? bill * .15 :
bill * .2;
console.log(`The bill value ${bill}, the tip ${tip} , and the total value is ${bill+tip}`);

const calcage2 = function (birthyear) {
    return 2037 - birthyear
}

const calcage3 =birthyear => 2037 - birthyear;
const age3 = calcage3  (1991);
console.log(age3);
const yearsuntilretirement = (birthyear,firstname) =>{
    const age = 2037-birthyear;
    const retirement =65- age;
    //return retirement;
    return `${firstname} retires in ${retirement}
    years`;
}
console.log (yearsuntilretirement(1991,'jonas'));
console.log (yearsuntilretirement(2000,'Thasleem'));

function getage(){
    const currenttime = new Date()
    


    const random = Math.random()
    return currenttime;
}

const root = document.getElementById("root");
root.innerText = getage()


function cutfruitpieces(fruit){
    return fruit * 4;
}
function fruitprocessor(apples,oranges){
    const applepieces = cutfruitpieces(apples);
    const orangepieces = cutfruitpieces (oranges);


const juice = `juice with ${applepieces} apple and ${orangepieces}oranges.`;
return juice;
}
console.log (fruitprocessor(2,3));


const calcaverage = average => (a+b+c)/3;
const averagedolphins =(44+23+71)/3;
const  averagekoalas =(65+54+49)/3;
console.log (averagedolphins,averagekoalas);

const checkwinner = function(averagedolphins,averagekoalas)
{
    if (averagedolphins => 2* averagekoalas){
        console.log(`dolphins win (${averagedolphins} vs ${averagekoalas})`);

    }else if (averagekoalas>= 2*averagedolphins) {
        console.log(`koalas win ${averagekoalas} vs ${averagedolphins}`);
    } else {
        console.log (`No team wins......`);
    }

}
checkwinner()

const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = 'peter';

const friends =['michael','steven','peter'];
console.log(friends);

const years = new Array (1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends. length-1]);



const calcTip = function(bill){
    return bill >= 50 && bill <= 300   * 0.15 ;
    bill * 0.2 ;

}

//const calcTip = bill =>

const bills = [ 125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),
calcTip(bills[2])];
console.log(bills, tips);


const aslam = {
    firstname : 'Aslam',
    lastname : 'bakkar',
    age : 2024-1999,
    job : 'web developer',
    friends : ['Thasleem','Raqib','Shibil']
    
};

console.log(aslam.lastname);

console.log(aslam['lastname']);

const namekey='name';
console.log(aslam['first'+namekey]);
console.log(aslam['last'+namekey]);

const interestedin = prompt('what do you want to know about Aslam?choose between firstname, lastname,age,job,and friends');
console.log(aslam[interestedin]);

if(aslam[interestedin]) {
    console.log(aslam[interestedin]);

} else{
    console.log('wrong request! choose between firstname, lastname , age, job , and friends');

}

aslam.location = 'india';
aslam['instagram'] = '@aslambuks';
console.log(aslam);

console.log(`${aslam.firstname} has ${aslam.friends.length}, and his best friends is called ${aslam.friends[0]}`);


const aslam = {
    firstname : 'Aslam',
    lastname : 'bakkar',
    birthyear : 1999,
    job : 'web developer',
    friends : ['Thasleem','Raqib','Shibil'],
    hasDriverslicence: false,

    calcage: function (birthyear) {
        console.log(this);

        return 2024-aslam.birthyear;

    },
    getsummary: function(){
        return `${this.firstname} is a ${this.calcage()}-year old ${aslam.job}, and he has ${this.hasDriverslicence? 'a':'no'} driver's licence. `;

    },
};

console.log(aslam.getsummary());
//console.log(aslam.calcage(1999));
//console.log(aslam['calcage'](1999));


const john = {
    fullname : 'johnsmith',
    height :1.95,
    mass : 92,
    calcbmi: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const mark = {
    fullname : 'mark miller',
    height : 1.69,
    mass : 78,
    calcbmi: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

john.calcbmi();
mark.calcbmi();
console.log(john.bmi, mark.bmi);

 if(mark.bmi>john.bmi){
    console.log(`${mark.fullname}'s bmi(${mark.bmi})is higher than ${john.fullname}'s bmi (${john.bmi})`)
 }else if (john.bmi>mark.bmi){
    console.log(`${john.fullname}'s bmi(${john.bmi})is higher than ${mark.fullname}'s bmi (${mark.bmi})`)

 }


for (let rep = 5; rep <=10 ; rep ++ ) {
    console.log(`lifting weights repetition ${rep} `);
}



const calcTip = function (bill) {
    return bill >= 50 && bill <=300 ? bill * 0.15 :bill * 0.2;
}
const bills = [22,295,176,440,37,105,10,1100,52,86];
const tips =[];
const totals = [];

for (let i = 0; i <bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+ bills[i]);
}
console.log(bills,tips,totals);

const temperatures = [3, -2, -6, -1, , 9, 13,'error' ,17, 15, 14, 9, 5];

const caclctempamplitude = function (temps) {

    let max = temps [0];
    let min =temps[0];
   for (let i = 0; i < temps.length; i++ ) {
    const currtemp =temps[i];
    if (temps[i] > max ) max = temps[i];
    if (temps[i] < min) min = currtemp;
   
   }
    
   
   console.log(max,min);
   return  max-min

};
const amplitude = caclctempamplitude(temperatures);
console.log(amplitude);
*/

const measurekelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('degrees celsius:')),
    };


    console.log(measurement);
    console.table(measurement);

const kelvin = measurement.value + 273;
return kelvin;

};


console.log(measurekelvin());  