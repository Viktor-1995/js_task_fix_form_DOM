document.querySelectorAll("form input").forEach(function(e){var t=e.parentElement,r=document.createElement("label"),l=e.getAttribute("name");t.insertBefore(r,e),r.className="field-label",r.setAttribute("for",e.getAttribute("id")),r.textContent=l,e.placeholder=l.charAt(0).toUpperCase()+l.slice(1)});
//# sourceMappingURL=index.d026e72e.js.map
