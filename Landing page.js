var v=document.querySelectorAll('.cta-button');

  for(var i=0;i<v.length;i++)
  {
    v[i].addEventListener('click', function() {
      alert('Button clicked!');
    });
  }