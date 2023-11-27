const Appetizer = () => {
    const appetizerContent = document.createElement('div');
    appetizerContent.setAttribute('class', 'container');
  
    const appetizerHeader = document.createElement('h1');
    appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    appetizerHeader.innerHTML = 'APPETIZER';

    /*const appetizergallery = document.createElement('flex-container');
    appetizergallery.setAttribute("flex", flex, background-color, DodgerBlue,)
  */
    const AppetizerImage1 = document.createElement('img');
    AppetizerImage1.src = '/imgs/dip.jpeg';
    AppetizerImage1.setAttribute("src", "/imgs/dip.jpeg")
    
    AppetizerImage1.alt = 'Persil DIP';
    
    appetizerContent.appendChild(AppetizerImage1);

    const AppetizerImage2 = document.createElement('img');
    AppetizerImage2.src = '/imgs/dumpling.jpeg';
    AppetizerImage2.setAttribute("src", "/imgs/dumpling.jpeg")
    
    AppetizerImage2.alt = 'Persil DIP';
    
    appetizerContent.appendChild(AppetizerImage2);
    
    const AppetizerImage3 = document.createElement('img');
    AppetizerImage3.src = '/imgs/hummus.jpeg';
    AppetizerImage3.setAttribute("src", "/imgs/hummus.jpeg")
    
    AppetizerImage3.alt = 'Persil DIP';
    
    appetizerContent.appendChild(AppetizerImage3);

    return appetizerContent;
};
export default Appetizer;
