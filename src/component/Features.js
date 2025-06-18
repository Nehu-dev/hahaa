import React from "react";
function Feature(){
    return(
<div className="flex flex-col items-start self-stretch relative mb-[4rem]  mx-[5rem]">
					<div className="flex flex-col items-start self-stretch bg-white pt-[99px] pb-[209px] rounded-[28px]" 
						style={{
							boxShadow: "0px 4px 4px #00000040",
							height: "650px",
						}}>
                         <span className="text-[#DF4444] text-[50px] font-bold mb-[29rem] ml-[26rem] mt-[-4rem]" >
	                           {"FEATURES OF SHIKSHA"}
                        </span>
                        <div className="row-view">
	                        <img
		                       src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/rvuwqfen_expires_30_days.png"} 
		                        className="w-[30rem] h-[30rem] absolute bottom-[5rem] left-[2rem] object-fill"
	                         />
	                        <img
		                       src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/dj7tfwyq_expires_30_days.png"} 
		                          className="w-[30rem] h-[30rem] absolute bottom-[5rem] right-[1rem] object-fill"
	                        />
                        </div>
                        <span className="ml-[66rem]" >
	                      {"Click here !"}
                        </span>
                        <span className="mt-[-2rem] ml-[15rem]" >
	                       {"Click here !"}
                        </span>
                    </div>
</div>
    );
}
export default Feature;