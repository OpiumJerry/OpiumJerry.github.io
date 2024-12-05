function openAboutBlank() {
    setTimeout(function() {
        var links = document.querySelectorAll('div.image-container a');
        links.forEach(function(link) {
            link.onclick = function(event) {
                event.preventDefault(); 
                var win = window.open();
                var iframe = win.document.createElement('iframe');
                iframe.style.position = "fixed";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.bottom = "0";
                iframe.style.right = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none";
                iframe.style.margin = "0";
                iframe.style.padding = "0";
                iframe.style.overflow = "hidden";
                iframe.style.zIndex = "999999";
                iframe.src = link.href;
                win.document.body.appendChild(iframe);
            };
        }); 
    }, 50); 
} 

