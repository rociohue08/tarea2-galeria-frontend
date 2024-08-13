const imagenes = document.querySelectorAll ('.contenedorImagen img');


imagenes.forEach(imagen => {
    imagen.addEventListener('mouseover', () => {
        imagen.style.transform = 'scale(1.3)';
        imagen.style.transition = 'transform 0.2s ease';


}); 


imagen.addEventListener('mouseout',() =>{
    imagen.style.transform = 'scale(1)';
});
});