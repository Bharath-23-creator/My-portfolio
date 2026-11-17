export default function Projects(){
    return(
        <section id="projects"><div className="container my-5">
            <div className="row">
                <div className="col-12 mb-4 text-center">
                    <div className="badge rounded-pill bg-info fs-6 px-4 py-2 shadow-lg">Projects</div>
                </div>
            </div>
            <div className="row gap-4 justify-content-center">
                <div className="col-12 col-md-4">
                <div className="border p-3 rounded-3 h-100 w-100 shadow-lg exp">BizCon – Built a responsive business directory 
                    using Tailwind CSS and Firebase with real-time data, 
                    instant search, and an admin dashboard. Deployed through a GitHub–Netlify CI/CD pipeline.</div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="border p-3 rounded-3 h-100 w-100 shadow-lg exp">Estores – E-Commerce Frontend – Developed a responsive e-commerce frontend application that provides a seamless online shopping experience through product browsing, searching, and an intuitive user interface.</div> 
                </div>
                <div className="col-12 col-md-4">
                    <div className="border p-3 rounded-3 h-100 w-100 shadow-lg exp">Personal Portfolio Website – Developed a 
                        fully responsive portfolio using React and Bootstrap to showcase my 
                        skills, education, experience, and projects. 
                        Designed a clean UI with modern components and deployed
                        the site for fast and seamless accessibility.</div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="border p-3 rounded-3 h-100 w-100 shadow-lg exp">Developed a full-stack Job Application Tracker to manage job applications, 
                        with features to add, update, delete, search, and filter applications by company, 
                        role, and status. Integrated a React.js frontend with Django REST APIs and MySQL for 
                        efficient data management.</div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="border p-3 rounded-3 h-100 w-100 shadow-lg exp">Meme Generator Web Application – 
                        Developed a Meme Generator web application that allows users to 
                        generate random memes and customize them with their own text, creating an interactive and engaging user experience.</div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="border p-3 rounded-3 h-100 w-100 shadow-lg exp">Built a full stack web app using React, Django, 
                        and MySQL that generates recipes from a user’s available ingredients with the Gemini API, 
                        and lets users save and manage their own recipes through secure, token-based login.</div>
                </div>
            </div>
            </div></section>
    )
}