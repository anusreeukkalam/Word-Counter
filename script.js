let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");
let sentenCount = document.getElementById("senten-count");
let paraCount = document.getElementById("para-count"); 

inputTextArea.addEventListener("input", () => {
  characCount.textContent = inputTextArea.value.length;
  
  let txt = inputTextArea.value.trim();

  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;

  sentenCount.textContent=txt.split(/[.|!|?]+/g).length-1;

  paraCount.textContent=txt.replace(/\n$/gm,'').split(/\n/).length;
});