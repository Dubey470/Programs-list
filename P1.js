/* Program 1:- Create a HTML form that has number of textboxes. When the form runs in 
browser, fill the textbox with data. Write JS code that varifies that all the textboxes 
are filled. If any of the textboxes are not filled, pop an alert indicating which boxes
have been left empty.
1)First Name     4)Adress
2)Last name      5)E-mail ID
3)Mobile No.     6)Pincode    */

function check()
{
    var emptytextboxes="The Following textboxes are empty\n";
    var textboxcount=document.textboxform.elements.length;
    var count=0;
    for(var i=0;i<textboxcount;i++)
    {
       if(document.textboxform.elements[i].value.length==0)
       {
             emptytextboxes=emptytextboxes+document.textboxform.elements[i].name + "\n";
             count++;
       }
    }
    if(count==0)
       window.alert("all textboxes are filled");
    else if(count==textboxcount-1)
       window.alert("no textboxes are filled");
    else
       window.alert(emptytextboxes);
}