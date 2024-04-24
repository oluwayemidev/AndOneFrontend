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
                            <div class="author">Expertise You Can Trust</div>
                            <div class="title">Your Partner in Sustainable </div>
                            <div class="topic">Energy Solutions</div>
                            <div class="des">
                            Choosing solar is a big decision, and we're here to guide you every step of the way. Our team of experts will work closely with you to design, install, and maintain a customized solar solution that meets your unique needs. With our commitment to quality and customer satisfaction, you can trust us to deliver excellence in sustainable energy.
                            </div>
                            <div class="buttons">
                                <button>EXPLORE</button>
                                <button>PRODUCTS</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic2} alt="" />
                        <div class="content">
                            <div class="author">Transforming Lives, One Panel at a Time</div>
                            <div class="title">Empowering Communities with</div>
                            <div class="topic">Solar Energy</div>
                            <div class="des">
                              Our commitment extends beyond just providing solar panels. We believe in empowering communities by democratizing access to clean energy. From rural villages to urban neighborhoods, we're lighting up lives and paving the way towards a more sustainable tomorrow.
                            </div>
                            <div class="buttons">
                                <button>EXPLORE</button>
                                <button>PRODUCTS</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic3} alt="" />
                        <div class="content">
                            <div class="author">Experience Clean Energy Solutions</div>
                            <div class="title">Harnessing the Power</div>
                            <div class="topic">of the Sun</div>
                            <div class="des">
                              Join the solar revolution and power your home or business with renewable energy. Our solar solutions offer reliability, sustainability, and substantial savings on your energy bills. Say goodbye to fossil fuels and hello to a brighter, greener future with our tailored solar systems.
                            </div>
                            <div class="buttons">
                                <button>EXPLORE</button>
                                <button>PRODUCTS</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={pic4} alt="" />
                        <div class="content">
                            <div class="author">Leading the Way in Solar Technology</div>
                            <div class="title">Innovative Solar Solutions</div>
                            <div class="topic">for a Brighter Tomorrow</div>
                            <div class="des">
                              Innovation drives us forward. With cutting-edge solar technology and a passion for sustainability, we're continuously pushing boundaries to deliver the most efficient and reliable solar solutions. From smart energy management to advanced panel designs, we're shaping the future of solar energy.
                            </div>
                            <div class="buttons">
                                <button>EXPLORE</button>
                                <button>PRODUCTS</button>
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
