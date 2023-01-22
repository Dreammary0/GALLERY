const jsonfile = 'https://dreammary0.github.io/GALLERY/images.json';
const pictures = document.querySelectorAll('.pic');
let picArr = Array.prototype.slice.call(pictures);

let i=1;
let httpRequestPromise = fetch(jsonfile);

console.log(httpRequestPromise);
httpRequestPromise.then(response => {
    return response.json();
})
    .then(result => {
        console.log(result);
        picArr[0].style.backgroundImage='url('+result.img1+')';
        picArr[1].style.backgroundImage='url('+result.img2+')';
        picArr[2].style.backgroundImage='url('+result.img3+')';
        picArr[3].style.backgroundImage='url('+result.base64+')';


        picArr.forEach(curr=>{
        });
    })

console.log(picArr);