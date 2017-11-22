/* tslint:disable:no-switch-case-fall-through */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import TextareaItem from '../textarea-item';

export default function prompt(title, message, callbackOrActions,
                               type = 'default', defaultValue = '', placeholders = ['', ''],
                               platform = 'ios', maxLength) {
  if (!callbackOrActions) {
    // console.log('Must specify callbackOrActions');
    return {
      close: () => {
      },
    };
  }

  const prefixCls = 'yy-yymodal';

  let data: any = {};

  let textareaItemRef;

  function onChange(e) {
    const target = e.target;
    const inputType = target.getAttribute('type');
    data[inputType] = target.value;
  }

  function onTextareaItemChange(val) {
    data.textarea = val;
  }

  function onBlur(e) {
    const target = e.target;
    target.className = '';
  }

  function onFocus(e) {
    const target = e.target;
    target.className = `${prefixCls}-input--focus`;
  }

  let inputDom;

  const focusFn = function (input) {
    setTimeout(() => {
      if (input) {
        input.focus();
      }
    }, 500);
  };

  switch (type) {
    case 'textarea':
      inputDom = (
        <div className={`${prefixCls}-input-container`}>
          <div className={`${prefixCls}-textarea`}>
            <TextareaItem
              defaultValue={defaultValue}
              ref={input => {
                textareaItemRef = input;
                focusFn(input);
              }}
              onChange={onTextareaItemChange}
              placeholder={placeholders[0]}
              autoHeight
              count={maxLength || 0}
            />
          </div>
        </div>
      );
      break;
    case 'login-password':
      inputDom = (
        <div className={`${prefixCls}-input-container`}>
          <div className={`${prefixCls}-input`}>
            <input
              type="text"
              value={data.text}
              defaultValue={defaultValue}
              ref={input => focusFn(input)}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholders[0]}
            />
          </div>
          <div className={`${prefixCls}-input`}>
            <input
              type="password"
              value={data.password}
              defaultValue=""
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder={placeholders[1]}
            />
          </div>
        </div>
      );
      break;
    case 'secure-text':
      inputDom = (
        <div className={`${prefixCls}-input-container`}>
          <div className={`${prefixCls}-input`}>
            <input
              type="password"
              value={data.password}
              defaultValue=""
              ref={input => focusFn(input)}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder={placeholders[0]}
            />
          </div>
        </div>
      );
      break;
    case 'plain-text':
    case 'default':
    default:
      inputDom = (
        <div className={`${prefixCls}-input-container`}>
          <div className={`${prefixCls}-input`}>
            <input
              type="text"
              value={data.text}
              defaultValue={defaultValue}
              ref={input => focusFn(input)}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder={placeholders[0]}
            />
          </div>
        </div>
      );
      break;
  }

  let content = (
    <div>
      <label>
        <span>{message}</span>
        {inputDom}
      </label>
    </div>
  );

  let div: any = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    // 直接获取 TextareaItem 里的值重置
    textareaItemRef.textareaRef.value = '';

    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function getArgs(func) {
    const text = data.text || defaultValue || '';
    const password = data.password || '';
    if (type === 'login-password') {
      return func(text, password);
    } else if (type === 'secure-text') {
      return func(password || defaultValue);
    } else if (type === 'textarea') {
      return func(data.textarea || defaultValue || '')
    }
    return func(text);
  }

  let actions;
  if (typeof callbackOrActions === 'function') {
    actions = [
      {text: '取消'},
      {
        text: '确定', onPress: () => {
        getArgs(callbackOrActions);
      }
      },
    ];
  } else {
    actions = callbackOrActions.map(item => {
      return {
        text: item.text,
        onPress: () => {
          if (item.onPress) {
            return getArgs(item.onPress);
          }
        },
      };
    });
  }

  const footer = actions.map((button) => {
    const orginPress = button.onPress || function () {
    };
    button.onPress = () => {
      const res = orginPress();
      if (res && res.then) {
        res.then(() => {
          close();
        });
      } else {
        close();
      }
    };
    return button;
  });

  ReactDOM.render(
    <Modal
      visible
      transparent
      prefixCls={prefixCls}
      title={title}
      closable={false}
      maskClosable={false}
      transitionName="am-zoom"
      footer={footer}
      maskTransitionName="am-fade"
      platform={platform}
    >
      <div style={{zoom: 1, overflow: 'hidden'}}>{content}</div>
    </Modal>, div,
  );

  return {
    close,
  };
}
