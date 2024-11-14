let userInfo;

// window.addEventListener('DOMContentLoaded', () => {
//     const arrayUser = null;
//     const postUser = JSON.stringify(arrayUser);

//     if(postUser){
//         localStorage.setItem('User', postUser);
//     } else {
//         console.log('not post user to localStorage');
//     }
// })

window.addEventListener('DOMContentLoaded', () => {
    const dataUser = localStorage.getItem('User');

    if(dataUser){
        userInfo = JSON.parse(dataUser);
    } else {
        console.log('not fetch data user from localStorage');
    }
})

buttonBodyHomeThongTin.addEventListener('click', ()=>{
    window.scrollTo(0, 600)
})