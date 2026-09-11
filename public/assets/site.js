const toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
const details={
  'dulce-mezcla':{title:'Dulce Mezcla',image:'dulce-mezcla-box.webp',text:'Un juego de cartas delicioso para crear recetas, combinar dulces y sorprender a tus rivales. Entra en una cocina llena de personajes y pequeños detalles, donde cada combinación puede cambiar la partida.'},
  alicia:{title:'Alicia’s Tea Garden',image:'alicias-tea-garden-box.webp',text:'Estrategia, fantasía y un mundo lleno de personajes encantadores. Una invitación a compartir la mesa de té de Alicia y descubrir un jardín de historias a través de las cartas.'},
  chapuzon:{title:'Chapuzón',image:'chapuzon-box.webp',text:'Un juego rápido de cartas lleno de acción y diversión. Su caja compacta está pensada para acompañar los planes de piscina, playa y verano.'},
  diario:{title:'Diario del estudio',text:'Aquí compartiremos los bocetos, las pruebas y los pequeños cambios que dan forma a nuestros juegos. Estamos preparando las primeras entradas. Mientras tanto, puedes conocer nuestros cuatro pasos creativos en la sección Nuestro proceso.'}
};
const dialog=document.querySelector('#detail-dialog');
document.querySelectorAll('[data-dialog]').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();
  const detail=details[link.dataset.dialog];
  const content=document.querySelector('#dialog-content');
  content.replaceChildren();
  if(detail.image){const image=document.createElement('img');image.src='/assets/images/'+detail.image;image.alt='Caja de '+detail.title;content.append(image);}
  const title=document.createElement('h2');title.id='dialog-title';title.textContent=detail.title;content.append(title);
  const text=document.createElement('p');text.textContent=detail.text;content.append(text);
  const contact=document.createElement('a');contact.href='mailto:hola@qwaiistudio.com';contact.className='button';contact.textContent='Escríbenos para saber más →';content.append(contact);
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}});
