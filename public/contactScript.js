function contactUsValidation(){
    var isValidPhone=true;
    var isValidEmail=false;
    var Name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var message=document.getElementById("message").value;
    var errMsg="";
    // const form=document.createElement('form');
    // const yuda=document.createElement('input');
    // yuda.type='hidden';
    // yuda.name='yuda';
    // yuda.value='chen';
    // form.appendChild(yuda);
    // form.method='post';
    // form.action='/submitForm';
    // document.body.append(form);
    // form.submit();
    if(Name==""){
        errMsg+="Name can't be empty\n";
    }
    for(i=0;i<email.length;i++){
        if(email.charAt(i)=='@')
            isValidEmail=true;
    }
    if(!isValidEmail){
        errMsg+="Email must contain '@'\n";
    }
    if(phone.length>0){
        for(i=0;i<phone.length;i++){
            if(phone.charAt(i)<'0'||phone.charAt(i)>'9'){
                isValidPhone=false;
                errMsg+="Phone Number must be valid\n"
                break;
            }
        }
    }
    else{
        isValidPhone=false;
        errMsg+="Phone can't be empty\n";
    }
    if(message=="")
        errMsg+="Message can't be empty\n";
    if(errMsg!="")
        window.alert(errMsg);
    else{
        const form= document.createElement('form');
        const FormName= document.createElement('input');
        const FormEmail= document.createElement('input');
        const FormPhone= document.createElement('input');
        const FormMessage= document.createElement('input');
        FormName.type = 'hidden';
        FormName.name='name';
        FormName.value=Name;

        FormEmail.type = 'hidden';
        FormEmail.name='email';
        FormEmail.value= email;
        
        FormPhone.type = 'hidden';
        FormPhone.name='phone';
        FormPhone.value= phone;
        
        FormMessage.type = 'hidden';
        FormMessage.name='message';
        FormMessage.value= message;

        form.appendChild(FormName);
        form.appendChild(FormEmail);
        form.appendChild(FormPhone);
        form.appendChild(FormMessage);
        form.method='post';
        form.action='/submitForm';
        document.body.appendChild(form);
        form.submit();
    }
}