
function Article({title, info, bgColor}) {
     
    const articleBG = bgColor + " p-10 border-b-2 border-white"

    return (
        <article className={articleBG}>
            <h3 className="py-2 text-xl font-medium">{title}</h3>
            <p>{info}</p>   
        </article>
    )

}

export default Article