window.addEventListener("load", function(){
    let prevref = "";
    for (const a of document.body.getElementsByTagName("a")){
        // Open external links in new tabs
        if (a.href.length > 0 && new URL(a.href).origin !== location.origin){
            a.setAttribute("target", "_blank");
        }
    }

    // Reword "search docs"
    document.getElementById("documenter-search-query").innerText = "Search";
});