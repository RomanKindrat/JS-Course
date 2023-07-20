function getPromise(message, delay)
{
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(message); 
        }, delay)
    });
}


getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
});