import React, { useState, useEffect, useContext } from "react";
import { Fnames } from "../../assets/data.js";
import { DataContext } from "../../contexts/dataContext.js";





const FormRender = ({names,income,totalDeductions,totalIncome,updateData,deductions}) => {
    const [title, settitle] = useState(false);

  return (

            <React.Fragment key={names.title}>
              <div className='main-head text-3xl text-left font-semibold my-2'>
                {names.title}
              </div>
              <div className='row my-2'>
                {names.data &&
                  names.data.map((name,index) => (
                  <FormBoxRender title={title} settitle={settitle} index={index} name={name} names={names} income={income} updateData={updateData} deductions={deductions} />
                  ))}
                <div className='result-income font-medium text-right my-3'>
                  Total {names.title} :
                  {names.title === "Income" ? (
                    <span className='ml-2'>{totalIncome}</span>
                  ) : (
                    <span className='ml-2'>{totalDeductions}</span>
                  )}
                </div>
              </div>
            </React.Fragment>

  );
}

const FormBoxRender = ({title,settitle,index, names, name, income, updateData, deductions }) => {
  

  const showToolTip = (e) => {
    e.preventDefault();
    settitle(index);
  }

  return (
    <div
      key={name.name}
      className='form-group col-md-4 text-start'>
      <label htmlFor='input'>
        {name.name}
        <img
          title={name.tooltip}
          className='ml-2 d-inline info-icon'
          src='https://assets1.cleartax-cdn.com/ct-frontend/images/elev_icon.svg'
          alt="info"
          onClick={(e)=>showToolTip(e)}
        />
        {(index===title) && (<div class="title" onClick={()=>settitle(false)}>{name.tooltip}</div>)}
      </label>
      {names.title === "Income" ? (
        <input
          onWheelCapture={(e) => {
            e.target.blur();
          }}
          name={name.name}
          value={income[name.name]}
          onChange={(e) => updateData(e, names.title)}
          type='number'
          className='form-control'
          id='input'
        />
      ) : (
        <input
          onWheelCapture={(e) => {
            e.target.blur();
          }}
          name={name.name}
          value={deductions[name.name]}
          onChange={(e) => updateData(e, names.title)}
          type='number'
          className='form-control'
          id='input'
        />
      )}
    </div>
  );
}




const Form = ({ setnum }) => {
  const dataContext = useContext(DataContext);
  const [income, setincome] = useState(
    dataContext.Data["Income"] ? dataContext.Data["Income"] : {}
  );
  const [totalIncome, settotalIncome] = useState(0);
  const [deductions, setdeductions] = useState(
    dataContext.Data["Deductions"] ? dataContext.Data["Deductions"] : {}
  );
  const [totalDeductions, settotalDeductions] = useState(0);
  const [totaltaxableincome, settotaltaxableincome] = useState(
    dataContext.Data["TotalTaxableIncome"]
      ? dataContext.Data["TotalTaxableIncome"]
      : 0
  );

  let myID = document.getElementsByClassName("form-button");
  var myScrollFunc = function () {
    if (myID.length !== 0) {
      var y = window.scrollY;
      if (y >= 100 || window.screen.width >= 1500) {
        myID[0].classList.add("show");
        myID[0].classList.remove("hide");
      } else {
        myID[0].classList.add("hide");
        myID[0].classList.remove("show");
      }
    }
  };

  useEffect(() => {
    //     let inp = document.getElementById("input")
    // inp.addEventListener("mousewheel", function(evt){ evt.preventDefault(); })

    if (window.screen.width >= 1500) {
      let myID = document.getElementsByClassName("form-button");
      myID[0].classList.add("show");
      myID[0].classList.remove("hide");
    }
    window.addEventListener("scroll", myScrollFunc);
    if (dataContext.Data["Income"]) setincome(dataContext.Data["Income"]);
    if (dataContext.Data["Deductions"])
      setdeductions(dataContext.Data["Deductions"]);
  }, []);

  useEffect(() => {
    calculateData(income, settotalIncome);
    calculateData(deductions, settotalDeductions);
    dataContext.updateData("Income", income);
    dataContext.updateData("TotalIncome", totalIncome);
    dataContext.updateData("Deductions", deductions);
    dataContext.updateData("TotalDeductions", totalDeductions);
    dataContext.updateData("TotalTaxableIncome", totalIncome - totalDeductions);
    settotaltaxableincome(totalIncome - totalDeductions);
    // console.log(deductions)
  }, [income, totalIncome, deductions, totalDeductions]);

  const calculateData = (val, fun) => {
    let sum = 0;
    const values = Object.keys(val);
    if (values) {
      values.forEach((field) => {
        if (val[field]) sum += parseFloat(val[field]);
      });
      fun(sum);
    } else {
      fun(0);
    }
  };

  const updateData = (e, name) => {
    if (name === "Income") {
      setincome((inc) => ({
        ...inc,
        [e.target.name]: e.target.value,
      }));
    } else if (name === "Deductions") {
      if (
        e.target.name === "Basic Deductions - 80C"
      ) {
        if (!deductions[e.target.name] || e.target.value <= 150000) {
          console.log(e.target.value);
          setdeductions((inc) => ({
            ...inc,
            [e.target.name]: e.target.value,
          }));
        }
      }
      else if (e.target.name === "Interest on Housing Loan - 80EEA") {
        if (!deductions[e.target.name] || e.target.value <= 200000) {
          console.log(e.target.value);
          setdeductions((inc) => ({
            ...inc,
            [e.target.name]: e.target.value,
          }));
        }
      }
      else {
        setdeductions((inc) => ({
          ...inc,
          [e.target.name]: e.target.value,
        }));
      }
    }
  };

  const function1 = (e) => {
    e.preventDefault();
    let ac = document.querySelector(".form");
    myID[0].classList.add("show");
    myID[0].classList.remove("hide");
    ac.classList.add("action");
    setTimeout(() => {
      setnum("2");
    }, 400);
  };


  // useEffect(() => {
  //   console.log(dataContext.Data);
  // }, [dataContext]);

  return (
    <div className='form bg-blue-200 md:text-xl'>
      <form className='container p-5' onSubmit={function1}>
        {Fnames &&
          Fnames.map((names) => (
<FormRender names={names} income={income} totalDeductions={totalDeductions} totalIncome={totalIncome} updateData={updateData} deductions={{deductions}} />
          ))}
        <div className='mb-5 sm:mb-1 main-head text-2xl text-left font-semibold my-2'>
          Total Taxable Income : {totaltaxableincome}
        </div>
        <div className='text-right'>
          <button
            type='submit'
            className='hide sm:show fixed right-5 bottom-5 form-button text-blue-800 font-bold btn btn-outline-primary rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='40'
              fill='currentColor'
              className='bi bi-arrow-right'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};



export default Form;
