document.getElementById("header").innerHTML =
   `<link rel="stylesheet" href="styles.css">


<header class="dark">
<!-- navigation -->

<div class="container-fluid navigation-bg">
<div class="container">
<nav class="navbar navbar-expand-lg navigation-bg">
<div class="container-fluid">
 <div class="mx-4">
 <img src="images/logo.webp" alt="" srcset="" />
 </div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarScroll"
    aria-controls="navbarScroll"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse ml-4" id="navbarScroll">
    <ul
      class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
      style="--bs-scroll-height: 100px"
    >
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html"
          >Home</a
        >
      </li>
    
  <li class="nav-item dropdown">
          <a  href="product.html"
          id="navbarDropdown" role="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">
          Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div >
          <h6 class="sub-menu-head">Product Categories </h6>
            <li><a class="dropdown-item" href="#">Face</a></li>
            <li><a class="dropdown-item" href="#">Eyes</a></li>
            <li><a class="dropdown-item" href="#">Eyebrows</a></li>
            <li><a class="dropdown-item" href="#">Lips</a></li>
          </div>
           <div>
           <h5 class="sub-menu-head">Face</h5>
           <li><a class="dropdown-item" href="#"> lipsticks</a></li>
           <li><a class="dropdown-item" href="#"> EyeShadows</a></li>
           <li><a class="dropdown-item" href="#"> Eyebrows</a></li>
           <li><a class="dropdown-item" href="#"> Blush</a></li>
           </div>
          </ul>
        </li>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="AboutUs.html">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="cart.html">Cart</a>
      </li>
      <li class="nav-item">
      <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search Product"
        aria-label="Search"
      />
      <button class="btn btn-color btn-outline-dark" type="submit">
        Search
      </button>
      
      
    </form>
    </li>
    </ul>
   
  </div>
</div>
</nav>
    </div>
</div> 
</header>
 
` 