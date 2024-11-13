import { CommonType } from "@/Types/Type"

export default function Common(props:CommonType){
    return (
        <>
         <div className={`${props.firstDiv}`}>
        <div className={`${props.secondDiv}`}>
          <div className={`${props.thirdDiv}`}>
            <h2 className={`${props.classNameh2}`}>
              {props.headingTitle}
            </h2>
            <p className={`${props.classNamepara}`}>
              {props.paraTitle}
            </p>
            <br />
            <button className={`${props.classNamebutton}`}>
              {props.buttonTitle} <span> <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-8 text-[#ffffff] inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg></span>
            </button>
          </div>
        </div>
        <div className={`${props.classNamebox}`}></div>
      </div>
        </>
    )
}