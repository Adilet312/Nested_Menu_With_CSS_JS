import "./css/Header.css";
let menu = function(){
  let header = document.createElement('header');

  header.className = "menu-header";




  /*Nav*/

  let nav = document.createElement('nav');

  nav.className = "menu-nav";


  /*ul*/

  let ul = document.createElement('ul');

  ul.className = "menu-ul";

  for(let index = 0; index < 4; index++){

    let li = document.createElement('li');

    let a = document.createElement('a');

    switch(index){

    case 0:

      a.innerText = "About Us";

      li.id = `${index}`;

      li.appendChild(a);

      ul.appendChild(li);

      break;

    case 1:

      a.innerText = "Courses";

      li.id = `${index}`;

      li.appendChild(a);
      let ul_inner = document.createElement('ul');
      for(let idx = 0; idx < 3; idx++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = "#"; a.innerText="Java"+`${idx+1}`;
        li.appendChild(a);
        ul_inner.appendChild(li);
      }
      li.appendChild(ul_inner);
      ul.appendChild(li);

      break;

    case 2:

      a.innerText = "Design Courses";

      li.id = `${index}`;

      li.appendChild(a);
      let ul_inner2 = document.createElement('ul');
      for(let idx = 0; idx < 3; idx++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        let languages = ["Java","C#","C++","JS","Python"];
        let index = Math.floor(Math.random()*languages.length);
        a.href = "#"; a.innerText=`${languages[index]}`;
        li.appendChild(a);
        ul_inner2.appendChild(li);
      }
      li.appendChild(ul_inner2);
      ul.appendChild(li);

      break;

    case 3:

      a.innerText = "Contact Us";

      li.id = `${index}`;

      li.appendChild(a);

      ul.appendChild(li);

    }



  }
  /*Logo */
  let logo = document.createElement('a');

  logo.innerText = "Seytech";

  logo.className = "menu-logo";
  /*search input*/
 let input = document.createElement('input');
 input.type="text";
 input.placeholder = "search";

  nav.appendChild(logo);
  nav.appendChild(ul);
  nav.appendChild(input);
  header.appendChild(nav);
  document.body.appendChild(header);
}
menu();
