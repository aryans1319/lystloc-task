## Functions Overview

### 1. Create Lead [Done]

- **Endpoint:** `https://mka2fs2oyh.execute-api.us-east-1.amazonaws.com/create_lead`
- **Method:** `POST`
- **Description:**
  - Accepts a JSON request body with keys:
    - `email` (String): Lead's email address
    - `firstname` (String): Lead's first name
    - `lastname` (String): Lead's last name
    - `phone` (String): Lead's phone number
    - `company` (String): Lead's company name
    - `website` (String): Lead's website
    - `lifecyclestage` (String): Lead's lifecycle stage
  
  - Sends a request to the HubSpot API to create a contact with the provided data.
  - Returns the response from the HubSpot API upon successful lead creation.
  - If an error occurs during lead creation, it returns a 500 status code with an error message.

  - JSON Format
    ```
    {
    "properties": {
      "email": "xyz1@hubspot.com",
      "firstname": "Jane",
      "lastname": "Doe",
      "phone": "(555) 555-5555",
      "company": "HubSpot",
      "website": "hubspot.com",
      "lifecyclestage": "marketingqualifiedlead"
      }
    }
    ```
### 2. List All Lead [Done] 

- **Endpoint:** `https://mka2fs2oyh.execute-api.us-east-1.amazonaws.com/list_leads`
- **Method:** `GET`
- **Description:**
  - Retrieves all leads

**Note**: Generate your access token from hubspot and replace because it gets expired in some time