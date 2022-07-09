export function CheckEmail(rule,value,back){
  //邮箱验证
  const RegEmail=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
  if(RegEmail.test(value))return back();
  else return back(new Error('邮箱格式错误'));
}

export function CheckPhone(rule,value,back){
  //验证手机号的正则表达式
  const RegPhone=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  if(RegPhone.test(value)) return back()
  else return back(new Error('手机号格式错误'))
}

export function CheckUsername(rule,value,back){ 
  //验证用户名
  const RegUser=/^[a-zA-Z0-9_-]{4,16}$/;
  if(!RegUser.test(value)) return back(new Error('账号格式错误'))
  else if (value==='admin') return back()
  else return back()
}

export function CheckPassword(rule,value,back){
  //验证密码
  const RegPassword=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
  if(value=='123456') return back()
  else if(!RegPassword.test(value)) return back(new Error('最少6位,包括至少1个大写字母,1个小写字母,1个数字,1个特殊字符'))
  else return back()
}