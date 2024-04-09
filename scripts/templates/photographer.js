

function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, altname, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const para1 = document.createElement( 'p' )
        const para2 = document.createElement( 'span' )
        
        img.setAttribute("src", picture, altname)
        img.id = id;
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        para1.textContent = tagline;
        para2.textContent = price + "€/jour";


        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(para1);
        article.appendChild(para2);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}

