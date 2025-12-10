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
                    <div className="border p-3 rounded-3 h-100 w-100 shadow-lg exp">Exide Store Webpage – Designed and developed a 
                    fully functional e-commerce frontend using React.js 
                   and Vite with responsive UI components. 
                   Deployed the project on Vercel for seamless accessibility and 
                   performance.</div> 
                </div>
                <div className="col-12 col-md-4">
                    <div className="border p-3 rounded-3 h-100 w-100 shadow-lg exp">Personal Portfolio Website – Developed a 
                        fully responsive portfolio using React and Bootstrap to showcase my 
                        skills, education, experience, and projects. 
                        Designed a clean UI with modern components and deployed
                        the site for fast and seamless accessibility.</div>
                </div>
            </div>
            </div></section>
    )
}