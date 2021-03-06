let displayFriends = function(username, ...arrays) {				
    console.log(username);
    for (let i in arrays) { 
      console.log(arrays[i]);
    }
    }
    let username = "userName"
    
    displayFriends(username, ['Harsha', 'Ammu', 'Siddiq']);    