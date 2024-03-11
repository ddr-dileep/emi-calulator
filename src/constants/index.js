export const EMI = [
  {
    title: "Loan EMI",
    name: "monthlyEMI",
  },
  {
    title: "Total Interest Payable",
    name: "totalInterest",
  },
  {
    title: "Total Payment (Principal + Interest)",
    name: "totalPayment",
  },
];

export const PeiChartoptions = {
  title: {
    text: "Break-up of Total Payment",
  },
  chart: {
    type: "pie",
  },
  dataLabels: {
    enabled: true,
    format: "{point.name}: {point.y:.2f}%",
  },
  legend: {
    enabled: true,
  },
  series: [
    {
      colorByPoint: true,
      data: [
        {
          name: "Total interest",
          y: 61.41,
          color: "#ED8C2B",
        },
        {
          name: "Total amount",
          y: 7.05,
          color: "#88A825",
        },
      ],
    },
  ],
};

export const initialFormValue = {
  loanAmount: 1,
  interestRate: 5,
  loanTenure: 1,
};

export const LOAN_FORM_FIELD = [
  {
    title: "Home Loan Amount (in lakhs)",
    name: "loanAmount",
    type: "number",
    placeholder: "Enter amount",
    id: "Home Loan Amount (in lakhs)",
    iconSymbol: "₹",
    marks: [
      { value: 0, label: "0L" },
      { value: 25, label: "25L" },
      { value: 50, label: "50L" },
      { value: 75, label: "75L" },
      { value: 100, label: "100L" },
    ],
  },
  {
    title: "Interest Rate",
    name: "interestRate",
    type: "number",
    placeholder: "Enter rate",
    id: "Interest Rate",
    iconSymbol: "%",
    marks: [
      { value: 5, label: "5%" },
      { value: 7.5, label: "7.5%" },
      { value: 10, label: "10%" },
      { value: 12.5, label: "12.5%" },
      { value: 15, label: "15%" },
    ],
  },
  {
    title: "Loan Tenure",
    name: "loanTenure",
    type: "number",
    placeholder: "Enter tenure",
    id: "Loan Tenure",
    iconSymbol: "Yr",
    marks: [
      { value: 1, label: "1Y" },
      { value: 5, label: "5Y" },
      { value: 10, label: "10Y" },
      { value: 15, label: "15Y" },
      { value: 20, label: "20Y" },
      { value: 25, label: "25Y" },
      { value: 30, label: "30Y" },
    ],
  },
];
