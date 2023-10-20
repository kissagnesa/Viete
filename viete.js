function szamol()
{var a, b, c, d;

a=parseInt (document.form1.text1.value);
b=parseInt (document.form1.text2.value);
c=parseInt (document.form1.text3.value);

d=b*b-4*a*c;

if(isFinite(d) && d!="")
{
    document.getElementById('eredmeny').innerHTML=d;
}
else
{
    document.getElementById('eredmeny').innerHTML="hiba";
}
}