class Casillero{
    constructor(context,posX,posY,tamficha){
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.gano=false;
        this.tamFicha = tamficha
        //this.ficha = new Ficha(posX,posY,context,"../img/ficha_samid.png",{"x":posX,"y":posY});
        this.ficha = null
    }

    draw(){
        if(this.gano)
            this.context.fillStyle = "#ffff00"
        else
            this.context.fillStyle = "#00000099"
        this.context.fillRect(this.posX,this.posY,this.tamFicha*2,this.tamFicha*2)
        let centroY = this.posY + this.tamFicha
        let centroX = this.posX + this.tamFicha
        this.context.beginPath();
        this.context.arc(centroX, centroY, this.tamFicha*0.8, 0, Math.PI * 2);
        this.context.fillStyle = "#f5f5f550"
        this.context.fill();
        
    }
    setFicha(ficha){
        this.ficha = ficha;
    }
    getFicha(){
        return this.ficha;
    }
    getPosition(){
        return {"x":this.posX,"y":this.posY}
    }
}