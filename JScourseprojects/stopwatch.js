        function myTimer(){ 
            const hour = document.getElementById("hour").value
            const minute = document.getElementById("minute").value
            const seconds = document.getElementById("seconds").value
            

            if (hour == 0 & minute == 0 & seconds == 0){
                alert ("You must Input time")
            } else if (hour > 23 || minute > 59 || seconds > 59) {
                alert ("Hour should be less than 24 <br> Minutes and seconds should be less than 60") 
            } else{
               document.getElementById("input").style.display = "none";
               const milliseconds = hour*3.6e6 + minute*60000 + seconds*1000;
               const target = milliseconds + Date.parse(new Date())
               myInterval = setInterval ( function(){
               const leo = Date.parse(new Date())
                let t = target - leo
                let h = Math.floor(t/3.6e6)
                let m = Math.floor((t%3.6e6)/60000)
                let s = Math.floor(((t%3.6e6)%60000)/1000)
                
                h = (h<10)?h=`0${h}`: h;
                m = (m<10)?m=`0${m}`: m;
                s = (s<10)?s=`0${s}`: s;




                document.getElementById("stopwatch").innerText = `${h} : ${m} : ${s}`;
                if (t <= 0){
                    clearInterval(myInterval)
                    alert ("Time is up my nigger")
                    
                }
                           },1000)
                }; }
