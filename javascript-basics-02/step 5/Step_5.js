let a = document.querySelectorAll("img");
a.forEach((img,x)=>{
    img.onmouseover = function(){img.src = `images/image${x+1}_2.jpg`;
};
    img.onmouseout = function(){img.src = `images/image${x+1}.jpg` ;
};
}
);
//i spent 30min searching for the error.. it turns out we need to use ` instead of ' in the src *facepalm*
//update:its working now