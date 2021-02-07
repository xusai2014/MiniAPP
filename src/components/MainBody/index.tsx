//@ts-nocheck
import React, {useState} from 'react';
import Post from '../Post/index';
import styles from './index.module.less';
import {baseUrl} from '@/config/autoconfig';
import {request, ScrollView} from '@remax/wechat';
import {usePageEvent} from 'remax/macro';
import {View, Text, Image} from 'remax/one';

export default () => {

    debugger;
    const [list, setList] = useState([]);
    const [freshLoad, setFreshLoad] = useState(true);
    const [bottomStauts, setBottomStatus] = useState(false);

    async function getMore(cb) {
        return await request({
            url: `${baseUrl}/api/article/list/page?page=${list.length / 20 + 1}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            complete: ((result) => {
                if (result.data) {
                    const {articleList, page} = result.data.data;
                    if (list.length / 20 < page) {
                        setList(list.concat(articleList));
                    }
                    cb && cb();
                }
            })
        })
    }

    usePageEvent('onShow', () => {

        getMore();
    })


    return <ScrollView
        className={styles.container}
        enhanced={true}
        showScrollbar={false}
        refresherDefaultStyle={'white'}
        refresherBackground={'#51087b'}
        refresherEnabled={true}
        refresherTriggered={freshLoad}
        enableBackToTop={true}
        onRefresherRefresh={(e) => {
            setFreshLoad(true)
            getMore(() => {
                setFreshLoad(false);
            });
        }}
        onScrollToLower={(e) => {
            setBottomStatus(true);
            getMore(() => {
                setBottomStatus(false);
            });
        }}

        onRefresherRestore={() => {

        }}
        scrollWithAnimation={true}
        scrollY={true}
    >
        {
            list.map((v, key) => {
                return <Post key={key} {...v}></Post>
            })
        }

        {
            list.length > 0 ? (bottomStauts ? <View className={styles.loadMore}>正在加载</View> :
                <View className={styles.more} onTap={() => {
                    setBottomStatus(true);
                    getMore(() => {
                        setBottomStatus(false);
                    })
                }}>加载更多</View>) : null
        }

    </ScrollView>

}
