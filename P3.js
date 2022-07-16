/* Program 3:- Create a form for Student Information. 
Write JavaScript code to find total,average,result and grade. */

function calculate()
{
    var name=document.student.name.value;
    var regno=document.student.regno.value;
    var m1=parseInt(document.student.sp.value);
    var m2=parseInt(document.student.ml.value);
    var m3=parseInt(document.student.wp.value);
    var m4=parseInt(document.student.eng.value);
    var total=m1+m2+m3+m4;
    var avg=total/4;
    var grade,result;

    if(m1<40||m2<40||m3<40||m4<40)
    {
        grade="D";
        result="FAIL";
    }
    else
    {
        if(avg>=60)
        {
            grade="A";
            result="First Class";
        }
        else if(avg>=50)
        {
            grade="B";
            result="Second Class";
        }
        else if(avg>=40)
        {
            grade="C";
            result="PASS";
        }
        else
        {
            grade="D";
            result="FAIL";
        }
    }

    document.writeln("<h2>Student Result:- </h2>");
    document.writeln("<pre><b>Name: "+name+"</b></pre>");
    document.writeln("<pre><b>Register No.: "+regno+"</b></pre>");
    document.writeln("<pre><b>Total Marks: "+total+"</b></pre>");
    document.writeln("<pre><b>Average: "+avg+"</b></pre>");
    document.writeln("<pre><b>Grade: "+grade+"</b></pre>");
    document.writeln("<pre><b>Result: "+result+"</b></pre>");
}