// Comparison Operators

// Num Variables
const num1 = 10
const num2 = 10 
const num3 = 10.5

// (>) & (<)
const comp1 = 10 > 5; // comp = True, cause 10 is greater than 5
const comp2 = 10 < 5; // comp = False, cause 10 is smaller 5 


// (>=) & (<=)
const comp7 = 10 <= 10;  // comp = True, cause 10 is equal to 10, even if he is not smaller
const comp8 = 10 >= 10;  // comp = True, cause 10 is equal to 10, even if he is not greater
const comp9 = 77 <= 10;  // comp = False, cause 77 is not smaller than 10 and is not equal to 10
const comp10 = 77 >= 10; // comp = True , cause 77 is greater than 10 and is not equal to 10


// (==) & (===)
const comp3 = num1 == num2   // comp = True, cause num1 have the same value as num2
const comp4 = num1 == num3   // comp = False, cause num1 does not have the same value as num3 
const comp5 = num1 === num2  // comp = True, cause num1 have the same value & type as num2
const comp6 = num1 === num3  // comp = False, cause num1 does not have the same value & type as num3


// (!=) & (!==)
const comp11 = num1 != num2  // comp = False, cause num1 value is not different from num2 value
const comp12 = num1 != num3  // comp = True, cause num1 value is different from num3 value
const comp13 = num1 !== num2 // comp = False, cause num1 value & type is not different from num2 value & type
const comp14 = num1 !== num3 // comp = True, cause num1 value & type is different from num3 value & type

/*
    Dictionary of Comparison Operators
    ==================================

    Each comparison operator returns a boolean value:
    e.g., (10 > 5) returns true

    Hint Note: The greater-than symbol (>) always points to the smaller value.

    >    Greater Than
    >=   Greater Than or Equal To
    <    Less Than
    <=   Less Than or Equal To
    ==   Equality (value only)          ! Not recommended for strict comparisons
    ===  Strict Equality (value + type) ! Preferred for precise comparisons
    !=   Not Equal (value only)
    !==  Strict Not Equal (value + type) ! Recommended for avoiding type coercion
*/
