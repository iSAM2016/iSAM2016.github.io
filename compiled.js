let trem = setTimeout(() => {
    console.log(1);
}, 3000);
async function read() {
    let template = await trem;
    console.log('async');
}
