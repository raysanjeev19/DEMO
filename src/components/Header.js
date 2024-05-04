// import React, { useState } from "react";

// const Header = ({ toggleDarkMode, darkMode }) => {
//     const [showInput,setShowInput]=useState(false)
//     const [showDropdown, setShowDropdown] = useState("");

//     const toggleDropdown = (item) => {
//         setShowDropdown(item);
//       };
    
//       const bgColorClass = darkMode ? "bg-dark" : "bg-light";
//       const hideDropdown = () => {
//         setShowDropdown("");
//       };
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${bgColorClass}`}>     <div class="container-fluid">
//         {/* <!-- Icon on the left --> */}
//         <span class="navbar-brand"  >
//         <svg xmlns="http://www.w3.org/2000/svg" width="64" height="54" fill="currentColor" class="bi bi-cloud-haze-fill" viewBox="0 0 16 16">
//   <path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>
// </svg>
//         </span> 
//         {/* <span style={{color:'wheat',fontSize:25}} > Joho Books </span> */}
//         {/* <!-- Navbar links and form --> */}
//         <div
//           class="collapse navbar-collapse justify-content-end"
//           id="navbarSupportedContent"
//         >
//           <ul class="navbar-nav mb-2 mb-lg-0">
//             <li class="nav-item" 
//                  onMouseEnter={() => toggleDropdown("Home")}
//                  onMouseLeave={hideDropdown}
//             >
//               <a class="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//               {showDropdown==="Home" && (
//                 <div className="dropdown-menu" style={{ display: "block" }}>
//                   <a className="dropdown-item" href="#">
//                     Home 1
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     Home 2
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     Home 3
//                   </a>
//                 </div>
//               )}
//             </li>
            // <li class="nav-item"
            //      onMouseEnter={() => toggleDropdown("About")}
            //      onMouseLeave={hideDropdown}
            // >
            //   <a class="nav-link active" aria-current="page" href="#">
            //     About us 
            //   </a>
            //   {showDropdown==="About" && (
            //     <div className="dropdown-menu" style={{ display: "block" }}>
            //       <a className="dropdown-item" href="#">
            //         About 1
            //       </a>
            //       <a className="dropdown-item" href="#">
            //         About 2
            //       </a>
            //       <a className="dropdown-item" href="#">
            //         About 3
            //       </a>
            //     </div>
            //   )}
            // </li>
//             <li class="nav-item" 
//                  onMouseEnter={() => toggleDropdown("Service")}
//                  onMouseLeave={hideDropdown}
//             >
//               <a class="nav-link active" aria-current="page" href="#">
//                 Service
//               </a>
//               {showDropdown==="Service" && (
//                 <div className="dropdown-menu" style={{ display: "block" }}>
//                   <a className="dropdown-item" href="#">
//                     Service
//                   </a>
//                   <a className="dropdown-item" href="#">
//                    Service Details
//                   </a>
//                 </div>
//               )}
//             </li>
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Other Page 
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Project
//               </a>
//             </li>
//             {/* <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Shop
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Glob
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Contact
//               </a>
//             </li> */}
//           </ul>
//           <form class="d-flex" role="search">
//            { showInput && <input
//               class="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             /> }
//             <button onClick={(e)=>{e.preventDefault();setShowInput(prevState=>!prevState)}} className="btn btn-primary"   type="submit" data-toggle="drawer" data-target="#drawer-1">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
// </svg>
//             </button>
//             <button onClick={toggleDarkMode} className="btn btn-primary" type="button">
//         {darkMode ? "Light Mode" : "Dark Mode"}
//       </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;


import React, { useState } from "react";
import image from "../anand_oil_image-transformed.jpeg"

const Header = ({ toggleDarkMode, darkMode }) => {
    const [showInput, setShowInput] = useState(false);
    const [showDropdown, setShowDropdown] = useState("");

    const toggleDropdown = (item) => {
        setShowDropdown(item);
    };
    
    const bgColorClass = darkMode ? "bg-dark" : "bg-light";
    const textColorClass = darkMode ? "text-light" : "text-dark";
    const hideDropdown = () => {
        setShowDropdown("");
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${bgColorClass} container`}>
            <div className="container-fluid">
                {/* Icon on the left */}
                <span className="navbar-brand">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="64" height="54" fill="currentColor" className={`bi bi-cloud-haze-fill ${textColorClass}`} viewBox="0 0 16 16">
                        <path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"/>
                    </svg> */}
                    <img src={image} style={{width:200}} />
                </span> 
                {/* Navbar links and form */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item" 
                            onMouseEnter={() => toggleDropdown("Home")}
                            onMouseLeave={hideDropdown}
                        >
                            <a className={`nav-link active ${textColorClass}`} aria-current="page" href="#">
                                Home
                            </a>
                            {showDropdown==="Home" && (
                                <div className="dropdown-menu" style={{ display: "block" }}>
                                    <a className="dropdown-item" href="#">
                                        Home 1
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Home 2
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Home 3
                                    </a>
                                </div>
                            )}
                        </li>
                        <li class="nav-item"
                 onMouseEnter={() => toggleDropdown("About")}
                 onMouseLeave={hideDropdown}
            >
              <a className={`nav-link active ${textColorClass}`} aria-current="page" href="#">
                About us 
              </a>
              {showDropdown==="About" && (
                <div className="dropdown-menu" style={{ display: "block" }}>
                  <a className="dropdown-item" href="#">
                    About 1
                  </a>
                  <a className="dropdown-item" href="#">
                    About 2
                  </a>
                  <a className="dropdown-item" href="#">
                    About 3
                  </a>
                </div>
              )}
            </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        { showInput && <input
                            className={`form-control me-2 ${textColorClass}`}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        /> }
                        <button onClick={(e)=>{e.preventDefault();setShowInput(prevState=>!prevState)}} className="btn btn-primary"   type="submit" data-toggle="drawer" data-target="#drawer-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-search ${textColorClass}`} viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                        <button onClick={toggleDarkMode} className="btn btn-primary" type="button">
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </button> */}
                    {/* </form> */}
                    <form className="d-flex" role="search">
    {showInput && (
        <input
            className={`form-control me-2 ${textColorClass}`}
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "200px" }} // Adjust the width as needed
        />
    )}
    <button
        onClick={(e) => {
            e.preventDefault();
            setShowInput((prevState) => !prevState);
        }}
        className={`btn ${!darkMode ? 'btn-light' : 'btn-dark'}`}
        type="submit"
        data-toggle="drawer"
        data-target="#drawer-1"
        style={{ minWidth: "40px" }} // Adjust the width as needed
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-search ${textColorClass}`}
            viewBox="0 0 16 16"
        >
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            />
        </svg>
    </button>
    {/* <button
        onClick={toggleDarkMode}
        className="btn btn-primary"
        type="button"
        style={{ minWidth: "100px" }} // Adjust the width as needed
    >
        {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg> : 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
</svg>
}
    </button> */}

<button
    onClick={toggleDarkMode}
    className={`btn ${!darkMode ? 'btn-light' : 'btn-dark'}`}
    type="button"
    style={{ minWidth: "50px" }} // Adjust the width as needed
>
    {darkMode ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-brightness-high-fill"
            viewBox="0 0 16 16"
        >
            <path
                d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
            />
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-moon"
            viewBox="0 0 16 16"
        >
            <path
                d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"
            />
        </svg>
    )}
    {/* {darkMode ? " Light Mode" : " Dark Mode"} */}
</button>

</form>

                </div>
            </div>
        </nav>
    );
};

export default Header;
