const pages = ['pages/index/index'];
const color = '#51087b';

import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';
// @ts-ignore
import { AppConfig as WebAppConfig } from 'remax/web';

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: color,
    navigationBarTitleText: '车唧唧',
  },
};

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: '车唧唧',
    titleBarColor: color,
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: '车唧唧',
    navigationBarBackgroundColor: color,
  },
};

export const web: WebAppConfig = {
  pages,
  title: '车唧唧',
};
