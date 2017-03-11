export function isEmpty(obj) {
    if (obj === null || obj === undefined) {
        return true;
    }
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
