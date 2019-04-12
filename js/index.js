document.querySelector('.login')
        .addEventListener('click', logIn);
        
const READY_STATE_FINISHED = 4;
const HTTP_STATUS_CODE_OK = 200;
        
function logIn(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === READY_STATE_FINISHED 
            && xhr.status === HTTP_STATUS_CODE_OK){
            document.querySelector('.logination')
                .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'logination.html', true);
    xhr.send();
}

// document.querySelector('.submit')
//     .addEventListener('click', submitLog);
    
// function submitLog() {
    
// }
