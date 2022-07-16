/* Program 4:- Create a form for Employee Information. 
Write JavaScript code to find DA, HRA, PF, Tax, Gross Pay, Deduction and Net Pay. */

function calculate()
{
    var name=document.employee.name.value;
    var empno=document.employee.empno.value;
    var bp=parseInt(document.employee.basicpay.value);
    var hra=0.4*bp;
    var da=0.6*bp;
    var gross=bp+hra+da;
    var pf=0.13*gross;
    var tax=0.2*gross;
    var deduction=pf+tax;
    var netsalary=gross-deduction;

    document.writeln("<h2>Employee Salary Details:- </h2>");
    document.writeln("<pre><b>Name: "+name+"</b></pre>");
    document.writeln("<pre><b>Employee No.: "+empno+"</b></pre>");
    document.writeln("<pre><b>Basic Salary: Rs."+bp+"</b></pre>");
    document.writeln("<pre><b>HRA(40% of Basic): Rs."+hra+"</b></pre>");
    document.writeln("<pre><b>DA(60% of Basic): Rs."+da+"</b></pre>");
    document.writeln("<pre><b>Gross Salary: Rs."+gross+"</b></pre>");
    document.writeln("<pre><b>PF(13% of Gross): Rs."+pf+"</b></pre>");
    document.writeln("<pre><b>Tax(20% of Gross): Rs."+tax+"</b></pre>");
    document.writeln("<pre><b>Deduction: Rs."+deduction+"</b></pre>");
    document.writeln("<pre><b>Net Salary: Rs."+netsalary+"</b></pre>");
}