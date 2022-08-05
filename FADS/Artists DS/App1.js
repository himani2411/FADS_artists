console.log("I am here");

let viz

const containerDiv = document.getElementById("vizContainer1");
const btn = document.getElementById('btn')
const url = "https://public.tableau.com/views/DynamicAxisDashboard_16291399161450/DynamicAxisDashboard";
const exportPDF = document.getElementById('exportPDF')
const exportImage = document.getElementById('exportImage')
const options = {
    hideTabs: true,
    height: 550,
    width: 1400,
    onFirstInteractive: function() {
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