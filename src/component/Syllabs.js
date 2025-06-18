import React from "react";
function Syllabs(){
    return(
<div className="flex flex-col items-start relative pt-[4rem] pb-[2.25rem] px-[24rem] mb-[2rem] mx-[5rem] rounded-[2rem]" 
	style={{
		background: "linear-gradient(180deg, #0066B2, #002B4C)"
	}}>
		<span className="text-[#F7FAFF] text-[50px] font-bold absolute top-[2rem] left-[21.75rem]" >
	       {"SYLLABUS AND LEARNING"}
        </span>
	<div className="flex flex-col items-start self-stretch relative">
		<img
			src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/a83zr8d6_expires_30_days.png"} 
			className="self-stretch h-[35rem] w-[35rem] object-fill"
		/>
		<div className="flex flex-col w-[26rem] h-[4rem] absolute top-[4rem] left-[-21rem] rounded-tl-[1rem] rounded-bl-[1rem]  border-solid border-[#00000000]" 
			style={{
				background: "linear-gradient(180deg, #0066B2, #668DA9)"
			}}>
			<span className="text-white text-3xl font-bold text-center mt-[1rem] mb-[1rem] mx-[2rem]" >
				{"Everyday conversations"}
			</span>
		</div>
		<div className="flex flex-col w-[26rem] h-[4rem] absolute top-[4rem] right-[-22rem] rounded-tr-[1rem] rounded-br-[1rem] border-solid border-[#00000000]" 
			style={{
				background: "linear-gradient(180deg, #668DA9, #0066B2)"
			}}>
			<span className="text-white text-3xl font-bold text-center mt-[0.5rem] mx-[2rem]" >
				{"Role-playing Dialogues"}
			</span>
		</div>
		<div className="flex flex-col w-[26rem] h-[4rem] absolute top-[12rem] right-[-22rem] rounded-tr-[1rem] rounded-br-[1rem] border-solid border-[#00000000]" 
			style={{
				background: "linear-gradient(180deg, #668DA9, #0066B2)"
			}}>
			<span className="text-white text-3xl font-bold text-center mt-[0.5rem] mb-[-1rem] ml-[3rem] mr-[4rem]" >
				{"Pronunciation Skills"}
			</span>
		</div>
		<div className="flex flex-col items-start w-[26rem] h-[4rem] absolute top-[12rem] left-[-22rem] rounded-tl-[1rem] rounded-bl-[1rem] border-solid border-[#00000000]" 
			style={{
				background: "linear-gradient(180deg, #0066B2, #668DA9)"
			}}>
			<span className="text-white text-3xl font-bold mt-[21px] mb-4 ml-[108px]" >
				{"Basic  greetings"}
			</span>
        </div>
		<div className="flex flex-col items-start w-[450px] absolute top-[311px] left-[-336px] rounded-tl-[10px] rounded-bl-[10px] border-[7px] border-solid border-[#00000000]" 
	       style={{
		background: "linear-gradient(180deg, #0066B2, #668DA9)"
        	}}>
	    <span className="text-white text-3xl font-bold mt-[21px] mb-4 ml-[59px]" >
		{"Introducing  oneself"}
    	</span>
        </div>
	    <div className="flex flex-col w-[450px] absolute top-[311px] right-[-360px] rounded-tr-[10px] rounded-br-[10px] border-[7px] border-solid border-[#00000000]" 
	      style={{
		  background: "linear-gradient(180deg, #668DA9, #0066B2)"
	       }}>
	       <span className="text-white text-3xl font-bold text-center mt-[23px] mb-3.5 mx-[74px]" >
		    {"Forming Sentences"}
	       </span>
        </div>
        <div className="flex flex-col w-[450px] absolute bottom-[205px] left-[-339px] rounded-tl-[10px] rounded-bl-[10px] border-[7px] border-solid border-[#00000000]" 
     	style={{
		background: "linear-gradient(180deg, #0066B2, #668DA9)"
	     }}>
	    <span className="text-white text-3xl font-bold text-center mt-[22px] mb-4 mx-[60px]" >
		{"Common Vocabulary"}
	      </span>
        </div>
        <div className="flex flex-col w-[450px] absolute bottom-[205px] right-[-360px] rounded-tr-[10px] rounded-br-[10px] border-[7px] border-solid border-[#00000000]" 
	        style={{
		        background: "linear-gradient(180deg, #668DA9, #0066B2)"
	          }}>
	       <span className="text-white text-3xl font-bold text-center mt-5 mb-[17px] mx-[86px]" >
		     {"Asking Questions"}
	       </span>
        </div>
        <div className="flex flex-col w-[450px] absolute bottom-[84px] left-[-336px] rounded-tl-[10px] rounded-bl-[10px] border-[7px] border-solid border-[#00000000]" 
	         style={{
		     background: "linear-gradient(180deg, #0066B2, #668DA9)"
	        }}>
	        <span className="text-white text-3xl font-bold text-center mt-[23px] mb-3.5 mx-6" >
		      {"Listening comprehension"}
	         </span>
        </div>
        <div className="flex flex-col w-[450px] absolute bottom-[84px] right-[-360px] rounded-tr-[10px] rounded-br-[10px] border-[7px] border-solid border-[#00000000]" 
	         style={{
		      background: "linear-gradient(180deg, #668DA9, #0066B2)"
	        }}>
	        <span className="text-white text-3xl font-bold text-center mt-5 mb-[17px] mx-3" >
		    {"Describing People & Places"}
	       </span>
        </div>
    </div>
</div>

    );
}
export default Syllabs;