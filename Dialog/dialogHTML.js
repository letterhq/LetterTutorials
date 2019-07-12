//styles used for dialog
let style = `
<style>
    .container {
        width: 500px;
    }

    .logo {
        position: relative;
        margin: 16px auto 24px;
    }

    .title {
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        color: black;
        margin: 8px;
    }

    .header {
      text-align: center;
      font-size: 14px;
      margin-bottom: 24px;
    }

    .table {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        margin-bottom: 8px;
    }

    .footer {
      margin-top: 8px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .footer.error{
      margin-top:-18px;
    }

    .codebox{
      margin:0 auto;
      width:90%;
      height:auto;
      overflow-y:scroll;
      min-height:220px;
    }
</style>`;

/**
 * copy paste code dialog
 * @param {*} code
 */
exports.codeDialog = function(code) {
  //if no code, dialog tell user to select artboard
  if (code == null) {
    return (
      style +
      `<dialog id="dialog">
  <form id="container-form" class="container">
      <a class="logo" href="https://letter.so/"><img src="./images/letterlogo.png" style="width: 50px"></div></a>
      <h1 class="title">Please select an artboard first</h1>
      <div class="box">
          <div class="header">To create HTML email code, you need to select an artboard first.:</div>
      </div>
      <div class="footer error" id="footer">
          <button uxp-variant="primary" id="cancel">Close</button>
      </div>
  </form>
</dialog>
  `
    );
  }
  //otherwise, return dialog with textfield showing code
  return (
    style +
    `
<dialog id="dialog">
    <form id="container-form" class="container">
        <a class="logo" href="https://letter.so/"><img src="./images/letterlogo.png" style="width: 50px"></div></a>
        <h1 class="title">Here's your email code 💌</h1>
        <div class="box">
            <div class="header">Copy and paste it into Letter:</div>
            <div class="table">
                  <textarea class="codebox">${code}</textarea>
            </div>
        </div>
        <div class="footer" id="footer">
            <button uxp-variant="primary" id="cancel">Close</button>
            <button uxp-variant="cta" type="submit" id="apply">Copy</button>
        </div>
    </form>
</dialog>
`
  );
};

/**
 * return a simple dialog (this was the old one with select box)
 */
exports.simpleDialog = function() {
  return (
    style +
    `
<dialog id="dialog">
    <form id="container-form" class="container">
        <a class="logo" href="https://letter.so/"><img src="./images/letterlogo.png" style="width: 50px"></div></a>
        <h1 class="title">Export Artboard to Flat Email Banner HTML</h1>
        <div class="box">
            <div class="header">Choose an Artboard:</div>
            <div class="table">
                <div class="artboard">
                  
                </div>
            </div>
        </div>
        <div class="footer" id="footer">
            <button uxp-variant="primary" id="cancel">Cancel</button>
            <button uxp-variant="cta" type="submit" id="apply">Export</button>
        </div>
    </form>
</dialog>
`
  );
};
