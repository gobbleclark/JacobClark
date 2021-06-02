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
const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('/api/posts')
    .then( res => {
      setPosts(res.data)
    })
  },[])
  const slideOpts = {
    initialSlide: 1,
    speed: 400
  };

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
        <IonImg style={{width: '100%', height: '100%'}} src={JakeHome} /> 
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
            {p.text}
      </IonCardContent>
        </IonCard>
        ))}

      </IonContent>
    </IonPage>
    </>
  )
}

export default Home;
