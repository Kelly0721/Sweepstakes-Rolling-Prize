import { Component, useEffect } from 'react';
import { View, Text, Image } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import img1Src from "../img/1.jpeg";
import img2Src from "../img/2.jpeg";
import img3Src from "../img/3.jpeg";
import img4Src from "../img/4.jpeg";
import Scroll from '../../components/scroll';
import './index.scss'

function ScrollPage() {
    let s = null;

    useEffect(() => {
        s = new Scroll({
            eleID: "roulette-container-1",
            scrollID: "item-case-goods-1",
            itemId: "item-small-case",
            // targetID: "roulette-container-1-open",
            pageSize: 1,
        })
    }, []);

    const onStart = () => {
        s.start(Math.floor(Math.random()*5)+1);

    }

    return (
        <View>
          <View className="roulette-container" id="roulette-container-1">
            <View id="item-case-goods-1" className="item-case-goods">
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="1">
                    <Image className="content-img" src={img1Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="2">
                    <Image className="content-img" src={img2Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="3">
                    <Image className="content-img" src={img3Src} alt="" />
                </View>
                <View className="item-small-case restricted" data-id="4">
                    <Image className="content-img" src={img4Src} alt="" />
                </View>
            </View>
          </View>
          <View>
              <AtButton type='secondary' onClick={onStart}>开始</AtButton>
          </View> 
        </View>
      )
    }
// }

export default ScrollPage
