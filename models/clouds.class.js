class Cloud extends MovableObject{
    y = 20;
    height = 100;
    width = 200;

      // Liste der Wolkenbilder
      cloudImages = [
       'img/clouds/1.png',
       'img/clouds/2.png' 
    ];
    constructor(){
        super();
         // Zufällig ein Bild aus der Liste auswählen
         let randomImage = this.cloudImages[Math.floor(Math.random() * this.cloudImages.length)];
         this.loadImage(randomImage);
    
        this.x =  Math.random() * 500; //Zahlen zwischen 200 und 700
    }
}
