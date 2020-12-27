// import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitch = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      setBgcolor();
    }, 1000);
    stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', true);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', true);
  },
};

// colorSwitch.start();

const setBgcolor = () => {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));
stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));
