import { Component, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import img1Src from "../img/1.jpeg";
import img2Src from "../img/2.jpeg";
import img3Src from "../img/3.jpeg";
import img4Src from "../img/4.jpeg";
import Scroll from '../../components/scroll';
import './index.scss'

function HomePage() {
    let s = null;

    useEffect(() => {
        s = new Scroll({
            eleID: "roulette-container-1",
            scrollID: "item-case-goods-1",
            // targetID: "roulette-container-1-open",
            pageSize: 3,
        })
    }, []);

    const onStart = () => {
        console.log("111", s)
        s.start(Math.floor(Math.random()*5)+1);

    }

    return (
        <div className='index'>
          <div className="roulette-container" id="roulette-container-1">
            <ul id="item-case-goods-1" className="item-case-goods">
                <li className="item-small-case restricted" data-id="1">
                    <img className="content-img" src={img1Src} alt="" />
                </li>
                <li className="item-small-case restricted" data-id="2">
                    <img className="content-img" src={img2Src} alt="" />
                </li>
                <li className="item-small-case restricted" data-id="3">
                    <img className="content-img" src={img3Src} alt="" />
                </li>
                <li className="item-small-case restricted" data-id="4">
                    <img className="content-img" src={img4Src} alt="" />
                </li>
            </ul>
          </div>
          <div>
              <Button className='start-btn' onClick={onStart}>开始</Button>
          </div>
        </div>
      )
}

export default HomePage