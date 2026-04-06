function genPass(len, upper, nums, special) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    let chars = lower;
    if (upper) chars += upperChars;
    if (nums) chars += numChars;
    if (special) chars += specialChars;
    let pass = "";
    for (let i = 0; i < len; i++) {
        const randIdx = Math.floor(Math.random() * chars.length);
        pass += chars[randIdx];
    }
    return pass;
}
function generate() {
    const len = parseInt(document.getElementById("len").value);
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;
    const pass = genPass(len, upper, nums, special);
    document.getElementById("passOut").textContent = pass;
}
function reset() {
    document.getElementById("len").value = 6;
    document.getElementById("upper").checked = true;
    document.getElementById("nums").checked = true;
    document.getElementById("special").checked = true;
    document.getElementById("passOut").textContent = "";
}

function copyPass(){
    const copyText = document.getElementById("passOut");

    copyText.select();
    copyText.setSelectionRange(0, 9999999);

    navigator.clipboard.writeText(copyText.value);

    console.log(copyText.value)
}


// for autoexpanding text area (did not work)
// Source - https://stackoverflow.com/a/7745840
// Posted by Rob W, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-06, License - CC BY-SA 3.0

var textarea = document.getElementById("textarea");
var heightLimit = 200; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};