var res=fetch("https://jsonplaceholder.typicode.com/posts");
res.then((data)=>data.json())
.then((data1)=>foo(data1));
function foo(data1){
    for(var i=0; i<10;i++){
    console.log(i,data1[i]);
      var div=document.createElement("div");
      div.style.color="green";
      div.style.fontSize="32px";
      div.innerHTML=`<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${i}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data1[i].id},${data1[i].type},${data1[i].sum}</h6>
      </div>
      </div>`;
    document.body.append(div);
    }

}

