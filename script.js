const content=document.querySelector(".content"),
qrInput=content.querySelector(".form input"),
generatebtn= content.querySelector(".generatebtn"),
qrImg=content.querySelector(".qr-code img");

generatebtn.addEventListener("click",() =>{
    let qrValue=qrInput.value;
    if(!qrValue) return; //if input is empty then return from here
    generatebtn.innerText="Generating QR Code...",
// geeting a qr code of use entered value using the qr server
// api and passing the api returned img src to qrimg
  qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.addEventListener("load", ()=>{
    content.classList.add("active");
    generatebtn.innerText="Generate QR Code...";
  })
    
});
qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        content.classList.remove("active");
    }
})
