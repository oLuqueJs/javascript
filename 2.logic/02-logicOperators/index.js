// Logic Operators

// Bool Variables
const A = true;
const B = true;
const C = false;
const D = false;

// (&&) 
const logic1 = A && B       // logic1 = true, cause A & B is true
const logic2 = A && C       // logic2 = false, cause C is false
const logic3 = A && B && D  // logic3 = false, cause D is false
const logic4 = A && C && D  // logic4 = false, cause C & D is false


// (||) 
const logic5 = A || C       // logic5 = true, cause A is true
const logic6 = A || B       // logic5 = true, cause A & B is true
const logic7 = C || D       // logic6 = false, cause C & D is false
const logic8 = B || C || D  // logic7 = true, cause B is true


// (!)
const logic9 = !A           // logic9 = false, cause !A is false
const logic10 = !C && !D    // logic10 = true, cause !C & !D is true
const logic11 = A && !C     // logic11 = true, cause A & !C is true
const logic12 = !(A && B)     // logic12 = false, cause !(true) is false

/*
    Dictionary of Logic Operators
    =============================

    && -> AND (E.G. (A && B) -> must have A & B )
    || -> OR  (E.G. (A || B) -> must have A or B)
    ! -> NOT  (E.G. (A = true) -> (!A = false)  )
*/