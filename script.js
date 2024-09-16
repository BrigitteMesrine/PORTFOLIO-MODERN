const strArray = ["software", "fullstack", "devOps", "web_app", "desktop_app", "backend", "java", "database", "postgreSQL", "spring_boot", "agile", "frontend", "react", "typescript", "javascript"]
const special_chars = ["\\", "/", "#", "~", "$", "µ", "`", "&", "=", "+", "]", "@", "_", "^", "A", "b", "C"]
const colors = ["rgba(115, 255, 70, 1)", "rgba(115, 255, 70, 0.9)", "rgba(115, 255, 70, 0.8)", "rgba(115, 255, 70, 0.7)", "rgba(115, 255, 70, 0.6)", "rgba(115, 255, 70, 0.5)", "rgba(115, 255, 70, 0.4)", "rgba(115, 255, 70, 0.3)", "rgba(115, 255, 70, 0.2)"]
let count = 0
let title = document.getElementById("skills_anim");
function generate_string(str){
        let i=0
        while (i<=str.length){

            setTimeout(function (i) {
                title.innerHTML = str.substring(0, i);
                
                for (j=0; j<str.length-i; j++){
                    title.innerHTML = title.innerHTML + `<span style='color:${colors[Math.floor(Math.random() * 8)]};text-shadow: rgba(115, 255, 70,0.5) 1px 1px 2px;'>`+ special_chars[Math.floor(Math.random() * special_chars.length)]+"</span>"
                }
            }, 50*i, i);
            i++;
        }
}
generate_string(strArray[0])
let strIndex = 1
setInterval(() => {
    // generate_string(strArray[Math.floor(Math.random() * strArray.length)])
    if (strIndex>=strArray.length) {
        strIndex=0
        generate_string(strArray[strIndex])
        strIndex++
    } else {
        generate_string(strArray[strIndex])
        // if (strIndex == 7) {
        //     document.getElementById("not_front").style.visibility = "visible";
        //     document.getElementById("not_front").innerText = "(please don't ask for it)";
        // } else {
        //     document.getElementById("not_front").style.visibility = "hidden";
        // }
        strIndex++
    }
}, 1500);





