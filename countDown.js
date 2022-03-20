// countDown()
// number -> console.log number / console.log "DONE!"

function countDown(num) {
    if (num<=0){
        console.log("PLEASE ENTER A NUMBER GREATER THAN 1");
    }
    else if (num > 0) {
        const id = setInterval(function () {
            if (num > 0) {
                console.log(num);
                num--;
            }
            else {
                console.log("DONE!");
                clearInterval(id);
            }
        }, 1000);
    }
    
}

countDown(7);