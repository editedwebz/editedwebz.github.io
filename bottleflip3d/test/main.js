document.body.addEventListener('keypress', (e) =>{
    console.log(e.key)
    if (e.key == ' '){
        console.log('space')
    }
})




document.getElementById('btn').onclick=function(){
    let keyEvent = new KeyboardEvent('keypress', { });
    document.body.dispatchEvent(keyEvent)
}

document.getElementById('testdiv').onclick = function(){
    alert('hi')
}
