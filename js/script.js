
function On_off_layer(num){
    var objDiv = document.getElementById(num);
    if(objDiv.style.display=="block"){ objDiv.style.display = "none"; }
     else{ objDiv.style.display = "block"; }
}

function zip_code_find(add_form)
{
   new daum.Postcode({
       oncomplete: function(data) {
           if(data.zonecode)
           {
               add_form.value=data.roadAddress;
           }
       }
   }).open();
}


function Auto_focus_set(vars,leng,target)
{
   if(vars.length>=leng)
   {
       target.focus();
   }
}

function Obj_data_check_checkbox(objname)
{
   if(objname)
   {
       if(objname.checked==false)
           return 1;
       else
           return 0;
   }
   return 0;
}

function PHONE_number_check(phone_no)
{
   phone_no=phone_no.split('-').join('');
   var regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
   return regPhone.test(phone_no);
}
var Request_input_check_submit_check=0;
function Request_input_check(fm)
{
   is_fail=0;
   for(rof=0;rof<10;rof++)
   {
       data_use=0;
       data_necessary=0;
       data_title="";
       data_type=0;
       input_obj=eval("fm.input_check_"+rof);
       if(input_obj)
       {
           data_use=1;
           input_title_obj=eval("fm.input_title_"+rof);
           input_type_obj=eval("fm.input_type_"+rof);
           data_necessary=input_obj.value;
           data_title=input_title_obj.value;
           data_type=input_type_obj.value
               
       }

       if(data_use)
       {
           switch(data_type)
           {
               //전화번호
               case "1":
               case "8":
               case "9":
               case "12":
                   if(data_necessary)
                   {
                       //휴대폰번호 유효성
                       if(data_type=="8"||data_type=="9")	phone_data_input_value="";

                       input_datavalue_obj=eval("fm.input_0_"+rof);
                       data_input_value=input_datavalue_obj.value;
                       
                       //휴대폰번호 유효성
                       if(data_type=="8"||data_type=="9")	phone_data_input_value=data_input_value;

                       if(data_input_value=="")
                       {
                           alert(data_title+"을(를) 선택해주세요.");
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_1_"+rof);
                           data_input_value=input_datavalue_obj.value;

                           //휴대폰번호 유효성
                           if(data_type=="8"||data_type=="9")	phone_data_input_value+="-"+data_input_value;

                           if(data_input_value==""||data_input_value.length<3)
                           {
                               alert(data_title+"을(를) 입력해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_2_"+rof);
                           data_input_value=input_datavalue_obj.value;

                           //휴대폰번호 유효성
                           if(data_type=="8"||data_type=="9")	phone_data_input_value+="-"+data_input_value;

                           if(data_input_value==""||data_input_value.length<4)
                           {
                               alert(data_title+"을(를) 입력해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }

                       if(!is_fail&&(data_type=="8"||data_type=="9"))
                       {
                           if(!PHONE_number_check(phone_data_input_value))
                           {
                               alert("잘못된 "+data_title+"입니다. "+data_title+"을(를) 정확히 입력해주세요.");
                               input_datavalue_obj=eval("fm.input_1_"+rof);
                               input_datavalue_obj.value="";
                               input_datavalue_obj=eval("fm.input_2_"+rof);
                               input_datavalue_obj.value="";
                               is_fail=1;
                           }
                       }
                   }
                   if(data_type=="12"&&!is_fail)
                   {
                       input_datavalue_obj_key=eval("fm.input_4_"+rof);
                       input_datavalue_obj_check=eval("fm.input_5_"+rof);
                       if(input_datavalue_obj_key.value==""||input_datavalue_obj_check.value=="")
                       {
                           input_datavalue_obj_input_zone=eval("fm.input_3_"+rof);
                           if(input_datavalue_obj_input_zone.value.length==6)
                           {
                               input_datavalue_obj_input_auth_zone=eval("fm.input_6_"+rof);
                               name_fm=fm.fcn.value;
                               //비동기식 문자 인증 처리후 진행 리턴값이 1인경우 정상 인증
                               if(formPhoneNumber_authentication_check(name_fm,rof,input_datavalue_obj_input_auth_zone.value)==1)
                               {
                               }
                               else
                               {
                                   input_datavalue_obj_input_zone.focus();
                                   is_fail=1;
                               }
                           }
                           else
                           {
                               alert("휴대폰번호 인증후 `인증번호 확인`을 해주세요.");
                               input_datavalue_obj_input_zone.focus();
                               is_fail=1;
                           }
                       }
                   }

               break;
               //라디오박스
               case "2":
               case "15":
                   if(data_necessary)
                   {
                       input_keys_obj=eval("fm.input_count_"+rof);
                       //키개수 체크
                       rof_counts=input_keys_obj.value*1;
                       //한개이상 선택체크
                       Key_use=0;
                       if(rof_counts==1)
                       {
                           input_keys_var_obj=eval("fm.input_"+rof);
                           if(input_keys_var_obj.checked==true)	Key_use=1;
                       }
                       else
                       {
                           for(rof_option=0;rof_option<rof_counts;rof_option++)
                           {
                               input_keys_var_obj=eval("fm.input_"+rof);
                               if(input_keys_var_obj[rof_option].checked==true)	Key_use=1;
                           }
                       }
                       if(!Key_use)
                       {
                           alert(data_title+"을(를) 선택해주세요.");
                           is_fail=1;
                       }
                   }
               break;
               case "3":
                   if(data_necessary)
                   {
                       input_keys_obj=eval("fm.input_count_"+rof);
                       //키개수 체크
                       rof_counts=input_keys_obj.value*1;
                       //한개이상 선택체크
                       Key_use=0;
                       for(rof_option=0;rof_option<rof_counts;rof_option++)
                       {
                           input_keys_var_obj=eval("fm.input_"+rof_option+"_"+rof);
                           if(input_keys_var_obj.checked==true)	Key_use=1;
                       }
                       if(!Key_use)
                       {
                           alert(data_title+"을(를) 선택해주세요.");
                           is_fail=1;
                       }
                   }
               break;
               //날짜
               case "4":
                   if(data_necessary)
                   {
                       input_datavalue_obj=eval("fm.input_0_"+rof);
                       data_input_value=input_datavalue_obj.value;
                       if(data_input_value=="")
                       {
                           alert(data_title+"을(를) 선택해주세요.");
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_1_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           if(data_input_value=="")
                           {
                               alert(data_title+"을(를) 선택해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_2_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           if(data_input_value=="")
                           {
                               alert(data_title+"을(를) 선택해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
               //셀렉트박스
               case "7":
                   if(data_necessary)
                   {
                       input_datavalue_obj=eval("fm.input_"+rof);
                       data_input_value=input_datavalue_obj.value;
                       if(data_input_value=="")
                       {
                           alert(data_title+"을(를) 선택해주세요.");
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                   }
               break;

               //지역
               case "10":
                   if(data_necessary)
                   {
                       input_datavalue_obj=eval("fm.input_0_"+rof);
                       data_input_value=input_datavalue_obj.value;
                       if(data_input_value=="")
                       {
                           alert(data_title+"을(를) 선택해주세요.");
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_1_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           if(data_input_value=="")
                           {
                               alert(data_title+"을(를) 선택해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
               //이메일
               case "13":
                   if(data_necessary)
                   {
                       Email_addr_values="";
                       input_datavalue_obj=eval("fm.input_0_"+rof);
                       data_input_value=input_datavalue_obj.value;
                       Email_addr_values=data_input_value;
                       if(data_input_value=="")
                       {
                           alert(data_title+"을(를) 입력해주세요.");
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_1_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           Email_addr_values=Email_addr_values+"@"+data_input_value;
                           if(data_input_value=="")
                           {
                               alert(data_title+"을(를) 입력해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                       if(!is_fail)
                       {
                           if(!EMAIL_Valid_checking(Email_addr_values))
                           {
                               input_datavalue_obj=eval("fm.input_0_"+rof);
                               alert("유효한 "+data_title+"을(를) 입력해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
               //일반
               default:
                   if(data_necessary)
                   {
                       if(data_type.substr(0, 2)=="U_")
                       {
                           input_datavalue_obj=eval("fm.input_0_"+rof);
                           if(input_datavalue_obj)
                           {
                               data_input_value=input_datavalue_obj.value;
                               if(data_input_value=="")
                               {
                                   alert(data_title+"을(를) 선택해주세요.");
                                   input_datavalue_obj.focus();
                                   is_fail=1;
                               }
                               if(!is_fail)
                               {
                                   input_datavalue_obj=eval("fm.input_1_"+rof);
                                   data_input_value=input_datavalue_obj.value;
                                   if(data_input_value=="")
                                   {
                                       alert(data_title+"을(를) 선택해주세요.");
                                       input_datavalue_obj.focus();
                                       is_fail=1;
                                   }
                               }
                           }
                           else
                           {
                               input_datavalue_obj=eval("fm.input_"+rof);
                               data_input_value=input_datavalue_obj.value;
                               if(data_input_value=="")
                               {
                                   alert(data_title+"을(를) 입력해주세요.");
                                   input_datavalue_obj.focus();
                                   is_fail=1;
                               }
                           }
                       }
                       else
                       {
                           input_datavalue_obj=eval("fm.input_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           if(data_input_value=="")
                           {
                               alert(data_title+"을(를) 입력해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
           }
       }
       if(is_fail)	break;
   }

   if(!is_fail)
   {
       //약관체크
       if(Obj_data_check_checkbox(fm.check_agree))
       {
           alert("이용약관에 동의해주세요.");
           fm.check_agree.focus();
       }
       //개인정보보호체크
       else if(Obj_data_check_checkbox(fm.check_policy))
       {
           alert("개인정보 보호정책에 동의해주세요.");
           fm.check_policy.focus();
       }
       //광고성정보수신
       else if(Obj_data_check_checkbox(fm.check_adspam))
       {
           alert("광고성정보 수신에 동의해주세요.");
           fm.check_adspam.focus();
       }
       //개인정보보호체크
       else if(Obj_data_check_checkbox(fm.check_policy3))
       {
           alert("개인정보 제3자제공에 동의해주세요.");
           fm.check_policy3.focus();
       }
       else
       {
        const formData = new FormData(fm); // Assuming 'form' is your form element
            
        // Optional: Convert formData to a plain object if your endpoint expects JSON
        const formObject = {};
        formData.forEach(function(value, key) {
            formObject[key] = value;
        });
        
        fetch('YOUR_ENDPOINT_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Assuming your server expects JSON. Change as needed.
            },
            body: JSON.stringify(formObject), // Send the form data as JSON
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text; // or .text() or .blob() etc., depending on the server response
        })
        .then(data => {
            alert(response.text);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
       }
   }
}



function Request_input_focus(fm)
{
   is_fail=0;
   for(rof=0;rof<10;rof++)
   {
       data_use=0;
       data_necessary=0;
       data_title="";
       data_type=0;
       input_obj=eval("fm.input_check_"+rof);
       if(input_obj)
       {
           data_use=1;
           input_title_obj=eval("fm.input_title_"+rof);
           input_type_obj=eval("fm.input_type_"+rof);
           data_necessary=input_obj.value;
           data_title=input_title_obj.value;
           data_type=input_type_obj.value
               
       }

       if(data_use)
       {
           switch(data_type)
           {
               //전화번호
               case "1":
               case "8":
               case "9":
               case "12":
                   if(data_necessary)
                   {
                       //휴대폰번호 유효성
                       if(data_type=="8"||data_type=="9")	phone_data_input_value="";

                       input_datavalue_obj=eval("fm.input_0_"+rof);
                       data_input_value=input_datavalue_obj.value;

                       //휴대폰번호 유효성
                       if(data_type=="8"||data_type=="9")	phone_data_input_value=data_input_value;

                       if(data_input_value=="")
                       {
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_1_"+rof);
                           data_input_value=input_datavalue_obj.value;

                           //휴대폰번호 유효성
                           if(data_type=="8"||data_type=="9")	phone_data_input_value+="-"+data_input_value;

                           if(data_input_value==""||data_input_value.length<3)
                           {
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_2_"+rof);
                           data_input_value=input_datavalue_obj.value;

                           //휴대폰번호 유효성
                           if(data_type=="8"||data_type=="9")	phone_data_input_value+="-"+data_input_value;

                           if(data_input_value==""||data_input_value.length<4)
                           {
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                       if(!is_fail&&(data_type=="8"||data_type=="9"))
                       {
                           if(!PHONE_number_check(phone_data_input_value))
                           {
                               alert("잘못된 "+data_title+"입니다. "+data_title+"을(를) 정확히 입력해주세요.");
                               input_datavalue_obj=eval("fm.input_1_"+rof);
                               input_datavalue_obj.value="";
                               input_datavalue_obj=eval("fm.input_2_"+rof);
                               input_datavalue_obj.value="";
                               is_fail=1;
                           }
                       }
                   }
                   if(data_type=="12"&&!is_fail)
                   {
                       input_datavalue_obj_key=eval("fm.input_4_"+rof);
                       input_datavalue_obj_check=eval("fm.input_5_"+rof);
                       if(input_datavalue_obj_key.value==""||input_datavalue_obj_check.value=="")
                       {
                           input_datavalue_obj_input_zone=eval("fm.input_3_"+rof);
                           if(input_datavalue_obj_input_zone.value.length==6)
                           {
                               input_datavalue_obj_input_auth_zone=eval("fm.input_6_"+rof);
                               name_fm=fm.fcn.value;
                               //비동기식 문자 인증 처리후 진행 리턴값이 1인경우 정상 인증
                               if(formPhoneNumber_authentication_check(name_fm,rof,input_datavalue_obj_input_auth_zone.value)==1)
                               {
                               }
                               else
                               {
                                   input_datavalue_obj_input_zone.focus();
                                   is_fail=1;
                               }
                           }
                           else
                           {
                               alert("휴대폰번호 인증후 `인증번호 확인`을 해주세요.");
                               input_datavalue_obj_input_zone.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
               //라디오박스
               case "2":
               case "15":
                   if(data_necessary)
                   {
                       input_keys_obj=eval("fm.input_count_"+rof);
                       //키개수 체크
                       rof_counts=input_keys_obj.value*1;
                       //한개이상 선택체크
                       Key_use=0;
                       if(rof_counts==1)
                       {
                           input_keys_var_obj=eval("fm.input_"+rof);
                           if(input_keys_var_obj.checked==true)	Key_use=1;
                       }
                       else
                       {
                           for(rof_option=0;rof_option<rof_counts;rof_option++)
                           {
                               input_keys_var_obj=eval("fm.input_"+rof);
                               if(input_keys_var_obj[rof_option].checked==true)	Key_use=1;
                           }
                       }
                       if(!Key_use)
                       {
                           is_fail=1;
                       }
                   }
               break;
               case "3":
                   if(data_necessary)
                   {
                       input_keys_obj=eval("fm.input_count_"+rof);
                       //키개수 체크
                       rof_counts=input_keys_obj.value*1;
                       //한개이상 선택체크
                       Key_use=0;
                       for(rof_option=0;rof_option<rof_counts;rof_option++)
                       {
                           input_keys_var_obj=eval("fm.input_"+rof_option+"_"+rof);
                           if(input_keys_var_obj.checked==true)	Key_use=1;
                       }
                       if(!Key_use)
                       {
                           is_fail=1;
                       }
                   }
               break;
               //날짜
               case "4":
                   if(data_necessary)
                   {
                       input_datavalue_obj=eval("fm.input_0_"+rof);
                       data_input_value=input_datavalue_obj.value;
                       if(data_input_value=="")
                       {
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_1_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           if(data_input_value=="")
                           {
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_2_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           if(data_input_value=="")
                           {
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
               //지역
               case "10":
                   if(data_necessary)
                   {
                       input_datavalue_obj=eval("fm.input_0_"+rof);
                       data_input_value=input_datavalue_obj.value;
                       if(data_input_value=="")
                       {
                           alert(data_title+"을(를) 선택해주세요.");
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_1_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           if(data_input_value=="")
                           {
                               alert(data_title+"을(를) 선택해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
               //이메일
               case "13":
                   if(data_necessary)
                   {
                       Email_addr_values="";
                       input_datavalue_obj=eval("fm.input_0_"+rof);
                       data_input_value=input_datavalue_obj.value;
                       Email_addr_values=data_input_value;
                       if(data_input_value=="")
                       {
                           alert(data_title+"을(를) 입력해주세요.");
                           input_datavalue_obj.focus();
                           is_fail=1;
                       }
                       if(!is_fail)
                       {
                           input_datavalue_obj=eval("fm.input_1_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           Email_addr_values=Email_addr_values+"@"+data_input_value;
                           if(data_input_value=="")
                           {
                               alert(data_title+"을(를) 입력해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                       if(!is_fail)
                       {
                           if(!EMAIL_Valid_checking(Email_addr_values))
                           {
                               input_datavalue_obj=eval("fm.input_0_"+rof);
                               alert("유효한 "+data_title+"을(를) 입력해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
               //일반
               default:
                   if(data_necessary)
                   {
                       if(data_type.substr(0, 2)=="U_")
                       {
                           input_datavalue_obj=eval("fm.input_0_"+rof);
                           if(input_datavalue_obj)
                           {
                               data_input_value=input_datavalue_obj.value;
                               if(data_input_value=="")
                               {
                                   alert(data_title+"을(를) 선택해주세요.");
                                   input_datavalue_obj.focus();
                                   is_fail=1;
                               }
                               if(!is_fail)
                               {
                                   input_datavalue_obj=eval("fm.input_1_"+rof);
                                   data_input_value=input_datavalue_obj.value;
                                   if(data_input_value=="")
                                   {
                                       alert(data_title+"을(를) 선택해주세요.");
                                       input_datavalue_obj.focus();
                                       is_fail=1;
                                   }
                               }
                           }
                           else
                           {
                               input_datavalue_obj=eval("fm.input_"+rof);
                               data_input_value=input_datavalue_obj.value;
                               if(data_input_value=="")
                               {
                                   alert(data_title+"을(를) 입력해주세요.");
                                   input_datavalue_obj.focus();
                                   is_fail=1;
                               }
                           }
                       }
                       else
                       {
                           input_datavalue_obj=eval("fm.input_"+rof);
                           data_input_value=input_datavalue_obj.value;
                           if(data_input_value=="")
                           {
                               alert(data_title+"을(를) 입력해주세요.");
                               input_datavalue_obj.focus();
                               is_fail=1;
                           }
                       }
                   }
               break;
           }
       }
       if(is_fail)	break;
   }

   if(!is_fail)
   {
       //약관체크
       if(Obj_data_check_checkbox(fm.check_agree))
       {
           fm.check_agree.focus();
       }
       //개인정보보호체크
       else if(Obj_data_check_checkbox(fm.check_policy))
       {
           fm.check_policy.focus();
       }
       //광고성정보수신
       else if(Obj_data_check_checkbox(fm.check_adspam))
       {
           fm.check_adspam.focus();
       }
       //개인정보보호체크
       else if(Obj_data_check_checkbox(fm.check_policy3))
       {
           fm.check_policy3.focus();
       }
       else
       {
           fm.submit();
       }
   }
}


function Number_check(key_code)
{
   if((key_code>=49&&key_code<=57)||(key_code>=96&&key_code<=105))
       return true;
   else
       return false;
}
function Number_Max_length(key_value,key_code,len)
{
   if(Number_check(key_code))
   {
       now_len=(key_value.length)+1;
       if(now_len>len)
           return false;
   }
}

function Max_length_set(obj,max_len)
{
   values=obj.value;
   if(values.length>max_len)
   {
       set_values=values.substring(0,max_len);
       obj.value=set_values;
   }
}

function Taget_move_slide()
{
   //main_Body
   var offset = $("#form_location").offset();
   var Top_follow_box = $("#Top_lay_follow_box").height()+10;

   if(document.getElementById("Sample_area")!= null)
       move_target_top= parseInt(offset.top)-(Top_follow_box+60);
   else
       move_target_top= parseInt(offset.top)-Top_follow_box;


   now_window_height= parseInt($(window).height());
   now_move_target_height= parseInt($("html, body").height());
   now_move_target_top= parseInt($("html, body").scrollTop());
   show_Max_height_size=now_move_target_height-now_window_height;

   if(move_target_top==now_move_target_top||show_Max_height_size==now_move_target_top)
       Request_input_check(request_1_form);
   else
       $("html, body").animate({scrollTop:move_target_top}, 100);

//	$("html, body").animate({scrollTop:move_target_top}, 100);
}

function Display_Onoff(obj_name,type)
{
   if(type)
       $( "#"+obj_name ).show(); 
   else
       $( "#"+obj_name ).hide(); 
}

function Layout_pop_show()
{
   Display_Onoff('layout_request_1_zone',1);
   Display_Onoff('layout_request_1_zone_bg',1);
   Display_Onoff('layout_request_button_zone',0);
       
   var maskHeight = $(document).height();  
   $("#layout_request_1_zone_bg").height(maskHeight);
}
function Layout_pop_hide()
{
   Display_Onoff('layout_request_1_zone',0);
   Display_Onoff('layout_request_1_zone_bg',0);
   Display_Onoff('layout_request_button_zone',1);
}

function Layout_bottom_pop_hide()
{
   Display_Onoff('layout_request_1_zone',1);
   Display_Onoff('layout_request_1_zone_bg',0);
   Display_Onoff('layout_request_bottom_button_zone',0);
}
var useTimer=1;
// function Call_dlst_page()
// {
//    if(useTimer)
//    {
//        $.ajax({
//            type : "POST",
//            url : "/module/dlst.html",
//            data : {'t' : Mem_timer_count},
//            success : function (ret_var) { 
//            }
//        });
//    }
// }

var Mem_timer_count=0;
setInterval(function() {Mem_timer_count++;	if(Mem_timer_count%5==0)	Call_dlst_page();}, 1000);

$(window).on("beforeunload", function(){
   Call_dlst_page();
});



//지역선택
function Change_Area_sub_load(area_name,sub_area_id)
{
   //도시 체크
   Select_area=0;
   for (var key in AREA_zone_ary)
   {
       if(area_name==AREA_zone_ary[key])
           Select_area=key;
   }

   //도시가 존재하는경우
   if(Select_area)
   {
       //기존 값삭제
       $('#'+sub_area_id).children('option').remove();

       //지역정보 로딩
       Set_subarea_info_ary=eval("AREA_zone_ary_"+Select_area);

       //초기값
       $('#'+sub_area_id).append("<option value=''>시/도/군</option>");
       //값세팅
       for (var key in Set_subarea_info_ary)
           $('#'+sub_area_id).append("<option value='"+Set_subarea_info_ary[key]+"'>"+Set_subarea_info_ary[key]+"</option>");
   }
   else
   {
       //초기화처리
       $('#'+sub_area_id).children('option').remove();
       $('#'+sub_area_id).append("<option value=''>시/도/군</option>");
   }
}

//전체동의
function Agrees_Check_auto_all(form_count,key_list,check_type)
{
   var key_list_ary = key_list.split("|");
   for (var key_values in key_list_ary)
   {
       if(key_list_ary[key_values])
       {
           obj_info=$("#id_"+form_count+"_input_check_"+key_list_ary[key_values]);
           if(obj_info)
               obj_info.prop("checked", check_type);   
       }
   }
}

//항목에 체크 박스변화체크
function Agrees_Check_auto_onoff(form_count,key_list)
{
   var All_checked_check=1;
   var key_list_ary = key_list.split("|");
   for (var key_values in key_list_ary)
   {
       if(key_list_ary[key_values])
       {
           obj_info=$("#id_"+form_count+"_input_check_"+key_list_ary[key_values]);
           if(obj_info)
           {
               if(obj_info.is(":checked")==false)
                   All_checked_check=0;
           }
       }
   }
   
   obj_info=$("#id_"+form_count+"_input_check_all");
   if(obj_info)
   {
       if(All_checked_check)	obj_info.prop("checked", true);
       else	obj_info.prop("checked", false);
   }
}


var useSMSACC=1;
function PhoneNumber_authentication(name_fm,name_code,data_title,Acc_code)
{

   input_datavalue_obj_1=eval("request_"+name_fm+"_form.input_0_"+name_code);
   input_datavalue_obj_2=eval("request_"+name_fm+"_form.input_1_"+name_code);
   input_datavalue_obj_3=eval("request_"+name_fm+"_form.input_2_"+name_code);
   input_datavalue_obj_input=eval("request_"+name_fm+"_form.input_3_"+name_code);
   input_datavalue_obj_var=eval("request_"+name_fm+"_form.input_4_"+name_code);
   phone_data_input_value=input_datavalue_obj_1.value+"-"+input_datavalue_obj_2.value+"-"+input_datavalue_obj_3.value;

   if(input_datavalue_obj_2.value==""){		alert(data_title+"을(를) 입력해주세요.");input_datavalue_obj_2.focus();		}
   else if(input_datavalue_obj_2.value.length!=4){		alert(data_title+"을(를) 정확히 입력해주세요.");input_datavalue_obj_2.focus();		}
   else if(input_datavalue_obj_3.value==""){		alert(data_title+"을(를) 입력해주세요.");input_datavalue_obj_3.focus();		}
   else if(input_datavalue_obj_3.value.length!=4){		alert(data_title+"을(를) 정확히 입력해주세요.");input_datavalue_obj_3.focus();		}
   else if(!PHONE_number_check(phone_data_input_value))
   {
       alert("잘못된 "+data_title+"입니다. "+data_title+"을(를) 정확히 입력해주세요.");
       input_datavalue_obj_2.value="";
       input_datavalue_obj_3.value="";
   }
   else
   {
       if(!useSMSACC)
       {
           alert("랜딩미리보기에서는 인증번호는 발송되지 않습니다.");
           return false;
       }

       $.ajax({
           type : "POST",
           url : "/module/phonenumber_authentication.html",
           data : {'Mode_value' : 'PNA','Number_var' : phone_data_input_value,'Name_code' : name_code,'ACC_code' : Acc_code},
           success : function (ret_var) { 

               var ret_var_json = JSON.parse(ret_var);
               if(ret_var_json.STATE=="SUCCESS")
               {
                   alert("휴대폰번호로 [인증번호]가 전송되었습니다.\n전송된 인증번호 6자를 입력하고 `인증번호 확인`을 클릭해주세요.");
                   input_datavalue_obj_input.value="";
                   input_datavalue_obj_var.value=ret_var_json.key_VAR;

                   $("#input_1_"+name_fm+"_"+name_code+"_id").prop('readonly', true);
                   $("#input_2_"+name_fm+"_"+name_code+"_id").prop('readonly', true);
                   
                   //인증번호 전송 버튼 숨김
                   $("#PN_ACC_no_text_"+name_fm+"_"+name_code).css("display","none");
                   //인증확인 버튼 노출 (잘안보여서 두번함)
                   $("#PN_ACC_no_check_text_"+name_fm+"_"+name_code).fadeTo("fast",1, function() {
                       $("#PN_ACC_no_check_text_"+name_fm+"_"+name_code).fadeTo("slow",0, function() {
                           $("#PN_ACC_no_check_text_"+name_fm+"_"+name_code).fadeTo("slow",1, function() {});
                       });
                   });

               }
               else if(ret_var_json.STATE=="ONSEND")
               {
                   alert("인증번호가 이미 발송되었습니다.\n\n휴대폰으로 전송된 인증번호를 확인해주세요.");
               }
               else if(ret_var_json.STATE=="OVER_PHONE")
               {
                   alert("인증번호 전송에 실패하였습니다.\n입력하신 "+data_title+"은(는) 이미 인증에 사용되었습니다.\n다른 번호를 사용하시거나 잠시후에 이용해주세요.");
                   location.reload();
               }
               else if(ret_var_json.STATE=="OVER_IP")
               {
                   alert("인증번호 전송에 실패하였습니다.\n현재 기기(PC/스마트폰)는 이미 인증에 사용되었습니다.\n다른 번호를 사용하시거나 잠시후에 이용해주세요.");
                   location.reload();
               }
               else if(ret_var_json.STATE=="SENDFAIL_NOUSE")
               {
                   alert("인증번호 전송에 실패하였습니다. 새로고침후 다시 시도해주세요.");
                   location.reload();
               }
               else if(ret_var_json.STATE=="SENDFAIL")
               {
                   alert("잘못된 "+data_title+"입니다. "+data_title+"을(를) 정확히 입력해주세요.");
                   input_datavalue_obj_2.value="";
                   input_datavalue_obj_3.value="";
               }
               else if(ret_var_json.STATE=="TIMEOUT")
               {
                   alert("인증시간이 만료되었습니다. 새로고침후 다시 시도해주세요.");
                   location.reload();
               }
               else
               {
                   alert("인증번호 전송에 실패하였습니다. 새로고침후 다시 시도해주세요.");
                   location.reload();
               }
           }
       });
   }
}


function PhoneNumber_authentication_check(name_fm,name_code,data_title,Acc_code)
{
   input_datavalue_obj_1=eval("request_"+name_fm+"_form.input_0_"+name_code);
   input_datavalue_obj_2=eval("request_"+name_fm+"_form.input_1_"+name_code);
   input_datavalue_obj_3=eval("request_"+name_fm+"_form.input_2_"+name_code);
   input_datavalue_obj_input=eval("request_"+name_fm+"_form.input_3_"+name_code);
   input_datavalue_obj_var=eval("request_"+name_fm+"_form.input_4_"+name_code);
   phone_data_input_value=input_datavalue_obj_1.value+"-"+input_datavalue_obj_2.value+"-"+input_datavalue_obj_3.value;

   if(input_datavalue_obj_input.value.length==6)
   {
       $.ajax({
           type : "POST",
           url : "/module/phonenumber_authentication_check.html",
           data : {'Mode_value' : 'PNA_ACC','Number_var' : phone_data_input_value,'Name_code' : name_code,'ACC_code' : Acc_code,'ACC_code_key' : input_datavalue_obj_input.value,'ACC_code_key_var' : input_datavalue_obj_var.value},
           success : function (ret_var) { 

               if(ret_var=="SUCCESS")
               {
                   alert("인증번호가 확인 되었습니다.");

                   $("#input_1_"+name_fm+"_"+name_code+"_id").prop('readonly', true);
                   $("#input_2_"+name_fm+"_"+name_code+"_id").prop('readonly', true);
                   $("#input_3_"+name_fm+"_"+name_code+"_id").prop('readonly', true);

                   input_datavalue_obj_checking=eval("request_"+name_fm+"_form.input_5_"+name_code);
                   input_datavalue_obj_checking.value=Acc_code;
               }
               else if(ret_var=="ERROR 1")
               {
                   alert("인증이 유효하지 않습니다.\n다시 인증해주세요.");
                   location.reload();
               }
               else if(ret_var=="ERROR 2")
               {
                   alert("인증번호가 유효하지 않습니다.일정시간이 지난 인증은 재인증해주세요.");
                   location.reload();
               }
               else if(ret_var=="ERROR 3")
               {
                   alert("인증되지 않은 번호입니다.\n다시 인증해주세요.");
                   location.reload();
               }
               else if(ret_var=="ERROR 4")
               {
                   alert("인증번호가 맞지 않습니다.\n휴대폰으로 전송된 인증번호 6자리를 정확히 입력해주세요.");
                   input_datavalue_obj_input.value="";
               }
               else if(ret_var=="ERROR 5")
               {
                   alert("인증번호가 입력되지 않았습니다.\n휴대폰으로 전송된 인증번호 6자리를 정확히 입력해주세요.");
                   input_datavalue_obj_input.value="";
               }
               else if(ret_var=="ERROR 6")
               {
                   alert("인증번호전송값이 맞지 않습니다.\n다시 인증해주세요.");
                   location.reload();
               }
               else
               {
                   alert("인증번호 전송에 실패하였습니다. 다시 시도해주세요.");
                   location.reload();
               }
           }
       });
   }
   else
   {
       alert("인증번호 6자리를를 입력해주세요.");
       input_datavalue_obj_input.focus();
   }
}

function formPhoneNumber_authentication_check(name_fm,name_code,Acc_code)
{
   acc_mode_value=0;
   input_datavalue_obj_1=eval("request_"+name_fm+"_form.input_0_"+name_code);
   input_datavalue_obj_2=eval("request_"+name_fm+"_form.input_1_"+name_code);
   input_datavalue_obj_3=eval("request_"+name_fm+"_form.input_2_"+name_code);
   input_datavalue_obj_input=eval("request_"+name_fm+"_form.input_3_"+name_code);
   input_datavalue_obj_var=eval("request_"+name_fm+"_form.input_4_"+name_code);
   phone_data_input_value=input_datavalue_obj_1.value+"-"+input_datavalue_obj_2.value+"-"+input_datavalue_obj_3.value;

   if(input_datavalue_obj_input.value.length==6)
   {
       $.ajax({
           async:false,
           type : "POST",
           url : "/module/phonenumber_authentication_check.html",
           data : {'Mode_value' : 'PNA_ACC','Number_var' : phone_data_input_value,'Name_code' : name_code,'ACC_code' : Acc_code,'ACC_code_key' : input_datavalue_obj_input.value,'ACC_code_key_var' : input_datavalue_obj_var.value},
           success : function (ret_var) { 

               if(ret_var=="SUCCESS")
               {
                   $("#input_1_"+name_fm+"_"+name_code+"_id").prop('readonly', true);
                   $("#input_2_"+name_fm+"_"+name_code+"_id").prop('readonly', true);
                   $("#input_3_"+name_fm+"_"+name_code+"_id").prop('readonly', true);

                   input_datavalue_obj_checking=eval("request_"+name_fm+"_form.input_5_"+name_code);
                   input_datavalue_obj_checking.value=Acc_code;

                   acc_mode_value=1;
               }
               else if(ret_var=="ERROR 1")
               {
                   alert("인증이 유효하지 않습니다.\n다시 인증해주세요.");
                   location.reload();
               }
               else if(ret_var=="ERROR 2")
               {
                   alert("인증번호가 유효하지 않습니다.일정시간이 지난 인증은 재인증해주세요.");
                   location.reload();
               }
               else if(ret_var=="ERROR 3")
               {
                   alert("인증되지 않은 번호입니다.\n다시 인증해주세요.");
                   location.reload();
               }
               else if(ret_var=="ERROR 4")
               {
                   alert("인증번호가 맞지 않습니다.\n휴대폰으로 전송된 인증번호 6자리를 정확히 입력해주세요.");
                   input_datavalue_obj_input.value="";
               }
               else if(ret_var=="ERROR 5")
               {
                   alert("인증번호가 입력되지 않았습니다.\n휴대폰으로 전송된 인증번호 6자리를 정확히 입력해주세요.");
                   input_datavalue_obj_input.value="";
               }
               else if(ret_var=="ERROR 6")
               {
                   alert("인증번호전송값이 맞지 않습니다.\n다시 인증해주세요.");
                   location.reload();
               }
               else
               {
                   alert("인증번호 전송에 실패하였습니다. 다시 시도해주세요.");
                   location.reload();
               }
           }
       });
   }
   else
   {
       alert("인증번호 6자리를를 입력해주세요.");
       input_datavalue_obj_input.focus();
   }
   return acc_mode_value;
}

//커스텀 서브선택기능
function Change_TYPEITEM_sub_load(item_name,sub_item_id,array_key_name,item_title)
{
   //1차 체크
   Select_user_info_item=0;
   
   //메인항목 로딩
   Set_masteritem_info_ary=eval(array_key_name+"_ary");

   //선택한 항목 찾기
   for (var key in Set_masteritem_info_ary)
   {
       if(item_name==Set_masteritem_info_ary[key])
           Select_user_info_item=key;
   }

   //1차를 선택한 경우
   if(Select_user_info_item)
   {
       //기존 값삭제
       $('#'+sub_item_id).children('option').remove();

       //서브항목 로딩
       Set_subitem_info_ary=eval(array_key_name+"_ary_"+Select_user_info_item);

       //초기값
       $('#'+sub_item_id).append("<option value=''>-"+item_title+" 세부 항목-</option>");
       //값세팅
       for (var key in Set_subitem_info_ary)
           $('#'+sub_item_id).append("<option value='"+Set_subitem_info_ary[key]+"'>"+Set_subitem_info_ary[key]+"</option>");
   }
   else
   {
       //초기화처리
       $('#'+sub_item_id).children('option').remove();
       $('#'+sub_item_id).append("<option value=''>-"+item_title+" 세부 항목-</option>");
   }
}
//이메일유효성
function EMAIL_Valid_checking(Email_addr)
{
   var Regex_Patten = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,4})(\]?)$/i;
   return (Email_addr.match(Regex_Patten)!=null);
}
//지역데이터
var AREA_zone_ary=new Array();
AREA_zone_ary[1]="서울특별시";
AREA_zone_ary[2]="부산광역시";
AREA_zone_ary[3]="대구광역시";
AREA_zone_ary[4]="인천광역시";
AREA_zone_ary[5]="광주광역시";
AREA_zone_ary[6]="대전광역시";
AREA_zone_ary[7]="울산광역시";
AREA_zone_ary[8]="세종특별자치시";
AREA_zone_ary[9]="경기도";
AREA_zone_ary[10]="강원도";
AREA_zone_ary[11]="충청북도";
AREA_zone_ary[12]="충청남도";
AREA_zone_ary[13]="전라북도";
AREA_zone_ary[14]="전라남도";
AREA_zone_ary[15]="경상북도";
AREA_zone_ary[16]="경상남도";
AREA_zone_ary[17]="제주특별자치도";

//시군구 데이터
var AREA_zone_ary_1=Array("강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구");
var AREA_zone_ary_2=Array("강서구","금정구","기장군","남구","동구","동래구","법인구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구");
var AREA_zone_ary_3=Array("남구","달서구","달성군","동구","북구","서구","수성구","중구");
var AREA_zone_ary_4=Array("강화군","계양구","남구","남동구","동구","미추홀구","부평구","서구","연수구","옹진군","중구");
var AREA_zone_ary_5=Array("광산구","남구","동구","북구","서구");
var AREA_zone_ary_6=Array("대덕구","동구","서구","유성구","중구");
var AREA_zone_ary_7=Array("남구","동구","북구","울주군","중구");
var AREA_zone_ary_8=Array("세종특별자치시");
var AREA_zone_ary_9=Array("가평군","고양시","고양시 덕양구","고양시 일산동구","고양시 일산서구","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","부천시 소사구","부천시 오정구","부천시 원미구","성남시","성남시 분당구","성남시 수정구","성남시 중원구","수원시","수원시 권선구","수원시 영통구","수원시 장안구","수원시 팔달구","시흥시","안산시","안산시 단원구","안산시 상록구","안성시","안양시","안양시 동안구","안양시 만안구","양주시","양평군","여주군","여주시","연천군","오산시","용인시","용인시 기흥구","용인시 수지구","용인시 처인구","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시");
var AREA_zone_ary_10=Array("강릉시","고성군","동해시","삼척시","속초시","양구군","양양군","영월군","원주시","인제군","정선군","철원군","춘천시","태백시","평창군","홍천군","화천군","횡성군");
var AREA_zone_ary_11=Array("괴산군","단양군","보은군","영동군","옥천군","음성군","제천시","증평군","진천군","청원군","청주시 상당구","청주시 서원구","청주시 청원구","청주시 흥덕구","충주시");
var AREA_zone_ary_12=Array("계룡시","공주시","금산군","논산시","당진군","당진시","보령시","부여군","서산시","서천군","아산시","연기군","예산군","천안시","천안시 동남구","천안시 서북구","청양군","태안군","홍성군");
var AREA_zone_ary_13=Array("고창군","군산시","김제시","남원시","무주군","부안군","순창군","완주군","익산시","임실군","장수군","전주시","전주시 덕진구","전주시 완산구","정읍시","진안군");
var AREA_zone_ary_14=Array("강진군","고흥군","곡성군","광양시","구례군","나주시","담양군","목포시","무안군","보성군","순천시","신안군","여수시","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군");
var AREA_zone_ary_15=Array("경산시","경주시","고령군","구미시","군위군","김천시","문경시","봉화군","상주시","성주군","안동시","영덕군","영양군","영주시","영천시","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군","포항시","포항시 남구","포항시 북구");
var AREA_zone_ary_16=Array("거제시","거창군","고성군","김해시","남해군","밀양시","사천시","산청군","양산시","의령군","진주시","창녕군","창원시","창원시 마산합포구","창원시 마산회원구","창원시 성산구","창원시 의창구","창원시 진해구","통영시","하동군","함안군","함양군","합천군");
var AREA_zone_ary_17=Array("서귀포시","제주시");
