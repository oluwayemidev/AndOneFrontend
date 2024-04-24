import React, { useEffect } from 'react'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'

function Home() {
  useEffect(() => {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    let listItemDom = document.querySelector('.carousel .list');
    let thumbnailDom = document.querySelector('.carousel .thumbnail');

    nextDom.onclick = function(){
        showSlider("next");
    }
    prevDom.onclick = function(){
        showSlider("prev");
    }
    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeout;
    let runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type){
        let itemSlider = document.querySelectorAll('.carousel .list .item');
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

        if(type === 'next'){
            listItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            carouselDom.classList.add('next');
        }else{
            let positionLastItem = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeout);
        runTimeout = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning)

        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(() => {
            nextDom.click()
        }, timeAutoNext);
    }
  });

  return (
    <div class="carousel">
                <div class="list">
                    <div class="item">
                        <img src={pic1} alt="" />
                        <div class="content">
                            <div class="author">OLUWAYEMI</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">PHOTOSHOP</div>
                            <div class="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repudiandae dolorum suscipit reiciendis facilis officia sit! Ab labore, laboriosam laudantium alias quo voluptates dolor ducimus? Ipsum delectus deserunt nostrum optio?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic2} alt="" />
                        <div class="content">
                            <div class="author">OLUWAYEMI</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">PHOTOSHOP</div>
                            <div class="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repudiandae dolorum suscipit reiciendis facilis officia sit! Ab labore, laboriosam laudantium alias quo voluptates dolor ducimus? Ipsum delectus deserunt nostrum optio?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic3} alt="" />
                        <div class="content">
                            <div class="author">OLUWAYEMI</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">PHOTOSHOP</div>
                            <div class="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repudiandae dolorum suscipit reiciendis facilis officia sit! Ab labore, laboriosam laudantium alias quo voluptates dolor ducimus? Ipsum delectus deserunt nostrum optio?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic4} alt="" />
                        <div class="content">
                            <div class="author">OLUWAYEMI</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">PHOTOSHOP</div>
                            <div class="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repudiandae dolorum suscipit reiciendis facilis officia sit! Ab labore, laboriosam laudantium alias quo voluptates dolor ducimus? Ipsum delectus deserunt nostrum optio?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="thumbnail">
                    <div class="item">
                        <img src={pic1} alt="" />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="des">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic2} alt="" />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="des">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic3} alt="" />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="des">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic4} alt="" />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="des">
                                Description
                            </div>
                        </div>
                    </div>
                </div>

                <div class="arrows">
                    <button id="prev"><ArrowLeft /></button>
                    <button id="next"><ArrowRight /></button>
                </div>
            <div class="time"></div>
        </div>
  )
}

export default Home
