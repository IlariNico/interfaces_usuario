class Ficha{
    constructor(posX, posY, contexto, imageSrc,posInicial,jugador) {

        this.posInicial = posInicial
        this.posX = posX
        this.posY = posY
        this.contexto = contexto;
        this.image = new Image();
        this.image.src = imageSrc;
        this.colocada = false;

        this.jugador=jugador;
    }
    setPosition(x,y){
        this.posX = x;
        this.posY = y;
    }
    getPosition(){
        return {"x":this.posX,"y":this.posY}
    }
    getPositionInicial(){
        return this.posInicial;
        
    }
    getImage(){
        return this.image;
    }

    draw(){
        if(this.image.complete){ //ya se cargo 
            this.contexto.imageSmoothingEnabled = true;
            this.contexto.drawImage(this.image, this.posX, this.posY,45,45);
        }else{
            this.image.onload = () =>{
                this.contexto.imageSmoothingEnabled = true;
                this.contexto.drawImage(this.image, this.posX, this.posY,45,45);
            }
        }
    }

    clickedMe(x,y){
        if(!this.colocada){
            let inX = x > this.posX && x < this.posX + this.image.width
        let inY = y > this.posY && y < this.posY + this.image.height
        return inX && inY
        } 
    }
    getColocada(){
        return this.colocada
    }
    setColocada(v){
        this.colocada = v;
    }
    getJugador(){
        return this.jugador
    }
}
