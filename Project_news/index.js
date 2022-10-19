 fetch('https://gnews.io/api/v4/search?q=covid&max=10&lang=en&token=67199041df58f12728bd2c8d92c8c590')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        articles=data.articles;
        console.log(data);
        console.log(articles);
        let Newsaccordion= document.getElementById("News-accordion");
        let newsHTML="";
        articles.forEach( function(element ,index){
           let news=`
              <div class="col-12 col-md-6" data-aos="zoom-in">
                  <div class="card" >
                      <img src="${element["image"]}" class="card-img-top news-image" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${element["title"]}</h5>
                          <p class="card-text">${element["description"]}</p>
                      </div>
                
                      <div class="card-body">
                        <a href="${element["url"]} " target="_blank" class="card-link">Read more...</a>
                        
                      </div>
                  </div>
            </div>
         `;
          newsHTML+=news;
        });
        Newsaccordion.innerHTML=newsHTML;
    });
    
    //https://gnews.io/api/v3/search?q=coronavirus&max=100&token=10c6c254293575e30c56d63c0486776e

    
