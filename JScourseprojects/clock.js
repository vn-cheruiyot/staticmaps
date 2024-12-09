            // create a function to create time
                //create a new time object
                //extract hourd minutes  and seconds into variables
                // concatenate 0 infront of the variables that are less than 10 
                //create a time variable that usnites all the 3 variables
                //set time out to 5 seconds
                //add to html document as an innerText
                //add to html docs as a textContent 
            // initialize the time function
        function myDate (){
            var todaysDate = new Date();
            var day = todaysDate.getDate();
            var month = todaysDate.getMonth();
            var year = todaysDate.getFullYear();
            day = (day < 10)? "0" + day: day;
            month = (month < 10)? "0"+ month : month;
            year = (year < 10)? "0" + year : year;

            var today  = `${day} / ${month} / ${year}`
            document.getElementById("date").innerText = today;
            document.getElementById("date").textContent = today;
            setTimeout(myDate, 1000);

        };
        function myTime (){
            var todaysDate = new Date();
            var hour = todaysDate.getHours();
            var minute = todaysDate.getMinutes();
            var seconds = todaysDate.getSeconds();
            hour = (hour < 10)? "0" + hour: hour;
            minute = (minute < 10)? "0"+ minute : minute;
            seconds = (seconds < 10)? "0" + seconds : seconds;

            var time  = `${hour} : ${minute} : ${seconds}`
            document.getElementById("time").innerText = time;
            document.getElementById("time").textContent = time;
            setTimeout(myTime, 1000);

        };
        myTime()
        //myDate()
            // const x = new Date()
            // document.getElementById("demo").innerHTML = x
