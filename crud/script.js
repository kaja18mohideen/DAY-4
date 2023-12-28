
let users = [
    { id: 1, name: 'kaja', email: 'kaja@gmail.com' },
    { id: 2, name: 'mohideen', email: 'mohideen@example.com' },
  ];
  
  
  function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(listItem);
    });
  }
  
  function addUser() {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
  
    
    if (!nameInput.value || !emailInput.value) {
      alert('Please enter both name and email.');
      return;
    }
  
   
    const newUser = {
      id: users.length + 1,
      name: nameInput.value,
      email: emailInput.value,
    };
  
    users.push(newUser);
  
    
    displayUsers();
  
    
    nameInput.value = '';
    emailInput.value = '';
  }
  
  
  displayUsers();
  