import slideInfo from './slideInfo.js';
import {GrPrevious, GrNext} from "react-icons/gr";
import { useEffect, useState } from 'react';


export default function Banner() {
    let width = 0;
    let dragStart = 0;
    let dragEnd = 0;
    let isActive = false;
    let timer;

    const moveRight = () => {
        if(isActive) return;

        const target = document.querySelector(".slide__wrapper");
        const slides = target.querySelectorAll(".slide")
        isActive = true;
        clearInterval(timer);

        target.animate([
            {transform: `translateX(${-width}px)`}
        ],{
            duration: 300
        })
        setTimeout(()=>{
            target.style.transform = "translateX(0px)";
            slides[2].classList.add("active");
            target.append(slides[0]);
            isActive = false;
            timer = setInterval(()=>{
                moveRight();
            }, 3500)
        }, 300)
        slides.forEach(item=> item.classList.remove("active"));
    }

    const moveLeft = () => {
        if(isActive) return;

        isActive = true;
        const target = document.querySelector(".slide__wrapper");
        const slides = target.querySelectorAll(".slide")
        clearInterval(timer);

        target.animate([
            {transform: `translateX(${width}px)`}
        ],{
            duration: 300
        })
        setTimeout(()=>{
            target.style.transform = "translateX(0px)";
            target.prepend(slides[slides.length - 1]);
            slides[0].classList.add("active");
            isActive = false;
            timer = setInterval(()=>{
                moveRight();
            }, 3500)
        }, 300)
        slides.forEach(item=> item.classList.remove("active"));
    }
    
    const onDrag = e => {
        const target = document.querySelector(".slide__wrapper");
        const result = dragStart - e.clientX;
        clearInterval(timer);
        target.style.transform = `translateX(${-result}px)`
    }

    const onDragStart = e => {
        clearInterval(timer);
        dragStart = e.clientX;
    }

    const onDragEnd = e => {
        dragEnd = e.clientX;
        const result = dragStart - dragEnd;
        (result > 0) ? moveRight() : moveLeft();
    }

    useEffect(() => {
        const slideWrapper = document.querySelector(".slide__wrapper");
        const slides = slideWrapper.querySelectorAll(".slide");
    
        setSlideWidth();
        slideWrapper.prepend(slides[slides.length - 1]);
        slides[0].classList.add("active")
        timer = setInterval(()=>{
            moveRight();
        }, 3500)
    }, []);

    window.addEventListener("resize", setSlideWidth)

    function setSlideWidth(){
        const slideWidth = document.querySelector(".slide__frame").getBoundingClientRect().width;
        width = slideWidth;
    }

    return(
        <div className="slide__frame" onDragStart={onDragStart} onDrag={onDrag} onDragEnd={onDragEnd}>
            <div className="slide__wrapper">
                {
                    slideInfo.map((data, index) => {
                        return (
                            <div className="slide" key={index}>
                                <div className='imgBox'>
                                    <img src={data.img} alt={data.title} />
                                </div>
                                <div className='infoBox'>
                                    <div className='title'>{data.title}</div>
                                    <div className='desc'>{data.description}</div>
                                    <div className='rowLine' />
                                    <a href="*" className='linkButton'>????????????<GrNext /></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className='slideButton left' onClick={moveLeft}><GrPrevious /></button>
            <button className='slideButton right' onClick={moveRight}><GrNext /></button>
        </div>
    )
}