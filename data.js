const endPoint = "https://jsonplaceholder.typicode.com/users/"
// console.log(fetch(endPoint))
fetch(endPoint)
  .then((result) => result.json())
  .then((data) =>{
    let dataTable = `<thead>
    <tr id="tableList">
    <th class="id">ID</th>
    <th class="name">Name</th>
    <th class="username">Username</th>
    <th class="email">Email</th>
    <th class="address">Address</th>
    <th class="phone">Phone</th>
    <th class="website">Website</th>
    <th class="company">Company</th>
</tr></thead>
<tbody>`

    data.forEach(element => {
    // console.log(element)
    dataTable+=`<tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.username}</td>
    <td>${element.email}</td>
    <td>${element.address.street},${element.address.city}</td>
    <td>${element.phone}</td>
    <td>${element.website}</td>
    <td>${element.company.name}</td>
</tr>` ;

   });
   dataTable+='</tbody>'
console.log(dataTable)
   document.getElementById('user').innerHTML=dataTable
   
})
  