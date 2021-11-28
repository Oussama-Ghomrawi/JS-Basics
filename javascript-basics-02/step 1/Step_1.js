var image= document.querySelector('img');
image.onmouseover =()=> {
    image.src="images/image1_2.jpg";
}
image.onmouseout =()=> {
    image.src="images/image1.jpg";
}