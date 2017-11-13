const HumusRecipe = require('hummus-recipe');
const pdfDoc = new HumusRecipe('CollegeNet.pdf', './results/output4.pdf');

pdfDoc
    // edit 1st page
    .editPage(1)
    .text('Add some texts to an existing pdf file', 150, 0)
    .image('image.jpeg', 0, 0, {
      width: 50,
      height: 50
    })
    .endPage()
    // edit 2nd page
    .endPDF();
