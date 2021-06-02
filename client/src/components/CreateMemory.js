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
    IonLabel,
    IonTextarea
   } from '@ionic/react';
import axios from 'axios';
import { push } from 'ionicons/icons';
import {Image, Video, Transformation, CloudinaryContext,} from 'cloudinary-react';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/base";
import {fill, scale} from "@cloudinary/base/actions/resize";
const CreateMemory = (props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dw83pqykj'
        }
      });
  
      const myImage = cld.image(image); 
      myImage.resize(fill().width(400).height(400));

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/posts', {
            title: title,
            text: body,
            name: author,
            image: image
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
        const successCallBack = (res) => {
                setImage(res.info.public_id)
                alert("Photo was uploaded sucessfully")
        }

        const failureCallBack = (res) => {
            alert("adding photo / video failed")
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
                           <IonItem  color='primary'>
                                <IonLabel position="stacked"> Description of memory </IonLabel>
                                    <div style={{height: '100px', width: '100%'}}>
                                    {/* <IonInput autocorrect="on" placeholder="click here to enter" value={body} onIonChange={e => setBody(e.detail.value)}>  */}
                                    <IonTextarea placeholder="click here to enter" autoCorrect={true} autoGrow={true} spellcheck={true} value={body} onIonChange={e => setBody(e.detail.value)} > 
                                    </IonTextarea>
                                    {/* </IonInput> */}
                                    </div>
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
                       <IonRow>
                       <IonCol>
                           <IonItem color='dark'>
                           <IonLabel position="stacked"> add image or video </IonLabel>
                           <WidgetLoader />   
                                <Widget
                                    sources={['local', 'camera',]} // set the sources available for uploading -> by default
                                    // all sources are available. More information on their use can be found at 
                                    // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                                    // sourceKeys={{dropboxAppKey: '1dsf42dl1i2', instagramClientId: 'd7aadf962m'}} // add source keys 
                                    // and ID's as an object. More information on their use can be found at 
                                    // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                                    resourceType={'auto'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
                                    cloudName={'dw83pqykj'} // your cloudinary account cloud name. 
                                    // Located on https://cloudinary.com/console/
                                    uploadPreset={'jake_preset'} // check that an upload preset exists and check mode is signed or unisgned
                                    buttonText={'Upload'} // default 'Upload Files'
                                    style={{
                                        color: 'white',
                                        border: 'none',
                                        width: '120px',
                                        backgroundColor: '#397fff',
                                        borderRadius: '10px',
                                        height: '25px',
                                        }} // inline styling only or style id='cloudinary_upload_button'
                                    folder={'Jacob'} // set cloudinary folder name to send file
                                    cropping={true} // set ability to crop images -> default = true
                                    onSuccess={successCallBack} // add success callback -> returns result
                                    onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
                                    logging={false} // logs will be provided for success and failure messages, 
                                    // set to false for production -> default = true
                                    customPublicId={'sample'} // set a specific custom public_id. 
                                    // To use the file name as the public_id use 'use_filename={true}' parameter
                                    // eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
                                    // eager={null} // add eager transformations -> deafult = null
                                    use_filename={false} // tell Cloudinary to use the original name of the uploaded 
                                    // file as its public ID -> default = true,

                                    // 👇 FOR SIGNED UPLOADS ONLY 👇

                                    // generateSignatureUrl={'http://my_domain.com/api/v1/media/generate_signature'} // pass the api 
                                    // // endpoint for generating a signature -> check cloudinary docs and SDK's for signing uploads
                                    // apiKey={00000000000000} // cloudinary API key -> number format
                                    // accepts={'application/json'} // for signed uploads only -> default = 'application/json'
                                    // contentType={'application/json'} // for signed uploads only -> default = 'application/json'
                                    // withCredentials={true} // default = true -> check axios documentation for more information
                                    // unique_filename={true} // setting it to false, you can tell Cloudinary not to attempt to make 
                                    // the Public ID unique, and just use the normalized file name -> default = true
                                />
                        
                                <AdvancedImage cldImg={myImage} />
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