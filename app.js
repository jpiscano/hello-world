var msg = 'Hello World';
console.log(msg);
var one = 1;
var two = 2;
console.log(one + two);


        console.log("This Java Script code is in the body. <br>");
        fred = 1;
        Fred = 2;
        FRED = 3;
        singer = 'Paul';
        console.log("fred is " + fred + '<br>');
        console.log("Fred is " + Fred + '<br>');
        console.log("FRED is " + FRED + '<br>');
        console.log("Singer = " + singer + ' Simon <br>');
        console.log("Playing with 'quotations' <br>")
        console.log("I'm good with steak <br>")
        console.log('I said, "I\'m good with steak!" <br>');
        s = '12345' + 54321;
        console.log("s = " + s + "<br>");
        s = '12345' * 1 + 54321;
        console.log("s = " + s + "<br>");
        s = Number('12345') + 54321;
        console.log("s = " + s + "<br>");
        s = String(12345) + 54321;
        console.log("s = " + s + "<br>");
        console.log("3 + 11 results in " + (3 + 11) + "<br>");
        console.log("21 % 8 results in " + (21 % 8) + "<br>");
        a = 10;
        console.log("a is " + a + " and is now " + ++a + "<br>");
        console.log("a is " + a++ + " and is now " + a + "<br>");
        b = 10;
        console.log("b is " + b + " and is now " + --b + "<br>");
        console.log("b is " + b-- + " and is now " + b + "<br>");
        a = 21; a +=5;
        console.log("a = 21; a +=5; is " + a + "<br>");
        console.log("The result of 1 == 1 is " + (1 == 1) + "<br>");
        console.log("The result of 1 == '1' is " + (1 == '1') + "<br>");
        console.log("The result of 1 === '1' is " + (1 === '1') + "<br>");
        console.log("The result of 1 != 2 is " + (1 != 2) + "<br>");
        console.log("The result of 1 !== '1' is " + (1 !== '1') + "<br>");
        console.log("The result of 1 > 2 is " + (1 > 2) + "<br>");
        console.log("The result of 1 >= 1 is " + (1 >= 1) + "<br>");
        console.log("The result of 2 <= 1 is " + (2 <= 1) + "<br>");
        console.log("The result of 1 == 1 && 2 == 2 is " + (1 == 1 && 2 == 2) + "<br>");
        console.log("The result of 1 == 1 || 2 == 3 is " + (1 == 1 || 2 == 3) + "<br>");
        console.log("The result of !(1 == 1) is " + !(1 == 1) + "<br>");

        PetArray = new Array();
        PetArray[0] = 'Cat';
        PetArray[1] = 'Dog';
        PetArray[2] = 'Fish';
        console.log(PetArray + "<br>");
        DrinkArray = new Array('Milk','Water','Soda');
        console.log(DrinkArray + "<br>");
        FoodArray = ['Pasta', 'Cheese', 'Tomato'];
        console.log(FoodArray + "<br>");

        SoccerTeam = new Array();
        SoccerTeam['Andy'] = 10;
        SoccerTeam['Kathy'] = 8;
        SoccerTeam['Mary'] = 9;
        console.log("Kathy is age  " + SoccerTeam['Kathy'] + "<br>");

        SoccerTeam2 = 
        {
            'Fred' : 10,
            'Jim' : 9,
            'Bob' : 10
        }
        console.log("Fred is age " + SoccerTeam2['Fred'] + "<br>");

        Information =
        {
            'Name' : 'Jim',
            'Age' : 25,
            'Weight' : 170,
            'Address' : '2 Main Street'
        }
        console.log(Information['Address'] + "<br>");

        dogs = 
        ['Beagle',
         'Pit Bull',
         'Terrier',
         'Poodle',
         'Bull Dog',
         ]

         dogs.forEach(Info);
         
         function Info(v, i, a)
         {
             console.log('[' + i + '] is ' + v + '<br>');
         }

         age = "13-17";

         if (age == "0-1")
         {
            console.log("you are a baby<br>");
         }
         else if (age == "2-12"){
            console.log("you are a child<br>");
         }
         else if (age == "13-17")
         {
            console.log("you are a teenager<br>");
         }

         age = "2-12"

         switch (age)
         {
            case "0-1": console.log("you are a baby<br>")
                    break
            case "2-12": console.log("you are a child<br>")
                    break
            case "13-17": docuement.write("you are an adult<br>")
                    break
            default: console.log("you are an adult<br>")
                    break
         }

         icecream = true
         console.log("You " + (icecream ? 'like':'dislike') + ' icecream.<br>')
         result = 15 < 24 ? 'like' : 'dislike'
         console.log(result + '<br>');
         
         //Function calls
         console.log(SquareRoot(4) + '<br>');

         function SquareRoot(i)
         {
             return Math.pow(i, .5);
         }
         
         console.log(StrRepeat("Hip hip, horray. ", 3));

         function StrRepeat(s, r)
         {
             return new Array(++r).join(s);
         }

         console.log('<br>');

         Example1(1,2);

         function Example1(a, b, c)
         {
             console.log(a + ' ' + b + ' ' + c + '<br>');
         }

         Example2(1,2);

         function Example2(a, b, c)
         {
             c = typeof c == 'undefined' ? 'Var-3' : c

             console.log(a + ' ' + b + ' ' + c + '<br>');
         }

         console.log(Deobfruscate("jim" + "@" + 'hotmail' + '.com'));

         function Deobfruscate()
         {
             s = '';
             for (e in arguments) s += arguments[e];
             return s;
         }