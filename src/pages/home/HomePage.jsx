import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import "./homepage.scss";
import Form from "../../components/Form/Form";
import { EMI, LOAN_FORM_FIELD, PeiChartoptions, initialFormValue } from "../../constants";
import PieChart from "../../components/charts/PieChart";
import Table from "../../components/table/Table";

const HomePage = () => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [tableData, setTableData] = useState([]);
  const [pieData, setPieData] = useState(PeiChartoptions);
  const [shortDetails, setShortDetails] = useState({});

  useEffect(() => {
    const totalPrincipal = parseFloat(formValue.loanAmount) * 100000;
    const totalMonths = parseFloat(formValue.loanTenure) * 12;
    const monthlyInterestRate = parseFloat(formValue.interestRate) / (12 * 100);

    const monthlyEmiWithInterestRate =
      (totalPrincipal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    const totalInterestPaid =
      monthlyEmiWithInterestRate * totalMonths - totalPrincipal;
    const totalPayment = totalPrincipal + totalInterestPaid;
    const interestPercentage = (totalInterestPaid / totalPayment) * 100;
    const principalPercentage = (totalPrincipal / totalPayment) * 100;

    // calculating the short details of loan
    setShortDetails({
      ...shortDetails,
      monthlyEMI: Math.ceil(monthlyEmiWithInterestRate),
      totalInterest: Math.ceil(totalInterestPaid),
      totalPayment: Math.ceil(totalPayment),
    });

    const updatedPieData = {
      ...pieData,
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: `Total interest (${Math.round(interestPercentage)}%)`,
              y: Math.ceil(totalInterestPaid),
              color: "#ED8C2B",
            },
            {
              name: `Total principal (${Math.round(principalPercentage)}%)`,
              y: Math.ceil(totalPrincipal),
              color: "#88A825",
            },
          ],
        },
      ],
    };

    setPieData(updatedPieData);

    // Calculate table data
    let balance = totalPrincipal;
    let year = new Date().getFullYear();
    const newData = [];
    let yearEndBalance = balance;
    for (let month = 0; month <= totalMonths; month++) {
      const interest = balance * monthlyInterestRate;
      const principal = monthlyEmiWithInterestRate - interest;
      if (balance < principal) {
        balance = 0;
      } else {
        balance -= principal;
      }

      if (month % 12 === 0 || month === totalMonths) {
        newData.push({
          year,
          principal: principal.toFixed(2),
          interest: interest.toFixed(2),
          totalPayment: monthlyEmiWithInterestRate.toFixed(2),
          balance: month === totalMonths ? 0 : balance.toFixed(2),
        });
        yearEndBalance = balance;
        year++;
      }
    }

    setTableData(newData);
  }, [formValue]);

  return (
    <div className="home_page">
      <Heading title="EMI calculator" />
      <div className="home_page-container">
        <div>
          <Heading title="Home Loan" className="middle-heading" />
          <Form
            formFields={LOAN_FORM_FIELD}
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <div className="home_page-emi">
            <div className="home_page-emi-left">
              {EMI.map((item) => {
                return (
                  <div key={item.title} className="home_page-emi-left-box">
                    <Heading
                      className="home_page-emi-left-box-heading"
                      title={item.title}
                    />
                    <span>₹{shortDetails[item.name] || 0}</span>
                  </div>
                );
              })}
            </div>
            <div className="home_page-emi-right">
              <PieChart options={pieData} />
            </div>
          </div>
          <div className="home_page-table">
            <Heading
              title="Yearly/Monthly EMI"
              className="home_page-table-heading"
            />
            <Table tableData={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
