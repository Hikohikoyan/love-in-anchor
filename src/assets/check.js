const apiurl = 'http://182.254.161.213/love-in-anchor/';

export function isPhone(value) {
    if (value == " ") {
        console.log(value);
      return false;
    }else{
        value = Number(value);
    }
    var pattern = /^1[34578]\d{9}$/
    if(pattern.test(value)){
      return true
    }
    return false
  }

export function isVoid(any){
    console.log(any);
    if(!any||any == 0){
        return false;
    }else{
        return true;
    }
}

export function postinfo(object){
    var userinfo = JSON.stringify(object);
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'POST,GET',
            'Content-Type':'application/json',
     },
        data: userinfo,
        url : apiurl+'api',
      };      
      axios(options)
      .then((ret) => {
      console.log(ret.data);
    })
}

