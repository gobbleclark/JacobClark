import React, { useEffect, useState } from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardContent, 
  IonItem,   
  IonButton,
  IonGrid, 
  IonRow, 
  IonCol, 
  IonSlides, 
  IonSlide,
  IonImg,
 } from '@ionic/react';
 import moment from 'moment';
 import JakeHome from '../image/JakeHome.jpg'
 import axios from 'axios'
import { AdvancedImage } from '@cloudinary/react';
import {fill} from "@cloudinary/base/actions/resize";
import {Cloudinary} from "@cloudinary/base";
import ReactPlayer from 'react-player';
const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('/api/posts')
    .then( res => {
      setPosts(res.data)
    })
  },[])
  
  const getImage = (public_id) => {
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dw83pqykj'
      }
    });
    const myImage = cld.image(public_id); 
      myImage.resize(fill().width(400).height(400));
      return (
        <AdvancedImage cldImg={myImage} />
      )
  }

  const calculateDays = () => {
    var deathDate = moment("2021-05-28")
    var today = moment()
    return (
      today.diff(deathDate, "days")
    )
  }
  return (
    <>
    <IonPage>
      <IonContent color='dark' >
        <h1 style={{textAlign: 'center', fontSize: '40px'}}> Jacob Clark </h1>
        <div style={{display: 'flex', justifyContent: 'center',}}>
        <ReactPlayer url='https://youtu.be/x8TWf8CxTes'
                    playing="true"
                    loop="true"
                    controls='true'
                     />
        </div>
        <h1 style={{textAlign: 'center', fontSize: '25px'}}> It's been {calculateDays()} days since you left, but your legacy lives on forever. </h1>
        <p style={{textAlign: 'center', fontSize: '20px', paddingTop: '25px'}}> Memories of Jake </p>
        {posts.map( p => (
        <IonCard color='light'>
          <IonCardHeader>
            <IonCardSubtitle >By: {p.name}</IonCardSubtitle>
            <IonCardTitle>{p.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div>
              {getImage(p.image)}
            </div>
            <div>
            {p.text}
            </div>
      </IonCardContent>
        </IonCard>
        ))}

      </IonContent>
    </IonPage>
    </>
  )
}

export default Home;
