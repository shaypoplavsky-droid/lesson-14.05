let trun = true;// treu x
let btnCliced = 0;
let btns = document.querySelectorAll('.btn');

btns.forEach((b)=>{
    b.addEventListener('click', btnClick)
});

function btnClick(){
    if(this.textContent != "")return 
    btnCliced++;

    console.log("some log");
    
    if(trun)this.textContent = "X"
    else this.textContent = 'O'

function reset(){
    let btns = document.querySelectorAll('.btn'); 
     
    btns.forEach((b)=>{
        b.textContent = ""
        b.style.color = ""
    })
}

    // checkWeen
    let obj = checkWeen()
    if (obj.win) {
    let btns = document.querySelectorAll('.btn');
    btns[obj.pos[0]].style.color = 'rgb(0, 255, 26)';
    btns[obj.pos[1]].style.color = 'rgb(0, 255, 26)';
    btns[obj.pos[2]].style.color = 'rgb(0, 255, 26)';

        setTimeout(()=>{
            alert(`${this.textContent} is  ween`)
            reset()
            btnCliced = 0;
        },150)
       
    }
    else if (obj.isTie) {
        
        setTimeout(()=>{
            alert('is A Tie')
            reset()
        },150)
    }


    trun =! trun;
}

function checkWeen(){
    let btns = document.querySelectorAll('.btn');
    let obj = {win : false, isTie : false , pos : []};

    console.log(obj);
    if( btns[0].textContent === btns[1].textContent && btns[1].textContent === btns[2].textContent && btns[2].textContent != "")
        obj = {win : true, isTie : false, pos : [0,1,2]}
    else if( btns[3].textContent === btns[4].textContent && btns[4].textContent === btns[5].textContent && btns[5].textContent != "")
        obj = {win : true, isTie : false, pos : [3,4,5]}
    else if( btns[6].textContent === btns[7].textContent && btns[7].textContent === btns[8].textContent && btns[8].textContent != "")
        obj = {win : true, isTie : false, pos : [6,7,8]}
    else if( btns[0].textContent === btns[3].textContent && btns[3].textContent === btns[6].textContent && btns[6].textContent != "")
        obj = {win : true, isTie : false, pos : [0,3,6]}
    else if( btns[0].textContent === btns[3].textContent && btns[3].textContent === btns[6].textContent && btns[6].textContent != "")
        obj = {win : true, isTie : false, pos : [0,3,6]}
    else if( btns[1].textContent === btns[4].textContent && btns[4].textContent === btns[7].textContent && btns[7].textContent != "")
        obj = {win : true, isTie : false, pos : [1,4,7]}
    else if( btns[2].textContent === btns[5].textContent && btns[5].textContent === btns[8].textContent && btns[8].textContent != "")
        obj = {win : true, isTie : false, pos : [2,5,8]}
    else if( btns[2].textContent === btns[4].textContent && btns[4].textContent === btns[6].textContent && btns[6].textContent != "")
        obj = {win : true, isTie : false, pos : [2,4,6]}
    else if( btns[0].textContent === btns[4].textContent && btns[4].textContent === btns[8].textContent && btns[8].textContent != "")
        obj = {win : true, isTie : false, pos : [0,4,8]}

    else if(btnCliced === 9)
        obj.isTie = true;
        
    return obj;
}
checkWeen()
