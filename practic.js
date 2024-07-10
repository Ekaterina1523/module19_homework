function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }
  
  ElectricalDevice.prototype.plugin = function() {
    this.pluggedIn = true;
    console.log(this.name + ' включен в розетку.');
  }
  
  ElectricalDevice.prototype.calculatePowerConsumption = function() {
    if (this.pluggedIn) {
      console.log(this.name + ' потребляет ' + this.power + ' вт.');
    } else {
      console.log(this.name + ' не подключен к розетке.');
    }
  }
  
  function Lamp(name, power, brightness) {
    ElectricalDevice.call(this, name, power);
    this.brightness = brightness;
  }
  
  Lamp.prototype = Object.create(ElectricalDevice.prototype);
  
  Lamp.prototype.adjustBrightness = function() {
    console.log(this.name + ' имеет яркость ' + this.brightness + '%.');
  }
  
  function Computer(name, power, processor) {
    ElectricalDevice.call(this, name, power);
    this.processor = processor;
  }
  
  Computer.prototype = Object.create(ElectricalDevice.prototype);
  
  Computer.prototype.checkProcessor = function() {
    console.log(this.name + ' использует процессор ' + this.processor + '.');
  }
  
  var deskLamp = new Lamp('настольная лампа', 60, 75);
  var desktopComputer = new Computer('компьютер', 300, 'Intel Core i7');
  
  deskLamp.plugin();
  desktopComputer.plugin();
  
  deskLamp.calculatePowerConsumption();
  desktopComputer.calculatePowerConsumption();
  
  deskLamp.adjustBrightness();
  desktopComputer.checkProcessor();