class ArtboardSelector { 

  selectArtboard(selection) {
    console.log("Selecting artboard") 

    let selectionItems = selection.items 
    var artboard = "" 
    
    findTopNode(selectionItems[0])

    function findTopNode(node) { 
      let parent = node.parent

      if (parent == null) { 
        artboard = node 
        return
      } else {
        //If artboard is not the parent, try again
        findTopNode(parent) 
      }
    }
    return artboard
  } 
}
module.exports = ArtboardSelector;