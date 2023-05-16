const data_22_23 = {
  old: [
    {
      start: 1,
      end: 250000,
      percent: 0,
    },
    {
      start: 250001,
      end: 500000,
      percent: 5,
    },
    {
      start: 500001,
      end: 750000,
      percent: 20,
    },
    {
      start: 7500001,
      end: 1000000,
      percent: 20,
    },
    {
      start: 1000001,
      end: 10000000,
      percent: 30,
    },
  ],
  new: [
    {
      start: 1,
      end: 250000,
      percent: 0,
    },
    {
      start: 250001,
      end: 500000,
      percent: 5,
    },
    {
      start: 500001,
      end: 750000,
      percent: 10,
    },
    {
      start: 7500001,
      end: 1000000,
      percent: 15,
    },
    {
      start: 1000001,
      end: 1250000,
      percent: 20,
    },
    {
      start: 1250001,
      end: 1500000,
      percent: 25,
    },
    {
      start: 1500001,
      end: 10000000,
      percent: 30,
    },
  ],
  old_sd: 50000,
  old_rebate: 12500,
  new_rebate: 12500,
  old_rebate_limit:550000,
  new_rebate_limit:500000,
};
const data_23_24 = {
  old: [
    {
      start: 1,
      end: 250000,
      percent: 0,
    },
    {
      start: 250001,
      end: 300000,
      percent: 5,
    },
    {
      start: 300001,
      end: 500000,
      percent: 5,
    },
    {
      start: 500001,
      end: 600000,
      percent: 20,
    },
    {
      start: 600001,
      end: 750000,
      percent: 20,
    },
    {
      start: 7500001,
      end: 900000,
      percent: 20,
    },
    {
      start: 900001,
      end: 1000000,
      percent: 20,
    },
    {
      start: 1000001,
      end: 1200000,
      percent: 30,
    },
    {
      start: 1200001,
      end: 1250000,
      percent: 30,
    },
    {
      start: 1250001,
      end: 1500000,
      percent: 20,
    },
    {
      start: 1500001,
      end: 10000000,
      percent: 30,
    },
  ],
  new: [
    {
      start: 1,
      end: 250000,
      percent: 0,
    },
    {
      start: 250001,
      end: 300000,
      percent: 0,
    },
    {
      start: 300001,
      end: 500000,
      percent: 5,
    },
    {
      start: 500001,
      end: 600000,
      percent: 5,
    },
    {
      start: 600001,
      end: 750000,
      percent: 10,
    },
    {
      start: 7500001,
      end: 900000,
      percent: 10,
    },
    {
      start: 900001,
      end: 1000000,
      percent: 15,
    },
    {
      start: 1000001,
      end: 1200000,
      percent: 15,
    },
    {
      start: 1200001,
      end: 1250000,
      percent: 20,
    },
    {
      start: 1250001,
      end: 1500000,
      percent: 20,
    },
    {
      start: 1500001,
      end: 10000000,
      percent: 30,
    },
  ],
  old_sd: 50000,
  new_sd: 50000,
  old_rebate: 12500,
  new_rebate: 25000,
  old_rebate_limit: 550000,
  new_rebate_limit: 750000,
};

const Fnames = [
  {
    title: "Income",
    data: [
      {
        name: "Income from Salary ",
        tooltip:
          "Salary before reducing HRA, LTA, standard deductions & professional tax. If applicable, reduce leave encashment (max: 25L)",
      },
      {
        name: "Income from Interest",
        tooltip:
          "Includes interest from savings bank, deposits and other interest",
      },
      {
        name: "Interest From Other Sources",
        tooltip: "Rental income, Digital Assets, capital gains, etc.",
      },
    ],
  },
  {
    title: "Deductions",
    data: [
      {
        name: "Basic Deductions - 80C",
        tooltip:
          "Amount invested/paid in tax saving instruments such as PPF, ELSS mutual funds, LIC premium, etc. (max: 1.5L)",
      },
      {
        name: "Medical Insurance - 80D",
        tooltip:
          "Medical premium & preventive health checkup fees paid for self & family including parents",
      },
      {
        name: "Interest on Educational Loan - 80E",
        tooltip: "Amount of interest paid on loan taken for higher education",
      },
      {
        name: "Donations to Charity - 80G",
        tooltip:
          "Amount paid as donation to charitable insitutions or certain recognized funds",
      },
      {
        name: "Interest from Deposits - 80TTA",
        tooltip:
          "Amount of interest income on deposits in savings account (includes fixed/recurring deposit interest in case of senior citizen) ",
      },
      {
        name: "Interest on Housing Loan - 80EEA",
        tooltip:
          "Amount of interest paid on housing loan sanctioned during FY (max: 1.5L)",
      },
      {
        name: "Employee's contribution to NPS - 80CCD",
        tooltip:
          "As per old tax regime, maximum deduction allowed is ₹50,000. As per new tax regime, the maximum deduction allowed is restricted to 14% of salary for central government employees and 10% for any other employee.",
        },
        {
            name: "Others",
            tooltip:"Other Deductions which are not mentioned"
      }
    ],
  },
];

const viewTable = [
  "Total Income",
  "Total Deductions",
  "Standard Deduction",
  "Total Taxable Income",
  "Tax",
  "Tax Rebate",
  "Cess",
  "Total Income Tax"
]

export { data_22_23, data_23_24 , Fnames,viewTable };
