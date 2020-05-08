export const fontOptions = {
  'font-1': 'Шрифт Montserrat',
  'font-2': 'Шрифт Open Sans',
  'font-3': 'Шрифт Merriweather',
  'font-4': 'Шрифт Playfair Display',
  'font-5': 'Шрифт EB Garamond',
  'font-6': 'Шрифт Jura',
  'font-7': 'Шрифт Cormorant',
  'font-8': 'Шрифт Alegreya SC',
  'font-9': 'Шрифт Cormorant Infant',
  'font-10': 'Шрифт Spectral SC',
};

export const borderOptions = {
  'message-border-0': 'Без выделения',
  'message-border-1': 'В рамочку',
  'message-border-2': 'Обвести чёрточками',
  'message-border-3': 'Темнее фон',
  'message-border-4': 'Светлее фон',
};

const sounds = [
  'https://www.soundjay.com/phone/cell-phone-1-nr0.wav',
  'https://www.fesliyanstudios.com/soundeffects/2019-06-26Farm/Sheep-Lamb-Bah-D-www.fesliyanstudios.com.mp3',
  'https://www.fesliyanstudios.com/soundeffects/2019-06-24/Ins_Out/Ori/Hard-Slap-B-www.fesliyanstudios.com.mp3',
];

export const soundOptions = sounds.map((src, index) => {
  const sound = new Audio(src);
  sound.loop = false;
  return {
    key: `sound-${index}`,
    value: `Звук-${index}`,
    src,
    sound,
  };
});

const soundVolume = [0, 10, 20, 40, 60, 80, 100];

export const soundVolumeOptions = soundVolume.map((v) => ({
  key: `v`,
  value: `${v}%`,
}));
