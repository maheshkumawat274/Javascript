/*
        var i = 0;
        while(i<10){
            if (i==5){
                //document.write("i love you","<br>");
                //break;
                continue;
            }
            document.write(i);
            i++;
        }*/
        /*var a = 0;
        var n = 0;
        while (a<5){
            a++;
            document.write("value of i",a,"<br>");
            document.write("value of n",n,"<br>")
            if(a==3){
                continue;
            }
            n = n*a;
        }*/
        for(var a=0; a<5; a++){
            if(a==3){
                continue;
            }
            document.write(a);
            a++
        }