import React from "react";
function Button(){
    return(
<div className="flex items-center relative pl-[119px]" 
	style={{
		background: "linear-gradient(180deg, #2E3192, #3186E7)"
	}}>
	<div className="flex flex-1 flex-col items-start mr-3">
		<span className="text-white text-6xl font-bold mb-[38px]" >
			{"Ready to Empower Your Classroom?"}
		</span>
		<span className="text-white text-[34px] font-bold mb-[81px] mx-[1px]" >
			{"Transform the way STEM, AI, and Robotics are taught. Contact us to bring PSL to your school today!"}
		</span>
		<button className="flex items-center bg-[#FFDD15] text-left py-[15px] px-[30px] ml-[293px] gap-[15px] rounded-[33px] border-0"
			onClick={()=>alert("Pressed!")}>
			<img
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/eas6n8cf_expires_30_days.png"} 
				className="w-12 h-12 rounded-[33px] object-fill"
			/>
			<span className="text-white text-xl font-bold" >
				{"Order Now"}
			</span>
		</button>
	</div>
	<div className="flex flex-col shrink-0 items-start relative">
		<img
			src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/w7daufw4_expires_30_days.png"} 
			className="w-[783px] h-[514px] object-fill"
		/>
		<img
			src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/th7mxsvv_expires_30_days.png"} 
			className="w-[22px] h-[98px] absolute top-[49px] left-[-14px] object-fill"
		/>
		<img
			src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/a4uiiwbh_expires_30_days.png"} 
			className="w-[47px] h-[99px] absolute bottom-[63px] left-[-23px] object-fill"
		/>
	</div>
	<img
		src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/godnfnq5_expires_30_days.png"} 
		className="w-[29px] h-[91px] absolute bottom-[154px] right-[777px] object-fill"
	/>
</div>
    );
}
export default Button;
