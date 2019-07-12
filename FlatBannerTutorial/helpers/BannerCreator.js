const ArtboardSelector = require("./ArtboardSelector")
let artboardSelector = new ArtboardSelector()

const application = require("application")
const fs = require("uxp").storage.localFileSystem

class BannerCreator {

  async exportFlatRendition(selection) {

    var _this = this

    let artboard = artboardSelector.selectArtboard(selection)

    let banner = await getFlatBanner(artboard) 

    async function getFlatBanner(artboard) { 
      try {
        console.log(`Getting flat banner`)
        var fileLocation = await _this.createFlatRendition(artboard) //[1]
      } catch(err) {
        console.log(`Error getting file location: ${err}`) //[2]
      }

      //once we have file location, create the banner code
      const bannerCode = `<table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td style="background-color: transparent; width: 600px;" width="600" valign="top">
                                                <!-- Image here 👇 -->
                  <img style="border-radius: 8px;" src="${fileLocation}" width="100%">
                                                <!-- Image here 👆 -->
                </td>
              </tr>
            </tbody>
          </table>`;

      console.log(`Banner code: ${bannerCode}`)

      return bannerCode;
    }
    return banner
  }

  async createFlatRendition(artboard) {

  console.log('Exporting file')

  const folder = await fs.getFolder(); //[1]
  const file = await folder.createFile(`${randomString()}.png`); //[2]

  let renditionSettings = [ //[3]
    {
      node: artboard, //[4]
      outputFile: file, // [5]
      type: application.RenditionType.PNG, // [6]
      scale: 2 // [7]
    }
  ];

  const renditionLocation = application
    .createRenditions(renditionSettings) //[1]
    .then(async (results) => {
      const fileLocation = results[0].outputFile.nativePath //[2]
      console.log(`File has been saved at ${fileLocation}`);
      return fileLocation;
    })
    .catch(error => {
      console.log(`Error creating rendition${error}`);
    });

    return renditionLocation

  }
}

function randomString() {

  // String can't start with a number or CSS won't work for some cases
  
  const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const str = Array(16)
  .join()
  .split(',')
  .map(function() {
     return s.charAt(Math
      .floor(Math.random() * s.length)); 
    })
    .join('');
  
  return str
}

module.exports = {
  randomString: randomString
};


module.exports = BannerCreator;