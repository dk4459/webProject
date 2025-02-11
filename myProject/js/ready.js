async function loadTemplate(id, filePath) {
    const response = await fetch(filePath);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
  }

  async function loadTemplates() {
    await loadTemplate("header", "header.html");  
    await loadTemplate("footer", "footer.html"); 
    
    let script = document.createElement("script");
    script.src = "js/header.js";
    document.body.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", loadTemplates);