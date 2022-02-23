console.log("We are making news website")
//intialise the news api parameter
let source='bbc-news';
let apikey='63f069deb6c7457e82630ad47c4c9e45'

//grab the news contianer
let newsAccordion =document.getElementById('newsAccordion')

//create a ajax get request
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,true);

//what to do when request is ready
xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        // console.log(articles);
        let newsHtml="";
        articles.forEach(function(element,index) {
            console.log(element,index);
            let news=`<div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                            <b class="bg-color">Breaking News: ${index+1} ---- </b> ${element["title"]}
                        </button>
                        </h2>
                        
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                        data-bs-parent="#newsAccordion">
                        
                        <img src=${element["urlToImage"]} class="img-fluid">
                        <div class="accordion-body">${element["description"]}. <a href=${element["url"]} target='_blank'> Read more here </a> </div>
                        </div>
                    </div>`
                newsHtml+=news
        
        });
        newsAccordion.innerHTML=newsHtml;
    }else{
        console.log("some error ocuured");
    }
}
xhr.send();
