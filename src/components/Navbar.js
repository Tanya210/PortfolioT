import React from 'react'


const Navbar = () => {
  
  return (
    <>
    <div className="Navbar">
    <nav class="navbar navbar-expand-lg ">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><b>Tanya Popli</b></a>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><i class="fa fa-fw fa-home"></i><b>HOME</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about"><b>ABOUT</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skills"><b>SKILLS</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact"><i class="fa fa-fw fa-envelope"></i><b>CONTACT</b></a>
      </li>
    </ul>
  </div>
</nav>
</div>
</>
  )
}

export default Navbar;