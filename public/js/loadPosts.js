async function getFeed() {
    try {
        let api_url = "https://pedro-braghin-portfolio.herokuapp.com/feed/instagram-feed/";
        let api_data = await fetch(api_url);
        let content = '';
        api_data = await api_data.json();

        for(let i = 0; i < api_data.length; i++) {

            let post = api_data[i];
            let post_title ;
            let post_type = post.media_type;


            if(post.caption !== null) {
                post_title = post.caption;
                post_title = post.caption;
            } else {
                post_title = "Publicação: " + (i + 1)
            }

            if(post_type === 'IMAGE' || post_type === 'CAROUSEL_ALBUM') {
                content += `<div class="instagram-post"><img src="${post.media_url}" title="${post_title}" alt="${post_title}" onclick="window.open('${post.permalink}')"></div>`;
            } 
        }
        addFeed(content);
    } catch(err) {
        console.log(err);
    }
}

getFeed();

function addFeed(posts){
    document.getElementById("instagram-feed").innerHTML = posts;
}

