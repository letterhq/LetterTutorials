const ArtboardSelector = require("./helpers/ArtboardSelector")
let artboardSelector = new ArtboardSelector()

const ErrorAlert = require("./helpers/ErrorAlert")
let errorAlert = new ErrorAlert()

const BannerCreator = require("./helpers/BannerCreator")
let bannerCreator = new BannerCreator()

const Dialog = require("./helpers/Dialog")
let dialog = new Dialog()

// Export module with commandId identifier for plugin
module.exports = {
  commands: {
    showFlatRenditionOption: flatRendition,
  }
};

/*--- ENTRY POINT OF PLUGIN ---*/

async function flatRendition(selection, rootNode) {
  console.log("Running flat rendition exporter")

  try {
    artboardSelector.selectArtboard(selection)
  } catch(err) {
    errorAlert.showNoSelectionError()
    console.log(`Error: ${err}`)
  }

  var bannerCode = await bannerCreator.exportFlatRendition(selection) 

  const bannerDialog = dialog.createDialog( 
    selection,
    rootNode,
    bannerCode    
    )

    try {
    const returnValue = await bannerDialog.showModal(); 
    // Display the return value of the modal
    if (returnValue) {
      console.log(`Dismissed: ${returnValue}`); 
    }
  } catch (err) {
    // Esc pressed or error
    console.log(`Dialog dismissed with ESC or error: ${err}`);
  }

}
