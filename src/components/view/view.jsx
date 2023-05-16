import React,{useEffect,useContext,useState} from 'react'
import { DataContext } from '../../contexts/dataContext';
import { viewTable,data_22_23,data_23_24 } from '../../assets/data';

const View = ({ setnum }) => {
  const [sd, setsd] = useState(0);
  const [sdn, setsdn] = useState(0);
  const [rebate, setrebate] = useState(0);
  const [rebaten, setrebaten] = useState(0);
  const [oldtax, setoldtax] = useState(0);
  const [newtax, setnewtax] = useState(0);
  const [cess, setcess] = useState(0);
  const [cessn, setcessn] = useState(0);
  const [tit, settit] = useState(0);
  const [titn, settitn] = useState(0);

    const dataContext = useContext(DataContext);
    // useEffect(() => {
    //     console.log(dataContext.Data)
    // }, [dataContext])
  
  const function1 = () => {
      let ac = document.querySelector(".form");
      if (ac) { 
          ac.classList.add("actionl");
          setTimeout(() => {
              setnum("2");
            }, 400);
        }
  };

  const calculateTax = () => {
    if (dataContext.Data["option"] === "1") {
      let result = 0;
      let ti = parseFloat(dataContext.Data["TotalTaxableIncome"])
      let TI = ti;
      let slabs = data_23_24.old;
      setsd(data_23_24.old_sd);
      
      
      ti -= (data_23_24.old_sd);

      for (let i in slabs){
        if ((slabs[i].start) <= TI) {
          // console.log("DIFF",(slabs[i].end)-(slabs[i].start)+1)
          if ((((slabs[i].end)-(slabs[i].start)+1)) <= ti){
            result += (((slabs[i].end) - (slabs[i].start) + 1) * (slabs[i].percent)) / 100;
            // console.log("R",result);
            // console.log("TI",ti);
          } else {
            result += ((ti) * (slabs[i].percent)) / 100;
            // console.log("R",result);
            // console.log("TI",ti);
          }
          ti -= ((slabs[i].end) - (slabs[i].start) + 1);
        }
        else {
          break;
        }
      }
      setoldtax(result);
      let c = result ;
      if (TI <= data_23_24.old_rebate_limit) {
        setrebate(data_23_24.old_rebate);
        c -= data_23_24.old_rebate;
        if (c <= 0)
          c = 0;
      }
      setcess(c * 4 / 100)
      settit(c+(c * 4 / 100))

      ti = parseFloat(dataContext.Data["TotalIncome"]);
      TI = ti;
      slabs = data_23_24.new;
      result = 0;
      setsdn(data_23_24.new_sd)   
      ti -= (data_23_24.new_sd);

      for (let i in slabs){
        if ((slabs[i].start) <= TI) {
          // console.log("DIFF",(slabs[i].end)-(slabs[i].start)+1)
          if ((((slabs[i].end)-(slabs[i].start)+1)) <= ti){
            result += (((slabs[i].end) - (slabs[i].start) + 1) * (slabs[i].percent)) / 100;
            // console.log("R",result);
            // console.log("TI",ti);
          } else {
            result += ((ti) * (slabs[i].percent)) / 100;
            // console.log("R",result);
            // console.log("TI",ti);
          }
          ti -= ((slabs[i].end) - (slabs[i].start) + 1);
        }
        else {
          break;
        }
      }
      setnewtax(result);
      c = result;
      // console.log("TI: ",TI," NRL: ",data_23_24.new_rebate_limit)
      if (TI <= data_23_24.new_rebate_limit) {
        setrebaten(data_23_24.new_rebate);
        c -= data_23_24.new_rebate;
        // console.log(c)
        if (c <= 0)
          c = 0;
      }
      setcessn(c * 4 / 100)
      settitn(c + (c * 4 / 100));
      

    }
    else {
      let result = 0;
      let ti = parseFloat(dataContext.Data["TotalTaxableIncome"])
      let TI = ti;
      let slabs = data_22_23.old;
      setsd(data_22_23.old_sd);
      
      
      ti -= (data_22_23.old_sd);

      for (let i in slabs){
        if ((slabs[i].start) <= TI) {
          // console.log("DIFF",(slabs[i].end)-(slabs[i].start)+1)
          if ((((slabs[i].end)-(slabs[i].start)+1)) <= ti){
            result += (((slabs[i].end) - (slabs[i].start) + 1) * (slabs[i].percent)) / 100;
            // console.log("R",result);
            // console.log("TI",ti);
          } else {
            result += ((ti) * (slabs[i].percent)) / 100;
            // console.log("R",result);
            // console.log("TI",ti);
          }
          ti -= ((slabs[i].end) - (slabs[i].start) + 1);
        }
        else {
          break;
        }
      }
      setoldtax(result);
      let c = result ;
      if (TI <= data_22_23.old_rebate_limit) {
        setrebate(data_22_23.old_rebate);
        c -= data_22_23.old_rebate;
        if (c <= 0)
          c = 0;
      }
      setcess(c * 4 / 100)
      settit(c+(c * 4 / 100))

      ti = parseFloat(dataContext.Data["TotalIncome"]);
      TI = ti;
      slabs = data_22_23.new;
      result = 0;

      for (let i in slabs){
        if ((slabs[i].start) <= TI) {
          // console.log("DIFF",(slabs[i].end)-(slabs[i].start)+1)
          if ((((slabs[i].end)-(slabs[i].start)+1)) <= ti){
            result += (((slabs[i].end) - (slabs[i].start) + 1) * (slabs[i].percent)) / 100;
            // console.log("R",result);
            // console.log("TI",ti);
          } else {
            result += ((ti) * (slabs[i].percent)) / 100;
            // console.log("R",result);
            // console.log("TI",ti);
          }
          ti -= ((slabs[i].end) - (slabs[i].start) + 1);
        }
        else {
          break;
        }
      }
      setnewtax(result);
      c = result;
      if (TI <= data_22_23.new_rebate_limit) {
        setrebate(data_22_23.new_rebate);
        c -= data_22_23.new_rebate;
        if (c <= 0)
          c = 0;
      }
      setcessn(c * 4 / 100)
      settitn(c + (c * 4 / 100));
      
    }
  }
  
  useEffect(() => {
    calculateTax();
  }, )
  



  return (
    <div className='mb-20'>
      <div className="text-lg md:text-2xl p-3 font-bold">
      {dataContext.Data["optionName"]}
      </div>
      <div className='form md:px-5'>
        <div className="flex p-2 font-semibold border">
          <div className="col-4">Options</div>
          <div className="col-4">Old</div>
          <div className="col-4">New</div>
        </div>
        <div className="flex">

        <div className=" col-4">
          {viewTable.map((opt) => (
            <div key={opt.id} className='border p-2 h-20 font-semibold'>
              {opt}
            </div>
          ))}
        </div>
        <div className="col-4">
          <div className='border p-4 h-20'>{ dataContext.Data["TotalIncome"]}</div>
          <div className='border p-4 h-20'>{ dataContext.Data["TotalDeductions"]}</div>
          <div className='border p-4 h-20'>{ sd }</div>
          <div className='border p-4 h-20'>{ dataContext.Data["TotalTaxableIncome"]-sd}</div>
          <div className='border p-4 h-20'>{ oldtax }</div>
          <div className='border p-4 h-20'>{ rebate }</div>
          <div className='border p-4 h-20'>{ cess }</div>
            <div className={(tit<=titn)?'border p-4 h-20 bg-green-400':'border p-4 h-20 bg-red-400'}>{ tit }</div>
        </div>
        <div className="col-4">
          <div className='border p-4 h-20'>{ dataContext.Data["TotalIncome"]}</div>
          <div className='border p-4 h-20'>{ 0 }</div>
          <div className='border p-4 h-20'>{ sdn }</div>
          <div className='border p-4 h-20'>{ dataContext.Data["TotalIncome"]-sdn}</div>
          <div className='border p-4 h-20'>{ newtax }</div>
          <div className='border p-4 h-20'>{ rebaten }</div>
          <div className='border p-4 h-20'>{ cessn }</div>
          <div className={(tit>=titn)?'border p-4 h-20 bg-green-400':'border p-4 h-20 bg-red-400'}>{ titn }</div>
        </div>

          </div>
      </div>

      <div className="result max-w-fit mx-auto text-md p-3 text-cyan-950 font-medium my-10">
        {(tit === titn) && <>
          <div className='bg-blue-300 p-3 rounded-lg'>
        You can choose any Tax Regime! Try a new one this time :)
          </div>
        </>}
        {(tit < titn) && <>
          <div className='bg-blue-300 p-3 rounded-lg mb-2'>
          Save {titn-tit } by choosing the Old Tax Regime.
          </div>
          <div className='bg-blue-400 p-3 rounded-lg'>
            The old tax regime will be good for you as you have deductions of {dataContext.Data["TotalDeductions"]} in tax saving schemes.</div>
        </>}
        {(tit > titn) && <>
          <div className='bg-blue-300 p-3 rounded-lg mb-2'>
          Save {tit - titn} by choosing the New Tax Regime.
          </div>
          <div className='bg-blue-400 p-3 rounded-lg'>
          You have less deductions, So the new regime will be better for you.
          </div>
        </>}
      </div>

      <button
        onClick={function1}
          type='button'
          className='show fixed left-5 bottom-5 form-button text-blue-800 font-bold btn btn-outline-primary rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
        </button>
      <button
        onClick={() => {
          window.print();
        }}
          type='button'
          className='show fixed right-5 bottom-5 form-button text-blue-800 font-bold btn btn-outline-primary rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
</svg>
        </button>
    </div>
  )
}

export default View