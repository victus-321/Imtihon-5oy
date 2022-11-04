import React from 'react';
import { NavLink } from 'react-router-dom';
const index = () => {
  return (
    <>
      
<div className="container">
  <section>
    <div>
      <ul className="section-ul">
        <li > <a>
         <NavLink to="/" className="section-ul-li2">
Overwiew
         </NavLink>
          </a> </li>
        <li>
          <a >
          <NavLink to="/repos" className="section-ul-li2">
             Repositories
            </NavLink></a>
            </li>
        <li className="section-ul-li3">Projects</li>
        <li className="section-ul-li4">Packages</li>
        <li className="section-ul-li5">Stars</li>
      </ul>
    </div>

  </section>
<div className="container">
  <p className='p-teg'>
    _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________
  </p>
</div>
  

  <aside>
    <div>
      <img src="https://avatars.githubusercontent.com/u/109217886?v=4" alt="" width="270px" className='images' />
      <p className='p-teg2'>
        victus-321
      </p>
      <div className='click'>
        Edit profile
      </div>
      <div className='follow'>
        <p>
          <a href="https://github.com/victus-321?tab=followers" className='followers'>0 followers</a>
        </p>
        <p>
          <a href="https://github.com/victus-321?tab=following" className='following'>1 following</a>
        </p>
      </div>
    </div>
  </aside>
  <h5 className='popular'>
    Popular repositories
  </h5>
  <div class="row">
<div class="col-sm-6">
<div class="card">
<div class="card-body1">
<h5 class="card-title"><a href="https://github.com/victus-321/first-name"  className='maket'> first-name</a></h5>
<p className='public'>
  public
</p>
  <p className='p-code'>

  </p>
  <p className='p-css'>
    css
  </p>
</div>
</div>
</div>
<div class="col-sm-6">
<div class="card">
<div class="card-body2">
<h5 class="card-title"><a href="https://github.com/victus-321/homework-7" className='maket'>homework-7</a> </h5>
<p className='public'>
  public
</p>
<p className='p-code'>

  </p>
  <p className='p-css'>
    css
  </p>
</div>
</div>
</div>

<div class="col-sm-6 mt-3">
<div class="card">
<div class="card-body3">
<h5 class="card-title"><a href="https://github.com/victus-321/imtihon_3"  className='maket'> imtihon-3</a></h5>
<p className='public'>
  public
</p>
<p className='p-code2'>

</p>
<p className='p-css2'>
HTML
</p>
</div>
</div>
</div>
<div class="col-sm-6 mt-3">
<div class="card">
<div class="card-body4">
<h5 class="card-title"><a href="https://github.com/victus-321/frontend"  className='maket'>frontend</a></h5>
<p className='public'>
  public
</p>
<p className='p-code'>

</p>
<p className='p-css'>
css
</p>
</div>
</div>
</div>

<div class="col-sm-6 mt-3">
<div class="card">
<div class="card-body5">
<h5 class="card-title"><a href="https://github.com/victus-321/homework-5"  className='maket'>homework-5</a></h5>
<p className='public'>
  public
</p>
<p className='p-code3'>

</p>
<p className='p-scss'>
scss
</p>
</div>
</div>
</div>
<div class="col-sm-6 mt-3">
<div class="card">
<div class="card-body6">
<h5 class="card-title"><a href="https://github.com/victus-321/homework-10"  className='maket'>homework-10</a></h5>

<p className='public'>
  public
</p>

<p className='p-code2'>

</p>
<p className='p-css2'>
HTML
</p>
</div>
</div>
</div>

</div>
</div>

    </>
  );
};

export default index;