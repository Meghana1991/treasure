export class Recipe{
    public id:number;
    public name:String;
    public imagePath:String;
    public description:String;

    constructor(id,name,desc,imgPath){
        this.id = id;
        this.name = name;
        this.imagePath = imgPath;
        this.description = desc;
    }
}