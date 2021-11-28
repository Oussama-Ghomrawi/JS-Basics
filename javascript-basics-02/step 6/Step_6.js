let a = document.querySelectorAll("img");
a.forEach((img,x)=>{
    img.onmouseover = function(){img.src = `images/image${x+1}_2.jpg`;
};
    img.onmouseout = function(){img.src = `images/image${x+1}.jpg` ;
};
}
);
//i did onmouseout in step 5 also.. i overdid it by mistake