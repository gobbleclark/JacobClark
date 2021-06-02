import React, {useState, useEffect} from 'react'
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
    IonInput,
    IonAlert,
    IonLabel,
    IonTextarea,
    IonSearchbar
   } from '@ionic/react';
import axios from 'axios';
const Search = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")

    useEffect( () => {
        axios({
            method: 'get',
            url: '/search',
            params: {
                method: search
            }
        })
        .then( res => {
            setPosts(res.data)
        })
    },[search])
    return (
        <>
        <IonPage>
            <IonContent color='dark'>
                <IonSearchbar onIonChange={e => setSearch(e.detail.value)} placeholder="Search author names or any keywords" color='primary' style={{padding: '20px', paddingTop: '60px'}} value={search}> </IonSearchbar>
        {posts.map( p => (
                <IonCard key={p.id} color='light'>
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

export default Search;