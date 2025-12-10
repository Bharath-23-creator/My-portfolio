import React from 'react';


export default function Home() {
  return (
    <section id='home'>
     <div className="container-fluid d-flex">
          <div className='d-flex align-items-center gap-2 m-3'>
             <i className="fa-solid fa-blog fa-xl"></i>
             <h1 className="logo m-0 fs-4 fw-bold">Bharath Gajjela.</h1>
          </div>

      <nav className="navbar navbar-expand-lg ms-auto">
        <div className="container-fluid d-flex">
          <button 
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          ><span className='navbar-toggler-icon'></span></button>
         <div className="collapse navbar-collapse" id='navbarContent'>
            <div className="navbar-nav ">

            <a href="#home" className="nav-link">Home</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#connect" className="nav-link">Connect</a>

          </div>
         </div>
        </div>
      </nav>
     </div>
     <h1 className='role display-1 fw-light 1h-1'>Frontend <br/> Developer.</h1>
     <div className="container mt-3 me-4">
     <div className="row">
    <div className="col-md-12 d-flex justify-content-end">
      <img 
        src='./src/assets/Profile.jpg'
        className=" profile img-fluid shadow-lg"
        style={{ maxHeight:'350px',objectFit: "cover" }}
      />
    </div>
  </div>
</div>
    <div className="container text-end me-lg-5 me-md-3 me-2 mt-5">
      <div className="row">
        <div className="col fw-bold">
          <p>Hi,I'm Bharath Gajjela, <br/> A Frontend developer <br/> creating intutive digital <br/> experiences.</p>
        </div>
      </div>
    </div>
    </section>
  );
}
