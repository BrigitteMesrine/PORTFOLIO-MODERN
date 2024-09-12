const syncWait = ms => {
    const end = Date.now() + ms
    while (Date.now() < end) continue
}
const str = "azeazeazeazeazeaze"
const special_chars = ["\\", "/", "#", "~", "$", "µ", "`", "&", "=", "+", "]", "@", "_", "^"]
const colors = ["#8fdda3", "#c08fdd", "#dd8f8f"]
let count = 0

function generate_string(){
 
    let i=0
    while (i<=str.length){
        let title = document.getElementsByTagName("h1")[0];

        
        // syncWait(1000)
        setTimeout(function (i) {
            title.innerHTML = str.substring(0, i);
            // setTimeout(function (i) {
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
            //     title.innerHTML = str.substring(0, i);
                
            //     for (j=0; j<str.length-i; j++){
            //         title.innerHTML = title.innerHTML + `<span style='color:${colors[Math.floor(Math.random() * 3)]}'>`+ special_chars[Math.floor(Math.random() * 8)]+"</span>"
            //     }
            // }, 1*i, i);
            
            for (j=0; j<str.length-i; j++){
                title.innerHTML = title.innerHTML + `<span style='color:${colors[Math.floor(Math.random() * 3)]}'>`+ special_chars[Math.floor(Math.random() * special_chars.length)]+"</span>"
            }
        }, 50*i, i);
        i++;
    }
}

generate_string()

const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"


