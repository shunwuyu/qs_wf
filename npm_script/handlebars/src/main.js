import $ from 'jquery';
import template from '../template/user.hbs';

const user = {
  name: '旅梦',
  age: 18,
  photo: 'http://a4.qpic.cn/psb?/V14DErnC1ASv81/Kyn*BRbsDndM8.I1Dk618G5c22Nk5DBOLV3nxbuXIek!/c/dPMAAAAAAAAA&ek=1&kp=1&pt=0&bo=7gI2BQAAAAAAAPk!&vuin=754211506&tm=1515052800&sce=60-2-2&rf=0-0'
}

$(function() {
  let item = $(template(user));
  item.appendTo($('#root'));
})

