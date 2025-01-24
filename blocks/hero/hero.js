export default async function decorate(block) {
  const row = block.firstElementChild;
//  const b2 = row.querySelector('h2');

  //block.append(b2);	
	
  const bg = row.querySelector('picture');
  const bgP = bg.closest('p');
  if (bgP) bgP.remove();	
  block.append(bg);

  row.classList.add('hero-body');
}
