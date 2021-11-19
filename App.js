import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog/lib/Input';
// import FlatListBasics from './assets/classes/FlatListBasics'

//Ici nous declarons la fonction anonyme qui sera afficher comme resultat de notre application
//Nous l'appellerons Appli
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.flatListItem, textColor]}>{item.text}</Text>
  </TouchableOpacity>
);

const Appli = () => {
   /* Ici le modifications*/
   const [monChoix, setMonChoix] = useState(null);
   const [modifText, onChangeModifText] = useState("d")
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////enter un mot right/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
  const [visible, setVisible] = useState(false);
  const [motTemp, setMotTemp] = useState('');
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const showDialog = () => {
    setVisible(true);
  };

  const annulerMot = () => {
    setVisible(false);
  };

  const ajouterMot = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
    setData(listActuelle => [...listActuelle, {id: data.length.toString(), text: motTemp}]);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#696969" : "lightsteelblue";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setMonChoix(item.id);
          onChangeModifText(data[item.id].text);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////modifier un mot right//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const [visibleM, setVisibleM] = useState(false);

const showDialogM = () => {
  setVisibleM(true);
};

const annulerMotM = () => {
  setVisibleM(false);
};

const modifierMot = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  data[monChoix].text = modifText;
  setData(data);
  setVisibleM(false);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////retirer un mot right//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

const [visibleR, setVisibleR] = useState(false);

const showDialogR = () => {
  setVisibleR(true);
};

const annulerMotR = () => {
  setVisibleR(false);
};

const retirerMot = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  data[monChoix].text = '';
  setData(data);
  setVisibleR(false);
};
   ////////////////////////////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////////////////////////////////
  return(
    <View style={styles.principal}>
      {/*
      Ceci est le composant principale de notre application.
      Il contiendra toutes les parties et sous parties de cette application
      son identifiant sera "principal"
      */}

      {/*/////////////////////// Debut de l'en-tête l'application////////////////////////////////*/}

      <View style={styles.header}>
        {/*
        Cette partie contiendra l'en-tête de notre application
        Cette derniere sera formée uniquement du titre de l'aplication
        "Projet SJP5"
        son identifiant sera "header"
        */}
        <Text style={styles.title}>Projet Myra</Text>
      </View>

      {/*/////////////////////// Debut du corps de l'application/////////////////////////////////*/}

      <View style={styles.body}>
        {/*
        Cette partie contiendra tout le corps de notre application.
        Nous y trouverons plus particulierement les codes des différents blocs de l'application,
        des différentes fonctions qui s'exécuterons lorsqu'on cliquera sur tel ou tel bouton.
        Son identifiant sera "body"
        */}
        <View style={styles.left}>
          {/*Cette partie contiendra les codes des parties constituants la partie
          gauche du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'darkorchid',}]}>
            {/*Cette partie contient le code de la zone d'affichage du coté gauche de l'application*/}

          </View>

          <View style={styles.btnContent}>
            {/*Cette parie contient le code des boutons de la partie gauche de l'application*/}

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={showDialog}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={showDialogM}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={showDialogR}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          {/*Cette parie contient le code des boutons du centre de l'application*/}
          <View style={styles.centerBtnView1}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{">>"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerBtnView2}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{"<<"}</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.right}>
          {/*Cette partie contiendra les codes des parties constituants la partie
          droite du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'darkorange',}, styles.flatListContainer]}>
            {/*Cette partie contient le code de la zone d'affichage du coté droit de l'application*/}

            {/* ici est le code de la flatlist */}
            <FlatList
              data={data}
              renderItem={renderItem}
            />
          </View>

          <View style={styles.btnContent}>
            {/*Cette parie contient le code des boutons de la partie droite de l'application*/}

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={showDialog}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={showDialogM}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={showDialogR}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

      {/*/////////////////////// Debut du bas de l'application/////////////////////////////////*/}

      <View style={styles.footer}>
        {/*
        Cette partie contiendra le bas de l'application.
        Elle ne contiendra que les informations de l'application et celles du developpeur
        */}
        <Text style={styles.message}>Projet Myra V 0.0.1</Text>
        <Text style={styles.message}>fait à Douala le 16 Novembre 2021</Text>
        <Text style={styles.message}>par Ngo Makon Myra </Text>
        <Text style={styles.message}>matricule: UN17P100SJ </Text>
        <Text style={styles.message}>email: tngo@univ-catho-sjd.com</Text>

      </View>

      {/*Boite de dialogue */}
      <Dialog.Container visible={visible}>
        <Dialog.Title>Ajouter un mot</Dialog.Title>
        <Dialog.Description>
          Ajouter votre mot ici.
        </Dialog.Description>
        <DialogInput 
          placeholder="votre mot ici!"
          onChangeText = {setMotTemp}
        />
        <Dialog.Button label="Annuler" onPress={annulerMot} />
        <Dialog.Button label="Ajouter" onPress={ajouterMot} />
      </Dialog.Container>

      {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}
    {/*Boite de dialogue */}
    <Dialog.Container visible={visibleM}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Modifier votre mot ici.
        </Dialog.Description>
        <DialogInput 
          // placeholder="votre mot ici!"
          onChangeText = {onChangeModifText}
          value={modifText}
        />
        <Dialog.Button label="Annuler" onPress={annulerMotM} />
        <Dialog.Button label="Modifier" onPress={modifierMot} />
    </Dialog.Container>

     {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}
    {/*Boite de dialogue */}
    <Dialog.Container visible={visibleR}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Voulez vous vraiment supprimer ce mot?
        </Dialog.Description>
        <Dialog.Button label="Non" onPress={annulerMotR} />
        <Dialog.Button label="OUi" onPress={retirerMot} />
    </Dialog.Container>
    </View>
  );
}


/*
Cette partie ne traite que de la mise en forme des différents composants de l'application
*/

const styles = StyleSheet.create({

  /* Mise en forme du composant principal */

  principal: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'whitesmoke',
    flexDirection: "column"
  },

  /* Mise en forme de l'en-tête de l'application */
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
  },

  /* Mise en forme du corps de l'application */

  body: {
    flex: 8,
    flexDirection: "row",
  },
  right:{
    flex: 5,
  },
  center: {
    flex: 1.5,
  },
  left: {
    flex: 5,
  },
  flatListItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  //Cette partie se consacre aux sous partie contenue dans les blocs gauche et 
  //droit de l'application

  textContent:{
    flex: 8,
    // borderColor: "blue",
    borderWidth: 2,
  },
  btnContent:{
    flex: 1,
    marginTop: 1,
    flexDirection: 'row'
  },
  btnView:{
    flex: 1,
    borderWidth: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView1:{
    borderWidth: 1,
    margin: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView2:{
    borderWidth: 1,
    margin: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  item: {
    marginVertical: 1,
    marginHorizontal: 1,
  },

  /* Mise en forme du bas de l'application */

  footer: {
    flex: 0.8,
    paddingTop: 5,
    paddingLeft: 5,
  },
  message: {
    fontSize: 10,
    color: 'darkgray',
  },

});

/* Ici nous demandons l'exportation de l'application pour l'execution dans un terminal */
export default Appli;