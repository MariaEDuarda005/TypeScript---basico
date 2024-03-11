import React from "react";

interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]

    //8 - enum
    category: Category
}

export enum Category{
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
}

//const SecondComponent = (props: Props) => {
    
const SecondComponent = ({title,content,commentsQty,tags,category}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>Quantidade de comentarios: {commentsQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
            </div>
            <h3>Categoria: {category}</h3>
        </div>
    )
}

export default SecondComponent