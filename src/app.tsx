import * as React from 'react';
import './app.css';
import {useEffect, useState} from "react";
import {request} from "@remax/wechat";
import {baseUrl} from "@/config/autoconfig";
import {Text, View} from "remax/one";
import styles from "@/pages/index/index.css";

const App: React.FC =  (props) => {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (!load) {
            try {
                request({
                    url: `${baseUrl}/api/weixin/enable`,
                    // @ts-ignore
                    headers: {'Access-Control-Allow-Origin': '*'},
                    complete: ((result: any) => {
                        debugger;
                        if(result.data.data.enable === '1') {
                            setLoad(true);
                        }

                    })
                });
            } catch (e) {
                setLoad(true);
            }

        }

    },[load])

    return !load? <View><Text>车积极小程序</Text></View> : props.children as React.ReactElement
};

export default App;
