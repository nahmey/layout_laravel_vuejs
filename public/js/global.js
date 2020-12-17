function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function userChange(){
    let change_users = document.getElementById('change_users');
    change_users.closest('form').submit();
}

function time(){
    const d = new Date();
    // const s = d.getSeconds();
    const m = ('0' + d.getMinutes()).slice(-2);
    const h = ('0' + d.getHours()).slice(-2);
    // document.getElementById('horloge').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('horloge').innerHTML = h + ":" + m;
}

setInterval(time, 1000);

function deconnexionButton()
{
    event.preventDefault();
    document.getElementById('logout-form').submit();
}




// window.onerror = function(msg, url, line)
// {

//     const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//     var req = new XMLHttpRequest();
//     var params = "msg=" + encodeURIComponent(msg) + '&amp;url=' + encodeURIComponent(url) + "&amp;line=" + line;
//     req.open("POST", base_url + "/admin/write_javacript_log", true);
//     req.setRequestHeader('X-CSRF-Token', token);
//     req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
//     req.send(params);
//     console.log(params);
// };