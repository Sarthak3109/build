
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://shopkaro-backend-j7ud.onrender.com/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    localStorage.setItem('user', data.id)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://shopkaro-backend-j7ud.onrender.com/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', data.id)
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject( error );
    }

    // TODO: on server it will only return some info of user (not password)
  });
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    localStorage.removeItem('user')
    resolve({ data: 'success' });
  });
}

export function initaliseUser(){
  return new Promise(async (resolve) => {
    if(localStorage.getItem('user')){
    
      const id = localStorage.getItem('user')
        const response = await fetch('https://shopkaro-backend-j7ud.onrender.com/api/users/' + id)
    
        if(response.ok){
          const data = await response.json()
          console.log("api", data)
          resolve({data})
        }
        else
          resolve({data : null})
      }
    else{
        resolve({data : null})
    }
  });
}