var numbers=[89, 56, 78, 85, 21, 96, 152, 88, 12, 11, 9, 8, 10, 12] ;

for ( var i = 0; i < numbers.length; i++){
    var number = numbers[i];

    if(number > 20){
        continue;
    }
    console.log(number);
}