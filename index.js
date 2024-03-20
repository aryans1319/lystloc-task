const https = require("https");

module.exports.create_lead = async (event) => {
  try {
    const requestData = JSON.parse(event.body);
    const requestDataString = JSON.stringify(requestData);

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${event.HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(requestDataString),
      },
    };

    const response = await new Promise((resolve, reject) => {
      const req = https.request(
        "https://api.hubapi.com/crm/v3/objects/contacts",
        options,
        (res) => {
          let data = "";

          res.on("data", (chunk) => {
            data += chunk;
          });

          res.on("end", () => {
            resolve({ status: res.statusCode, data: JSON.parse(data) });
          });
        }
      );

      req.on("error", (error) => {
        reject(error);
      });

      req.write(requestDataString);
      req.end();
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log(`Error in creating lead:`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Lead Creation Failed" }),
    };
  }
};

module.exports.list_leads = async (event) => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${event.HUBSPOT_ACCESS_TOKEN}`,
      },
    };

    const response = await new Promise((resolve, reject) => {
      const req = https.request(
        "https://api.hubapi.com/crm/v3/objects/contacts",
        options,
        (res) => {
          let data = "";

          res.on("data", (chunk) => {
            data += chunk;
          });

          res.on("end", () => {
            resolve({ status: res.statusCode, data: JSON.parse(data) });
          });
        }
      );

      req.on("error", (error) => {
        reject(error);
      });
      req.end();
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log(`Error in retrieving the leads:`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to retrieve leads" }),
    };
  }
};
