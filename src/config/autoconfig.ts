export const navList = [
    {
        name: '快速开始',
        value: `
            <h1>安装脚手架</h1>
            <pre>npm i autohome-cli -g</pre>
            <h1>通过脚手架创建项目</h1>
            <pre>auto proName(你的项目名称)</pre>
            <h1>脚手架功能</h1>
            <p>1、语言：目前支持TS和JS两种语言</p>
            <p>2、终端：目前支持PC、移动、大屏3种设备</p>
        `
    },
    {
        name: '主题配置',
        value: `
            <h1>全局less变量和方法</h1>
            <p>1、模板中使用了css-module用来解决样式冲突问题。</p>
            <p>2、在根目录themes文件中创建的less文件都会被注入到所有样式文件头部，所以在开发时无需导入themes中的文件，即可使用在themes中定义好的变量及方法。</p>
            <p>3、具体示例可以在模板中查看。</p>
            `
    },
    {
        name: 'services层',
        value: `
            <h1>umi-request</h1>
            <p>请求方法是基于umi-request，如有特殊需求可自行改造。</p>
            <p>参考地址：<a target="_blank" href='https://github.com/umijs/umi-request/blob/HEAD/README_zh-CN.md'>umi-request</a></p>
            <h1>省心省力的api管理</h1>
            <p>模板中内置了sevices层，开发只需要按照约定的方式在serivece文件夹下的api文件中配置接口地址即可，不需要关心请求方法。</p>
        `
    },
    {
        name: '内置antd',
        value: `
        <h1>基础组件库</h1>
        <p>目前使用antd作为开发的基础组件库，需要ui在设计的时候考虑兼容antd的风格。</p>
        <h1>已配置好按需加载</h1>
        <p>参考地址：<a target="_blank" href='https://ant.design/components/overview-cn/'>antd</a></p>

    `
    },
    {
        name: ' use-immer',
        value: `
        <h1>解决了引用对象改变组件不刷新问题</h1>
        <pre>
// 定义
    const [state, setState] = useImmer({
        people: [
            { name: '马云', englishName: 'Jack Ma' },
            { name: '马化腾', englishName: 'Pony Ma' },
            {  name: '李彦宏', englishName: 'Robin Li' }
        ]
    })
    
    // 直接在原有的属性上修改即可
    setState(state => {
        state.people[2].name = 'Robin Lee'
    })
        </pre>
        <h1>可以管理更加复杂的状态变化</h1>
        <pre>
// 定义
    const [state, setState] = useImmer({
        name: 'mr.auto',
        age: 12,
        email: '22222@qq.com'
    })

    // 修改名称和年龄
    setState(state => {
        state.name = 'new Name'
        state.age = 25
    })

    // 修改邮箱
    setState(state => {
        state.email = 'test@163.com'
    })
        </pre>
        <p>参考地址：<a target="_blank" href='https://www.jianshu.com/p/820ab7faab39'>use-immer</a></p>
 
    `
    },
    {
        name: ' umi-hook',
        value: `
        <h1>内置了非常多常用的自定义hook</h1>
        <p>参考地址：<a target="_blank" href='https://hooks.umijs.org/zh-CN/hooks/async'>umi-hook</a></p>
    `
    },
    {
        name: ' 联系作者',
        value: `
        <h1>如有疑问请联系作者</h1>
        <p>钉钉中发消息给 <罗龙>，或邮箱luolong@autohome.com.cn</p>
    `
    }
]

export const baseUrl = 'https://www.chejj.cc'
export const Server_baseUrl = process.env.NODE_ENV === 'development'?'http://localhost:4000':'http://localhost:4000'
