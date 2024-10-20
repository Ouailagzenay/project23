// WEBBA Booking js validation functions

// check integer
function wbkCheckInteger(val) {
    return /^\+?(0|[1-9]\d*)$/.test(val);
}
// check integer
function wbkCheckFloat(val) {
    return /^(?:[1-9]\d*|0)?(?:\.\d+)?$/.test(val);
}

// check string
function wbk_check_string(val, min, max) {
    if( val == null ){
        return false;
    }
    if (val.length < min || val.length > max) {
        return false;
    } else {
        return true;
    }
}
// check email
function wbk_check_email(val) {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (val == '' || !re.test(val)) {
        return false;
    }
    return true;
}
// check interger range
function wbk_check_integer_min_max(val, min, max) {
    val = parseInt(val);
    min = parseInt(min);
    max = parseInt(max);

    if (val < min || val > max) {
        return false;
    } else {
        return true;
    }
}

// check phone
function wbkCheckPhone(val) {
    var pattern = new RegExp(
        /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
    );
    return pattern.test(val);
}
// check price
function wbkCheckPrice(val) {
    if (val == '') {
        return false;
    }
    if (wbkCheckInteger(val)) {
        if (wbk_check_integer_min_max(val, 0, 9999999)) {
            return true;
        }
    }
    if (wbkCheckFloat(val)) {
        if (val >= 0 || val <= 9999999) {
            return true;
        }
    }
    return false;
}
