import * as React from 'react';
import {request} from '@remax/wechat';
import {baseUrl} from '@/config/autoconfig';
import './app.css';
import {useState} from "react";
import { Text } from '@remax/one';


const App: React.FC =  (props) => {

    const [load, setLoad] = useState(false)
    if (!load) {
        request({
            url: `${baseUrl}/api/wechat/config`,
            // @ts-ignore
            headers: {'Access-Control-Allow-Origin': '*'},
            complete: ((result:any) => {
                if (result.data) {
                    setLoad(true);
                    return;
                }
            })
        });

    }



    if(!load) {
        return <Text>3333</Text>;
    }


    return props.children as React.ReactElement
};

export default App;
