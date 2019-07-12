const dialogHTML = require("./templates/dialogHTML");

class LetterPanel {


// Function to create Modal dialog
 createDialog(selection, rootNode, code, artboardSelected) {
    console.log("Creating Dialog Box");
  
    if (artboardSelected == false) {
      document.body.innerHTML = dialogHTML.codeDialog(null);
    } else {
      document.body.innerHTML = dialogHTML.codeDialog(code);
    }
    // Dialog to be used for closing
    const dialog = document.getElementById("dialog");
  
    // Cancel > Close Dialog
    document.getElementById("cancel").addEventListener("click", () => {
      dialog.close("cancelled");
    });
  
    // Export rendition
    document.getElementById("container-form").onsubmit = event => {
      event.preventDefault();
      
      dialog.close("Copied to clipboard");
      this.copyToClipBoard(code);
    };
  
    return dialog;
  }

  // Function to copy banner html to clipboard

copyToClipBoard(bannerHTML) {
  let clipboard = require("clipboard");

  const temporaryTextArea = document.createElement("textarea");
  temporaryTextArea.value = bannerHTML;
  temporaryTextArea.id = `tempTextArea`;
  document.body.appendChild(temporaryTextArea);

  const textArea = document.getElementById(`tempTextArea`);
  clipboard.copyText(textArea.value);
  document.body.removeChild(temporaryTextArea);
  console.log(`Copied bannerHTML to clipboard!`);
}

}
module.exports = LetterPanel;