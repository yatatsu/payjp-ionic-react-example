import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const { Payjp } = window as any;
const payjp = Payjp('pk_test_0383a1b8f91e8a6e3ea0e2a9');
const elements = payjp.elements();
const cardElement = elements.create('card');

const handleSubmit = async (e: any) => {
  const r = await payjp.createToken(cardElement);
  console.log(r);
}

const Home: React.FC = () => {
  console.log("location.origin", window.location.origin);
  console.log("addEventListener", window.addEventListener);
  console.log("postMessage", window.postMessage);
  console.log("document", document);
  useEffect(() => {
    cardElement.mount('#checkout');
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Checkout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Checkout</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <div id="checkout"></div>
        <IonButton onClick={handleSubmit}>Checkout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
