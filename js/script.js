
//Variables
const windowP=document.getElementById('window')
const mathButtons=document.querySelectorAll('.blue')

let currentStringArr=[]
let currentString
let total
//Functions

const getString=(e)=>{
        currentStringArr.push(e.target.value)
        currentString=currentStringArr.join('')
        windowP.innerHTML=currentString
}

const onClick=function(e){
    windowP.innerHTML=``
    if(e.target.value>=0 && e.target.value<=9){
        windowP.innerHTML=``
        getString(e)
    }else if(e.target.value==='.'){
        getString(e)
    }else if(e.target.value==='+' || '-' || '/' || '*'){
        getString(e)
        if(e.target.value==='='){
            windowP.innerHTML=``
            const newArr=currentStringArr.slice(0,-1).join('')
            total=eval(newArr)
            windowP.innerHTML=total
            currentStringArr=[total]
        }}
    }

    const clearAll=(e)=>{
        currentStringArr=[]
        windowP.innerHTML=`0`
    }






    