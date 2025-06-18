import React from "react";

function Shiksha(){
    return(
	<div className="flex flex-col items-start self-stretch relative mb-[4rem] mx-[5rem]">
					<div className="flex flex-col items-start self-stretch bg-[#F4FCFF] pt-[99px] pb-[209px] rounded-[28px]" 
						style={{
							boxShadow: "0px 4px 4px #00000040",
							height: "650px",
						}}>
						<span className="text-[#DF4444] text-[50px] font-bold mb-[41px] ml-[478px] mt-[-34px]" >
							{"WHAT IS SHIKSHA ?"}
						</span>
						<span className="text-[#2E3192] text-3xl font-bold ml-[392px] mr-[286px]" >
							{"Shiksha is an advanced educational robot transforming classrooms into engaging spaces using cutting-edge technology. It emphasizes interactive and playful learning, aiming to ignite children's enjoyment and extend education beyond traditional methods, fostering a dynamic and captivating approach to learning."}
						</span>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/auh4o665_expires_30_days.png"} 
						className="w-[460px] h-[460px] absolute bottom-[76px] left-[-42px] object-fill"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/zx7kz2jb_expires_30_days.png"} 
						className="w-[460px] h-[460px] absolute bottom-[76px] right-[-66px] object-fill"
					/>
	</div>

    );
}
export default Shiksha;