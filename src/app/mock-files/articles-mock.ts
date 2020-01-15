import { Article } from '../classes/article';
import { Section } from '../classes/section';


export const ARTICLE1: Article = {
    id: 1,
    title: 'JAVA 8',
    resume: 'This is a short description of Java 8',
    sections: [
        new Section(1, "Introduction", "introduction of java 8"),
        new Section(2, "What's new", "We will describe all the features of the java 8"),
        new Section(3, "Conclusion", "Conclusion of java 8")
    ]
};