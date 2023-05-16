import React, { useContext} from "react";
import { DataContext } from "../contexts/dataContext";

const Option = ({ setnum }) => {


    const function1 = (e) => {
        e.preventDefault();
      let ac = document.querySelector(".form");
      if (ac) {
          
          ac.classList.add("action");
          setTimeout(() => {
              setnum("3");
            }, 400);
        }
        };

  const function2 = () => {
      let ac = document.querySelector(".form");
      if (ac) {
          
          ac.classList.add("actionl");
          setTimeout(() => {
              setnum("1");
            }, 400);
        }
        };
    
    const dataContext = useContext(DataContext);
    // useEffect(() => {
    //     console.log(dataContext.Data)
    // }, [dataContext])

    const changeHandle = (e) => {
        dataContext.updateData("option",e.target.value)
        if(e.target.value==="1")
            dataContext.updateData("optionName", "FY 2023-2024")
        else
            dataContext.updateData("optionName", "FY 2022-2023")
    }

  return (
    <div className='form option'>
      <form className='m-5 p-5' onSubmit={function1}>
        <div
          className='btn-group flex flex-col md:flex-row justify-around'
          role='group'
                  aria-label='Basic radio toggle button group'
                  onChange={(e) => changeHandle(e)}
                  value={dataContext.Data["option"]}
              >
          <input
            type='radio'
            className='btn-check'
            name='btnradio'
            value='1'
            id='btnradio1'
                      autoComplete='off'
                      checked={dataContext.Data["option"] === "1"}
                      required="required"
          />
          <label className='btn btn-outline-primary' htmlFor='btnradio1'>
            FY 2023-2024 Latest Budget (Return to be filed between 1st April
            2024 - 31st March 2025)
          </label>

          <input
            type='radio'
            className='btn-check'
            name='btnradio'
            value='2'
            id='btnradio2'
                      autoComplete='off'
                      checked={dataContext.Data["option"]==="2"}     
          />
          <label className='btn btn-outline-primary' htmlFor='btnradio2'>
            FY 2022-2023 (Return to be filed between 1st April 2023 - 31st March
            2024)
                  </label>
        </div>
                {/* {dataContext && (<h1>{ dataContext.Data["option"]}</h1>) } */}

        <button
          onClick={function2}
          type='button'
          className='show fixed left-5 bottom-5 form-button-opt text-blue-800 font-bold btn btn-outline-primary rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
              </button>
              
                      <button
          type='submit'
          className='show fixed right-5 bottom-5 form-button-opt text-blue-800 font-bold btn btn-outline-primary rounded-full'>
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

      </form>
    </div>
  );
};

export default Option;
