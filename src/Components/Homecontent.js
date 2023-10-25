import React from 'react';
import './homecontent12.css';
import codingimg from './club-images/coding.jpg' ;
import webdev from './club-images/development.jpg' ;
import hacking from './club-images/hacking.jpg' ;
import literary from './club-images/literary club.jpg' ;
import mediaandpub from './club-images/mediaandpublicaitons.jpg' ;
import ml from './club-images/ml.jpg' ;
import photog from './club-images/photography.jpg' ;
import theatre from './club-images/theatreandarts.jpg' ;

const search_club = ()=>{
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('card');

  for (var i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
};
const Homecontent =()=>{

  return (

    <main>
      <div className="content">
        <div className="search">
          <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input id="searchbar" onkeyup={search_club} type="text" name="search" placeholder="Search clubs..." />
        </div>
        <ol id="list">
          <div className="cards">
            <div className="card">
              <img className="card__image" src={codingimg} alt="" />
              <div className="card__content">
                <h1>Coding</h1>
                <p>
                  Learning-Programming-Simplifying
                </p>
              </div>
              <div className="card__info">
                <div>
                  <button type="button" className="btn"><a href="" className="card__link">View More</a></button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card__image" src={photog} alt="" />
              <div className="card__content">
                <h1>Photography</h1>
                <p>
                  Reach Out The Imagination
                </p>
              </div>
              <div className="card__info">
                <div>
                  <div>
                    <button type="button" className="btn"><a href="./" className="card__link">View More</a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card__image" src={hacking} alt="" />
              <div className="card__content">
                <h1>Hacking</h1>
                <p>
                  One single vulnerability all an attacker needs
                </p>
              </div>
              <div className="card__info">
                <div>
                  <button type="button" className="btn"><a href="./" className="card__link">View More</a></button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card__image" src={literary} alt="" />
              <div className="card__content">
                <h1>Literary</h1>
                <p>
                  This is a tag-line
                </p>
              </div>
              <div className="card__info">
                <div>
                  <button type="button" className="btn"><a href="./" className="card__link">View More</a></button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card__image" src="" alt="" />
              <div className="card__content">
                <h1>Data Science</h1>
                <p>
                  The world is one big data problem
                </p>
              </div>
              <div className="card__info">
                <div>
                  <button type="button" className="btn"><a href="./" className="card__link">View More</a></button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card__image" src="" alt="" />
              <div className="card__content">
                <h1>Artificial Intelligence</h1>
                <p>
                  The future has arrived
                </p>
              </div>
              <div className="card__info">
                <div>
                  <button type="button" className="btn"><a href="./" className="card__link">View More</a></button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card__image" src={ml} alt="" />
              <div className="card__content">
                <h1>Machine Learning</h1>
                <p>
                  Catalyzing innovation
                </p>
              </div>
              <div className="card__info">
                <div>
                  <button type="button" className="btn"><a href="./" className="card__link">View More</a></button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card__image" src={theatre} alt="" />
              <div className="card__content">
                <h1>Theatre And Arts</h1>
                <p>
                  We save the drama for the stage
                </p>
              </div>
              <div className="card__info">
                <div>
                  <button type="button" className="btn"><a href="./" className="card__link">View More</a></button>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="card__image" src={mediaandpub} alt="" />
              <div className="card__content">
                <h1>Media and Publications</h1>
                <p>
                  create-explore-expand-conquer
                </p>
              </div>
              <div className="card__info">
                <div>
                  <button type="button" className="btn"><a href="./" className="card__link">View More</a></button>
                </div>
              </div>
            </div>
          </div>{/* .content */}
        </ol>
        <div className="clear" />
      </div></main>
  );
}
  export default Homecontent;
// import codings from './public/homeimages/coding.jpg';
// const Homecontent =()=> {
//     const styles={
//         fotu1:{
//             // backgroundImage : 'coding',
//             width:"100%",
//         },
//         fotu2:{
//             backgroundImage : '/public/homeimages/coding.jpg',
//             width:"100%",
//         },
//         fotu3:{
//             backgroundImage : '/public/homeimages/coding.jpg',
//             width:"100%",
//         },
//         fotu4:{
//             backgroundImage : '/public/homeimages/coding.jpg',
//             width:"100%",
//         },
//         fotu5:{
//             backgroundImage : '/public/homeimages/coding.jpg',
//             width:"100%",
//         },
//         fotu6:{
//             backgroundImage : '/public/homeimages/coding.jpg',
//             width:"100%",
//         },
//         fotu7:{
//             backgroundImage : '/public/homeimages/coding.jpg',
//             width:"100%",
//         },
//     }
//     return(
//         <main>
          
//             <div class="content">
//                 <div class="slideshow-container">
//                 {/* Full-width images with number and caption text --> */}
//                     <div class="mySlides fade">
//                         <div class="numbertext">1 / 7</div>
//                         <fotu1 style = {styles.fotu1}></fotu1>
//                         <img className="fotu1" src={require("./coding.jpg")} alt={"Carlie Anglemire"}/>
//                         {/* <img class="fotu" src="photography.jpg" style="width:100%"/> */}
//                         <div class="text">Reach Out The Imagination</div>
//                     </div>

//                     <div class="mySlides fade">
//                         <div class="numbertext">2 / 7</div>
//                         {/* <fotu2 style = {styles.fotu2}></fotu2> */}
//                         {/* <img class="fotu" src="coding.jpg" style="width:100%"> */}
//                         <div class="text">Learning-Programming-Simplifying </div>
//                     </div>

//                     <div class="mySlides fade">
//                         <div class="numbertext">3 / 7</div>
//                         {/* <fotu3 style = {styles.fotu3}></fotu3> */}
//                         {/* <img class="fotu"  src="theatreandarts.jpg" style="width:100%"> */}
//                         <div class="text">We save the drama for the stage  </div>
//                     </div>

//                     <div class="mySlides fade">
//                         <div class="numbertext">4 / 7</div>
//                         {/* <fotu4 style = {styles.fotu4}></fotu4> */}
//                         {/* <img class="fotu"  src="ml.jpg" style="width:100%"> */}
//                         <div class="text">Catalyzing innovation</div>
//                     </div>

//                     <div class="mySlides fade">
//                         <div class="numbertext">5 / 7</div>
//                         {/* <fotu5 style = {styles.fotu5}></fotu5> */}
//                         {/* <img  class="fotu"  src="ai.jpg" style="width:100%"> */}
//                         <div class="text">The future has arrived</div>
//                     </div>

//                     <div class="mySlides fade">
//                         <div class="numbertext">6 / 7</div>
//                         {/* <fotu6 style = {styles.fotu6}></fotu6> */}
//                         {/* <img class="fotu"  src="data science.jpg" style="width:100%"> */}
//                         <div class="text">The world is one big data problem</div>
//                     </div>

//                     <div class="mySlides fade">
//                         <div class="numbertext">7 / 7</div>
//                         {/* <fotu7 style = {styles.fotu7}></fotu7> */}
//                         {/* <img  class="fotu"  src="college.jpg" style="width:100%"> */}
//                         <div class="text">Oriental Institute Of Science And Technology</div>
//                     </div>

//                 </div>


{/*
                <div class="cards">
                    <div class="card">
                        <img class="card__image" src="coding.jpg" alt="">
                        <div class="card__content">
                            <h1>Coding</h1>
                            <p>Learning-Programming-Simplifying </p>
                        </div>
                        <div class="card__info">
                            <div>
              <                 button type="button" class="btn"><a href="Coding.html" class="card__link" >View More</a></button>
                            </div>
                        </div>
                    </div>

        
                    <div class="card">
                        <img class="card__image" src="photography.jpg" alt="">
                        <div class="card__content">
            <h1>Photography</h1>
            <p>
              Reach Out The Imagination
            </p>
           
          </div>
          <div class="card__info">
            <div>
              <div>
                <button type="button" class="btn"><a href="index.html" class="card__link" >View More</a></button>
             </div>
           </div>
          
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="hacking.jpg" alt="">
          <div class="card__content">
            <h1>Hacking</h1>
            <p>
              One single vulnerability all an attacker needs
            </p>
            
          </div>
          <div class="card__info">
           
            <div>
               <button type="button" class="btn"><a href="index.html" class="card__link" >View More</a></button>
            </div>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="literary club.jpg" alt="">
          <div class="card__content">
            <h1>Literary</h1>
            <p>
              This is a tag-line
            </p>
         
          </div>
          <div class="card__info">
           
            <div>
               <button type="button" class="btn"><a href="index.html" class="card__link" >View More</a></button>
            </div>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="data science.jpg" alt="">
          <div class="card__content">
            <h1>Data Science</h1>
            <p>
              The world is one big data problem
            </p>
          
          </div>
          <div class="card__info">
           
            <div>
               <button type="button" class="btn"><a href="index.html" class="card__link" >View More</a></button>
            </div>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="ai.jpg" alt="">
          <div class="card__content">
            <h1>Artificial Intelligence</h1>
            <p>
              The future has arrived
            </p>
 
          </div>
          <div class="card__info">
           
            <div>
               <button type="button" class="btn"><a href="index.html" class="card__link" >View More</a></button>
            </div>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="ml.jpg" alt="">
          <div class="card__content">
            <h1>Machine Learning</h1>
            <p>
              Catalyzing innovation
        </p>
    
          </div>
          <div class="card__info">
           
            <div>
               <button type="button" class="btn"><a href="index.html" class="card__link" >View More</a></button>
            </div>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="theatreandarts.jpg" alt="">
          <div class="card__content">
            <h1>Theatre And Arts</h1>
            <p>
             We save the drama for the stage  
            </p>
        
          </div>
          <div class="card__info">
           
            <div>
               <button type="button" class="btn"><a href="index.html" class="card__link" >View More</a></button>
            </div>
          </div>
        </div>

        <div class="card">
          <img class="card__image" src="mediaandpublicaitons.jpg" alt="">
          <div class="card__content">
            <h1>Media and Publications</h1>
            <p>
              create-explore-expand-conquer
            </p>
         
          </div>
          <div class="card__info">
           
            <div>
               <button type="button" class="btn"><a href="index.html" class="card__link" >View More</a></button>
            </div>
          </div>
        </div>
        
        


    */}

    