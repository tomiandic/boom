import React from 'react';
import * as classes from "../styles/post.module.css"
import ReactMarkdown from 'react-markdown'
import { StaticImage } from "gatsby-plugin-image"

const BlogPost = () => {
    return (
        <article className={classes.postArticle}>
            <div className={classes.titleHolder}>
                <StaticImage className={classes.postImage} src="../images/boat.jpg" />
                <div className={classes.imgOverlay}>
                   
                    <h1>Symply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</h1>
                </div>
            </div>
            
            <div className={classes.articleDetails}>
                <p className={classes.postCat}>Đuro Đurić</p>
                <p className={classes.postCat}>22/6/2022</p>
                <p className={classes.postCat}>Post cat</p>
                
            </div>
               
            <p className={classes.articleText}>
             <ReactMarkdown>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

                Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

                Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
                * Nulla facilisi. Mauris eleifend felis a purus pretium egestas
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla velit sit amet lectus tincidunt, quis suscipit tortor maximus. Vestibulum facilisis sit amet tortor sed vestibulum.

Sed nec egestas leo. Nam tristique tincidunt venenatis. Vestibulum vel justo tincidunt, aliquet sapien vitae, vestibulum ex.

Donec commodo, nunc in posuere condimentum, diam est gravida ex, quis varius nisi neque et nunc.
* Nulla facilisi. Mauris eleifend felis a purus pretium egestas
                
                </ReactMarkdown> 
            </p>
        </article>
    )
}
export default BlogPost