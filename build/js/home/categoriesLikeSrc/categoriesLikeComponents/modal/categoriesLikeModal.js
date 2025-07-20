// function to generate the modal html dynamically
export function generateCategoriesModalHTML(category) {
	return `
	
<div
   id="category_modal"
    class="hidden fixed z-[998] w-full h-full top-0 left-0 right-0 bottom-0">
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-[998]">
    <div id="t0901_mcont" class="bg-white w-[984px] min-h-[500px] my-0 mx-auto relative rounded-lg">
      <div class="idsf eqfcsed flex">
        <div id="t0901_leftS" class="basis-[250px] min-h-[500px] bg-[#4458a7] text-white relative shrink-0 px-[10px] py-[10px]">
          <div id="t0901_leftsection">
            <div id="t0901_promedia" class="pb-[10px]">
              <div id="t0901_productimage">
                <div id="t0901_prodimg" class="h-[250px] relative">
                  <img
                    src="${category.image.src}"
                    alt="${category.image.alt}"
                    class="block absolute bg-no-repeat w-full h-full top-0 left-0 right-0 bottom-0 bg-[size:50%_50%]"
                  />
                </div>
              </div>
            </div>
            <div id="t0901_helpQuest" class="be-help my-0 mx-auto pt-[15px] text-[14px]">
              <div class="beclrW txt-cnt befs20 bemgb15 text-center text-xl mb-[15px]">How it Works</div>
              <div class="bepr belh18 relative">
                <div class="be-hlpd h120 h-[170px] w-[2px] border-l-[2px] border-dotted border-l-[#fff] absolute left-[10px] top-0"></div>
                <div class="behlp1 bevT bemgb15 mb-[15px] table align-top">
                  <div class="bedtc table-cell">
                    <i class="bedotW w-[21px] h-[21px] bg-white rounded-[50%] mr-[8px] inline-block"></i>
                  </div>
                  <div class="bedtc bevT table-cell align-top">
                    Tell us what you need by filling the form
                  </div>
                </div>
                <div class="behlp1 bevT bemgb15 table align-top mb-[15px]">
                  <div class="bedtc table-cell">
                    <i class="bedotW w-[21px] h-[21px] bg-white rounded-[50%] mr-[8px] inline-block"></i>
                  </div>
                  <div class="bedtc bevT align-top table-cell">
                    Receive verified supplier details
                  </div>
                </div>
                <div class="behlp1 bevT bemgb15 table align-top mb-[15px]">
                  <div class="bedtc table-cell">
                    <i class="bedotW w-[21px] h-[21px] bg-white rounded-[50%] mr-[8px] inline-block"></i>
                  </div>
                  <div class="bedtc bevT table-cell align-top">
                    Compare Quotations and seal the deal
                  </div>
                </div>
                <div class="behlp1 bevT bemgb15 table align-top mb-[15px]">
                  <div class="bedtc table-cell">
                    <i class="bedotW w-[21px] h-[21px] bg-white rounded-[50%] mr-[8px] inline-block"></i>
                  </div>
                  <div class="bedtc bevT align-top table-cell">
                    Pay with IndiaMART & Get 100% Buyer Protection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!------------------------------------------>
        <div id="t0901_leftR" class="be-Rsc be-frmpop eqfcsed lftMgn px-5 pt-[25px] pb-[15px] bg-white flex-auto relative">
            <i 
             class="close_icon bg-close-icon bg-[rgba(0,0,0,0)] bg-no-repeat bg-[size:cover] outline-[rgba(102,102,102)] w-[18px] h-[18px] top-[10px] right-[10px] absolute cursor-pointer">
            </i>
          <div id="t0901_rightsection" class="eqfcsed">
            <div id="t0901_hdg" class="be-hdg text-xl pt-[10px]">
              Receive quotations from verified suppliers to Nigeria
            </div>
            <div id="t0901_questionouterwrapper" class="bemlsec eqfcsed mt-[25px] mb-[10px] bg-white">
              <div id="t0901_question" class="bemlsec eqfcsed mt-[25px] mb-[10px] bg-white">
                <form
                  name="t0901_bl_form"
                  onsubmit="return false"
                  id="t0901_bl_form"
                  method="post"
                  class="bepr bemnh eqfcsed relative"
                >
                  <div id="t0901screen1">
                    <div id="t0901-prodtitle" class="porlt relative">
                      <label id="t0901_name-1" class="be-lbl text-[#696969] text-left pb-[9px] mr-[1px] font-normal text-[15px] pointer-events-none block"
                        >Enter Product/Service name</label
                      >
                      <input
                        type="text"
                        class="be-slbox inpt_errorbx be-row ui-autocomplete-input w-full relative mb-[15px] h-[34px] align-top pl-[8px] text-[15px] border border-solid border-[#c9c6c6] rounded-sm bg-white text-[#000] outline-none"
                        name="q_title"
                        id="t0901prodtitle"
                        maxlength="100"
                        placeholder="Enter Product / Service name"
                        autocomplete="off"
                        spellcheck="true"
                        role="textbox"
                      />
                    </div>
                    <div id="t0901_login" class="bedvh min-h-[75px]">
                      <div class="bepr bemgb15 bT1-st3 blfr relative mr-[10px] w-full mb-[15px]">
                        <label id="t0901_label-1" class="be-lbl beml-50 text-[#696969] text-left pb-[9px] mr-[1px] font-normal text-[15px] pointer-events-none block"
                          >Email ID</label
                        >
                        <div id="t0901_dliso" class="bebdr h-[34px] w-[50px] pt-[7px] pb-[9px] pl-[3px] bg-[#f5f5f5] relative border border-solid border-[#c1c1c1] inline-block border-r-0 rounded-t-[2px] rounded-l-[2px] before:content-[''] before:absolute before:h-5 before:w-7 before:bg-no-repeat before:bg-message-icon before:bg-[position:50%] before:transform before:translate-x-[25%]"></div>
                        <input
                          id="t0901_login_field"
                          name="login_field"
                          class="be-input benords beW3 beh32 beemail border border-solid border-[rgb(67,191,179)] shadow-[rgb(67,191,179)] w-[282px] h-[34px] align-top pl-[8px] text-[15px] rounded-sm bg-white ml-[-3px] rounded-tl-none rounded-bl-none inline-block outline-none"
                          placeholder="Enter your mail"
                          type="email"
                        />
                        <div id="t0901_mflag" class="oeChng flex items-center mt-5 text-[#698181] text-[12px]">
                          <i class="oeWicn w-[14px h-[14px] mr-[5px] shrink-0 bg-no-repeat bg-globe-icon"></i>
                          <div class="oef0 shrink-0">Your Country is</div>
                          <div id="t0901_country" class="bepr oeCnty relative pr-[15px] ml-[5px] font-bold underline cursor-pointer text-[#698181] text-xs">
                            Nigeria
                            <div
                              id="t0901country_dropd"
                              class="dropdown be-flg w-full absolute left-0 top-0 bg-transparent border-none z-[1] inline-block rounded-t-[2px] rounded-l-[2px] h-[34px]"
                            >
                              <dt class="h-5">
                                <a class="w-full inline-block">
                                  <span class="my-1 mx-[3px] w-4 h-[11px] block bg-country-icon hidden"></span>
												          <i class="right-[-5px] absolute top-[3px] w-[11px] h-[11px] bg-no-repeat fill-[#698181] bg-caret-icon"></i>
                                
                                </a>
                              </dt>
                              <div class="eqAts hidden bg-white rounded-[5px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] w-[300px] py-[8px] px-0">
                                <input
                                  type="text"
                                  name="0901"
                                  placeholder="Search"
                                  id="t0901_flagInput"
                                  class="w-[282px] h-6 rounded-[3px] border border-solid border-[#000] text-sm py-0 px-[10px] my-0 mx-2"
                                />
                                <ul>
                                  <li>
                                    <span
                                      style="background-position: 0px -2310px"
                                    ></span>
                                    <a>Afghanistan +93</a>
                                  </li>
                                  <li>
                                    <span
                                      style="background-position: 0px -528px"
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
                  <div class="beclr text-[#666666]" id="t0901_contactinfo1">
                    <div id="t0901_contactinfoscreen1" class="eqfcsed">
                      <div class="be-row eqfcsed relative mb-[15px]">
                        <label for="Name" id="t0901_name-lb1"
                         class="be-lbl text-[#696969] text-left pb-[9px] mr-[1px] font-bold text-[15px] pointer-events-none block"
                          >Name</label
                        >
                        <input
                          id="t0901_q_first_nm1"
                          name="q_first_nm"
                          class="be-slbox inpt_errorbx w-full h-[34px] align-top pl-[8px] text-[15px] border border-solid border-[#c9c9c9] rounded-sm bg-white text-black outline-none"
                          placeholder="Enter your Name"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div id="t0901submit_wrapper">
                <div id="t0901_fBtn" class="bepr relative">
                  <div class="befstgo1 txt-cnt text-center" id="t0901_submitdiv">
                    <input
                      value="Go"
                      class="befsbtn hovsub bg-[#00a699] bg-[position:46px_7px] bg-download-icon bg-no-repeat text-white pl-[14px] w-[82px] h-[34px] text-xl text-left border-none rounded-[60px] cursor-pointer"
                      id="t0901_submit"
                      type="submit"
                    />
                    <div id="t0901_gwrap">
                      <p 
                         class="text-sm font-semibold text-center mt-[10px]"
                      >
                        OR
                      </p>
                      <div
                        id="t0901_gSignInWrapper"
                         class="text-center mt-[10px] mb-[15px]"
                      >
                        <div id="t0901signinBtnFr" class="customG inline-block bg-[#4685f5] text-white w-auto border border-solid border-[#4685f5] shadow-[1px_1px_1px_rgb(128,128,128)] whitespace-nowrap cursor-pointer">
                          <span class="Gicon inline-block align-middle bg-[size:22px_22px] w-[42px] h-[42px] bg-[position:50%_50%] bg-google-icon bg-no-repeat bg-white"></span>
                          <span class="buttonTextfr inline-block pl-[18px] pr-[18px] align-middle text-base font-bold text-white cursor-pointer">Login with Google</span>
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
