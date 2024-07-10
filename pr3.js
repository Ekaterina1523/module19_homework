class ElectricalDevice {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
    plugin() {
      this.pluggedIn = true;
      console.log(`${this.name} включен в розетку.`);
    }
  
    calculatePowerConsumption() {
      if (this.pluggedIn) {
        console.log(`${this.name} потребляет ${this.power} вт.`);
      } else {
        console.log(`${this.name} не подключен к розетке.`);
      }
    }
  }
  
  class Lamp extends ElectricalDevice {
    constructor(name, power, brightness) {
      super(name, power);
      this.brightness = brightness;
    }
  
    adjustBrightness() {
      console.log(`${this.name} имеет яркость ${this.brightness}%.`);
    }
  }
  
  class Computer extends ElectricalDevice {
    constructor(name, power, processor) {
      super(name, power);
      this.processor = processor;
    }
  
    checkProcessor() {
      console.log(`${this.name} использует процессор ${this.processor}.`);
    }
  }
  
  const deskLamp = new Lamp('настольная лампа', 60, 75);
  const desktopComputer = new Computer('компьютер', 300, 'intel core i7');
  
  deskLamp.plugin();
  desktopComputer.plugin();
  
  deskLamp.calculatePowerConsumption();
  desktopComputer.calculatePowerConsumption();
  
  deskLamp.adjustBrightness();
  desktopComputer.checkProcessor();