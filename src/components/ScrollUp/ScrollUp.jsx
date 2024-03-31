import React from 'react';
import "./ScrollUp.css";

function ScrollUp() {

    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 400){
            scrollUp.classList.add("show-scroll");
          }else{
            scrollUp.classList.remove("show-scroll");
          }
    });

    const scrollButt = () =>{
        window.scrollTo({
          top: 0, left: 0, behavior: "smooth"
        })
      }

  return (
    <a href="#" className="scrollup" onClick={scrollButt}>
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp