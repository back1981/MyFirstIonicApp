export class Note {
    name:string;
    images: string[]; //base64 images
    content: string;

    constructor(name, content = '', images = null) {
        this.name = name;
        this.content = content;
        this.images = images;
    }

}