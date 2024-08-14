i = 0;

document.getElementById("button").addEventListener("click",function(){

    i++;

    if (i===1){
        Normal();
    }

    else if (i===2){(
        function(){
            document.getElementById("message").innerText="Its me Anonymous Function Call"
        })
        ();
    }

    else if (i===3){
        (()=>{
            document.getElementById("message").innerText="Its me Fat Arrow  Function Call"
        })
        ();
    }
    
    else if(i===4){
        document.getElementById("message").innerText="Bass bhi kar yaar gudgudi ho rahi hai"
    }

    else if (i==5){
        document.getElementById("message").innerText="Are tu abhi bhi kar raha hai , ruk abhi maza chkhata hu"
        i=0
    }

});

function Normal (){
    document.getElementById("message").innerText="Its me Normal Function Call"
}