回到渲染即： this.props.children()
在this.props.children的基础上采用了调用的形式
解决了什么问题i？
回调渲染可以实现外层组件与内层数据的传递，可以很好的实现组件分离，以及逻辑复用，render props解决方案也是由此而来。