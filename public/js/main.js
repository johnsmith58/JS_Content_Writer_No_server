$(document).ready(function(){
    $.get('data/text.json', function (response) {
        var data = response
        console.log(data)
        //add user name
        $('.user_name').text(data.userInfo['name'])
        //add user about
        $('.user_about').text(data.userInfo['about'])
        //social
        $('.facebook_link').attr("href", data.userInfo.info.social.facebook) //facebook
        $('.instagram_link').attr("href", data.userInfo.info.social.instagram) //instagram
        $('.twitter_link').attr("href", data.userInfo.info.social.twitter) //twitter
        $('.linkedin_link').attr("href", data.userInfo.info.social.linkedin) //linkedin
        //add post
        var html = ''
        $.each(data.post, function (key, data) {
            var post = data
            html += `<div class="w-dyn-items">
                    <div class="w-dyn-item">
                        <div class="post-wrapper">
                            <div class="post-content">
                                <div class="w-row">
                                    <div class="w-col w-col-4 w-col-medium-4"><a
                                            class="blog-image w-inline-block"
                                            href="/posts/cafe-au-lait-turkish-doppio-ristretto"
                                            style="background-image: url('${post.scr_name}');"></a>
                                    </div>
                                    <div class="w-col w-col-8 w-col-medium-8"><a
                                            class="blog-title-link w-inline-block"
                                            href="/posts/cafe-au-lait-turkish-doppio-ristretto">
                                            <h2 class="blog-title">${post.title}</h2>
                                        </a>
                                        <div class="details-wrapper">
                                            <div class="post-info">${post.create_at}</div>
                                            <div class="post-info">|</div><a class="post-info when-link"
                                                href="/categories/art">${post.category_name}</a>
                                        </div>
                                        <div class="post-summary-wrapper">
                                            <p class="post-summary">${post.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        })
        $('#postContainer').append(html)
    })
})