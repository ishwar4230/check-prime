document.getElementById("butt").onclick = function() {
    let x = document.getElementById("tbox").value;
    let ind = parseInt(x);
    let int = Number.isInteger(ind);

    if (x > 0 && int == true) {
        check_prime(x);
        document.getElementById("tbox").value = "";
    } else {
        alert("Enter a valid No. to check!");
        document.getElementById("tbox").value = "";
    }
}

function check_prime(x) {
    if (x == 1) {
        alert("Not prime!");
        return;
    } else if (x == 2) {
        alert("Prime!");
        return;
    } else {
        let isprime = true;

        for (var i = 2; i < x; i++) {
            if (x % i == 0) {
                isprime = false;
                break;
            }
        }
        if (isprime == true) {
            alert("Prime!");
            return;
        } else {
            alert("Not prime!\n Divisible by " + i);
            return;
        }
    }

}