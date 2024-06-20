const path = require('path');
const { JSDOM } = require("jsdom");

const kmlFilePath = path.join(__dirname, '../../public/library-data.kml');

let xml;

async function loadXml() {
  if (xml == undefined) {
    // Dynamically import node-fetch
    const fetch = await import('node-fetch').then(module => module.default);

    let response = await fetch(`http://localhost:8888/library-data.kml`, {
      method: "get",
      headers: {
        "Content-Type": "application/xml"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${kmlFilePath}: ${response.statusText}`);
    }

    const data = await response.text();
    const dom = new JSDOM(data, { contentType: "application/xml" });
    xml = dom.window.document;
  }
  return xml;
}

async function loadLibraries() {
  const xmldocument = await loadXml();
  return xmldocument.querySelectorAll("Placemark");
}

async function getLibraryById(id) {
  const xmldocument = await loadXml();
  return xmldocument.getElementById(id);
}

module.exports = {
  loadLibraries,
  getLibraryById
};
