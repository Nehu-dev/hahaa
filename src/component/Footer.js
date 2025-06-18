import React from "react";
function Footer(){
    return(
<div className="bg-[#2E3192] pb-[37px] mb-[15px]">
	<div className="flex items-start self-stretch mb-[50px] mx-[156px]">
		<div className="flex flex-1 flex-col items-start mr-3">
			<img
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/ppwz14ko_expires_30_days.png"} 
				className="w-[201px] h-[201px] object-fill"
			/>
			<span className="text-[#FFDD15] mb-11" >
				{"Our office Address\n2nd Floor Atal Block NMAMIT, Nitte, Karkala,\nUdupi - 574110"}
			</span>
			<span className="text-white text-xl font-bold mb-[49px]" >
				{"Call us For Support:  +917483276508"}
			</span>
			<img
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/nod336ym_expires_30_days.png"} 
				className="self-stretch h-[374px] object-fill"
			/>
		</div>
		<div className="flex flex-col shrink-0 items-start mt-[200px] mr-[289px] gap-[23px]">
			<span className="text-[#FFDD15] text-3xl font-bold" >
				{"Quick Links"}
			</span>
			<div className="flex flex-col items-start gap-4">
				<span className="text-white text-xl font-bold" >
					{"Home"}
				</span>
				<span className="text-white text-xl font-bold" >
					{"About Us"}
				</span>
				<span className="text-white text-xl font-bold" >
					{"Careers"}
				</span>
				<span className="text-white text-xl font-bold" >
					{"Products"}
				</span>
				<span className="text-white text-xl font-bold" >
					{"Contacts Us"}
				</span>
			</div>
		</div>
	</div>
</div>
    );
}
export default Footer;