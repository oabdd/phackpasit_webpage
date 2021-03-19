let text = document.getElementById('text1');
let n = 0;

function postFunction(){
    comment = text.value;
    
    if(n == 0 && comment != '') {
        document.getElementById('topic1').innerHTML = comment;
        n++
        console.log(n);
        document.getElementById('text1').value = '';
    }
    
    else if(n == 1 && comment != '') {
        document.getElementById('comment1').innerHTML = comment;
        n++
        console.log(n);
        document.getElementById('text1').value = '';
    }

    else if(n == 2 && comment != '') {
        document.getElementById('comment2').innerHTML = comment;
        n++
        console.log(n);
        document.getElementById('text1').value = '';
    }
    else if(comment != ''){
        alert("ran out of amount to comment");
    }
}

function clearFunction(){
    document.getElementById('topic1').innerHTML = '';
    document.getElementById('comment1').innerHTML = '';
    document.getElementById('comment2').innerHTML = '';
    document.getElementById('text1').value = '';
    n = 0;
    console.log(n);
}