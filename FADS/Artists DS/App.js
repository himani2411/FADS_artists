console.log("I am here");

let viz

const containerDiv = document.getElementById("vizContainer");
const btn = document.getElementById('btn')
const url = "https://public.tableau.com/views/SankeyDashboard_16291399657600/SankeyDashboard2";
const exportPDF = document.getElementById('exportPDF')
const exportImage = document.getElementById('exportImage')
const options = {
    hideTabs: true,
    height: 550,
    width: 1400,
    oonFirstInteractive: function() {
        console.log("Hey, my dashboard is ready!");
    }
};


function initViz() {
    viz = new tableau.Viz(containerDiv, url, options);
}

document.addEventListener('DOMContentLoaded',initViz);

exportPDF.addEventListener("click",function() {
    viz.showExportPDFDialog();
});

exportImage.addEventListener("click", function() {
    viz.showExportImageDialog();
});