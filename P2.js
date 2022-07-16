/* Program 2:- Develope a HTML form which accepts any mathematical expression.
Write JS code to evaluate the expression and display the result. */

function calculate()
{
    var validinput=/[0-9,.,-]/
    var op1=document.mathform.op1.value;
    var op2=document.mathform.op2.value;
    var operator=document.mathform.operator.value;
    var result=0;
    if(op1.length==0)
        window.alert("please enter the first element");
    else if(op2.length==0)
        window.alert("please enter the second element");
    else if(op1.search(validinput)==-1)
        window.alert("operand 1 is not a numeric value");
    else if(op2.search(validinput)==-1)
        window.alert("operand 2 is not a numeric value");
    else
    {
        var n1=parseFloat(op1);
        var n2=parseFloat(op2);
        switch(operator)
        {
            case "+":result=n1+n2;
                     break;
            case "-":result=n1-n2;
                     break;
            case "*":result=n1*n2;
                     break;
            case "/":result=n1/n2;
                     break;
            case "%":result=n1%n2;
                     break;
            case "exp":result=Math.exp(n1, n2);
                     break;
        }
        document.mathform.result.value=result;
    }
}