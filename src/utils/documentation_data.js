const HRMSDoc = [
  {
    id: "01",
    name: "Admin",
    type: "main",
    subCategory: [
      {
        name: "COMPANY STRUCTURE",
        subSubCategory: [
          {
            id: "01",
            title: "Company Structure",
            content: [
              {
                id: "1",
                type: "text",
                data: "Job posting procedures and requirements",
              },
              {
                id: "2",
                type: "image",
                data: "",
              },
            ],
          },
          {
            id: "02",
            title: "Company Graph",
            content: [
              {
                id: "1",
                type: "document",
                data: "",
              },
              {
                id: "2",
                type: "video",
                data: "",
              },
            ],
          },
        ],
      },
      {
        name: "SETUP",
        subSubCategory: [
          {
            id: "01",
            title: "Bank List",
            //subTitle: "Add, Edit or Delete Bank Names",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>2. Under the Admin module, click on <b>"Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add a bank, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/setup/bank_dashboard.png",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter the bank name in the text field where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/setup/add_bank.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check the bank name.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change the bank name.</p>',
              },
              {
                id: "1l",
                type: "infoBox",
                data: "Info: (Only characters are allowed)",
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/setup/edit_bank.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete a bank, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/setup/delete_bank.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
          {
            id: "02",
            title: "Country",
            //subTitle: "Add, Edit or Delete Countries",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>1. Under the Admin module, click on <b>"Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>2. Click on the <b>"Country"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/setup/country_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add a country, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter the following details in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1g",
                type: "infoBox",
                data: "Alert: <p>a. Country Name: Only capital/small characters are allowed. <br> b. Country Code: Only two capital characters are allowed.<br>c. Phone Code: Must start with '+' and include one or two numbers (e.g., +1, +91). <br>d. Region: Enter continent/region name using only characters.</p>",
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/setup/add_country.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check country details.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change country details.</p>',
              },
              {
                id: "1l",
                type: "infoBox",
                data: "Info: (Only characters are allowed)",
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/setup/edit_country.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete a country, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/setup/delete_country.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
          {
            id: "03",
            title: "Salutation",
            //subTitle: "Add, Edit or Delete Salutations",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>1. Under the Admin module, click on <b>"Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>2. Click on the <b>"Salutation"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/setup/salutation_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add a salutation, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter the salutation in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/setup/add_salutation.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check salutation.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change salutation.</p>',
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/setup/edit_salutation.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete a salutation, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/setup/delete_salutation.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "02",
    name: "RECRUITMENT",
    type: "main",
    subCategory: [
      {
        name: "Manpower Requisition",
        subSubCategory: [
          {
            id: "01",
            title: "DOCUMENTATION",
            content: [
              {
                id: "1",
                type: "text",
                data: "Required documentation for new employees",
              },
              {
                id: "2",
                type: "checklist",
                data: "",
              },
            ],
          },
        ],
      },
      {
        name: "Applicant Tracking",
        subSubCategory: [
          {
            id: "01",
            title: "EVALUATION",
            content: [
              {
                id: "1",
                type: "form",
                data: "",
              },
              {
                id: "2",
                type: "document",
                data: "",
              },
            ],
          },
        ],
      },

      // New SubCategory started from here...
      {
        name: "Recruitment Setup",
        subSubCategory: [
          {
            id: "01",
            title: "Employee Type",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>2. Under the Recruitment module, click on <b>"Recruitment Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/recruitment_setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add employee type, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/recruitment_setup/employee_type_dashboard.png",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter the type of job/employee in the text field where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/recruitment_setup/add_employee_type.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check the type of employee.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change the type of employee.</p>',
              },
              {
                id: "1l",
                type: "infoBox",
                data: "Info: (Only characters are allowed)",
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/recruitment_setup/edit_employee_type.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete an employee type, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/recruitment_setup/delete_employee_type.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write an employee type in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple types on a single page.</p>',
              },
            ],
          },
          {
            id: "01",
            title: "Experience Levels",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>1. Under the Recruitment module, click on <b>"Recruitment Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/recruitment_setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>2. Click on the <b>"Experience Levels"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/recruitment_setup/experience_level_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add an experience level, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter the experience level in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/recruitment_setup/add_experience_level.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check the level of experience.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change experience level.</p>',
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/recruitment_setup/edit_experience_level.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete an experience level, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/recruitment_setup/delete_experience_level.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
          {
            id: "01",
            title: "Designations",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>1. Under the Recruitment module, click on <b>"Recruitment Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/recruitment_setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>2. Click on the <b>"Designations"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/recruitment_setup/designation_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add a designation, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter a designation in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/recruitment_setup/add_designation.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check a designation.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change the designation.</p>',
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/recruitment_setup/edit_designation.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete a designation, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/recruitment_setup/delete_designation.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
          {
            id: "01",
            title: "Skills",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>1. Under the Recruitment module, click on <b>"Recruitment Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/recruitment_setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>2. Click on the <b>"Skills"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/recruitment_setup/skill_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add a skill, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter a skill in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/recruitment_setup/add_skill.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check a skill.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change a skill.</p>',
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/recruitment_setup/edit_skill.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete any skill, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/recruitment_setup/delete_skill.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
          {
            id: "01",
            title: "Education Levels",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>1. Under the Recruitment module, click on <b>"Recruitment Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/recruitment_setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>2. Click on the <b>"Education Levels"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/recruitment_setup/education_level_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add an education level, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter the education level in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/recruitment_setup/add_education_level.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check the education level.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change the level of education.</p>',
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/recruitment_setup/edit_education_level.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete the level of education, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/recruitment_setup/delete_education_level.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
          {
            id: "01",
            title: "Hiring Source",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>1. Under the Recruitment module, click on <b>"Recruitment Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/recruitment_setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>2. Click on the <b>"Hiring Source"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/recruitment_setup/hiring_source_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add a hiring source, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter a hiring source in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/recruitment_setup/add_hiring_source.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check the hiring source.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change the hiring source.</p>',
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/recruitment_setup/edit_hiring_source.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete a hiring source, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/recruitment_setup/delete_hiring_source.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
          {
            id: "01",
            title: "Work Shift",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>2. Under the Recruitment module, click on <b>"Recruitment Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/recruitment_setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. Click on the <b>"Work Shift"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/recruitment_setup/work_shift_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add a work shift, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter the following details in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1g",
                type: "infoBox",
                data: "Alert: <p>a. Shift Name: Only capital/small characters are allowed.(with or without special characters like(-/_)) <br> b. Start Time/End Time: The format is only from 1:00 to 12:00 with AM or PM.</p>",
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/recruitment_setup/add_work_shift.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check the work shift.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change the work shift.</p>',
              },
              {
                id: "1l",
                type: "infoBox",
                data: "Info: (Only characters are allowed)",
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/recruitment_setup/edit_work_shift.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete the work shift, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/recruitment_setup/delete_work_shift.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
          {
            id: "01",
            title: "Job Locations Type",
            content: [
              {
                id: "1",
                type: "text",
                data: "<p>1. Login to the Admin Account</p>",
              },
              {
                id: "1a",
                type: "infoBox",
                data: "Info: (Note: This site is not accessible to other users. Only Head and Admin have rights to log in.)",
              },
              {
                id: "1b",
                type: "text",
                data: '<p>1. Under the Recruitment module, click on <b>"Recruitment Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/recruitment_setup/main_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>2. Click on the <b>"Job Locations"</b> tab.</p>',
              },
              {
                id: "1f",
                type: "image",
                data: "public/assets/Image/recruitment_setup/job_location_dashboard.png",
              },
              {
                id: "1d",
                type: "text",
                data: '<p>3. To add a job location, click on the <b>"Add New"</b> button.</p>',
              },
              {
                id: "1e",
                type: "infoBox",
                data: "info: (Only characters are allowed)",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter a job location in the text fields where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/recruitment_setup/add_job_location.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1i",
                type: "text",
                data: "<b><i>Explanation of three buttons <b>(View, Edit, Delete)</b>:</i></b>",
              },
              {
                id: "1j",
                type: "text",
                data: '<p>1.1. The <b>"View"</b> button is used to check a job location.</p>',
              },
              {
                id: "1k",
                type: "text",
                data: '<p>1.2. By clicking the <b>"Edit"</b> button, the Admin can change a job location.</p>',
              },
              {
                id: "1m",
                type: "image",
                data: "public/assets/Image/recruitment_setup/edit_job_location.png",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete a job location, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/recruitment_setup/delete_job_location.png",
              },
              {
                id: "1o",
                type: "infoBox",
                data: "Alert: Record will be deleted permanently",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1p",
                type: "text",
                data: "<b><i>Explanation of two buttons (Search and 10 per page):</i></b>",
              },
              {
                id: "1q",
                type: "text",
                data: "<p>5. Write the bank name in search field. If the entity exists, the output will be displayed.</p>",
              },
              {
                id: "1r",
                type: "text",
                data: '<p>6. "10 per page", "25 per page", "50 per page" options increase the number of rows to display multiple bank details on a single page.</p>',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "03",
    name: "Calender",
    type: "main",
    subCategory: [
      {
        name: "ONBOARDING",
        subSubCategory: [
          {
            id: "01",
            title: "DOCUMENTATION",
            content: [
              {
                id: "1",
                type: "text",
                data: "Required documentation for new employees",
              },
              {
                id: "2",
                type: "checklist",
                data: "",
              },
            ],
          },
        ],
      },
      {
        name: "Manage",
        subSubCategory: [
          {
            id: "01",
            title: "EVALUATION",
            content: [
              {
                id: "1",
                type: "form",
                data: "",
              },
              {
                id: "2",
                type: "document",
                data: "",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "04",
    name: "Manage",
    type: "main",
    subCategory: [
      {
        name: "ONBOARDING",
        subSubCategory: [
          {
            id: "01",
            title: "DOCUMENTATION",
            content: [
              {
                id: "1",
                type: "text",
                data: "Required documentation for new employees",
              },
              {
                id: "2",
                type: "checklist",
                data: "",
              },
            ],
          },
        ],
      },
      {
        name: "PERFORMANCE",
        subSubCategory: [
          {
            id: "01",
            title: "EVALUATION",
            content: [
              {
                id: "1",
                type: "form",
                data: "",
              },
              {
                id: "2",
                type: "document",
                data: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default HRMSDoc;
