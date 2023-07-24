import React,{useRef}from 'react';
import "./login.css";


const Login=()=>{
    const inputElement = useRef();


    function storeData(){
        inputElement.current.focus();

        var name = document.getElementById('name');
        var pw = document.getElementById('pw');
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    
        if(name.value.length == 0){
            alert('Please fill in email');
    
        }else if(pw.value.length == 0){
            alert('Please fill in password');
    
        }else if(name.value.length == 0 && pw.value.length == 0){
            alert('Please fill in email and password');
    
        }else if(pw.value.length > 8){
            alert('Password Characters should not be more than 8');
    
        }else if(!pw.value.match(numbers)){
            alert('please add 1 number');
    
        }else if(!pw.value.match(upperCaseLetters)){
            alert('please add 1 uppercase letter');
    
        }else if(!pw.value.match(lowerCaseLetters)){
            alert('please add 1 lowercase letter');
    
        }else if(!pw.value.match(specialChars)){
            alert('please add 1 special characters');
    
        }
        else{
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);
            alert('Your account has been created');
        }
    }
    
    //checking
    function checkData(){
        var storedName = localStorage.getItem('name');
        var storedPw = localStorage.getItem('pw');
    
        var userName = document.getElementById('userName');
        var userPw = document.getElementById('userPw');
        var userRemember = document.getElementById("rememberMe");
    
        if(userName.value == storedName && userPw.value == storedPw){
            alert('Login Successfull');
        }
        else{
            alert('User Does Not Exist');
        }
    }
    
   
    return(
<div className='parent'>
        <div class="login">
    <form name='form-login'>

        <h1>REGISTER</h1>

        <label for="name">Email</label>
        <input type="email" id="name" placeholder="Username" required />
        <label for="pw">Password</label>
        <input type="password"
               id= "pw"
               placeholder="Password" required />

        <ul class="helperText">
            <li className="length">Must be at least 8 characters long.</li>
            <li className="lowercase">Must contain a lowercase letter.</li>
            <li className="uppercase">Must contain an uppercase letter.</li>
            <li className="special">Must contain a number or special character.</li>
        </ul>
        <input id="rgstr_btn" type="submit" value="Register" ref={inputElement}   onClick={storeData}/>

    </form>
</div>
<div class="login">
    <form name='form-login'>

        <h1>SIGN IN</h1>

        <label for="userName">Email</label>
        <input type="email" id="userName" placeholder="Username" required />

        <label for="userPw">Password</label>
        <input type="password" id= "userPw" placeholder="Password" required />

        <div id="remember">
            <input type="checkbox" value="lsRememberMe" id="rememberMe"
                   style={{display:"inline-block",marginRight:'5px'}} />
            <label>Remember me</label>
        </div>

        <input id= "login_btn" type="submit" value="Login" onClick={checkData} />

    </form>
</div>
</div>

    )
}

export default Login;