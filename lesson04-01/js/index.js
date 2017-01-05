/**
 * 04-01组件生命周期的原理
 */


// 组件生命周期
/**
 *
 * 01 首先是它的初始化阶段
 * 02 是它装载
 *
 *
 *      init     初始化阶段
 *          defaultProps    初始化
 *          state           初始化状态
 *
 * 以下分为三个阶段
 *      mount    装载过程
 *          will
 *          did
 *
 *      update   调用N次
 *          props  做为更改
 *
 *          render(){
 *              return <Item group={info} />
 *              render(123);
 *              render(123);
 *              render(abc);
 *          }
 *      unmount  卸载过程
 *
 *
 *
 */
