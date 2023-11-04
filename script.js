
const throttleFunction=(func, delay)=>{
    let prev = 0; 
    return (...args) => {
      let now = new Date().getTime();  
      if(now - prev> delay){ 
        prev = now;
        return func(...args);  
      }
    }
  }
  document.querySelector("#center")
  .addEventListener("mousemove", throttleFunction((details)=>{
   var div = document.createElement("div");
   div.classList.add("imagediv");
   div.style.left = details.clientX + "px";
   div.style.top = details.clientY + "px";

   var img = document.createElement("img");
   img.setAttribute("src", "https://images.unsplash.com/photo-1698005158553-c7653d06e6dc?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
   div.appendChild(img);

   gsap.to(img,{
    y: "0",
    ease:Power2,
   })

   setTimeout(function(){
    div.remove()
   }, 1000);
   document.body.appendChild(div);
  }, 400));


