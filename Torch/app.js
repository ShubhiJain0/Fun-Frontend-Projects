document.addEventListener('mousemove', (e)=>{
  
  document.querySelector(".flashlight").style.marginLeft=`${e.pageX}px`

  
  document.querySelector(".flashlight").style.marginTop = `${e.pageY}px`;
})