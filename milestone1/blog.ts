type Blog  = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Who Is Hack4Impact",
        date: "10/23/2023",
        description: "An introduction to our club",
        slug: "h4iblog.html"
    },
    {
        title: "Your First Code",
        date: "10/23/2023",
        description: "How to write your first line of code",
        slug: "firstcodeblog.html"
    }
];

function addBlog(b: Blog) {
    const parent = document.createElement('div')

    const title = document.createElement('h3')
    title.innerHTML = b.title
    title.className = "page-title"
    parent.appendChild(title)

    const desc = document.createElement('a')
    desc.innerHTML = b.description
    desc.href = b.slug
    desc.className = "about-text"
    parent.appendChild(desc)

    const date = document.createElement('div')
    date.innerHTML = b.date
    date.className = "about-text"
    parent.appendChild(date)
    
    document.getElementsByClassName("bloglist")[0].appendChild(parent)
}

blogs.forEach(function (blog){
    addBlog(blog)
})