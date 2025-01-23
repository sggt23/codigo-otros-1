const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const name = document.getElementById('name');
const blog= document.getElementById('blog');
const locacion= document.getElementById('location');
//Se reescriben las constante para mejor lectura del codigo
//  y se cambian los querySelector por getElement para que traiga mayor precisión

console.log(name);
console.log(blog);
console.log(locacion);


//
function displayUser(username) {
  fetch(baseEndpoint).then((response) =>{
    name.textContent='cargando...'
  })
  name.textContent = 'cargando...';
  const response =  fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  name.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  locacion.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);