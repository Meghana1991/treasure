export class Recipe{
    public name:String;
    public imagePath:String;
    public description:String;

    constructor(name,desc,imgPath){
        this.name = name;
        this.imagePath = imgPath;
        this.description = desc;
    }
}