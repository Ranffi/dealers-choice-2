import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
						{/* <a className="navbar-brand" href="#">Navbar</a> */}
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li>
									<Link to='/'> Home </Link>
								</li>
							</ul>
						</div>
					</nav>

					<section id="header" className=" text-center" >
						<img src='find-a-career-650.png' className="display-3" />
						<p><Link to='/jobs'> View All Jobs Here! </Link></p>

						<hr />
					</section>
        </>
    )

}
export default HomePage

