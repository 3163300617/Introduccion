

let caja = document.getElementById('cja');
let caja2= document.getElementsByClassName('cajas')
let colores=["green","red","black","orange","yellow","purple","blue","pink","gold","gray"];
let caja3= document.getElementsByTagName('div');
let caja4 = document.querySelector('#cja');
let caja5 = document.querySelector('.caja');
let caja6 = document.querySelectorAll('.cajas');
let principal= document.querySelector('.principal');
let hr= document.createElement('hr');
console.log(caja);
console.log(caja2);
console.log(caja3);
console.log('quierySelector por id: ',caja4);
console.log('querySelector por clase: ',caja5);
console.log('querySelectorAll',caja6);

// caja.style.width='100px';
// caja.style.height="200px";
// caja.style.background="green";
// caja.innerHTML="Partes de dom";

caja2[3].style.width='300px';
caja2[3].style.background='red';
caja2[3].innerHTML='caja3';

for (const key in caja2) {
    caja2[key].style.width='300px';
    caja2[key].style.height='300px';
    caja2[key].style.background=colores[key];
    caja2[key].style.float='left';
    caja2[key].style.marginleft='2%';
    caja2[key].style.marginTop='2%';
    caja2[key].innerHTML=key;
    caja2[key].style.color='white';
    caja2[key].style.fontSize='40px';
    caja2[key].style.textAlign='center';
    caja2[key].style.lineHeight='7';
    
}

    principal.append(hr);

 

