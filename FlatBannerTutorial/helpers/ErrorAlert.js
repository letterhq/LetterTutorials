
const errorPanel = require("./lib/dialogs.js"); //][1]

class ErrorAlert {
  async showNoSelectionError() { //[2]
    await errorPanel.error("Artboard not selected", "Please select the artboard that you would like to export as html") //[3]
  }
}

module.exports = ErrorAlert //[4]