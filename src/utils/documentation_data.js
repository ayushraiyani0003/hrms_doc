const HRMSDoc = [
  {
    id: "01",
    name: "Admin",
    type: "main",
    subCategory: [
      {
        name: "Setup",
        subSubCategory: [
          {
            id: "01",
            title: "Bank List",
            subTitle: "Add, Edit or Delete Bank Names",
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
                data: '<p>2. Under the Admin section/module, click on <b>"Setup"</b>.</p>',
              },
              {
                id: "1c",
                type: "image",
                data: "public/assets/Image/main_dashboard.png",
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
                data: "public/assets/Image/bank_dashboard.png",
              },
              {
                id: "1g",
                type: "text",
                data: '<p>4. Enter the bank name in the text field where examples are provided, and click <b>"Save"</b>.</p>',
              },
              {
                id: "1h",
                type: "image",
                data: "public/assets/Image/add_bank.png",
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
                data: "public/assets/Image/edit_bank.png",
              },
              {
                id: "1mm",
                type: "divider",
              },
              {
                id: "1n",
                type: "text",
                data: '<p>1.3. If the Admin wants to delete a bank, click on the <b>"Delete"</b> button. A new alert page will open. Click <b>"Confirm Delete"</b> to remove the record permanently.</p>',
              },
              {
                id: "1o",
                type: "image",
                data: "public/assets/Image/delete_bank.png",
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
            content: [
              {
                id: "1",
                type: "text",
                data: "Countries should be define here",
              },
              {
                id: "2",
                type: "document",
                data: "",
              },
            ],
          },
          {
            id: "03",
            title: "Salutation",
            content: [
              {
                id: "1",
                type: "text",
                data: "Salutations should be define here",
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
      {
        name: "PROCESS",
        subSubCategory: [
          {
            id: "01",
            title: "JOB_POSTING",
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
            title: "INTERVIEW_PROCESS",
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
    ],
  },
  {
    id: "02",
    name: "Recruitment",
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
  {
    id: "03",
    name: "Calander",
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
