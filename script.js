const adminUser = "nshella19";
const adminPass = "191108";

function login(){
  let u = username.value;
  let p = password.value;

  if(u===adminUser && p===adminPass){
    localStorage.setItem("role","admin");
    location="admin.html";
  } else {
    let users = JSON.parse(localStorage.getItem("users"))||[];
    let found = users.find(x=>x.nama===u && x.pass===p);

    if(found){
      localStorage.setItem("role","user");
      location="dashboard.html";
    } else alert("Login gagal");
  }
}

function showRegister(){
  register.style.display="block";
}

function register(){
  let user = {
    nama:nama.value,
    pass:nama.value+"2026"
  };

  let users = JSON.parse(localStorage.getItem("users"))||[];
  users.push(user);
  localStorage.setItem("users",JSON.stringify(users));

  alert("Akun dibuat!\nUsername:"+user.nama+"\nPass:"+user.pass);
}