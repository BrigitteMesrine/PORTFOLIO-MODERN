const syncWait = ms => {
    const end = Date.now() + ms
    while (Date.now() < end) continue
}
const str = "video game player"
const special_chars = ["\\", "/", "#", "~", "$", "µ", "`", "&", "=", "+", "]", "@", "_", "^", "A", "b", "C"]
const colors = ["rgba(114, 255, 71, 1)", "rgba(114, 255, 71, 0.9)", "rgba(114, 255, 71, 0.8)", "rgba(114, 255, 71, 0.7)", "rgba(114, 255, 71, 0.6)", "rgba(114, 255, 71, 0.5)", "rgba(114, 255, 71, 0.4)", "rgba(114, 255, 71, 0.3)", "rgba(114, 255, 71, 0.2)"]
let count = 0
let title = document.getElementsByTagName("h1")[0];
function generate_string(){
        let i=0
        while (i<=str.length){


            
            // syncWait(1000)
            setTimeout(function (i) {
                title.innerHTML = str.substring(0, i);
                setTimeout(function (i) {
                //     setTimeout(function (i) {
                //         setTimeout(function (i) {
                //             title.innerHTML = str.substring(0, i);
                            
                //             for (j=0; j<str.length-i; j++){
                //                 title.innerHTML = title.innerHTML + `<span style='color:${colors[Math.floor(Math.random() * 3)]}'>`+ special_chars[Math.floor(Math.random() * 8)]+"</span>"
                //             }
                //         }, 1*i, i);
                //         title.innerHTML = str.substring(0, i);
                        
                //         for (j=0; j<str.length-i; j++){
                //             title.innerHTML = title.innerHTML + `<span style='color:${colors[Math.floor(Math.random() * 3)]}'>`+ special_chars[Math.floor(Math.random() * 8)]+"</span>"
                //         }
                //     }, 1*i, i);
                    title.innerHTML = str.substring(0, i);
                    
                    for (j=0; j<str.length-i; j++){
                        title.innerHTML = title.innerHTML + `<span style='color:${colors[Math.floor(Math.random() * 8)]}'>`+ special_chars[Math.floor(Math.random() * 8)]+"</span>"
                    }
                }, 1*i, i);
                
                for (j=0; j<str.length-i; j++){
                    title.innerHTML = title.innerHTML + `<span style='color:${colors[Math.floor(Math.random() * 8)]}'>`+ special_chars[Math.floor(Math.random() * special_chars.length)]+"</span>"
                }
            }, 80*i, i);
            i++;
        }
}
setInterval(() => {
    generate_string()
}, 4000);




