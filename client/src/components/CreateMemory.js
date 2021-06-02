import React, {useEffect, useState} from 'react';
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
    IonLabel
   } from '@ionic/react';
import axios from 'axios';
import { push } from 'ionicons/icons';

const CreateMemory = (props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/posts', {
            title: title,
            text: body,
            name: author
        })
        .then( res => {
            if(res.status === 200) {
                alert("Your memory has sucessfully been added.")
                props.history.goBack()
            }
            else {
                alert("An unexpected error ocurred. Please try again and fill out all fields.")

            }
            
        })
    }
    return (
        <>
        <IonPage>
            <IonContent color='dark'>
               <IonGrid>
                   <IonRow>
                       <IonCol>
                           <IonItem color='primary'>
                                <IonLabel position="stacked"> Title</IonLabel>
                                <IonInput placeholder="click here to enter" value={title} onIonChange={e => setTitle(e.detail.value)}> </IonInput>
                           </IonItem>
                       </IonCol>
                   </IonRow>
                   <IonRow>
                       <IonCol>
                           <IonItem color='primary'>
                                <IonLabel position="stacked"> Description of memory </IonLabel>
                                <IonInput placeholder="click here to enter" value={body} onIonChange={e => setBody(e.detail.value)}> </IonInput>
                           </IonItem>
                       </IonCol>
                   </IonRow>
                   <IonRow>
                       <IonCol>
                           <IonItem color='primary'>
                                <IonLabel position="stacked"> Author </IonLabel>
                                <IonInput placeholder="click here to enter" value={author} onIonChange={e => setAuthor(e.detail.value)}> </IonInput>
                           </IonItem>
                       </IonCol>
                   </IonRow>
               </IonGrid>
               <IonButton onClick={handleSubmit} color='secondary' expand='full'> Submit Memory </IonButton>
            </IonContent>
        </IonPage>
        </>
    )
} 

export default CreateMemory;