import React, {useState} from "react";
import {View, Text, Image} from 'remax/one';
import AVATAR_LIST from '../../config/CONSTANTS';
// @ts-ignore
import styles from './index.module.less';
import Share from "../Share";

// @ts-ignore
export default ({
                    o_name = '',
                    o_ctime = '',
                    t_desc = '',
                    t_img,
                    t_title = '',
                    o_url = '',
                    t_tags = [],
                    _id,
                    single = false
                }) => {

    const [expand, setExpand] = useState(single);

    const getImgUrl = (o_name:any) => {
        let url = '/auto-sales-cube.png';
        Object.keys(AVATAR_LIST).map((key) => {
            if (AVATAR_LIST[key].name === o_name) {
                url = AVATAR_LIST[key].url
            }
        })
        return url;

    }

    return <View className={styles.container} style={{...single ? {border: "none"} : {}}}
    >
        <Image
            src={getImgUrl(o_name)} className={styles.avatar}
            onTap={() => {
                 //Router.push(`/Personal/${getKey(o_name)}`)
             }}
        />
        <View className={styles.content}>
            <View style={{cursor: 'pointer'}} onTap={() => {
                //Router.push(`/post/${_id}`)
            }}>
                <View className={styles.name}>{o_name}</View>
                <View className={styles.title}>{t_title}</View>

            </View>
            {
                t_desc ? <View style={{cursor: 'pointer'}} className={styles.desc} onTap={() => {
                    //Router.push(`/post/${_id}`)
                }}>
                    &nbsp;--&nbsp;{
                    expand ? t_desc :
                        t_desc.length > 120 ? <>{t_desc.substr(0, 120) + " ......"}</> : t_desc
                }
                </View> : null
            }

            <View className={styles.expand}>
                <Text onTap={(e) => {
                    e.stopPropagation();
                    setExpand(!expand);
                }} className={styles.more}>{t_desc ? (!expand ? '查看更多' : '收起') : ''}</Text>
                <Text className={styles.time}>发布时间 {o_ctime}</Text>
            </View>
            <View className={styles.tags}>
                {
                    t_tags.map((v) => {
                        return v ? <Text className={styles.tagItem}>{`#${String(v).trim()}`}</Text> : null;
                    })
                }
            </View>
            <Text  className={styles.href}
            >{o_url.length > 30 ? o_url.substr(0, 30) + ' ...' : o_url}</Text>
            <View className={styles.extraContent}>
                <Image mode={'widthFix'} className={styles.contentBlock} src={t_img}/>
            </View>
        </View>
    </View>
}
