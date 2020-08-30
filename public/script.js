//The component that displays a single blog post
Vue.component('blog-post', {
    props: ['blogdata'],
    template: "<div class='row'><div class='col-12 mb-5 mt-5'><p class = 'display-4 text-white'>{{blogdata.title}}</p><p class = 'h3 font-weight-light text-white-50 text-right mb-4'>{{blogdata.date}}</p><p class = 'h4 font-weight-normal text-monospace text-white'>{{blogdata.content}}</p></div></div>"
})

document.addEventListener('DOMContentLoaded',(event) => {
    //code sending a get request from the server to retrieve all blogs
    let blogData;

    async function getBlogData(){
        try {
            const res = await fetch('/getBlogs')
            const data = await res.json()
            blogData = data
        } catch (err) {
            console.log(err)
        }
    } 

    //using blog data for vue to render it on the webpage
    getBlogData()
        .then(() => {
            if (blogData[0] != undefined){
                var app = new Vue({
                    el: '#app',
                    data: {
                        blogposts: blogData
                    }
                })
            //in case server returns an empty blog list
            } else {
                $('.alertMessage').append('<div class="row">'+
                '<div class="col-12 mt-3">' + 
                    '<div class="alert alert-warning text-center"' +  'role="alert">Unable to load blogs!</div>' +
                '</div>' + 
            '</div>)')
            }
    })

    
})
  