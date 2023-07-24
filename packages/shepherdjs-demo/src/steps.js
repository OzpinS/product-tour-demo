import { offset } from '@floating-ui/dom';
console.log(offset({ mainAxis: 30, crossAxis: 0 }))

export const steps = [
  {
    id: 'hello',
    title: 'welcome',
    text: ['hello world! 👋'],
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Exit',
        type: 'cancel',
        action() {
          this.cancel()
        },
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next',
        action() {
          document.querySelector('#mock-click').click()
          this.next()
        },
      }
    ],
  },
  {
    id: 'css',
    title: 'overwrite style',
    text: ['hello world! 👋'],
    classes: 'custom-class-1',
    buttons: [
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back',
        action() {
          this.back()
        },
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next',
        action() {
          this.next()
        },
      }
    ],
  },
  {
    id: 'intro',
    attachTo: { element: '#first-element', on: 'right' },
    floatingUIOptions: {
      middleware: [offset({ mainAxis: 30 })]
    },
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      // {
      //   classes: 'shepherd-button-secondary',
      //   text: 'Exit',
      //   type: 'cancel'
      // },
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back',
        action() {
          this.back()
        },
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next',
        action() {
          this.next()
        },
      }
    ],
    // title: 'Welcome to React-Shepherd!',
    text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  }, {
    id: 'setp2',
    title: '第二步',
    text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
    buttons: [
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back',
        action() {
          this.back()
        },
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next',
        action() {
          this.next()
        },
      }
    ],
  }, {
    id: 'setp3',
    title: '第三步',
    text: [
      'React-Shepherd is a JavaScript library for guiding users through your React app.',
      'React-Shepherd is a JavaScript library for guiding users through your React app.'
    ],
    attachTo: { element: '#text-element', on: 'right' },
    floatingUIOptions: {
      middleware: [offset({ mainAxis: 30 })]
    },
    buttons: [
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back',
        action() {
          this.back()
        },
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Done',
        type: 'done',
        action() {
          this.complete()
        },
      }
    ],
  }
];
