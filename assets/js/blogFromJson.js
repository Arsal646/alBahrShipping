let blogData = []
let output = ""
fetch('assets/js/blog.json')
    .then(res => {
        return res.json()
    })
    .then(data => {

        blogData = data
        console.log(blogData)
        for (let blog of blogData) {
            console.log(blog)
            output += `
            <div class="col-lg-4 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <div class="blog-card">
                <div class="blog-img">
                    <a href=${blog.link}><img src=${blog.img} alt=${blog.alt_text}></a>
                </div>
                <div class="blog-text">
                    <h3>
                        <a href=${blog.link}>${blog.title}</a>
                    </h3>
                    <ul>
                        <li>
                            <i class="icofont-ui-calendar"></i>
                            ${blog.created_date}
                        </li>
                    </ul>
                    <p>${blog.des}</p>

                    <div class="blog-btn text-left">
                        <a href=${blog.link}>
                            <i class="icofont-rounded-double-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            `

            document.querySelector(".blogItems").innerHTML = output

        }
    })





