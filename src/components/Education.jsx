export default function Education(){
    return(
        <section id="education">
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 text-center mb-4">
                   <span className="badge rounded-pill bg-info fs-6 px-4 py-2 shadow-lg">Education</span>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-12 col-md-4">
                    <div className="card h-100 w-100 shadow-lg card-hover">
                        <div className="card-body">
                            <h1 className="card-title fw-bold">Under graduation</h1>
                            <p className="card-text fw-semibold">B.Tech Final year - Computer Science and Engineering</p>
                            <p className="card-text fw-semibold">SR university, Warangal, Telangana, India</p>
                            <ul>
                                <li>CGPA : 6.162/10</li>
                                <li>No active backlogs</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card h-100 w-100 shadow-lg card-hover">
                        <div className="card-body">
                        <h1 className="card-title fw-bold">12th Standard</h1>
                        <p className="card-text fw-semibold">M.P.C - State Intermediate Board</p>
                        <p className="card-text fw-semibold">Resonance junior college, Warangal, Telangana, India</p>
                        <ul>
                            <li>Total marks : 862/1000</li>
                            <li>Regular passout</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card h-100 w-100 shadow-lg card-hover">
                        <div className="card-body">
                            <h1 className="card-title fw-bold">10th Standard</h1>
                            <p className="card-text fw-semibold">Core subjects - M.P.C.B</p>
                            <p className="card-text fw-semibold">Shine high school, Warangal, Telangana, India</p>
                            <ul>
                                <li>CGPA : 10/10</li>
                                <li>Regular passout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}