// Function to generate more modal html dynamically
export function generateMoreModalHTML() {
	return ` 
    
       <div id="more_modal" class="cbl_wrp cbl_br8 cbl_df cbl_fdc hidden  fixed flex flex-col rounded-lg bg-[#f8fafb] z-[998] top-[-70px] bottom-0 right-0 left-0 m-auto h-[520px] w-[780px]">
         <div
        id="t0801_blchatheader"
         class="cbl_hed cbl_df cbl_p025 cbl_aic cbl_br8 cb1_bg1 w-full h-[80px] border-b border-solid border-b-[#f8fafb] flex items-center py-0 px-[25px] rounded-lg"
       >
      <div
        id="t0801_prodimg"
       class="be-prdimg cbl_img cbl_df cbl_aic cbl_jcc cbl_ofh relative justify-center overflow-hidden w-[50px] h-[50px] rounded-[50%] bg-[#e0e0e0] mr-5 border border-solid border-[#e0e0e0] flex items-center before:content-[''] before:absolute before:w-full before:h-full before:bg-white before:top-0 before:left-0 before:z-[1]"
        >
      <div id="t0801_defaultimage" class="be-nobgimg bg-white relative w-full h-full flex z-[1]">
        <div class="blnewform_sprit be-noimg h-[177px] w-[200px] bg-[position:-91px_-589px] bg-form-icon bg-no-repeat"></div>
      </div>
    </div>
    <div class="cbl_fs16 cbl_flx1 flex-1" id="t0801_productname">
      <span>Tell us what you need to Get Best Price</span>
      <div class="cbl_msg text-xs text-[#9b9b9b] mt-[8px]">
        Provide below details to get quick quotes from sellers
      </div>
      <div class="cbl_pr cbl_clsgrp relative">
        <i id="close_icon" class="cbl_closbtn cbl_pa bg-close-icon bg-no-repeat bg-[size:cover] w-5 h-5 top-[-30px] right-[6px] cursor-pointer absolute border-none"></i>
      </div>
    </div>
  </div>
  <div id="t0801_blchatbody" class="cbl_windw cbl_df cbl_ofh flex max-h-[369px] flex-1 overflow-hidden relative transition duration-1000 ease-linear">
    <div class="cbl_windw_iner cbl_df cbl_fdc flex flex-col min-h-[324px] h-[324px] overflow-y-auto overflow-x-hidden py-0 px-[50px] flex-1 self-end">
      <div class="cbl_ques cbl-hi mt-[30px] text-[#333] mb-5" id="t0901hi">
        <div class="txt_area cbl_bg1 inline-block max-w-[410px] py-[18px] px-[25px] text-[15px] rounded-[15px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-left bg-white text-[#333] font-normal" id="t0801_hiid">Welcome</div>
      </div>
      <div id="t0801_new_chatbl" class="cbl_ques_grp pb-10">
        <div id="t0801_login" class="cbl_ques mb-5 text-[#333]">
          <div class="txt_area cbl_bg1 inline-block max-w-[410px] py-[18px] px-[25px] text-[15px] rounded-[15px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] text-left bg-white text-[#333]" id="t0801_loginid">
            Please share your
            <span id="t0801login_span_bold" class="befwt font-bold"
              >Email ID</span
            >
            to receive quotes from sellers
            <div id="t0801_gwrap">
              <p
               class="text-sm font-semibold text-center mt-[10px]"
              >
                OR
              </p>
              <div
                id="t0801_gSigninWrapper"
                 class="text-center mt-[10px] mb-[15px]"
              >
                <div id="t0801signinBtnfr" class="customG inline-block bg-[#4685f5] text-white w-auto rounded-none border border-solid border-[#4685f5] shadow-[1px_1px_1px_rgb(128,128,128)] whitespace-nowrap cursor-pointer">
                  <span class="Gicon inline-block align-middle bg-[size:22px_22px] w-[42px] h-[42px] bg-[position:50%_50%] bg-google-icon bg-white bg-no-repeat"></span>
                  <span class="buttonTextfr inline-block align-middle px-[18px] text-base font-bold">Login with Google</span>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="t0801mflag" class="oeChng my-[5px] ml-[25px] flex text-[#698181] text-xs">
    <i class="oeWicn w-[14px] h-[14px] bg-globe-icon mr-[5px] mt-[1px] shrink-0 bg-no-repeat"></i>
    <div class="oef0 shrink-0">Your country is</div>
    <div id="t0901country" class="bepr oeCnty pr-[15px] ml-[5px] font-bold underline cursor-pointer relative">
      Nigeria
      <div id="t0801country_dropd" class="dropdown bebdr be-flg absolute w-full left-0 top-0 bg-transparent border-none z-[1] inline-block h-[34px] border-r-0">
        <dt class="h-5">
          <a clss="w-full inline-block">
              <i class="right-[-5px] absolute top-[3px] h-[11px] w-[11px] bg-no-repeat fill-[#698181] bg-caret-icon"></i>
          </a>
        </dt>
      </div>
    </div>
  </div>
  <div
    id="t0801_blchatfooter" 
    class="mx-[25px] mb-[25px] rounded-[10px] justify-end w-[660px] min-h-[66px] relative flex items-center shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
  >
    <div class="cbl_whtbx cbl_pa cbl_bgl cbl_br10 absolute z-[2] top-0 left-0 bottom-0 w-[660px] min-h-[66px] rounded-[10px]"></div>
    <div
      id="t0801cbl_bluline"
      class="cbl_bluline cbl_pa cbl_br10 w-[100%] border-[2px] absolute z-[1] min-h-[66px] top-[-2px] bottom-[-2px] left-[-2px] box-content border-solid border-[#6975f9] rounded-[10px] more-custom-transition"
    ></div>
    <div id="t0801_newblchatReply" class="cbl_dtls flex-1 min-h-[66px] z-[3] relative">
      <div
        id="t0801_login_input"
        class="cbl_dtls cbl_mobile cbl_df cbl_aic t0801_userInput cbl_br10 w-full z-[3] items-center flex relative rounded-[10px] min-h-[66px]"
      >
        <div id="t0801_flagC" class="cbl_flag min-w-[30px] mx-[10px] h-[30px] before:content-[''] before:h-[20px] before:w-[28px] before:absolute before:top-[23px] before:left-[11px] before:bg-message-icon before:bg-no-repeat before:bg-[position:50%]"></div>
        <input
          id="t0801_login_field"
          name="login_field"
          class="beemail w-full max-w-full text-[15px] min-h-[66px] border-none text-[#333] pl-[5px] rounded-[8px] flex-1 outline-none"
          placeholder="Enter your email"
          type="text"
        />
      </div>
    </div>
    <div class="cbl_sbmt_btn cbl_zi3 cbl_pa cbl_df cbl_aic cbl_jcc bg-[#6975f9] border-none right-[-75px] rounded-[50%] bottom-[2px] min-w-[60px] min-h-[60px] w-[30px] h-[28px] absolute shadow-[0_0_4px_1px_rgba(74,74,95,0.4)] flex justify-center items-center">
      <button id="t0801_submit" class="cbl_sbmtbt cbl_pa clb_cp cursor-pointer border-none bg-transparent z-[3] w-[60px] h-[60px] left-0 top-0 absolute">
          <i class="h-7 w-[30px] fill-white ml-[5px] bg-download-icon my-0 mx-auto inline-block bg-no-repeat"></i>
      </button>
    </div>
  </div>
</div>
  `;
}
