export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('https://shopkaro-backend-j7ud.onrender.com/api/orders/user/'+userId) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('https://shopkaro-backend-j7ud.onrender.com/api/users/'+userId) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://shopkaro-backend-j7ud.onrender.com/api/users/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}


