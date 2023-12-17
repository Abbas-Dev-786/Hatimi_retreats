const { xml2js } = require("xml-js");

const getRequestBodyAndURL = (its, key, type = "data") => {
  const dataURL =
    "https://ejas.its52.com/ejamaatservices.asmx?op=Estate_Dept_Hatemi";
  const dataRequestBody = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <Estate_Dept_Hatemi xmlns="http://localhost/eJAS/EjamaatServices">
          <ITS_ID>${its}</ITS_ID>
          <strKey>${key}</strKey>
        </Estate_Dept_Hatemi>
      </soap:Body>
  </soap:Envelope>`;

  const imageURL =
    "https://ejas.its52.com/ejamaatservices.asmx?op=GetMuminNewPhoto";
  const imageRequestBody = `
  <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetMuminNewPhoto xmlns="http://localhost/eJAS/EjamaatServices">
          <EjamaatId>${its}</EjamaatId>
          <strKey>${key}</strKey>
        </GetMuminNewPhoto>
      </soap:Body>
    </soap:Envelope>
  `;

  return type === "data"
    ? { url: dataURL, body: dataRequestBody }
    : { url: imageURL, body: imageRequestBody };
};

const getFilteredData = (data) => {
  const jsonData = xml2js(data, {
    compact: true,
    spaces: 1,
    ignoreCdata: true,
    ignoreDoctype: true,
    ignoreComment: true,
    ignoreAttributes: true,
    ignoreInstruction: true,
    ignoreDeclaration: true,
    instructionHasAttributes: true,
    trim: true,
    alwaysChildren: true,
    nativeTypeAttributes: true,
  });

  const parsedData =
    jsonData?.["soap:Envelope"]?.["soap:Body"]?.[
      "Estate_Dept_HatemiResponse"
    ]?.["Estate_Dept_HatemiResult"]?.["diffgr:diffgram"]?.["NewDataSet"]?.[
      "Table"
    ];

  for (const [key, value] of Object.entries(parsedData)) {
    parsedData[key] = value?._text;
  }

  const finalData = {
    its: parsedData.ITS_ID,
    fullName: parsedData.Fullname,
    email: parsedData.Email,
    phone: parsedData.Mobile_no,
    whatsapp: parsedData.Whatsapp_No,
    country: parsedData.Nationality,
    vatan: parsedData.Vatan,
  };

  return finalData;
};

const getFilteredImageData = (data) => {
  const rawData = xml2js(data, {
    compact: true,
    spaces: 1,
    ignoreCdata: true,
    ignoreDoctype: true,
    ignoreComment: true,
    ignoreAttributes: true,
    ignoreInstruction: true,
    ignoreDeclaration: true,
    instructionHasAttributes: true,
    trim: true,
    alwaysChildren: true,
    nativeTypeAttributes: true,
  });

  const base64Image =
    rawData?.["soap:Envelope"]?.["soap:Body"]?.["GetMuminNewPhotoResponse"]?.[
      "GetMuminNewPhotoResult"
    ]?._text;

  const finalData = {
    profileImg: base64Image,
  };

  return finalData;
};

async function makeRequest(its, key, type) {
  try {
    const { url, body } = getRequestBodyAndURL(its, key, type);

    const request = await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "text/xml",
      }),
      body: body,
    });

    const response = request.text();

    const xmlData = await response;

    return type === "data"
      ? getFilteredData(xmlData)
      : getFilteredImageData(xmlData);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const getITSData = async (its, key) => {
  try {
    const responses = await Promise.all([
      makeRequest(its, key, "data"),
      makeRequest(its, key, "image"),
    ]);

    // Process the responses
    responses.forEach((data, index) => {
      console.log(`Response from API endpoint ${index + 1}:`, data);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Sample data
const its = "60472201"; // Replace with your actual ITS_ID
const key = "hrqsy4AJ0LwitKNsGO8yEynmi63IYmh8"; // Replace with your actual API key
getITSData(its, key);
