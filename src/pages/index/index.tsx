import React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';
import AVATAR_LIST from "../../config/CONSTANTS";
import MainBody from '../../components/MainBody';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.containerTop}>
        {
          Object.keys(AVATAR_LIST).map((key, index) => {

            return (<View key={index} className={styles.item} >
              <Image src={AVATAR_LIST[key].url} className={styles.img} />
              <Text>{AVATAR_LIST[key].name}</Text>
            </View>)
          })
        }
      </View>
        <MainBody></MainBody>
    </View>
  );
};
