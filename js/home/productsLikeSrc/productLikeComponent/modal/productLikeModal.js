// Function to generate modal html dynamically
export function generateProductModalHTML(product) {
	return `
	  
         	<div
				id="product_modal"
				class="hidden fixed z-[998] w-full h-full top-0 left-0 right-0 bottom-0"
			>
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[998]"
				>
					<div
						class="bg-white relative my-0 mx-auto min-h-[500px] w-[810px] z-[998] text-base font-normal rounded-lg"
					>
						<div class="flex">
							<div
								id="t0902_leftS"
								class="basis-[230px] py-[10px] px-[10px] rounded-t-[5px] rounded-l-[5px] shrink-0"
							>
								<div id="t0902_leftsection">
									<div
										id="t0902_prodmedia"
										class="pb-[10px]"
									>
										<div id="t0902_productimage">
											<div
												id="t0902_prodimg"
												class="h-[210px] w-[210px] border border-solid border-[#eaeaea] rounded-[5px] relative before:contents-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:z-[1]"
											>
												<img
													src="${product.image.src}"
													alt="${product.image.alt}"
													class="max-h-full max-w-full absolute left-0 top-0 right-0 bottom-0 m-auto z-[999999]"
													id="t0902_zoomimage"
												/>
											</div>
										</div>
									</div>
									<!--------------------->
									<div
										id="t0902_proddetails"
										class="relative py-0 px-[5px]"
									>
										<div
											id="t0902_Prodname01"
											class="text-black text-base pt-[10px] pr-[15px] pb-[5px]"
										>
										  ${product.title}
										</div>
										<div
											id="t0902_ProdPrice0L"
											class="py-[5px] px-0 text-sm text-[#777] mt-[5px]"
										>
											<span
												id="t0902_price0L"
												class="eqpr text-[#111] text-base font-thin"
											>
											  ${product.price.amount}
											</span>
											<span id="t0902_unit0L">
											    ${product.price.quantity}
											</span>
										</div>
										<div
											id="t0902_soldBy0L"
											class="text-[13px] text-[#111] py-[5px] px-0"
										>
											<span
												id="t0902_sold0L"
												class="text-[#777]"
											>
												Sold By -
											</span>
											<span id="t0902_addr0L">${product.company}</span>
										</div>
									</div>
								</div>
							</div>
							<!-------------------------->
							<div id="t0902_leftR" class="pt-[25px] pr-[10px] pb-[15px] pl-[10px] shadow-product-box-shadow flex-1 min-h-[500px] rounded-r-[5px] rounded-b-[5px] relative block">
								<i
								  class="close_icon bg-close-icon bg-[rgba(0,0,0,0)] bg-no-repeat bg-[size:cover] outline-[rgba(102,102,102)] w-[18px] h-[18px] top-[10px] right-[10px] absolute cursor-pointer"  
								>
								</i>
								<!---------------------------------------->
								<div id="t0902_rightsection">
								  <div id="t0902_hdg" class="mt-[40px] pt-[10px] text-black text-xl">
									<span class="font-bold">Contact Seller</span>
									and get details on your mobile quickly
								  </div>
								  <div class="bemlsec mt-[25px] mb-[10px] bg-white">
									<div id="t0902_question" class="bg-white mt-[25px] mb-[10px]">
									  <form
										name="t0902_bl_form"
										onsubmit="return false"
										id="t0902_bl_form"
										class="relative"
										method="post"
									  >
										<div id="t0901screen1">
										  <div id="t0902_login" class="min-h-[75px]">
											<div id="t0901clslog" class="enqLogInp eqFrUs relative mb-[15px] z-[2]">
											  <label
												for="email"
												id="t0902_label-1"
												class="text-[#696969] text-left pb-[9px] mr-[1px] font-normal text-[15px] pointer-events-none block"
												>Email ID</label
											  >
											  <div id="t0902_dliso" class="w-[50px] absolute top-[31px] left-[9px] h-[34px] rounded-[3px] bg-[#eaeaea] before:content-[''] before:bg-message-icon before:left-[11px] before:top-[7px] before:h-[20px] before:w-[28px] before:absolute before:bg-no-repeat before:bg-[position:50%] before:transform translate-y-[25%]"></div>
											  <input
												id="t0902_login_field"
												name="login_field"
												type="email"
												class="w-full h-[50px] border border-solid border-[#eaeaea] rounded-[3px] pl-[70px] text-[15px] bg-white text-black outline-none"
												placeholder="Enter your email"
												maxlength="100"
												style
												request="0"
											  />
											  <div id="t0902mflag" class="flex items-center mt-[5px] text-[#698181] text-[12px]">
												<i class="w-[14px] h-[14px] mr-[5px] shrink-0 bg-no-repeat bg-globe-icon"></i>
												<div class="shrink-0">Your Country is</div>
												<div id="t0902country" class="relative pr-[15px] ml-[5px] font-bold underline cursor-pointer text-[#698181] text-xs">
												   Nigeria
												  <div
													id="t0902country_dropd"
													class="dropdown bebdr be-flg w-full absolute left-0 top-0 bg-transparent border-none z-[1] inline-block rounded-t-[2px] rounded-l-[2px] h-[34px]"
												  >
													<dt class="h-5">
													  <a class="w-full inline-block">
														<span class="my-1 mx-[3px] w-4 h-[11px] block bg-country-icon hidden"></span>
												          <i class="right-[-5px] absolute top-[3px] w-[11px] h-[11px] bg-no-repeat fill-[#698181] bg-caret-icon"></i>
														<!-- <div class="as_arrow"></div> -->
													  </a>
													</dt>
													<div class="hidden bg-white rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] w-[300px] py-[8px] px-0">
													  <input
														type="text"
														name="0901"
														placeholder="Search"
														id="t0902_flagInput"
														class="w-[282px] h-6 rounded-[3px] border border-solid border-[#000] text-sm py-0 px-[10px] my-0 mx-2"
													  />
													  <ul>
														<li>
														  <span
															style="
															  background-position: 0px -2310px;
															"
														  ></span>
														  <a>Afghanistan +93</a>
														</li>
														<li>
														  <span
															style="
															  background-position: 0px -528px;
															"
														  ></span>
														  <a>Algeria +213</a>
														</li>
													  </ul>
													</div>
												  </div>
												</div>
											  </div>
											</div>
										  </div>
										</div>
										<div class="mt-[10px] mb-[-5px]" id="t0902_contactinfo1">
										  <div class="mt-[15px] text-[13px]"></div>
										  <div id="t0902_idcontactscreen1" class="eqfcsed">
											<div class="mb-[15px] relative">
											  <label
												for="Name"
												id="t0902_name-lb1"
												class="transform -translate-y-[12px] translate-x-[5px] text-[#2e3192] bg-white pointer-events-none  duration-100 text-xs absolute z-[1] py-[5px] px-[10px] block origin-[left_top]"
												>Name</label
											  >
											  <input
												id="t0902_q_first_nm1"
												type="text"
												name="q_first_nm"
												class="be-slbox inpt_errobx inPlace h-[42px] rounded-[3px] border border-solid border-[#d0cdcd] pl-[15px] w-full text-[15px] outline-none"
											  />
											</div>
										  </div>
										</div>
									  </form>
									</div>
									<div id="t0901submit_wrapper">
									  <div id="t0902_fBtn" class="relative">
										<div class="text-center" id="t0901_submitdiv">
										  <input
											value="Submit"
											class="bg-[#00a699] mt-[10px] w-[200px] h-[45px] rounded-[3px] border-[2px] border-solid border-[#029f93] text-base text-white cursor-pointer" 
											id="t0902_submit"
											type="submit"
										  />
										  <div id="t0902_gwrap">
											<p
											 class="text-sm font-semibold text-center mt-[10px]"
											>
											  OR
											</p>
											<div
											  id="t0902_gSignInWrapper"
											   class="mt-[10px] mb-[15px] text-center"
											>
											  <div id="t0902signinBtnFr" class="inline-block bg-[#4685f5] text-white w-auto border border-solid border-[#4685f5] shadow-[1px_1px_1px_rgb(128,128,128)] whitespace-nowrap cursor-pointer">
												<span class="inline-block align-middle bg-[size:22px_22px] w-[42px] h-[42px] bg-google-icon bg-white bg-[position:50%_50%] bg-no-repeat"></span>
												<span class="inline-block pl-[18px] pr-[18px] text-base font-bold align-middle"
												  >Login with Google</span
												>
											  </div>
											</div>
										  </div>
										</div>
									  </div>
									</div>
								  </div>
								</div>
							  </div>
						</div>
					</div>
				</div>
			</div>
	`;
}
