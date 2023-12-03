# calculator

program works in the following way:
1. each time a button which represents a number or operator is pressed, the value of that button is added to the display as a span element with a class of 'calculation'. 
2. when the '=' button is pressed, the spans with the class of 'calculation' are converted to an array.
3. we find the index of the operator and the array is sliced into two halves. num1 is defined as half 1 and num2 is defined as half 2. these numbers are temporarily saved as arrays, then converted to strings with the join method then finally converted to numbers with the Number() function so calculations can be done.
4. calculations are performed with the two numbers as inputs. 
5. the result of the calculation is saved in a variable. all the spans with the 'calculation' span are removed. a new span is created. the textContent for this new span is the result of the calculation. the span is appended as a child node to the display div. 

limitations of this project: 
-data validation is not implemented
-only ints can be inputted, not floats
-only simple operators are available (e.g. no modulus operator, square, square root, power, log)
-can not represent fractions, irrational numbers or transcendental numbers
-no button to clear display in case of errors when inputting calculation. therefore have to refresh page to 

reasons for limitations:
-this project was intended to be quickly finished so the foundations section of theodinproject can be completed and i can move onto more advanced js concepts
-the project at its current stage fulfils its orginally inteded purpose of serving as a simple calculator. 
-the project was originally intended to provide practice for combining html, css, js. to that end, the project at its current stage has fulfilled that intention so i can move on. all further improvements are optional, not compulsory.
