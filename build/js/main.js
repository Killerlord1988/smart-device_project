var links=document.querySelectorAll("[data-link]");if(links)for(var i=0;i<links.length;i++)links[i].addEventListener("click",function(e){e=document.querySelector("[id="+e.target.dataset.link+"]");e&&e.scrollIntoView({behavior:"smooth",block:"start"})});var modalOpen=document.querySelector(".modal-overlay--open"),modalClose=document.querySelector(".modal__close"),modal=document.querySelector(".modal"),modalOverlayWrapper=document.querySelector(".modal-overlay__wrapper"),body=document.querySelector("body"),callName=document.querySelector("[name=call-name]"),phone=document.querySelector("[name=call-phone]"),comment=document.querySelector("[name=call-comment]"),form=document.querySelector(".form--modal"),isStorage=!0,nameStorage="",phoneStorage="",commentStorage="";try{nameStorage=localStorage.getItem("nameStorage"),phoneStorage=localStorage.getItem("phoneStorage"),commentStorage=localStorage.getItem("commentStorage")}catch(e){isStorage=!1}var setVisible=function(e){e?(body.classList.add("modal-overlay__wrapper--open"),document.addEventListener("keydown",escapeClickHandler)):(body.classList.remove("modal-overlay__wrapper--open"),modal.classList.remove("modal-overlay__wrapper--show"),document.removeEventListener("keydown",escapeClickHandler))},escapeClickHandler=function(e){"Escape"===e.key&&(e.preventDefault(),setVisible(!1))};modalOverlayWrapper&&modalOverlayWrapper.addEventListener("click",function(e){e.target===modalOverlayWrapper&&e.target!==form&&setVisible(!1)}),modalOpen&&modalOpen.addEventListener("click",function(e){e.preventDefault(),modal&&(modal.classList.add("modal-overlay__wrapper--show"),setVisible(!0),callName.focus()),nameStorage&&phoneStorage&&(callName.value=nameStorage,phone.value=phoneStorage,comment.value=commentStorage)}),modalClose&&modalClose.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("modal-overlay__wrapper--show"),setVisible(!1)}),form&&form.addEventListener("submit",function(e){callName.value&&phone.value?isStorage&&(localStorage.setItem("nameStorage",callName.value),localStorage.setItem("phoneStorage",phone.value),localStorage.setItem("commentStorage",comment.value)):e.preventDefault()});var acc=document.getElementsByClassName("accordion");document.querySelectorAll(".footer__content .footer__accordion-panel--no-js").forEach(e=>e.classList.remove("footer__accordion-panel--no-js"));for(i=0;i<acc.length;i++)acc[i].addEventListener("click",function(){this.classList.toggle("accordion--active");var e=this.nextElementSibling;e.classList.contains("footer__accordion-panel--active")?(e.classList.remove("footer__accordion-panel--active"),e.classList.add("footer__accordion-panel")):(e.classList.add("footer__accordion-panel--active"),e.classList.remove("footer__accordion-panel"))});var promoScroll=document.querySelector(".promo__scroll");promoScroll.addEventListener("click",function(){window.scrollTo(0,1e3)});var changeTextHandler,WORDS_COUNT=23,DEVIDER="..",tablet=window.matchMedia("(max-width: 1023px)"),textContainer=document.querySelector(".about p:last-of-type"),originalText=textContainer.innerText,smallText=originalText.split(" ",WORDS_COUNT).join(" ").concat(DEVIDER);tablet.addListener(changeTextHandler=textContainer?function(e){e.matches?textContainer.innerText=smallText:textContainer.innerText=originalText}:changeTextHandler),changeTextHandler(tablet),$(".mask-phone").mask("+7 (999) 999-99-99");
//# sourceMappingURL=main.js.map
