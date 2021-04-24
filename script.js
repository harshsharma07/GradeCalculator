const maths=document.querySelector('#maths');
const biology=document.querySelector('#biology');
const english=document.querySelector('#english');
const hindi=document.querySelector('#hindi');
const button=document.querySelector('#btn');
const mark=document.querySelector(".marq");
button.addEventListener('click',(e)=>{
    e.preventDefault();
    const m=document.createElement('p');
    const sum=parseInt(maths.value) + parseInt(biology.value) + parseInt(english.value) + parseInt(hindi.value);
    console.log(sum);
    const percent=sum/4;
    m.innerText="Your percentage is:" + percent+"%";
    if(hindi.value==''|| maths.value==''|| biology.value==''||english.value==''){
        alert('please write all subject marks out of 100');
    }else{
    mark.appendChild(m);}
})
